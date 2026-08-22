"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0679-photography-oversized-typography", "family": "Oversized Typography", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|horizontal-panels|comparison>location>destinations>proof>services|asymmetric-radius|technical-mono", "industry": "photography", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "horizontal-panels"};

export default function Template0679({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Photography Studio");
  const headline = String(content.headline || "Photography with a clear visual language and production that stays calm on set.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Editorial", "Commercial", "Portraits", "Campaigns", "Licensing"];
  const industryLabel = "Photography studio";
  const serviceNotes = ["Commercial and editorial commissions with same-day turnaround for press deadlines.", "Natural-light and studio sessions available with full styling coordination.", "Wedding coverage: two photographers, full day, premium album design and print.", "Brand photography packages with art direction, prop sourcing, and retouching.", "Archival printing on fine art paper — limited editions signed and numbered."];
  const proofPoints = ["Published: The Sunday Times, FT Weekend", "35mm and digital capability", "2-week edit turnaround guaranteed", "RAW files included"];
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0679" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0679{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0679 *{box-sizing:border-box}
.zp0679 a{color:inherit;text-decoration:none}
.zp0679 h1,.zp0679 h2,.zp0679 h3,.zp0679 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0679 img{max-width:100%;display:block}
.zp0679 button,.zp0679 a{-webkit-tap-highlight-color:transparent}
.zp0679 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0679 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0679 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0679 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0679 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0679 .nav.index nav{justify-content:flex-end}
.zp0679 .mobileMenu{display:none}
.zp0679 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0679 .eyebrow,.zp0679 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0679 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0679 .minimalHero{display:block;min-height:74vh}
.zp0679 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0679 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0679 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0679 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0679 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0679 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0679 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0679 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0679 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0679 .serviceGrid p{color:var(--muted)}
.zp0679 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0679 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0679 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0679 details{border-top:1px solid var(--border);padding:20px 0}
.zp0679 details summary{font-weight:800;cursor:pointer}
.zp0679 details p{color:var(--muted);max-width:70ch}
.zp0679 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0679 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0679 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0679 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0679 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0679 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0679 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0679 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0679 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0679 .contact .eyebrow{color:var(--bg)}
.zp0679 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0679 .contactMeta{display:grid;gap:10px}
.zp0679 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0679 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0679 .sectionTitle{display:block}
@keyframes enter-678{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0679 .hero{min-height:auto}
.zp0679 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0679 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0679 .nav nav{display:none}
.zp0679 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0679 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0679 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0679 .mobileMenu nav a{padding:10px 8px}
.zp0679 .hero{grid-template-columns:1fr}
.zp0679 .section,.zp0679 .sectionTitle,.zp0679 .location,.zp0679 .contact{grid-template-columns:1fr}
.zp0679 .section{display:block}}
@media(max-width:430px){.zp0679{font-size:16px}
.zp0679 .hero,.zp0679 .section,.zp0679 .contact{padding-left:18px;padding-right:18px}
.zp0679 .serviceGrid,.zp0679 .proof,.zp0679 .destinations>div:last-child,.zp0679 .compareGrid{grid-template-columns:1fr}
.zp0679 h1{font-size:clamp(42px,14vw,70px)}
.zp0679 .minimalFoot{grid-template-columns:1fr}
.zp0679 .nav.index{grid-template-columns:1fr auto}
.zp0679 .nav.index>span{display:none}}

.zp0679 .heroActions a,.zp0679 .primary,.zp0679 .ctaBtn,.zp0679 .btnPrimary,.zp0679 .schedule>a,.zp0679 .newsletter>a{transition:all .2s ease}
.zp0679 .heroActions a:hover,.zp0679 .primary:hover,.zp0679 .ctaBtn:hover,.zp0679 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0679 nav a,.zp0679 .nav a,.zp0679 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0679 nav a:hover,.zp0679 .nav a:hover,.zp0679 .footer a:hover{
  color:var(--primary)
}
.zp0679 .serviceGrid article,.zp0679 .projectCard,.zp0679 .teamCard,.zp0679 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0679 .serviceGrid article:hover,.zp0679 .projectCard:hover,.zp0679 .teamCard:hover,.zp0679 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0679 *,.zp0679 *::before,.zp0679 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0679 a,.zp0679 button,.zp0679 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
