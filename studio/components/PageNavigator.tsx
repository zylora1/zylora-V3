import React from 'react';
import {Node, useStudio} from '../store';

const sectionNames = ['Hero','About','Services','Features','Gallery','Testimonials','Pricing','FAQ','Contact','Footer'];

function sectionLabel(node: Node, index: number) {
  const explicit = String(node.metadata?.displayName || '').trim();
  if (explicit && !/^section(?:\s*\d+)?$/i.test(explicit)) return explicit;
  return sectionNames[index] || `Section ${index + 1}`;
}

export function PageNavigator() {
  const {state, dispatch} = useStudio();
  const document = state.document;
  if (!document) return null;
  const pages = Object.values(document.pages);
  const current = document.pages[state.currentPageId];
  const sections = current ? current.nodes[current.rootNodeId]?.children
    .map(id => current.nodes[id])
    .filter((node): node is Node => !!node && node.type === 'section') : [];

  return <div className="studio-page-navigator" aria-label="Pages and sections">
    <div className="page-strip" role="list" aria-label="Pages">
      {pages.map((page, index) => <button key={page.id} role="listitem" className={`page-thumb ${page.id === state.currentPageId ? 'active' : ''}`} onClick={() => dispatch({type:'SET_PAGE', payload:page.id})} aria-label={`Open ${page.name || `Page ${index + 1}`}`}>
        <span className="page-thumb-preview"><i/><i/><i/></span>
        <span className="page-thumb-label">{page.name || `Page ${index + 1}`}</span>
      </button>)}
      <button className="page-thumb page-thumb-add" onClick={() => dispatch({type:'ADD_PAGE', payload:{name:`Page ${pages.length + 1}`, slug:`page-${pages.length + 1}`}})} aria-label="Add page"><span>＋</span><small>Add page</small></button>
    </div>
    <div className="section-strip" role="list" aria-label="Sections on this page">
      <span className="strip-label">Sections</span>
      {sections.map((section, index) => <button key={section.id} role="listitem" className="section-chip" onClick={() => dispatch({type:'SELECT_NODE', payload:[section.id]})}>{sectionLabel(section, index)}</button>)}
      <button className="section-chip section-chip-add" onClick={() => dispatch({type:'INSERT_NODE', payload:{node:{type:'section', metadata:{displayName:'Section'}, style:{css:{padding:'64px 40px', minHeight:'240px'}, tokens:{}}}}})} aria-label="Add section">＋ Section</button>
    </div>
  </div>;
}
