"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0583-fashion-art-direction", "family": "Art Direction", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|programme-led|timeline>services>proof>team>values|asymmetric-radius|technical-mono", "industry": "fashion", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "programme-led"};

export default function Template0583({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Fashion Label");
  const headline = String(content.headline || "A strong point of view expressed through silhouette, material, and considered detail.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New collection", "Ready-to-wear", "Accessories", "Editorial", "Stockists"];
  const industryLabel = "Fashion label";
  const serviceNotes = ["Seasonal collections designed in-house with full lookbook photography managed.", "Made-to-order service with a 3-week lead time and fitting appointment included.", "Sustainable material sourcing: certified organic, deadstock, and recycled options.", "Wholesale programme with minimum order quantities designed for independent retailers.", "Alteration and repair service for garments you love but that need adapting."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["B Corp certified", "100% traceable supply chain", "Press: Vogue, Wallpaper", "Ships to 40+ countries"];
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0583" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0583{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0583 *{box-sizing:border-box}
.zp0583 a{color:inherit;text-decoration:none}
.zp0583 h1,.zp0583 h2,.zp0583 h3,.zp0583 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0583 img{max-width:100%;display:block}
.zp0583 button,.zp0583 a{-webkit-tap-highlight-color:transparent}
.zp0583 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0583 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0583 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0583 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0583 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0583 .nav.index nav{justify-content:flex-end}
.zp0583 .mobileMenu{display:none}
.zp0583 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0583 .eyebrow,.zp0583 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0583 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0583 .minimalHero{display:block;min-height:74vh}
.zp0583 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0583 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0583 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0583 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0583 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0583 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0583 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0583 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0583 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0583 .serviceGrid p{color:var(--muted)}
.zp0583 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0583 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0583 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0583 details{border-top:1px solid var(--border);padding:20px 0}
.zp0583 details summary{font-weight:800;cursor:pointer}
.zp0583 details p{color:var(--muted);max-width:70ch}
.zp0583 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0583 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0583 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Courier New, monospace;margin-bottom:18px}
.zp0583 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0583 .timeline article{padding:20px 0}
.zp0583 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Courier New, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0583 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0583 .contact .eyebrow{color:var(--bg)}
.zp0583 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0583 .contactMeta{display:grid;gap:10px}
.zp0583 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-582{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0583 .hero{min-height:auto}
.zp0583 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0583 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0583 .nav nav{display:none}
.zp0583 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0583 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0583 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0583 .mobileMenu nav a{padding:10px 8px}
.zp0583 .hero{grid-template-columns:1fr}
.zp0583 .section,.zp0583 .sectionTitle,.zp0583 .contact{grid-template-columns:1fr}
.zp0583 .teamGrid{grid-template-columns:1fr 1fr}
.zp0583 .section{display:block}}
@media(max-width:430px){.zp0583{font-size:16px}
.zp0583 .hero,.zp0583 .section,.zp0583 .contact{padding-left:18px;padding-right:18px}
.zp0583 .serviceGrid,.zp0583 .proof,.zp0583 .teamGrid{grid-template-columns:1fr}
.zp0583 h1{font-size:clamp(42px,14vw,70px)}
.zp0583 .minimalFoot{grid-template-columns:1fr}
.zp0583 .nav.index{grid-template-columns:1fr auto}
.zp0583 .nav.index>span{display:none}}

.zp0583 .heroActions a,.zp0583 .primary,.zp0583 .ctaBtn,.zp0583 .btnPrimary,.zp0583 .schedule>a,.zp0583 .newsletter>a{transition:all .2s ease}
.zp0583 .heroActions a:hover,.zp0583 .primary:hover,.zp0583 .ctaBtn:hover,.zp0583 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0583 nav a,.zp0583 .nav a,.zp0583 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0583 nav a:hover,.zp0583 .nav a:hover,.zp0583 .footer a:hover{
  opacity:.7
}
.zp0583 .serviceGrid article,.zp0583 .projectCard,.zp0583 .teamCard,.zp0583 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0583 .serviceGrid article:hover,.zp0583 .projectCard:hover,.zp0583 .teamCard:hover,.zp0583 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0583 *,.zp0583 *::before,.zp0583 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0583 a,.zp0583 button,.zp0583 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Call us</a></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
