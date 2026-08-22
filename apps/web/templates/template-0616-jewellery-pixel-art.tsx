import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0616-jewellery-pixel-art", "family": "Pixel Art", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|offset-cards|proof>research>schedule>services>case-study|micro-radius|brutal-display", "industry": "jewellery", "hero": "monumental-type", "navigation": "corner-dock", "layout": "offset-cards"};

export default function Template0616({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Jewellery Studio");
  const headline = String(content.headline || "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Fine jewellery", "Engagement", "Bespoke", "Repairs", "Private viewings"];
  const serviceNotes = ["Bespoke commissions from sketch to setting — your brief, your story, our craft.", "Ethically sourced gemstones with Kimberley Process certification as standard.", "In-house goldsmith: repairs, resizing, and remounting while you wait in most cases.", "Valuation service for insurance and probate, issued on headed paper.", "Engraving available on most pieces — personal inscriptions completed in-house."];
  const proofPoints = ["NAJ member", "Hallmarked at Birmingham Assay", "Lifetime warranty on settings", "Conflict-free certification"];
  const testimonial = "They remodelled my grandmother's ring into something I actually wear every day. The craftsmanship is extraordinary.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0616" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0616{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0616 *{box-sizing:border-box}
.zp0616 a{color:inherit;text-decoration:none}
.zp0616 h1,.zp0616 h2,.zp0616 h3,.zp0616 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0616 img{max-width:100%;display:block}
.zp0616 button,.zp0616 a{-webkit-tap-highlight-color:transparent}
.zp0616 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0616 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0616 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0616 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0616 .mobileMenu{display:none}
.zp0616 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0616 .eyebrow,.zp0616 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0616 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0616 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0616 .monumentalHero{display:block}
.zp0616 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0616 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0616 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0616 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0616 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0616 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0616 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0616 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0616 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0616 .serviceGrid p{color:var(--muted)}
.zp0616 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0616 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0616 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0616 details{border-top:1px solid var(--border);padding:20px 0}
.zp0616 details summary{font-weight:800;cursor:pointer}
.zp0616 details p{color:var(--muted);max-width:70ch}
.zp0616 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0616 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0616 .projects article:nth-child(2){transform:translateY(32px)}
.zp0616 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0616 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0616 .researchRows{max-width:900px;margin-left:auto}
.zp0616 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0616 .contact .eyebrow{color:var(--bg)}
.zp0616 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0616 .contactMeta{display:grid;gap:10px}
.zp0616 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0616 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0616{image-rendering:pixelated}
.zp0616 *{border-radius:0!important}
@keyframes enter-615{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0616 .hero{min-height:auto}
.zp0616 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0616 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0616 .nav nav{display:none}
.zp0616 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0616 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0616 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0616 .mobileMenu nav a{padding:10px 8px}
.zp0616 .hero{grid-template-columns:1fr}
.zp0616 .section,.zp0616 .sectionTitle,.zp0616 .contact{grid-template-columns:1fr}
.zp0616 .projects .projectGrid{grid-template-columns:1fr}
.zp0616 .projects article:nth-child(2){transform:none}
.zp0616 .section{display:block}}
@media(max-width:430px){.zp0616{font-size:16px}
.zp0616 .hero,.zp0616 .section,.zp0616 .contact{padding-left:18px;padding-right:18px}
.zp0616 .serviceGrid,.zp0616 .proof{grid-template-columns:1fr}
.zp0616 h1{font-size:clamp(42px,14vw,70px)}
.zp0616 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0616 .monumentalBody{grid-template-columns:1fr}}

.zp0616 .heroActions a,.zp0616 .primary,.zp0616 .ctaBtn,.zp0616 .btnPrimary,.zp0616 .schedule>a,.zp0616 .newsletter>a{transition:all .2s ease}
.zp0616 .heroActions a:hover,.zp0616 .primary:hover,.zp0616 .ctaBtn:hover,.zp0616 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0616 nav a,.zp0616 .nav a,.zp0616 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0616 nav a:hover,.zp0616 .nav a:hover,.zp0616 .footer a:hover{
  color:var(--primary)
}
.zp0616 .serviceGrid article,.zp0616 .projectCard,.zp0616 .teamCard,.zp0616 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0616 .serviceGrid article:hover,.zp0616 .projectCard:hover,.zp0616 .teamCard:hover,.zp0616 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0616 *,.zp0616 *::before,.zp0616 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0616 a,.zp0616 button,.zp0616 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Start free</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
