import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1001-professional-kinetic-typography", "family": "Kinetic Typography", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|gallery-index|press>location>schedule>services>proof>awards|hairline|friendly", "industry": "professional", "hero": "poster", "navigation": "fullscreen-menu", "layout": "gallery-index"};

export default function Template1001({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Professional Services");
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
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp1001" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1001{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1001 *{box-sizing:border-box}
.zp1001 a{color:inherit;text-decoration:none}
.zp1001 h1,.zp1001 h2,.zp1001 h3,.zp1001 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp1001 img{max-width:100%;display:block}
.zp1001 button,.zp1001 a{-webkit-tap-highlight-color:transparent}
.zp1001 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1001 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp1001 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp1001 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1001 .nav.menu details{position:relative}
.zp1001 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp1001 .mobileMenu{display:none}
.zp1001 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1001 .eyebrow,.zp1001 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1001 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1001 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp1001 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp1001 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp1001 .posterTop,.zp1001 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp1001 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1001 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1001 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1001 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp1001 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1001 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp1001 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1001 .serviceGrid p{color:var(--muted)}
.zp1001 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1001 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1001 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1001 details{border-top:1px solid var(--border);padding:20px 0}
.zp1001 details summary{font-weight:800;cursor:pointer}
.zp1001 details p{color:var(--muted);max-width:70ch}
.zp1001 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp1001 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp1001 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp1001 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp1001 .awards>div{max-width:800px;margin-left:auto}
.zp1001 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp1001 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1001 .contact .eyebrow{color:var(--bg)}
.zp1001 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1001 .contactMeta{display:grid;gap:10px}
.zp1001 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-1000{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp1001 .hero{min-height:auto}
.zp1001 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1001 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1001 .nav nav{display:none}
.zp1001 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1001 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1001 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1001 .mobileMenu nav a{padding:10px 8px}
.zp1001 .hero{grid-template-columns:1fr}
.zp1001 .section,.zp1001 .sectionTitle,.zp1001 .location,.zp1001 .contact{grid-template-columns:1fr}
.zp1001 .section{display:block}}
@media(max-width:430px){.zp1001{font-size:16px}
.zp1001 .hero,.zp1001 .section,.zp1001 .contact{padding-left:18px;padding-right:18px}
.zp1001 .serviceGrid,.zp1001 .proof{grid-template-columns:1fr}
.zp1001 h1{font-size:clamp(42px,14vw,70px)}
.zp1001 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp1001 .heroActions a,.zp1001 .primary,.zp1001 .ctaBtn,.zp1001 .btnPrimary,.zp1001 .schedule>a,.zp1001 .newsletter>a{transition:all .2s ease}
.zp1001 .heroActions a:hover,.zp1001 .primary:hover,.zp1001 .ctaBtn:hover,.zp1001 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp1001 nav a,.zp1001 .nav a,.zp1001 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1001 nav a:hover,.zp1001 .nav a:hover,.zp1001 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp1001 .serviceGrid article,.zp1001 .projectCard,.zp1001 .teamCard,.zp1001 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1001 .serviceGrid article:hover,.zp1001 .projectCard:hover,.zp1001 .teamCard:hover,.zp1001 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp1001 *,.zp1001 *::before,.zp1001 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1001 a,.zp1001 button,.zp1001 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
