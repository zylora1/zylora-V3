"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0775-events-magazine", "family": "Magazine", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|two-speed-scroll|services>newsletter>metrics>products>proof|asymmetric-radius|technical-mono", "industry": "events", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "two-speed-scroll"};

export default function Template0775({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0775" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0775{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0775 *{box-sizing:border-box}
.zp0775 a{color:inherit;text-decoration:none}
.zp0775 h1,.zp0775 h2,.zp0775 h3,.zp0775 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0775 img{max-width:100%;display:block}
.zp0775 button,.zp0775 a{-webkit-tap-highlight-color:transparent}
.zp0775 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0775 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0775 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0775 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0775 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0775 .nav.index nav{justify-content:flex-end}
.zp0775 .mobileMenu{display:none}
.zp0775 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0775 .eyebrow,.zp0775 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0775 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0775 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0775 .minimalHero{display:block;min-height:74vh}
.zp0775 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0775 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0775 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0775 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0775 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0775 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0775 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0775 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0775 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0775 .serviceGrid p{color:var(--muted)}
.zp0775 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0775 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0775 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0775 details{border-top:1px solid var(--border);padding:20px 0}
.zp0775 details summary{font-weight:800;cursor:pointer}
.zp0775 details p{color:var(--muted);max-width:70ch}
.zp0775 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0775 .metrics div{background:var(--bg);padding:30px}
.zp0775 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Courier New, monospace;color:var(--primary)}
.zp0775 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0775 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0775 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0775 .p1,.zp0775 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0775 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0775 .contact .eyebrow{color:var(--bg)}
.zp0775 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0775 .contactMeta{display:grid;gap:10px}
.zp0775 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-774{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0775 .hero{min-height:auto}
.zp0775 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0775 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0775 .nav nav{display:none}
.zp0775 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0775 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0775 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0775 .mobileMenu nav a{padding:10px 8px}
.zp0775 .hero{grid-template-columns:1fr}
.zp0775 .section,.zp0775 .sectionTitle,.zp0775 .contact{grid-template-columns:1fr}
.zp0775 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0775 .metrics{grid-template-columns:1fr 1fr}
.zp0775 .section{display:block}}
@media(max-width:430px){.zp0775{font-size:16px}
.zp0775 .hero,.zp0775 .section,.zp0775 .contact{padding-left:18px;padding-right:18px}
.zp0775 .serviceGrid,.zp0775 .proof,.zp0775 .collectionGrid,.zp0775 .metrics{grid-template-columns:1fr}
.zp0775 h1{font-size:clamp(42px,14vw,70px)}
.zp0775 .minimalFoot{grid-template-columns:1fr}
.zp0775 .nav.index{grid-template-columns:1fr auto}
.zp0775 .nav.index>span{display:none}}

.zp0775 .heroActions a,.zp0775 .primary,.zp0775 .ctaBtn,.zp0775 .btnPrimary,.zp0775 .schedule>a,.zp0775 .newsletter>a{transition:all .2s ease}
.zp0775 .heroActions a:hover,.zp0775 .primary:hover,.zp0775 .ctaBtn:hover,.zp0775 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0775 nav a,.zp0775 .nav a,.zp0775 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0775 nav a:hover,.zp0775 .nav a:hover,.zp0775 .footer a:hover{
  color:var(--primary)
}
.zp0775 .serviceGrid article,.zp0775 .projectCard,.zp0775 .teamCard,.zp0775 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0775 .serviceGrid article:hover,.zp0775 .projectCard:hover,.zp0775 .teamCard:hover,.zp0775 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0775 *,.zp0775 *::before,.zp0775 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0775 a,.zp0775 button,.zp0775 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Magazine / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
