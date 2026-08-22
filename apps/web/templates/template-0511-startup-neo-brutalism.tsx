"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0511-startup-neo-brutalism", "family": "Neo-Brutalism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|programme-led|proof>research>schedule>services>location|soft-12|technical-mono", "industry": "startup", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "programme-led"};

export default function Template0511({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Technology Startup");
  const headline = String(content.headline || "A new product with a precise problem, a credible point of view, and proof it works.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product", "Solutions", "Research", "Customer stories", "Careers"];
  const industryLabel = "Technology startup";
  const serviceNotes = ["Advisory board access: domain experts available for 2h/month per advisor.", "Investor-ready financial models built with your unit economics, not templates.", "Legal setup: incorporation, shareholding, IP, and founder agreements done right once.", "Go-to-market planning with channel experiments prioritised by CAC potential.", "Fundraise preparation: pitch deck, data room, and investor narrative coaching."];
  const proofPoints = ["Portfolio: 47 companies", "Average seed raised: £1.2M", "Partner response within 48h", "Equity-free options available"];
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0511" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0511{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:3px;--shadow:none;--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0511 *{box-sizing:border-box}
.zp0511 a{color:inherit;text-decoration:none}
.zp0511 h1,.zp0511 h2,.zp0511 h3,.zp0511 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0511 img{max-width:100%;display:block}
.zp0511 button,.zp0511 a{-webkit-tap-highlight-color:transparent}
.zp0511 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0511 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0511 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0511 .mobileMenu{display:none}
.zp0511:has(.navRail)>.hero,.zp0511:has(.navRail)>.section,.zp0511:has(.navRail)>.contact,.zp0511:has(.navRail)>.footer{margin-left:190px}
.zp0511 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0511 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0511 .eyebrow,.zp0511 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0511 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0511 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0511 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0511 .heroActions a,.zp0511 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0511 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0511 .canvasHero{overflow:hidden}
.zp0511 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0511 .canvasGrid i{border-right:1px solid var(--border)}
.zp0511 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0511 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0511 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0511 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0511 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0511 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0511 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0511 .serviceGrid p{color:var(--muted)}
.zp0511 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0511 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0511 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0511 details{border-top:1px solid var(--border);padding:20px 0}
.zp0511 details summary{font-weight:800;cursor:pointer}
.zp0511 details p{color:var(--muted);max-width:70ch}
.zp0511 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0511 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0511 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0511 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0511 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0511 .researchRows{max-width:900px;margin-left:auto}
.zp0511 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0511 .contact .eyebrow{color:var(--bg)}
.zp0511 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0511 .contactMeta{display:grid;gap:10px}
.zp0511 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0511 .heroActions a,.zp0511 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0511 h1{text-transform:uppercase}
.zp0511 .heroCopy{animation:enter-510 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-510{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0511 .hero{min-height:auto}
.zp0511 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0511 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0511 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0511 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0511 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0511 .mobileMenu nav a{padding:10px 8px}
.zp0511 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0511:has(.navRail)>.hero,.zp0511:has(.navRail)>.section,.zp0511:has(.navRail)>.contact,.zp0511:has(.navRail)>.footer{margin-left:0}
.zp0511 .hero{grid-template-columns:1fr}
.zp0511 .section,.zp0511 .sectionTitle,.zp0511 .location,.zp0511 .contact{grid-template-columns:1fr}
.zp0511 .section{display:block}}
@media(max-width:430px){.zp0511{font-size:16px}
.zp0511 .hero,.zp0511 .section,.zp0511 .contact{padding-left:18px;padding-right:18px}
.zp0511 .serviceGrid,.zp0511 .proof{grid-template-columns:1fr}
.zp0511 h1{font-size:clamp(42px,14vw,70px)}}

.zp0511 .heroActions a,.zp0511 .primary,.zp0511 .ctaBtn,.zp0511 .btnPrimary,.zp0511 .schedule>a,.zp0511 .newsletter>a{transition:all .2s ease}
.zp0511 .heroActions a:hover,.zp0511 .primary:hover,.zp0511 .ctaBtn:hover,.zp0511 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0511 nav a,.zp0511 .nav a,.zp0511 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0511 nav a:hover,.zp0511 .nav a:hover,.zp0511 .footer a:hover{
  text-decoration:underline
}
.zp0511 .serviceGrid article,.zp0511 .projectCard,.zp0511 .teamCard,.zp0511 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0511 .serviceGrid article:hover,.zp0511 .projectCard:hover,.zp0511 .teamCard:hover,.zp0511 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0511 *,.zp0511 *::before,.zp0511 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0511 a,.zp0511 button,.zp0511 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
