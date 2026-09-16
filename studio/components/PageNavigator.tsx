import React from 'react';
import {MAX_STUDIO_PAGES,useStudio} from '../store';
import {StudioIcon} from './StudioIcon';

export function PageNavigator({onFit}:{onFit:()=>void}) {
  const {state, dispatch} = useStudio();
  const document = state.document;
  if (!document) return null;
  const pages = Object.values(document.pages);

  return <div className="studio-page-navigator" aria-label="Pages and sections">
    <button className="section-add-bar" onClick={() => dispatch({type:'ADD_SECTION'})}><StudioIcon name="plus" size={15}/> Add section</button>
    <div className="page-strip" role="list" aria-label="Pages">
      {pages.map((page, index) => <button key={page.id} role="listitem" className={`page-thumb ${page.id === state.currentPageId ? 'active' : ''}`} onClick={() => dispatch({type:'SET_PAGE', payload:page.id})} aria-label={`Open ${page.name || `Page ${index + 1}`}`}>
        <span className="page-thumb-preview"><i/><i/><i/></span>
        <span className="page-thumb-label">{index + 1}</span>
      </button>)}
      <button className="page-thumb page-thumb-add" onClick={() => dispatch({type:'ADD_PAGE', payload:{name:`Page ${pages.length + 1}`, slug:`page-${pages.length + 1}`}})} aria-label={pages.length>=MAX_STUDIO_PAGES?'Page limit reached':'Add page'} disabled={pages.length>=MAX_STUDIO_PAGES}><span><StudioIcon name="plus" size={17}/></span><small>{pages.length>=MAX_STUDIO_PAGES?'298 page limit':'Add page'}</small></button>
      <div className="navigator-zoom" aria-label="Canvas zoom controls">
        <button onClick={()=>dispatch({type:'SET_ZOOM',payload:state.zoom-.1})} aria-label="Zoom out"><StudioIcon name="minus" size={14}/></button>
        <input className="zoom-range" aria-label="Canvas zoom" type="range" min="25" max="300" step="1" value={Math.round(state.zoom*100)} onChange={e=>dispatch({type:'SET_ZOOM',payload:Number(e.target.value)/100})}/>
        <button className="zoom-value" onClick={()=>dispatch({type:'SET_ZOOM',payload:1})} aria-label="Reset canvas zoom to 100 percent">{Math.round(state.zoom*100)}%</button>
        <button onClick={onFit} aria-label="Fit canvas">Fit</button>
      </div>
    </div>
  </div>;
}
