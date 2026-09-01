const fs=require('fs');
const {compile}=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/tailwindcss/dist/lib.js');
const root=process.argv[2], htmlPath=process.argv[3], out=process.argv[4];
const themeCss=fs.readFileSync('/opt/nvm/versions/node/v22.16.0/lib/node_modules/tailwindcss/theme.css','utf8');
const preflight=fs.readFileSync('/opt/nvm/versions/node/v22.16.0/lib/node_modules/tailwindcss/preflight.css','utf8');
function extractClasses(s){let set=new Set();let re=/(?:class|className)=["'`]([^"'`]+)["'`]/g,m;while((m=re.exec(s)))for(let c of m[1].split(/\s+/))if(c&&!/[{}$]/.test(c))set.add(c);return [...set]}
function loadConfig(){for(const n of ['tailwind.config.js','tailwind.config.cjs']){let p=root+'/'+n;if(fs.existsSync(p)){try{return require(p)}catch(e){}}}return {}}
function varsFrom(cfg){let theme=(cfg&&cfg.theme)||{}, ext=theme.extend||{};let lines=[];const add=(ns,obj)=>{if(!obj||typeof obj!=='object')return;for(let [k,v] of Object.entries(obj)){if(v==null)continue;if(Array.isArray(v))v=v[0];if(typeof v==='object')continue;k=String(k).replace(/[^A-Za-z0-9_-]/g,'-');lines.push(`--${ns}-${k}: ${String(v).replace(/;$/,'')};`)}};
 add('color',theme.colors);add('color',ext.colors);add('breakpoint',theme.screens);add('breakpoint',ext.screens);
 add('font',theme.fontFamily);add('font',ext.fontFamily);add('radius',theme.borderRadius);add('radius',ext.borderRadius);add('shadow',theme.boxShadow);add('shadow',ext.boxShadow);add('spacing',theme.spacing);add('spacing',ext.spacing);
 for(const obj of [theme.fontSize,ext.fontSize])if(obj)for(let [k,v] of Object.entries(obj)){let size=Array.isArray(v)?v[0]:v, opts=Array.isArray(v)?v[1]:null;if(typeof size==='string'){lines.push(`--text-${k}: ${size};`);if(opts&&typeof opts==='object'&&opts.lineHeight)lines.push(`--text-${k}--line-height: ${opts.lineHeight};`)}}
 return lines.length?`@theme {\n${lines.join('\n')}\n}`:'';
}
function localCss(){let list=[];for(const p of ['app/globals.css','src/app/globals.css','src/styles/globals.css','src/tailus.css','src/Style/style.css','index.css']){let f=root+'/'+p;if(fs.existsSync(f)){let s=fs.readFileSync(f,'utf8');s=s.replace(/@tailwind\s+(?:base|components|utilities)\s*;/g,'').replace(/@import\s+["']tailwindcss["']\s*;/g,'');list.push(s)}}return list.join('\n')}
(async()=>{let html=fs.readFileSync(htmlPath,'utf8');let local=localCss();let src=themeCss+'\n'+varsFrom(loadConfig())+'\n'+local+'\n@tailwind utilities;';let c;try{c=await compile(src)}catch(e){console.error('compile-local-fallback',e.message);c=await compile(themeCss+'\n'+varsFrom(loadConfig())+'\n@tailwind utilities;')}let css=preflight+'\n'+c.build(extractClasses(html));fs.writeFileSync(out,css);console.error(JSON.stringify({classes:extractClasses(html).length,bytes:Buffer.byteLength(css)}))})().catch(e=>{console.error(e);process.exit(2)})
