import ts from 'typescript';

const input = JSON.parse(await new Promise((resolve, reject) => { let s=''; process.stdin.on('data', c => s += c); process.stdin.on('end', () => resolve(s)); process.stdin.on('error', reject); }));
const fileName = input.filePath || 'source.tsx';
const source = String(input.source || '');
const kind = /\.tsx?$/.test(fileName) ? ts.ScriptKind.TSX : ts.ScriptKind.JSX;
const file = ts.createSourceFile(fileName, source, ts.ScriptTarget.Latest, true, kind);
const fail = message => { process.stdout.write(JSON.stringify({ ok:false, error:message })); process.exit(0); };
const staticText = node => {
  if (!node || !node.children) return null;
  const text = node.children.filter(child => child.kind === ts.SyntaxKind.JsxText).map(child => child.text).join('').trim();
  return text || null;
};
const nameOf = node => ts.isIdentifier(node.tagName) ? node.tagName.text : node.tagName.getText(file);
const nodes = [];
const visit = node => {
  if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
    const tag = ts.isJsxElement(node) ? node.openingElement : node;
    const text = ts.isJsxElement(node) ? staticText(node) : null;
    const start = node.getStart(file), end = node.end;
    const pos = file.getLineAndCharacterOfPosition(start);
    nodes.push({ filePath:fileName, elementType:nameOf(tag), start, end, line:pos.line+1, column:pos.character+1, text, stableNodeId:`${fileName}:${start}:${end}` });
  }
  ts.forEachChild(node, visit);
};
visit(file);
if (input.action === 'map') {
  process.stdout.write(JSON.stringify({ok:true,nodes})); process.exit(0);
}
if (input.action !== 'replace-text') fail('Unsupported source operation');
const target = input.target || {};
const matches = nodes.filter(node => node.start === Number(target.start) && node.end === Number(target.end) && (!target.elementType || node.elementType === target.elementType));
if (matches.length !== 1) fail(matches.length ? 'Ambiguous source target' : 'Source target not found');
let targetNode;
const find = node => { if (node.getStart(file) === matches[0].start && node.end === matches[0].end) targetNode=node; ts.forEachChild(node, find); };
find(file);
if (!targetNode || !ts.isJsxElement(targetNode)) fail('Only JSX elements with static text children are editable');
const child = targetNode.children.filter(child => child.kind === ts.SyntaxKind.JsxText);
if (child.length !== 1 || !staticText(targetNode)) fail('Element text is dynamic or ambiguous');
const old = child[0].getText(file);
const leading = old.match(/^\s*/)?.[0] || '';
const trailing = old.match(/\s*$/)?.[0] || '';
const value = String(input.value ?? '').replace(/[\r\n]+/g, ' ').trim();
if (!value || value.includes('<') || value.includes('>')) fail('Text value is not a safe static JSX string');
const nextSource = source.slice(0, child[0].getStart(file)) + leading + value + trailing + source.slice(child[0].end);
const reparsed = ts.createSourceFile(fileName, nextSource, ts.ScriptTarget.Latest, true, kind);
const diagnostics = [...reparsed.parseDiagnostics];
if (diagnostics.length) fail('Generated source did not parse');
process.stdout.write(JSON.stringify({ok:true, source:nextSource, previous:source, target:matches[0], validation:'parsed'}));
