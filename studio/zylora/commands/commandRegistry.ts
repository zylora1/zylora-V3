/**
 * Zylora-native Studio command registry.
 *
 * This module is intentionally a thin adapter over the canonical reducer
 * command envelope in `studio/engine/commands.ts`. It exists for AI,
 * migrations and future external clients that need a named command registry;
 * it is not a plugin or a second editor store.
 */

import {studioReducer, type StudioAction, type StudioState} from '../../store';
import {
  createStudioCommand,
  validateStudioCommand,
  type StudioCommandAction,
  type StudioCommandProvenance,
} from '../../engine';

export interface CommandMetadata extends StudioCommandProvenance {
  source: 'user'|'ai'|'system'|'external';
}

export interface StudioCommand<T = unknown> {
  type: string;
  payload: T;
  metadata?: CommandMetadata;
}

export class StudioCommandValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StudioCommandValidationError';
  }
}

const actionFor=(command:StudioCommand):StudioCommandAction=>{
  if(command.type==='MOVE_NODE'){
    const payload=command.payload as {nodeId?:unknown;x?:unknown;y?:unknown};
    return {type:'UPDATE_NODE_GEOMETRY',payload:{nodeId:String(payload.nodeId||''),geometry:{position:'absolute',left:`${Number(payload.x)||0}px`,top:`${Number(payload.y)||0}px`}}};
  }
  if(command.type==='SET_TYPOGRAPHY'){
    const payload=command.payload as {nodeId?:unknown;typography?:Record<string,string>};
    return {type:'UPDATE_NODE_STYLE',payload:{nodeId:String(payload.nodeId||''),style:{...(payload.typography||{})}}};
  }
  const known=new Set([
    'SET_DOCUMENT','APPLY_EXTERNAL_DOCUMENT','SELECT_NODE','SET_PAGE','SET_BREAKPOINT','SET_ZOOM',
    'SET_SNAP_LINES','SET_CROP_MODE','UPDATE_NODE_STYLE','UPDATE_SELECTED_STYLE','UPDATE_NODE_GEOMETRY',
    'UPDATE_SELECTED_GEOMETRIES','UPDATE_NODE_INTERACTIONS','UPDATE_NODE_CONTENT','UPDATE_NODE_TEXT',
    'UPDATE_NODE_TEXT_RUN','UPDATE_NODE_GRADIENT','UPDATE_NODE_CROP','UPDATE_NODE_ACCESSIBILITY',
    'INSERT_NODE','ADD_SECTION','INSERT_SUBTREE','REPARENT_NODE','REORDER_NODE','REORDER_SECTION',
    'DUPLICATE_NODE','DUPLICATE_SELECTED','RENAME_NODE','TOGGLE_NODE_VISIBILITY','TOGGLE_NODE_LOCK',
    'DELETE_NODE','DELETE_SELECTED','RESET_NODE_STYLE','RESET_NODE_GEOMETRY','COPY_SELECTED','CUT_SELECTED',
    'PASTE','NUDGE_SELECTED','ADD_PAGE','UPDATE_PAGE','DUPLICATE_PAGE','DELETE_PAGE','REORDER_PAGE',
    'CREATE_COMPONENT','DETACH_COMPONENT','GROUP_SELECTED','UNGROUP_SELECTED','ALIGN_SELECTED',
    'DISTRIBUTE_SELECTED','UPDATE_TOKENS','SYNC_REVISION','UNDO','REDO',
  ]);
  if(!known.has(command.type))throw new StudioCommandValidationError(`Unsupported Studio command: ${command.type}`);
  return {type:command.type,...('payload' in command?{payload:command.payload}: {})} as StudioCommandAction;
};

export class StudioCommandRegistry {
  private validators = new Map<string,(payload:unknown,state:StudioState)=>string|null>();

  public register<T>(type:string,validator:(payload:T,state:StudioState)=>string|null):void{
    this.validators.set(type,validator as (payload:unknown,state:StudioState)=>string|null);
  }

  /** Execute a command through the same reducer/history transaction as UI actions. */
  public execute(state:StudioState,command:StudioCommand):StudioState{
    const custom=this.validators.get(command.type);
    const customError=custom?.(command.payload,state);
    if(customError)throw new StudioCommandValidationError(customError);
    const action=actionFor(command);
    const error=validateStudioCommand(state,action);
    if(error)throw new StudioCommandValidationError(error);
    const metadata=command.metadata;
    const source=metadata?.source==='external'||metadata?.source==='user'?'external':metadata?.source||'system';
    return studioReducer(state,{type:'EXECUTE_COMMAND',payload:{command:createStudioCommand(action,{source,provenance:metadata})}} as StudioAction);
  }
}

export const commandRegistry=new StudioCommandRegistry();
