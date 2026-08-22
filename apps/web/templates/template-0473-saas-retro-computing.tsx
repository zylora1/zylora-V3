import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0473-saas-retro-computing", "family": "Retro Computing", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|schedule-led|features>pricing>proof>menu>services>research|hairline|friendly", "industry": "saas", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "schedule-led"};

export default function Template0473({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry B2B Saas");
  const headline = String(content.headline || "A focused product that removes repetitive work and makes the next action obvious.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Workflow automation", "Analytics", "Integrations", "Team collaboration", "Security"];
  const industryLabel = "B2B SaaS";
  const serviceNotes = ["30-day free trial with full feature access — no credit card required to start.", "API and webhook integrations: connect your existing tools in under an hour.", "Data export in any format, any time — your data is yours, unconditionally.", "Dedicated onboarding specialist for teams over 10 users, included in all plans.", "99.95% uptime SLA with status page and incident communication in real-time."];
  const proofPoints = ["SOC 2 Type II certified", "GDPR compliant", "99.95% uptime SLA", "ISO 27001 certified"];
  const testimonial = "Setup took 40 minutes. We replaced three separate tools and the team actually uses it — adoption was near-instant.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0473" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0473{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0473 *{box-sizing:border-box}
.zp0473 a{color:inherit;text-decoration:none}
.zp0473 h1,.zp0473 h2,.zp0473 h3,.zp0473 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0473 img{max-width:100%;display:block}
.zp0473 button,.zp0473 a{-webkit-tap-highlight-color:transparent}
.zp0473 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0473 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0473 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0473 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0473 .nav.menu details{position:relative}
.zp0473 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0473 .mobileMenu{display:none}
.zp0473 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0473 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0473 .eyebrow,.zp0473 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0473 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0473 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0473 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0473 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0473 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0473 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0473 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0473 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0473 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0473 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0473 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0473 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0473 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0473 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0473 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0473 .serviceGrid p{color:var(--muted)}
.zp0473 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0473 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0473 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0473 details{border-top:1px solid var(--border);padding:20px 0}
.zp0473 details summary{font-weight:800;cursor:pointer}
.zp0473 details p{color:var(--muted);max-width:70ch}
.zp0473 .priceRows{border-top:1px solid var(--border)}
.zp0473 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0473 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0473 .features ul{list-style:none;margin:0;padding:0}
.zp0473 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0473 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0473 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0473 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0473 .researchRows{max-width:900px;margin-left:auto}
.zp0473 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0473 .contact .eyebrow{color:var(--bg)}
.zp0473 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0473 .contactMeta{display:grid;gap:10px}
.zp0473 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0473{image-rendering:pixelated}
.zp0473 *{border-radius:0!important}
.zp0473 .heroCopy{animation:enter-472 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-472{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0473 .hero{min-height:auto}
.zp0473 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0473 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0473 .nav nav{display:none}
.zp0473 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0473 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0473 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0473 .mobileMenu nav a{padding:10px 8px}
.zp0473 .hero,.zp0473 .archiveHero{grid-template-columns:1fr}
.zp0473 .section,.zp0473 .sectionTitle,.zp0473 .features,.zp0473 .contact{grid-template-columns:1fr}
.zp0473 .section{display:block}}
@media(max-width:430px){.zp0473{font-size:16px}
.zp0473 .hero,.zp0473 .section,.zp0473 .contact{padding-left:18px;padding-right:18px}
.zp0473 .serviceGrid,.zp0473 .proof{grid-template-columns:1fr}
.zp0473 h1{font-size:clamp(42px,14vw,70px)}
.zp0473 .priceRows article{grid-template-columns:1fr}}

.zp0473 .heroActions a,.zp0473 .primary,.zp0473 .ctaBtn,.zp0473 .btnPrimary,.zp0473 .schedule>a,.zp0473 .newsletter>a{transition:all .2s ease}
.zp0473 .heroActions a:hover,.zp0473 .primary:hover,.zp0473 .ctaBtn:hover,.zp0473 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0473 nav a,.zp0473 .nav a,.zp0473 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0473 nav a:hover,.zp0473 .nav a:hover,.zp0473 .footer a:hover{
  color:var(--primary)
}
.zp0473 .serviceGrid article,.zp0473 .projectCard,.zp0473 .teamCard,.zp0473 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0473 .serviceGrid article:hover,.zp0473 .projectCard:hover,.zp0473 .teamCard:hover,.zp0473 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0473 *,.zp0473 *::before,.zp0473 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0473 a,.zp0473 button,.zp0473 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
