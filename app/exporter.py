from __future__ import annotations

import io
import json
import re
import zipfile
import tempfile
import shutil
from pathlib import Path

from bs4 import BeautifulSoup
from sqlalchemy import text

from .config import ROOT
from .db import SessionLocal
from .media import get_asset, load_bytes
from .structured_editor import effective_operations, parse_document
from .seo_engine import page_public_slug, seo_document
from .templates import BY_SLUG, AI_RUNTIME_SLUG, IMPORTED_RUNTIME_SLUG
from .link_icons import footer_links_fragment, links_from_seo_json

BINARY_EXT={'.webp','.png','.jpg','.jpeg','.gif','.ico','.woff','.woff2','.ttf','.otf','.pdf','.avif'}


def _referenced_asset_ids(site: dict, document: dict) -> set[str]:
    pages={str(op.get('page') or 'home') for op in document.get('operations',[])} or {'home'}
    ids=set()
    for page in pages:
        ids.update(str(op.get('asset_id')) for op in effective_operations(document,page) if op.get('asset_id'))
    for raw in [site.get('brand_json'),site.get('seo_json')]:
        try: data=json.loads(raw or '{}')
        except Exception: data={}
        blob=json.dumps(data)
        with SessionLocal() as db:
            rows=db.execute(text('SELECT id FROM media_assets WHERE site_id=:s AND deleted_at IS NULL'),{'s':site['id']}).fetchall()
        for (aid,) in rows:
            if aid in blob: ids.add(aid)
    if site.get('template_slug')==IMPORTED_RUNTIME_SLUG:
        from .importer import imported_asset_ids
        ids.update(imported_asset_ids(site['id']))
    return ids


def _structured_client_source(raw: str|None, asset_paths: dict[str,str]|None=None, brand: dict|None=None, footer_links: list[dict]|None=None) -> str:
    document=parse_document(raw); paths=asset_paths or {}; brand=dict(brand or {}); prepared=[]
    for op in document.get('operations',[]):
        item=dict(op)
        if item.get('type')=='replace_image' and item.get('asset_id') in paths:
            item['export_src']=paths[item['asset_id']]
        prepared.append(item)
    payload=json.dumps(prepared,separators=(',',':')).replace('</','<\\/')
    brand_payload=json.dumps(brand,separators=(',',':')).replace('</','<\\/')
    footer_payload=json.dumps(footer_links_fragment(footer_links or []),ensure_ascii=False).replace('</','<\\/')
    js=r'''"use client";
import {useEffect} from 'react';
const ops=__OPS__;
const brand=__BRAND__;
const footerHtml=__FOOTER__;
const motionCss=`@keyframes zyGradientShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}@keyframes zyAuroraShift{0%{background-position:0% 25%}33%{background-position:60% 70%}66%{background-position:100% 35%}100%{background-position:0% 25%}}.zy-hover-lift,.zy-hover-scale,.zy-hover-shadow,.zy-hover-color-shift,.zy-hover-tilt,.zy-hover-glow,.zy-hover-underline,.zy-hover-image-zoom{transition:transform .28s cubic-bezier(.2,.7,.2,1),box-shadow .28s ease,filter .28s ease,color .28s ease,background .28s ease}.zy-hover-lift:hover{transform:translateY(-6px)}.zy-hover-scale:hover{transform:scale(1.03)}.zy-hover-shadow:hover{box-shadow:0 18px 48px rgba(0,0,0,.18)}.zy-hover-color-shift:hover{filter:saturate(1.2) contrast(1.04)}.zy-hover-tilt:hover{transform:perspective(900px) rotateX(2deg) rotateY(-3deg) translateY(-2px)}.zy-hover-glow:hover{box-shadow:0 0 0 1px currentColor,0 0 42px rgba(127,127,127,.22)}.zy-hover-underline{background-image:linear-gradient(currentColor,currentColor);background-size:0 1px;background-repeat:no-repeat;background-position:0 100%}.zy-hover-underline:hover{background-size:100% 1px}.zy-hover-image-zoom{overflow:hidden}.zy-hover-image-zoom img{transition:transform .45s cubic-bezier(.2,.7,.2,1)}.zy-hover-image-zoom:hover img{transform:scale(1.045)}.zy-gradient-soft-shift{background-size:200% 200%;animation:zyGradientShift var(--zy-gradient-duration,8s) ease infinite}.zy-gradient-aurora-shift{background-size:300% 300%;animation:zyAuroraShift var(--zy-gradient-duration,12s) ease-in-out infinite}[data-zylora-scroll-effect=parallax],[data-zylora-scroll-effect=scroll-scale],[data-zylora-scroll-effect=scroll-rotate],[data-zylora-scroll-effect=horizontal-move],[data-zylora-scroll-effect=image-zoom]{will-change:transform}.zy-hover-magnetic,.zy-hover-text-shift,.zy-hover-reveal-overlay{transition:transform .28s cubic-bezier(.2,.7,.2,1)}.zy-hover-magnetic:hover{transform:translateY(-3px) scale(1.015)}.zy-hover-text-shift:hover{transform:translateX(5px)}@keyframes zyFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}@keyframes zyPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.025)}}@keyframes zyLoopRotate{to{transform:rotate(360deg)}}@keyframes zyMarquee{from{transform:translateX(0)}to{transform:translateX(-25%)}}.zy-loop-float{animation:zyFloat var(--zy-loop-duration,5s) ease-in-out infinite}.zy-loop-pulse{animation:zyPulse var(--zy-loop-duration,4s) ease-in-out infinite}.zy-loop-rotate{animation:zyLoopRotate var(--zy-loop-duration,8s) linear infinite}.zy-loop-marquee{animation:zyMarquee var(--zy-loop-duration,12s) linear infinite}.zy-loop-gradient-shift{background-size:200% 200%;animation:zyGradientShift var(--zy-loop-duration,8s) ease infinite}html[data-zylora-page-transition=fade] body{animation:zyFade var(--zy-page-transition-duration,.45s) ease both}[data-zylora-nav-behavior=sticky],[data-zylora-nav-behavior=transparent-solid],[data-zylora-nav-behavior=floating-glass],[data-zylora-nav-behavior=hide-reveal]{position:sticky!important;top:0;z-index:999}[data-zylora-nav-behavior=floating-glass]{margin:12px auto 0;width:min(94%,1280px);backdrop-filter:blur(18px);border-radius:18px}@media(prefers-reduced-motion:reduce){[class*=zy-hover-],[class*=zy-gradient-]{animation:none!important;transition:none!important;transform:none!important;filter:none!important}[data-zylora-scroll-effect]{transform:none!important}}`;
function page(){const p=location.pathname.replace(/^\/|\/$/g,'');return p||'home'}
function targets(o){let a=[];try{a=[...document.querySelectorAll(o.selector||'')]}catch{}if(!a.length&&o.fallback_selector){try{a=[...document.querySelectorAll(o.fallback_selector)]}catch{}}if(!a.length&&o.target_role==='logo')a=[document.querySelector('header .wordmark,header .brand,header b,header strong')].filter(Boolean);if(!a.length&&o.target_role==='hero-image')a=[document.querySelector('img,.heroMedia,.heroImg,.arch,.hero-media,[class*=heroMedia],[class*=heroImg]')].filter(Boolean);if(!a.length&&o.fallback_tag){const x=[...document.querySelectorAll(o.fallback_tag)];if(x[o.fallback_index||0])a=[x[o.fallback_index||0]]}return a}
function imageTarget(el){if(!el)return null;const t=String(el.tagName||'').toUpperCase();if(t==='IMG'||t==='IMAGE'||(t==='VIDEO'&&el.hasAttribute('poster')))return el;return el.querySelector?.('img,svg image,video[poster]')||null}
function setVisualSource(el,src,alt){const m=imageTarget(el);if(!m)return false;const t=String(m.tagName||'').toUpperCase();if(t==='VIDEO')m.poster=src;else if(t==='IMAGE'){m.setAttribute('href',src);if(m.hasAttribute('xlink:href'))m.setAttribute('xlink:href',src)}else{m.src=src;m.removeAttribute('srcset');const p=m.closest('picture');if(p)p.querySelectorAll('source').forEach(x=>x.srcset=src);if(alt!==undefined)m.alt=alt}return true}
function refTarget(o){let r=null;try{r=document.querySelector(o.target_selector||'')}catch{}if(!r&&o.target_fallback_selector){try{r=document.querySelector(o.target_fallback_selector)}catch{}}if(!r&&o.target_fallback_tag){const a=[...document.querySelectorAll(o.target_fallback_tag)];r=a[o.target_fallback_index||0]||null}return r}
function effectiveOps(){const active=[];for(const o of ops){if(o.page!=='*'&&o.page!==page())continue;const sel=o.selector||'';if(o.type==='reset_image'){for(let i=active.length-1;i>=0;i--){const x=active[i];if((x.selector||'')===sel&&(x.type==='replace_image'||String(x.type).startsWith('set_image')||x.type==='set_responsive_image_focal_point'))active.splice(i,1)}continue}if(o.type==='reset_style'){for(let i=active.length-1;i>=0;i--){const x=active[i];if((x.selector||'')===sel&&['set_style','set_responsive_style','set_effect','set_responsive_effect','set_state_style','set_loop','set_animation','set_hover','set_visibility','set_class'].includes(x.type))active.splice(i,1)}continue}if(o.type==='reset_element'||o.type==='reset_section'){for(let i=active.length-1;i>=0;i--){if((active[i].selector||'')===sel)active.splice(i,1)}continue}active.push(o)}return active}
function addStyle(css,id){let s=document.getElementById(id);if(!s){s=document.createElement('style');s.id=id;document.head.appendChild(s)}s.textContent+=css}
function selectorFor(o){if(o.fallback_selector)return o.fallback_selector;if(o.target_role==='logo')return 'header .wordmark,header .brand,header b,header strong';if(o.target_role==='hero-image')return 'img,.heroMedia,.heroImg,.arch,.hero-media';return o.fallback_tag||o.selector}
function initMotion(){const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce)return()=>{};const frames={fade:[{opacity:0},{opacity:1}],'fade-up':[{opacity:0,transform:'translateY(28px)'},{opacity:1,transform:'none'}],'fade-down':[{opacity:0,transform:'translateY(-28px)'},{opacity:1,transform:'none'}],'slide-left':[{opacity:0,transform:'translateX(42px)'},{opacity:1,transform:'none'}],'slide-right':[{opacity:0,transform:'translateX(-42px)'},{opacity:1,transform:'none'}],'scale-in':[{opacity:0,transform:'scale(.94)'},{opacity:1,transform:'none'}],'blur-in':[{opacity:0,filter:'blur(14px)'},{opacity:1,filter:'none'}],reveal:[{opacity:0,clipPath:'inset(0 100% 0 0)'},{opacity:1,clipPath:'inset(0)'}],'mask-reveal':[{opacity:0,clipPath:'inset(0 0 100% 0)'},{opacity:1,clipPath:'inset(0)'}],'text-reveal':[{opacity:0,transform:'translateY(.8em)',clipPath:'inset(0 0 100% 0)'},{opacity:1,transform:'none',clipPath:'inset(0)'}],'zoom-in':[{opacity:0,transform:'scale(.88)'},{opacity:1,transform:'none'}],'clip-up':[{opacity:0,clipPath:'inset(100% 0 0 0)'},{opacity:1,clipPath:'inset(0)'}],'rotate-in':[{opacity:0,transform:'rotate(-2.5deg) translateY(20px)'},{opacity:1,transform:'none'}],'soft-bounce':[{opacity:0,transform:'translateY(34px)'},{opacity:1,transform:'translateY(-5px)',offset:.75},{opacity:1,transform:'none'}]};const bp=innerWidth<=640?'mobile':innerWidth<=980?'tablet':'desktop';for(const el of document.querySelectorAll('[data-zylora-responsive-mobile-scroll],[data-zylora-responsive-tablet-scroll],[data-zylora-responsive-desktop-scroll],[data-zylora-responsive-mobile-hover],[data-zylora-responsive-tablet-hover],[data-zylora-responsive-desktop-hover]')){const order=bp==='mobile'?['tablet','mobile']:[bp];for(const b of order){const B=b[0].toUpperCase()+b.slice(1),scroll=el.dataset['zyloraResponsive'+B+'Scroll'],hover=el.dataset['zyloraResponsive'+B+'Hover'];if(scroll){el.dataset.zyloraScrollEffect=scroll;el.dataset.zyloraDuration=el.dataset['zyloraResponsive'+B+'Duration']||'700';el.dataset.zyloraDelay=el.dataset['zyloraResponsive'+B+'Delay']||'0';el.dataset.zyloraStagger=el.dataset['zyloraResponsive'+B+'Stagger']||'90';el.dataset.zyloraAmount=el.dataset['zyloraResponsive'+B+'Amount']||'12'}if(hover){[...el.classList].filter(x=>x.startsWith('zy-hover-')).forEach(x=>el.classList.remove(x));if(hover!=='none')el.classList.add('zy-hover-'+hover)}}}const nodes=[...document.querySelectorAll('[data-zylora-scroll-effect]')];const play=(el,effect)=>{const duration=Math.max(100,Math.min(3000,+el.dataset.zyloraDuration||700)),delay=Math.max(0,Math.min(3000,+el.dataset.zyloraDelay||0));if(effect==='stagger'){const gap=Math.max(20,Math.min(300,+el.dataset.zyloraStagger||90));[...el.children].forEach((child,i)=>child.animate(frames['fade-up'],{duration,delay:delay+i*gap,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'}));return}el.animate(frames[effect]||frames['fade-up'],{duration,delay,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'})};const reveal=nodes.filter(n=>n.dataset.zyloraScrollEffect!=='parallax');const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){play(e.target,e.target.dataset.zyloraScrollEffect);io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6%'});reveal.forEach(n=>io.observe(n));const ps=nodes.filter(n=>n.dataset.zyloraScrollEffect==='parallax');let raf=0;const update=()=>{raf=0;for(const el of ps){const r=el.getBoundingClientRect(),amount=Math.max(2,Math.min(30,+el.dataset.zyloraAmount||12));if(r.bottom>0&&r.top<innerHeight)el.style.transform=`translate3d(0,${((r.top+r.height/2-innerHeight/2)/innerHeight)*amount}px,0)`}};const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};if(ps.length){addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',onScroll,{passive:true});update()}const carouselTimers=[];document.querySelectorAll('[data-zylora-carousel-effect]:not([data-zylora-carousel-effect=none])').forEach(root=>{const kids=[...root.children];if(kids.length<2)return;let index=0;kids.forEach((k,i)=>{k.hidden=i!==0});const interval=Math.max(1500,Math.min(30000,+root.dataset.zyloraCarouselInterval||5000));carouselTimers.push(setInterval(()=>{const prev=kids[index];index=(index+1)%kids.length;const next=kids[index];prev.hidden=true;next.hidden=false;if(root.dataset.zyloraCarouselEffect==='fade')next.animate([{opacity:0},{opacity:1}],{duration:380,fill:'both'});else next.animate([{opacity:0,transform:'translateX(18px)'},{opacity:1,transform:'none'}],{duration:420,fill:'both'})},interval))});return()=>{io.disconnect();if(ps.length){removeEventListener('scroll',onScroll);removeEventListener('resize',onScroll)}carouselTimers.forEach(clearInterval)}}
function applyBrand(){const root=document.documentElement;const colors={primary:brand.primary,secondary:brand.secondary,background:brand.background,surface:brand.surface,heading:brand.heading,body:brand.body};Object.entries(colors).forEach(([k,v])=>{if(v)root.style.setProperty('--z-'+k,v)});let css='';if(brand.background)css+=`body{background:${brand.background}}`;if(brand.body)css+=`body{color:${brand.body}}`;if(brand.heading)css+=`h1,h2,h3,h4,h5,h6{color:${brand.heading}}`;if(brand.heading_font)css+=`h1,h2,h3,h4,h5,h6{font-family:${JSON.stringify(brand.heading_font)}}`;if(brand.body_font)css+=`body{font-family:${JSON.stringify(brand.body_font)}}`;if(brand.button_radius)css+=`button,.button,.cta,a[class*=button],a[class*=cta]{border-radius:${brand.button_radius}}`;if(css)addStyle(css,'zylora-brand-overrides');if(brand.logo_export_src){const t=document.querySelector('[data-zylora-role=logo],header .wordmark,header .brand,header b,header strong');if(t){t.innerHTML='';const i=document.createElement('img');i.src=brand.logo_export_src;i.alt='Brand logo';i.style.cssText='max-width:100%;max-height:52px;object-fit:contain;width:auto;height:auto';t.appendChild(i)}}if(brand.favicon_export_src){let l=document.querySelector('link[rel~=icon]');if(!l){l=document.createElement('link');l.rel='icon';document.head.appendChild(l)}l.href=brand.favicon_export_src}}
function apply(o){if(o.type==='set_token'){document.documentElement.style.setProperty('--z-'+o.token,o.value);return}if(o.type==='add_section'){const root=document.querySelector('main')||document.body;if(o.position==='start')root.insertAdjacentHTML('afterbegin',o.html);else if(o.position==='before_footer'&&document.querySelector('footer'))document.querySelector('footer').insertAdjacentHTML('beforebegin',o.html);else root.insertAdjacentHTML('beforeend',o.html);return}if(o.type==='set_page_transition'){document.documentElement.dataset.zyloraPageTransition=o.transition||'none';document.documentElement.style.setProperty('--zy-page-transition-duration',String(o.duration_ms||450)+'ms');return}if(o.type==='set_navigation'){const nav=document.querySelector('header')||document.querySelector('nav');if(nav){nav.dataset.zyloraNavBehavior=o.behavior||'default';nav.style.setProperty('--zy-nav-spacing',o.spacing||'24px');const hover=o.link_hover||'none';nav.querySelectorAll('a').forEach(a=>{[...a.classList].filter(x=>x.startsWith('zy-hover-')).forEach(x=>a.classList.remove(x));if(hover!=='none')a.classList.add('zy-hover-'+hover)})}return}if(o.type==='set_responsive_style'||o.type==='set_visibility'||o.type==='set_responsive_image_focal_point'){const q=o.breakpoint==='mobile'?'@media(max-width:640px)':o.breakpoint==='tablet'?'@media(max-width:980px)':o.breakpoint==='desktop'?'@media(min-width:981px)':'';const body=o.type==='set_visibility'?(o.visible?'display:revert!important':'display:none!important'):o.type==='set_responsive_image_focal_point'?`${o.mode==='background'?'background-position':'object-position'}:${o.x}% ${o.y}%`:Object.entries(o.styles||{}).map(([k,v])=>`${k}:${v}`).join(';');addStyle(q?`${q}{${selectorFor(o)}{${body}}}`:`${selectorFor(o)}{${body}}`,'zylora-responsive-overrides');return}if(o.type==='set_responsive_effect'){targets(o).forEach(el=>{const b=(o.breakpoint||'').replace(/(^|-)([a-z])/g,(_,a,c)=>c.toUpperCase()),kind=o.effect_kind||'';el.dataset['zyloraResponsive'+b+(kind==='scroll'?'Scroll':'Hover')]=o.effect||'none';if(kind==='scroll'){const cfg=o.config||{};el.dataset['zyloraResponsive'+b+'Duration']=String(cfg.duration_ms||700);el.dataset['zyloraResponsive'+b+'Delay']=String(cfg.delay_ms||0);el.dataset['zyloraResponsive'+b+'Stagger']=String(cfg.stagger_ms||90);el.dataset['zyloraResponsive'+b+'Amount']=String(cfg.amount||12)}});return}if(o.type==='set_state_style'){const sel=selectorFor(o),state=o.state||'hover',suffix=state==='selected'?'[aria-selected="true"],'+sel+'[data-selected="true"]':state==='expanded'?'[aria-expanded="true"]':':'+state;addStyle(`${sel}${suffix}{${Object.entries(o.styles||{}).map(([k,v])=>`${k}:${v}`).join(';')}}`,'zylora-component-states');return}targets(o).forEach(el=>{if(o.type==='set_text')el.textContent=o.text;else if(o.type==='set_html')el.innerHTML=o.html;else if(o.type==='set_image'){setVisualSource(el,o.src,o.alt||'')}else if(o.type==='replace_image'){const src=o.export_src||'';let img=imageTarget(el);if(o.mode==='background'){el.style.backgroundImage=`url("${src}")`}else if(img){setVisualSource(el,src,'alt'in o?(o.alt||''):undefined)}else if(o.mode==='logo'||o.target_role==='logo'){el.innerHTML='';img=document.createElement('img');img.src=src;img.alt=o.alt||'';img.style.cssText='max-width:100%;max-height:100%;object-fit:contain;height:auto';el.appendChild(img)}else{el.style.backgroundImage=`url("${src}")`}}else if(o.type==='set_image_crop'){const img=imageTarget(el),c=o.crop;if(img){img.style.clipPath=`inset(${c.y}% ${100-(c.x+c.width)}% ${100-(c.y+c.height)}% ${c.x}%)`}else{el.style.backgroundSize=`${10000/c.width}% ${10000/c.height}%`;el.style.backgroundPosition=`${Math.max(0,Math.min(100,(c.x/(100-c.width||1))*100))}% ${Math.max(0,Math.min(100,(c.y/(100-c.height||1))*100))}%`}}else if(o.type==='set_image_focal_point'){const img=imageTarget(el);if(o.mode==='background')el.style.backgroundPosition=`${o.x}% ${o.y}%`;else if(img)img.style.objectPosition=`${o.x}% ${o.y}%`;else el.style.backgroundPosition=`${o.x}% ${o.y}%`}else if(o.type==='set_image_fit'){const img=imageTarget(el);if(o.mode==='background')el.style.backgroundSize=o.fit==='contain'?'contain':o.fit==='auto'?'auto':o.fit==='fill'?'100% 100%':'cover';else if(img)img.style.objectFit=o.fit==='auto'?'scale-down':o.fit;else el.style.backgroundSize=o.fit==='contain'?'contain':o.fit==='auto'?'auto':o.fit==='fill'?'100% 100%':'cover'}else if(o.type==='set_image_alt'){const img=imageTarget(el);if(img){img.alt=o.decorative?'':o.alt||'';if(o.decorative)img.setAttribute('aria-hidden','true');else img.removeAttribute('aria-hidden')}}else if(o.type==='set_style')Object.assign(el.style,o.styles);else if(o.type==='set_attribute')el.setAttribute(o.attribute,o.value);else if(o.type==='set_required'){if(o.required)el.setAttribute('required','required');else el.removeAttribute('required')}else if(o.type==='set_link'){if(el.tagName==='A'){el.href=o.link_type==='page'?(o.page_slug==='home'?'/':'/'+o.page_slug):o.href;if('label'in o)el.textContent=o.label;if(o.new_tab){el.target='_blank';el.rel='noopener noreferrer'}else{el.removeAttribute('target');el.removeAttribute('rel')}}}else if(o.type==='set_class')el.className=o.classes;else if(o.type==='set_loop'){[...el.classList].filter(x=>x.startsWith('zy-loop-')).forEach(x=>el.classList.remove(x));if((o.effect||'none')!=='none'){el.classList.add('zy-loop-'+o.effect);el.style.setProperty('--zy-loop-duration',String(o.duration_ms||5000)+'ms');el.style.animationDelay=String(o.delay_ms||0)+'ms'}}else if(o.type==='remove')el.remove();else if(o.type==='duplicate')el.after(el.cloneNode(true));else if(o.type==='move_before'||o.type==='move_after'){const r=refTarget(o);if(r&&r!==el)r[o.type==='move_before'?'before':'after'](el)}else if(o.type==='set_effect'){const fam=o.effect_kind||o.effect_family||o.family||'';const eff=o.effect||'none',cfg=o.config||{};if(fam==='scroll'){[...el.classList].filter(x=>x.startsWith('zy-motion-')).forEach(x=>el.classList.remove(x));['zyloraScrollEffect','zyloraDuration','zyloraDelay','zyloraStagger','zyloraAmount'].forEach(k=>delete el.dataset[k]);if(eff!=='none'){el.classList.add('zy-motion-'+eff);el.dataset.zyloraScrollEffect=eff;el.dataset.zyloraDuration=String(cfg.duration_ms||o.duration_ms||700);el.dataset.zyloraDelay=String(cfg.delay_ms||o.delay_ms||0);el.dataset.zyloraStagger=String(cfg.stagger_ms||90);el.dataset.zyloraAmount=String(cfg.amount||12)}}else if(fam==='hover'){[...el.classList].filter(x=>x.startsWith('zy-hover-')).forEach(x=>el.classList.remove(x));if(eff!=='none')el.classList.add('zy-hover-'+eff)}else if(fam==='gradient'){[...el.classList].filter(x=>x.startsWith('zy-gradient-')).forEach(x=>el.classList.remove(x));if(eff!=='none'){el.classList.add('zy-gradient-'+eff);el.style.setProperty('--zy-gradient-duration',String(cfg.duration_ms||8000)+'ms')}}else if(fam==='carousel'){el.dataset.zyloraCarouselEffect=eff;el.dataset.zyloraCarouselInterval=String(cfg.interval_ms||o.interval_ms||5000)}}else if(o.type==='set_animation'){[...el.classList].filter(x=>x.startsWith('zy-motion-')).forEach(x=>el.classList.remove(x));if(o.animation!=='none')el.classList.add('zy-motion-'+o.animation);el.style.animationDuration=(o.duration_ms||700)+'ms';el.style.animationDelay=(o.delay_ms||0)+'ms'}else if(o.type==='set_hover'){[...el.classList].filter(x=>x.startsWith('zy-hover-')).forEach(x=>el.classList.remove(x));if(o.effect!=='none')el.classList.add('zy-hover-'+o.effect)}})}
export default function ZyloraEdits(){useEffect(()=>{if(!document.getElementById('zylora-structured-motion')){const s=document.createElement('style');s.id='zylora-structured-motion';s.textContent=motionCss;document.head.appendChild(s)}applyBrand();effectiveOps().forEach(apply);const disposeMotion=initMotion();if(footerHtml){const f=document.querySelector('footer');if(f&&!f.querySelector('[data-zylora-footer-links]')){const w=document.createElement('div');w.innerHTML=footerHtml;const n=w.firstElementChild;if(n){const st=document.createElement('style');st.textContent='.zylora-footer-links{display:flex;flex-wrap:wrap;gap:10px;max-width:100%;margin-inline-start:auto}.zylora-footer-link{display:inline-grid;place-items:center;width:44px;height:44px;color:inherit;text-decoration:none;border:1px solid currentColor;border-radius:999px}.zylora-footer-link:focus-visible{outline:3px solid currentColor;outline-offset:3px}@media(max-width:640px){.zylora-footer-links{width:100%;margin-inline-start:0}}';f.append(st,n)}}}return()=>{disposeMotion?.()}},[]);return null}
'''
    return js.replace('__OPS__',payload).replace('__BRAND__',brand_payload).replace('__FOOTER__',footer_payload)


def _json_obj(raw) -> dict:
    try: data=json.loads(raw or '{}') if not isinstance(raw,dict) else raw
    except Exception: data={}
    return data if isinstance(data,dict) else {}


def _export_metadata(page: str, site: dict, asset_paths: dict[str,str], canonical_path: str='/', *, layout: bool=False) -> str:
    seo=_json_obj(site.get('seo_json')); pages=seo.get('pages') if isinstance(seo.get('pages'),dict) else {}; d=pages.get(page) if isinstance(pages.get(page),dict) else {}
    site_cfg=seo.get('site') if isinstance(seo.get('site'),dict) else {}
    title=str(d.get('title') or site_cfg.get('title') or site.get('business_name') or 'Website')[:180]
    desc=str(d.get('description') or site_cfg.get('description') or site.get('description') or '')[:500]
    obj={'title':title,'description':desc}
    noindex=(site_cfg.get('indexable') is False) or d.get('noindex') is True or d.get('indexable') is False
    if noindex: obj['robots']={'index':False,'follow':False}
    og={}
    if d.get('og_title') or site_cfg.get('og_title'): og['title']=str(d.get('og_title') or site_cfg.get('og_title'))[:180]
    if d.get('og_description') or site_cfg.get('og_description'): og['description']=str(d.get('og_description') or site_cfg.get('og_description'))[:500]
    aid=str(d.get('og_image_asset_id') or site_cfg.get('og_image_asset_id') or '')
    if aid and aid in asset_paths: og['images']=[asset_paths[aid]]
    base="const zyloraSiteUrl=(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000').trim().replace(/\\/$/,'');\n"
    if layout:
        return base+'export const metadata={...'+json.dumps(obj,separators=(',',':'),ensure_ascii=False)+',metadataBase:new URL(zyloraSiteUrl)};'
    og['url']=canonical_path
    obj['openGraph']=og
    obj['twitter']={'card':'summary_large_image',**({k:v for k,v in og.items() if k in {'title','description','images'}})}
    payload=json.dumps(obj,separators=(',',':'),ensure_ascii=False)
    return base+'export const metadata={...'+payload+',metadataBase:new URL(zyloraSiteUrl),alternates:{canonical:'+json.dumps(canonical_path,ensure_ascii=False)+'}};'


def _inject_metadata(source_text: str, page: str, site: dict, asset_paths: dict[str,str], canonical_path: str='/', *, layout: bool=False) -> str:
    line=_export_metadata(page,site,asset_paths,canonical_path,layout=layout)
    import re
    source_text=re.sub(r'export\s+const\s+metadata\s*=\s*\{.*?\}\s*;?', '', source_text, count=1, flags=re.S)
    # Remove an earlier generated metadata-base constant on repeated exports/tests.
    source_text=re.sub(r"const\s+zyloraSiteUrl=.*?;\s*",'',source_text,count=1)
    # Metadata must follow imports but precede the component export.
    matches=list(re.finditer(r'^import[^\n]*\n?',source_text,flags=re.M))
    pos=matches[-1].end() if matches else 0
    return source_text[:pos]+line+'\n'+source_text[pos:]

def _assert_safe_template_file(source: Path, path: Path) -> None:
    """Reject symlinks and any source entry that resolves outside its template root."""
    if path.is_symlink():
        raise ValueError(f"Unsafe symlink in template project: {path.relative_to(source)}")
    root=source.resolve()
    resolved=path.resolve()
    if resolved != root and root not in resolved.parents:
        raise ValueError(f"Unsafe template path outside project root: {path}")


def _export_page_map(site: dict, meta: dict, page_count: int) -> dict[str,str]:
    document=parse_document(site.get("draft_structure_json"))
    declared=[]
    for page in document.get("pages") or []:
        if isinstance(page,dict):
            key=str(page.get("id") or page.get("key") or page.get("slug") or "").strip("/")
        else:
            key=str(page or "").strip("/")
        if key and key not in declared:
            declared.append(key)
    keys=declared or ["home",*meta.get("page_slugs",[])[:max(0,page_count-1)]]
    if "home" not in keys:
        keys.insert(0,"home")
    return {key:page_public_slug(site,key) for key in keys}


def _export_route_sources(site: dict, page_map: dict[str,str]) -> dict[str,str]:
    seo=seo_document(site); site_cfg=seo.get("site") or {}
    indexable=site_cfg.get("indexable") is not False
    page_rows=[]
    for key,slug in page_map.items():
        cfg=(seo.get("pages") or {}).get(key) or {}
        if cfg.get("noindex") is True or cfg.get("indexable") is False:
            continue
        route="/" if key=="home" else "/"+slug
        page_rows.append({"url":route,"lastModified":site.get("updated_at") or site.get("published_at")})
    rows=json.dumps(page_rows,separators=(",",":"),ensure_ascii=False)
    rules="[{userAgent:'*',allow:'/'}]" if indexable else "[{userAgent:'*',disallow:'/'}]"
    robots_js=(
        "export const dynamic=\'force-static\';\n"
        "const base=()=>{const v=(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000').trim().replace(/\\/$/,'');return v};\n"
        f"export default function robots(){{return {{rules:{rules},sitemap:base()+'/sitemap.xml'}}}}\n"
    )
    sitemap_js=(
        "export const dynamic=\'force-static\';\n"
        f"const rows={rows};\n"
        "const base=()=>{const v=(process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000').trim().replace(/\\/$/,'');return v};\n"
        "export default function sitemap(){return rows.map(x=>({url:base()+x.url,...(x.lastModified?{lastModified:new Date(x.lastModified)}:{})}))}\n"
    )
    not_found_js=(
        'export const metadata={robots:{index:false,follow:false}};\n'
        'export default function NotFound(){return <main style={{maxWidth:760,margin:"12vh auto",padding:"0 24px",fontFamily:"system-ui"}}><p>404</p><h1>Page not found</h1><p>The page may have moved or no longer exists.</p><a href="/">Return to homepage</a></main>}\n'
    )
    return {"app/robots.js":robots_js,"app/sitemap.js":sitemap_js,"app/not-found.jsx":not_found_js}


def _rewrite_internal_routes(source_text: str, page_map: dict[str,str]) -> str:
    for internal,public in page_map.items():
        if internal=="home" or internal==public:
            continue
        for quote in ('"',"'"):
            source_text=source_text.replace(f"{quote}/{internal}{quote}",f"{quote}/{public}{quote}")
            source_text=source_text.replace(f"{quote}/{internal}#",f"{quote}/{public}#")
            source_text=source_text.replace(f"{quote}/{internal}?",f"{quote}/{public}?")
    return source_text


def _ai_runtime_source(source: Path, site: dict, page_map: dict[str,str]) -> None:
    # Generated on demand from the SiteDocument. This is an export renderer,
    # not a catalogue template.
    try:
        raw=json.loads(site.get('draft_structure_json') or '{}')
    except Exception:
        raw={}
    raw_pages=raw.get('pages') if isinstance(raw.get('pages'),list) else []
    page_details={}
    for x in raw_pages:
        if not isinstance(x,dict):
            continue
        key=str(x.get('id') or x.get('slug') or '').strip().lower()
        if key:
            page_details[key]={'title':str(x.get('title') or key.replace('-',' ').title()),'purpose':str(x.get('purpose') or '')}
    for key in page_map:
        page_details.setdefault(key,{'title':'Home' if key=='home' else key.replace('-',' ').title(),'purpose':''})
    plan=raw.get('designPlan') if isinstance(raw.get('designPlan'),dict) else {}
    payload={
        'business':str(site.get('business_name') or site.get('name') or 'Business'),
        'tagline':str(site.get('tagline') or site.get('business_name') or 'A clear website, built around the brief.'),
        'description':str(site.get('description') or ''),
        'accent':str(site.get('accent') or '#111111'),
        'direction':str(plan.get('archetype') or plan.get('direction') or 'swiss-minimal'),
        'pages':[{**page_details[k],'key':k,'href':'/' if k=='home' else '/'+page_map[k]} for k in page_map],
    }
    source.mkdir(parents=True,exist_ok=True)
    app=source/'app'; app.mkdir(exist_ok=True)
    (source/'package.json').write_text(json.dumps({
        'name':'zylora-ai-export','private':True,'version':'1.0.0',
        'scripts':{'dev':'next dev','build':'next build','start':'next start'},
        'dependencies':{'next':'16.0.0','react':'19.2.0','react-dom':'19.2.0'}
    },indent=2))
    (source/'next.config.mjs').write_text("const nextConfig={output:'export',trailingSlash:true,images:{unoptimized:true}};\nexport default nextConfig;\n")
    data=json.dumps(payload,ensure_ascii=False,separators=(',',':')).replace('</','<\\/')
    component='''const site=__DATA__;
export default function SitePage({pageKey="home"}){const current=site.pages.find(p=>p.key===pageKey)||site.pages[0];const other=site.pages.filter(p=>p.key!=="home").slice(0,8);const home=pageKey==="home";return <><a className="skip" href="#main">Skip to content</a><header className="nav"><a className="brand" href="/">{site.business}</a><nav aria-label="Primary">{site.pages.slice(0,10).map(p=><a key={p.key} href={p.href}>{p.title}</a>)}</nav></header><main id="main" className="main" data-direction={site.direction}>{home?<><section className="hero"><div><p className="kicker">{site.business}</p><h1>{site.tagline}</h1></div><div className="copy"><p>{site.description}</p><a className="button" href="#contact">Get in touch</a></div></section><section className="index"><div className="indexHead"><h2>Everything people need, clearly organised.</h2><p>The information architecture and visual direction were generated from the business brief.</p></div><div className="grid">{other.length?other.map((p,i)=><a className="card" href={p.href} key={p.key}><small>{String(i+1).padStart(2,"0")}</small><div><h3>{p.title}</h3><p>{p.purpose||`Learn more about ${p.title.toLowerCase()}.`}</p></div></a>):<div className="card"><small>01</small><div><h3>Start a conversation</h3><p>Use the contact details on this website to reach the team.</p></div></div>}</div></section></>:<section className="page"><div><p className="kicker">{site.business} · {current.title}</p><h1>{current.title}</h1></div><div className="copy"><p>{current.purpose||site.description}</p><p>{site.description}</p><div className="actions"><a className="button" href="#contact">Get in touch</a><a className="button secondary" href="/">Back home</a></div></div></section>}<section id="contact" className="contact"><div><h2>Ready to talk?</h2><p>Use the business contact details you add before publishing to start the conversation.</p></div><a className="button inverse" href="#contact">Contact</a></section></main><footer><strong>{site.business}</strong><span>Independent Next.js export</span></footer></>}
'''.replace('__DATA__',data)
    (app/'site-page.jsx').write_text(component)
    (app/'layout.jsx').write_text("import './globals.css';\nexport default function RootLayout({children}){return <html lang=\"en\"><body>{children}</body></html>}\n")
    (app/'page.jsx').write_text("import SitePage from './site-page';\nexport default function Page(){return <SitePage pageKey=\"home\"/>}\n")
    for key in page_map:
        if key=='home':
            continue
        d=app/key; d.mkdir(parents=True,exist_ok=True)
        (d/'page.jsx').write_text(f"import SitePage from '../site-page';\nexport default function Page(){{return <SitePage pageKey={json.dumps(key)}/>}}\n")
    css=r'''@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap');
:root{--paper:#f7f6f2;--ink:#111214;--muted:#65696f;--line:#d9d8d3}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:Inter,Arial,sans-serif}.skip{position:fixed;left:-9999px;top:12px;background:#111;color:#fff;padding:10px 14px;z-index:99}.skip:focus{left:12px}.nav{min-height:76px;padding:18px clamp(20px,5vw,78px);border-bottom:1px solid var(--line);display:grid;grid-template-columns:1fr auto;align-items:center;gap:28px}.brand{font:700 23px 'Space Grotesk';letter-spacing:-.055em;text-decoration:none;color:inherit}.nav nav{display:flex;gap:20px;flex-wrap:wrap;justify-content:flex-end}.nav nav a{color:#555a60;text-decoration:none;font-size:12px}.main{max-width:1560px;margin:auto;padding:0 clamp(20px,5vw,78px)}.hero,.page{min-height:74vh;display:grid;grid-template-columns:1.3fr .7fr;gap:7vw;align-items:end;padding:clamp(80px,10vw,150px) 0 clamp(70px,8vw,120px);border-bottom:1px solid var(--line)}.page{align-items:start;grid-template-columns:1.1fr .9fr}.kicker{font:600 10px/1.4 Inter;text-transform:uppercase;letter-spacing:.16em;color:#777b80}.hero h1,.page h1,.index h2,.contact h2{font-family:'Space Grotesk';font-weight:500;letter-spacing:-.065em;line-height:.9;margin:18px 0 0}.hero h1,.page h1{font-size:clamp(62px,9vw,145px);max-width:11ch}.copy{padding-bottom:8px}.page .copy{padding-top:35px}.copy p{font-size:clamp(17px,1.45vw,22px);line-height:1.6;color:#53585e}.button{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 18px;border-radius:999px;background:#111;color:#fff;text-decoration:none;font-size:12px;font-weight:700;border:1px solid #111}.button.secondary{background:transparent;color:#111}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:28px}.index{padding:clamp(70px,9vw,128px) 0}.indexHead{display:grid;grid-template-columns:1fr 1fr;gap:45px;align-items:end;margin-bottom:48px}.index h2{font-size:clamp(42px,5vw,76px)}.indexHead p{color:var(--muted);line-height:1.6}.grid{display:grid;grid-template-columns:repeat(3,1fr);border-left:1px solid var(--line);border-top:1px solid var(--line)}.card{min-height:250px;padding:26px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between;color:inherit;text-decoration:none}.card small{color:#85898e}.card h3{font:500 28px/1 'Space Grotesk';letter-spacing:-.04em;margin:24px 0 10px}.card p{color:var(--muted);font-size:13px;line-height:1.55}.contact{margin:0 0 clamp(70px,8vw,120px);padding:clamp(34px,5vw,70px);background:#111;color:#fff;border-radius:20px;display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end}.contact h2{font-size:clamp(38px,5vw,68px);margin:0 0 12px}.contact p{color:#c6c8c9}.button.inverse{background:#fff;color:#111;border-color:#fff}footer{max-width:1560px;margin:auto;padding:28px clamp(20px,5vw,78px) 44px;display:flex;justify-content:space-between;color:#777;font-size:11px}footer strong{font-family:'Space Grotesk';color:#111}[data-direction="editorial-asymmetric"] .hero{grid-template-columns:.7fr 1.3fr}[data-direction="editorial-asymmetric"] .hero>div:first-child{grid-column:2;grid-row:1}[data-direction="editorial-asymmetric"] .hero>.copy{grid-column:1;grid-row:1}[data-direction="poster-brutalist"] .card,[data-direction="poster-brutalist"] .hero,[data-direction="poster-brutalist"] .page{border-color:#111;border-width:2px}[data-direction="modular-bento"] .grid{border:0;gap:12px}[data-direction="modular-bento"] .card{border:1px solid var(--line);border-radius:20px;background:#fff}[data-direction="typography-led"] .hero{grid-template-columns:1fr}[data-direction="typography-led"] .hero h1{max-width:13ch;font-size:clamp(68px,11vw,175px)}[data-direction="technical-grid"] .kicker{font-family:'IBM Plex Mono'}@media(max-width:850px){.hero,.page,.indexHead{grid-template-columns:1fr!important}[data-direction="editorial-asymmetric"] .hero>div:first-child,[data-direction="editorial-asymmetric"] .hero>.copy{grid-column:auto;grid-row:auto}.grid{grid-template-columns:1fr 1fr}.contact{grid-template-columns:1fr}}@media(max-width:560px){.nav nav a:nth-child(n+4){display:none}.hero h1,.page h1{font-size:56px}.grid{grid-template-columns:1fr}.contact{border-radius:0;margin-left:-20px;margin-right:-20px;padding-left:20px;padding-right:20px}}@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
'''
    (app/'globals.css').write_text(css)


def _imported_runtime_source(source: Path, site: dict, page_map: dict[str,str], asset_paths: dict[str,str]) -> None:
    """Generate a self-contained Next.js runtime from normalized imported HTML without executing uploaded code."""
    from .importer import render_imported_page
    app=source/'app'; app.mkdir(parents=True,exist_ok=True)
    (source/'package.json').write_text(json.dumps({
        'name':'zylora-imported-site','private':True,'version':'1.0.0',
        'scripts':{'dev':'next dev','build':'next build','start':'next start'},
        'dependencies':{'next':'16.0.0','react':'19.2.0','react-dom':'19.2.0'}
    },indent=2))
    (source/'next.config.mjs').write_text("const nextConfig={output:'export',images:{unoptimized:true}};\nexport default nextConfig;\n")
    css_chunks=['*{box-sizing:border-box}html,body{margin:0;min-height:100%}img,video{max-width:100%}']
    font_imports=[]
    page_payload={}
    for key,public_slug in page_map.items():
        raw=render_imported_page(site['id'],key)
        for aid,path in asset_paths.items():
            raw=re.sub(rf'/media/{re.escape(aid)}/[^\"\'\s)]+',path,raw)
        soup=BeautifulSoup(raw,'html.parser')
        for style in soup.find_all('style'):
            css_chunks.append(style.get_text() or '')
            style.decompose()
        for link in list(soup.find_all('link')):
            rel=' '.join(str(x) for x in (link.get('rel') or []))
            href=str(link.get('href') or '')
            if 'stylesheet' in rel.lower() and href.startswith('https://'):
                font_imports.append(f"@import url({json.dumps(href)});")
            link.decompose()
        for a in soup.select('a[data-zylora-page-link]'):
            target=str(a.get('data-zylora-page-link') or 'home')
            a['href']='/' if target=='home' else '/'+page_map.get(target,target)
        body=''.join(str(x) for x in (soup.body.contents if soup.body else soup.contents))
        page_payload[key]=body
    (app/'globals.css').write_text('\n'.join(dict.fromkeys(font_imports+css_chunks)))
    (app/'layout.jsx').write_text("import './globals.css';\nexport default function RootLayout({children}){return <html lang=\"en\"><body>{children}</body></html>}\n")
    for key,body in page_payload.items():
        target=app if key=='home' else app/page_map.get(key,key)
        target.mkdir(parents=True,exist_ok=True)
        payload=json.dumps(body,ensure_ascii=False)
        (target/'page.jsx').write_text(f"const html={payload};\nexport default function Page(){{return <div data-zylora-import-root dangerouslySetInnerHTML={{{{__html:html}}}} />}}\n")



def _catalogue_runtime_source(source: Path, site: dict, meta: dict, page_map: dict[str,str]) -> None:
    """Build a runnable, static-exportable Next.js project from a verified catalogue render."""
    slug=str(site.get('template_slug') or '')
    project=(ROOT/'template_projects'/slug).resolve()
    if not project.is_dir():
        raise FileNotFoundError(f'Missing template project: {slug}')
    app=source/'app'; public=source/'public'/'template-assets'
    app.mkdir(parents=True,exist_ok=True); public.mkdir(parents=True,exist_ok=True)
    (source/'package.json').write_text(json.dumps({
        'name':f'zylora-{slug}-export','private':True,'version':'1.0.0',
        'scripts':{'dev':'next dev','build':'next build','start':'next start'},
        'dependencies':{'next':'16.0.0','react':'19.2.0','react-dom':'19.2.0'}
    },indent=2))
    (source/'next.config.mjs').write_text("const nextConfig={output:'export',images:{unoptimized:true}};\nexport default nextConfig;\n")
    css=(project/'app'/'globals.css').read_text(encoding='utf-8') if (project/'app'/'globals.css').is_file() else ''
    css=css.replace('../assets/','/template-assets/')
    (app/'globals.css').write_text(css,encoding='utf-8')
    (app/'layout.jsx').write_text(
        "import './globals.css';\nexport default function RootLayout({children}){return <html lang=\"en\" suppressHydrationWarning><body>{children}</body></html>}\n",
        encoding='utf-8'
    )
    client='''"use client";
import {useEffect} from 'react';
export default function TemplatePage({html,scripts=[]}){
  useEffect(()=>{
    const mounted=[];
    for(const spec of scripts){
      const node=document.createElement('script');
      if(spec.attrs?.src && !('async' in (spec.attrs||{}))) node.async=false;
      for(const [k,v] of Object.entries(spec.attrs||{})){
        if(v===true) node.setAttribute(k,''); else if(v!==false&&v!=null) node.setAttribute(k,String(v));
      }
      if(spec.code) node.text=spec.code;
      document.body.appendChild(node); mounted.push(node);
    }
    return()=>mounted.forEach(node=>node.remove());
  },[scripts]);
  return <div data-zylora-template-root dangerouslySetInnerHTML={{__html:html}} />;
}
'''
    (app/'template-page.jsx').write_text(client,encoding='utf-8')
    for key,public_slug in page_map.items():
        render=(project/'render'/f'{key}.html').resolve()
        if project not in render.parents or not render.is_file():
            raise FileNotFoundError(f'Missing catalogue render page: {slug}/{key}')
        raw=render.read_text(encoding='utf-8').replace('../assets/','/template-assets/')
        soup=BeautifulSoup(raw,'html.parser')
        scripts=[]
        for node in list(soup.find_all('script')):
            attrs={str(k): (True if v=='' else v) for k,v in dict(node.attrs).items()}
            if 'src' in attrs and isinstance(attrs['src'],str):
                attrs['src']=attrs['src'].replace('../assets/','/template-assets/')
            scripts.append({'attrs':attrs,'code':node.string or node.get_text() or ''})
            node.decompose()
        for a in soup.select('a[data-zylora-page-link]'):
            target=str(a.get('data-zylora-page-link') or 'home')
            a['href']='/' if target=='home' else '/'+page_map.get(target,target)
        known={k:('/' if k=='home' else '/'+v) for k,v in page_map.items()}
        for a in soup.find_all('a',href=True):
            href=str(a.get('href') or '')
            stem=href.split('#',1)[0].split('?',1)[0]
            clean=stem.rsplit('/',1)[-1].removesuffix('.html').removesuffix('.htm')
            if clean in known and not href.startswith(('http://','https://','mailto:','tel:','javascript:','#')):
                suffix=href[len(stem):]
                a['href']=known[clean]+suffix
        body=''.join(str(x) for x in (soup.body.contents if soup.body else soup.contents))
        target=app if key=='home' else app/public_slug
        target.mkdir(parents=True,exist_ok=True)
        rel_import='./template-page' if key=='home' else '../template-page'
        payload=json.dumps(body,ensure_ascii=False)
        script_payload=json.dumps(scripts,ensure_ascii=False)
        (target/'page.jsx').write_text(
            f"import TemplatePage from {json.dumps(rel_import)};\nconst html={payload};\nconst scripts={script_payload};\nexport default function Page(){{return <TemplatePage html={{html}} scripts={{scripts}}/>}}\n",
            encoding='utf-8'
        )
    assets=project/'assets'
    if assets.is_dir():
        allowed={'.css','.js','.mjs','.cjs','.png','.jpg','.jpeg','.webp','.gif','.svg','.ico','.avif','.woff','.woff2','.ttf','.otf','.eot','.mp4','.webm','.json','.xml','.webmanifest'}
        root=assets.resolve()
        for path in assets.rglob('*'):
            if not path.is_file() or path.is_symlink() or path.suffix.lower() not in allowed:
                continue
            resolved=path.resolve()
            if root not in resolved.parents:
                raise ValueError(f'Unsafe catalogue asset: {path}')
            rel=path.relative_to(assets)
            dest=public/rel; dest.parent.mkdir(parents=True,exist_ok=True); shutil.copy2(path,dest)

def build_next_export(site: dict) -> io.BytesIO:
    slug=site['template_slug']; meta=BY_SLUG[slug]
    page_count=max(1,int(site.get('page_count') or meta.get('pages',1))); page_map=_export_page_map(site,meta,page_count)
    runtime_tmp=None
    if slug==AI_RUNTIME_SLUG:
        runtime_tmp=Path(tempfile.mkdtemp(prefix='zylora-ai-export-')); source=runtime_tmp
        _ai_runtime_source(source,site,page_map)
    elif slug==IMPORTED_RUNTIME_SLUG:
        runtime_tmp=Path(tempfile.mkdtemp(prefix='zylora-import-export-')); source=runtime_tmp
    else:
        runtime_tmp=Path(tempfile.mkdtemp(prefix='zylora-template-export-')); source=runtime_tmp
        _catalogue_runtime_source(source,site,meta,page_map)
    values={
        '{{BUSINESS_NAME}}':str(site.get('business_name') or meta['demo_business_name']),
        '{{TAGLINE}}':str(site.get('tagline') or meta['demo_tagline']),
        '{{DESCRIPTION}}':str(site.get('description') or meta['demo_description']),
        '{{ACCENT}}':str(site.get('accent') or meta['accent']),
        str(meta['accent']):str(site.get('accent') or meta['accent']),
    }
    allowed_slugs={k for k in page_map if k!='home'}
    document=parse_document(site.get('draft_structure_json')); asset_ids=_referenced_asset_ids(site,document); assets={}; asset_paths={}
    for aid in asset_ids:
        try:
            a=get_asset(aid,site_id=site['id']); ext=Path(a['filename']).suffix.lower() or '.bin'; path=f'/zylora-assets/{aid}{ext}'; assets[aid]=a; asset_paths[aid]=path
        except Exception: continue
    if slug==IMPORTED_RUNTIME_SLUG:
        _imported_runtime_source(source,site,page_map,asset_paths)
    brand=_json_obj(site.get('brand_json'))
    if brand.get('logo_asset_id') in asset_paths: brand['logo_export_src']=asset_paths[brand['logo_asset_id']]
    if brand.get('alternate_logo_asset_id') in asset_paths: brand['alternate_logo_export_src']=asset_paths[brand['alternate_logo_asset_id']]
    if brand.get('favicon_asset_id') in asset_paths: brand['favicon_export_src']=asset_paths[brand['favicon_asset_id']]
    buff=io.BytesIO()
    with zipfile.ZipFile(buff,'w',zipfile.ZIP_DEFLATED) as z:
        for path in sorted(source.rglob('*')):
            if path.is_symlink(): _assert_safe_template_file(source,path)
            if not path.is_file(): continue
            _assert_safe_template_file(source,path)
            rel=path.relative_to(source).as_posix(); parts=rel.split('/')
            if len(parts)>=2 and parts[0]=='app' and parts[1] in set(meta.get('page_slugs',[])) and parts[1] not in allowed_slugs: continue
            out_rel=rel
            if len(parts)>=2 and parts[0]=='app' and parts[1] in page_map and parts[1] != page_map[parts[1]]:
                out_parts=list(parts); out_parts[1]=page_map[parts[1]]; out_rel='/'.join(out_parts)
            data=path.read_bytes()
            if path.suffix.lower() not in BINARY_EXT:
                try:
                    source_text=data.decode('utf-8')
                except UnicodeDecodeError:
                    # Licensed archives can contain binary assets with uncommon or
                    # extensionless filenames. Preserve those bytes unchanged.
                    source_text=None
                if source_text is not None:
                    for key,val in values.items(): source_text=source_text.replace(key,val)
                    if rel=='app/page.jsx': source_text=_inject_metadata(source_text,'home',site,asset_paths,'/')
                    elif rel.startswith('app/') and rel.endswith('/page.jsx'):
                        internal_page=rel.split('/')[1]
                        source_text=_inject_metadata(source_text,internal_page,site,asset_paths,'/'+page_map.get(internal_page,internal_page))
                    elif rel=='app/layout.jsx': source_text=_inject_metadata(source_text,'home',site,asset_paths,'/',layout=True)
                    source_text=_rewrite_internal_routes(source_text,page_map)
                    if rel=='app/layout.jsx' and 'ZyloraEdits' not in source_text:
                        source_text="import ZyloraEdits from './zylora-edits';"+source_text
                        source_text=source_text.replace('{children}</body>','{children}<ZyloraEdits /></body>')
                    data=source_text.encode('utf-8')
            if out_rel.startswith('/') or '..' in Path(out_rel).parts or '\\' in out_rel: raise ValueError('Unsafe export path')
            z.writestr(out_rel,data)
        for generated_rel,generated_source in _export_route_sources(site,page_map).items():
            z.writestr(generated_rel,generated_source)
        for aid,a in assets.items():
            ext=Path(a['filename']).suffix.lower() or '.bin'; z.writestr(f'public/zylora-assets/{aid}{ext}',load_bytes(a['storage_key']))
        z.writestr('app/zylora-edits.jsx',_structured_client_source(site.get('draft_structure_json'),asset_paths,brand,links_from_seo_json(site.get('seo_json'))))
        z.writestr('zylora-structured-edits.json',json.dumps(document,indent=2))
        z.writestr('zylora-media-manifest.json',json.dumps([{k:a.get(k) for k in ['id','filename','original_filename','mime_type','width','height','alt_text','license_json']} for a in assets.values()],indent=2))
        z.writestr('zylora-brand.json',site.get('brand_json') or '{}'); z.writestr('zylora-seo.json',site.get('seo_json') or '{}')
        z.writestr('zylora-site.json',json.dumps({'site_id':site['id'],'slug':site['slug'],'renderer':slug,'origin':site['origin'],'pages':['/']+[f'/{public}' for key,public in page_map.items() if key!='home'],'structured_edit_operations':len(document.get('operations',[])),'managed_assets':len(assets),'document_schema_version':int(document.get('schemaVersion') or document.get('version') or 3),'export_format':'Next.js 16 source project','generated_by':'Zylora'},indent=2))
        z.writestr('README-ZYLORA.md',f'''# {site['business_name']} — Zylora Next.js export

This is an independent Next.js source project generated from the site's prompt-derived SiteDocument. Zylora's structured edits are included in `app/zylora-edits.jsx`; managed media is bundled under `public/zylora-assets/` so the export does not depend on authenticated or expiring Zylora URLs.

## Run locally

```bash
npm install
npm run dev
```

## Static production export

```bash
npm run build
```

Set `NEXT_PUBLIC_SITE_URL=https://your-domain.example` in production so canonical, sitemap and robots URLs use the exported site's real origin.\n\n## Hosted Zylora services\n\nThe exported design, content, routes, managed media and structured visual edits are independent source code. Server-backed Zylora product services are **not falsely bundled as standalone functionality**. AI Sales Assistant conversations, unified lead storage, appointment-slot authority, owner notifications, WhatsApp handoff, first-party conversion analytics, billing/entitlements and tenant-protected business data require the Zylora hosted backend unless you intentionally implement your own compatible backend. No Zylora provider secret, tenant secret, API key, payment credential or private authorization token is embedded in this export.\n\nPages: {', '.join(['/']+[f'/{public}' for key,public in page_map.items() if key!='home'])}.
''')
    buff.seek(0)
    if runtime_tmp is not None: shutil.rmtree(runtime_tmp,ignore_errors=True)
    return buff
