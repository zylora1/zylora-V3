import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0999-professional-futurism", "family": "Futurism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|timeline-narrative|values>awards>packages>proof>research>availability>services|asymmetric-radius|geometric", "industry": "professional", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "timeline-narrative"};

export default function Template0999({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Professional Services");
  const headline = String(content.headline || "Senior expertise delivered with clear scope, useful communication, and practical outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Advisory", "Assessment", "Implementation", "Retainers", "Workshops"];
  const industryLabel = "Professional services";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0999" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0999{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0999 *{box-sizing:border-box}
.zp0999 a{color:inherit;text-decoration:none}
.zp0999 h1,.zp0999 h2,.zp0999 h3,.zp0999 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0999 img{max-width:100%;display:block}
.zp0999 button,.zp0999 a{-webkit-tap-highlight-color:transparent}
.zp0999 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0999 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0999 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0999 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0999 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0999 .nav.index nav{justify-content:flex-end}
.zp0999 .mobileMenu{display:none}
.zp0999 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0999 .eyebrow,.zp0999 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0999 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0999 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0999 .minimalHero{display:block;min-height:74vh}
.zp0999 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0999 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0999 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0999 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0999 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0999 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0999 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0999 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0999 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0999 .serviceGrid p{color:var(--muted)}
.zp0999 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0999 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0999 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0999 details{border-top:1px solid var(--border);padding:20px 0}
.zp0999 details summary{font-weight:800;cursor:pointer}
.zp0999 details p{color:var(--muted);max-width:70ch}
.zp0999 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0999 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0999 .awards>div{max-width:800px;margin-left:auto}
.zp0999 .awards p,.zp0999 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0999 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0999 .packages>.sectionTitle{grid-column:1/-1}
.zp0999 .packages article{padding:24px;border:1px solid var(--border)}
.zp0999 .researchRows{max-width:900px;margin-left:auto}
.zp0999 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0999 .contact .eyebrow{color:var(--bg)}
.zp0999 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0999 .contactMeta{display:grid;gap:10px}
.zp0999 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-998{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0999 .hero{min-height:auto}
.zp0999 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0999 .proof{grid-template-columns:1fr 1fr}
.zp0999 .packages{grid-template-columns:1fr 1fr}
.zp0999 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0999 .nav nav{display:none}
.zp0999 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0999 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0999 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0999 .mobileMenu nav a{padding:10px 8px}
.zp0999 .hero{grid-template-columns:1fr}
.zp0999 .section,.zp0999 .sectionTitle,.zp0999 .contact{grid-template-columns:1fr}
.zp0999 .section{display:block}}
@media(max-width:430px){.zp0999{font-size:16px}
.zp0999 .hero,.zp0999 .section,.zp0999 .contact{padding-left:18px;padding-right:18px}
.zp0999 .serviceGrid,.zp0999 .proof,.zp0999 .packages{grid-template-columns:1fr}
.zp0999 h1{font-size:clamp(42px,14vw,70px)}
.zp0999 .minimalFoot{grid-template-columns:1fr}
.zp0999 .nav.index{grid-template-columns:1fr auto}
.zp0999 .nav.index>span{display:none}}

.zp0999 .heroActions a,.zp0999 .primary,.zp0999 .ctaBtn,.zp0999 .btnPrimary,.zp0999 .schedule>a,.zp0999 .newsletter>a{transition:all .2s ease}
.zp0999 .heroActions a:hover,.zp0999 .primary:hover,.zp0999 .ctaBtn:hover,.zp0999 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0999 nav a,.zp0999 .nav a,.zp0999 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0999 nav a:hover,.zp0999 .nav a:hover,.zp0999 .footer a:hover{
  color:var(--primary)
}
.zp0999 .serviceGrid article,.zp0999 .projectCard,.zp0999 .teamCard,.zp0999 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0999 .serviceGrid article:hover,.zp0999 .projectCard:hover,.zp0999 .teamCard:hover,.zp0999 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0999 *,.zp0999 *::before,.zp0999 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0999 a,.zp0999 button,.zp0999 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
