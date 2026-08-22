"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0175-coaching-sophisticated-professional", "family": "Sophisticated Professional", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|horizontal-panels|services>packages>gallery>process>proof|soft-12|technical-mono", "industry": "coaching", "hero": "location-led", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0175({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const industryLabel = "Coaching centre";
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0175" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0175{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0175 *{box-sizing:border-box}
.zp0175 a{color:inherit;text-decoration:none}
.zp0175 h1,.zp0175 h2,.zp0175 h3,.zp0175 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0175 img{max-width:100%;display:block}
.zp0175 button,.zp0175 a{-webkit-tap-highlight-color:transparent}
.zp0175 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0175 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0175 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0175 .mobileMenu{display:none}
.zp0175:has(.navRail)>.hero,.zp0175:has(.navRail)>.section,.zp0175:has(.navRail)>.contact,.zp0175:has(.navRail)>.footer{margin-left:190px}
.zp0175 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0175 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0175 .eyebrow,.zp0175 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0175 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0175 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0175 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0175 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0175 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0175 .locationHero{grid-template-columns:1fr 1fr}
.zp0175 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0175 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0175 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0175 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0175 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0175 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0175 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0175 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0175 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0175 .serviceGrid p{color:var(--muted)}
.zp0175 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0175 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0175 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0175 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0175 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0175 details{border-top:1px solid var(--border);padding:20px 0}
.zp0175 details summary{font-weight:800;cursor:pointer}
.zp0175 details p{color:var(--muted);max-width:70ch}
.zp0175 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0175 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0175 .galleryGrid>*:first-child{grid-row:1/3}
.zp0175 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0175 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0175 .g2,.zp0175 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0175 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0175 .packages>.sectionTitle{grid-column:1/-1}
.zp0175 .packages article{padding:24px;border:1px solid var(--border)}
.zp0175 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0175 .contact .eyebrow{color:var(--bg)}
.zp0175 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0175 .contactMeta{display:grid;gap:10px}
.zp0175 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0175 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0175 .sectionTitle{display:block}
.zp0175 .heroCopy{animation:enter-174 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-174{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0175 .hero{min-height:auto}
.zp0175 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0175 .proof{grid-template-columns:1fr 1fr}
.zp0175 .packages{grid-template-columns:1fr 1fr}
.zp0175 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0175 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0175 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0175 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0175 .mobileMenu nav a{padding:10px 8px}
.zp0175 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0175:has(.navRail)>.hero,.zp0175:has(.navRail)>.section,.zp0175:has(.navRail)>.contact,.zp0175:has(.navRail)>.footer{margin-left:0}
.zp0175 .hero,.zp0175 .locationHero{grid-template-columns:1fr}
.zp0175 .section,.zp0175 .sectionTitle,.zp0175 .contact{grid-template-columns:1fr}
.zp0175 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0175 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0175 .section{display:block}}
@media(max-width:430px){.zp0175{font-size:16px}
.zp0175 .hero,.zp0175 .section,.zp0175 .contact{padding-left:18px;padding-right:18px}
.zp0175 .serviceGrid,.zp0175 .proof,.zp0175 .packages{grid-template-columns:1fr}
.zp0175 h1{font-size:clamp(42px,14vw,70px)}
.zp0175 .galleryGrid{grid-template-columns:1fr}
.zp0175 .galleryGrid>*:first-child{grid-column:auto}}

.zp0175 .heroActions a,.zp0175 .primary,.zp0175 .ctaBtn,.zp0175 .btnPrimary,.zp0175 .schedule>a,.zp0175 .newsletter>a{transition:all .2s ease}
.zp0175 .heroActions a:hover,.zp0175 .primary:hover,.zp0175 .ctaBtn:hover,.zp0175 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0175 nav a,.zp0175 .nav a,.zp0175 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0175 nav a:hover,.zp0175 .nav a:hover,.zp0175 .footer a:hover{
  color:var(--primary)
}
.zp0175 .serviceGrid article,.zp0175 .projectCard,.zp0175 .teamCard,.zp0175 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0175 .serviceGrid article:hover,.zp0175 .projectCard:hover,.zp0175 .teamCard:hover,.zp0175 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0175 *,.zp0175 *::before,.zp0175 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0175 a,.zp0175 button,.zp0175 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
