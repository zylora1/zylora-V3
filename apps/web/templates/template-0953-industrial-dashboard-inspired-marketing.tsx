import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0953-industrial-dashboard-inspired-marketing", "family": "Dashboard-inspired Marketing", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|case-study-led|team>pricing>proof>destinations>credentials>services|hairline|friendly", "industry": "industrial", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "case-study-led"};

export default function Template0953({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Industrial Supplier");
  const headline = String(content.headline || "Technical products, practical documentation, and responsive support for critical operations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Equipment", "Parts", "Engineering support", "Maintenance", "Procurement"];
  const industryLabel = "Industrial supplier";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Industrial supplier / Project A", "Industrial supplier / Project B", "Industrial supplier / Project C", "Industrial supplier / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Technical products, practical documentation, and responsive support for critical operations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0953" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0953{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0953 *{box-sizing:border-box}
.zp0953 a{color:inherit;text-decoration:none}
.zp0953 h1,.zp0953 h2,.zp0953 h3,.zp0953 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0953 img{max-width:100%;display:block}
.zp0953 button,.zp0953 a{-webkit-tap-highlight-color:transparent}
.zp0953 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0953 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0953 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0953 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0953 .nav.menu details{position:relative}
.zp0953 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0953 .mobileMenu{display:none}
.zp0953 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0953 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0953 .eyebrow,.zp0953 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0953 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0953 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0953 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0953 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0953 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0953 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0953 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0953 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0953 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0953 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0953 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0953 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0953 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0953 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0953 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0953 .serviceGrid p{color:var(--muted)}
.zp0953 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0953 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0953 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0953 details{border-top:1px solid var(--border);padding:20px 0}
.zp0953 details summary{font-weight:800;cursor:pointer}
.zp0953 details p{color:var(--muted);max-width:70ch}
.zp0953 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0953 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0953 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Trebuchet MS, Arial, sans-serif;margin-bottom:18px}
.zp0953 .priceRows{border-top:1px solid var(--border)}
.zp0953 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0953 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0953 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0953 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0953 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0953 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0953 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0953 .contact .eyebrow{color:var(--bg)}
.zp0953 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0953 .contactMeta{display:grid;gap:10px}
.zp0953 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0953 .heroCopy{animation:enter-952 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-952{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0953 .hero{min-height:auto}
.zp0953 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0953 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0953 .nav nav{display:none}
.zp0953 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0953 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0953 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0953 .mobileMenu nav a{padding:10px 8px}
.zp0953 .hero,.zp0953 .archiveHero{grid-template-columns:1fr}
.zp0953 .section,.zp0953 .sectionTitle,.zp0953 .contact{grid-template-columns:1fr}
.zp0953 .teamGrid{grid-template-columns:1fr 1fr}
.zp0953 .section{display:block}}
@media(max-width:430px){.zp0953{font-size:16px}
.zp0953 .hero,.zp0953 .section,.zp0953 .contact{padding-left:18px;padding-right:18px}
.zp0953 .serviceGrid,.zp0953 .proof,.zp0953 .teamGrid,.zp0953 .destinations>div:last-child{grid-template-columns:1fr}
.zp0953 h1{font-size:clamp(42px,14vw,70px)}
.zp0953 .priceRows article{grid-template-columns:1fr}}

.zp0953 .heroActions a,.zp0953 .primary,.zp0953 .ctaBtn,.zp0953 .btnPrimary,.zp0953 .schedule>a,.zp0953 .newsletter>a{transition:all .2s ease}
.zp0953 .heroActions a:hover,.zp0953 .primary:hover,.zp0953 .ctaBtn:hover,.zp0953 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0953 nav a,.zp0953 .nav a,.zp0953 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0953 nav a:hover,.zp0953 .nav a:hover,.zp0953 .footer a:hover{
  color:var(--primary)
}
.zp0953 .serviceGrid article,.zp0953 .projectCard,.zp0953 .teamCard,.zp0953 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0953 .serviceGrid article:hover,.zp0953 .projectCard:hover,.zp0953 .teamCard:hover,.zp0953 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0953 *,.zp0953 *::before,.zp0953 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0953 a,.zp0953 button,.zp0953 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dashboard-inspired Marketing / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
