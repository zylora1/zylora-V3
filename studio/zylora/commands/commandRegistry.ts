/**
 * Zylora Studio - Command Registry & Mutation Pipeline
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

import { StudioState, StudioAction } from '../../store';

export interface CommandMetadata {
  source: 'user' | 'ai' | 'system';
  actor?: string;
  model?: string;
  requestId?: string;
  timestamp: number;
}

export interface StudioCommand<T = any> {
  type: string;
  payload: T;
  metadata?: CommandMetadata;
}

export type CommandValidator<T = any> = (payload: T, state: StudioState) => string | null;
export type CommandReducer<T = any> = (state: StudioState, payload: T, metadata?: CommandMetadata) => StudioState;

class StudioCommandRegistry {
  private validators = new Map<string, CommandValidator>();
  private reducers = new Map<string, CommandReducer>();

  public register<T>(type: string, validator: CommandValidator<T>, reducer: CommandReducer<T>) {
    this.validators.set(type, validator);
    this.reducers.set(type, reducer);
  }

  public execute(state: StudioState, command: StudioCommand): StudioState {
    const validator = this.validators.get(command.type);
    if (validator) {
      const error = validator(command.payload, state);
      if (error) {
        console.error(`[StudioCommandAPI] Validation failed for command ${command.type}: ${error}`);
        return state;
      }
    }

    const reducer = this.reducers.get(command.type);
    if (!reducer) {
      console.warn(`[StudioCommandAPI] No registered reducer for command: ${command.type}`);
      return state;
    }

    const meta: CommandMetadata = command.metadata || {
      source: 'user',
      timestamp: Date.now(),
    };

    return reducer(state, command.payload, meta);
  }
}

export const commandRegistry = new StudioCommandRegistry();

// Register Core Commands

// 1. Move Node
commandRegistry.register<{ nodeId: string; x: number; y: number }>(
  'MOVE_NODE',
  (p, s) => {
    if (!p.nodeId) return 'nodeId is required';
    const page = s.document?.pages[s.currentPageId];
    if (!page || !page.nodes[p.nodeId]) return 'Node does not exist';
    if (page.nodes[p.nodeId].metadata?.locked) return 'Node is locked';
    return null;
  },
  (s, p) => {
    const page = s.document?.pages[s.currentPageId];
    if (!page) return s;
    const node = page.nodes[p.nodeId];
    if (!node) return s;

    const nextDoc = {
      ...s.document!,
      pages: {
        ...s.document!.pages,
        [s.currentPageId]: {
          ...page,
          nodes: {
            ...page.nodes,
            [p.nodeId]: {
              ...node,
              style: {
                ...node.style,
                css: {
                  ...node.style.css,
                  left: `${Math.round(p.x)}px`,
                  top: `${Math.round(p.y)}px`,
                },
              },
              geometry: node.geometry ? { ...node.geometry, x: p.x, y: p.y } : undefined,
            },
          },
        },
      },
    };

    return {
      ...s,
      document: nextDoc,
      dirty: true,
    };
  }
);

// 2. Set Typography
commandRegistry.register<{ nodeId: string; typography: Record<string, string> }>(
  'SET_TYPOGRAPHY',
  (p, s) => {
    if (!p.nodeId) return 'nodeId is required';
    const page = s.document?.pages[s.currentPageId];
    if (!page || !page.nodes[p.nodeId]) return 'Node does not exist';
    return null;
  },
  (s, p) => {
    const page = s.document?.pages[s.currentPageId];
    if (!page) return s;
    const node = page.nodes[p.nodeId];
    if (!node) return s;

    return {
      ...s,
      document: {
        ...s.document!,
        pages: {
          ...s.document!.pages,
          [s.currentPageId]: {
            ...page,
            nodes: {
              ...page.nodes,
              [p.nodeId]: {
                ...node,
                style: {
                  ...node.style,
                  css: {
                    ...node.style.css,
                    ...p.typography,
                  },
                },
              },
            },
          },
        },
      },
      dirty: true,
    };
  }
);
