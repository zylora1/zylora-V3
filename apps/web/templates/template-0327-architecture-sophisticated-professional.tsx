import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0327-architecture-sophisticated-professional", "family": "Sophisticated Professional", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|story-first|services>process>proof>team>products>metrics>programmes|asymmetric-radius|geometric", "industry": "architecture", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "story-first"};

export default function Template0327({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Architecture Studio");
  const headline = String(content.headline || "Architecture shaped by context, material, daylight, and how people actually live.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential design", "Commercial projects", "Planning", "Interiors", "Feasibility studies"];
  const industryLabel = "Architecture studio";
  const serviceNotes = ["Concept to planning permission service: we handle the technical and navigate the bureaucratic.", "New build and conversion projects for residential, commercial, and mixed-use clients.", "Planning appeal specialists with a strong track record on complex applications.", "BIM-capable studio: full 3D modelling and clash detection before a brick is laid.", "Post-occupancy evaluation included — we track how buildings perform, not just how they look."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ARB and RIBA chartered", "RIBA Award winners", "£2M PI insurance", "Sustainable design lead"];
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp0327" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0327{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0327 *{box-sizing:border-box}
.zp0327 a{color:inherit;text-decoration:none}
.zp0327 h1,.zp0327 h2,.zp0327 h3,.zp0327 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0327 img{max-width:100%;display:block}
.zp0327 button,.zp0327 a{-webkit-tap-highlight-color:transparent}
.zp0327 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0327 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0327 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0327 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0327 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0327 .nav.index nav{justify-content:flex-end}
.zp0327 .mobileMenu{display:none}
.zp0327 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0327 .eyebrow,.zp0327 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0327 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0327 .minimalHero{display:block;min-height:74vh}
.zp0327 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0327 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0327 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0327 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0327 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0327 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0327 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0327 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0327 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0327 .serviceGrid p{color:var(--muted)}
.zp0327 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0327 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0327 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0327 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0327 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0327 details{border-top:1px solid var(--border);padding:20px 0}
.zp0327 details summary{font-weight:800;cursor:pointer}
.zp0327 details p{color:var(--muted);max-width:70ch}
.zp0327 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0327 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0327 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Century Gothic, Avenir, sans-serif;margin-bottom:18px}
.zp0327 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0327 .metrics div{background:var(--bg);padding:30px}
.zp0327 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Century Gothic, Avenir, sans-serif;color:var(--primary)}
.zp0327 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0327 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0327 .p1,.zp0327 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0327 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0327 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0327 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0327 .contact .eyebrow{color:var(--bg)}
.zp0327 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0327 .contactMeta{display:grid;gap:10px}
.zp0327 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-326{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0327 .hero{min-height:auto}
.zp0327 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0327 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0327 .nav nav{display:none}
.zp0327 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0327 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0327 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0327 .mobileMenu nav a{padding:10px 8px}
.zp0327 .hero{grid-template-columns:1fr}
.zp0327 .section,.zp0327 .sectionTitle,.zp0327 .contact{grid-template-columns:1fr}
.zp0327 .teamGrid{grid-template-columns:1fr 1fr}
.zp0327 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0327 .metrics{grid-template-columns:1fr 1fr}
.zp0327 .section{display:block}}
@media(max-width:430px){.zp0327{font-size:16px}
.zp0327 .hero,.zp0327 .section,.zp0327 .contact{padding-left:18px;padding-right:18px}
.zp0327 .serviceGrid,.zp0327 .proof,.zp0327 .teamGrid,.zp0327 .collectionGrid,.zp0327 .metrics,.zp0327 .programmes>div:last-child{grid-template-columns:1fr}
.zp0327 h1{font-size:clamp(42px,14vw,70px)}
.zp0327 .minimalFoot{grid-template-columns:1fr}
.zp0327 .nav.index{grid-template-columns:1fr auto}
.zp0327 .nav.index>span{display:none}}

.zp0327 .heroActions a,.zp0327 .primary,.zp0327 .ctaBtn,.zp0327 .btnPrimary,.zp0327 .schedule>a,.zp0327 .newsletter>a{transition:all .2s ease}
.zp0327 .heroActions a:hover,.zp0327 .primary:hover,.zp0327 .ctaBtn:hover,.zp0327 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0327 nav a,.zp0327 .nav a,.zp0327 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0327 nav a:hover,.zp0327 .nav a:hover,.zp0327 .footer a:hover{
  color:var(--primary)
}
.zp0327 .serviceGrid article,.zp0327 .projectCard,.zp0327 .teamCard,.zp0327 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0327 .serviceGrid article:hover,.zp0327 .projectCard:hover,.zp0327 .teamCard:hover,.zp0327 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0327 *,.zp0327 *::before,.zp0327 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0327 a,.zp0327 button,.zp0327 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
