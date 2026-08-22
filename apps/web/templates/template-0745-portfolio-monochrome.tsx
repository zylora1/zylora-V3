"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0745-portfolio-monochrome", "family": "Monochrome", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|magazine-sections|availability>services>proof>location>gallery|hairline|luxury-contrast", "industry": "portfolio", "hero": "poster", "navigation": "fullscreen-menu", "layout": "magazine-sections"};

export default function Template0745({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const industryLabel = "Creative portfolio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0745" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0745{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0745 *{box-sizing:border-box}
.zp0745 a{color:inherit;text-decoration:none}
.zp0745 h1,.zp0745 h2,.zp0745 h3,.zp0745 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0745 img{max-width:100%;display:block}
.zp0745 button,.zp0745 a{-webkit-tap-highlight-color:transparent}
.zp0745 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0745 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0745 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0745 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0745 .nav.menu details{position:relative}
.zp0745 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0745 .mobileMenu{display:none}
.zp0745 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0745 .eyebrow,.zp0745 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0745 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0745 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0745 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0745 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0745 .posterTop,.zp0745 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0745 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0745 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0745 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0745 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0745 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0745 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0745 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0745 .serviceGrid p{color:var(--muted)}
.zp0745 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0745 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0745 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0745 details{border-top:1px solid var(--border);padding:20px 0}
.zp0745 details summary{font-weight:800;cursor:pointer}
.zp0745 details p{color:var(--muted);max-width:70ch}
.zp0745 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0745 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0745 .galleryGrid>*:first-child{grid-row:1/3}
.zp0745 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0745 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0745 .g2,.zp0745 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0745 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0745 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0745 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0745 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0745 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0745 .contact .eyebrow{color:var(--bg)}
.zp0745 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0745 .contactMeta{display:grid;gap:10px}
.zp0745 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0745 .section{column-rule:1px solid var(--border)}
.zp0745 .sectionTitle h2{max-width:18ch}
@keyframes enter-744{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0745 .hero{min-height:auto}
.zp0745 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0745 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0745 .nav nav{display:none}
.zp0745 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0745 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0745 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0745 .mobileMenu nav a{padding:10px 8px}
.zp0745 .hero{grid-template-columns:1fr}
.zp0745 .section,.zp0745 .sectionTitle,.zp0745 .location,.zp0745 .contact{grid-template-columns:1fr}
.zp0745 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0745 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0745 .section{display:block}}
@media(max-width:430px){.zp0745{font-size:16px}
.zp0745 .hero,.zp0745 .section,.zp0745 .contact{padding-left:18px;padding-right:18px}
.zp0745 .serviceGrid,.zp0745 .proof{grid-template-columns:1fr}
.zp0745 h1{font-size:clamp(42px,14vw,70px)}
.zp0745 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0745 .galleryGrid{grid-template-columns:1fr}
.zp0745 .galleryGrid>*:first-child{grid-column:auto}}

.zp0745 .heroActions a,.zp0745 .primary,.zp0745 .ctaBtn,.zp0745 .btnPrimary,.zp0745 .schedule>a,.zp0745 .newsletter>a{transition:all .2s ease}
.zp0745 .heroActions a:hover,.zp0745 .primary:hover,.zp0745 .ctaBtn:hover,.zp0745 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0745 nav a,.zp0745 .nav a,.zp0745 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0745 nav a:hover,.zp0745 .nav a:hover,.zp0745 .footer a:hover{
  color:var(--secondary)
}
.zp0745 .serviceGrid article,.zp0745 .projectCard,.zp0745 .teamCard,.zp0745 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0745 .serviceGrid article:hover,.zp0745 .projectCard:hover,.zp0745 .teamCard:hover,.zp0745 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0745 *,.zp0745 *::before,.zp0745 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0745 a,.zp0745 button,.zp0745 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
