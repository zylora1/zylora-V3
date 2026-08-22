"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0103-yoga-luxury-hospitality", "family": "Luxury Hospitality", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|horizontal-panels|services>timeline>products>press>proof|asymmetric-radius|technical-mono", "industry": "yoga", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "horizontal-panels"};

export default function Template0103({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const industryLabel = "Yoga studio";
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0103" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0103{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0103 *{box-sizing:border-box}
.zp0103 a{color:inherit;text-decoration:none}
.zp0103 h1,.zp0103 h2,.zp0103 h3,.zp0103 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0103 img{max-width:100%;display:block}
.zp0103 button,.zp0103 a{-webkit-tap-highlight-color:transparent}
.zp0103 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0103 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0103 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0103 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0103 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0103 .nav.index nav{justify-content:flex-end}
.zp0103 .mobileMenu{display:none}
.zp0103 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0103 .eyebrow,.zp0103 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0103 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0103 .minimalHero{display:block;min-height:74vh}
.zp0103 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0103 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0103 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0103 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0103 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0103 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0103 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0103 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0103 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0103 .serviceGrid p{color:var(--muted)}
.zp0103 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0103 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0103 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0103 details{border-top:1px solid var(--border);padding:20px 0}
.zp0103 details summary{font-weight:800;cursor:pointer}
.zp0103 details p{color:var(--muted);max-width:70ch}
.zp0103 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0103 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0103 .p1,.zp0103 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0103 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0103 .timeline article{padding:20px 0}
.zp0103 .awards>div{max-width:800px;margin-left:auto}
.zp0103 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0103 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0103 .contact .eyebrow{color:var(--bg)}
.zp0103 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0103 .contactMeta{display:grid;gap:10px}
.zp0103 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0103 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0103 .sectionTitle{display:block}
@keyframes enter-102{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0103 .hero{min-height:auto}
.zp0103 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0103 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0103 .nav nav{display:none}
.zp0103 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0103 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0103 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0103 .mobileMenu nav a{padding:10px 8px}
.zp0103 .hero{grid-template-columns:1fr}
.zp0103 .section,.zp0103 .sectionTitle,.zp0103 .contact{grid-template-columns:1fr}
.zp0103 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0103 .section{display:block}}
@media(max-width:430px){.zp0103{font-size:16px}
.zp0103 .hero,.zp0103 .section,.zp0103 .contact{padding-left:18px;padding-right:18px}
.zp0103 .serviceGrid,.zp0103 .proof,.zp0103 .collectionGrid{grid-template-columns:1fr}
.zp0103 h1{font-size:clamp(42px,14vw,70px)}
.zp0103 .minimalFoot{grid-template-columns:1fr}
.zp0103 .nav.index{grid-template-columns:1fr auto}
.zp0103 .nav.index>span{display:none}}

.zp0103 .heroActions a,.zp0103 .primary,.zp0103 .ctaBtn,.zp0103 .btnPrimary,.zp0103 .schedule>a,.zp0103 .newsletter>a{transition:all .2s ease}
.zp0103 .heroActions a:hover,.zp0103 .primary:hover,.zp0103 .ctaBtn:hover,.zp0103 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0103 nav a,.zp0103 .nav a,.zp0103 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0103 nav a:hover,.zp0103 .nav a:hover,.zp0103 .footer a:hover{
  opacity:.65
}
.zp0103 .serviceGrid article,.zp0103 .projectCard,.zp0103 .teamCard,.zp0103 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0103 .serviceGrid article:hover,.zp0103 .projectCard:hover,.zp0103 .teamCard:hover,.zp0103 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0103 *,.zp0103 *::before,.zp0103 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0103 a,.zp0103 button,.zp0103 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
