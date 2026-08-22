"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0055-veterinary-neo-brutalism", "family": "Neo-Brutalism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|two-speed-scroll|case-study>services>timeline>proof>packages|asymmetric-radius|technical-mono", "industry": "veterinary", "hero": "index-led", "navigation": "editorial-index", "layout": "two-speed-scroll"};

export default function Template0055({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Veterinary Clinic");
  const headline = String(content.headline || "Modern veterinary care that keeps owners informed at every step.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Wellness exams", "Vaccinations", "Dental care", "Diagnostics", "Urgent care"];
  const industryLabel = "Veterinary clinic";
  const serviceNotes = ["Comprehensive wellness exams covering nutrition, behaviour, and preventive care.", "Gentle handling protocols that reduce stress for anxious patients.", "In-house laboratory for fast results — no waiting days for basic bloods.", "Dental health programmes that protect your pet's overall wellbeing.", "End-of-life care provided with dignity and full family support."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0055" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0055{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:3px;--shadow:none;--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0055 *{box-sizing:border-box}
.zp0055 a{color:inherit;text-decoration:none}
.zp0055 h1,.zp0055 h2,.zp0055 h3,.zp0055 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0055 img{max-width:100%;display:block}
.zp0055 button,.zp0055 a{-webkit-tap-highlight-color:transparent}
.zp0055 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0055 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0055 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0055 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0055 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0055 .nav.index nav{justify-content:flex-end}
.zp0055 .mobileMenu{display:none}
.zp0055 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0055 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0055 .eyebrow,.zp0055 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0055 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0055 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0055 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0055 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0055 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0055 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0055 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0055 .indexHero li{font:700 18px/1.2 Courier New, monospace;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0055 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0055 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0055 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0055 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0055 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0055 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0055 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0055 .serviceGrid p{color:var(--muted)}
.zp0055 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0055 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0055 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0055 details{border-top:1px solid var(--border);padding:20px 0}
.zp0055 details summary{font-weight:800;cursor:pointer}
.zp0055 details p{color:var(--muted);max-width:70ch}
.zp0055 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0055 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0055 .projects article:nth-child(2){transform:translateY(32px)}
.zp0055 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0055 .timeline article{padding:20px 0}
.zp0055 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0055 .packages>.sectionTitle{grid-column:1/-1}
.zp0055 .packages article{padding:24px;border:1px solid var(--border)}
.zp0055 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0055 .contact .eyebrow{color:var(--bg)}
.zp0055 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0055 .contactMeta{display:grid;gap:10px}
.zp0055 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0055 .heroActions a,.zp0055 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0055 h1{text-transform:uppercase}
.zp0055 .heroCopy{animation:enter-54 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-54{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0055 .hero{min-height:auto}
.zp0055 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0055 .proof{grid-template-columns:1fr 1fr}
.zp0055 .packages{grid-template-columns:1fr 1fr}
.zp0055 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0055 .nav nav{display:none}
.zp0055 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0055 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0055 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0055 .mobileMenu nav a{padding:10px 8px}
.zp0055 .hero,.zp0055 .indexHero{grid-template-columns:1fr}
.zp0055 .section,.zp0055 .sectionTitle,.zp0055 .contact{grid-template-columns:1fr}
.zp0055 .projects .projectGrid{grid-template-columns:1fr}
.zp0055 .projects article:nth-child(2){transform:none}
.zp0055 .section{display:block}}
@media(max-width:430px){.zp0055{font-size:16px}
.zp0055 .hero,.zp0055 .section,.zp0055 .contact{padding-left:18px;padding-right:18px}
.zp0055 .serviceGrid,.zp0055 .proof,.zp0055 .packages{grid-template-columns:1fr}
.zp0055 h1{font-size:clamp(42px,14vw,70px)}
.zp0055 .nav.index{grid-template-columns:1fr auto}
.zp0055 .nav.index>span{display:none}}

.zp0055 .heroActions a,.zp0055 .primary,.zp0055 .ctaBtn,.zp0055 .btnPrimary,.zp0055 .schedule>a,.zp0055 .newsletter>a{transition:all .2s ease}
.zp0055 .heroActions a:hover,.zp0055 .primary:hover,.zp0055 .ctaBtn:hover,.zp0055 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0055 nav a,.zp0055 .nav a,.zp0055 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0055 nav a:hover,.zp0055 .nav a:hover,.zp0055 .footer a:hover{
  text-decoration:underline
}
.zp0055 .serviceGrid article,.zp0055 .projectCard,.zp0055 .teamCard,.zp0055 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0055 .serviceGrid article:hover,.zp0055 .projectCard:hover,.zp0055 .teamCard:hover,.zp0055 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0055 *,.zp0055 *::before,.zp0055 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0055 a,.zp0055 button,.zp0055 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
