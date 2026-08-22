"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0577-fashion-technical-engineering", "family": "Technical Engineering", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|editorial-spine|newsletter>proof>materials>services>hours|square-editorial|luxury-contrast", "industry": "fashion", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "editorial-spine"};

export default function Template0577({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Fashion Label");
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
  const proofPoints = ["B Corp certified", "100% traceable supply chain", "Press: Vogue, Wallpaper", "Ships to 40+ countries"];
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0577" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0577{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0577 *{box-sizing:border-box}
.zp0577 a{color:inherit;text-decoration:none}
.zp0577 h1,.zp0577 h2,.zp0577 h3,.zp0577 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0577 img{max-width:100%;display:block}
.zp0577 button,.zp0577 a{-webkit-tap-highlight-color:transparent}
.zp0577 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0577 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0577 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0577 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0577 .mobileMenu{display:none}
.zp0577 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0577 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0577 .eyebrow,.zp0577 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0577 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0577 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0577 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0577 .heroActions a,.zp0577 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0577 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0577 .typeOnly{grid-template-columns:1fr .28fr}
.zp0577 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0577 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0577 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0577 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0577 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0577 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0577 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0577 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0577 .serviceGrid p{color:var(--muted)}
.zp0577 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0577 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0577 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0577 details{border-top:1px solid var(--border);padding:20px 0}
.zp0577 details summary{font-weight:800;cursor:pointer}
.zp0577 details p{color:var(--muted);max-width:70ch}
.zp0577 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0577 .hours dl{margin:0}
.zp0577 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0577 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0577 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0577 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0577 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0577 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0577 .contact .eyebrow{color:var(--bg)}
.zp0577 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0577 .contactMeta{display:grid;gap:10px}
.zp0577 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0577 .heroCopy{animation:enter-576 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-576{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0577 .hero{min-height:auto}
.zp0577 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0577 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0577 .nav nav{display:none}
.zp0577 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0577 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0577 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0577 .mobileMenu nav a{padding:10px 8px}
.zp0577 .hero{grid-template-columns:1fr}
.zp0577 .section,.zp0577 .sectionTitle,.zp0577 .hours,.zp0577 .contact{grid-template-columns:1fr}
.zp0577 .section{display:block}}
@media(max-width:430px){.zp0577{font-size:16px}
.zp0577 .hero,.zp0577 .section,.zp0577 .contact{padding-left:18px;padding-right:18px}
.zp0577 .serviceGrid,.zp0577 .proof{grid-template-columns:1fr}
.zp0577 h1{font-size:clamp(42px,14vw,70px)}}

.zp0577 .heroActions a,.zp0577 .primary,.zp0577 .ctaBtn,.zp0577 .btnPrimary,.zp0577 .schedule>a,.zp0577 .newsletter>a{transition:all .2s ease}
.zp0577 .heroActions a:hover,.zp0577 .primary:hover,.zp0577 .ctaBtn:hover,.zp0577 .btnPrimary:hover{
  border-color:var(--primary)
}
.zp0577 nav a,.zp0577 .nav a,.zp0577 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0577 nav a:hover,.zp0577 .nav a:hover,.zp0577 .footer a:hover{
  color:var(--primary)
}
.zp0577 .serviceGrid article,.zp0577 .projectCard,.zp0577 .teamCard,.zp0577 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0577 .serviceGrid article:hover,.zp0577 .projectCard:hover,.zp0577 .teamCard:hover,.zp0577 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0577 *,.zp0577 *::before,.zp0577 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0577 a,.zp0577 button,.zp0577 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Technical Engineering / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
