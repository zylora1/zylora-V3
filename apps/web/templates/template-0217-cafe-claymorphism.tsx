"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0217-cafe-claymorphism", "family": "Claymorphism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|editorial-spine|destinations>community>pricing>proof>services|hairline|luxury-contrast", "industry": "cafe", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0217({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Cafe");
  const headline = String(content.headline || "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Espresso bar", "Breakfast", "Lunch", "House baking", "Catering"];
  const industryLabel = "Cafe";
  const serviceNotes = ["Single-origin espresso and filter programme sourced from farms we've visited.", "Pastries baked in-house each morning — what's there is what we made that day.", "Laptop-friendly with fast wifi and power at every seat.", "Outdoor terrace open from April through October, weather-permitting.", "Weekend brunch until 2pm with seasonal specials not on the regular menu."];
  const proofPoints = ["Specialty coffee certified", "In-house bakery", "Dog friendly", "Wifi and power included"];
  const storyBody = "Foundry Cafe is presented as a real working cafe, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I come here three times a week. The coffee is consistent, the staff know my order, and it's the one place I can actually get work done.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0217" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0217{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0217 *{box-sizing:border-box}
.zp0217 a{color:inherit;text-decoration:none}
.zp0217 h1,.zp0217 h2,.zp0217 h3,.zp0217 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0217 img{max-width:100%;display:block}
.zp0217 button,.zp0217 a{-webkit-tap-highlight-color:transparent}
.zp0217 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0217 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0217 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0217 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0217 .nav.menu details{position:relative}
.zp0217 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0217 .mobileMenu{display:none}
.zp0217 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0217 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0217 .eyebrow,.zp0217 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0217 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0217 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0217 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0217 .heroActions a,.zp0217 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0217 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0217 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0217 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0217 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0217 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0217 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0217 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0217 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0217 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0217 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0217 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0217 .serviceGrid p{color:var(--muted)}
.zp0217 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0217 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0217 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0217 details{border-top:1px solid var(--border);padding:20px 0}
.zp0217 details summary{font-weight:800;cursor:pointer}
.zp0217 details p{color:var(--muted);max-width:70ch}
.zp0217 .priceRows{border-top:1px solid var(--border)}
.zp0217 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0217 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0217 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0217 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0217 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0217 .contact .eyebrow{color:var(--bg)}
.zp0217 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0217 .contactMeta{display:grid;gap:10px}
.zp0217 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0217 .heroCopy{animation:enter-216 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-216{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0217 .hero{min-height:auto}
.zp0217 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0217 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0217 .nav nav{display:none}
.zp0217 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0217 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0217 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0217 .mobileMenu nav a{padding:10px 8px}
.zp0217 .hero,.zp0217 .archiveHero{grid-template-columns:1fr}
.zp0217 .section,.zp0217 .sectionTitle,.zp0217 .contact{grid-template-columns:1fr}
.zp0217 .section{display:block}}
@media(max-width:430px){.zp0217{font-size:16px}
.zp0217 .hero,.zp0217 .section,.zp0217 .contact{padding-left:18px;padding-right:18px}
.zp0217 .serviceGrid,.zp0217 .proof,.zp0217 .destinations>div:last-child{grid-template-columns:1fr}
.zp0217 h1{font-size:clamp(42px,14vw,70px)}
.zp0217 .priceRows article{grid-template-columns:1fr}}

.zp0217 .heroActions a,.zp0217 .primary,.zp0217 .ctaBtn,.zp0217 .btnPrimary,.zp0217 .schedule>a,.zp0217 .newsletter>a{transition:all .2s ease}
.zp0217 .heroActions a:hover,.zp0217 .primary:hover,.zp0217 .ctaBtn:hover,.zp0217 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0217 nav a,.zp0217 .nav a,.zp0217 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0217 nav a:hover,.zp0217 .nav a:hover,.zp0217 .footer a:hover{
  color:var(--primary)
}
.zp0217 .serviceGrid article,.zp0217 .projectCard,.zp0217 .teamCard,.zp0217 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0217 .serviceGrid article:hover,.zp0217 .projectCard:hover,.zp0217 .teamCard:hover,.zp0217 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0217 *,.zp0217 *::before,.zp0217 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0217 a,.zp0217 button,.zp0217 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
