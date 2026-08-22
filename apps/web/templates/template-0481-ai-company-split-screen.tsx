"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0481-ai-company-split-screen", "family": "Split-screen", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|collection-led|values>schedule>proof>features>services|square-editorial|luxury-contrast", "industry": "ai-company", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "collection-led"};

export default function Template0481({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Ai Company");
  const headline = String(content.headline || "Applied AI designed around reliable workflows, measurable quality, and human control.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["AI assistants", "Document intelligence", "Automation", "Evaluation", "Enterprise deployment"];
  const industryLabel = "AI company";
  const serviceNotes = ["Production-ready models with clear input/output contracts and versioned endpoints.", "On-premise deployment available for data-sensitive organisations.", "Model cards and audit trails provided for every inference decision.", "Human-in-the-loop option: AI recommendations, human approvals, logged chain.", "Retraining on your proprietary data with performance benchmarks agreed upfront."];
  const proofPoints = ["EU AI Act compliant", "SOC 2 certified", "Explainability dashboard", "On-prem available"];
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0481" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0481{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0481 *{box-sizing:border-box}
.zp0481 a{color:inherit;text-decoration:none}
.zp0481 h1,.zp0481 h2,.zp0481 h3,.zp0481 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0481 img{max-width:100%;display:block}
.zp0481 button,.zp0481 a{-webkit-tap-highlight-color:transparent}
.zp0481 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0481 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0481 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0481 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0481 .mobileMenu{display:none}
.zp0481 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0481 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0481 .eyebrow,.zp0481 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0481 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0481 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0481 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0481 .heroActions a,.zp0481 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0481 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0481 .typeOnly{grid-template-columns:1fr .28fr}
.zp0481 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0481 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0481 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0481 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0481 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0481 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0481 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0481 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0481 .serviceGrid p{color:var(--muted)}
.zp0481 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0481 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0481 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0481 details{border-top:1px solid var(--border);padding:20px 0}
.zp0481 details summary{font-weight:800;cursor:pointer}
.zp0481 details p{color:var(--muted);max-width:70ch}
.zp0481 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0481 .features ul{list-style:none;margin:0;padding:0}
.zp0481 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0481 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0481 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0481 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Didot, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0481 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0481 .contact .eyebrow{color:var(--bg)}
.zp0481 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0481 .contactMeta{display:grid;gap:10px}
.zp0481 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0481 .heroCopy{animation:enter-480 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-480{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0481 .hero{min-height:auto}
.zp0481 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0481 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0481 .nav nav{display:none}
.zp0481 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0481 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0481 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0481 .mobileMenu nav a{padding:10px 8px}
.zp0481 .hero{grid-template-columns:1fr}
.zp0481 .section,.zp0481 .sectionTitle,.zp0481 .features,.zp0481 .contact{grid-template-columns:1fr}
.zp0481 .section{display:block}}
@media(max-width:430px){.zp0481{font-size:16px}
.zp0481 .hero,.zp0481 .section,.zp0481 .contact{padding-left:18px;padding-right:18px}
.zp0481 .serviceGrid,.zp0481 .proof{grid-template-columns:1fr}
.zp0481 h1{font-size:clamp(42px,14vw,70px)}}

.zp0481 .heroActions a,.zp0481 .primary,.zp0481 .ctaBtn,.zp0481 .btnPrimary,.zp0481 .schedule>a,.zp0481 .newsletter>a{transition:all .2s ease}
.zp0481 .heroActions a:hover,.zp0481 .primary:hover,.zp0481 .ctaBtn:hover,.zp0481 .btnPrimary:hover{
  opacity:.85
}
.zp0481 nav a,.zp0481 .nav a,.zp0481 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0481 nav a:hover,.zp0481 .nav a:hover,.zp0481 .footer a:hover{
  color:var(--primary)
}
.zp0481 .serviceGrid article,.zp0481 .projectCard,.zp0481 .teamCard,.zp0481 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0481 .serviceGrid article:hover,.zp0481 .projectCard:hover,.zp0481 .teamCard:hover,.zp0481 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0481 *,.zp0481 *::before,.zp0481 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0481 a,.zp0481 button,.zp0481 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
