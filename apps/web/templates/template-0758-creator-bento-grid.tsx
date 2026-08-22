import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0758-creator-bento-grid", "family": "Bento Grid", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|full-bleed-chapters|awards>hours>proof>services>research>location|pill-controls|ceremonial", "industry": "creator", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "full-bleed-chapters"};

export default function Template0758({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Creator Brand");
  const headline = String(content.headline || "A clear home base for work, audience, collaborations, and owned distribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Latest work", "Partnerships", "Newsletter", "Resources", "Speaking"];
  const industryLabel = "Creator brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creator brand / Project A", "Creator brand / Project B", "Creator brand / Project C", "Creator brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A clear home base for work, audience, collaborations, and owned distribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0758" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0758{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0758 *{box-sizing:border-box}
.zp0758 a{color:inherit;text-decoration:none}
.zp0758 h1,.zp0758 h2,.zp0758 h3,.zp0758 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0758 img{max-width:100%;display:block}
.zp0758 button,.zp0758 a{-webkit-tap-highlight-color:transparent}
.zp0758 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0758 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0758 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0758 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0758 .mobileMenu{display:none}
.zp0758 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0758 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0758 .eyebrow,.zp0758 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0758 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0758 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0758 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0758 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0758 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0758 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0758 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0758 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0758 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0758 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0758 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0758 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0758 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0758 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0758 .serviceGrid p{color:var(--muted)}
.zp0758 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0758 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0758 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0758 details{border-top:1px solid var(--border);padding:20px 0}
.zp0758 details summary{font-weight:800;cursor:pointer}
.zp0758 details p{color:var(--muted);max-width:70ch}
.zp0758 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0758 .hours dl{margin:0}
.zp0758 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0758 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0758 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0758 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0758 .awards>div{max-width:800px;margin-left:auto}
.zp0758 .awards p,.zp0758 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0758 .researchRows{max-width:900px;margin-left:auto}
.zp0758 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0758 .contact .eyebrow{color:var(--bg)}
.zp0758 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0758 .contactMeta{display:grid;gap:10px}
.zp0758 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0758 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0758 .heroCopy{animation:enter-757 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-757{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0758 .hero{min-height:auto}
.zp0758 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0758 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0758 .nav nav{display:none}
.zp0758 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0758 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0758 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0758 .mobileMenu nav a{padding:10px 8px}
.zp0758 .hero,.zp0758 .timelineHero{grid-template-columns:1fr}
.zp0758 .section,.zp0758 .sectionTitle,.zp0758 .hours,.zp0758 .location,.zp0758 .contact{grid-template-columns:1fr}
.zp0758 .section{display:block}}
@media(max-width:430px){.zp0758{font-size:16px}
.zp0758 .hero,.zp0758 .section,.zp0758 .contact{padding-left:18px;padding-right:18px}
.zp0758 .serviceGrid,.zp0758 .proof{grid-template-columns:1fr}
.zp0758 h1{font-size:clamp(42px,14vw,70px)}}

.zp0758 .heroActions a,.zp0758 .primary,.zp0758 .ctaBtn,.zp0758 .btnPrimary,.zp0758 .schedule>a,.zp0758 .newsletter>a{transition:all .2s ease}
.zp0758 .heroActions a:hover,.zp0758 .primary:hover,.zp0758 .ctaBtn:hover,.zp0758 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0758 nav a,.zp0758 .nav a,.zp0758 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0758 nav a:hover,.zp0758 .nav a:hover,.zp0758 .footer a:hover{
  color:var(--primary)
}
.zp0758 .serviceGrid article,.zp0758 .projectCard,.zp0758 .teamCard,.zp0758 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0758 .serviceGrid article:hover,.zp0758 .projectCard:hover,.zp0758 .teamCard:hover,.zp0758 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0758 *,.zp0758 *::before,.zp0758 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0758 a,.zp0758 button,.zp0758 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bento Grid / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
