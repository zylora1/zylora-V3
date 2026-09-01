const fs=require('fs'),path=require('path'),ts=require('typescript');
const root=path.resolve(__dirname,'..'),base=path.join(root,'template_projects');let files=[],errors=[];
function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){const p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(/\.(js|jsx|ts|tsx|mjs)$/.test(e.name))files.push(p)}}
if(fs.existsSync(base))walk(base);
for(const f of files){const s=fs.readFileSync(f,'utf8');const r=ts.transpileModule(s,{compilerOptions:{jsx:ts.JsxEmit.Preserve,target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext},reportDiagnostics:true,fileName:f});for(const d of r.diagnostics||[])if(d.category===ts.DiagnosticCategory.Error)errors.push(path.relative(root,f)+': '+ts.flattenDiagnosticMessageText(d.messageText,' '))}
console.log(`check_nextjs_sources: ${files.length} files; errors ${errors.length}`);if(errors.length){console.error(errors.slice(0,80).join('\n'));process.exit(1)}
