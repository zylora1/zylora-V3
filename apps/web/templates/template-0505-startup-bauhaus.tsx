"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0505-startup-bauhaus", "family": "Bauhaus", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|editorial-spine|proof>testimonial>security>community>services|hairline|luxury-contrast", "industry": "startup", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0505({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Technology Startup");
  const headline = String(content.headline || "A new product with a precise problem, a credible point of view, and proof it works.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product", "Solutions", "Research", "Customer stories", "Careers"];
  const industryLabel = "Technology startup";
  const serviceNotes = ["Advisory board access: domain experts available for 2h/month per advisor.", "Investor-ready financial models built with your unit economics, not templates.", "Legal setup: incorporation, shareholding, IP, and founder agreements done right once.", "Go-to-market planning with channel experiments prioritised by CAC potential.", "Fundraise preparation: pitch deck, data room, and investor narrative coaching."];
  const proofPoints = ["Portfolio: 47 companies", "Average seed raised: £1.2M", "Partner response within 48h", "Equity-free options available"];
  const storyBody = "Foundry Technology Startup is presented as a real working technology startup, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const testimonialName = "Tandem client";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0505" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0505{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0505 *{box-sizing:border-box}
.zp0505 a{color:inherit;text-decoration:none}
.zp0505 h1,.zp0505 h2,.zp0505 h3,.zp0505 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0505 img{max-width:100%;display:block}
.zp0505 button,.zp0505 a{-webkit-tap-highlight-color:transparent}
.zp0505 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0505 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0505 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0505 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0505 .nav.menu details{position:relative}
.zp0505 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0505 .mobileMenu{display:none}
.zp0505 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0505 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0505 .eyebrow,.zp0505 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0505 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0505 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0505 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0505 .heroActions a,.zp0505 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0505 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0505 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0505 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0505 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0505 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0505 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0505 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0505 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0505 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0505 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0505 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0505 .serviceGrid p{color:var(--muted)}
.zp0505 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0505 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0505 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0505 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0505 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0505 .testimonial>div{align-self:end}
.zp0505 .testimonial span{display:block;opacity:.7}
.zp0505 details{border-top:1px solid var(--border);padding:20px 0}
.zp0505 details summary{font-weight:800;cursor:pointer}
.zp0505 details p{color:var(--muted);max-width:70ch}
.zp0505 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0505 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0505 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0505 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0505 .contact .eyebrow{color:var(--bg)}
.zp0505 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0505 .contactMeta{display:grid;gap:10px}
.zp0505 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0505 .heroCopy{animation:enter-504 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-504{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0505 .hero{min-height:auto}
.zp0505 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0505 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0505 .nav nav{display:none}
.zp0505 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0505 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0505 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0505 .mobileMenu nav a{padding:10px 8px}
.zp0505 .hero,.zp0505 .archiveHero{grid-template-columns:1fr}
.zp0505 .section,.zp0505 .sectionTitle,.zp0505 .security,.zp0505 .contact{grid-template-columns:1fr}
.zp0505 .testimonial{grid-template-columns:1fr}
.zp0505 .section{display:block}}
@media(max-width:430px){.zp0505{font-size:16px}
.zp0505 .hero,.zp0505 .section,.zp0505 .contact{padding-left:18px;padding-right:18px}
.zp0505 .serviceGrid,.zp0505 .proof{grid-template-columns:1fr}
.zp0505 h1{font-size:clamp(42px,14vw,70px)}}

.zp0505 .heroActions a,.zp0505 .primary,.zp0505 .ctaBtn,.zp0505 .btnPrimary,.zp0505 .schedule>a,.zp0505 .newsletter>a{transition:all .2s ease}
.zp0505 .heroActions a:hover,.zp0505 .primary:hover,.zp0505 .ctaBtn:hover,.zp0505 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0505 nav a,.zp0505 .nav a,.zp0505 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0505 nav a:hover,.zp0505 .nav a:hover,.zp0505 .footer a:hover{
  color:var(--primary)
}
.zp0505 .serviceGrid article,.zp0505 .projectCard,.zp0505 .teamCard,.zp0505 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0505 .serviceGrid article:hover,.zp0505 .projectCard:hover,.zp0505 .teamCard:hover,.zp0505 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0505 *,.zp0505 *::before,.zp0505 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0505 a,.zp0505 button,.zp0505 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
