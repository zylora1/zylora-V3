'use client';

import React, { useEffect, useState } from 'react';
import { useEditorEngine } from '@/components/store/editor';
import { applyAstComponentInsert } from '../../../../ast-actions';

interface ComponentItem {
    name: string;
    path: string;
    description: string;
}

export const ComponentsTab = () => {
    const editorEngine = useEditorEngine();
    const [components, setComponents] = useState<ComponentItem[]>([
        { name: 'PricingCard', path: 'src/components/PricingCard.jsx', description: 'Interactive pricing table card' },
        { name: 'Button', path: '', description: 'Interactive primary button' },
        { name: 'Card', path: '', description: 'Container with shadow and border' },
    ]);

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const files = await editorEngine.fileSystem.listAll();
                const compFiles = files.filter((f) =>
                    f.type === 'file' && f.path.startsWith('src/components/') && (f.path.endsWith('.jsx') || f.path.endsWith('.tsx'))
                );
                if (compFiles.length > 0) {
                    const items: ComponentItem[] = compFiles.map((f) => {
                        const name = f.path.split('/').pop()?.replace(/\.[^/.]+$/, '') || 'Component';
                        return {
                            name,
                            path: f.path,
                            description: 'Workspace component (' + f.path + ')',
                        };
                    });
                    setComponents((prev) => {
                        const existingNames = new Set(items.map(i => i.name));
                        return [...items, ...prev.filter(p => !existingNames.has(p.name))];
                    });
                }
            } catch (err) {
                console.warn('Could not discover workspace components:', err);
            }
        };
        void fetchFiles();
    }, [editorEngine.projectId]);

    const handleInsert = async (comp: ComponentItem) => {
        try {
            const targetPath = 'src/App.jsx';
            let currentCode = '';
            try {
                const content = await editorEngine.fileSystem.readFile(targetPath);
                currentCode = typeof content === 'string' ? content : '';
            } catch {
                // The active project may use a different entry file; the
                // existing fallback below will report a parse/insert failure.
            }

            if (comp.path && !currentCode.includes(comp.name)) {
                const importRel = './components/' + comp.name;
                currentCode = "import " + comp.name + " from '" + importRel + "';\n" + currentCode;
            }

            const snippet = '<' + comp.name + ' />';
            const { updatedCode, modified } = await applyAstComponentInsert(currentCode, {
                snippet,
                targetContainerTag: 'main',
            });

            const finalCode = modified ? updatedCode : (currentCode.replace('</main>', '  ' + snippet + '\n</main>'));

            await editorEngine.fileSystem.writeFile(targetPath, finalCode);
        } catch (err) {
            console.error('Failed to insert component via AST:', err);
        }
    };

    return (
        <div data-subsystem="onlook-components" data-onlook-runtime="components" className="flex flex-col h-full p-3 gap-3 overflow-y-auto">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Discovered Components
            </div>
            <div className="flex flex-col gap-2">
                {components.map((comp) => (
                    <div
                        key={comp.name}
                        data-component-name={comp.name}
                        onClick={() => void handleInsert(comp)}
                        className="p-3 bg-secondary/40 hover:bg-secondary/80 border border-border/50 rounded-lg cursor-pointer transition flex flex-col gap-1"
                    >
                        <div className="font-medium text-sm text-foreground">{comp.name}</div>
                        <div className="text-xs text-muted-foreground">{comp.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
