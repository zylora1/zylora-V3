"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0307-real-estate-pastel", "family": "Pastel", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|two-speed-scroll|proof>services>materials>hours>values|inset-panel|organic-modern", "industry": "real-estate", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "two-speed-scroll"};

export default function Template0307({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Real Estate Agency");
  const headline = String(content.headline || "Local market knowledge, sharp presentation, and straightforward advice through every move.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential sales", "Buyer representation", "Rentals", "Market appraisals", "Relocation"];
  const industryLabel = "Real estate agency";
  const serviceNotes = ["Market appraisal within 48 hours — accurate figures, not inflated ones to win instructions.", "Professional photography, floor plans, and videography included in our standard package.", "Accompanied viewings managed by someone who knows the property, not a junior.", "Negotiation management with weekly updates on where every offer stands.", "Completion support including solicitor liaison, survey coordination, and move-in day contact."];
  const proofPoints = ["NAEA Propertymark member", "0% sale fall-through rate", "Average sale: 98.2% of asking", "Fully managed lettings"];
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0307" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0307{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0307 *{box-sizing:border-box}
.zp0307 a{color:inherit;text-decoration:none}
.zp0307 h1,.zp0307 h2,.zp0307 h3,.zp0307 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0307 img{max-width:100%;display:block}
.zp0307 button,.zp0307 a{-webkit-tap-highlight-color:transparent}
.zp0307 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0307 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0307 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0307 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0307 .mobileMenu{display:none}
.zp0307 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0307 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0307 .eyebrow,.zp0307 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0307 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0307 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0307 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0307 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0307 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0307 .visual,.zp0307 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0307 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0307 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0307 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0307 .heroPhoto{object-fit:cover}
.zp0307 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0307 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0307 .railBlock{background:var(--primary)}
.zp0307 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0307 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0307 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0307 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0307 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0307 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0307 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0307 .serviceGrid p{color:var(--muted)}
.zp0307 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0307 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0307 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0307 details{border-top:1px solid var(--border);padding:20px 0}
.zp0307 details summary{font-weight:800;cursor:pointer}
.zp0307 details p{color:var(--muted);max-width:70ch}
.zp0307 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0307 .hours dl{margin:0}
.zp0307 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0307 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0307 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0307 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0307 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Optima, Candara, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0307 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0307 .contact .eyebrow{color:var(--bg)}
.zp0307 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0307 .contactMeta{display:grid;gap:10px}
.zp0307 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0307 .heroCopy{animation:enter-306 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-306{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0307 .hero{min-height:auto}
.zp0307 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0307 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0307 .nav nav{display:none}
.zp0307 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0307 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0307 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0307 .mobileMenu nav a{padding:10px 8px}
.zp0307 .hero,.zp0307 .verticalHero{grid-template-columns:1fr}
.zp0307 .section,.zp0307 .sectionTitle,.zp0307 .hours,.zp0307 .contact{grid-template-columns:1fr}
.zp0307 .section{display:block}}
@media(max-width:430px){.zp0307{font-size:16px}
.zp0307 .hero,.zp0307 .section,.zp0307 .contact{padding-left:18px;padding-right:18px}
.zp0307 .serviceGrid,.zp0307 .proof{grid-template-columns:1fr}
.zp0307 h1{font-size:clamp(42px,14vw,70px)}}

.zp0307 .heroActions a,.zp0307 .primary,.zp0307 .ctaBtn,.zp0307 .btnPrimary,.zp0307 .schedule>a,.zp0307 .newsletter>a{transition:all .2s ease}
.zp0307 .heroActions a:hover,.zp0307 .primary:hover,.zp0307 .ctaBtn:hover,.zp0307 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0307 nav a,.zp0307 .nav a,.zp0307 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0307 nav a:hover,.zp0307 .nav a:hover,.zp0307 .footer a:hover{
  color:var(--primary)
}
.zp0307 .serviceGrid article,.zp0307 .projectCard,.zp0307 .teamCard,.zp0307 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0307 .serviceGrid article:hover,.zp0307 .projectCard:hover,.zp0307 .teamCard:hover,.zp0307 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0307 *,.zp0307 *::before,.zp0307 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0307 a,.zp0307 button,.zp0307 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">06</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
