"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0607-luxury-conceptual-sketch", "family": "Conceptual Sketch", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|horizontal-panels|destinations>services>proof>timeline>availability|soft-12|technical-mono", "industry": "luxury", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0607({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Luxury Brand");
  const headline = String(content.headline || "Quiet confidence, exceptional materials, and service designed around individual clients.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Signature collection", "Bespoke service", "Private appointments", "Journal", "Boutiques"];
  const industryLabel = "Luxury brand";
  const serviceNotes = ["Provenance documentation for every piece: origin, maker, and material certification.", "Private client service with discretion, privacy, and non-disclosure as standard.", "White-glove delivery and installation by our own specialist team.", "Bespoke commission pathway with a dedicated atelier contact from concept to completion.", "Aftercare programme: annual maintenance, authentication, and insurance valuation updates."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Sotheby's and Christie's vetted", "Private client discretion assured", "Provenance documentation", "Expert aftercare service"];
  const testimonial = "I sent a single enquiry. Within an hour I had a call from someone who clearly knew the category. That is rare in this market.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0607" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0607{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0607 *{box-sizing:border-box}
.zp0607 a{color:inherit;text-decoration:none}
.zp0607 h1,.zp0607 h2,.zp0607 h3,.zp0607 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0607 img{max-width:100%;display:block}
.zp0607 button,.zp0607 a{-webkit-tap-highlight-color:transparent}
.zp0607 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0607 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0607 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0607 .mobileMenu{display:none}
.zp0607:has(.navRail)>.hero,.zp0607:has(.navRail)>.section,.zp0607:has(.navRail)>.contact,.zp0607:has(.navRail)>.footer{margin-left:190px}
.zp0607 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0607 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0607 .eyebrow,.zp0607 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0607 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0607 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0607 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0607 .heroActions a,.zp0607 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0607 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0607 .canvasHero{overflow:hidden}
.zp0607 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0607 .canvasGrid i{border-right:1px solid var(--border)}
.zp0607 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0607 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0607 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0607 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0607 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0607 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0607 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0607 .serviceGrid p{color:var(--muted)}
.zp0607 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0607 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0607 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0607 details{border-top:1px solid var(--border);padding:20px 0}
.zp0607 details summary{font-weight:800;cursor:pointer}
.zp0607 details p{color:var(--muted);max-width:70ch}
.zp0607 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0607 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0607 .timeline article{padding:20px 0}
.zp0607 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0607 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0607 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0607 .contact .eyebrow{color:var(--bg)}
.zp0607 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0607 .contactMeta{display:grid;gap:10px}
.zp0607 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0607 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0607 .sectionTitle{display:block}
.zp0607 .heroCopy{animation:enter-606 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-606{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0607 .hero{min-height:auto}
.zp0607 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0607 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0607 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0607 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0607 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0607 .mobileMenu nav a{padding:10px 8px}
.zp0607 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0607:has(.navRail)>.hero,.zp0607:has(.navRail)>.section,.zp0607:has(.navRail)>.contact,.zp0607:has(.navRail)>.footer{margin-left:0}
.zp0607 .hero{grid-template-columns:1fr}
.zp0607 .section,.zp0607 .sectionTitle,.zp0607 .contact{grid-template-columns:1fr}
.zp0607 .section{display:block}}
@media(max-width:430px){.zp0607{font-size:16px}
.zp0607 .hero,.zp0607 .section,.zp0607 .contact{padding-left:18px;padding-right:18px}
.zp0607 .serviceGrid,.zp0607 .proof,.zp0607 .destinations>div:last-child{grid-template-columns:1fr}
.zp0607 h1{font-size:clamp(42px,14vw,70px)}}

.zp0607 .heroActions a,.zp0607 .primary,.zp0607 .ctaBtn,.zp0607 .btnPrimary,.zp0607 .schedule>a,.zp0607 .newsletter>a{transition:all .2s ease}
.zp0607 .heroActions a:hover,.zp0607 .primary:hover,.zp0607 .ctaBtn:hover,.zp0607 .btnPrimary:hover{
  opacity:.8
}
.zp0607 nav a,.zp0607 .nav a,.zp0607 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0607 nav a:hover,.zp0607 .nav a:hover,.zp0607 .footer a:hover{
  opacity:.7
}
.zp0607 .serviceGrid article,.zp0607 .projectCard,.zp0607 .teamCard,.zp0607 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0607 .serviceGrid article:hover,.zp0607 .projectCard:hover,.zp0607 .teamCard:hover,.zp0607 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0607 *,.zp0607 *::before,.zp0607 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0607 a,.zp0607 button,.zp0607 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Conceptual Sketch / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
