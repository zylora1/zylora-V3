"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0199-restaurant-glassmorphism", "family": "Glassmorphism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|two-speed-scroll|process>services>newsletter>credentials>proof|asymmetric-radius|technical-mono", "industry": "restaurant", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "two-speed-scroll"};

export default function Template0199({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Restaurant");
  const headline = String(content.headline || "Ingredient-led cooking, warm service, and a menu that changes with the season.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Dinner service", "Tasting menu", "Private dining", "Seasonal specials", "Gift cards"];
  const industryLabel = "Restaurant";
  const serviceNotes = ["Seasonal menu updated monthly — what's on the plate reflects what's best that week.", "Private dining for up to 24 guests with a custom menu discussion included.", "Wine list curated by our sommelier with natural and classic options from small producers.", "Pre-theatre early service from 5:30 — main back by 7:15, guaranteed.", "Dietary requirements handled seriously: allergies logged and kitchen briefed."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0199" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0199{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0199 *{box-sizing:border-box}
.zp0199 a{color:inherit;text-decoration:none}
.zp0199 h1,.zp0199 h2,.zp0199 h3,.zp0199 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0199 img{max-width:100%;display:block}
.zp0199 button,.zp0199 a{-webkit-tap-highlight-color:transparent}
.zp0199 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0199 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0199 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0199 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0199 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0199 .nav.index nav{justify-content:flex-end}
.zp0199 .mobileMenu{display:none}
.zp0199 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0199 .eyebrow,.zp0199 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0199 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0199 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0199 .minimalHero{display:block;min-height:74vh}
.zp0199 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0199 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0199 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0199 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0199 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0199 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0199 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0199 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0199 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0199 .serviceGrid p{color:var(--muted)}
.zp0199 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0199 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0199 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0199 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0199 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0199 details{border-top:1px solid var(--border);padding:20px 0}
.zp0199 details summary{font-weight:800;cursor:pointer}
.zp0199 details p{color:var(--muted);max-width:70ch}
.zp0199 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0199 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0199 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0199 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0199 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0199 .contact .eyebrow{color:var(--bg)}
.zp0199 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0199 .contactMeta{display:grid;gap:10px}
.zp0199 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0199{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0199 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
@keyframes enter-198{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0199 .hero{min-height:auto}
.zp0199 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0199 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0199 .nav nav{display:none}
.zp0199 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0199 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0199 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0199 .mobileMenu nav a{padding:10px 8px}
.zp0199 .hero{grid-template-columns:1fr}
.zp0199 .section,.zp0199 .sectionTitle,.zp0199 .contact{grid-template-columns:1fr}
.zp0199 .section{display:block}}
@media(max-width:430px){.zp0199{font-size:16px}
.zp0199 .hero,.zp0199 .section,.zp0199 .contact{padding-left:18px;padding-right:18px}
.zp0199 .serviceGrid,.zp0199 .proof{grid-template-columns:1fr}
.zp0199 h1{font-size:clamp(42px,14vw,70px)}
.zp0199 .minimalFoot{grid-template-columns:1fr}
.zp0199 .nav.index{grid-template-columns:1fr auto}
.zp0199 .nav.index>span{display:none}}

.zp0199 .heroActions a,.zp0199 .primary,.zp0199 .ctaBtn,.zp0199 .btnPrimary,.zp0199 .schedule>a,.zp0199 .newsletter>a{transition:all .2s ease}
.zp0199 .heroActions a:hover,.zp0199 .primary:hover,.zp0199 .ctaBtn:hover,.zp0199 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0199 nav a,.zp0199 .nav a,.zp0199 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0199 nav a:hover,.zp0199 .nav a:hover,.zp0199 .footer a:hover{
  color:var(--primary)
}
.zp0199 .serviceGrid article,.zp0199 .projectCard,.zp0199 .teamCard,.zp0199 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0199 .serviceGrid article:hover,.zp0199 .projectCard:hover,.zp0199 .teamCard:hover,.zp0199 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0199 *,.zp0199 *::before,.zp0199 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0199 a,.zp0199 button,.zp0199 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
