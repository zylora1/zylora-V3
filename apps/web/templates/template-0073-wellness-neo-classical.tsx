"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0073-wellness-neo-classical", "family": "Neo-classical", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|editorial-spine|gallery>proof>services>metrics>testimonial|hairline|luxury-contrast", "industry": "wellness", "hero": "poster", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0073({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Wellness Studio");
  const headline = String(content.headline || "Restorative care with simple booking, transparent options, and a calm experience.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage therapy", "Recovery sessions", "Nutrition consults", "Breathwork", "Wellness memberships"];
  const industryLabel = "Wellness studio";
  const serviceNotes = ["Personalised programmes that fit around your work, sleep and lifestyle patterns.", "Evidence-informed practice — we explain the science behind every recommendation.", "Mind-body integration sessions that address stress, movement, and recovery together.", "Nutritional guidance grounded in practical, sustainable food choices.", "Group and one-to-one formats to match your preference for accountability."];
  const proofPoints = ["Certified practitioners", "Online and in-person", "Programme tracking included", "Community support group"];
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const testimonialName = "Slate client";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0073" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0073{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0073 *{box-sizing:border-box}
.zp0073 a{color:inherit;text-decoration:none}
.zp0073 h1,.zp0073 h2,.zp0073 h3,.zp0073 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0073 img{max-width:100%;display:block}
.zp0073 button,.zp0073 a{-webkit-tap-highlight-color:transparent}
.zp0073 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0073 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0073 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0073 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0073 .nav.menu details{position:relative}
.zp0073 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0073 .mobileMenu{display:none}
.zp0073 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0073 .eyebrow,.zp0073 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0073 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0073 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0073 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0073 .posterTop,.zp0073 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0073 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0073 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0073 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0073 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0073 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0073 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0073 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0073 .serviceGrid p{color:var(--muted)}
.zp0073 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0073 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0073 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0073 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0073 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0073 .testimonial>div{align-self:end}
.zp0073 .testimonial span{display:block;opacity:.7}
.zp0073 details{border-top:1px solid var(--border);padding:20px 0}
.zp0073 details summary{font-weight:800;cursor:pointer}
.zp0073 details p{color:var(--muted);max-width:70ch}
.zp0073 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0073 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0073 .galleryGrid>*:first-child{grid-row:1/3}
.zp0073 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0073 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0073 .g2,.zp0073 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0073 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0073 .metrics div{background:var(--bg);padding:30px}
.zp0073 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Didot, Georgia, serif;color:var(--primary)}
.zp0073 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0073 .contact .eyebrow{color:var(--bg)}
.zp0073 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0073 .contactMeta{display:grid;gap:10px}
.zp0073 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-72{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0073 .hero{min-height:auto}
.zp0073 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0073 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0073 .nav nav{display:none}
.zp0073 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0073 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0073 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0073 .mobileMenu nav a{padding:10px 8px}
.zp0073 .hero{grid-template-columns:1fr}
.zp0073 .section,.zp0073 .sectionTitle,.zp0073 .contact{grid-template-columns:1fr}
.zp0073 .testimonial{grid-template-columns:1fr}
.zp0073 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0073 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0073 .metrics{grid-template-columns:1fr 1fr}
.zp0073 .section{display:block}}
@media(max-width:430px){.zp0073{font-size:16px}
.zp0073 .hero,.zp0073 .section,.zp0073 .contact{padding-left:18px;padding-right:18px}
.zp0073 .serviceGrid,.zp0073 .proof,.zp0073 .metrics{grid-template-columns:1fr}
.zp0073 h1{font-size:clamp(42px,14vw,70px)}
.zp0073 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0073 .galleryGrid{grid-template-columns:1fr}
.zp0073 .galleryGrid>*:first-child{grid-column:auto}}

.zp0073 .heroActions a,.zp0073 .primary,.zp0073 .ctaBtn,.zp0073 .btnPrimary,.zp0073 .schedule>a,.zp0073 .newsletter>a{transition:all .2s ease}
.zp0073 .heroActions a:hover,.zp0073 .primary:hover,.zp0073 .ctaBtn:hover,.zp0073 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0073 nav a,.zp0073 .nav a,.zp0073 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0073 nav a:hover,.zp0073 .nav a:hover,.zp0073 .footer a:hover{
  color:var(--secondary)
}
.zp0073 .serviceGrid article,.zp0073 .projectCard,.zp0073 .teamCard,.zp0073 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0073 .serviceGrid article:hover,.zp0073 .projectCard:hover,.zp0073 .teamCard:hover,.zp0073 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0073 *,.zp0073 *::before,.zp0073 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0073 a,.zp0073 button,.zp0073 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
