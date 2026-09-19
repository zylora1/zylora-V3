// Verification script for Onlook AST transformations
import assert from 'node:assert';
import Babel from '@babel/standalone';

const { parse } = Babel.packages.parser;
const rawGen = Babel.packages.generator;
const generate = typeof rawGen === 'function' ? rawGen : (rawGen.default || rawGen.generate || rawGen);
const traverse = Babel.packages.traverse.default || Babel.packages.traverse;
const t = Babel.packages.types;

function getAstFromContent(content) {
  return parse(content, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });
}

function getContentFromAst(ast, original) {
  return generate(
    ast,
    {
      retainLines: true,
      compact: false,
      comments: true,
      concise: false,
      retainFunctionParens: true,
    },
    original
  ).code;
}

function addClassToNode(node, className) {
  const opening = node.openingElement;
  const attr = opening.attributes.find((a) => t.isJSXAttribute(a) && a.name.name === 'className');
  if (attr && t.isStringLiteral(attr.value)) {
    attr.value.value = `${attr.value.value} ${className}`.trim();
  } else {
    opening.attributes.push(t.jsxAttribute(t.jsxIdentifier('className'), t.stringLiteral(className)));
  }
}

function updateNodeTextContent(node, text) {
  node.children = [t.jsxText(text)];
}

// 1. Test AST Style Transformation
const originalCode = `export default function Hero() {
  return (
    <div className="container">
      <h1>Title</h1>
      <p>Description</p>
    </div>
  );
}`;

console.log('--- Testing Onlook AST Style Transformation ---');
const ast1 = getAstFromContent(originalCode);
traverse(ast1, {
  JSXElement(path) {
    if (path.node.openingElement.name.name === 'h1') {
      addClassToNode(path.node, 'text-4xl font-extrabold text-blue-600');
    }
  },
});
const styledCode = getContentFromAst(ast1, originalCode);
assert(styledCode.includes('className="text-4xl font-extrabold text-blue-600"'), 'Style was not added to h1 via AST');
console.log('✔ AST Style Transformation passed');

// 2. Test AST Text Transformation
console.log('--- Testing Onlook AST Text Transformation ---');
const ast2 = getAstFromContent(styledCode);
traverse(ast2, {
  JSXElement(path) {
    if (path.node.openingElement.name.name === 'h1') {
      updateNodeTextContent(path.node, 'Zylora Studio Code Engine');
    }
  },
});
const textUpdatedCode = getContentFromAst(ast2, styledCode);
assert(textUpdatedCode.includes('Zylora Studio Code Engine'), 'Text was not updated in h1 via AST');
console.log('✔ AST Text Transformation passed');

// 3. Test AST Component Insertion
console.log('--- Testing Onlook AST Component Insertion ---');
const ast3 = getAstFromContent(textUpdatedCode);
const buttonSnippetAst = parse('<button className="btn-primary">Get Started</button>', {
  plugins: ['jsx'],
});
let buttonElement = null;
traverse(buttonSnippetAst, {
  JSXElement(path) {
    if (!buttonElement) buttonElement = path.node;
  },
});

traverse(ast3, {
  JSXElement(path) {
    if (path.node.openingElement.name.name === 'div') {
      path.node.children.push(buttonElement);
    }
  },
});
const componentInsertedCode = getContentFromAst(ast3, textUpdatedCode);
assert(componentInsertedCode.includes('<button className="btn-primary">Get Started</button>'), 'Button was not inserted via AST');
console.log('✔ AST Component Insertion passed');

console.log('\nAll Onlook AST transform tests passed successfully!');
