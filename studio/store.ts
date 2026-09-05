import { createContext, useContext, useReducer, Dispatch } from 'react';

// Simplified Node definitions for the frontend
export type Breakpoint = 'desktop' | 'tablet' | 'mobile';

export interface NodeStyle {
  css: Record<string, string>;
  tokens: Record<string, string>;
}

export interface Node {
  id: string;
  type: string;
  parentId: string | null;
  children: string[];
  content: Record<string, any>;
  style: NodeStyle;
  layout: Record<string, any>;
  responsiveOverrides: Record<string, { style?: NodeStyle; content?: Record<string, any>; visibility?: 'visible'|'hidden' }>;
  visibility: 'visible' | 'hidden';
}

export interface Page {
  id: string;
  slug: string;
  name: string;
  rootNodeId: string;
  nodes: Record<string, Node>;
}

export interface SiteDocument {
  id: string;
  pages: Record<string, Page>;
  breakpoints: Record<Breakpoint, number>;
}

export interface StudioState {
  document: SiteDocument | null;
  currentPageId: string;
  selectedNodeIds: string[];
  currentBreakpoint: Breakpoint;
  history: SiteDocument[];
  historyIndex: number;
}

export type StudioAction = 
  | { type: 'SET_DOCUMENT'; payload: SiteDocument }
  | { type: 'SELECT_NODE'; payload: string[] }
  | { type: 'SET_BREAKPOINT'; payload: Breakpoint }
  | { type: 'UPDATE_NODE_STYLE'; payload: { nodeId: string; style: Record<string, string> } }
  | { type: 'REPARENT_NODE'; payload: { nodeId: string; newParentId: string } }
  | { type: 'DELETE_NODE'; payload: { nodeId: string } }
  | { type: 'RESET_NODE_STYLE'; payload: { nodeId: string; prop: string; breakpoint: Breakpoint } }
  | { type: 'SYNC_REVISION'; payload: number }
  | { type: 'UNDO' }
  | { type: 'REDO' };

export const initialState: StudioState = {
  document: null,
  currentPageId: 'home',
  selectedNodeIds: [],
  currentBreakpoint: 'desktop',
  history: [],
  historyIndex: -1,
};

export function studioReducer(state: StudioState, action: StudioAction): StudioState {
  switch (action.type) {
    case 'SET_DOCUMENT':
      return {
        ...state,
        document: action.payload,
        history: [action.payload],
        historyIndex: 0
      };
    case 'SELECT_NODE':
      return { ...state, selectedNodeIds: action.payload };
    case 'SET_BREAKPOINT':
      return { ...state, currentBreakpoint: action.payload };
    case 'UPDATE_NODE_STYLE': {
      if (!state.document) return state;
      const { nodeId, style } = action.payload;
      const page = state.document.pages[state.currentPageId];
      if (!page || !page.nodes[nodeId]) return state;

      const node = page.nodes[nodeId];
      const newNode = { ...node };

      if (state.currentBreakpoint === 'desktop') {
        newNode.style = { ...newNode.style, css: { ...newNode.style.css, ...style } };
      } else {
        const overrides = newNode.responsiveOverrides[state.currentBreakpoint] || { style: { css: {}, tokens: {} } };
        const newStyle = overrides.style || { css: {}, tokens: {} };
        newNode.responsiveOverrides = {
          ...newNode.responsiveOverrides,
          [state.currentBreakpoint]: {
            ...overrides,
            style: { ...newStyle, css: { ...newStyle.css, ...style } }
          }
        };
      }

      const newDoc = {
        ...state.document,
        pages: {
          ...state.document.pages,
          [state.currentPageId]: {
            ...page,
            nodes: {
              ...page.nodes,
              [nodeId]: newNode
            }
          }
        }
      };

      // Push history
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(newDoc);

      return {
        ...state,
        document: newDoc,
        history: newHistory,
        historyIndex: newHistory.length - 1
      };
    }
    case 'REPARENT_NODE': {
      if (!state.document) return state;
      const { nodeId, newParentId } = action.payload;
      const page = state.document.pages[state.currentPageId];
      if (!page || !page.nodes[nodeId] || !page.nodes[newParentId]) return state;

      // Prevent reparenting to self or child (circular check would go here ideally)
      if (nodeId === newParentId) return state;

      const node = page.nodes[nodeId];
      const oldParentId = node.parentId;
      
      const newNodes = { ...page.nodes };
      
      if (oldParentId && newNodes[oldParentId]) {
          newNodes[oldParentId] = {
              ...newNodes[oldParentId],
              children: newNodes[oldParentId].children.filter(id => id !== nodeId)
          };
      }
      
      newNodes[newParentId] = {
          ...newNodes[newParentId],
          children: [...newNodes[newParentId].children, nodeId]
      };
      
      newNodes[nodeId] = {
          ...node,
          parentId: newParentId
      };
      
      const newDoc = {
          ...state.document,
          pages: {
              ...state.document.pages,
              [state.currentPageId]: {
                  ...page,
                  nodes: newNodes
              }
          }
      };
      
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(newDoc);
      
      return {
          ...state,
          document: newDoc,
          history: newHistory,
          historyIndex: newHistory.length - 1
      };
    }
    case 'DELETE_NODE': {
      if (!state.document) return state;
      const { nodeId } = action.payload;
      const page = state.document.pages[state.currentPageId];
      if (!page || !page.nodes[nodeId]) return state;

      // Don't delete root
      if (nodeId === page.rootNodeId) return state;

      const node = page.nodes[nodeId];
      const oldParentId = node.parentId;
      
      const newNodes = { ...page.nodes };
      
      if (oldParentId && newNodes[oldParentId]) {
          newNodes[oldParentId] = {
              ...newNodes[oldParentId],
              children: newNodes[oldParentId].children.filter(id => id !== nodeId)
          };
      }

      // Cleanup children recursively could be added here
      delete newNodes[nodeId];
      
      const newDoc = {
          ...state.document,
          pages: {
              ...state.document.pages,
              [state.currentPageId]: {
                  ...page,
                  nodes: newNodes
              }
          }
      };
      
      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(newDoc);
      
      return {
          ...state,
          document: newDoc,
          history: newHistory,
          historyIndex: newHistory.length - 1,
          selectedNodeIds: state.selectedNodeIds.filter(id => id !== nodeId)
      };
    }
    case 'RESET_NODE_STYLE': {
      if (!state.document) return state;
      const { nodeId, prop, breakpoint } = action.payload;
      if (breakpoint === 'desktop') return state; // Desktop is base, can't reset
      
      const page = state.document.pages[state.currentPageId];
      if (!page || !page.nodes[nodeId]) return state;
      
      const node = page.nodes[nodeId];
      const newNode = { ...node };
      
      const overrides = newNode.responsiveOverrides[breakpoint];
      if (overrides && overrides.style && overrides.style.css[prop] !== undefined) {
          const newCss = { ...overrides.style.css };
          delete newCss[prop];
          newNode.responsiveOverrides = {
              ...newNode.responsiveOverrides,
              [breakpoint]: {
                  ...overrides,
                  style: { ...overrides.style, css: newCss }
              }
          };
      } else {
          return state; // Nothing to reset
      }

      const newDoc = {
        ...state.document,
        pages: {
          ...state.document.pages,
          [state.currentPageId]: {
            ...page,
            nodes: {
              ...page.nodes,
              [nodeId]: newNode
            }
          }
        }
      };

      const newHistory = state.history.slice(0, state.historyIndex + 1);
      newHistory.push(newDoc);

      return {
        ...state,
        document: newDoc,
        history: newHistory,
        historyIndex: newHistory.length - 1
      };
    }
    case 'SYNC_REVISION':
      if (state.document) {
          const newDoc = { ...state.document, revision: action.payload };
          // Don't push to history, just update current state document and current history pointer element
          const newHistory = [...state.history];
          newHistory[state.historyIndex] = newDoc;
          return {
              ...state,
              document: newDoc,
              history: newHistory
          };
      }
      return state;
    case 'UNDO':
      if (state.historyIndex > 0) {
        return {
          ...state,
          historyIndex: state.historyIndex - 1,
          document: state.history[state.historyIndex - 1]
        };
      }
      return state;
    case 'REDO':
      if (state.historyIndex < state.history.length - 1) {
        return {
          ...state,
          historyIndex: state.historyIndex + 1,
          document: state.history[state.historyIndex + 1]
        };
      }
      return state;
    default:
      return state;
  }
}

export const StudioContext = createContext<{
  state: StudioState;
  dispatch: Dispatch<StudioAction>;
}>({ state: initialState, dispatch: () => null });

export const useStudio = () => useContext(StudioContext);
