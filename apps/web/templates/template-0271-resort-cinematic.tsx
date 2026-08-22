"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0271-resort-cinematic", "family": "Cinematic", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|two-speed-scroll|case-study>collection>credentials>services>proof|soft-12|technical-mono", "industry": "resort", "hero": "location-led", "navigation": "vertical-rail", "layout": "two-speed-scroll"};

export default function Template0271({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0271" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0271{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0271 *{box-sizing:border-box}
.zp0271 a{color:inherit;text-decoration:none}
.zp0271 h1,.zp0271 h2,.zp0271 h3,.zp0271 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0271 img{max-width:100%;display:block}
.zp0271 button,.zp0271 a{-webkit-tap-highlight-color:transparent}
.zp0271 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0271 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0271 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0271 .mobileMenu{display:none}
.zp0271:has(.navRail)>.hero,.zp0271:has(.navRail)>.section,.zp0271:has(.navRail)>.contact,.zp0271:has(.navRail)>.footer{margin-left:190px}
.zp0271 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0271 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0271 .eyebrow,.zp0271 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0271 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0271 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0271 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0271 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0271 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0271 .locationHero{grid-template-columns:1fr 1fr}
.zp0271 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0271 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0271 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0271 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0271 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0271 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0271 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0271 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0271 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0271 .serviceGrid p{color:var(--muted)}
.zp0271 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0271 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0271 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0271 details{border-top:1px solid var(--border);padding:20px 0}
.zp0271 details summary{font-weight:800;cursor:pointer}
.zp0271 details p{color:var(--muted);max-width:70ch}
.zp0271 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0271 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0271 .projects article:nth-child(2){transform:translateY(32px)}
.zp0271 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0271 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0271 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0271 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0271 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0271 .p1,.zp0271 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0271 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0271 .contact .eyebrow{color:var(--bg)}
.zp0271 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0271 .contactMeta{display:grid;gap:10px}
.zp0271 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0271 .heroCopy{animation:enter-270 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-270{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0271 .hero{min-height:auto}
.zp0271 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0271 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0271 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0271 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0271 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0271 .mobileMenu nav a{padding:10px 8px}
.zp0271 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0271:has(.navRail)>.hero,.zp0271:has(.navRail)>.section,.zp0271:has(.navRail)>.contact,.zp0271:has(.navRail)>.footer{margin-left:0}
.zp0271 .hero,.zp0271 .locationHero{grid-template-columns:1fr}
.zp0271 .section,.zp0271 .sectionTitle,.zp0271 .contact{grid-template-columns:1fr}
.zp0271 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0271 .projects .projectGrid{grid-template-columns:1fr}
.zp0271 .projects article:nth-child(2){transform:none}
.zp0271 .section{display:block}}
@media(max-width:430px){.zp0271{font-size:16px}
.zp0271 .hero,.zp0271 .section,.zp0271 .contact{padding-left:18px;padding-right:18px}
.zp0271 .serviceGrid,.zp0271 .proof,.zp0271 .collectionGrid{grid-template-columns:1fr}
.zp0271 h1{font-size:clamp(42px,14vw,70px)}}

.zp0271 .heroActions a,.zp0271 .primary,.zp0271 .ctaBtn,.zp0271 .btnPrimary,.zp0271 .schedule>a,.zp0271 .newsletter>a{transition:all .2s ease}
.zp0271 .heroActions a:hover,.zp0271 .primary:hover,.zp0271 .ctaBtn:hover,.zp0271 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0271 nav a,.zp0271 .nav a,.zp0271 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0271 nav a:hover,.zp0271 .nav a:hover,.zp0271 .footer a:hover{
  opacity:.7
}
.zp0271 .serviceGrid article,.zp0271 .projectCard,.zp0271 .teamCard,.zp0271 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0271 .serviceGrid article:hover,.zp0271 .projectCard:hover,.zp0271 .teamCard:hover,.zp0271 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0271 *,.zp0271 *::before,.zp0271 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0271 a,.zp0271 button,.zp0271 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
