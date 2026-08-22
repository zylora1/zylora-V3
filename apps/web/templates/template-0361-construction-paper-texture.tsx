"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0361-construction-paper-texture", "family": "Paper Texture", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|editorial-spine|destinations>collection>services>proof>availability|hairline|luxury-contrast", "industry": "construction", "hero": "poster", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0361({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0361" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0361{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0361 *{box-sizing:border-box}
.zp0361 a{color:inherit;text-decoration:none}
.zp0361 h1,.zp0361 h2,.zp0361 h3,.zp0361 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0361 img{max-width:100%;display:block}
.zp0361 button,.zp0361 a{-webkit-tap-highlight-color:transparent}
.zp0361 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0361 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0361 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0361 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0361 .nav.menu details{position:relative}
.zp0361 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0361 .mobileMenu{display:none}
.zp0361 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0361 .eyebrow,.zp0361 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0361 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0361 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0361 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0361 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0361 .posterTop,.zp0361 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0361 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0361 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0361 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0361 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0361 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0361 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0361 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0361 .serviceGrid p{color:var(--muted)}
.zp0361 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0361 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0361 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0361 details{border-top:1px solid var(--border);padding:20px 0}
.zp0361 details summary{font-weight:800;cursor:pointer}
.zp0361 details p{color:var(--muted);max-width:70ch}
.zp0361 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0361 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0361 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0361 .p1,.zp0361 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0361 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0361 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0361 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0361 .contact .eyebrow{color:var(--bg)}
.zp0361 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0361 .contactMeta{display:grid;gap:10px}
.zp0361 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0361{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0361 .section:nth-of-type(3n){transform:rotate(0.35deg)}
@keyframes enter-360{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0361 .hero{min-height:auto}
.zp0361 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0361 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0361 .nav nav{display:none}
.zp0361 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0361 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0361 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0361 .mobileMenu nav a{padding:10px 8px}
.zp0361 .hero{grid-template-columns:1fr}
.zp0361 .section,.zp0361 .sectionTitle,.zp0361 .contact{grid-template-columns:1fr}
.zp0361 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0361 .section{display:block}}
@media(max-width:430px){.zp0361{font-size:16px}
.zp0361 .hero,.zp0361 .section,.zp0361 .contact{padding-left:18px;padding-right:18px}
.zp0361 .serviceGrid,.zp0361 .proof,.zp0361 .collectionGrid,.zp0361 .destinations>div:last-child{grid-template-columns:1fr}
.zp0361 h1{font-size:clamp(42px,14vw,70px)}
.zp0361 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0361 .heroActions a,.zp0361 .primary,.zp0361 .ctaBtn,.zp0361 .btnPrimary,.zp0361 .schedule>a,.zp0361 .newsletter>a{transition:all .2s ease}
.zp0361 .heroActions a:hover,.zp0361 .primary:hover,.zp0361 .ctaBtn:hover,.zp0361 .btnPrimary:hover{
  opacity:.8
}
.zp0361 nav a,.zp0361 .nav a,.zp0361 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0361 nav a:hover,.zp0361 .nav a:hover,.zp0361 .footer a:hover{
  color:var(--primary)
}
.zp0361 .serviceGrid article,.zp0361 .projectCard,.zp0361 .teamCard,.zp0361 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0361 .serviceGrid article:hover,.zp0361 .projectCard:hover,.zp0361 .teamCard:hover,.zp0361 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0361 *,.zp0361 *::before,.zp0361 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0361 a,.zp0361 button,.zp0361 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Send an enquiry</a></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
