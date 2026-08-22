import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0448-consulting-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|single-column-longform|schedule>features>proof>services>research|heavy-frame|brutal-display", "industry": "consulting", "hero": "data-led", "navigation": "centered-logo", "layout": "single-column-longform"};

export default function Template0448({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Consulting Practice");
  const headline = String(content.headline || "Senior-level thinking paired with practical implementation and measurable outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strategy", "Operations", "Transformation", "Research", "Implementation support"];
  const industryLabel = "Consulting practice";
  const serviceNotes = ["Diagnostic phase first — we understand the problem before proposing a solution.", "Delivered by senior practitioners, not junior analysts relabelled as consultants.", "Fixed-scope engagements with clear deliverables and measurable success criteria.", "Knowledge transfer built into every project so client teams can sustain the change.", "Follow-through reviews at 6 and 12 months to confirm outcomes are holding."];
  const proofPoints = ["Average client ROI: 340%", "Senior-only delivery team", "NDA and IP protection", "30-day exit clause"];
  const testimonial = "They spotted a structural issue in our operations that three previous consultancies had missed. Implemented and sustained.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Consulting practice / Project A", "Consulting practice / Project B", "Consulting practice / Project C", "Consulting practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior-level thinking paired with practical implementation and measurable outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0448" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0448{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0448 *{box-sizing:border-box}
.zp0448 a{color:inherit;text-decoration:none}
.zp0448 h1,.zp0448 h2,.zp0448 h3,.zp0448 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0448 img{max-width:100%;display:block}
.zp0448 button,.zp0448 a{-webkit-tap-highlight-color:transparent}
.zp0448 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0448 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0448 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0448 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0448 .nav.centered strong{order:2;font-size:24px}
.zp0448 .nav.centered nav:first-child{order:1}
.zp0448 .nav.centered nav:last-child{order:3}
.zp0448 .mobileMenu{display:none}
.zp0448 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0448 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0448 .eyebrow,.zp0448 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0448 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0448 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0448 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0448 .heroActions a,.zp0448 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0448 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0448 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0448 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0448 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0448 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0448 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0448 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0448 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0448 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0448 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0448 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0448 .serviceGrid p{color:var(--muted)}
.zp0448 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0448 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0448 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0448 details{border-top:1px solid var(--border);padding:20px 0}
.zp0448 details summary{font-weight:800;cursor:pointer}
.zp0448 details p{color:var(--muted);max-width:70ch}
.zp0448 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0448 .features ul{list-style:none;margin:0;padding:0}
.zp0448 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0448 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0448 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0448 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0448 .researchRows{max-width:900px;margin-left:auto}
.zp0448 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0448 .contact .eyebrow{color:var(--bg)}
.zp0448 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0448 .contactMeta{display:grid;gap:10px}
.zp0448 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0448 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0448 .sectionTitle{display:block}
.zp0448 .heroCopy{animation:enter-447 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-447{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0448 .hero{min-height:auto}
.zp0448 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0448 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0448 .nav nav{display:none}
.zp0448 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0448 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0448 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0448 .mobileMenu nav a{padding:10px 8px}
.zp0448 .hero,.zp0448 .dataHero{grid-template-columns:1fr}
.zp0448 .section,.zp0448 .sectionTitle,.zp0448 .features,.zp0448 .contact{grid-template-columns:1fr}
.zp0448 .section{display:block}}
@media(max-width:430px){.zp0448{font-size:16px}
.zp0448 .hero,.zp0448 .section,.zp0448 .contact{padding-left:18px;padding-right:18px}
.zp0448 .serviceGrid,.zp0448 .proof{grid-template-columns:1fr}
.zp0448 h1{font-size:clamp(42px,14vw,70px)}}

.zp0448 .heroActions a,.zp0448 .primary,.zp0448 .ctaBtn,.zp0448 .btnPrimary,.zp0448 .schedule>a,.zp0448 .newsletter>a{transition:all .2s ease}
.zp0448 .heroActions a:hover,.zp0448 .primary:hover,.zp0448 .ctaBtn:hover,.zp0448 .btnPrimary:hover{
  opacity:.8
}
.zp0448 nav a,.zp0448 .nav a,.zp0448 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0448 nav a:hover,.zp0448 .nav a:hover,.zp0448 .footer a:hover{
  color:var(--primary)
}
.zp0448 .serviceGrid article,.zp0448 .projectCard,.zp0448 .teamCard,.zp0448 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0448 .serviceGrid article:hover,.zp0448 .projectCard:hover,.zp0448 .teamCard:hover,.zp0448 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0448 *,.zp0448 *::before,.zp0448 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0448 a,.zp0448 button,.zp0448 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
