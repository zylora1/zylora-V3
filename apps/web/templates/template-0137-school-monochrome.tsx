import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0137-school-monochrome", "family": "Monochrome", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|gallery-index|proof>materials>services>team>testimonial>story|hairline|friendly", "industry": "school", "hero": "poster", "navigation": "fullscreen-menu", "layout": "gallery-index"};

export default function Template0137({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const storyQuote = "\u201cA rigorous, caring learning environment where curiosity and character grow together.\u201d";
  const storyBody = "Vale School is presented as a real working independent school, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const testimonialName = "Slate client";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0137" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0137{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0137 *{box-sizing:border-box}
.zp0137 a{color:inherit;text-decoration:none}
.zp0137 h1,.zp0137 h2,.zp0137 h3,.zp0137 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0137 img{max-width:100%;display:block}
.zp0137 button,.zp0137 a{-webkit-tap-highlight-color:transparent}
.zp0137 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0137 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0137 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0137 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0137 .nav.menu details{position:relative}
.zp0137 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0137 .mobileMenu{display:none}
.zp0137 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0137 .eyebrow,.zp0137 .sectionTitle>span,.zp0137 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0137 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0137 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0137 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0137 .posterTop,.zp0137 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0137 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0137 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0137 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0137 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0137 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0137 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0137 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0137 .serviceGrid p{color:var(--muted)}
.zp0137 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0137 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0137 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0137 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0137 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0137 .story p{color:var(--muted)}
.zp0137 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0137 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0137 .testimonial>div{align-self:end}
.zp0137 .testimonial span{display:block;opacity:.7}
.zp0137 details{border-top:1px solid var(--border);padding:20px 0}
.zp0137 details summary{font-weight:800;cursor:pointer}
.zp0137 details p{color:var(--muted);max-width:70ch}
.zp0137 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0137 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0137 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Trebuchet MS, Arial, sans-serif;margin-bottom:18px}
.zp0137 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0137 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0137 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0137 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0137 .contact .eyebrow{color:var(--bg)}
.zp0137 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0137 .contactMeta{display:grid;gap:10px}
.zp0137 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-136{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0137 .hero{min-height:auto}
.zp0137 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0137 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0137 .nav nav{display:none}
.zp0137 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0137 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0137 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0137 .mobileMenu nav a{padding:10px 8px}
.zp0137 .hero{grid-template-columns:1fr}
.zp0137 .section,.zp0137 .sectionTitle,.zp0137 .story,.zp0137 .contact{grid-template-columns:1fr}
.zp0137 .testimonial{grid-template-columns:1fr}
.zp0137 .teamGrid{grid-template-columns:1fr 1fr}
.zp0137 .section{display:block}}
@media(max-width:430px){.zp0137{font-size:16px}
.zp0137 .hero,.zp0137 .section,.zp0137 .contact{padding-left:18px;padding-right:18px}
.zp0137 .serviceGrid,.zp0137 .proof,.zp0137 .teamGrid{grid-template-columns:1fr}
.zp0137 h1{font-size:clamp(42px,14vw,70px)}
.zp0137 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0137 .heroActions a,.zp0137 .primary,.zp0137 .ctaBtn,.zp0137 .btnPrimary,.zp0137 .schedule>a,.zp0137 .newsletter>a{transition:all .2s ease}
.zp0137 .heroActions a:hover,.zp0137 .primary:hover,.zp0137 .ctaBtn:hover,.zp0137 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0137 nav a,.zp0137 .nav a,.zp0137 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0137 nav a:hover,.zp0137 .nav a:hover,.zp0137 .footer a:hover{
  color:var(--secondary)
}
.zp0137 .serviceGrid article,.zp0137 .projectCard,.zp0137 .teamCard,.zp0137 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0137 .serviceGrid article:hover,.zp0137 .projectCard:hover,.zp0137 .teamCard:hover,.zp0137 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0137 *,.zp0137 *::before,.zp0137 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0137 a,.zp0137 button,.zp0137 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Send an enquiry</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
