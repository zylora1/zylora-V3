"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0859-repair-sophisticated-professional", "family": "Sophisticated Professional", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|horizontal-panels|process>collection>services>packages>proof|capsule|organic-modern", "industry": "repair", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "horizontal-panels"};

export default function Template0859({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0859" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0859{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0859 *{box-sizing:border-box}
.zp0859 a{color:inherit;text-decoration:none}
.zp0859 h1,.zp0859 h2,.zp0859 h3,.zp0859 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0859 img{max-width:100%;display:block}
.zp0859 button,.zp0859 a{-webkit-tap-highlight-color:transparent}
.zp0859 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0859 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0859 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0859 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0859 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0859 .nav.statement>a{justify-self:end}
.zp0859 .mobileMenu{display:none}
.zp0859 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0859 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0859 .eyebrow,.zp0859 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0859 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0859 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0859 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0859 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0859 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0859 .visual,.zp0859 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0859 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0859 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0859 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0859 .heroPhoto{object-fit:cover}
.zp0859 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0859 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Optima, Candara, sans-serif;opacity:.08}
.zp0859 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0859 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0859 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0859 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0859 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0859 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0859 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0859 .serviceGrid p{color:var(--muted)}
.zp0859 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0859 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0859 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0859 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0859 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0859 details{border-top:1px solid var(--border);padding:20px 0}
.zp0859 details summary{font-weight:800;cursor:pointer}
.zp0859 details p{color:var(--muted);max-width:70ch}
.zp0859 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0859 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0859 .p1,.zp0859 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0859 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0859 .packages>.sectionTitle{grid-column:1/-1}
.zp0859 .packages article{padding:24px;border:1px solid var(--border)}
.zp0859 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0859 .contact .eyebrow{color:var(--bg)}
.zp0859 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0859 .contactMeta{display:grid;gap:10px}
.zp0859 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0859 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0859 .sectionTitle{display:block}
.zp0859 .heroCopy{animation:enter-858 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-858{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0859 .hero{min-height:auto}
.zp0859 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0859 .proof{grid-template-columns:1fr 1fr}
.zp0859 .packages{grid-template-columns:1fr 1fr}
.zp0859 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0859 .nav nav{display:none}
.zp0859 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0859 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0859 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0859 .mobileMenu nav a{padding:10px 8px}
.zp0859 .hero,.zp0859 .stripHero{grid-template-columns:1fr}
.zp0859 .section,.zp0859 .sectionTitle,.zp0859 .contact{grid-template-columns:1fr}
.zp0859 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0859 .section{display:block}}
@media(max-width:430px){.zp0859{font-size:16px}
.zp0859 .hero,.zp0859 .section,.zp0859 .contact{padding-left:18px;padding-right:18px}
.zp0859 .serviceGrid,.zp0859 .proof,.zp0859 .collectionGrid,.zp0859 .packages{grid-template-columns:1fr}
.zp0859 h1{font-size:clamp(42px,14vw,70px)}
.zp0859 .nav.statement{grid-template-columns:1fr auto}
.zp0859 .nav.statement>span:first-child{display:none}}

.zp0859 .heroActions a,.zp0859 .primary,.zp0859 .ctaBtn,.zp0859 .btnPrimary,.zp0859 .schedule>a,.zp0859 .newsletter>a{transition:all .2s ease}
.zp0859 .heroActions a:hover,.zp0859 .primary:hover,.zp0859 .ctaBtn:hover,.zp0859 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0859 nav a,.zp0859 .nav a,.zp0859 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0859 nav a:hover,.zp0859 .nav a:hover,.zp0859 .footer a:hover{
  color:var(--primary)
}
.zp0859 .serviceGrid article,.zp0859 .projectCard,.zp0859 .teamCard,.zp0859 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0859 .serviceGrid article:hover,.zp0859 .projectCard:hover,.zp0859 .teamCard:hover,.zp0859 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0859 *,.zp0859 *::before,.zp0859 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0859 a,.zp0859 button,.zp0859 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">58</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
