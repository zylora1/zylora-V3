import type {Dispatch} from 'react';
import type {StudioAction, StudioState} from '../store';

/**
 * The reducer remains the document transaction boundary. This envelope gives
 * every caller a stable command identity and label while keeping the v5 state
 * shape and rollback format unchanged.
 */
export type StudioCommandAction = Exclude<StudioAction, {type:'EXECUTE_COMMAND'}>;
export type StudioCommandSource = 'canvas'|'inspector'|'keyboard'|'ai'|'clipboard'|'external'|'system';

export interface StudioCommandProvenance {
  actor?: string;
  model?: string;
  requestId?: string;
  affectedNodeIds?: string[];
  timestamp?: number;
}

export interface StudioCommand {
  id:string;
  label:string;
  action:StudioCommandAction;
  mergeKey?:string;
  source?:StudioCommandSource;
  provenance?:StudioCommandProvenance;
}

let sequence=0;
const commandId=(type:string)=>`studio_${type.toLowerCase()}_${Date.now().toString(36)}_${(++sequence).toString(36)}`;
const labels:Record<string,string>={
  INSERT_NODE:'Insert element', INSERT_SUBTREE:'Insert group', DELETE_NODE:'Delete element', DELETE_SELECTED:'Delete selection',
  UPDATE_NODE_GEOMETRY:'Transform element', UPDATE_SELECTED_GEOMETRIES:'Transform selection', UPDATE_NODE_STYLE:'Update style',
  UPDATE_SELECTED_STYLE:'Update selection style', UPDATE_NODE_CONTENT:'Update content', UPDATE_NODE_TEXT:'Edit text',
  REPARENT_NODE:'Reparent element', REORDER_NODE:'Reorder element', GROUP_SELECTED:'Group selection', UNGROUP_SELECTED:'Ungroup selection',
  DUPLICATE_NODE:'Duplicate element', DUPLICATE_SELECTED:'Duplicate selection', TOGGLE_NODE_LOCK:'Toggle lock',
  TOGGLE_NODE_VISIBILITY:'Toggle visibility', PASTE:'Paste', CUT_SELECTED:'Cut selection', NUDGE_SELECTED:'Nudge selection',
};

type StudioCommandOptions=Partial<Pick<StudioCommand,'label'|'mergeKey'|'source'|'provenance'>>;

export const createStudioCommand=(action:StudioCommandAction,options:StudioCommandOptions={}):StudioCommand=>({
  id:commandId(action.type),
  label:options.label||labels[action.type]||action.type.replaceAll('_',' ').toLowerCase(),
  action,
  mergeKey:options.mergeKey,
  source:options.source,
  provenance: options.provenance,
});

/**
 * Validate the command envelope before it reaches the reducer. The reducer is
 * still the transaction boundary; this guard prevents malformed commands from
 * becoming silent no-ops and gives AI/external callers the same fail-closed
 * contract as human UI actions.
 */
export const validateStudioCommand=(state:StudioState,action:StudioCommandAction):string|null=>{
  if(action.type==='SET_DOCUMENT'||action.type==='APPLY_EXTERNAL_DOCUMENT'){
    return action.payload&&typeof action.payload==='object'?'': 'A Studio document is required';
  }
  const nodeId=(action as any).payload?.nodeId;
  const nodeActions=new Set([
    'UPDATE_NODE_STYLE','UPDATE_NODE_GEOMETRY','UPDATE_NODE_INTERACTIONS','UPDATE_NODE_CONTENT',
    'UPDATE_NODE_TEXT','UPDATE_NODE_TEXT_RUN','UPDATE_NODE_GRADIENT','UPDATE_NODE_CROP',
    'UPDATE_NODE_ACCESSIBILITY','REPARENT_NODE','REORDER_NODE','DUPLICATE_NODE','RENAME_NODE',
    'TOGGLE_NODE_VISIBILITY','TOGGLE_NODE_LOCK','DELETE_NODE','RESET_NODE_STYLE','RESET_NODE_GEOMETRY',
    'DETACH_COMPONENT',
  ]);
  if(nodeActions.has(action.type)){
    if(typeof nodeId!=='string'||!nodeId.trim())return 'A node id is required';
    const page=state.document?.pages[state.currentPageId];
    if(!page||!page.nodes[nodeId])return 'The requested Studio node does not exist';
  }
  if(action.type==='SELECT_NODE'&&!Array.isArray(action.payload))return 'Selection must be an array';
  if(action.type==='SET_BREAKPOINT'&&!['desktop','tablet','mobile'].includes(action.payload))return 'Invalid breakpoint';
  return null;
};

/** Wrap a reducer dispatch so every caller commits through one command envelope. */
export const dispatchStudioCommand=(dispatch:Dispatch<StudioAction>,action:StudioCommandAction,options:StudioCommandOptions={})=>{
  dispatch({type:'EXECUTE_COMMAND',payload:{command:createStudioCommand(action,options)}});
};
