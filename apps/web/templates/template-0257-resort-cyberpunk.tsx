import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0257-resort-cyberpunk", "family": "Cyberpunk", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|schedule-led|testimonial>proof>destinations>availability>services>metrics|square-editorial|friendly", "industry": "resort", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "schedule-led"};

export default function Template0257({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const testimonialName = "Cedar client";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0257" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0257{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0257 *{box-sizing:border-box}
.zp0257 a{color:inherit;text-decoration:none}
.zp0257 h1,.zp0257 h2,.zp0257 h3,.zp0257 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0257 img{max-width:100%;display:block}
.zp0257 button,.zp0257 a{-webkit-tap-highlight-color:transparent}
.zp0257 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0257 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0257 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0257 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0257 .mobileMenu{display:none}
.zp0257 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0257 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0257 .eyebrow,.zp0257 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0257 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0257 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0257 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0257 .heroActions a,.zp0257 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0257 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0257 .typeOnly{grid-template-columns:1fr .28fr}
.zp0257 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0257 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0257 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0257 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0257 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0257 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0257 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0257 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0257 .serviceGrid p{color:var(--muted)}
.zp0257 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0257 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0257 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0257 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0257 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0257 .testimonial>div{align-self:end}
.zp0257 .testimonial span{display:block;opacity:.7}
.zp0257 details{border-top:1px solid var(--border);padding:20px 0}
.zp0257 details summary{font-weight:800;cursor:pointer}
.zp0257 details p{color:var(--muted);max-width:70ch}
.zp0257 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0257 .metrics div{background:var(--bg);padding:30px}
.zp0257 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Trebuchet MS, Arial, sans-serif;color:var(--primary)}
.zp0257 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0257 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0257 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0257 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0257 .contact .eyebrow{color:var(--bg)}
.zp0257 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0257 .contactMeta{display:grid;gap:10px}
.zp0257 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0257 .heroCopy{animation:enter-256 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-256{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0257 .hero{min-height:auto}
.zp0257 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0257 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0257 .nav nav{display:none}
.zp0257 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0257 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0257 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0257 .mobileMenu nav a{padding:10px 8px}
.zp0257 .hero{grid-template-columns:1fr}
.zp0257 .section,.zp0257 .sectionTitle,.zp0257 .contact{grid-template-columns:1fr}
.zp0257 .testimonial{grid-template-columns:1fr}
.zp0257 .metrics{grid-template-columns:1fr 1fr}
.zp0257 .section{display:block}}
@media(max-width:430px){.zp0257{font-size:16px}
.zp0257 .hero,.zp0257 .section,.zp0257 .contact{padding-left:18px;padding-right:18px}
.zp0257 .serviceGrid,.zp0257 .proof,.zp0257 .metrics,.zp0257 .destinations>div:last-child{grid-template-columns:1fr}
.zp0257 h1{font-size:clamp(42px,14vw,70px)}}

.zp0257 .heroActions a,.zp0257 .primary,.zp0257 .ctaBtn,.zp0257 .btnPrimary,.zp0257 .schedule>a,.zp0257 .newsletter>a{transition:all .2s ease}
.zp0257 .heroActions a:hover,.zp0257 .primary:hover,.zp0257 .ctaBtn:hover,.zp0257 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0257 nav a,.zp0257 .nav a,.zp0257 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0257 nav a:hover,.zp0257 .nav a:hover,.zp0257 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0257 .serviceGrid article,.zp0257 .projectCard,.zp0257 .teamCard,.zp0257 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0257 .serviceGrid article:hover,.zp0257 .projectCard:hover,.zp0257 .teamCard:hover,.zp0257 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0257 *,.zp0257 *::before,.zp0257 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0257 a,.zp0257 button,.zp0257 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
