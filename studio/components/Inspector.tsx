import React, { useState } from 'react';
import { useStudio, Breakpoint } from '../store';

export function Inspector() {
    const { state, dispatch } = useStudio();
    
    if (state.selectedNodeIds.length !== 1 || !state.document) {
        return <div style={{padding: '1rem', color: '#888'}}>Select exactly one node to inspect.</div>;
    }
    
    const page = state.document.pages[state.currentPageId];
    const nodeId = state.selectedNodeIds[0];
    const node = page.nodes[nodeId];
    if (!node) return null;

    const bp = state.currentBreakpoint;
    
    // Helper to get value and origin
    const getValue = (prop: string) => {
        let val = node.style.css[prop] || '';
        let isOverride = false;
        
        if (bp === 'tablet') {
            const override = node.responsiveOverrides['tablet']?.style?.css[prop];
            if (override !== undefined) { val = override; isOverride = true; }
        } else if (bp === 'mobile') {
            const mobileOverride = node.responsiveOverrides['mobile']?.style?.css[prop];
            if (mobileOverride !== undefined) { val = mobileOverride; isOverride = true; }
            else {
                const tabletOverride = node.responsiveOverrides['tablet']?.style?.css[prop];
                if (tabletOverride !== undefined) { val = tabletOverride; }
            }
        }
        return { val, isOverride };
    };

    const updateStyle = (prop: string, value: string) => {
        dispatch({ type: 'UPDATE_NODE_STYLE', payload: { nodeId, style: { [prop]: value } } });
    };

    const resetStyle = (prop: string) => {
        dispatch({ type: 'RESET_NODE_STYLE', payload: { nodeId, prop, breakpoint: bp } });
    };

    const renderInput = (label: string, prop: string) => {
        const { val, isOverride } = getValue(prop);
        return (
            <div style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center'}}>
                <label style={{flex: 1, fontSize: '0.75rem', color: isOverride ? '#00aaff' : '#aaa'}}>{label}</label>
                <input 
                    type="text" 
                    value={val}
                    placeholder="Inherited"
                    style={{
                        width: '100px', padding: '4px', background: '#222', color: '#fff', 
                        border: `1px solid ${isOverride ? '#00aaff' : '#444'}`, borderRadius: '3px'
                    }}
                    onChange={(e) => updateStyle(prop, e.target.value)}
                />
                {isOverride && bp !== 'desktop' && (
                    <button 
                        onClick={() => resetStyle(prop)}
                        style={{background:'transparent', color:'#ff4444', border:'none', marginLeft:'4px', cursor:'pointer', padding:'2px 4px'}}
                        title="Reset override"
                    >×</button>
                )}
            </div>
        );
    };

    return (
        <div style={{padding: '1rem'}}>
            <div style={{marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem'}}>
                <div style={{fontSize: '0.8rem', fontWeight: 'bold', color: '#fff'}}>Node: {node.type}</div>
                <div style={{fontSize: '0.7rem', color: '#888'}}>ID: {node.id}</div>
            </div>
            
            <div style={{marginBottom: '1rem'}}>
                <h4 style={{fontSize: '0.8rem', margin: '0 0 0.5rem 0', color: '#ddd'}}>Layout</h4>
                {renderInput('Display', 'display')}
                {getValue('display').val === 'flex' && (
                    <>
                        {renderInput('Direction', 'flexDirection')}
                        {renderInput('Justify', 'justifyContent')}
                        {renderInput('Align', 'alignItems')}
                        {renderInput('Wrap', 'flexWrap')}
                        {renderInput('Gap', 'gap')}
                    </>
                )}
                {getValue('display').val === 'grid' && (
                    <>
                        {renderInput('Columns', 'gridTemplateColumns')}
                        {renderInput('Rows', 'gridTemplateRows')}
                        {renderInput('Gap', 'gap')}
                        {renderInput('Row Gap', 'rowGap')}
                        {renderInput('Col Gap', 'columnGap')}
                    </>
                )}
            </div>

            <div style={{marginBottom: '1rem'}}>
                <h4 style={{fontSize: '0.8rem', margin: '0 0 0.5rem 0', color: '#ddd'}}>Spacing</h4>
                {renderInput('Padding', 'padding')}
                {renderInput('Margin', 'margin')}
            </div>

            <div style={{marginBottom: '1rem'}}>
                <h4 style={{fontSize: '0.8rem', margin: '0 0 0.5rem 0', color: '#ddd'}}>Size & Position</h4>
                {renderInput('Width', 'width')}
                {renderInput('Height', 'height')}
                {renderInput('Position', 'position')}
                {['absolute', 'fixed', 'relative'].includes(getValue('position').val) && (
                    <>
                        {renderInput('Top', 'top')}
                        {renderInput('Right', 'right')}
                        {renderInput('Bottom', 'bottom')}
                        {renderInput('Left', 'left')}
                        {renderInput('Z-Index', 'zIndex')}
                    </>
                )}
            </div>
        </div>
    );
}
