"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0913-logistics-minimalism", "family": "Minimalism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|collection-led|destinations>proof>services>manifesto>hours|square-editorial|luxury-contrast", "industry": "logistics", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "collection-led"};

export default function Template0913({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Logistics Company");
  const headline = String(content.headline || "Operational visibility and dependable movement from pickup through final delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Freight", "Warehousing", "Last-mile", "Customs support", "Tracking"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Logistics company / Project A", "Logistics company / Project B", "Logistics company / Project C", "Logistics company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Operational visibility and dependable movement from pickup through final delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0913" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0913{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0913 *{box-sizing:border-box}
.zp0913 a{color:inherit;text-decoration:none}
.zp0913 h1,.zp0913 h2,.zp0913 h3,.zp0913 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0913 img{max-width:100%;display:block}
.zp0913 button,.zp0913 a{-webkit-tap-highlight-color:transparent}
.zp0913 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0913 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0913 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0913 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0913 .mobileMenu{display:none}
.zp0913 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0913 .eyebrow,.zp0913 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0913 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0913 .visual,.zp0913 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0913 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0913 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0913 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0913 .heroPhoto{object-fit:cover}
.zp0913 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0913 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0913 .coverCaption{align-self:end}
.zp0913 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0913 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0913 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0913 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0913 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0913 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0913 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0913 .serviceGrid p{color:var(--muted)}
.zp0913 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0913 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0913 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0913 details{border-top:1px solid var(--border);padding:20px 0}
.zp0913 details summary{font-weight:800;cursor:pointer}
.zp0913 details p{color:var(--muted);max-width:70ch}
.zp0913 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0913 .hours dl{margin:0}
.zp0913 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0913 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Didot, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0913 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0913 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0913 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0913 .contact .eyebrow{color:var(--bg)}
.zp0913 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0913 .contactMeta{display:grid;gap:10px}
.zp0913 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-912{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0913 .hero{min-height:auto}
.zp0913 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0913 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0913 .nav nav{display:none}
.zp0913 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0913 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0913 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0913 .mobileMenu nav a{padding:10px 8px}
.zp0913 .hero,.zp0913 .coverHero{grid-template-columns:1fr}
.zp0913 .section,.zp0913 .sectionTitle,.zp0913 .hours,.zp0913 .contact{grid-template-columns:1fr}
.zp0913 .section{display:block}}
@media(max-width:430px){.zp0913{font-size:16px}
.zp0913 .hero,.zp0913 .section,.zp0913 .contact{padding-left:18px;padding-right:18px}
.zp0913 .serviceGrid,.zp0913 .proof,.zp0913 .destinations>div:last-child{grid-template-columns:1fr}
.zp0913 h1{font-size:clamp(42px,14vw,70px)}}

.zp0913 .heroActions a,.zp0913 .primary,.zp0913 .ctaBtn,.zp0913 .btnPrimary,.zp0913 .schedule>a,.zp0913 .newsletter>a{transition:all .2s ease}
.zp0913 .heroActions a:hover,.zp0913 .primary:hover,.zp0913 .ctaBtn:hover,.zp0913 .btnPrimary:hover{
  opacity:.75
}
.zp0913 nav a,.zp0913 .nav a,.zp0913 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0913 nav a:hover,.zp0913 .nav a:hover,.zp0913 .footer a:hover{
  opacity:.6
}
.zp0913 .serviceGrid article,.zp0913 .projectCard,.zp0913 .teamCard,.zp0913 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0913 .serviceGrid article:hover,.zp0913 .projectCard:hover,.zp0913 .teamCard:hover,.zp0913 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0913 *,.zp0913 *::before,.zp0913 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0913 a,.zp0913 button,.zp0913 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0913</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">12</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
