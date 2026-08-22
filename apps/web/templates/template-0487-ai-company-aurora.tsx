"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0487-ai-company-aurora", "family": "Aurora", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|two-speed-scroll|community>services>proof>destinations>manifesto|asymmetric-radius|technical-mono", "industry": "ai-company", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "two-speed-scroll"};

export default function Template0487({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Ai Company");
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
  const storyBody = "Lumen Ai Company is presented as a real working ai company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0487" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0487{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0487 *{box-sizing:border-box}
.zp0487 a{color:inherit;text-decoration:none}
.zp0487 h1,.zp0487 h2,.zp0487 h3,.zp0487 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0487 img{max-width:100%;display:block}
.zp0487 button,.zp0487 a{-webkit-tap-highlight-color:transparent}
.zp0487 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0487 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0487 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0487 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0487 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0487 .nav.index nav{justify-content:flex-end}
.zp0487 .mobileMenu{display:none}
.zp0487 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0487 .eyebrow,.zp0487 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0487 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0487 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0487 .minimalHero{display:block;min-height:74vh}
.zp0487 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0487 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0487 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0487 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0487 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0487 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0487 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0487 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0487 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0487 .serviceGrid p{color:var(--muted)}
.zp0487 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0487 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0487 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0487 details{border-top:1px solid var(--border);padding:20px 0}
.zp0487 details summary{font-weight:800;cursor:pointer}
.zp0487 details p{color:var(--muted);max-width:70ch}
.zp0487 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0487 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Courier New, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0487 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0487 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0487 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0487 .contact .eyebrow{color:var(--bg)}
.zp0487 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0487 .contactMeta{display:grid;gap:10px}
.zp0487 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0487{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0487 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
@keyframes enter-486{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0487 .hero{min-height:auto}
.zp0487 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0487 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0487 .nav nav{display:none}
.zp0487 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0487 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0487 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0487 .mobileMenu nav a{padding:10px 8px}
.zp0487 .hero{grid-template-columns:1fr}
.zp0487 .section,.zp0487 .sectionTitle,.zp0487 .contact{grid-template-columns:1fr}
.zp0487 .section{display:block}}
@media(max-width:430px){.zp0487{font-size:16px}
.zp0487 .hero,.zp0487 .section,.zp0487 .contact{padding-left:18px;padding-right:18px}
.zp0487 .serviceGrid,.zp0487 .proof,.zp0487 .destinations>div:last-child{grid-template-columns:1fr}
.zp0487 h1{font-size:clamp(42px,14vw,70px)}
.zp0487 .minimalFoot{grid-template-columns:1fr}
.zp0487 .nav.index{grid-template-columns:1fr auto}
.zp0487 .nav.index>span{display:none}}

.zp0487 .heroActions a,.zp0487 .primary,.zp0487 .ctaBtn,.zp0487 .btnPrimary,.zp0487 .schedule>a,.zp0487 .newsletter>a{transition:all .2s ease}
.zp0487 .heroActions a:hover,.zp0487 .primary:hover,.zp0487 .ctaBtn:hover,.zp0487 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0487 nav a,.zp0487 .nav a,.zp0487 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0487 nav a:hover,.zp0487 .nav a:hover,.zp0487 .footer a:hover{
  color:var(--primary)
}
.zp0487 .serviceGrid article,.zp0487 .projectCard,.zp0487 .teamCard,.zp0487 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0487 .serviceGrid article:hover,.zp0487 .projectCard:hover,.zp0487 .teamCard:hover,.zp0487 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0487 *,.zp0487 *::before,.zp0487 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0487 a,.zp0487 button,.zp0487 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Send an enquiry</a></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
