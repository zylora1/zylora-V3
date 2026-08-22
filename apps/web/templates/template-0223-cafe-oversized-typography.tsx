"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0223-cafe-oversized-typography", "family": "Oversized Typography", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|programme-led|proof>awards>integrations>services>case-study|soft-12|technical-mono", "industry": "cafe", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "programme-led"};

export default function Template0223({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Cafe");
  const headline = String(content.headline || "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Espresso bar", "Breakfast", "Lunch", "House baking", "Catering"];
  const industryLabel = "Cafe";
  const serviceNotes = ["Single-origin espresso and filter programme sourced from farms we've visited.", "Pastries baked in-house each morning — what's there is what we made that day.", "Laptop-friendly with fast wifi and power at every seat.", "Outdoor terrace open from April through October, weather-permitting.", "Weekend brunch until 2pm with seasonal specials not on the regular menu."];
  const proofPoints = ["Specialty coffee certified", "In-house bakery", "Dog friendly", "Wifi and power included"];
  const testimonial = "I come here three times a week. The coffee is consistent, the staff know my order, and it's the one place I can actually get work done.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0223" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0223{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0223 *{box-sizing:border-box}
.zp0223 a{color:inherit;text-decoration:none}
.zp0223 h1,.zp0223 h2,.zp0223 h3,.zp0223 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0223 img{max-width:100%;display:block}
.zp0223 button,.zp0223 a{-webkit-tap-highlight-color:transparent}
.zp0223 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0223 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0223 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0223 .mobileMenu{display:none}
.zp0223:has(.navRail)>.hero,.zp0223:has(.navRail)>.section,.zp0223:has(.navRail)>.contact,.zp0223:has(.navRail)>.footer{margin-left:190px}
.zp0223 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0223 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0223 .eyebrow,.zp0223 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0223 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0223 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0223 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0223 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0223 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0223 .canvasHero{overflow:hidden}
.zp0223 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0223 .canvasGrid i{border-right:1px solid var(--border)}
.zp0223 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0223 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0223 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0223 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0223 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0223 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0223 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0223 .serviceGrid p{color:var(--muted)}
.zp0223 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0223 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0223 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0223 details{border-top:1px solid var(--border);padding:20px 0}
.zp0223 details summary{font-weight:800;cursor:pointer}
.zp0223 details p{color:var(--muted);max-width:70ch}
.zp0223 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0223 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0223 .projects article:nth-child(2){transform:translateY(32px)}
.zp0223 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0223 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0223 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0223 .awards>div{max-width:800px;margin-left:auto}
.zp0223 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0223 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0223 .contact .eyebrow{color:var(--bg)}
.zp0223 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0223 .contactMeta{display:grid;gap:10px}
.zp0223 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0223 .heroCopy{animation:enter-222 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-222{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0223 .hero{min-height:auto}
.zp0223 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0223 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0223 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0223 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0223 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0223 .mobileMenu nav a{padding:10px 8px}
.zp0223 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0223:has(.navRail)>.hero,.zp0223:has(.navRail)>.section,.zp0223:has(.navRail)>.contact,.zp0223:has(.navRail)>.footer{margin-left:0}
.zp0223 .hero{grid-template-columns:1fr}
.zp0223 .section,.zp0223 .sectionTitle,.zp0223 .contact{grid-template-columns:1fr}
.zp0223 .projects .projectGrid{grid-template-columns:1fr}
.zp0223 .projects article:nth-child(2){transform:none}
.zp0223 .section{display:block}}
@media(max-width:430px){.zp0223{font-size:16px}
.zp0223 .hero,.zp0223 .section,.zp0223 .contact{padding-left:18px;padding-right:18px}
.zp0223 .serviceGrid,.zp0223 .proof{grid-template-columns:1fr}
.zp0223 h1{font-size:clamp(42px,14vw,70px)}}

.zp0223 .heroActions a,.zp0223 .primary,.zp0223 .ctaBtn,.zp0223 .btnPrimary,.zp0223 .schedule>a,.zp0223 .newsletter>a{transition:all .2s ease}
.zp0223 .heroActions a:hover,.zp0223 .primary:hover,.zp0223 .ctaBtn:hover,.zp0223 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0223 nav a,.zp0223 .nav a,.zp0223 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0223 nav a:hover,.zp0223 .nav a:hover,.zp0223 .footer a:hover{
  color:var(--primary)
}
.zp0223 .serviceGrid article,.zp0223 .projectCard,.zp0223 .teamCard,.zp0223 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0223 .serviceGrid article:hover,.zp0223 .projectCard:hover,.zp0223 .teamCard:hover,.zp0223 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0223 *,.zp0223 *::before,.zp0223 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0223 a,.zp0223 button,.zp0223 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
