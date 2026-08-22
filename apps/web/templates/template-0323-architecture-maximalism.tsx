import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0323-architecture-maximalism", "family": "Maximalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|asymmetric-5-7|proof>features>services>collection>research>integrations|inset-panel|editorial-serif", "industry": "architecture", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "asymmetric-5-7"};

export default function Template0323({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Architecture Studio");
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
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0323" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0323{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0323 *{box-sizing:border-box}
.zp0323 a{color:inherit;text-decoration:none}
.zp0323 h1,.zp0323 h2,.zp0323 h3,.zp0323 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0323 img{max-width:100%;display:block}
.zp0323 button,.zp0323 a{-webkit-tap-highlight-color:transparent}
.zp0323 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0323 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0323 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0323 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0323 .mobileMenu{display:none}
.zp0323 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0323 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0323 .eyebrow,.zp0323 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0323 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0323 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0323 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0323 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0323 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0323 .visual,.zp0323 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0323 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0323 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0323 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0323 .heroPhoto{object-fit:cover}
.zp0323 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0323 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0323 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0323 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0323 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0323 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0323 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0323 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0323 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0323 .serviceGrid p{color:var(--muted)}
.zp0323 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0323 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0323 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0323 details{border-top:1px solid var(--border);padding:20px 0}
.zp0323 details summary{font-weight:800;cursor:pointer}
.zp0323 details p{color:var(--muted);max-width:70ch}
.zp0323 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0323 .features ul{list-style:none;margin:0;padding:0}
.zp0323 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0323 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0323 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0323 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0323 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0323 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0323 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0323 .p1,.zp0323 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0323 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0323 .researchRows{max-width:900px;margin-left:auto}
.zp0323 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0323 .contact .eyebrow{color:var(--bg)}
.zp0323 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0323 .contactMeta{display:grid;gap:10px}
.zp0323 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0323 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0323 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-18deg)}
.zp0323 .heroCopy{animation:enter-322 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-322{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0323 .hero{min-height:auto}
.zp0323 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0323 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0323 .nav nav{display:none}
.zp0323 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0323 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0323 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0323 .mobileMenu nav a{padding:10px 8px}
.zp0323 .hero,.zp0323 .diagonalHero{grid-template-columns:1fr}
.zp0323 .section,.zp0323 .sectionTitle,.zp0323 .features,.zp0323 .contact{grid-template-columns:1fr}
.zp0323 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0323 .section{display:block}}
@media(max-width:430px){.zp0323{font-size:16px}
.zp0323 .hero,.zp0323 .section,.zp0323 .contact{padding-left:18px;padding-right:18px}
.zp0323 .serviceGrid,.zp0323 .proof,.zp0323 .collectionGrid{grid-template-columns:1fr}
.zp0323 h1{font-size:clamp(42px,14vw,70px)}}

.zp0323 .heroActions a,.zp0323 .primary,.zp0323 .ctaBtn,.zp0323 .btnPrimary,.zp0323 .schedule>a,.zp0323 .newsletter>a{transition:all .2s ease}
.zp0323 .heroActions a:hover,.zp0323 .primary:hover,.zp0323 .ctaBtn:hover,.zp0323 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0323 nav a,.zp0323 .nav a,.zp0323 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0323 nav a:hover,.zp0323 .nav a:hover,.zp0323 .footer a:hover{
  color:var(--primary)
}
.zp0323 .serviceGrid article,.zp0323 .projectCard,.zp0323 .teamCard,.zp0323 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0323 .serviceGrid article:hover,.zp0323 .projectCard:hover,.zp0323 .teamCard:hover,.zp0323 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0323 *,.zp0323 *::before,.zp0323 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0323 a,.zp0323 button,.zp0323 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">22</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
