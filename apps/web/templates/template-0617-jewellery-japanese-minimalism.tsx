import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0617-jewellery-japanese-minimalism", "family": "Japanese Minimalism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|schedule-led|services>testimonial>collection>pricing>newsletter>proof|hairline|friendly", "industry": "jewellery", "hero": "poster", "navigation": "fullscreen-menu", "layout": "schedule-led"};

export default function Template0617({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Jewellery Studio");
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
  const proofPoints = ["NAJ member", "Hallmarked at Birmingham Assay", "Lifetime warranty on settings", "Conflict-free certification"];
  const testimonial = "They remodelled my grandmother's ring into something I actually wear every day. The craftsmanship is extraordinary.";
  const testimonialName = "Slate client";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0617" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0617{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:0px;--shadow:none;--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0617 *{box-sizing:border-box}
.zp0617 a{color:inherit;text-decoration:none}
.zp0617 h1,.zp0617 h2,.zp0617 h3,.zp0617 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0617 img{max-width:100%;display:block}
.zp0617 button,.zp0617 a{-webkit-tap-highlight-color:transparent}
.zp0617 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0617 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0617 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0617 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0617 .nav.menu details{position:relative}
.zp0617 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0617 .mobileMenu{display:none}
.zp0617 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0617 .eyebrow,.zp0617 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0617 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0617 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0617 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0617 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0617 .posterTop,.zp0617 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0617 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0617 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0617 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0617 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0617 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0617 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0617 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0617 .serviceGrid p{color:var(--muted)}
.zp0617 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0617 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0617 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0617 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0617 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0617 .testimonial>div{align-self:end}
.zp0617 .testimonial span{display:block;opacity:.7}
.zp0617 details{border-top:1px solid var(--border);padding:20px 0}
.zp0617 details summary{font-weight:800;cursor:pointer}
.zp0617 details p{color:var(--muted);max-width:70ch}
.zp0617 .priceRows{border-top:1px solid var(--border)}
.zp0617 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0617 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0617 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0617 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0617 .p1,.zp0617 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0617 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0617 .contact .eyebrow{color:var(--bg)}
.zp0617 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0617 .contactMeta{display:grid;gap:10px}
.zp0617 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0617 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0617 .sectionTitle h2{font-weight:400}
@keyframes enter-616{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0617 .hero{min-height:auto}
.zp0617 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0617 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0617 .nav nav{display:none}
.zp0617 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0617 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0617 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0617 .mobileMenu nav a{padding:10px 8px}
.zp0617 .hero{grid-template-columns:1fr}
.zp0617 .section,.zp0617 .sectionTitle,.zp0617 .contact{grid-template-columns:1fr}
.zp0617 .testimonial{grid-template-columns:1fr}
.zp0617 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0617 .section{display:block}}
@media(max-width:430px){.zp0617{font-size:16px}
.zp0617 .hero,.zp0617 .section,.zp0617 .contact{padding-left:18px;padding-right:18px}
.zp0617 .serviceGrid,.zp0617 .proof,.zp0617 .collectionGrid{grid-template-columns:1fr}
.zp0617 h1{font-size:clamp(42px,14vw,70px)}
.zp0617 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0617 .priceRows article{grid-template-columns:1fr}}

.zp0617 .heroActions a,.zp0617 .primary,.zp0617 .ctaBtn,.zp0617 .btnPrimary,.zp0617 .schedule>a,.zp0617 .newsletter>a{transition:all .2s ease}
.zp0617 .heroActions a:hover,.zp0617 .primary:hover,.zp0617 .ctaBtn:hover,.zp0617 .btnPrimary:hover{
  opacity:.75
}
.zp0617 nav a,.zp0617 .nav a,.zp0617 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0617 nav a:hover,.zp0617 .nav a:hover,.zp0617 .footer a:hover{
  opacity:.6
}
.zp0617 .serviceGrid article,.zp0617 .projectCard,.zp0617 .teamCard,.zp0617 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0617 .serviceGrid article:hover,.zp0617 .projectCard:hover,.zp0617 .teamCard:hover,.zp0617 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0617 *,.zp0617 *::before,.zp0617 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0617 a,.zp0617 button,.zp0617 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
