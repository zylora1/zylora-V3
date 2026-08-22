import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0336-architecture-product-led-saas", "family": "Product-led SaaS", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|stacked-posters|proof>awards>features>collection>testimonial>process>services|heavy-frame|terminal", "industry": "architecture", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "stacked-posters"};

export default function Template0336({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Architecture Studio");
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
  const testimonialName = "Studio Nine client";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0336" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0336{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0336 *{box-sizing:border-box}
.zp0336 a{color:inherit;text-decoration:none}
.zp0336 h1,.zp0336 h2,.zp0336 h3,.zp0336 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0336 img{max-width:100%;display:block}
.zp0336 button,.zp0336 a{-webkit-tap-highlight-color:transparent}
.zp0336 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0336 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0336 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0336 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0336 .nav.centered strong{order:2;font-size:24px}
.zp0336 .nav.centered nav:first-child{order:1}
.zp0336 .nav.centered nav:last-child{order:3}
.zp0336 .mobileMenu{display:none}
.zp0336 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0336 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0336 .eyebrow,.zp0336 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0336 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0336 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0336 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0336 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0336 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0336 .visual,.zp0336 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0336 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0336 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0336 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0336 .heroPhoto{object-fit:cover}
.zp0336 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0336 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0336 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0336 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0336 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0336 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0336 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0336 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0336 .serviceGrid p{color:var(--muted)}
.zp0336 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0336 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0336 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0336 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0336 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0336 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0336 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0336 .testimonial>div{align-self:end}
.zp0336 .testimonial span{display:block;opacity:.7}
.zp0336 details{border-top:1px solid var(--border);padding:20px 0}
.zp0336 details summary{font-weight:800;cursor:pointer}
.zp0336 details p{color:var(--muted);max-width:70ch}
.zp0336 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0336 .features ul{list-style:none;margin:0;padding:0}
.zp0336 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0336 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0336 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0336 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0336 .p1,.zp0336 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0336 .awards>div{max-width:800px;margin-left:auto}
.zp0336 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0336 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0336 .contact .eyebrow{color:var(--bg)}
.zp0336 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0336 .contactMeta{display:grid;gap:10px}
.zp0336 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0336 .heroCopy{animation:enter-335 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-335{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0336 .hero{min-height:auto}
.zp0336 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0336 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0336 .nav nav{display:none}
.zp0336 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0336 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0336 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0336 .mobileMenu nav a{padding:10px 8px}
.zp0336 .hero,.zp0336 .asymHero{grid-template-columns:1fr}
.zp0336 .section,.zp0336 .sectionTitle,.zp0336 .features,.zp0336 .contact{grid-template-columns:1fr}
.zp0336 .testimonial{grid-template-columns:1fr}
.zp0336 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0336 .section{display:block}}
@media(max-width:430px){.zp0336{font-size:16px}
.zp0336 .hero,.zp0336 .section,.zp0336 .contact{padding-left:18px;padding-right:18px}
.zp0336 .serviceGrid,.zp0336 .proof,.zp0336 .collectionGrid{grid-template-columns:1fr}
.zp0336 h1{font-size:clamp(42px,14vw,70px)}}

.zp0336 .heroActions a,.zp0336 .primary,.zp0336 .ctaBtn,.zp0336 .btnPrimary,.zp0336 .schedule>a,.zp0336 .newsletter>a{transition:all .2s ease}
.zp0336 .heroActions a:hover,.zp0336 .primary:hover,.zp0336 .ctaBtn:hover,.zp0336 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0336 nav a,.zp0336 .nav a,.zp0336 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0336 nav a:hover,.zp0336 .nav a:hover,.zp0336 .footer a:hover{
  color:var(--primary)
}
.zp0336 .serviceGrid article,.zp0336 .projectCard,.zp0336 .teamCard,.zp0336 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0336 .serviceGrid article:hover,.zp0336 .projectCard:hover,.zp0336 .teamCard:hover,.zp0336 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.15)
}
@media(prefers-reduced-motion:reduce){.zp0336 *,.zp0336 *::before,.zp0336 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0336 a,.zp0336 button,.zp0336 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">03</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">35</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Product-led SaaS / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
