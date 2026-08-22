"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0691-video-modular-grid", "family": "Modular Grid", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|programme-led|features>proof>collection>testimonial>services|inset-panel|organic-modern", "industry": "video", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "programme-led"};

export default function Template0691({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Film Studio");
  const headline = String(content.headline || "Cinematic storytelling with disciplined production from first treatment to final grade.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Commercial films", "Brand stories", "Documentary", "Post-production", "Photography"];
  const industryLabel = "Film studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Bureau client";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Film studio / Project A", "Film studio / Project B", "Film studio / Project C", "Film studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Cinematic storytelling with disciplined production from first treatment to final grade. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0691" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0691{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0691 *{box-sizing:border-box}
.zp0691 a{color:inherit;text-decoration:none}
.zp0691 h1,.zp0691 h2,.zp0691 h3,.zp0691 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0691 img{max-width:100%;display:block}
.zp0691 button,.zp0691 a{-webkit-tap-highlight-color:transparent}
.zp0691 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0691 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0691 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0691 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0691 .mobileMenu{display:none}
.zp0691 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0691 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0691 .eyebrow,.zp0691 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0691 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0691 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0691 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0691 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0691 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0691 .visual,.zp0691 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0691 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0691 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0691 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0691 .heroPhoto{object-fit:cover}
.zp0691 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0691 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0691 .railBlock{background:var(--primary)}
.zp0691 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0691 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0691 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0691 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0691 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0691 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0691 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0691 .serviceGrid p{color:var(--muted)}
.zp0691 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0691 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0691 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0691 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0691 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0691 .testimonial>div{align-self:end}
.zp0691 .testimonial span{display:block;opacity:.7}
.zp0691 details{border-top:1px solid var(--border);padding:20px 0}
.zp0691 details summary{font-weight:800;cursor:pointer}
.zp0691 details p{color:var(--muted);max-width:70ch}
.zp0691 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0691 .features ul{list-style:none;margin:0;padding:0}
.zp0691 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0691 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0691 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0691 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0691 .p1,.zp0691 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0691 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0691 .contact .eyebrow{color:var(--bg)}
.zp0691 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0691 .contactMeta{display:grid;gap:10px}
.zp0691 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0691 .heroCopy{animation:enter-690 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-690{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0691 .hero{min-height:auto}
.zp0691 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0691 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0691 .nav nav{display:none}
.zp0691 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0691 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0691 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0691 .mobileMenu nav a{padding:10px 8px}
.zp0691 .hero,.zp0691 .verticalHero{grid-template-columns:1fr}
.zp0691 .section,.zp0691 .sectionTitle,.zp0691 .features,.zp0691 .contact{grid-template-columns:1fr}
.zp0691 .testimonial{grid-template-columns:1fr}
.zp0691 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0691 .section{display:block}}
@media(max-width:430px){.zp0691{font-size:16px}
.zp0691 .hero,.zp0691 .section,.zp0691 .contact{padding-left:18px;padding-right:18px}
.zp0691 .serviceGrid,.zp0691 .proof,.zp0691 .collectionGrid{grid-template-columns:1fr}
.zp0691 h1{font-size:clamp(42px,14vw,70px)}}

.zp0691 .heroActions a,.zp0691 .primary,.zp0691 .ctaBtn,.zp0691 .btnPrimary,.zp0691 .schedule>a,.zp0691 .newsletter>a{transition:all .2s ease}
.zp0691 .heroActions a:hover,.zp0691 .primary:hover,.zp0691 .ctaBtn:hover,.zp0691 .btnPrimary:hover{
  opacity:.85
}
.zp0691 nav a,.zp0691 .nav a,.zp0691 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0691 nav a:hover,.zp0691 .nav a:hover,.zp0691 .footer a:hover{
  color:var(--primary)
}
.zp0691 .serviceGrid article,.zp0691 .projectCard,.zp0691 .teamCard,.zp0691 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0691 .serviceGrid article:hover,.zp0691 .projectCard:hover,.zp0691 .teamCard:hover,.zp0691 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0691 *,.zp0691 *::before,.zp0691 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0691 a,.zp0691 button,.zp0691 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">90</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modular Grid / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
