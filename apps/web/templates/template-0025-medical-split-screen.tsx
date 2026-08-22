"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0025-medical-split-screen", "family": "Split-screen", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|magazine-sections|services>newsletter>hours>proof>story|hairline|luxury-contrast", "industry": "medical", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "magazine-sections"};

export default function Template0025({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const storyQuote = "\u201cThoughtful primary care built around continuity, access, and informed decisions.\u201d";
  const storyBody = "Foundry Primary Care Clinic is presented as a real working primary care clinic, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0025" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0025{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0025 *{box-sizing:border-box}
.zp0025 a{color:inherit;text-decoration:none}
.zp0025 h1,.zp0025 h2,.zp0025 h3,.zp0025 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0025 img{max-width:100%;display:block}
.zp0025 button,.zp0025 a{-webkit-tap-highlight-color:transparent}
.zp0025 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0025 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0025 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0025 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0025 .nav.menu details{position:relative}
.zp0025 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0025 .mobileMenu{display:none}
.zp0025 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0025 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0025 .eyebrow,.zp0025 .sectionTitle>span,.zp0025 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0025 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0025 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0025 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0025 .heroActions a,.zp0025 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0025 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0025 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0025 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0025 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0025 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0025 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0025 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0025 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0025 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0025 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0025 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0025 .serviceGrid p{color:var(--muted)}
.zp0025 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0025 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0025 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0025 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0025 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0025 .story p{color:var(--muted)}
.zp0025 details{border-top:1px solid var(--border);padding:20px 0}
.zp0025 details summary{font-weight:800;cursor:pointer}
.zp0025 details p{color:var(--muted);max-width:70ch}
.zp0025 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0025 .hours dl{margin:0}
.zp0025 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0025 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0025 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0025 .contact .eyebrow{color:var(--bg)}
.zp0025 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0025 .contactMeta{display:grid;gap:10px}
.zp0025 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0025 .section{column-rule:1px solid var(--border)}
.zp0025 .sectionTitle h2{max-width:18ch}
.zp0025 .heroCopy{animation:enter-24 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-24{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0025 .hero{min-height:auto}
.zp0025 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0025 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0025 .nav nav{display:none}
.zp0025 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0025 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0025 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0025 .mobileMenu nav a{padding:10px 8px}
.zp0025 .hero,.zp0025 .archiveHero{grid-template-columns:1fr}
.zp0025 .section,.zp0025 .sectionTitle,.zp0025 .story,.zp0025 .hours,.zp0025 .contact{grid-template-columns:1fr}
.zp0025 .section{display:block}}
@media(max-width:430px){.zp0025{font-size:16px}
.zp0025 .hero,.zp0025 .section,.zp0025 .contact{padding-left:18px;padding-right:18px}
.zp0025 .serviceGrid,.zp0025 .proof{grid-template-columns:1fr}
.zp0025 h1{font-size:clamp(42px,14vw,70px)}}

.zp0025 .heroActions a,.zp0025 .primary,.zp0025 .ctaBtn,.zp0025 .btnPrimary,.zp0025 .schedule>a,.zp0025 .newsletter>a{transition:all .2s ease}
.zp0025 .heroActions a:hover,.zp0025 .primary:hover,.zp0025 .ctaBtn:hover,.zp0025 .btnPrimary:hover{
  opacity:.85
}
.zp0025 nav a,.zp0025 .nav a,.zp0025 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0025 nav a:hover,.zp0025 .nav a:hover,.zp0025 .footer a:hover{
  color:var(--primary)
}
.zp0025 .serviceGrid article,.zp0025 .projectCard,.zp0025 .teamCard,.zp0025 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0025 .serviceGrid article:hover,.zp0025 .projectCard:hover,.zp0025 .teamCard:hover,.zp0025 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0025 *,.zp0025 *::before,.zp0025 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0025 a,.zp0025 button,.zp0025 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
