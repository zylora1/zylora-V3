"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0967-agriculture-neo-brutalism", "family": "Neo-Brutalism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|horizontal-panels|schedule>services>proof>pricing>process|asymmetric-radius|technical-mono", "industry": "agriculture", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "horizontal-panels"};

export default function Template0967({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Agricultural Business");
  const headline = String(content.headline || "A working farm connected directly to buyers, partners, seasons, and provenance.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Produce", "Wholesale", "Farm visits", "Seasonal boxes", "Trade supply"];
  const industryLabel = "Agricultural business";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Agricultural business / Project A", "Agricultural business / Project B", "Agricultural business / Project C", "Agricultural business / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A working farm connected directly to buyers, partners, seasons, and provenance. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0967" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0967{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:3px;--shadow:none;--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0967 *{box-sizing:border-box}
.zp0967 a{color:inherit;text-decoration:none}
.zp0967 h1,.zp0967 h2,.zp0967 h3,.zp0967 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0967 img{max-width:100%;display:block}
.zp0967 button,.zp0967 a{-webkit-tap-highlight-color:transparent}
.zp0967 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0967 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0967 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0967 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0967 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0967 .nav.index nav{justify-content:flex-end}
.zp0967 .mobileMenu{display:none}
.zp0967 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0967 .eyebrow,.zp0967 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0967 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0967 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0967 .minimalHero{display:block;min-height:74vh}
.zp0967 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0967 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0967 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0967 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0967 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0967 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0967 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0967 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0967 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0967 .serviceGrid p{color:var(--muted)}
.zp0967 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0967 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0967 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0967 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0967 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0967 details{border-top:1px solid var(--border);padding:20px 0}
.zp0967 details summary{font-weight:800;cursor:pointer}
.zp0967 details p{color:var(--muted);max-width:70ch}
.zp0967 .priceRows{border-top:1px solid var(--border)}
.zp0967 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0967 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0967 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0967 .contact .eyebrow{color:var(--bg)}
.zp0967 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0967 .contactMeta{display:grid;gap:10px}
.zp0967 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0967 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0967 .sectionTitle{display:block}
.zp0967 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0967 h1{text-transform:uppercase}
@keyframes enter-966{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0967 .hero{min-height:auto}
.zp0967 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0967 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0967 .nav nav{display:none}
.zp0967 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0967 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0967 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0967 .mobileMenu nav a{padding:10px 8px}
.zp0967 .hero{grid-template-columns:1fr}
.zp0967 .section,.zp0967 .sectionTitle,.zp0967 .contact{grid-template-columns:1fr}
.zp0967 .section{display:block}}
@media(max-width:430px){.zp0967{font-size:16px}
.zp0967 .hero,.zp0967 .section,.zp0967 .contact{padding-left:18px;padding-right:18px}
.zp0967 .serviceGrid,.zp0967 .proof{grid-template-columns:1fr}
.zp0967 h1{font-size:clamp(42px,14vw,70px)}
.zp0967 .priceRows article{grid-template-columns:1fr}
.zp0967 .minimalFoot{grid-template-columns:1fr}
.zp0967 .nav.index{grid-template-columns:1fr auto}
.zp0967 .nav.index>span{display:none}}

.zp0967 .heroActions a,.zp0967 .primary,.zp0967 .ctaBtn,.zp0967 .btnPrimary,.zp0967 .schedule>a,.zp0967 .newsletter>a{transition:all .2s ease}
.zp0967 .heroActions a:hover,.zp0967 .primary:hover,.zp0967 .ctaBtn:hover,.zp0967 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0967 nav a,.zp0967 .nav a,.zp0967 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0967 nav a:hover,.zp0967 .nav a:hover,.zp0967 .footer a:hover{
  text-decoration:underline
}
.zp0967 .serviceGrid article,.zp0967 .projectCard,.zp0967 .teamCard,.zp0967 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0967 .serviceGrid article:hover,.zp0967 .projectCard:hover,.zp0967 .teamCard:hover,.zp0967 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0967 *,.zp0967 *::before,.zp0967 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0967 a,.zp0967 button,.zp0967 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
