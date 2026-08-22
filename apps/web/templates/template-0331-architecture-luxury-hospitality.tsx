"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0331-architecture-luxury-hospitality", "family": "Luxury Hospitality", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|programme-led|services>proof>metrics>destinations>schedule|capsule|organic-modern", "industry": "architecture", "hero": "split-image", "navigation": "statement-bar", "layout": "programme-led"};

export default function Template0331({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Architecture Studio");
  const headline = String(content.headline || "Architecture shaped by context, material, daylight, and how people actually live.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential design", "Commercial projects", "Planning", "Interiors", "Feasibility studies"];
  const industryLabel = "Architecture studio";
  const serviceNotes = ["Concept to planning permission service: we handle the technical and navigate the bureaucratic.", "New build and conversion projects for residential, commercial, and mixed-use clients.", "Planning appeal specialists with a strong track record on complex applications.", "BIM-capable studio: full 3D modelling and clash detection before a brick is laid.", "Post-occupancy evaluation included — we track how buildings perform, not just how they look."];
  const proofPoints = ["ARB and RIBA chartered", "RIBA Award winners", "£2M PI insurance", "Sustainable design lead"];
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0331" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0331{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0331 *{box-sizing:border-box}
.zp0331 a{color:inherit;text-decoration:none}
.zp0331 h1,.zp0331 h2,.zp0331 h3,.zp0331 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0331 img{max-width:100%;display:block}
.zp0331 button,.zp0331 a{-webkit-tap-highlight-color:transparent}
.zp0331 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0331 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0331 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0331 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0331 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0331 .nav.statement>a{justify-self:end}
.zp0331 .mobileMenu{display:none}
.zp0331 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0331 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0331 .eyebrow,.zp0331 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0331 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0331 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0331 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0331 .heroActions a,.zp0331 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0331 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0331 .visual,.zp0331 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0331 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0331 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0331 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0331 .heroPhoto{object-fit:cover}
.zp0331 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0331 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0331 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0331 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0331 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0331 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0331 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0331 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0331 .serviceGrid p{color:var(--muted)}
.zp0331 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0331 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0331 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0331 details{border-top:1px solid var(--border);padding:20px 0}
.zp0331 details summary{font-weight:800;cursor:pointer}
.zp0331 details p{color:var(--muted);max-width:70ch}
.zp0331 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0331 .metrics div{background:var(--bg);padding:30px}
.zp0331 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Optima, Candara, sans-serif;color:var(--primary)}
.zp0331 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0331 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0331 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0331 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0331 .contact .eyebrow{color:var(--bg)}
.zp0331 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0331 .contactMeta{display:grid;gap:10px}
.zp0331 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0331 .heroCopy{animation:enter-330 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-330{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0331 .hero{min-height:auto}
.zp0331 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0331 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0331 .nav nav{display:none}
.zp0331 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0331 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0331 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0331 .mobileMenu nav a{padding:10px 8px}
.zp0331 .hero,.zp0331 .splitHero{grid-template-columns:1fr}
.zp0331 .section,.zp0331 .sectionTitle,.zp0331 .contact{grid-template-columns:1fr}
.zp0331 .metrics{grid-template-columns:1fr 1fr}
.zp0331 .section{display:block}}
@media(max-width:430px){.zp0331{font-size:16px}
.zp0331 .hero,.zp0331 .section,.zp0331 .contact{padding-left:18px;padding-right:18px}
.zp0331 .serviceGrid,.zp0331 .proof,.zp0331 .metrics,.zp0331 .destinations>div:last-child{grid-template-columns:1fr}
.zp0331 h1{font-size:clamp(42px,14vw,70px)}
.zp0331 .nav.statement{grid-template-columns:1fr auto}
.zp0331 .nav.statement>span:first-child{display:none}}

.zp0331 .heroActions a,.zp0331 .primary,.zp0331 .ctaBtn,.zp0331 .btnPrimary,.zp0331 .schedule>a,.zp0331 .newsletter>a{transition:all .2s ease}
.zp0331 .heroActions a:hover,.zp0331 .primary:hover,.zp0331 .ctaBtn:hover,.zp0331 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0331 nav a,.zp0331 .nav a,.zp0331 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0331 nav a:hover,.zp0331 .nav a:hover,.zp0331 .footer a:hover{
  opacity:.65
}
.zp0331 .serviceGrid article,.zp0331 .projectCard,.zp0331 .teamCard,.zp0331 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0331 .serviceGrid article:hover,.zp0331 .projectCard:hover,.zp0331 .teamCard:hover,.zp0331 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0331 *,.zp0331 *::before,.zp0331 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0331 a,.zp0331 button,.zp0331 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">30</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
