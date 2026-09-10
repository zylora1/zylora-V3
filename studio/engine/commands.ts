import type {Dispatch} from 'react';
import type {StudioAction} from '../store';

/**
 * The reducer remains the document transaction boundary. This envelope gives
 * every caller a stable command identity and label while keeping the v5 state
 * shape and rollback format unchanged.
 */
export type StudioCommandAction = Exclude<StudioAction, {type:'EXECUTE_COMMAND'}>;
export interface StudioCommand {
  id:string;
  label:string;
  action:StudioCommandAction;
  mergeKey?:string;
  source?:'canvas'|'inspector'|'keyboard'|'ai'|'clipboard'|'system';
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

export const createStudioCommand=(action:StudioCommandAction,options:Partial<Pick<StudioCommand,'label'|'mergeKey'|'source'>>={}):StudioCommand=>({
  id:commandId(action.type),
  label:options.label||labels[action.type]||action.type.replaceAll('_',' ').toLowerCase(),
  action,
  mergeKey:options.mergeKey,
  source:options.source,
});

/** Wrap a reducer dispatch so the reducer can commit one atomic command. */
export const dispatchStudioCommand=(dispatch:Dispatch<StudioAction>,action:StudioCommandAction,options:Partial<Pick<StudioCommand,'label'|'mergeKey'|'source'>>={})=>{
  dispatch({type:'EXECUTE_COMMAND',payload:{command:createStudioCommand(action,options)}});
};
