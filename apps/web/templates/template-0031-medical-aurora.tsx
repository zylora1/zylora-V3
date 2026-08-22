"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0031-medical-aurora", "family": "Aurora", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|horizontal-panels|proof>programmes>features>services>process|soft-12|technical-mono", "industry": "medical", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0031({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0031" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0031{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0031 *{box-sizing:border-box}
.zp0031 a{color:inherit;text-decoration:none}
.zp0031 h1,.zp0031 h2,.zp0031 h3,.zp0031 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0031 img{max-width:100%;display:block}
.zp0031 button,.zp0031 a{-webkit-tap-highlight-color:transparent}
.zp0031 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0031 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0031 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0031 .mobileMenu{display:none}
.zp0031:has(.navRail)>.hero,.zp0031:has(.navRail)>.section,.zp0031:has(.navRail)>.contact,.zp0031:has(.navRail)>.footer{margin-left:190px}
.zp0031 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0031 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0031 .eyebrow,.zp0031 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0031 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0031 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0031 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0031 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0031 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0031 .canvasHero{overflow:hidden}
.zp0031 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0031 .canvasGrid i{border-right:1px solid var(--border)}
.zp0031 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0031 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0031 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0031 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0031 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0031 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0031 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0031 .serviceGrid p{color:var(--muted)}
.zp0031 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0031 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0031 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0031 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0031 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0031 details{border-top:1px solid var(--border);padding:20px 0}
.zp0031 details summary{font-weight:800;cursor:pointer}
.zp0031 details p{color:var(--muted);max-width:70ch}
.zp0031 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0031 .features ul{list-style:none;margin:0;padding:0}
.zp0031 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0031 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0031 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0031 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0031 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0031 .contact .eyebrow{color:var(--bg)}
.zp0031 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0031 .contactMeta{display:grid;gap:10px}
.zp0031 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0031 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0031 .sectionTitle{display:block}
.zp0031{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0031 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0031 .heroCopy{animation:enter-30 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-30{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0031 .hero{min-height:auto}
.zp0031 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0031 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0031 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0031 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0031 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0031 .mobileMenu nav a{padding:10px 8px}
.zp0031 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0031:has(.navRail)>.hero,.zp0031:has(.navRail)>.section,.zp0031:has(.navRail)>.contact,.zp0031:has(.navRail)>.footer{margin-left:0}
.zp0031 .hero{grid-template-columns:1fr}
.zp0031 .section,.zp0031 .sectionTitle,.zp0031 .features,.zp0031 .contact{grid-template-columns:1fr}
.zp0031 .section{display:block}}
@media(max-width:430px){.zp0031{font-size:16px}
.zp0031 .hero,.zp0031 .section,.zp0031 .contact{padding-left:18px;padding-right:18px}
.zp0031 .serviceGrid,.zp0031 .proof,.zp0031 .programmes>div:last-child{grid-template-columns:1fr}
.zp0031 h1{font-size:clamp(42px,14vw,70px)}}

.zp0031 .heroActions a,.zp0031 .primary,.zp0031 .ctaBtn,.zp0031 .btnPrimary,.zp0031 .schedule>a,.zp0031 .newsletter>a{transition:all .2s ease}
.zp0031 .heroActions a:hover,.zp0031 .primary:hover,.zp0031 .ctaBtn:hover,.zp0031 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0031 nav a,.zp0031 .nav a,.zp0031 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0031 nav a:hover,.zp0031 .nav a:hover,.zp0031 .footer a:hover{
  color:var(--primary)
}
.zp0031 .serviceGrid article,.zp0031 .projectCard,.zp0031 .teamCard,.zp0031 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0031 .serviceGrid article:hover,.zp0031 .projectCard:hover,.zp0031 .teamCard:hover,.zp0031 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0031 *,.zp0031 *::before,.zp0031 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0031 a,.zp0031 button,.zp0031 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
