"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0985-food-brand-neo-classical", "family": "Neo-classical", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|collection-led|proof>team>projects>services>credentials|hairline|luxury-contrast", "industry": "food-brand", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "collection-led"};

export default function Template0985({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Food Brand");
  const headline = String(content.headline || "A food brand built around distinctive flavour, clear provenance, and easy discovery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Products", "Recipes", "Stockists", "Wholesale", "Story"];
  const industryLabel = "Food brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0985" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0985{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0985 *{box-sizing:border-box}
.zp0985 a{color:inherit;text-decoration:none}
.zp0985 h1,.zp0985 h2,.zp0985 h3,.zp0985 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0985 img{max-width:100%;display:block}
.zp0985 button,.zp0985 a{-webkit-tap-highlight-color:transparent}
.zp0985 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0985 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0985 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0985 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0985 .nav.menu details{position:relative}
.zp0985 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0985 .mobileMenu{display:none}
.zp0985 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0985 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0985 .eyebrow,.zp0985 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0985 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0985 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0985 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0985 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0985 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0985 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0985 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0985 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0985 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0985 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0985 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0985 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0985 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0985 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0985 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0985 .serviceGrid p{color:var(--muted)}
.zp0985 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0985 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0985 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0985 details{border-top:1px solid var(--border);padding:20px 0}
.zp0985 details summary{font-weight:800;cursor:pointer}
.zp0985 details p{color:var(--muted);max-width:70ch}
.zp0985 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0985 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0985 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Didot, Georgia, serif;margin-bottom:18px}
.zp0985 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0985 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0985 .projects article:nth-child(2){transform:translateY(32px)}
.zp0985 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0985 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0985 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0985 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0985 .contact .eyebrow{color:var(--bg)}
.zp0985 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0985 .contactMeta{display:grid;gap:10px}
.zp0985 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0985 .heroCopy{animation:enter-984 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-984{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0985 .hero{min-height:auto}
.zp0985 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0985 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0985 .nav nav{display:none}
.zp0985 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0985 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0985 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0985 .mobileMenu nav a{padding:10px 8px}
.zp0985 .hero,.zp0985 .archiveHero{grid-template-columns:1fr}
.zp0985 .section,.zp0985 .sectionTitle,.zp0985 .contact{grid-template-columns:1fr}
.zp0985 .teamGrid{grid-template-columns:1fr 1fr}
.zp0985 .projects .projectGrid{grid-template-columns:1fr}
.zp0985 .projects article:nth-child(2){transform:none}
.zp0985 .section{display:block}}
@media(max-width:430px){.zp0985{font-size:16px}
.zp0985 .hero,.zp0985 .section,.zp0985 .contact{padding-left:18px;padding-right:18px}
.zp0985 .serviceGrid,.zp0985 .proof,.zp0985 .teamGrid{grid-template-columns:1fr}
.zp0985 h1{font-size:clamp(42px,14vw,70px)}}

.zp0985 .heroActions a,.zp0985 .primary,.zp0985 .ctaBtn,.zp0985 .btnPrimary,.zp0985 .schedule>a,.zp0985 .newsletter>a{transition:all .2s ease}
.zp0985 .heroActions a:hover,.zp0985 .primary:hover,.zp0985 .ctaBtn:hover,.zp0985 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0985 nav a,.zp0985 .nav a,.zp0985 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0985 nav a:hover,.zp0985 .nav a:hover,.zp0985 .footer a:hover{
  color:var(--secondary)
}
.zp0985 .serviceGrid article,.zp0985 .projectCard,.zp0985 .teamCard,.zp0985 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0985 .serviceGrid article:hover,.zp0985 .projectCard:hover,.zp0985 .teamCard:hover,.zp0985 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0985 *,.zp0985 *::before,.zp0985 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0985 a,.zp0985 button,.zp0985 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
