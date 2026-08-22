"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0289-tourism-monochrome", "family": "Monochrome", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|editorial-spine|proof>integrations>services>materials>metrics|square-editorial|luxury-contrast", "industry": "tourism", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "editorial-spine"};

export default function Template0289({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Tour Operator");
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
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0289" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0289{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0289 *{box-sizing:border-box}
.zp0289 a{color:inherit;text-decoration:none}
.zp0289 h1,.zp0289 h2,.zp0289 h3,.zp0289 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0289 img{max-width:100%;display:block}
.zp0289 button,.zp0289 a{-webkit-tap-highlight-color:transparent}
.zp0289 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0289 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0289 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0289 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0289 .mobileMenu{display:none}
.zp0289 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0289 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0289 .eyebrow,.zp0289 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0289 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0289 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0289 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0289 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0289 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0289 .typeOnly{grid-template-columns:1fr .28fr}
.zp0289 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0289 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0289 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0289 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0289 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0289 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0289 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0289 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0289 .serviceGrid p{color:var(--muted)}
.zp0289 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0289 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0289 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0289 details{border-top:1px solid var(--border);padding:20px 0}
.zp0289 details summary{font-weight:800;cursor:pointer}
.zp0289 details p{color:var(--muted);max-width:70ch}
.zp0289 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0289 .metrics div{background:var(--bg);padding:30px}
.zp0289 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Didot, Georgia, serif;color:var(--primary)}
.zp0289 .integrations,.zp0289 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0289 .integrations>div,.zp0289 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0289 .integrations b,.zp0289 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0289 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0289 .contact .eyebrow{color:var(--bg)}
.zp0289 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0289 .contactMeta{display:grid;gap:10px}
.zp0289 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0289 .heroCopy{animation:enter-288 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-288{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0289 .hero{min-height:auto}
.zp0289 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0289 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0289 .nav nav{display:none}
.zp0289 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0289 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0289 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0289 .mobileMenu nav a{padding:10px 8px}
.zp0289 .hero{grid-template-columns:1fr}
.zp0289 .section,.zp0289 .sectionTitle,.zp0289 .contact{grid-template-columns:1fr}
.zp0289 .metrics{grid-template-columns:1fr 1fr}
.zp0289 .section{display:block}}
@media(max-width:430px){.zp0289{font-size:16px}
.zp0289 .hero,.zp0289 .section,.zp0289 .contact{padding-left:18px;padding-right:18px}
.zp0289 .serviceGrid,.zp0289 .proof,.zp0289 .metrics{grid-template-columns:1fr}
.zp0289 h1{font-size:clamp(42px,14vw,70px)}}

.zp0289 .heroActions a,.zp0289 .primary,.zp0289 .ctaBtn,.zp0289 .btnPrimary,.zp0289 .schedule>a,.zp0289 .newsletter>a{transition:all .2s ease}
.zp0289 .heroActions a:hover,.zp0289 .primary:hover,.zp0289 .ctaBtn:hover,.zp0289 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0289 nav a,.zp0289 .nav a,.zp0289 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0289 nav a:hover,.zp0289 .nav a:hover,.zp0289 .footer a:hover{
  color:var(--secondary)
}
.zp0289 .serviceGrid article,.zp0289 .projectCard,.zp0289 .teamCard,.zp0289 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0289 .serviceGrid article:hover,.zp0289 .projectCard:hover,.zp0289 .teamCard:hover,.zp0289 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0289 *,.zp0289 *::before,.zp0289 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0289 a,.zp0289 button,.zp0289 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
