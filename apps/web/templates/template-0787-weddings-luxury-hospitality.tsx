"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0787-weddings-luxury-hospitality", "family": "Luxury Hospitality", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|horizontal-panels|comparison>services>press>security>proof|inset-panel|organic-modern", "industry": "weddings", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "horizontal-panels"};

export default function Template0787({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0787" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0787{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0787 *{box-sizing:border-box}
.zp0787 a{color:inherit;text-decoration:none}
.zp0787 h1,.zp0787 h2,.zp0787 h3,.zp0787 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0787 img{max-width:100%;display:block}
.zp0787 button,.zp0787 a{-webkit-tap-highlight-color:transparent}
.zp0787 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0787 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0787 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0787 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0787 .mobileMenu{display:none}
.zp0787 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0787 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0787 .eyebrow,.zp0787 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0787 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0787 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0787 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0787 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0787 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0787 .visual,.zp0787 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0787 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0787 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0787 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0787 .heroPhoto{object-fit:cover}
.zp0787 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0787 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0787 .railBlock{background:var(--primary)}
.zp0787 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0787 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0787 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0787 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0787 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0787 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0787 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0787 .serviceGrid p{color:var(--muted)}
.zp0787 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0787 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0787 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0787 details{border-top:1px solid var(--border);padding:20px 0}
.zp0787 details summary{font-weight:800;cursor:pointer}
.zp0787 details p{color:var(--muted);max-width:70ch}
.zp0787 .awards>div{max-width:800px;margin-left:auto}
.zp0787 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0787 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0787 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0787 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0787 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0787 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0787 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0787 .contact .eyebrow{color:var(--bg)}
.zp0787 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0787 .contactMeta{display:grid;gap:10px}
.zp0787 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0787 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0787 .sectionTitle{display:block}
.zp0787 .heroCopy{animation:enter-786 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-786{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0787 .hero{min-height:auto}
.zp0787 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0787 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0787 .nav nav{display:none}
.zp0787 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0787 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0787 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0787 .mobileMenu nav a{padding:10px 8px}
.zp0787 .hero,.zp0787 .verticalHero{grid-template-columns:1fr}
.zp0787 .section,.zp0787 .sectionTitle,.zp0787 .security,.zp0787 .contact{grid-template-columns:1fr}
.zp0787 .section{display:block}}
@media(max-width:430px){.zp0787{font-size:16px}
.zp0787 .hero,.zp0787 .section,.zp0787 .contact{padding-left:18px;padding-right:18px}
.zp0787 .serviceGrid,.zp0787 .proof,.zp0787 .compareGrid{grid-template-columns:1fr}
.zp0787 h1{font-size:clamp(42px,14vw,70px)}}

.zp0787 .heroActions a,.zp0787 .primary,.zp0787 .ctaBtn,.zp0787 .btnPrimary,.zp0787 .schedule>a,.zp0787 .newsletter>a{transition:all .2s ease}
.zp0787 .heroActions a:hover,.zp0787 .primary:hover,.zp0787 .ctaBtn:hover,.zp0787 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0787 nav a,.zp0787 .nav a,.zp0787 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0787 nav a:hover,.zp0787 .nav a:hover,.zp0787 .footer a:hover{
  opacity:.65
}
.zp0787 .serviceGrid article,.zp0787 .projectCard,.zp0787 .teamCard,.zp0787 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0787 .serviceGrid article:hover,.zp0787 .projectCard:hover,.zp0787 .teamCard:hover,.zp0787 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0787 *,.zp0787 *::before,.zp0787 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0787 a,.zp0787 button,.zp0787 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">86</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
