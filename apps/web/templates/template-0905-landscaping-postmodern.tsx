import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0905-landscaping-postmodern", "family": "Postmodern", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|schedule-led|values>proof>services>integrations>materials>availability|hairline|friendly", "industry": "landscaping", "hero": "poster", "navigation": "fullscreen-menu", "layout": "schedule-led"};

export default function Template0905({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Landscape Company");
  const headline = String(content.headline || "Outdoor spaces designed for the site, the climate, and how clients actually use them.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Garden design", "Installation", "Maintenance", "Irrigation", "Outdoor lighting"];
  const industryLabel = "Landscape company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Landscape company / Project A", "Landscape company / Project B", "Landscape company / Project C", "Landscape company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Outdoor spaces designed for the site, the climate, and how clients actually use them. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0905" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0905{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0905 *{box-sizing:border-box}
.zp0905 a{color:inherit;text-decoration:none}
.zp0905 h1,.zp0905 h2,.zp0905 h3,.zp0905 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0905 img{max-width:100%;display:block}
.zp0905 button,.zp0905 a{-webkit-tap-highlight-color:transparent}
.zp0905 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0905 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0905 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0905 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0905 .nav.menu details{position:relative}
.zp0905 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0905 .mobileMenu{display:none}
.zp0905 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0905 .eyebrow,.zp0905 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0905 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0905 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0905 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0905 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0905 .posterTop,.zp0905 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0905 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0905 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0905 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0905 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0905 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0905 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0905 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0905 .serviceGrid p{color:var(--muted)}
.zp0905 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0905 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0905 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0905 details{border-top:1px solid var(--border);padding:20px 0}
.zp0905 details summary{font-weight:800;cursor:pointer}
.zp0905 details p{color:var(--muted);max-width:70ch}
.zp0905 .integrations,.zp0905 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0905 .integrations>div,.zp0905 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0905 .integrations b,.zp0905 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0905 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0905 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Trebuchet MS, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0905 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0905 .contact .eyebrow{color:var(--bg)}
.zp0905 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0905 .contactMeta{display:grid;gap:10px}
.zp0905 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-904{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0905 .hero{min-height:auto}
.zp0905 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0905 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0905 .nav nav{display:none}
.zp0905 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0905 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0905 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0905 .mobileMenu nav a{padding:10px 8px}
.zp0905 .hero{grid-template-columns:1fr}
.zp0905 .section,.zp0905 .sectionTitle,.zp0905 .contact{grid-template-columns:1fr}
.zp0905 .section{display:block}}
@media(max-width:430px){.zp0905{font-size:16px}
.zp0905 .hero,.zp0905 .section,.zp0905 .contact{padding-left:18px;padding-right:18px}
.zp0905 .serviceGrid,.zp0905 .proof{grid-template-columns:1fr}
.zp0905 h1{font-size:clamp(42px,14vw,70px)}
.zp0905 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0905 .heroActions a,.zp0905 .primary,.zp0905 .ctaBtn,.zp0905 .btnPrimary,.zp0905 .schedule>a,.zp0905 .newsletter>a{transition:all .2s ease}
.zp0905 .heroActions a:hover,.zp0905 .primary:hover,.zp0905 .ctaBtn:hover,.zp0905 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0905 nav a,.zp0905 .nav a,.zp0905 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0905 nav a:hover,.zp0905 .nav a:hover,.zp0905 .footer a:hover{
  color:var(--primary)
}
.zp0905 .serviceGrid article,.zp0905 .projectCard,.zp0905 .teamCard,.zp0905 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0905 .serviceGrid article:hover,.zp0905 .projectCard:hover,.zp0905 .teamCard:hover,.zp0905 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0905 *,.zp0905 *::before,.zp0905 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0905 a,.zp0905 button,.zp0905 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Call us</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
