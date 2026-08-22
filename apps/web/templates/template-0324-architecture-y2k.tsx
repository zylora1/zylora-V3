import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0324-architecture-y2k", "family": "Y2K", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|catalogue-table|pricing>services>research>proof>case-study>packages>products|cut-corners|literary", "industry": "architecture", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "catalogue-table"};

export default function Template0324({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Architecture Studio");
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
  const proofPoints = ["ARB and RIBA chartered", "RIBA Award winners", "£2M PI insurance", "Sustainable design lead"];
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0324" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0324{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0324 *{box-sizing:border-box}
.zp0324 a{color:inherit;text-decoration:none}
.zp0324 h1,.zp0324 h2,.zp0324 h3,.zp0324 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0324 img{max-width:100%;display:block}
.zp0324 button,.zp0324 a{-webkit-tap-highlight-color:transparent}
.zp0324 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0324 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0324 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0324 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0324 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0324 .mobileMenu{display:none}
.zp0324 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0324 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0324 .eyebrow,.zp0324 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0324 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0324 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0324 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0324 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0324 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0324 .visual,.zp0324 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0324 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0324 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0324 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0324 .heroPhoto{object-fit:cover}
.zp0324 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0324 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0324 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0324 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0324 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0324 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0324 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0324 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0324 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0324 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0324 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0324 .serviceGrid p{color:var(--muted)}
.zp0324 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0324 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0324 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0324 details{border-top:1px solid var(--border);padding:20px 0}
.zp0324 details summary{font-weight:800;cursor:pointer}
.zp0324 details p{color:var(--muted);max-width:70ch}
.zp0324 .priceRows{border-top:1px solid var(--border)}
.zp0324 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0324 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0324 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0324 .projects article:nth-child(2){transform:translateY(32px)}
.zp0324 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0324 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0324 .p1,.zp0324 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0324 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0324 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0324 .packages>.sectionTitle{grid-column:1/-1}
.zp0324 .packages article{padding:24px;border:1px solid var(--border)}
.zp0324 .researchRows{max-width:900px;margin-left:auto}
.zp0324 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0324 .contact .eyebrow{color:var(--bg)}
.zp0324 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0324 .contactMeta{display:grid;gap:10px}
.zp0324 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0324 .heroCopy{animation:enter-323 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-323{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0324 .hero{min-height:auto}
.zp0324 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0324 .proof{grid-template-columns:1fr 1fr}
.zp0324 .packages{grid-template-columns:1fr 1fr}
.zp0324 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0324 .nav nav{display:none}
.zp0324 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0324 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0324 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0324 .mobileMenu nav a{padding:10px 8px}
.zp0324 .hero,.zp0324 .bentoHero{grid-template-columns:1fr}
.zp0324 .section,.zp0324 .sectionTitle,.zp0324 .contact{grid-template-columns:1fr}
.zp0324 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0324 .projects .projectGrid{grid-template-columns:1fr}
.zp0324 .projects article:nth-child(2){transform:none}
.zp0324 .section{display:block}}
@media(max-width:430px){.zp0324{font-size:16px}
.zp0324 .hero,.zp0324 .section,.zp0324 .contact{padding-left:18px;padding-right:18px}
.zp0324 .serviceGrid,.zp0324 .proof,.zp0324 .collectionGrid,.zp0324 .packages{grid-template-columns:1fr}
.zp0324 h1{font-size:clamp(42px,14vw,70px)}
.zp0324 .priceRows article{grid-template-columns:1fr}}

.zp0324 .heroActions a,.zp0324 .primary,.zp0324 .ctaBtn,.zp0324 .btnPrimary,.zp0324 .schedule>a,.zp0324 .newsletter>a{transition:all .2s ease}
.zp0324 .heroActions a:hover,.zp0324 .primary:hover,.zp0324 .ctaBtn:hover,.zp0324 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.03)
}
.zp0324 nav a,.zp0324 .nav a,.zp0324 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0324 nav a:hover,.zp0324 .nav a:hover,.zp0324 .footer a:hover{
  color:var(--primary)
}
.zp0324 .serviceGrid article,.zp0324 .projectCard,.zp0324 .teamCard,.zp0324 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0324 .serviceGrid article:hover,.zp0324 .projectCard:hover,.zp0324 .teamCard:hover,.zp0324 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0324 *,.zp0324 *::before,.zp0324 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0324 a,.zp0324 button,.zp0324 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">23</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Y2K / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
