"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0535-software-pastel", "family": "Pastel", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|horizontal-panels|services>newsletter>proof>credentials>manifesto|asymmetric-radius|technical-mono", "industry": "software", "hero": "index-led", "navigation": "editorial-index", "layout": "horizontal-panels"};

export default function Template0535({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Software Studio");
  const headline = String(content.headline || "Experienced product engineering for teams that need reliable software and clear delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product engineering", "Web applications", "Mobile apps", "Platform modernization", "Support"];
  const industryLabel = "Software studio";
  const serviceNotes = ["Agile delivery with two-week sprints: working software every fortnight, not just updates.", "Code quality: 85%+ test coverage required before any feature ships to production.", "Architecture review at project start — we identify technical risk before writing a line.", "Maintenance packages that include dependency updates, security patches, and monitoring.", "Source code escrow and full handover documentation as standard on every engagement."];
  const proofPoints = ["ISO 9001 quality certified", "GitHub-first delivery", "85%+ test coverage minimum", "GDPR compliant processes"];
  const testimonial = "Every sprint we had something working to test. The quality was high from the start — no big crunch at the end.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0535" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0535{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0535 *{box-sizing:border-box}
.zp0535 a{color:inherit;text-decoration:none}
.zp0535 h1,.zp0535 h2,.zp0535 h3,.zp0535 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0535 img{max-width:100%;display:block}
.zp0535 button,.zp0535 a{-webkit-tap-highlight-color:transparent}
.zp0535 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0535 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0535 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0535 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0535 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0535 .nav.index nav{justify-content:flex-end}
.zp0535 .mobileMenu{display:none}
.zp0535 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0535 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0535 .eyebrow,.zp0535 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0535 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0535 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0535 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0535 .heroActions a,.zp0535 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0535 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0535 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0535 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0535 .indexHero li{font:700 18px/1.2 Courier New, monospace;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0535 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0535 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0535 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0535 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0535 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0535 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0535 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0535 .serviceGrid p{color:var(--muted)}
.zp0535 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0535 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0535 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0535 details{border-top:1px solid var(--border);padding:20px 0}
.zp0535 details summary{font-weight:800;cursor:pointer}
.zp0535 details p{color:var(--muted);max-width:70ch}
.zp0535 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0535 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0535 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0535 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0535 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Courier New, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0535 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0535 .contact .eyebrow{color:var(--bg)}
.zp0535 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0535 .contactMeta{display:grid;gap:10px}
.zp0535 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0535 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0535 .sectionTitle{display:block}
.zp0535 .heroCopy{animation:enter-534 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-534{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0535 .hero{min-height:auto}
.zp0535 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0535 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0535 .nav nav{display:none}
.zp0535 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0535 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0535 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0535 .mobileMenu nav a{padding:10px 8px}
.zp0535 .hero,.zp0535 .indexHero{grid-template-columns:1fr}
.zp0535 .section,.zp0535 .sectionTitle,.zp0535 .contact{grid-template-columns:1fr}
.zp0535 .section{display:block}}
@media(max-width:430px){.zp0535{font-size:16px}
.zp0535 .hero,.zp0535 .section,.zp0535 .contact{padding-left:18px;padding-right:18px}
.zp0535 .serviceGrid,.zp0535 .proof{grid-template-columns:1fr}
.zp0535 h1{font-size:clamp(42px,14vw,70px)}
.zp0535 .nav.index{grid-template-columns:1fr auto}
.zp0535 .nav.index>span{display:none}}

.zp0535 .heroActions a,.zp0535 .primary,.zp0535 .ctaBtn,.zp0535 .btnPrimary,.zp0535 .schedule>a,.zp0535 .newsletter>a{transition:all .2s ease}
.zp0535 .heroActions a:hover,.zp0535 .primary:hover,.zp0535 .ctaBtn:hover,.zp0535 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0535 nav a,.zp0535 .nav a,.zp0535 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0535 nav a:hover,.zp0535 .nav a:hover,.zp0535 .footer a:hover{
  color:var(--primary)
}
.zp0535 .serviceGrid article,.zp0535 .projectCard,.zp0535 .teamCard,.zp0535 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0535 .serviceGrid article:hover,.zp0535 .projectCard:hover,.zp0535 .teamCard:hover,.zp0535 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0535 *,.zp0535 *::before,.zp0535 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0535 a,.zp0535 button,.zp0535 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
