import { packages } from '@babel/standalone';

import type { GeneratorOptions } from '@babel/generator';
import type { NodePath } from '@babel/traverse';
import type * as T from '@babel/types';

export const { parse } = packages.parser;
const rawGen = packages.generator as any;
export const generate = typeof rawGen === 'function' ? rawGen : (rawGen?.default || rawGen?.generate || rawGen);
export const traverse = (packages.traverse as any).default || packages.traverse;
export const t = packages.types;

export type { T, NodePath, GeneratorOptions };
