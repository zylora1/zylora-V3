"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0151-university-conceptual-sketch", "family": "Conceptual Sketch", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|programme-led|proof>services>programmes>research>destinations|asymmetric-radius|technical-mono", "industry": "university", "hero": "index-led", "navigation": "editorial-index", "layout": "programme-led"};

export default function Template0151({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove University Programme");
  const headline = String(content.headline || "Study, research, and community organised around meaningful real-world contribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Undergraduate study", "Graduate programmes", "Research", "Student life", "Admissions support"];
  const industryLabel = "University programme";
  const serviceNotes = ["Courses co-designed with industry partners so graduate skills meet real employer needs.", "Research-active faculty who bring live project experience into lectures.", "Industry placement years with 92% of students securing relevant roles.", "International exchange programmes at 60+ partner universities worldwide.", "Graduate outcome tracking with 18-month follow-up career support."];
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0151" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0151{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0151 *{box-sizing:border-box}
.zp0151 a{color:inherit;text-decoration:none}
.zp0151 h1,.zp0151 h2,.zp0151 h3,.zp0151 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0151 img{max-width:100%;display:block}
.zp0151 button,.zp0151 a{-webkit-tap-highlight-color:transparent}
.zp0151 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0151 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0151 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0151 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0151 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0151 .nav.index nav{justify-content:flex-end}
.zp0151 .mobileMenu{display:none}
.zp0151 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0151 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0151 .eyebrow,.zp0151 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0151 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0151 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0151 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0151 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0151 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0151 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0151 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0151 .indexHero li{font:700 18px/1.2 Courier New, monospace;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0151 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0151 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0151 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0151 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0151 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0151 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0151 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0151 .serviceGrid p{color:var(--muted)}
.zp0151 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0151 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0151 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0151 details{border-top:1px solid var(--border);padding:20px 0}
.zp0151 details summary{font-weight:800;cursor:pointer}
.zp0151 details p{color:var(--muted);max-width:70ch}
.zp0151 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0151 .programmes>div:last-child,.zp0151 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0151 .programmes article,.zp0151 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0151 .researchRows{max-width:900px;margin-left:auto}
.zp0151 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0151 .contact .eyebrow{color:var(--bg)}
.zp0151 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0151 .contactMeta{display:grid;gap:10px}
.zp0151 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0151 .heroCopy{animation:enter-150 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-150{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0151 .hero{min-height:auto}
.zp0151 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0151 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0151 .nav nav{display:none}
.zp0151 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0151 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0151 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0151 .mobileMenu nav a{padding:10px 8px}
.zp0151 .hero,.zp0151 .indexHero{grid-template-columns:1fr}
.zp0151 .section,.zp0151 .sectionTitle,.zp0151 .contact{grid-template-columns:1fr}
.zp0151 .section{display:block}}
@media(max-width:430px){.zp0151{font-size:16px}
.zp0151 .hero,.zp0151 .section,.zp0151 .contact{padding-left:18px;padding-right:18px}
.zp0151 .serviceGrid,.zp0151 .proof,.zp0151 .programmes>div:last-child,.zp0151 .destinations>div:last-child{grid-template-columns:1fr}
.zp0151 h1{font-size:clamp(42px,14vw,70px)}
.zp0151 .nav.index{grid-template-columns:1fr auto}
.zp0151 .nav.index>span{display:none}}

.zp0151 .heroActions a,.zp0151 .primary,.zp0151 .ctaBtn,.zp0151 .btnPrimary,.zp0151 .schedule>a,.zp0151 .newsletter>a{transition:all .2s ease}
.zp0151 .heroActions a:hover,.zp0151 .primary:hover,.zp0151 .ctaBtn:hover,.zp0151 .btnPrimary:hover{
  opacity:.8
}
.zp0151 nav a,.zp0151 .nav a,.zp0151 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0151 nav a:hover,.zp0151 .nav a:hover,.zp0151 .footer a:hover{
  opacity:.7
}
.zp0151 .serviceGrid article,.zp0151 .projectCard,.zp0151 .teamCard,.zp0151 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0151 .serviceGrid article:hover,.zp0151 .projectCard:hover,.zp0151 .teamCard:hover,.zp0151 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0151 *,.zp0151 *::before,.zp0151 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0151 a,.zp0151 button,.zp0151 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Conceptual Sketch / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
