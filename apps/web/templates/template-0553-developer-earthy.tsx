"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0553-developer-earthy", "family": "Earthy", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|collection-led|services>proof>team>menu>press|hairline|luxury-contrast", "industry": "developer", "hero": "poster", "navigation": "fullscreen-menu", "layout": "collection-led"};

export default function Template0553({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Developer Portfolio");
  const headline = String(content.headline || "A focused record of shipped software, technical decisions, and measurable impact.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product work", "Open source", "Technical writing", "Speaking", "Consulting"];
  const industryLabel = "Developer portfolio";
  const serviceNotes = ["Full-stack capability: from database architecture to accessible frontend interfaces.", "Open-source contributors with real community credibility and public track record.", "Performance-first: Lighthouse scores reviewed and targets agreed before launch.", "Accessibility to WCAG 2.2 AA as a baseline requirement, not an optional extra.", "Retainer options for ongoing development, features, and maintenance."];
  const proofPoints = ["Core Web Vitals: all green", "WCAG 2.2 AA standard", "GitHub: 2,000+ contributions", "8-year average tenure"];
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0553" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0553{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0553 *{box-sizing:border-box}
.zp0553 a{color:inherit;text-decoration:none}
.zp0553 h1,.zp0553 h2,.zp0553 h3,.zp0553 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0553 img{max-width:100%;display:block}
.zp0553 button,.zp0553 a{-webkit-tap-highlight-color:transparent}
.zp0553 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0553 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0553 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0553 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0553 .nav.menu details{position:relative}
.zp0553 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0553 .mobileMenu{display:none}
.zp0553 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0553 .eyebrow,.zp0553 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0553 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0553 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0553 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0553 .posterTop,.zp0553 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0553 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0553 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0553 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0553 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0553 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0553 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0553 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0553 .serviceGrid p{color:var(--muted)}
.zp0553 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0553 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0553 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0553 details{border-top:1px solid var(--border);padding:20px 0}
.zp0553 details summary{font-weight:800;cursor:pointer}
.zp0553 details p{color:var(--muted);max-width:70ch}
.zp0553 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0553 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0553 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Didot, Georgia, serif;margin-bottom:18px}
.zp0553 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0553 .awards>div{max-width:800px;margin-left:auto}
.zp0553 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0553 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0553 .contact .eyebrow{color:var(--bg)}
.zp0553 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0553 .contactMeta{display:grid;gap:10px}
.zp0553 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-552{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0553 .hero{min-height:auto}
.zp0553 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0553 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0553 .nav nav{display:none}
.zp0553 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0553 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0553 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0553 .mobileMenu nav a{padding:10px 8px}
.zp0553 .hero{grid-template-columns:1fr}
.zp0553 .section,.zp0553 .sectionTitle,.zp0553 .contact{grid-template-columns:1fr}
.zp0553 .teamGrid{grid-template-columns:1fr 1fr}
.zp0553 .section{display:block}}
@media(max-width:430px){.zp0553{font-size:16px}
.zp0553 .hero,.zp0553 .section,.zp0553 .contact{padding-left:18px;padding-right:18px}
.zp0553 .serviceGrid,.zp0553 .proof,.zp0553 .teamGrid{grid-template-columns:1fr}
.zp0553 h1{font-size:clamp(42px,14vw,70px)}
.zp0553 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0553 .heroActions a,.zp0553 .primary,.zp0553 .ctaBtn,.zp0553 .btnPrimary,.zp0553 .schedule>a,.zp0553 .newsletter>a{transition:all .2s ease}
.zp0553 .heroActions a:hover,.zp0553 .primary:hover,.zp0553 .ctaBtn:hover,.zp0553 .btnPrimary:hover{
  opacity:.85;transform:translateY(-1px)
}
.zp0553 nav a,.zp0553 .nav a,.zp0553 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0553 nav a:hover,.zp0553 .nav a:hover,.zp0553 .footer a:hover{
  color:var(--primary)
}
.zp0553 .serviceGrid article,.zp0553 .projectCard,.zp0553 .teamCard,.zp0553 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0553 .serviceGrid article:hover,.zp0553 .projectCard:hover,.zp0553 .teamCard:hover,.zp0553 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0553 *,.zp0553 *::before,.zp0553 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0553 a,.zp0553 button,.zp0553 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Earthy / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
