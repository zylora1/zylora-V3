import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0744-portfolio-modernist", "family": "Modernist", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|property-led|services>menu>features>collection>proof>metrics>press|micro-radius|terminal", "industry": "portfolio", "hero": "monumental-type", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0744({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0744" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0744{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0744 *{box-sizing:border-box}
.zp0744 a{color:inherit;text-decoration:none}
.zp0744 h1,.zp0744 h2,.zp0744 h3,.zp0744 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0744 img{max-width:100%;display:block}
.zp0744 button,.zp0744 a{-webkit-tap-highlight-color:transparent}
.zp0744 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0744 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0744 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0744 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0744 .mobileMenu{display:none}
.zp0744 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0744 .eyebrow,.zp0744 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0744 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0744 .monumentalHero{display:block}
.zp0744 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0744 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0744 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0744 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0744 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0744 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0744 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0744 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0744 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0744 .serviceGrid p{color:var(--muted)}
.zp0744 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0744 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0744 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0744 details{border-top:1px solid var(--border);padding:20px 0}
.zp0744 details summary{font-weight:800;cursor:pointer}
.zp0744 details p{color:var(--muted);max-width:70ch}
.zp0744 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0744 .features ul{list-style:none;margin:0;padding:0}
.zp0744 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0744 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0744 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0744 .metrics div{background:var(--bg);padding:30px}
.zp0744 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Lucida Console, Monaco, monospace;color:var(--primary)}
.zp0744 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0744 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0744 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0744 .p1,.zp0744 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0744 .awards>div{max-width:800px;margin-left:auto}
.zp0744 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0744 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0744 .contact .eyebrow{color:var(--bg)}
.zp0744 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0744 .contactMeta{display:grid;gap:10px}
.zp0744 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-743{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0744 .hero{min-height:auto}
.zp0744 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0744 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0744 .nav nav{display:none}
.zp0744 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0744 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0744 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0744 .mobileMenu nav a{padding:10px 8px}
.zp0744 .hero{grid-template-columns:1fr}
.zp0744 .section,.zp0744 .sectionTitle,.zp0744 .features,.zp0744 .contact{grid-template-columns:1fr}
.zp0744 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0744 .metrics{grid-template-columns:1fr 1fr}
.zp0744 .section{display:block}}
@media(max-width:430px){.zp0744{font-size:16px}
.zp0744 .hero,.zp0744 .section,.zp0744 .contact{padding-left:18px;padding-right:18px}
.zp0744 .serviceGrid,.zp0744 .proof,.zp0744 .collectionGrid,.zp0744 .metrics{grid-template-columns:1fr}
.zp0744 h1{font-size:clamp(42px,14vw,70px)}
.zp0744 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0744 .monumentalBody{grid-template-columns:1fr}}

.zp0744 .heroActions a,.zp0744 .primary,.zp0744 .ctaBtn,.zp0744 .btnPrimary,.zp0744 .schedule>a,.zp0744 .newsletter>a{transition:all .2s ease}
.zp0744 .heroActions a:hover,.zp0744 .primary:hover,.zp0744 .ctaBtn:hover,.zp0744 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0744 nav a,.zp0744 .nav a,.zp0744 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0744 nav a:hover,.zp0744 .nav a:hover,.zp0744 .footer a:hover{
  color:var(--primary)
}
.zp0744 .serviceGrid article,.zp0744 .projectCard,.zp0744 .teamCard,.zp0744 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0744 .serviceGrid article:hover,.zp0744 .projectCard:hover,.zp0744 .teamCard:hover,.zp0744 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0744 *,.zp0744 *::before,.zp0744 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0744 a,.zp0744 button,.zp0744 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Register now</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
