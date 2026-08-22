"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0343-interiors-scrapbook", "family": "Scrapbook", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|two-speed-scroll|services>comparison>packages>proof>timeline|asymmetric-radius|technical-mono", "industry": "interiors", "hero": "index-led", "navigation": "editorial-index", "layout": "two-speed-scroll"};

export default function Template0343({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0343" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0343{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0343 *{box-sizing:border-box}
.zp0343 a{color:inherit;text-decoration:none}
.zp0343 h1,.zp0343 h2,.zp0343 h3,.zp0343 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0343 img{max-width:100%;display:block}
.zp0343 button,.zp0343 a{-webkit-tap-highlight-color:transparent}
.zp0343 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0343 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0343 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0343 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0343 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0343 .nav.index nav{justify-content:flex-end}
.zp0343 .mobileMenu{display:none}
.zp0343 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0343 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0343 .eyebrow,.zp0343 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0343 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0343 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0343 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0343 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0343 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0343 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0343 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0343 .indexHero li{font:700 18px/1.2 Courier New, monospace;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0343 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0343 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0343 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0343 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0343 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0343 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0343 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0343 .serviceGrid p{color:var(--muted)}
.zp0343 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0343 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0343 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0343 details{border-top:1px solid var(--border);padding:20px 0}
.zp0343 details summary{font-weight:800;cursor:pointer}
.zp0343 details p{color:var(--muted);max-width:70ch}
.zp0343 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0343 .timeline article{padding:20px 0}
.zp0343 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0343 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0343 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0343 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0343 .packages>.sectionTitle{grid-column:1/-1}
.zp0343 .packages article{padding:24px;border:1px solid var(--border)}
.zp0343 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0343 .contact .eyebrow{color:var(--bg)}
.zp0343 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0343 .contactMeta{display:grid;gap:10px}
.zp0343 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0343{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0343 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0343 .heroCopy{animation:enter-342 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-342{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0343 .hero{min-height:auto}
.zp0343 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0343 .proof{grid-template-columns:1fr 1fr}
.zp0343 .packages{grid-template-columns:1fr 1fr}
.zp0343 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0343 .nav nav{display:none}
.zp0343 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0343 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0343 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0343 .mobileMenu nav a{padding:10px 8px}
.zp0343 .hero,.zp0343 .indexHero{grid-template-columns:1fr}
.zp0343 .section,.zp0343 .sectionTitle,.zp0343 .contact{grid-template-columns:1fr}
.zp0343 .section{display:block}}
@media(max-width:430px){.zp0343{font-size:16px}
.zp0343 .hero,.zp0343 .section,.zp0343 .contact{padding-left:18px;padding-right:18px}
.zp0343 .serviceGrid,.zp0343 .proof,.zp0343 .packages,.zp0343 .compareGrid{grid-template-columns:1fr}
.zp0343 h1{font-size:clamp(42px,14vw,70px)}
.zp0343 .nav.index{grid-template-columns:1fr auto}
.zp0343 .nav.index>span{display:none}}

.zp0343 .heroActions a,.zp0343 .primary,.zp0343 .ctaBtn,.zp0343 .btnPrimary,.zp0343 .schedule>a,.zp0343 .newsletter>a{transition:all .2s ease}
.zp0343 .heroActions a:hover,.zp0343 .primary:hover,.zp0343 .ctaBtn:hover,.zp0343 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0343 nav a,.zp0343 .nav a,.zp0343 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0343 nav a:hover,.zp0343 .nav a:hover,.zp0343 .footer a:hover{
  color:var(--primary)
}
.zp0343 .serviceGrid article,.zp0343 .projectCard,.zp0343 .teamCard,.zp0343 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0343 .serviceGrid article:hover,.zp0343 .projectCard:hover,.zp0343 .teamCard:hover,.zp0343 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0343 *,.zp0343 *::before,.zp0343 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0343 a,.zp0343 button,.zp0343 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
