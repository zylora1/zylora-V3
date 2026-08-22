"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0127-sports-art-direction", "family": "Art Direction", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|two-speed-scroll|services>proof>availability>timeline>metrics|soft-12|technical-mono", "industry": "sports", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "two-speed-scroll"};

export default function Template0127({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0127" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0127{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0127 *{box-sizing:border-box}
.zp0127 a{color:inherit;text-decoration:none}
.zp0127 h1,.zp0127 h2,.zp0127 h3,.zp0127 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0127 img{max-width:100%;display:block}
.zp0127 button,.zp0127 a{-webkit-tap-highlight-color:transparent}
.zp0127 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0127 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0127 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0127 .mobileMenu{display:none}
.zp0127:has(.navRail)>.hero,.zp0127:has(.navRail)>.section,.zp0127:has(.navRail)>.contact,.zp0127:has(.navRail)>.footer{margin-left:190px}
.zp0127 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0127 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0127 .eyebrow,.zp0127 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0127 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0127 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0127 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0127 .heroActions a,.zp0127 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0127 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0127 .canvasHero{overflow:hidden}
.zp0127 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0127 .canvasGrid i{border-right:1px solid var(--border)}
.zp0127 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0127 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0127 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0127 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0127 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0127 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0127 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0127 .serviceGrid p{color:var(--muted)}
.zp0127 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0127 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0127 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0127 details{border-top:1px solid var(--border);padding:20px 0}
.zp0127 details summary{font-weight:800;cursor:pointer}
.zp0127 details p{color:var(--muted);max-width:70ch}
.zp0127 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0127 .metrics div{background:var(--bg);padding:30px}
.zp0127 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Courier New, monospace;color:var(--primary)}
.zp0127 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0127 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0127 .timeline article{padding:20px 0}
.zp0127 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0127 .contact .eyebrow{color:var(--bg)}
.zp0127 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0127 .contactMeta{display:grid;gap:10px}
.zp0127 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0127 .heroCopy{animation:enter-126 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-126{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0127 .hero{min-height:auto}
.zp0127 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0127 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0127 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0127 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0127 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0127 .mobileMenu nav a{padding:10px 8px}
.zp0127 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0127:has(.navRail)>.hero,.zp0127:has(.navRail)>.section,.zp0127:has(.navRail)>.contact,.zp0127:has(.navRail)>.footer{margin-left:0}
.zp0127 .hero{grid-template-columns:1fr}
.zp0127 .section,.zp0127 .sectionTitle,.zp0127 .contact{grid-template-columns:1fr}
.zp0127 .metrics{grid-template-columns:1fr 1fr}
.zp0127 .section{display:block}}
@media(max-width:430px){.zp0127{font-size:16px}
.zp0127 .hero,.zp0127 .section,.zp0127 .contact{padding-left:18px;padding-right:18px}
.zp0127 .serviceGrid,.zp0127 .proof,.zp0127 .metrics{grid-template-columns:1fr}
.zp0127 h1{font-size:clamp(42px,14vw,70px)}}

.zp0127 .heroActions a,.zp0127 .primary,.zp0127 .ctaBtn,.zp0127 .btnPrimary,.zp0127 .schedule>a,.zp0127 .newsletter>a{transition:all .2s ease}
.zp0127 .heroActions a:hover,.zp0127 .primary:hover,.zp0127 .ctaBtn:hover,.zp0127 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0127 nav a,.zp0127 .nav a,.zp0127 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0127 nav a:hover,.zp0127 .nav a:hover,.zp0127 .footer a:hover{
  opacity:.7
}
.zp0127 .serviceGrid article,.zp0127 .projectCard,.zp0127 .teamCard,.zp0127 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0127 .serviceGrid article:hover,.zp0127 .projectCard:hover,.zp0127 .teamCard:hover,.zp0127 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0127 *,.zp0127 *::before,.zp0127 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0127 a,.zp0127 button,.zp0127 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
