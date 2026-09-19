import { useEditorEngine } from '@/components/store/editor';
import { useStateManager } from '@/components/store/state';
import { transKeys } from '@/i18n/keys';
import { api } from '@/trpc/react';
import { Button } from '@onlook/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@onlook/ui/dropdown-menu';
import { Icons } from '@onlook/ui/icons';
import { cn } from '@onlook/ui/utils';
import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';
import { redirect } from 'next/navigation';
import { useRef, useState } from 'react';
import { CloneProjectDialog } from '../clone-project-dialog';
import { NewProjectMenu } from './new-project-menu';
import { RecentProjectsMenu } from './recent-projects';

export const ProjectBreadcrumb = observer(() => {
    const editorEngine = useEditorEngine();
    const stateManager = useStateManager();
    const { data: project } = api.project.get.useQuery({ projectId: editorEngine.projectId });
    const t = useTranslations();
    const closeTimeoutRef = useRef<Timer | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isClosingProject, setIsClosingProject] = useState(false);
    const [showCloneDialog, setShowCloneDialog] = useState(false);

    async function handleNavigateToProjects(_route?: 'create' | 'import') {
        try {
            setIsClosingProject(true);

            editorEngine.screenshot.captureScreenshot();
        } catch (error) {
            console.error('Failed to take screenshots:', error);
        } finally {
            setTimeout(() => {
                setIsClosingProject(false);
                redirect('/projects');
            }, 100);
        }
    }

    return (
        <div className="mr-0 flex flex-row items-center text-small gap-2">
            <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant='ghost'
                        className="ml-1 px-0 gap-2 text-foreground-onlook text-small hover:text-foreground-active hover:!bg-transparent cursor-pointer group"
                    >
                        <Icons.Code
                            className={cn(
                                'w-9 h-9 hidden md:block',
                                isClosingProject && 'animate-pulse',
                            )}
                        />
                        <span className="mx-0 max-w-[60px] md:max-w-[100px] lg:max-w-[200px] px-0 text-foreground-onlook text-small truncate cursor-pointer group-hover:text-foreground-active">
                            {isClosingProject ? 'Stopping project...' : project?.name}
                        </span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align="start"
                    className="w-56"
                    onMouseEnter={() => {
                        if (closeTimeoutRef.current) {
                            clearTimeout(closeTimeoutRef.current);
                        }
                    }}
                    onMouseLeave={() => {
                        closeTimeoutRef.current = setTimeout(() => {
                            setIsDropdownOpen(false);
                        }, 300);
                    }}
                >
                    <DropdownMenuItem
                        onClick={() => handleNavigateToProjects()}
                        className="cursor-pointer"
                    >
                        <div className="flex flex-row center items-center group">
                            <Icons.Tokens className="mr-2" />
                            {t(transKeys.projects.actions.goToAllProjects)}
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <RecentProjectsMenu />
                    <DropdownMenuSeparator />
                    <NewProjectMenu onShowCloneDialog={setShowCloneDialog} />
                    <DropdownMenuItem
                        className="cursor-pointer"
                        onClick={() => (stateManager.isSettingsModalOpen = true)}
                    >
                        <div className="flex flex-row center items-center group">
                            <Icons.Gear className="mr-2 group-hover:rotate-12 transition-transform" />
                            {t(transKeys.help.menu.openSettings)}
                        </div>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <CloneProjectDialog
                isOpen={showCloneDialog}
                onClose={() => setShowCloneDialog(false)}
                projectName={project?.name}
            />
        </div>
    );
});
