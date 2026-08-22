"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0463-agency-modular-grid", "family": "Modular Grid", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|horizontal-panels|credentials>timeline>proof>services>menu|soft-12|technical-mono", "industry": "agency", "hero": "location-led", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0463({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Creative Agency");
  const headline = String(content.headline || "Sharp strategy and distinctive creative work built to earn attention and action.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Brand strategy", "Web design", "Campaigns", "Content", "Production"];
  const industryLabel = "Creative agency";
  const serviceNotes = ["Strategy-led creative: we understand your market before designing anything.", "Integrated teams — strategy, design, and engineering in the same room.", "Brand systems that work across print, digital, and environmental without being rigid.", "Campaign measurement built in: we track outcomes, not just outputs.", "Retained partnerships with monthly delivery and quarterly direction reviews."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["D&AD and Cannes Lions awarded", "Average client tenure: 4.2 years", "ISO 27001 data security", "ISBA member"];
  const testimonial = "They killed our first concept because it wouldn't work — then delivered something far better. That's what a good agency does.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0463" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0463{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0463 *{box-sizing:border-box}
.zp0463 a{color:inherit;text-decoration:none}
.zp0463 h1,.zp0463 h2,.zp0463 h3,.zp0463 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0463 img{max-width:100%;display:block}
.zp0463 button,.zp0463 a{-webkit-tap-highlight-color:transparent}
.zp0463 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0463 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0463 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0463 .mobileMenu{display:none}
.zp0463:has(.navRail)>.hero,.zp0463:has(.navRail)>.section,.zp0463:has(.navRail)>.contact,.zp0463:has(.navRail)>.footer{margin-left:190px}
.zp0463 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0463 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0463 .eyebrow,.zp0463 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0463 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0463 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0463 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0463 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0463 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0463 .locationHero{grid-template-columns:1fr 1fr}
.zp0463 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0463 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0463 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0463 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0463 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0463 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0463 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0463 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0463 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0463 .serviceGrid p{color:var(--muted)}
.zp0463 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0463 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0463 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0463 details{border-top:1px solid var(--border);padding:20px 0}
.zp0463 details summary{font-weight:800;cursor:pointer}
.zp0463 details p{color:var(--muted);max-width:70ch}
.zp0463 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0463 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0463 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0463 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0463 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0463 .timeline article{padding:20px 0}
.zp0463 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0463 .contact .eyebrow{color:var(--bg)}
.zp0463 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0463 .contactMeta{display:grid;gap:10px}
.zp0463 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0463 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0463 .sectionTitle{display:block}
.zp0463 .heroCopy{animation:enter-462 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-462{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0463 .hero{min-height:auto}
.zp0463 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0463 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0463 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0463 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0463 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0463 .mobileMenu nav a{padding:10px 8px}
.zp0463 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0463:has(.navRail)>.hero,.zp0463:has(.navRail)>.section,.zp0463:has(.navRail)>.contact,.zp0463:has(.navRail)>.footer{margin-left:0}
.zp0463 .hero,.zp0463 .locationHero{grid-template-columns:1fr}
.zp0463 .section,.zp0463 .sectionTitle,.zp0463 .contact{grid-template-columns:1fr}
.zp0463 .section{display:block}}
@media(max-width:430px){.zp0463{font-size:16px}
.zp0463 .hero,.zp0463 .section,.zp0463 .contact{padding-left:18px;padding-right:18px}
.zp0463 .serviceGrid,.zp0463 .proof{grid-template-columns:1fr}
.zp0463 h1{font-size:clamp(42px,14vw,70px)}}

.zp0463 .heroActions a,.zp0463 .primary,.zp0463 .ctaBtn,.zp0463 .btnPrimary,.zp0463 .schedule>a,.zp0463 .newsletter>a{transition:all .2s ease}
.zp0463 .heroActions a:hover,.zp0463 .primary:hover,.zp0463 .ctaBtn:hover,.zp0463 .btnPrimary:hover{
  opacity:.85
}
.zp0463 nav a,.zp0463 .nav a,.zp0463 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0463 nav a:hover,.zp0463 .nav a:hover,.zp0463 .footer a:hover{
  color:var(--primary)
}
.zp0463 .serviceGrid article,.zp0463 .projectCard,.zp0463 .teamCard,.zp0463 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0463 .serviceGrid article:hover,.zp0463 .projectCard:hover,.zp0463 .teamCard:hover,.zp0463 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0463 *,.zp0463 *::before,.zp0463 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0463 a,.zp0463 button,.zp0463 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modular Grid / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
