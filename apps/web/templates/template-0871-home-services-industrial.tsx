"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0871-home-services-industrial", "family": "Industrial", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|programme-led|packages>services>newsletter>proof>pricing|asymmetric-radius|technical-mono", "industry": "home-services", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "programme-led"};

export default function Template0871({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Home Services Company");
  const headline = String(content.headline || "Trusted local trades with transparent arrival windows and straightforward estimates.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Electrical", "Plumbing", "Heating", "Emergency callouts", "Maintenance plans"];
  const industryLabel = "Home services company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Home services company / Project A", "Home services company / Project B", "Home services company / Project C", "Home services company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trusted local trades with transparent arrival windows and straightforward estimates. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0871" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0871{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0871 *{box-sizing:border-box}
.zp0871 a{color:inherit;text-decoration:none}
.zp0871 h1,.zp0871 h2,.zp0871 h3,.zp0871 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0871 img{max-width:100%;display:block}
.zp0871 button,.zp0871 a{-webkit-tap-highlight-color:transparent}
.zp0871 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0871 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0871 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0871 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0871 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0871 .nav.index nav{justify-content:flex-end}
.zp0871 .mobileMenu{display:none}
.zp0871 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0871 .eyebrow,.zp0871 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0871 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0871 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0871 .minimalHero{display:block;min-height:74vh}
.zp0871 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0871 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0871 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0871 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0871 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0871 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0871 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0871 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0871 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0871 .serviceGrid p{color:var(--muted)}
.zp0871 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0871 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0871 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0871 details{border-top:1px solid var(--border);padding:20px 0}
.zp0871 details summary{font-weight:800;cursor:pointer}
.zp0871 details p{color:var(--muted);max-width:70ch}
.zp0871 .priceRows{border-top:1px solid var(--border)}
.zp0871 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0871 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0871 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0871 .packages>.sectionTitle{grid-column:1/-1}
.zp0871 .packages article{padding:24px;border:1px solid var(--border)}
.zp0871 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0871 .contact .eyebrow{color:var(--bg)}
.zp0871 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0871 .contactMeta{display:grid;gap:10px}
.zp0871 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-870{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0871 .hero{min-height:auto}
.zp0871 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0871 .proof{grid-template-columns:1fr 1fr}
.zp0871 .packages{grid-template-columns:1fr 1fr}
.zp0871 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0871 .nav nav{display:none}
.zp0871 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0871 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0871 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0871 .mobileMenu nav a{padding:10px 8px}
.zp0871 .hero{grid-template-columns:1fr}
.zp0871 .section,.zp0871 .sectionTitle,.zp0871 .contact{grid-template-columns:1fr}
.zp0871 .section{display:block}}
@media(max-width:430px){.zp0871{font-size:16px}
.zp0871 .hero,.zp0871 .section,.zp0871 .contact{padding-left:18px;padding-right:18px}
.zp0871 .serviceGrid,.zp0871 .proof,.zp0871 .packages{grid-template-columns:1fr}
.zp0871 h1{font-size:clamp(42px,14vw,70px)}
.zp0871 .priceRows article{grid-template-columns:1fr}
.zp0871 .minimalFoot{grid-template-columns:1fr}
.zp0871 .nav.index{grid-template-columns:1fr auto}
.zp0871 .nav.index>span{display:none}}

.zp0871 .heroActions a,.zp0871 .primary,.zp0871 .ctaBtn,.zp0871 .btnPrimary,.zp0871 .schedule>a,.zp0871 .newsletter>a{transition:all .2s ease}
.zp0871 .heroActions a:hover,.zp0871 .primary:hover,.zp0871 .ctaBtn:hover,.zp0871 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0871 nav a,.zp0871 .nav a,.zp0871 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0871 nav a:hover,.zp0871 .nav a:hover,.zp0871 .footer a:hover{
  color:var(--primary)
}
.zp0871 .serviceGrid article,.zp0871 .projectCard,.zp0871 .teamCard,.zp0871 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0871 .serviceGrid article:hover,.zp0871 .projectCard:hover,.zp0871 .teamCard:hover,.zp0871 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0871 *,.zp0871 *::before,.zp0871 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0871 a,.zp0871 button,.zp0871 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
