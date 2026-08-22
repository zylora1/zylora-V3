"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0139-school-sports-editorial", "family": "Sports Editorial", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|horizontal-panels|services>materials>case-study>proof>security|capsule|organic-modern", "industry": "school", "hero": "split-image", "navigation": "statement-bar", "layout": "horizontal-panels"};

export default function Template0139({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0139" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0139{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0139 *{box-sizing:border-box}
.zp0139 a{color:inherit;text-decoration:none}
.zp0139 h1,.zp0139 h2,.zp0139 h3,.zp0139 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0139 img{max-width:100%;display:block}
.zp0139 button,.zp0139 a{-webkit-tap-highlight-color:transparent}
.zp0139 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0139 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0139 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0139 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0139 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0139 .nav.statement>a{justify-self:end}
.zp0139 .mobileMenu{display:none}
.zp0139 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0139 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0139 .eyebrow,.zp0139 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0139 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0139 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0139 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0139 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0139 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0139 .visual,.zp0139 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0139 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0139 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0139 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0139 .heroPhoto{object-fit:cover}
.zp0139 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0139 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0139 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0139 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0139 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0139 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0139 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0139 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0139 .serviceGrid p{color:var(--muted)}
.zp0139 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0139 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0139 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0139 details{border-top:1px solid var(--border);padding:20px 0}
.zp0139 details summary{font-weight:800;cursor:pointer}
.zp0139 details p{color:var(--muted);max-width:70ch}
.zp0139 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0139 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0139 .projects article:nth-child(2){transform:translateY(32px)}
.zp0139 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0139 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0139 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0139 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0139 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0139 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0139 .contact .eyebrow{color:var(--bg)}
.zp0139 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0139 .contactMeta{display:grid;gap:10px}
.zp0139 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0139 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0139 .sectionTitle{display:block}
.zp0139 .heroCopy{animation:enter-138 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-138{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0139 .hero{min-height:auto}
.zp0139 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0139 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0139 .nav nav{display:none}
.zp0139 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0139 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0139 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0139 .mobileMenu nav a{padding:10px 8px}
.zp0139 .hero,.zp0139 .splitHero{grid-template-columns:1fr}
.zp0139 .section,.zp0139 .sectionTitle,.zp0139 .security,.zp0139 .contact{grid-template-columns:1fr}
.zp0139 .projects .projectGrid{grid-template-columns:1fr}
.zp0139 .projects article:nth-child(2){transform:none}
.zp0139 .section{display:block}}
@media(max-width:430px){.zp0139{font-size:16px}
.zp0139 .hero,.zp0139 .section,.zp0139 .contact{padding-left:18px;padding-right:18px}
.zp0139 .serviceGrid,.zp0139 .proof{grid-template-columns:1fr}
.zp0139 h1{font-size:clamp(42px,14vw,70px)}
.zp0139 .nav.statement{grid-template-columns:1fr auto}
.zp0139 .nav.statement>span:first-child{display:none}}

.zp0139 .heroActions a,.zp0139 .primary,.zp0139 .ctaBtn,.zp0139 .btnPrimary,.zp0139 .schedule>a,.zp0139 .newsletter>a{transition:all .2s ease}
.zp0139 .heroActions a:hover,.zp0139 .primary:hover,.zp0139 .ctaBtn:hover,.zp0139 .btnPrimary:hover{
  opacity:.8
}
.zp0139 nav a,.zp0139 .nav a,.zp0139 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0139 nav a:hover,.zp0139 .nav a:hover,.zp0139 .footer a:hover{
  color:var(--primary)
}
.zp0139 .serviceGrid article,.zp0139 .projectCard,.zp0139 .teamCard,.zp0139 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0139 .serviceGrid article:hover,.zp0139 .projectCard:hover,.zp0139 .teamCard:hover,.zp0139 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0139 *,.zp0139 *::before,.zp0139 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0139 a,.zp0139 button,.zp0139 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">38</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
