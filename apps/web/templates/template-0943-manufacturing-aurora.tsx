"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0943-manufacturing-aurora", "family": "Aurora", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|programme-led|team>proof>services>gallery>schedule|soft-12|technical-mono", "industry": "manufacturing", "hero": "location-led", "navigation": "vertical-rail", "layout": "programme-led"};

export default function Template0943({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Manufacturer");
  const headline = String(content.headline || "Precision manufacturing with traceable quality and dependable production planning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Engineering", "Production", "Quality control", "Supply chain", "Custom fabrication"];
  const industryLabel = "Manufacturer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Manufacturer / Project A", "Manufacturer / Project B", "Manufacturer / Project C", "Manufacturer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Precision manufacturing with traceable quality and dependable production planning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0943" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0943{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0943 *{box-sizing:border-box}
.zp0943 a{color:inherit;text-decoration:none}
.zp0943 h1,.zp0943 h2,.zp0943 h3,.zp0943 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0943 img{max-width:100%;display:block}
.zp0943 button,.zp0943 a{-webkit-tap-highlight-color:transparent}
.zp0943 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0943 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0943 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0943 .mobileMenu{display:none}
.zp0943:has(.navRail)>.hero,.zp0943:has(.navRail)>.section,.zp0943:has(.navRail)>.contact,.zp0943:has(.navRail)>.footer{margin-left:190px}
.zp0943 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0943 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0943 .eyebrow,.zp0943 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0943 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0943 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0943 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0943 .heroActions a,.zp0943 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0943 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0943 .locationHero{grid-template-columns:1fr 1fr}
.zp0943 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0943 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0943 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0943 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0943 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0943 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0943 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0943 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0943 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0943 .serviceGrid p{color:var(--muted)}
.zp0943 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0943 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0943 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0943 details{border-top:1px solid var(--border);padding:20px 0}
.zp0943 details summary{font-weight:800;cursor:pointer}
.zp0943 details p{color:var(--muted);max-width:70ch}
.zp0943 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0943 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0943 .galleryGrid>*:first-child{grid-row:1/3}
.zp0943 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0943 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0943 .g2,.zp0943 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0943 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0943 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0943 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Courier New, monospace;margin-bottom:18px}
.zp0943 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0943 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0943 .contact .eyebrow{color:var(--bg)}
.zp0943 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0943 .contactMeta{display:grid;gap:10px}
.zp0943 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0943{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0943 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0943 .heroCopy{animation:enter-942 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-942{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0943 .hero{min-height:auto}
.zp0943 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0943 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0943 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0943 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0943 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0943 .mobileMenu nav a{padding:10px 8px}
.zp0943 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0943:has(.navRail)>.hero,.zp0943:has(.navRail)>.section,.zp0943:has(.navRail)>.contact,.zp0943:has(.navRail)>.footer{margin-left:0}
.zp0943 .hero,.zp0943 .locationHero{grid-template-columns:1fr}
.zp0943 .section,.zp0943 .sectionTitle,.zp0943 .contact{grid-template-columns:1fr}
.zp0943 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0943 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0943 .teamGrid{grid-template-columns:1fr 1fr}
.zp0943 .section{display:block}}
@media(max-width:430px){.zp0943{font-size:16px}
.zp0943 .hero,.zp0943 .section,.zp0943 .contact{padding-left:18px;padding-right:18px}
.zp0943 .serviceGrid,.zp0943 .proof,.zp0943 .teamGrid{grid-template-columns:1fr}
.zp0943 h1{font-size:clamp(42px,14vw,70px)}
.zp0943 .galleryGrid{grid-template-columns:1fr}
.zp0943 .galleryGrid>*:first-child{grid-column:auto}}

.zp0943 .heroActions a,.zp0943 .primary,.zp0943 .ctaBtn,.zp0943 .btnPrimary,.zp0943 .schedule>a,.zp0943 .newsletter>a{transition:all .2s ease}
.zp0943 .heroActions a:hover,.zp0943 .primary:hover,.zp0943 .ctaBtn:hover,.zp0943 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0943 nav a,.zp0943 .nav a,.zp0943 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0943 nav a:hover,.zp0943 .nav a:hover,.zp0943 .footer a:hover{
  color:var(--primary)
}
.zp0943 .serviceGrid article,.zp0943 .projectCard,.zp0943 .teamCard,.zp0943 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0943 .serviceGrid article:hover,.zp0943 .projectCard:hover,.zp0943 .teamCard:hover,.zp0943 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0943 *,.zp0943 *::before,.zp0943 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0943 a,.zp0943 button,.zp0943 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
