import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0136-school-modernist", "family": "Modernist", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|research-led|comparison>metrics>proof>services>values|micro-radius|brutal-display", "industry": "school", "hero": "monumental-type", "navigation": "corner-dock", "layout": "research-led"};

export default function Template0136({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0136" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0136{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0136 *{box-sizing:border-box}
.zp0136 a{color:inherit;text-decoration:none}
.zp0136 h1,.zp0136 h2,.zp0136 h3,.zp0136 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0136 img{max-width:100%;display:block}
.zp0136 button,.zp0136 a{-webkit-tap-highlight-color:transparent}
.zp0136 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0136 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0136 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0136 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0136 .mobileMenu{display:none}
.zp0136 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0136 .eyebrow,.zp0136 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0136 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0136 .monumentalHero{display:block}
.zp0136 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0136 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0136 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0136 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0136 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0136 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0136 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0136 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0136 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0136 .serviceGrid p{color:var(--muted)}
.zp0136 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0136 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0136 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0136 details{border-top:1px solid var(--border);padding:20px 0}
.zp0136 details summary{font-weight:800;cursor:pointer}
.zp0136 details p{color:var(--muted);max-width:70ch}
.zp0136 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0136 .metrics div{background:var(--bg);padding:30px}
.zp0136 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Arial Black, Arial, sans-serif;color:var(--primary)}
.zp0136 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Black, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0136 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0136 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0136 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0136 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0136 .contact .eyebrow{color:var(--bg)}
.zp0136 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0136 .contactMeta{display:grid;gap:10px}
.zp0136 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-135{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0136 .hero{min-height:auto}
.zp0136 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0136 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0136 .nav nav{display:none}
.zp0136 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0136 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0136 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0136 .mobileMenu nav a{padding:10px 8px}
.zp0136 .hero{grid-template-columns:1fr}
.zp0136 .section,.zp0136 .sectionTitle,.zp0136 .contact{grid-template-columns:1fr}
.zp0136 .metrics{grid-template-columns:1fr 1fr}
.zp0136 .section{display:block}}
@media(max-width:430px){.zp0136{font-size:16px}
.zp0136 .hero,.zp0136 .section,.zp0136 .contact{padding-left:18px;padding-right:18px}
.zp0136 .serviceGrid,.zp0136 .proof,.zp0136 .metrics,.zp0136 .compareGrid{grid-template-columns:1fr}
.zp0136 h1{font-size:clamp(42px,14vw,70px)}
.zp0136 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0136 .monumentalBody{grid-template-columns:1fr}}

.zp0136 .heroActions a,.zp0136 .primary,.zp0136 .ctaBtn,.zp0136 .btnPrimary,.zp0136 .schedule>a,.zp0136 .newsletter>a{transition:all .2s ease}
.zp0136 .heroActions a:hover,.zp0136 .primary:hover,.zp0136 .ctaBtn:hover,.zp0136 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0136 nav a,.zp0136 .nav a,.zp0136 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0136 nav a:hover,.zp0136 .nav a:hover,.zp0136 .footer a:hover{
  color:var(--primary)
}
.zp0136 .serviceGrid article,.zp0136 .projectCard,.zp0136 .teamCard,.zp0136 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0136 .serviceGrid article:hover,.zp0136 .projectCard:hover,.zp0136 .teamCard:hover,.zp0136 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0136 *,.zp0136 *::before,.zp0136 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0136 a,.zp0136 button,.zp0136 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">View selected work</a></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
