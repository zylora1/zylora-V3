import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0374-legal-high-contrast", "family": "High Contrast", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|masonry-story|services>awards>features>proof>materials>hours|pill-controls|ceremonial", "industry": "legal", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "masonry-story"};

export default function Template0374({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Law Firm");
  const headline = String(content.headline || "Practical legal advice, clear next steps, and responsive communication.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business law", "Dispute resolution", "Property law", "Employment", "Estate planning"];
  const industryLabel = "Law firm";
  const serviceNotes = ["Fixed-fee options for defined scope matters — clear costs before we begin.", "24h response guarantee on all client communications, not just weekdays.", "Plain-English advice: we translate legal complexity into decisions you can make.", "Video and in-person consultation options across all practice areas.", "Regular matter updates so you're never left wondering where things stand."];
  const proofPoints = ["SRA regulated", "Lexcel accredited", "Legal 500 listed", "No win no fee options"];
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0374" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0374{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0374 *{box-sizing:border-box}
.zp0374 a{color:inherit;text-decoration:none}
.zp0374 h1,.zp0374 h2,.zp0374 h3,.zp0374 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0374 img{max-width:100%;display:block}
.zp0374 button,.zp0374 a{-webkit-tap-highlight-color:transparent}
.zp0374 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0374 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0374 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0374 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0374 .mobileMenu{display:none}
.zp0374 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0374 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0374 .eyebrow,.zp0374 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0374 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0374 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0374 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0374 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0374 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0374 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0374 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0374 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0374 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0374 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0374 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0374 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0374 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0374 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0374 .serviceGrid p{color:var(--muted)}
.zp0374 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0374 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0374 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0374 details{border-top:1px solid var(--border);padding:20px 0}
.zp0374 details summary{font-weight:800;cursor:pointer}
.zp0374 details p{color:var(--muted);max-width:70ch}
.zp0374 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0374 .hours dl{margin:0}
.zp0374 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0374 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0374 .features ul{list-style:none;margin:0;padding:0}
.zp0374 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0374 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0374 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0374 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0374 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0374 .awards>div{max-width:800px;margin-left:auto}
.zp0374 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0374 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0374 .contact .eyebrow{color:var(--bg)}
.zp0374 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0374 .contactMeta{display:grid;gap:10px}
.zp0374 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0374 .heroCopy{animation:enter-373 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-373{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0374 .hero{min-height:auto}
.zp0374 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0374 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0374 .nav nav{display:none}
.zp0374 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0374 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0374 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0374 .mobileMenu nav a{padding:10px 8px}
.zp0374 .hero,.zp0374 .timelineHero{grid-template-columns:1fr}
.zp0374 .section,.zp0374 .sectionTitle,.zp0374 .hours,.zp0374 .features,.zp0374 .contact{grid-template-columns:1fr}
.zp0374 .section{display:block}}
@media(max-width:430px){.zp0374{font-size:16px}
.zp0374 .hero,.zp0374 .section,.zp0374 .contact{padding-left:18px;padding-right:18px}
.zp0374 .serviceGrid,.zp0374 .proof{grid-template-columns:1fr}
.zp0374 h1{font-size:clamp(42px,14vw,70px)}}

.zp0374 .heroActions a,.zp0374 .primary,.zp0374 .ctaBtn,.zp0374 .btnPrimary,.zp0374 .schedule>a,.zp0374 .newsletter>a{transition:all .2s ease}
.zp0374 .heroActions a:hover,.zp0374 .primary:hover,.zp0374 .ctaBtn:hover,.zp0374 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0374 nav a,.zp0374 .nav a,.zp0374 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0374 nav a:hover,.zp0374 .nav a:hover,.zp0374 .footer a:hover{
  color:var(--primary)
}
.zp0374 .serviceGrid article,.zp0374 .projectCard,.zp0374 .teamCard,.zp0374 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0374 .serviceGrid article:hover,.zp0374 .projectCard:hover,.zp0374 .teamCard:hover,.zp0374 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0374 *,.zp0374 *::before,.zp0374 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0374 a,.zp0374 button,.zp0374 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
