"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0751-portfolio-art-deco", "family": "Art Deco", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|horizontal-panels|projects>story>proof>metrics>services|soft-12|technical-mono", "industry": "portfolio", "hero": "location-led", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0751({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Creative Portfolio");
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
  const storyQuote = "\u201cA concise portfolio that makes the work, thinking, and role in each project easy to understand.\u201d";
  const storyBody = "Miller & Rowe Creative Portfolio is presented as a real working creative portfolio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0751" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0751{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0751 *{box-sizing:border-box}
.zp0751 a{color:inherit;text-decoration:none}
.zp0751 h1,.zp0751 h2,.zp0751 h3,.zp0751 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0751 img{max-width:100%;display:block}
.zp0751 button,.zp0751 a{-webkit-tap-highlight-color:transparent}
.zp0751 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0751 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0751 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0751 .mobileMenu{display:none}
.zp0751:has(.navRail)>.hero,.zp0751:has(.navRail)>.section,.zp0751:has(.navRail)>.contact,.zp0751:has(.navRail)>.footer{margin-left:190px}
.zp0751 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0751 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0751 .eyebrow,.zp0751 .sectionTitle>span,.zp0751 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0751 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0751 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0751 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0751 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0751 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0751 .locationHero{grid-template-columns:1fr 1fr}
.zp0751 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0751 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0751 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0751 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0751 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0751 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0751 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0751 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0751 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0751 .serviceGrid p{color:var(--muted)}
.zp0751 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0751 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0751 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0751 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0751 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0751 .story p{color:var(--muted)}
.zp0751 details{border-top:1px solid var(--border);padding:20px 0}
.zp0751 details summary{font-weight:800;cursor:pointer}
.zp0751 details p{color:var(--muted);max-width:70ch}
.zp0751 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0751 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0751 .projects article:nth-child(2){transform:translateY(32px)}
.zp0751 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0751 .metrics div{background:var(--bg);padding:30px}
.zp0751 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Courier New, monospace;color:var(--primary)}
.zp0751 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0751 .contact .eyebrow{color:var(--bg)}
.zp0751 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0751 .contactMeta{display:grid;gap:10px}
.zp0751 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0751 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0751 .sectionTitle{display:block}
.zp0751 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
.zp0751 .heroCopy{animation:enter-750 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-750{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0751 .hero{min-height:auto}
.zp0751 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0751 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0751 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0751 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0751 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0751 .mobileMenu nav a{padding:10px 8px}
.zp0751 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0751:has(.navRail)>.hero,.zp0751:has(.navRail)>.section,.zp0751:has(.navRail)>.contact,.zp0751:has(.navRail)>.footer{margin-left:0}
.zp0751 .hero,.zp0751 .locationHero{grid-template-columns:1fr}
.zp0751 .section,.zp0751 .sectionTitle,.zp0751 .story,.zp0751 .contact{grid-template-columns:1fr}
.zp0751 .metrics{grid-template-columns:1fr 1fr}
.zp0751 .projects .projectGrid{grid-template-columns:1fr}
.zp0751 .projects article:nth-child(2){transform:none}
.zp0751 .section{display:block}}
@media(max-width:430px){.zp0751{font-size:16px}
.zp0751 .hero,.zp0751 .section,.zp0751 .contact{padding-left:18px;padding-right:18px}
.zp0751 .serviceGrid,.zp0751 .proof,.zp0751 .metrics{grid-template-columns:1fr}
.zp0751 h1{font-size:clamp(42px,14vw,70px)}}

.zp0751 .heroActions a,.zp0751 .primary,.zp0751 .ctaBtn,.zp0751 .btnPrimary,.zp0751 .schedule>a,.zp0751 .newsletter>a{transition:all .2s ease}
.zp0751 .heroActions a:hover,.zp0751 .primary:hover,.zp0751 .ctaBtn:hover,.zp0751 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0751 nav a,.zp0751 .nav a,.zp0751 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0751 nav a:hover,.zp0751 .nav a:hover,.zp0751 .footer a:hover{
  color:var(--primary)
}
.zp0751 .serviceGrid article,.zp0751 .projectCard,.zp0751 .teamCard,.zp0751 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0751 .serviceGrid article:hover,.zp0751 .projectCard:hover,.zp0751 .teamCard:hover,.zp0751 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0751 *,.zp0751 *::before,.zp0751 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0751 a,.zp0751 button,.zp0751 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
