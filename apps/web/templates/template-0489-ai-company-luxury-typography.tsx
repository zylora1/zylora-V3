import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0489-ai-company-luxury-typography", "family": "Luxury Typography", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|architectural-grid|destinations>team>materials>press>metrics>services>proof|hairline|slab", "industry": "ai-company", "hero": "poster", "navigation": "fullscreen-menu", "layout": "architectural-grid"};

export default function Template0489({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Ai Company");
  const headline = String(content.headline || "Applied AI designed around reliable workflows, measurable quality, and human control.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["AI assistants", "Document intelligence", "Automation", "Evaluation", "Enterprise deployment"];
  const industryLabel = "AI company";
  const serviceNotes = ["Production-ready models with clear input/output contracts and versioned endpoints.", "On-premise deployment available for data-sensitive organisations.", "Model cards and audit trails provided for every inference decision.", "Human-in-the-loop option: AI recommendations, human approvals, logged chain.", "Retraining on your proprietary data with performance benchmarks agreed upfront."];
  const proofPoints = ["EU AI Act compliant", "SOC 2 certified", "Explainability dashboard", "On-prem available"];
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0489" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0489{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0489 *{box-sizing:border-box}
.zp0489 a{color:inherit;text-decoration:none}
.zp0489 h1,.zp0489 h2,.zp0489 h3,.zp0489 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0489 img{max-width:100%;display:block}
.zp0489 button,.zp0489 a{-webkit-tap-highlight-color:transparent}
.zp0489 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0489 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0489 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0489 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0489 .nav.menu details{position:relative}
.zp0489 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0489 .mobileMenu{display:none}
.zp0489 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0489 .eyebrow,.zp0489 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0489 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0489 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0489 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0489 .posterTop,.zp0489 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0489 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0489 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0489 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0489 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0489 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0489 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0489 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0489 .serviceGrid p{color:var(--muted)}
.zp0489 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0489 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0489 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0489 details{border-top:1px solid var(--border);padding:20px 0}
.zp0489 details summary{font-weight:800;cursor:pointer}
.zp0489 details p{color:var(--muted);max-width:70ch}
.zp0489 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0489 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0489 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Rockwell, Courier New, serif;margin-bottom:18px}
.zp0489 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0489 .metrics div{background:var(--bg);padding:30px}
.zp0489 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Rockwell, Courier New, serif;color:var(--primary)}
.zp0489 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0489 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0489 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0489 .awards>div{max-width:800px;margin-left:auto}
.zp0489 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0489 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0489 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0489 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0489 .contact .eyebrow{color:var(--bg)}
.zp0489 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0489 .contactMeta{display:grid;gap:10px}
.zp0489 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-488{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0489 .hero{min-height:auto}
.zp0489 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0489 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0489 .nav nav{display:none}
.zp0489 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0489 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0489 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0489 .mobileMenu nav a{padding:10px 8px}
.zp0489 .hero{grid-template-columns:1fr}
.zp0489 .section,.zp0489 .sectionTitle,.zp0489 .contact{grid-template-columns:1fr}
.zp0489 .teamGrid{grid-template-columns:1fr 1fr}
.zp0489 .metrics{grid-template-columns:1fr 1fr}
.zp0489 .section{display:block}}
@media(max-width:430px){.zp0489{font-size:16px}
.zp0489 .hero,.zp0489 .section,.zp0489 .contact{padding-left:18px;padding-right:18px}
.zp0489 .serviceGrid,.zp0489 .proof,.zp0489 .teamGrid,.zp0489 .metrics,.zp0489 .destinations>div:last-child{grid-template-columns:1fr}
.zp0489 h1{font-size:clamp(42px,14vw,70px)}
.zp0489 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0489 .heroActions a,.zp0489 .primary,.zp0489 .ctaBtn,.zp0489 .btnPrimary,.zp0489 .schedule>a,.zp0489 .newsletter>a{transition:all .2s ease}
.zp0489 .heroActions a:hover,.zp0489 .primary:hover,.zp0489 .ctaBtn:hover,.zp0489 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0489 nav a,.zp0489 .nav a,.zp0489 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0489 nav a:hover,.zp0489 .nav a:hover,.zp0489 .footer a:hover{
  opacity:.65
}
.zp0489 .serviceGrid article,.zp0489 .projectCard,.zp0489 .teamCard,.zp0489 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0489 .serviceGrid article:hover,.zp0489 .projectCard:hover,.zp0489 .teamCard:hover,.zp0489 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0489 *,.zp0489 *::before,.zp0489 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0489 a,.zp0489 button,.zp0489 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Apply now</a></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
