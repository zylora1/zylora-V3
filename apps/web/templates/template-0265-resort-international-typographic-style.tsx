"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0265-resort-international-typographic-style", "family": "International Typographic Style", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|collection-led|testimonial>hours>pricing>services>proof|hairline|luxury-contrast", "industry": "resort", "hero": "poster", "navigation": "fullscreen-menu", "layout": "collection-led"};

export default function Template0265({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const testimonialName = "Slate client";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0265" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0265{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0265 *{box-sizing:border-box}
.zp0265 a{color:inherit;text-decoration:none}
.zp0265 h1,.zp0265 h2,.zp0265 h3,.zp0265 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0265 img{max-width:100%;display:block}
.zp0265 button,.zp0265 a{-webkit-tap-highlight-color:transparent}
.zp0265 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0265 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0265 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0265 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0265 .nav.menu details{position:relative}
.zp0265 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0265 .mobileMenu{display:none}
.zp0265 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0265 .eyebrow,.zp0265 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0265 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0265 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0265 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0265 .posterTop,.zp0265 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0265 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0265 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0265 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0265 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0265 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0265 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0265 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0265 .serviceGrid p{color:var(--muted)}
.zp0265 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0265 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0265 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0265 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0265 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0265 .testimonial>div{align-self:end}
.zp0265 .testimonial span{display:block;opacity:.7}
.zp0265 details{border-top:1px solid var(--border);padding:20px 0}
.zp0265 details summary{font-weight:800;cursor:pointer}
.zp0265 details p{color:var(--muted);max-width:70ch}
.zp0265 .priceRows{border-top:1px solid var(--border)}
.zp0265 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0265 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0265 .hours dl{margin:0}
.zp0265 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0265 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0265 .contact .eyebrow{color:var(--bg)}
.zp0265 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0265 .contactMeta{display:grid;gap:10px}
.zp0265 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-264{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0265 .hero{min-height:auto}
.zp0265 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0265 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0265 .nav nav{display:none}
.zp0265 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0265 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0265 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0265 .mobileMenu nav a{padding:10px 8px}
.zp0265 .hero{grid-template-columns:1fr}
.zp0265 .section,.zp0265 .sectionTitle,.zp0265 .hours,.zp0265 .contact{grid-template-columns:1fr}
.zp0265 .testimonial{grid-template-columns:1fr}
.zp0265 .section{display:block}}
@media(max-width:430px){.zp0265{font-size:16px}
.zp0265 .hero,.zp0265 .section,.zp0265 .contact{padding-left:18px;padding-right:18px}
.zp0265 .serviceGrid,.zp0265 .proof{grid-template-columns:1fr}
.zp0265 h1{font-size:clamp(42px,14vw,70px)}
.zp0265 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0265 .priceRows article{grid-template-columns:1fr}}

.zp0265 .heroActions a,.zp0265 .primary,.zp0265 .ctaBtn,.zp0265 .btnPrimary,.zp0265 .schedule>a,.zp0265 .newsletter>a{transition:all .2s ease}
.zp0265 .heroActions a:hover,.zp0265 .primary:hover,.zp0265 .ctaBtn:hover,.zp0265 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0265 nav a,.zp0265 .nav a,.zp0265 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0265 nav a:hover,.zp0265 .nav a:hover,.zp0265 .footer a:hover{
  text-decoration:underline
}
.zp0265 .serviceGrid article,.zp0265 .projectCard,.zp0265 .teamCard,.zp0265 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0265 .serviceGrid article:hover,.zp0265 .projectCard:hover,.zp0265 .teamCard:hover,.zp0265 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0265 *,.zp0265 *::before,.zp0265 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0265 a,.zp0265 button,.zp0265 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Check availability</a></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>International Typographic Style / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
