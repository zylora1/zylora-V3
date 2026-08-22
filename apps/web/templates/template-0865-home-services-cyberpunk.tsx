"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0865-home-services-cyberpunk", "family": "Cyberpunk", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|editorial-spine|services>pricing>proof>team>process|square-editorial|luxury-contrast", "industry": "home-services", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "editorial-spine"};

export default function Template0865({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Home Services Company");
  const headline = String(content.headline || "Trusted local trades with transparent arrival windows and straightforward estimates.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Electrical", "Plumbing", "Heating", "Emergency callouts", "Maintenance plans"];
  const industryLabel = "Home services company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Home services company / Project A", "Home services company / Project B", "Home services company / Project C", "Home services company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trusted local trades with transparent arrival windows and straightforward estimates. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0865" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0865{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0865 *{box-sizing:border-box}
.zp0865 a{color:inherit;text-decoration:none}
.zp0865 h1,.zp0865 h2,.zp0865 h3,.zp0865 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0865 img{max-width:100%;display:block}
.zp0865 button,.zp0865 a{-webkit-tap-highlight-color:transparent}
.zp0865 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0865 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0865 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0865 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0865 .mobileMenu{display:none}
.zp0865 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0865 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0865 .eyebrow,.zp0865 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0865 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0865 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0865 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0865 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0865 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0865 .typeOnly{grid-template-columns:1fr .28fr}
.zp0865 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0865 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0865 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0865 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0865 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0865 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0865 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0865 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0865 .serviceGrid p{color:var(--muted)}
.zp0865 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0865 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0865 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0865 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0865 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0865 details{border-top:1px solid var(--border);padding:20px 0}
.zp0865 details summary{font-weight:800;cursor:pointer}
.zp0865 details p{color:var(--muted);max-width:70ch}
.zp0865 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0865 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0865 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Didot, Georgia, serif;margin-bottom:18px}
.zp0865 .priceRows{border-top:1px solid var(--border)}
.zp0865 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0865 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0865 .contact .eyebrow{color:var(--bg)}
.zp0865 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0865 .contactMeta{display:grid;gap:10px}
.zp0865 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0865 .heroCopy{animation:enter-864 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-864{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0865 .hero{min-height:auto}
.zp0865 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0865 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0865 .nav nav{display:none}
.zp0865 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0865 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0865 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0865 .mobileMenu nav a{padding:10px 8px}
.zp0865 .hero{grid-template-columns:1fr}
.zp0865 .section,.zp0865 .sectionTitle,.zp0865 .contact{grid-template-columns:1fr}
.zp0865 .teamGrid{grid-template-columns:1fr 1fr}
.zp0865 .section{display:block}}
@media(max-width:430px){.zp0865{font-size:16px}
.zp0865 .hero,.zp0865 .section,.zp0865 .contact{padding-left:18px;padding-right:18px}
.zp0865 .serviceGrid,.zp0865 .proof,.zp0865 .teamGrid{grid-template-columns:1fr}
.zp0865 h1{font-size:clamp(42px,14vw,70px)}
.zp0865 .priceRows article{grid-template-columns:1fr}}

.zp0865 .heroActions a,.zp0865 .primary,.zp0865 .ctaBtn,.zp0865 .btnPrimary,.zp0865 .schedule>a,.zp0865 .newsletter>a{transition:all .2s ease}
.zp0865 .heroActions a:hover,.zp0865 .primary:hover,.zp0865 .ctaBtn:hover,.zp0865 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0865 nav a,.zp0865 .nav a,.zp0865 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0865 nav a:hover,.zp0865 .nav a:hover,.zp0865 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0865 .serviceGrid article,.zp0865 .projectCard,.zp0865 .teamCard,.zp0865 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0865 .serviceGrid article:hover,.zp0865 .projectCard:hover,.zp0865 .teamCard:hover,.zp0865 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0865 *,.zp0865 *::before,.zp0865 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0865 a,.zp0865 button,.zp0865 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
