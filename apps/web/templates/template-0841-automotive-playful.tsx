"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0841-automotive-playful", "family": "Playful", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|collection-led|services>credentials>pricing>awards>proof|hairline|luxury-contrast", "industry": "automotive", "hero": "poster", "navigation": "fullscreen-menu", "layout": "collection-led"};

export default function Template0841({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const industryLabel = "Automotive dealer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0841" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0841{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0841 *{box-sizing:border-box}
.zp0841 a{color:inherit;text-decoration:none}
.zp0841 h1,.zp0841 h2,.zp0841 h3,.zp0841 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0841 img{max-width:100%;display:block}
.zp0841 button,.zp0841 a{-webkit-tap-highlight-color:transparent}
.zp0841 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0841 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0841 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0841 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0841 .nav.menu details{position:relative}
.zp0841 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0841 .mobileMenu{display:none}
.zp0841 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0841 .eyebrow,.zp0841 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0841 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0841 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0841 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0841 .posterTop,.zp0841 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0841 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0841 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0841 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0841 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0841 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0841 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0841 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0841 .serviceGrid p{color:var(--muted)}
.zp0841 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0841 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0841 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0841 details{border-top:1px solid var(--border);padding:20px 0}
.zp0841 details summary{font-weight:800;cursor:pointer}
.zp0841 details p{color:var(--muted);max-width:70ch}
.zp0841 .priceRows{border-top:1px solid var(--border)}
.zp0841 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0841 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0841 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0841 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0841 .awards>div{max-width:800px;margin-left:auto}
.zp0841 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0841 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0841 .contact .eyebrow{color:var(--bg)}
.zp0841 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0841 .contactMeta{display:grid;gap:10px}
.zp0841 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-840{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0841 .hero{min-height:auto}
.zp0841 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0841 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0841 .nav nav{display:none}
.zp0841 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0841 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0841 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0841 .mobileMenu nav a{padding:10px 8px}
.zp0841 .hero{grid-template-columns:1fr}
.zp0841 .section,.zp0841 .sectionTitle,.zp0841 .contact{grid-template-columns:1fr}
.zp0841 .section{display:block}}
@media(max-width:430px){.zp0841{font-size:16px}
.zp0841 .hero,.zp0841 .section,.zp0841 .contact{padding-left:18px;padding-right:18px}
.zp0841 .serviceGrid,.zp0841 .proof{grid-template-columns:1fr}
.zp0841 h1{font-size:clamp(42px,14vw,70px)}
.zp0841 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0841 .priceRows article{grid-template-columns:1fr}}

.zp0841 .heroActions a,.zp0841 .primary,.zp0841 .ctaBtn,.zp0841 .btnPrimary,.zp0841 .schedule>a,.zp0841 .newsletter>a{transition:all .2s ease}
.zp0841 .heroActions a:hover,.zp0841 .primary:hover,.zp0841 .ctaBtn:hover,.zp0841 .btnPrimary:hover{
  transform:scale(1.05) rotate(-1deg)
}
.zp0841 nav a,.zp0841 .nav a,.zp0841 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0841 nav a:hover,.zp0841 .nav a:hover,.zp0841 .footer a:hover{
  color:var(--primary)
}
.zp0841 .serviceGrid article,.zp0841 .projectCard,.zp0841 .teamCard,.zp0841 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0841 .serviceGrid article:hover,.zp0841 .projectCard:hover,.zp0841 .teamCard:hover,.zp0841 .bentoCard:hover{
  transform:scale(1.02) rotate(.5deg)
}
@media(prefers-reduced-motion:reduce){.zp0841 *,.zp0841 *::before,.zp0841 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0841 a,.zp0841 button,.zp0841 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Playful / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
