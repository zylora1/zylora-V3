"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0295-tourism-art-deco", "family": "Art Deco", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|programme-led|services>packages>destinations>proof>process|asymmetric-radius|technical-mono", "industry": "tourism", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "programme-led"};

export default function Template0295({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0295" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0295{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0295 *{box-sizing:border-box}
.zp0295 a{color:inherit;text-decoration:none}
.zp0295 h1,.zp0295 h2,.zp0295 h3,.zp0295 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0295 img{max-width:100%;display:block}
.zp0295 button,.zp0295 a{-webkit-tap-highlight-color:transparent}
.zp0295 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0295 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0295 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0295 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0295 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0295 .nav.index nav{justify-content:flex-end}
.zp0295 .mobileMenu{display:none}
.zp0295 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0295 .eyebrow,.zp0295 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0295 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0295 .minimalHero{display:block;min-height:74vh}
.zp0295 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0295 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0295 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0295 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0295 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0295 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0295 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0295 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0295 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0295 .serviceGrid p{color:var(--muted)}
.zp0295 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0295 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0295 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0295 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0295 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0295 details{border-top:1px solid var(--border);padding:20px 0}
.zp0295 details summary{font-weight:800;cursor:pointer}
.zp0295 details p{color:var(--muted);max-width:70ch}
.zp0295 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0295 .packages>.sectionTitle{grid-column:1/-1}
.zp0295 .packages article{padding:24px;border:1px solid var(--border)}
.zp0295 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0295 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0295 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0295 .contact .eyebrow{color:var(--bg)}
.zp0295 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0295 .contactMeta{display:grid;gap:10px}
.zp0295 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0295 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
@keyframes enter-294{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0295 .hero{min-height:auto}
.zp0295 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0295 .proof{grid-template-columns:1fr 1fr}
.zp0295 .packages{grid-template-columns:1fr 1fr}
.zp0295 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0295 .nav nav{display:none}
.zp0295 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0295 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0295 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0295 .mobileMenu nav a{padding:10px 8px}
.zp0295 .hero{grid-template-columns:1fr}
.zp0295 .section,.zp0295 .sectionTitle,.zp0295 .contact{grid-template-columns:1fr}
.zp0295 .section{display:block}}
@media(max-width:430px){.zp0295{font-size:16px}
.zp0295 .hero,.zp0295 .section,.zp0295 .contact{padding-left:18px;padding-right:18px}
.zp0295 .serviceGrid,.zp0295 .proof,.zp0295 .packages,.zp0295 .destinations>div:last-child{grid-template-columns:1fr}
.zp0295 h1{font-size:clamp(42px,14vw,70px)}
.zp0295 .minimalFoot{grid-template-columns:1fr}
.zp0295 .nav.index{grid-template-columns:1fr auto}
.zp0295 .nav.index>span{display:none}}

.zp0295 .heroActions a,.zp0295 .primary,.zp0295 .ctaBtn,.zp0295 .btnPrimary,.zp0295 .schedule>a,.zp0295 .newsletter>a{transition:all .2s ease}
.zp0295 .heroActions a:hover,.zp0295 .primary:hover,.zp0295 .ctaBtn:hover,.zp0295 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0295 nav a,.zp0295 .nav a,.zp0295 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0295 nav a:hover,.zp0295 .nav a:hover,.zp0295 .footer a:hover{
  color:var(--primary)
}
.zp0295 .serviceGrid article,.zp0295 .projectCard,.zp0295 .teamCard,.zp0295 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0295 .serviceGrid article:hover,.zp0295 .projectCard:hover,.zp0295 .teamCard:hover,.zp0295 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0295 *,.zp0295 *::before,.zp0295 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0295 a,.zp0295 button,.zp0295 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
