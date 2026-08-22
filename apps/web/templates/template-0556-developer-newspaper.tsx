import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0556-developer-newspaper", "family": "Newspaper", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|single-column-longform|availability>awards>services>schedule>proof|notched|sports-editorial", "industry": "developer", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "single-column-longform"};

export default function Template0556({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Developer Portfolio");
  const headline = String(content.headline || "A focused record of shipped software, technical decisions, and measurable impact.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product work", "Open source", "Technical writing", "Speaking", "Consulting"];
  const industryLabel = "Developer portfolio";
  const serviceNotes = ["Full-stack capability: from database architecture to accessible frontend interfaces.", "Open-source contributors with real community credibility and public track record.", "Performance-first: Lighthouse scores reviewed and targets agreed before launch.", "Accessibility to WCAG 2.2 AA as a baseline requirement, not an optional extra.", "Retainer options for ongoing development, features, and maintenance."];
  const proofPoints = ["Core Web Vitals: all green", "WCAG 2.2 AA standard", "GitHub: 2,000+ contributions", "8-year average tenure"];
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0556" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0556{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0556 *{box-sizing:border-box}
.zp0556 a{color:inherit;text-decoration:none}
.zp0556 h1,.zp0556 h2,.zp0556 h3,.zp0556 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0556 img{max-width:100%;display:block}
.zp0556 button,.zp0556 a{-webkit-tap-highlight-color:transparent}
.zp0556 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0556 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0556 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0556 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0556 .mobileMenu{display:none}
.zp0556 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0556 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0556 .eyebrow,.zp0556 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0556 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0556 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0556 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0556 .heroActions a,.zp0556 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0556 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0556 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0556 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0556 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0556 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0556 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0556 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0556 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0556 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0556 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0556 .serviceGrid p{color:var(--muted)}
.zp0556 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0556 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0556 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0556 details{border-top:1px solid var(--border);padding:20px 0}
.zp0556 details summary{font-weight:800;cursor:pointer}
.zp0556 details p{color:var(--muted);max-width:70ch}
.zp0556 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0556 .awards>div{max-width:800px;margin-left:auto}
.zp0556 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0556 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0556 .contact .eyebrow{color:var(--bg)}
.zp0556 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0556 .contactMeta{display:grid;gap:10px}
.zp0556 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0556 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0556 .sectionTitle{display:block}
.zp0556{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0556 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0556 .heroCopy p{columns:2;column-gap:30px}
.zp0556 .heroCopy{animation:enter-555 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-555{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0556 .hero{min-height:auto}
.zp0556 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0556 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0556 .nav nav{display:none}
.zp0556 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0556 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0556 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0556 .mobileMenu nav a{padding:10px 8px}
.zp0556 .hero,.zp0556 .navLedHero{grid-template-columns:1fr}
.zp0556 .section,.zp0556 .sectionTitle,.zp0556 .contact{grid-template-columns:1fr}
.zp0556 .section{display:block}}
@media(max-width:430px){.zp0556{font-size:16px}
.zp0556 .hero,.zp0556 .section,.zp0556 .contact{padding-left:18px;padding-right:18px}
.zp0556 .serviceGrid,.zp0556 .proof{grid-template-columns:1fr}
.zp0556 h1{font-size:clamp(42px,14vw,70px)}}

.zp0556 .heroActions a,.zp0556 .primary,.zp0556 .ctaBtn,.zp0556 .btnPrimary,.zp0556 .schedule>a,.zp0556 .newsletter>a{transition:all .2s ease}
.zp0556 .heroActions a:hover,.zp0556 .primary:hover,.zp0556 .ctaBtn:hover,.zp0556 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0556 nav a,.zp0556 .nav a,.zp0556 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0556 nav a:hover,.zp0556 .nav a:hover,.zp0556 .footer a:hover{
  text-decoration:underline
}
.zp0556 .serviceGrid article,.zp0556 .projectCard,.zp0556 .teamCard,.zp0556 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0556 .serviceGrid article:hover,.zp0556 .projectCard:hover,.zp0556 .teamCard:hover,.zp0556 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0556 *,.zp0556 *::before,.zp0556 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0556 a,.zp0556 button,.zp0556 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
