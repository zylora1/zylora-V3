"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0391-accounting-futurism", "family": "Futurism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|horizontal-panels|schedule>comparison>gallery>proof>services|asymmetric-radius|technical-mono", "industry": "accounting", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "horizontal-panels"};

export default function Template0391({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Accounting Firm");
  const headline = String(content.headline || "Accurate numbers, useful reporting, and advice that helps owners make better decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Bookkeeping", "Tax filing", "Payroll", "Management accounts", "CFO advisory"];
  const industryLabel = "Accounting firm";
  const serviceNotes = ["Monthly management accounts with commentary — not just figures, but what they mean.", "Tax planning built around your business calendar, not filed as an afterthought.", "Payroll, auto-enrolment, and CIS handled so you focus on the work, not the admin.", "Cloud accounting setup and training: Xero, QuickBooks, or Sage — your choice.", "Annual accounts filed with HMRC two months early — never a penalty in 15 years."];
  const proofPoints = ["ICAEW/ACCA qualified", "Xero Platinum Partner", "Zero missed deadlines", "Fixed monthly fees"];
  const testimonial = "Switched from a large firm where I never spoke to the same person twice. Here my accountant knows my business inside out.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0391" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0391{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0391 *{box-sizing:border-box}
.zp0391 a{color:inherit;text-decoration:none}
.zp0391 h1,.zp0391 h2,.zp0391 h3,.zp0391 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0391 img{max-width:100%;display:block}
.zp0391 button,.zp0391 a{-webkit-tap-highlight-color:transparent}
.zp0391 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0391 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0391 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0391 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0391 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0391 .nav.index nav{justify-content:flex-end}
.zp0391 .mobileMenu{display:none}
.zp0391 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0391 .eyebrow,.zp0391 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0391 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0391 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0391 .minimalHero{display:block;min-height:74vh}
.zp0391 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0391 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0391 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0391 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0391 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0391 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0391 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0391 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0391 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0391 .serviceGrid p{color:var(--muted)}
.zp0391 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0391 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0391 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0391 details{border-top:1px solid var(--border);padding:20px 0}
.zp0391 details summary{font-weight:800;cursor:pointer}
.zp0391 details p{color:var(--muted);max-width:70ch}
.zp0391 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0391 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0391 .galleryGrid>*:first-child{grid-row:1/3}
.zp0391 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0391 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0391 .g2,.zp0391 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0391 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0391 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0391 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0391 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0391 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0391 .contact .eyebrow{color:var(--bg)}
.zp0391 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0391 .contactMeta{display:grid;gap:10px}
.zp0391 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0391 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0391 .sectionTitle{display:block}
@keyframes enter-390{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0391 .hero{min-height:auto}
.zp0391 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0391 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0391 .nav nav{display:none}
.zp0391 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0391 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0391 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0391 .mobileMenu nav a{padding:10px 8px}
.zp0391 .hero{grid-template-columns:1fr}
.zp0391 .section,.zp0391 .sectionTitle,.zp0391 .contact{grid-template-columns:1fr}
.zp0391 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0391 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0391 .section{display:block}}
@media(max-width:430px){.zp0391{font-size:16px}
.zp0391 .hero,.zp0391 .section,.zp0391 .contact{padding-left:18px;padding-right:18px}
.zp0391 .serviceGrid,.zp0391 .proof,.zp0391 .compareGrid{grid-template-columns:1fr}
.zp0391 h1{font-size:clamp(42px,14vw,70px)}
.zp0391 .galleryGrid{grid-template-columns:1fr}
.zp0391 .galleryGrid>*:first-child{grid-column:auto}
.zp0391 .minimalFoot{grid-template-columns:1fr}
.zp0391 .nav.index{grid-template-columns:1fr auto}
.zp0391 .nav.index>span{display:none}}

.zp0391 .heroActions a,.zp0391 .primary,.zp0391 .ctaBtn,.zp0391 .btnPrimary,.zp0391 .schedule>a,.zp0391 .newsletter>a{transition:all .2s ease}
.zp0391 .heroActions a:hover,.zp0391 .primary:hover,.zp0391 .ctaBtn:hover,.zp0391 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0391 nav a,.zp0391 .nav a,.zp0391 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0391 nav a:hover,.zp0391 .nav a:hover,.zp0391 .footer a:hover{
  color:var(--primary)
}
.zp0391 .serviceGrid article,.zp0391 .projectCard,.zp0391 .teamCard,.zp0391 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0391 .serviceGrid article:hover,.zp0391 .projectCard:hover,.zp0391 .teamCard:hover,.zp0391 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0391 *,.zp0391 *::before,.zp0391 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0391 a,.zp0391 button,.zp0391 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Apply now</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
