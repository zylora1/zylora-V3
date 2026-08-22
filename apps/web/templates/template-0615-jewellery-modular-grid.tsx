import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0615-jewellery-modular-grid", "family": "Modular Grid", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|story-first|proof>services>menu>story>metrics>press>timeline|asymmetric-radius|geometric", "industry": "jewellery", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "story-first"};

export default function Template0615({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Jewellery Studio");
  const headline = String(content.headline || "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Fine jewellery", "Engagement", "Bespoke", "Repairs", "Private viewings"];
  const industryLabel = "Jewellery studio";
  const serviceNotes = ["Bespoke commissions from sketch to setting — your brief, your story, our craft.", "Ethically sourced gemstones with Kimberley Process certification as standard.", "In-house goldsmith: repairs, resizing, and remounting while you wait in most cases.", "Valuation service for insurance and probate, issued on headed paper.", "Engraving available on most pieces — personal inscriptions completed in-house."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["NAJ member", "Hallmarked at Birmingham Assay", "Lifetime warranty on settings", "Conflict-free certification"];
  const storyQuote = "\u201cFine pieces designed for daily wear, milestones, and a lifetime beyond the first moment.\u201d";
  const storyBody = "Lumen Jewellery Studio is presented as a real working jewellery studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They remodelled my grandmother's ring into something I actually wear every day. The craftsmanship is extraordinary.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0615" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0615{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0615 *{box-sizing:border-box}
.zp0615 a{color:inherit;text-decoration:none}
.zp0615 h1,.zp0615 h2,.zp0615 h3,.zp0615 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0615 img{max-width:100%;display:block}
.zp0615 button,.zp0615 a{-webkit-tap-highlight-color:transparent}
.zp0615 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0615 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0615 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0615 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0615 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0615 .nav.index nav{justify-content:flex-end}
.zp0615 .mobileMenu{display:none}
.zp0615 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0615 .eyebrow,.zp0615 .sectionTitle>span,.zp0615 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0615 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0615 .minimalHero{display:block;min-height:74vh}
.zp0615 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0615 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0615 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0615 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0615 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0615 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0615 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0615 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0615 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0615 .serviceGrid p{color:var(--muted)}
.zp0615 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0615 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0615 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0615 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0615 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0615 .story p{color:var(--muted)}
.zp0615 details{border-top:1px solid var(--border);padding:20px 0}
.zp0615 details summary{font-weight:800;cursor:pointer}
.zp0615 details p{color:var(--muted);max-width:70ch}
.zp0615 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0615 .metrics div{background:var(--bg);padding:30px}
.zp0615 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Century Gothic, Avenir, sans-serif;color:var(--primary)}
.zp0615 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0615 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0615 .timeline article{padding:20px 0}
.zp0615 .awards>div{max-width:800px;margin-left:auto}
.zp0615 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0615 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0615 .contact .eyebrow{color:var(--bg)}
.zp0615 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0615 .contactMeta{display:grid;gap:10px}
.zp0615 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-614{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0615 .hero{min-height:auto}
.zp0615 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0615 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0615 .nav nav{display:none}
.zp0615 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0615 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0615 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0615 .mobileMenu nav a{padding:10px 8px}
.zp0615 .hero{grid-template-columns:1fr}
.zp0615 .section,.zp0615 .sectionTitle,.zp0615 .story,.zp0615 .contact{grid-template-columns:1fr}
.zp0615 .metrics{grid-template-columns:1fr 1fr}
.zp0615 .section{display:block}}
@media(max-width:430px){.zp0615{font-size:16px}
.zp0615 .hero,.zp0615 .section,.zp0615 .contact{padding-left:18px;padding-right:18px}
.zp0615 .serviceGrid,.zp0615 .proof,.zp0615 .metrics{grid-template-columns:1fr}
.zp0615 h1{font-size:clamp(42px,14vw,70px)}
.zp0615 .minimalFoot{grid-template-columns:1fr}
.zp0615 .nav.index{grid-template-columns:1fr auto}
.zp0615 .nav.index>span{display:none}}

.zp0615 .heroActions a,.zp0615 .primary,.zp0615 .ctaBtn,.zp0615 .btnPrimary,.zp0615 .schedule>a,.zp0615 .newsletter>a{transition:all .2s ease}
.zp0615 .heroActions a:hover,.zp0615 .primary:hover,.zp0615 .ctaBtn:hover,.zp0615 .btnPrimary:hover{
  opacity:.85
}
.zp0615 nav a,.zp0615 .nav a,.zp0615 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0615 nav a:hover,.zp0615 .nav a:hover,.zp0615 .footer a:hover{
  color:var(--primary)
}
.zp0615 .serviceGrid article,.zp0615 .projectCard,.zp0615 .teamCard,.zp0615 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0615 .serviceGrid article:hover,.zp0615 .projectCard:hover,.zp0615 .teamCard:hover,.zp0615 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0615 *,.zp0615 *::before,.zp0615 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0615 a,.zp0615 button,.zp0615 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Apply now</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modular Grid / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
