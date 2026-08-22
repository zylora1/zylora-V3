"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0937-manufacturing-split-screen", "family": "Split-screen", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|editorial-spine|proof>services>security>menu>newsletter|hairline|luxury-contrast", "industry": "manufacturing", "hero": "poster", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0937({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Manufacturer");
  const headline = String(content.headline || "Precision manufacturing with traceable quality and dependable production planning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Engineering", "Production", "Quality control", "Supply chain", "Custom fabrication"];
  const industryLabel = "Manufacturer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Manufacturer / Project A", "Manufacturer / Project B", "Manufacturer / Project C", "Manufacturer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Precision manufacturing with traceable quality and dependable production planning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0937" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0937{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0937 *{box-sizing:border-box}
.zp0937 a{color:inherit;text-decoration:none}
.zp0937 h1,.zp0937 h2,.zp0937 h3,.zp0937 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0937 img{max-width:100%;display:block}
.zp0937 button,.zp0937 a{-webkit-tap-highlight-color:transparent}
.zp0937 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0937 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0937 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0937 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0937 .nav.menu details{position:relative}
.zp0937 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0937 .mobileMenu{display:none}
.zp0937 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0937 .eyebrow,.zp0937 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0937 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0937 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0937 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0937 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0937 .posterTop,.zp0937 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0937 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0937 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0937 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0937 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0937 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0937 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0937 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0937 .serviceGrid p{color:var(--muted)}
.zp0937 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0937 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0937 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0937 details{border-top:1px solid var(--border);padding:20px 0}
.zp0937 details summary{font-weight:800;cursor:pointer}
.zp0937 details p{color:var(--muted);max-width:70ch}
.zp0937 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0937 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0937 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0937 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0937 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0937 .contact .eyebrow{color:var(--bg)}
.zp0937 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0937 .contactMeta{display:grid;gap:10px}
.zp0937 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-936{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0937 .hero{min-height:auto}
.zp0937 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0937 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0937 .nav nav{display:none}
.zp0937 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0937 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0937 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0937 .mobileMenu nav a{padding:10px 8px}
.zp0937 .hero{grid-template-columns:1fr}
.zp0937 .section,.zp0937 .sectionTitle,.zp0937 .security,.zp0937 .contact{grid-template-columns:1fr}
.zp0937 .section{display:block}}
@media(max-width:430px){.zp0937{font-size:16px}
.zp0937 .hero,.zp0937 .section,.zp0937 .contact{padding-left:18px;padding-right:18px}
.zp0937 .serviceGrid,.zp0937 .proof{grid-template-columns:1fr}
.zp0937 h1{font-size:clamp(42px,14vw,70px)}
.zp0937 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0937 .heroActions a,.zp0937 .primary,.zp0937 .ctaBtn,.zp0937 .btnPrimary,.zp0937 .schedule>a,.zp0937 .newsletter>a{transition:all .2s ease}
.zp0937 .heroActions a:hover,.zp0937 .primary:hover,.zp0937 .ctaBtn:hover,.zp0937 .btnPrimary:hover{
  opacity:.85
}
.zp0937 nav a,.zp0937 .nav a,.zp0937 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0937 nav a:hover,.zp0937 .nav a:hover,.zp0937 .footer a:hover{
  color:var(--primary)
}
.zp0937 .serviceGrid article,.zp0937 .projectCard,.zp0937 .teamCard,.zp0937 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0937 .serviceGrid article:hover,.zp0937 .projectCard:hover,.zp0937 .teamCard:hover,.zp0937 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0937 *,.zp0937 *::before,.zp0937 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0937 a,.zp0937 button,.zp0937 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Apply now</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
