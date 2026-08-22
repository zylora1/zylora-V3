"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0313-real-estate-japanese-minimalism", "family": "Japanese Minimalism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|magazine-sections|services>location>proof>comparison>community|hairline|luxury-contrast", "industry": "real-estate", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "magazine-sections"};

export default function Template0313({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Real Estate Agency");
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
  const storyBody = "Foundry Real Estate Agency is presented as a real working real estate agency, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0313" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0313{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:0px;--shadow:none;--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0313 *{box-sizing:border-box}
.zp0313 a{color:inherit;text-decoration:none}
.zp0313 h1,.zp0313 h2,.zp0313 h3,.zp0313 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0313 img{max-width:100%;display:block}
.zp0313 button,.zp0313 a{-webkit-tap-highlight-color:transparent}
.zp0313 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0313 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0313 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0313 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0313 .nav.menu details{position:relative}
.zp0313 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0313 .mobileMenu{display:none}
.zp0313 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0313 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0313 .eyebrow,.zp0313 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0313 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0313 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0313 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0313 .heroActions a,.zp0313 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0313 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0313 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0313 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0313 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0313 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0313 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0313 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0313 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0313 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0313 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0313 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0313 .serviceGrid p{color:var(--muted)}
.zp0313 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0313 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0313 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0313 details{border-top:1px solid var(--border);padding:20px 0}
.zp0313 details summary{font-weight:800;cursor:pointer}
.zp0313 details p{color:var(--muted);max-width:70ch}
.zp0313 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0313 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0313 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0313 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0313 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0313 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0313 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0313 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0313 .contact .eyebrow{color:var(--bg)}
.zp0313 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0313 .contactMeta{display:grid;gap:10px}
.zp0313 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0313 .section{column-rule:1px solid var(--border)}
.zp0313 .sectionTitle h2{max-width:18ch}
.zp0313 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0313 .sectionTitle h2{font-weight:400}
.zp0313 .heroCopy{animation:enter-312 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-312{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0313 .hero{min-height:auto}
.zp0313 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0313 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0313 .nav nav{display:none}
.zp0313 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0313 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0313 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0313 .mobileMenu nav a{padding:10px 8px}
.zp0313 .hero,.zp0313 .archiveHero{grid-template-columns:1fr}
.zp0313 .section,.zp0313 .sectionTitle,.zp0313 .location,.zp0313 .contact{grid-template-columns:1fr}
.zp0313 .section{display:block}}
@media(max-width:430px){.zp0313{font-size:16px}
.zp0313 .hero,.zp0313 .section,.zp0313 .contact{padding-left:18px;padding-right:18px}
.zp0313 .serviceGrid,.zp0313 .proof,.zp0313 .compareGrid{grid-template-columns:1fr}
.zp0313 h1{font-size:clamp(42px,14vw,70px)}}

.zp0313 .heroActions a,.zp0313 .primary,.zp0313 .ctaBtn,.zp0313 .btnPrimary,.zp0313 .schedule>a,.zp0313 .newsletter>a{transition:all .2s ease}
.zp0313 .heroActions a:hover,.zp0313 .primary:hover,.zp0313 .ctaBtn:hover,.zp0313 .btnPrimary:hover{
  opacity:.75
}
.zp0313 nav a,.zp0313 .nav a,.zp0313 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0313 nav a:hover,.zp0313 .nav a:hover,.zp0313 .footer a:hover{
  opacity:.6
}
.zp0313 .serviceGrid article,.zp0313 .projectCard,.zp0313 .teamCard,.zp0313 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0313 .serviceGrid article:hover,.zp0313 .projectCard:hover,.zp0313 .teamCard:hover,.zp0313 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0313 *,.zp0313 *::before,.zp0313 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0313 a,.zp0313 button,.zp0313 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
