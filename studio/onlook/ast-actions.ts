/**
 * Onlook AST Action Runner
 *
 * Drives visual style updates, text edits, element insertion, and DOM restructuring
 * through genuine Babel AST transformations using @onlook/parser.
 * Zero string regex hacks; AST-parse -> traverse -> mutate AST -> generate.
 */

import {
  getAstFromContent,
  getContentFromAst,
  addClassToNode,
  replaceNodeClasses,
  updateNodeTextContent,
  traverse,
  t,
  T,
  getOidFromJsxElement,
} from './parser';

export interface AstTransformResult {
  updatedCode: string;
  modified: boolean;
  astNodeFound: boolean;
}

export async function applyAstStyleChange(
  code: string,
  options: {
    tag?: string;
    oid?: string;
    currentClass?: string;
    addClass?: string;
    overrideClass?: string;
  }
): Promise<AstTransformResult> {
  const ast = getAstFromContent(code);
  if (!ast) {
    throw new Error('Failed to parse file AST with Babel parser');
  }

  let matched = false;
  const targetTagLower = options.tag?.toLowerCase();

  traverse(ast, {
    JSXElement(path) {
      if (matched) return;

      const opening = path.node.openingElement;
      let isTarget = false;

      // 1. Match by data-onlook-id (oid) if provided
      if (options.oid) {
        const oid = getOidFromJsxElement(opening);
        if (oid === options.oid) {
          isTarget = true;
        }
      }

      // 2. Match by tag name and optional existing class
      if (!isTarget && targetTagLower) {
        let tagName = '';
        if (t.isJSXIdentifier(opening.name)) {
          tagName = opening.name.name.toLowerCase();
        } else if (t.isJSXMemberExpression(opening.name)) {
          tagName = `${(opening.name.object as any).name}.${opening.name.property.name}`.toLowerCase();
        }

        if (tagName === targetTagLower) {
          if (options.currentClass) {
            const classAttr = opening.attributes.find(
              (a) => t.isJSXAttribute(a) && a.name.name === 'className'
            ) as T.JSXAttribute | undefined;
            if (classAttr && t.isStringLiteral(classAttr.value)) {
              if (classAttr.value.value.includes(options.currentClass.trim().split(' ')[0] || '')) {
                isTarget = true;
              }
            } else {
              isTarget = true;
            }
          } else {
            isTarget = true;
          }
        }
      }

      if (isTarget) {
        matched = true;
        if (options.overrideClass !== undefined) {
          replaceNodeClasses(path.node, options.overrideClass);
        } else if (options.addClass) {
          addClassToNode(path.node, options.addClass);
        }
      }
    },
  });

  if (!matched) {
    return { updatedCode: code, modified: false, astNodeFound: false };
  }

  const updatedCode = await getContentFromAst(ast, code);
  return { updatedCode, modified: true, astNodeFound: true };
}

export async function applyAstTextChange(
  code: string,
  options: {
    tag?: string;
    oid?: string;
    newText: string;
  }
): Promise<AstTransformResult> {
  const ast = getAstFromContent(code);
  if (!ast) {
    throw new Error('Failed to parse file AST with Babel parser');
  }

  let matched = false;
  const targetTagLower = options.tag?.toLowerCase();

  traverse(ast, {
    JSXElement(path) {
      if (matched) return;

      const opening = path.node.openingElement;
      let isTarget = false;

      if (options.oid) {
        const oid = getOidFromJsxElement(opening);
        if (oid === options.oid) isTarget = true;
      }

      if (!isTarget && targetTagLower) {
        let tagName = '';
        if (t.isJSXIdentifier(opening.name)) {
          tagName = opening.name.name.toLowerCase();
        }
        if (tagName === targetTagLower) {
          isTarget = true;
        }
      }

      if (isTarget) {
        matched = true;
        updateNodeTextContent(path.node, options.newText);
      }
    },
  });

  if (!matched) {
    return { updatedCode: code, modified: false, astNodeFound: false };
  }

  const updatedCode = await getContentFromAst(ast, code);
  return { updatedCode, modified: true, astNodeFound: true };
}

export async function applyAstComponentInsert(
  code: string,
  options: {
    snippet: string;
    targetContainerTag?: string;
  }
): Promise<AstTransformResult> {
  const ast = getAstFromContent(code);
  if (!ast) {
    throw new Error('Failed to parse file AST with Babel parser');
  }

  // Parse snippet JSX
  const snippetAst = getAstFromContent(`<>${options.snippet}</>`);
  let newElementNode: T.JSXElement | null = null;

  if (snippetAst) {
    traverse(snippetAst, {
      JSXElement(path) {
        if (!newElementNode && path.node !== (snippetAst.program.body[0] as any)?.expression) {
          newElementNode = path.node;
        }
      },
    });
  }

  let inserted = false;
  const containerTag = (options.targetContainerTag || 'main').toLowerCase();

  traverse(ast, {
    JSXElement(path) {
      if (inserted) return;
      let tagName = '';
      if (t.isJSXIdentifier(path.node.openingElement.name)) {
        tagName = path.node.openingElement.name.name.toLowerCase();
      }

      if (tagName === containerTag || (!options.targetContainerTag && (tagName === 'div' || tagName === 'main' || tagName === 'section'))) {
        if (newElementNode) {
          path.node.children.push(newElementNode);
          inserted = true;
        }
      }
    },
  });

  if (!inserted) {
    // Fallback insertion into root JSX return
    traverse(ast, {
      ReturnStatement(path) {
        if (inserted) return;
        if (path.node.argument && t.isJSXElement(path.node.argument)) {
          if (newElementNode) {
            path.node.argument.children.push(newElementNode);
            inserted = true;
          }
        }
      },
    });
  }

  if (!inserted) {
    return { updatedCode: code, modified: false, astNodeFound: false };
  }

  const updatedCode = await getContentFromAst(ast, code);
  return { updatedCode, modified: true, astNodeFound: true };
}
