"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0649-salon-dashboard-inspired-marketing", "family": "Dashboard-inspired Marketing", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|editorial-spine|availability>services>proof>story>materials|hairline|luxury-contrast", "industry": "salon", "hero": "poster", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0649({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const storyQuote = "\u201cGreat hair built on consultation, craft, and a style that works after you leave.\u201d";
  const storyBody = "Vale Hair Salon is presented as a real working hair salon, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0649" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0649{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0649 *{box-sizing:border-box}
.zp0649 a{color:inherit;text-decoration:none}
.zp0649 h1,.zp0649 h2,.zp0649 h3,.zp0649 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0649 img{max-width:100%;display:block}
.zp0649 button,.zp0649 a{-webkit-tap-highlight-color:transparent}
.zp0649 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0649 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0649 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0649 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0649 .nav.menu details{position:relative}
.zp0649 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0649 .mobileMenu{display:none}
.zp0649 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0649 .eyebrow,.zp0649 .sectionTitle>span,.zp0649 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0649 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0649 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0649 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0649 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0649 .posterTop,.zp0649 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0649 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0649 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0649 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0649 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0649 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0649 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0649 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0649 .serviceGrid p{color:var(--muted)}
.zp0649 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0649 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0649 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0649 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0649 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0649 .story p{color:var(--muted)}
.zp0649 details{border-top:1px solid var(--border);padding:20px 0}
.zp0649 details summary{font-weight:800;cursor:pointer}
.zp0649 details p{color:var(--muted);max-width:70ch}
.zp0649 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0649 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0649 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0649 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0649 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0649 .contact .eyebrow{color:var(--bg)}
.zp0649 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0649 .contactMeta{display:grid;gap:10px}
.zp0649 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-648{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0649 .hero{min-height:auto}
.zp0649 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0649 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0649 .nav nav{display:none}
.zp0649 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0649 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0649 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0649 .mobileMenu nav a{padding:10px 8px}
.zp0649 .hero{grid-template-columns:1fr}
.zp0649 .section,.zp0649 .sectionTitle,.zp0649 .story,.zp0649 .contact{grid-template-columns:1fr}
.zp0649 .section{display:block}}
@media(max-width:430px){.zp0649{font-size:16px}
.zp0649 .hero,.zp0649 .section,.zp0649 .contact{padding-left:18px;padding-right:18px}
.zp0649 .serviceGrid,.zp0649 .proof{grid-template-columns:1fr}
.zp0649 h1{font-size:clamp(42px,14vw,70px)}
.zp0649 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0649 .heroActions a,.zp0649 .primary,.zp0649 .ctaBtn,.zp0649 .btnPrimary,.zp0649 .schedule>a,.zp0649 .newsletter>a{transition:all .2s ease}
.zp0649 .heroActions a:hover,.zp0649 .primary:hover,.zp0649 .ctaBtn:hover,.zp0649 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0649 nav a,.zp0649 .nav a,.zp0649 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0649 nav a:hover,.zp0649 .nav a:hover,.zp0649 .footer a:hover{
  color:var(--primary)
}
.zp0649 .serviceGrid article,.zp0649 .projectCard,.zp0649 .teamCard,.zp0649 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0649 .serviceGrid article:hover,.zp0649 .projectCard:hover,.zp0649 .teamCard:hover,.zp0649 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0649 *,.zp0649 *::before,.zp0649 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0649 a,.zp0649 button,.zp0649 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dashboard-inspired Marketing / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
