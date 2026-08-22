"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0643-salon-industrial", "family": "Industrial", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|horizontal-panels|comparison>values>services>programmes>proof|inset-panel|organic-modern", "industry": "salon", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "horizontal-panels"};

export default function Template0643({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0643" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0643{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0643 *{box-sizing:border-box}
.zp0643 a{color:inherit;text-decoration:none}
.zp0643 h1,.zp0643 h2,.zp0643 h3,.zp0643 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0643 img{max-width:100%;display:block}
.zp0643 button,.zp0643 a{-webkit-tap-highlight-color:transparent}
.zp0643 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0643 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0643 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0643 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0643 .mobileMenu{display:none}
.zp0643 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0643 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0643 .eyebrow,.zp0643 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0643 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0643 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0643 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0643 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0643 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0643 .visual,.zp0643 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0643 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0643 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0643 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0643 .heroPhoto{object-fit:cover}
.zp0643 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0643 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0643 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0643 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0643 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0643 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0643 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0643 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0643 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0643 .serviceGrid p{color:var(--muted)}
.zp0643 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0643 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0643 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0643 details{border-top:1px solid var(--border);padding:20px 0}
.zp0643 details summary{font-weight:800;cursor:pointer}
.zp0643 details p{color:var(--muted);max-width:70ch}
.zp0643 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Optima, Candara, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0643 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0643 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0643 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0643 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0643 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0643 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0643 .contact .eyebrow{color:var(--bg)}
.zp0643 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0643 .contactMeta{display:grid;gap:10px}
.zp0643 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0643 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0643 .sectionTitle{display:block}
.zp0643 .heroCopy{animation:enter-642 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-642{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0643 .hero{min-height:auto}
.zp0643 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0643 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0643 .nav nav{display:none}
.zp0643 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0643 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0643 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0643 .mobileMenu nav a{padding:10px 8px}
.zp0643 .hero,.zp0643 .diagonalHero{grid-template-columns:1fr}
.zp0643 .section,.zp0643 .sectionTitle,.zp0643 .contact{grid-template-columns:1fr}
.zp0643 .section{display:block}}
@media(max-width:430px){.zp0643{font-size:16px}
.zp0643 .hero,.zp0643 .section,.zp0643 .contact{padding-left:18px;padding-right:18px}
.zp0643 .serviceGrid,.zp0643 .proof,.zp0643 .programmes>div:last-child,.zp0643 .compareGrid{grid-template-columns:1fr}
.zp0643 h1{font-size:clamp(42px,14vw,70px)}}

.zp0643 .heroActions a,.zp0643 .primary,.zp0643 .ctaBtn,.zp0643 .btnPrimary,.zp0643 .schedule>a,.zp0643 .newsletter>a{transition:all .2s ease}
.zp0643 .heroActions a:hover,.zp0643 .primary:hover,.zp0643 .ctaBtn:hover,.zp0643 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0643 nav a,.zp0643 .nav a,.zp0643 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0643 nav a:hover,.zp0643 .nav a:hover,.zp0643 .footer a:hover{
  color:var(--primary)
}
.zp0643 .serviceGrid article,.zp0643 .projectCard,.zp0643 .teamCard,.zp0643 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0643 .serviceGrid article:hover,.zp0643 .projectCard:hover,.zp0643 .teamCard:hover,.zp0643 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0643 *,.zp0643 *::before,.zp0643 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0643 a,.zp0643 button,.zp0643 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">42</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
