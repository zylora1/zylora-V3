import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0334-architecture-botanical", "family": "Botanical", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|service-catalogue|proof>timeline>hours>credentials>services|circular|warm-editorial", "industry": "architecture", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "service-catalogue"};

export default function Template0334({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Architecture Studio");
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
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0334" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0334{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0334 *{box-sizing:border-box}
.zp0334 a{color:inherit;text-decoration:none}
.zp0334 h1,.zp0334 h2,.zp0334 h3,.zp0334 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0334 img{max-width:100%;display:block}
.zp0334 button,.zp0334 a{-webkit-tap-highlight-color:transparent}
.zp0334 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0334 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0334 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0334 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0334 .nav.cluster{align-items:flex-end}
.zp0334 .mobileMenu{display:none}
.zp0334 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0334 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0334 .eyebrow,.zp0334 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0334 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0334 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0334 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0334 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0334 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0334 .visual,.zp0334 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0334 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0334 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0334 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0334 .heroPhoto{object-fit:cover}
.zp0334 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0334 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0334 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0334 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0334 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0334 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0334 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0334 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0334 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0334 .serviceGrid p{color:var(--muted)}
.zp0334 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0334 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0334 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0334 details{border-top:1px solid var(--border);padding:20px 0}
.zp0334 details summary{font-weight:800;cursor:pointer}
.zp0334 details p{color:var(--muted);max-width:70ch}
.zp0334 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0334 .hours dl{margin:0}
.zp0334 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0334 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0334 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0334 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0334 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0334 .timeline article{padding:20px 0}
.zp0334 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0334 .contact .eyebrow{color:var(--bg)}
.zp0334 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0334 .contactMeta{display:grid;gap:10px}
.zp0334 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0334 .heroCopy{animation:enter-333 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-333{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0334 .hero{min-height:auto}
.zp0334 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0334 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0334 .nav nav{display:none}
.zp0334 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0334 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0334 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0334 .mobileMenu nav a{padding:10px 8px}
.zp0334 .hero,.zp0334 .carouselHero{grid-template-columns:1fr}
.zp0334 .section,.zp0334 .sectionTitle,.zp0334 .hours,.zp0334 .contact{grid-template-columns:1fr}
.zp0334 .section{display:block}}
@media(max-width:430px){.zp0334{font-size:16px}
.zp0334 .hero,.zp0334 .section,.zp0334 .contact{padding-left:18px;padding-right:18px}
.zp0334 .serviceGrid,.zp0334 .proof{grid-template-columns:1fr}
.zp0334 h1{font-size:clamp(42px,14vw,70px)}}

.zp0334 .heroActions a,.zp0334 .primary,.zp0334 .ctaBtn,.zp0334 .btnPrimary,.zp0334 .schedule>a,.zp0334 .newsletter>a{transition:all .2s ease}
.zp0334 .heroActions a:hover,.zp0334 .primary:hover,.zp0334 .ctaBtn:hover,.zp0334 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0334 nav a,.zp0334 .nav a,.zp0334 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0334 nav a:hover,.zp0334 .nav a:hover,.zp0334 .footer a:hover{
  color:var(--primary)
}
.zp0334 .serviceGrid article,.zp0334 .projectCard,.zp0334 .teamCard,.zp0334 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0334 .serviceGrid article:hover,.zp0334 .projectCard:hover,.zp0334 .teamCard:hover,.zp0334 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0334 *,.zp0334 *::before,.zp0334 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0334 a,.zp0334 button,.zp0334 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">33</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
