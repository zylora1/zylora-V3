"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0499-startup-cinematic", "family": "Cinematic", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|horizontal-panels|proof>services>destinations>packages>metrics|inset-panel|organic-modern", "industry": "startup", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "horizontal-panels"};

export default function Template0499({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Technology Startup");
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
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0499" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0499{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0499 *{box-sizing:border-box}
.zp0499 a{color:inherit;text-decoration:none}
.zp0499 h1,.zp0499 h2,.zp0499 h3,.zp0499 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0499 img{max-width:100%;display:block}
.zp0499 button,.zp0499 a{-webkit-tap-highlight-color:transparent}
.zp0499 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0499 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0499 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0499 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0499 .mobileMenu{display:none}
.zp0499 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0499 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0499 .eyebrow,.zp0499 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0499 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0499 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0499 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0499 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0499 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0499 .visual,.zp0499 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0499 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0499 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0499 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0499 .heroPhoto{object-fit:cover}
.zp0499 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0499 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0499 .railBlock{background:var(--primary)}
.zp0499 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0499 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0499 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0499 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0499 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0499 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0499 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0499 .serviceGrid p{color:var(--muted)}
.zp0499 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0499 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0499 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0499 details{border-top:1px solid var(--border);padding:20px 0}
.zp0499 details summary{font-weight:800;cursor:pointer}
.zp0499 details p{color:var(--muted);max-width:70ch}
.zp0499 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0499 .metrics div{background:var(--bg);padding:30px}
.zp0499 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Optima, Candara, sans-serif;color:var(--primary)}
.zp0499 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0499 .packages>.sectionTitle{grid-column:1/-1}
.zp0499 .packages article{padding:24px;border:1px solid var(--border)}
.zp0499 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0499 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0499 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0499 .contact .eyebrow{color:var(--bg)}
.zp0499 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0499 .contactMeta{display:grid;gap:10px}
.zp0499 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0499 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0499 .sectionTitle{display:block}
.zp0499 .heroCopy{animation:enter-498 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-498{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0499 .hero{min-height:auto}
.zp0499 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0499 .proof{grid-template-columns:1fr 1fr}
.zp0499 .packages{grid-template-columns:1fr 1fr}
.zp0499 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0499 .nav nav{display:none}
.zp0499 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0499 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0499 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0499 .mobileMenu nav a{padding:10px 8px}
.zp0499 .hero,.zp0499 .verticalHero{grid-template-columns:1fr}
.zp0499 .section,.zp0499 .sectionTitle,.zp0499 .contact{grid-template-columns:1fr}
.zp0499 .metrics{grid-template-columns:1fr 1fr}
.zp0499 .section{display:block}}
@media(max-width:430px){.zp0499{font-size:16px}
.zp0499 .hero,.zp0499 .section,.zp0499 .contact{padding-left:18px;padding-right:18px}
.zp0499 .serviceGrid,.zp0499 .proof,.zp0499 .metrics,.zp0499 .packages,.zp0499 .destinations>div:last-child{grid-template-columns:1fr}
.zp0499 h1{font-size:clamp(42px,14vw,70px)}}

.zp0499 .heroActions a,.zp0499 .primary,.zp0499 .ctaBtn,.zp0499 .btnPrimary,.zp0499 .schedule>a,.zp0499 .newsletter>a{transition:all .2s ease}
.zp0499 .heroActions a:hover,.zp0499 .primary:hover,.zp0499 .ctaBtn:hover,.zp0499 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0499 nav a,.zp0499 .nav a,.zp0499 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0499 nav a:hover,.zp0499 .nav a:hover,.zp0499 .footer a:hover{
  opacity:.7
}
.zp0499 .serviceGrid article,.zp0499 .projectCard,.zp0499 .teamCard,.zp0499 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0499 .serviceGrid article:hover,.zp0499 .projectCard:hover,.zp0499 .teamCard:hover,.zp0499 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0499 *,.zp0499 *::before,.zp0499 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0499 a,.zp0499 button,.zp0499 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">98</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
