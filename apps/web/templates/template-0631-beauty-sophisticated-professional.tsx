"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0631-beauty-sophisticated-professional", "family": "Sophisticated Professional", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|two-speed-scroll|case-study>values>services>testimonial>proof|asymmetric-radius|technical-mono", "industry": "beauty", "hero": "index-led", "navigation": "editorial-index", "layout": "two-speed-scroll"};

export default function Template0631({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Beauty Studio");
  const headline = String(content.headline || "Results-focused treatments in a calm studio with transparent recommendations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Facials", "Brows", "Skin consultations", "Packages", "Gift cards"];
  const industryLabel = "Beauty studio";
  const serviceNotes = ["Ingredient-transparent formulations: every product listing includes the full INCI.", "Patch-test kits available before committing to any new treatment or product line.", "Skin consultation appointment included with all bespoke skincare programmes.", "Cruelty-free certified and vegan-formulated across the entire product range.", "Results photography at 4 and 8 weeks so you can see the change objectively."];
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const testimonialName = "Elm client";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0631" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0631{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0631 *{box-sizing:border-box}
.zp0631 a{color:inherit;text-decoration:none}
.zp0631 h1,.zp0631 h2,.zp0631 h3,.zp0631 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0631 img{max-width:100%;display:block}
.zp0631 button,.zp0631 a{-webkit-tap-highlight-color:transparent}
.zp0631 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0631 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0631 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0631 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0631 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0631 .nav.index nav{justify-content:flex-end}
.zp0631 .mobileMenu{display:none}
.zp0631 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0631 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0631 .eyebrow,.zp0631 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0631 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0631 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0631 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0631 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0631 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0631 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0631 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0631 .indexHero li{font:700 18px/1.2 Courier New, monospace;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0631 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0631 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0631 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0631 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0631 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0631 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0631 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0631 .serviceGrid p{color:var(--muted)}
.zp0631 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0631 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0631 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0631 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0631 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0631 .testimonial>div{align-self:end}
.zp0631 .testimonial span{display:block;opacity:.7}
.zp0631 details{border-top:1px solid var(--border);padding:20px 0}
.zp0631 details summary{font-weight:800;cursor:pointer}
.zp0631 details p{color:var(--muted);max-width:70ch}
.zp0631 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0631 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0631 .projects article:nth-child(2){transform:translateY(32px)}
.zp0631 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Courier New, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0631 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0631 .contact .eyebrow{color:var(--bg)}
.zp0631 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0631 .contactMeta{display:grid;gap:10px}
.zp0631 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0631 .heroCopy{animation:enter-630 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-630{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0631 .hero{min-height:auto}
.zp0631 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0631 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0631 .nav nav{display:none}
.zp0631 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0631 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0631 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0631 .mobileMenu nav a{padding:10px 8px}
.zp0631 .hero,.zp0631 .indexHero{grid-template-columns:1fr}
.zp0631 .section,.zp0631 .sectionTitle,.zp0631 .contact{grid-template-columns:1fr}
.zp0631 .testimonial{grid-template-columns:1fr}
.zp0631 .projects .projectGrid{grid-template-columns:1fr}
.zp0631 .projects article:nth-child(2){transform:none}
.zp0631 .section{display:block}}
@media(max-width:430px){.zp0631{font-size:16px}
.zp0631 .hero,.zp0631 .section,.zp0631 .contact{padding-left:18px;padding-right:18px}
.zp0631 .serviceGrid,.zp0631 .proof{grid-template-columns:1fr}
.zp0631 h1{font-size:clamp(42px,14vw,70px)}
.zp0631 .nav.index{grid-template-columns:1fr auto}
.zp0631 .nav.index>span{display:none}}

.zp0631 .heroActions a,.zp0631 .primary,.zp0631 .ctaBtn,.zp0631 .btnPrimary,.zp0631 .schedule>a,.zp0631 .newsletter>a{transition:all .2s ease}
.zp0631 .heroActions a:hover,.zp0631 .primary:hover,.zp0631 .ctaBtn:hover,.zp0631 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0631 nav a,.zp0631 .nav a,.zp0631 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0631 nav a:hover,.zp0631 .nav a:hover,.zp0631 .footer a:hover{
  color:var(--primary)
}
.zp0631 .serviceGrid article,.zp0631 .projectCard,.zp0631 .teamCard,.zp0631 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0631 .serviceGrid article:hover,.zp0631 .projectCard:hover,.zp0631 .teamCard:hover,.zp0631 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0631 *,.zp0631 *::before,.zp0631 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0631 a,.zp0631 button,.zp0631 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
