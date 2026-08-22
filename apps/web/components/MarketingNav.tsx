'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {Menu,X} from 'lucide-react';

const items=[['/#platform','Platform'],['/templates','Templates'],['/blog','Resources'],['/managed','Managed by experts']] as const;
export default function MarketingNav(){
  const[open,setOpen]=useState(false);
  useEffect(()=>{const close=()=>setOpen(false);window.addEventListener('resize',close);return()=>window.removeEventListener('resize',close)},[]);
  useEffect(()=>{document.body.style.overflow=open?'hidden':'';return()=>{document.body.style.overflow=''}},[open]);
  return <>
    <nav className="nav" aria-label="Primary navigation">
      <Link className="brand" href="/" aria-label="Zylora home"><img src="/zylora-logo.png" alt="Zylora"/></Link>
      <div className="navlinks">{items.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}</div>
      <div className="navActions">
        <Link href="/login" className="pill">Log in</Link>
        <Link href="/signup" className="pill primary">Start building</Link>
        <button className="menuButton" type="button" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button>
      </div>
    </nav>
    <div id="mobile-menu" className={`mobileMenu ${open?'open':''}`} aria-hidden={!open}>
      <div className="mobileMenuPanel">
        {items.map(([href,label])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}<span>↗</span></Link>)}
        <Link className="mobileMenuCta" href="/login" onClick={()=>setOpen(false)}>Log in</Link>
        <Link className="mobileMenuCta" href="/signup" onClick={()=>setOpen(false)}>Start building</Link>
      </div>
    </div>
  </>;
}
