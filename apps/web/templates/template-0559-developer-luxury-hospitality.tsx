"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0559-developer-luxury-hospitality", "family": "Luxury Hospitality", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|two-speed-scroll|awards>proof>services>availability>community|soft-12|technical-mono", "industry": "developer", "hero": "location-led", "navigation": "vertical-rail", "layout": "two-speed-scroll"};

export default function Template0559({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Developer Portfolio");
  const headline = String(content.headline || "A focused record of shipped software, technical decisions, and measurable impact.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product work", "Open source", "Technical writing", "Speaking", "Consulting"];
  const industryLabel = "Developer portfolio";
  const serviceNotes = ["Full-stack capability: from database architecture to accessible frontend interfaces.", "Open-source contributors with real community credibility and public track record.", "Performance-first: Lighthouse scores reviewed and targets agreed before launch.", "Accessibility to WCAG 2.2 AA as a baseline requirement, not an optional extra.", "Retainer options for ongoing development, features, and maintenance."];
  const proofPoints = ["Core Web Vitals: all green", "WCAG 2.2 AA standard", "GitHub: 2,000+ contributions", "8-year average tenure"];
  const storyBody = "Miller & Rowe Developer Portfolio is presented as a real working developer portfolio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0559" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0559{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0559 *{box-sizing:border-box}
.zp0559 a{color:inherit;text-decoration:none}
.zp0559 h1,.zp0559 h2,.zp0559 h3,.zp0559 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0559 img{max-width:100%;display:block}
.zp0559 button,.zp0559 a{-webkit-tap-highlight-color:transparent}
.zp0559 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0559 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0559 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0559 .mobileMenu{display:none}
.zp0559:has(.navRail)>.hero,.zp0559:has(.navRail)>.section,.zp0559:has(.navRail)>.contact,.zp0559:has(.navRail)>.footer{margin-left:190px}
.zp0559 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0559 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0559 .eyebrow,.zp0559 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0559 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0559 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0559 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0559 .heroActions a,.zp0559 .schedule>a,.zp0559 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0559 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0559 .locationHero{grid-template-columns:1fr 1fr}
.zp0559 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0559 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0559 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0559 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0559 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0559 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0559 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0559 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0559 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0559 .serviceGrid p{color:var(--muted)}
.zp0559 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0559 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0559 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0559 details{border-top:1px solid var(--border);padding:20px 0}
.zp0559 details summary{font-weight:800;cursor:pointer}
.zp0559 details p{color:var(--muted);max-width:70ch}
.zp0559 .schedule,.zp0559 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0559 .awards>div{max-width:800px;margin-left:auto}
.zp0559 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0559 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0559 .contact .eyebrow{color:var(--bg)}
.zp0559 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0559 .contactMeta{display:grid;gap:10px}
.zp0559 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0559 .heroCopy{animation:enter-558 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-558{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0559 .hero{min-height:auto}
.zp0559 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0559 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0559 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0559 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0559 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0559 .mobileMenu nav a{padding:10px 8px}
.zp0559 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0559:has(.navRail)>.hero,.zp0559:has(.navRail)>.section,.zp0559:has(.navRail)>.contact,.zp0559:has(.navRail)>.footer{margin-left:0}
.zp0559 .hero,.zp0559 .locationHero{grid-template-columns:1fr}
.zp0559 .section,.zp0559 .sectionTitle,.zp0559 .contact{grid-template-columns:1fr}
.zp0559 .section{display:block}}
@media(max-width:430px){.zp0559{font-size:16px}
.zp0559 .hero,.zp0559 .section,.zp0559 .contact{padding-left:18px;padding-right:18px}
.zp0559 .serviceGrid,.zp0559 .proof{grid-template-columns:1fr}
.zp0559 h1{font-size:clamp(42px,14vw,70px)}}

.zp0559 .heroActions a,.zp0559 .primary,.zp0559 .ctaBtn,.zp0559 .btnPrimary,.zp0559 .schedule>a,.zp0559 .newsletter>a{transition:all .2s ease}
.zp0559 .heroActions a:hover,.zp0559 .primary:hover,.zp0559 .ctaBtn:hover,.zp0559 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0559 nav a,.zp0559 .nav a,.zp0559 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0559 nav a:hover,.zp0559 .nav a:hover,.zp0559 .footer a:hover{
  opacity:.65
}
.zp0559 .serviceGrid article,.zp0559 .projectCard,.zp0559 .teamCard,.zp0559 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0559 .serviceGrid article:hover,.zp0559 .projectCard:hover,.zp0559 .teamCard:hover,.zp0559 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0559 *,.zp0559 *::before,.zp0559 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0559 a,.zp0559 button,.zp0559 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
