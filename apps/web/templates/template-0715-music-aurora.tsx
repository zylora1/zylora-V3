"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0715-music-aurora", "family": "Aurora", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|horizontal-panels|destinations>services>proof>awards>metrics|capsule|organic-modern", "industry": "music", "hero": "split-image", "navigation": "statement-bar", "layout": "horizontal-panels"};

export default function Template0715({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0715" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0715{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0715 *{box-sizing:border-box}
.zp0715 a{color:inherit;text-decoration:none}
.zp0715 h1,.zp0715 h2,.zp0715 h3,.zp0715 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0715 img{max-width:100%;display:block}
.zp0715 button,.zp0715 a{-webkit-tap-highlight-color:transparent}
.zp0715 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0715 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0715 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0715 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0715 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0715 .nav.statement>a{justify-self:end}
.zp0715 .mobileMenu{display:none}
.zp0715 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0715 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0715 .eyebrow,.zp0715 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0715 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0715 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0715 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0715 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0715 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0715 .visual,.zp0715 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0715 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0715 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0715 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0715 .heroPhoto{object-fit:cover}
.zp0715 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0715 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0715 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0715 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0715 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0715 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0715 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0715 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0715 .serviceGrid p{color:var(--muted)}
.zp0715 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0715 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0715 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0715 details{border-top:1px solid var(--border);padding:20px 0}
.zp0715 details summary{font-weight:800;cursor:pointer}
.zp0715 details p{color:var(--muted);max-width:70ch}
.zp0715 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0715 .metrics div{background:var(--bg);padding:30px}
.zp0715 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Optima, Candara, sans-serif;color:var(--primary)}
.zp0715 .awards>div{max-width:800px;margin-left:auto}
.zp0715 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0715 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0715 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0715 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0715 .contact .eyebrow{color:var(--bg)}
.zp0715 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0715 .contactMeta{display:grid;gap:10px}
.zp0715 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0715 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0715 .sectionTitle{display:block}
.zp0715{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0715 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0715 .heroCopy{animation:enter-714 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-714{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0715 .hero{min-height:auto}
.zp0715 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0715 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0715 .nav nav{display:none}
.zp0715 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0715 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0715 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0715 .mobileMenu nav a{padding:10px 8px}
.zp0715 .hero,.zp0715 .splitHero{grid-template-columns:1fr}
.zp0715 .section,.zp0715 .sectionTitle,.zp0715 .contact{grid-template-columns:1fr}
.zp0715 .metrics{grid-template-columns:1fr 1fr}
.zp0715 .section{display:block}}
@media(max-width:430px){.zp0715{font-size:16px}
.zp0715 .hero,.zp0715 .section,.zp0715 .contact{padding-left:18px;padding-right:18px}
.zp0715 .serviceGrid,.zp0715 .proof,.zp0715 .metrics,.zp0715 .destinations>div:last-child{grid-template-columns:1fr}
.zp0715 h1{font-size:clamp(42px,14vw,70px)}
.zp0715 .nav.statement{grid-template-columns:1fr auto}
.zp0715 .nav.statement>span:first-child{display:none}}

.zp0715 .heroActions a,.zp0715 .primary,.zp0715 .ctaBtn,.zp0715 .btnPrimary,.zp0715 .schedule>a,.zp0715 .newsletter>a{transition:all .2s ease}
.zp0715 .heroActions a:hover,.zp0715 .primary:hover,.zp0715 .ctaBtn:hover,.zp0715 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0715 nav a,.zp0715 .nav a,.zp0715 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0715 nav a:hover,.zp0715 .nav a:hover,.zp0715 .footer a:hover{
  color:var(--primary)
}
.zp0715 .serviceGrid article,.zp0715 .projectCard,.zp0715 .teamCard,.zp0715 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0715 .serviceGrid article:hover,.zp0715 .projectCard:hover,.zp0715 .teamCard:hover,.zp0715 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0715 *,.zp0715 *::before,.zp0715 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0715 a,.zp0715 button,.zp0715 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">14</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
