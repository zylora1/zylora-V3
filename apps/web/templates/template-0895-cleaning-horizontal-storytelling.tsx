"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0895-cleaning-horizontal-storytelling", "family": "Horizontal Storytelling", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|horizontal-panels|projects>case-study>services>proof>availability|soft-12|technical-mono", "industry": "cleaning", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0895({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Cleaning Company");
  const headline = String(content.headline || "Reliable cleaning with simple scheduling, consistent teams, and clear scope.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Home cleaning", "Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring plans"];
  const industryLabel = "Cleaning company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0895" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0895{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0895 *{box-sizing:border-box}
.zp0895 a{color:inherit;text-decoration:none}
.zp0895 h1,.zp0895 h2,.zp0895 h3,.zp0895 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0895 img{max-width:100%;display:block}
.zp0895 button,.zp0895 a{-webkit-tap-highlight-color:transparent}
.zp0895 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0895 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0895 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0895 .mobileMenu{display:none}
.zp0895:has(.navRail)>.hero,.zp0895:has(.navRail)>.section,.zp0895:has(.navRail)>.contact,.zp0895:has(.navRail)>.footer{margin-left:190px}
.zp0895 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0895 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0895 .eyebrow,.zp0895 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0895 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0895 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0895 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0895 .heroActions a,.zp0895 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0895 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0895 .canvasHero{overflow:hidden}
.zp0895 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0895 .canvasGrid i{border-right:1px solid var(--border)}
.zp0895 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0895 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0895 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0895 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0895 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0895 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0895 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0895 .serviceGrid p{color:var(--muted)}
.zp0895 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0895 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0895 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0895 details{border-top:1px solid var(--border);padding:20px 0}
.zp0895 details summary{font-weight:800;cursor:pointer}
.zp0895 details p{color:var(--muted);max-width:70ch}
.zp0895 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0895 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0895 .projects article:nth-child(2){transform:translateY(32px)}
.zp0895 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0895 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0895 .contact .eyebrow{color:var(--bg)}
.zp0895 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0895 .contactMeta{display:grid;gap:10px}
.zp0895 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0895 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0895 .sectionTitle{display:block}
.zp0895 .heroCopy{animation:enter-894 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-894{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0895 .hero{min-height:auto}
.zp0895 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0895 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0895 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0895 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0895 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0895 .mobileMenu nav a{padding:10px 8px}
.zp0895 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0895:has(.navRail)>.hero,.zp0895:has(.navRail)>.section,.zp0895:has(.navRail)>.contact,.zp0895:has(.navRail)>.footer{margin-left:0}
.zp0895 .hero{grid-template-columns:1fr}
.zp0895 .section,.zp0895 .sectionTitle,.zp0895 .contact{grid-template-columns:1fr}
.zp0895 .projects .projectGrid{grid-template-columns:1fr}
.zp0895 .projects article:nth-child(2){transform:none}
.zp0895 .section{display:block}}
@media(max-width:430px){.zp0895{font-size:16px}
.zp0895 .hero,.zp0895 .section,.zp0895 .contact{padding-left:18px;padding-right:18px}
.zp0895 .serviceGrid,.zp0895 .proof{grid-template-columns:1fr}
.zp0895 h1{font-size:clamp(42px,14vw,70px)}}

.zp0895 .heroActions a,.zp0895 .primary,.zp0895 .ctaBtn,.zp0895 .btnPrimary,.zp0895 .schedule>a,.zp0895 .newsletter>a{transition:all .2s ease}
.zp0895 .heroActions a:hover,.zp0895 .primary:hover,.zp0895 .ctaBtn:hover,.zp0895 .btnPrimary:hover{
  opacity:.8
}
.zp0895 nav a,.zp0895 .nav a,.zp0895 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0895 nav a:hover,.zp0895 .nav a:hover,.zp0895 .footer a:hover{
  color:var(--primary)
}
.zp0895 .serviceGrid article,.zp0895 .projectCard,.zp0895 .teamCard,.zp0895 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0895 .serviceGrid article:hover,.zp0895 .projectCard:hover,.zp0895 .teamCard:hover,.zp0895 .bentoCard:hover{
  transform:translateX(2px)
}
@media(prefers-reduced-motion:reduce){.zp0895 *,.zp0895 *::before,.zp0895 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0895 a,.zp0895 button,.zp0895 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Horizontal Storytelling / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
