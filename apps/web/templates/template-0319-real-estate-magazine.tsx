"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0319-real-estate-magazine", "family": "Magazine", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|horizontal-panels|newsletter>services>proof>story>credentials|soft-12|technical-mono", "industry": "real-estate", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "horizontal-panels"};

export default function Template0319({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Real Estate Agency");
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
  const storyQuote = "\u201cLocal market knowledge, sharp presentation, and straightforward advice through every move.\u201d";
  const storyBody = "Clove Real Estate Agency is presented as a real working real estate agency, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0319" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0319{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0319 *{box-sizing:border-box}
.zp0319 a{color:inherit;text-decoration:none}
.zp0319 h1,.zp0319 h2,.zp0319 h3,.zp0319 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0319 img{max-width:100%;display:block}
.zp0319 button,.zp0319 a{-webkit-tap-highlight-color:transparent}
.zp0319 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0319 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0319 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0319 .mobileMenu{display:none}
.zp0319:has(.navRail)>.hero,.zp0319:has(.navRail)>.section,.zp0319:has(.navRail)>.contact,.zp0319:has(.navRail)>.footer{margin-left:190px}
.zp0319 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0319 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0319 .eyebrow,.zp0319 .sectionTitle>span,.zp0319 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0319 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0319 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0319 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0319 .heroActions a,.zp0319 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0319 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0319 .canvasHero{overflow:hidden}
.zp0319 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0319 .canvasGrid i{border-right:1px solid var(--border)}
.zp0319 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0319 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0319 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0319 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0319 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0319 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0319 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0319 .serviceGrid p{color:var(--muted)}
.zp0319 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0319 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0319 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0319 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0319 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0319 .story p{color:var(--muted)}
.zp0319 details{border-top:1px solid var(--border);padding:20px 0}
.zp0319 details summary{font-weight:800;cursor:pointer}
.zp0319 details p{color:var(--muted);max-width:70ch}
.zp0319 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0319 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0319 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0319 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0319 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0319 .contact .eyebrow{color:var(--bg)}
.zp0319 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0319 .contactMeta{display:grid;gap:10px}
.zp0319 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0319 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0319 .sectionTitle{display:block}
.zp0319 .heroCopy{animation:enter-318 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-318{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0319 .hero{min-height:auto}
.zp0319 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0319 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0319 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0319 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0319 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0319 .mobileMenu nav a{padding:10px 8px}
.zp0319 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0319:has(.navRail)>.hero,.zp0319:has(.navRail)>.section,.zp0319:has(.navRail)>.contact,.zp0319:has(.navRail)>.footer{margin-left:0}
.zp0319 .hero{grid-template-columns:1fr}
.zp0319 .section,.zp0319 .sectionTitle,.zp0319 .story,.zp0319 .contact{grid-template-columns:1fr}
.zp0319 .section{display:block}}
@media(max-width:430px){.zp0319{font-size:16px}
.zp0319 .hero,.zp0319 .section,.zp0319 .contact{padding-left:18px;padding-right:18px}
.zp0319 .serviceGrid,.zp0319 .proof{grid-template-columns:1fr}
.zp0319 h1{font-size:clamp(42px,14vw,70px)}}

.zp0319 .heroActions a,.zp0319 .primary,.zp0319 .ctaBtn,.zp0319 .btnPrimary,.zp0319 .schedule>a,.zp0319 .newsletter>a{transition:all .2s ease}
.zp0319 .heroActions a:hover,.zp0319 .primary:hover,.zp0319 .ctaBtn:hover,.zp0319 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0319 nav a,.zp0319 .nav a,.zp0319 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0319 nav a:hover,.zp0319 .nav a:hover,.zp0319 .footer a:hover{
  color:var(--primary)
}
.zp0319 .serviceGrid article,.zp0319 .projectCard,.zp0319 .teamCard,.zp0319 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0319 .serviceGrid article:hover,.zp0319 .projectCard:hover,.zp0319 .teamCard:hover,.zp0319 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0319 *,.zp0319 *::before,.zp0319 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0319 a,.zp0319 button,.zp0319 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Magazine / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
