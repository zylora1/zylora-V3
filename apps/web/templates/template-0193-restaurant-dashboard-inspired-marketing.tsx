"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0193-restaurant-dashboard-inspired-marketing", "family": "Dashboard-inspired Marketing", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|collection-led|proof>metrics>services>projects>availability|square-editorial|luxury-contrast", "industry": "restaurant", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "collection-led"};

export default function Template0193({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Restaurant");
  const headline = String(content.headline || "Ingredient-led cooking, warm service, and a menu that changes with the season.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Dinner service", "Tasting menu", "Private dining", "Seasonal specials", "Gift cards"];
  const industryLabel = "Restaurant";
  const serviceNotes = ["Seasonal menu updated monthly — what's on the plate reflects what's best that week.", "Private dining for up to 24 guests with a custom menu discussion included.", "Wine list curated by our sommelier with natural and classic options from small producers.", "Pre-theatre early service from 5:30 — main back by 7:15, guaranteed.", "Dietary requirements handled seriously: allergies logged and kitchen briefed."];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0193" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0193{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0193 *{box-sizing:border-box}
.zp0193 a{color:inherit;text-decoration:none}
.zp0193 h1,.zp0193 h2,.zp0193 h3,.zp0193 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0193 img{max-width:100%;display:block}
.zp0193 button,.zp0193 a{-webkit-tap-highlight-color:transparent}
.zp0193 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0193 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0193 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0193 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0193 .mobileMenu{display:none}
.zp0193 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0193 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0193 .eyebrow,.zp0193 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0193 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0193 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0193 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0193 .heroActions a,.zp0193 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0193 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0193 .typeOnly{grid-template-columns:1fr .28fr}
.zp0193 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0193 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0193 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0193 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0193 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0193 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0193 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0193 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0193 .serviceGrid p{color:var(--muted)}
.zp0193 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0193 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0193 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0193 details{border-top:1px solid var(--border);padding:20px 0}
.zp0193 details summary{font-weight:800;cursor:pointer}
.zp0193 details p{color:var(--muted);max-width:70ch}
.zp0193 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0193 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0193 .projects article:nth-child(2){transform:translateY(32px)}
.zp0193 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0193 .metrics div{background:var(--bg);padding:30px}
.zp0193 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Didot, Georgia, serif;color:var(--primary)}
.zp0193 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0193 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0193 .contact .eyebrow{color:var(--bg)}
.zp0193 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0193 .contactMeta{display:grid;gap:10px}
.zp0193 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0193 .heroCopy{animation:enter-192 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-192{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0193 .hero{min-height:auto}
.zp0193 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0193 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0193 .nav nav{display:none}
.zp0193 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0193 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0193 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0193 .mobileMenu nav a{padding:10px 8px}
.zp0193 .hero{grid-template-columns:1fr}
.zp0193 .section,.zp0193 .sectionTitle,.zp0193 .contact{grid-template-columns:1fr}
.zp0193 .metrics{grid-template-columns:1fr 1fr}
.zp0193 .projects .projectGrid{grid-template-columns:1fr}
.zp0193 .projects article:nth-child(2){transform:none}
.zp0193 .section{display:block}}
@media(max-width:430px){.zp0193{font-size:16px}
.zp0193 .hero,.zp0193 .section,.zp0193 .contact{padding-left:18px;padding-right:18px}
.zp0193 .serviceGrid,.zp0193 .proof,.zp0193 .metrics{grid-template-columns:1fr}
.zp0193 h1{font-size:clamp(42px,14vw,70px)}}

.zp0193 .heroActions a,.zp0193 .primary,.zp0193 .ctaBtn,.zp0193 .btnPrimary,.zp0193 .schedule>a,.zp0193 .newsletter>a{transition:all .2s ease}
.zp0193 .heroActions a:hover,.zp0193 .primary:hover,.zp0193 .ctaBtn:hover,.zp0193 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0193 nav a,.zp0193 .nav a,.zp0193 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0193 nav a:hover,.zp0193 .nav a:hover,.zp0193 .footer a:hover{
  color:var(--primary)
}
.zp0193 .serviceGrid article,.zp0193 .projectCard,.zp0193 .teamCard,.zp0193 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0193 .serviceGrid article:hover,.zp0193 .projectCard:hover,.zp0193 .teamCard:hover,.zp0193 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0193 *,.zp0193 *::before,.zp0193 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0193 a,.zp0193 button,.zp0193 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dashboard-inspired Marketing / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
