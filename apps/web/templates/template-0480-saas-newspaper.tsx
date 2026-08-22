import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0480-saas-newspaper", "family": "Newspaper", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|stacked-posters|proof>pricing>metrics>services>packages>comparison>features|heavy-frame|terminal", "industry": "saas", "hero": "data-led", "navigation": "centered-logo", "layout": "stacked-posters"};

export default function Template0480({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow B2B Saas");
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
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0480" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0480{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0480 *{box-sizing:border-box}
.zp0480 a{color:inherit;text-decoration:none}
.zp0480 h1,.zp0480 h2,.zp0480 h3,.zp0480 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0480 img{max-width:100%;display:block}
.zp0480 button,.zp0480 a{-webkit-tap-highlight-color:transparent}
.zp0480 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0480 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0480 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0480 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0480 .nav.centered strong{order:2;font-size:24px}
.zp0480 .nav.centered nav:first-child{order:1}
.zp0480 .nav.centered nav:last-child{order:3}
.zp0480 .mobileMenu{display:none}
.zp0480 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0480 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0480 .eyebrow,.zp0480 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0480 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0480 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0480 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0480 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0480 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0480 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0480 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0480 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0480 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0480 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0480 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0480 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0480 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0480 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0480 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0480 .serviceGrid p{color:var(--muted)}
.zp0480 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0480 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0480 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0480 details{border-top:1px solid var(--border);padding:20px 0}
.zp0480 details summary{font-weight:800;cursor:pointer}
.zp0480 details p{color:var(--muted);max-width:70ch}
.zp0480 .priceRows{border-top:1px solid var(--border)}
.zp0480 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0480 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0480 .features ul{list-style:none;margin:0;padding:0}
.zp0480 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0480 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0480 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0480 .metrics div{background:var(--bg);padding:30px}
.zp0480 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Lucida Console, Monaco, monospace;color:var(--primary)}
.zp0480 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0480 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0480 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0480 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0480 .packages>.sectionTitle{grid-column:1/-1}
.zp0480 .packages article{padding:24px;border:1px solid var(--border)}
.zp0480 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0480 .contact .eyebrow{color:var(--bg)}
.zp0480 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0480 .contactMeta{display:grid;gap:10px}
.zp0480 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0480{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0480 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0480 .heroCopy p{columns:2;column-gap:30px}
.zp0480 .heroCopy{animation:enter-479 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-479{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0480 .hero{min-height:auto}
.zp0480 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0480 .proof{grid-template-columns:1fr 1fr}
.zp0480 .packages{grid-template-columns:1fr 1fr}
.zp0480 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0480 .nav nav{display:none}
.zp0480 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0480 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0480 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0480 .mobileMenu nav a{padding:10px 8px}
.zp0480 .hero,.zp0480 .dataHero{grid-template-columns:1fr}
.zp0480 .section,.zp0480 .sectionTitle,.zp0480 .features,.zp0480 .contact{grid-template-columns:1fr}
.zp0480 .metrics{grid-template-columns:1fr 1fr}
.zp0480 .section{display:block}}
@media(max-width:430px){.zp0480{font-size:16px}
.zp0480 .hero,.zp0480 .section,.zp0480 .contact{padding-left:18px;padding-right:18px}
.zp0480 .serviceGrid,.zp0480 .proof,.zp0480 .metrics,.zp0480 .packages,.zp0480 .compareGrid{grid-template-columns:1fr}
.zp0480 h1{font-size:clamp(42px,14vw,70px)}
.zp0480 .priceRows article{grid-template-columns:1fr}}

.zp0480 .heroActions a,.zp0480 .primary,.zp0480 .ctaBtn,.zp0480 .btnPrimary,.zp0480 .schedule>a,.zp0480 .newsletter>a{transition:all .2s ease}
.zp0480 .heroActions a:hover,.zp0480 .primary:hover,.zp0480 .ctaBtn:hover,.zp0480 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0480 nav a,.zp0480 .nav a,.zp0480 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0480 nav a:hover,.zp0480 .nav a:hover,.zp0480 .footer a:hover{
  text-decoration:underline
}
.zp0480 .serviceGrid article,.zp0480 .projectCard,.zp0480 .teamCard,.zp0480 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0480 .serviceGrid article:hover,.zp0480 .projectCard:hover,.zp0480 .teamCard:hover,.zp0480 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0480 *,.zp0480 *::before,.zp0480 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0480 a,.zp0480 button,.zp0480 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
