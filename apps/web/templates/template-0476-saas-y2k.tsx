import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0476-saas-y2k", "family": "Y2K", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|dashboard-story|pricing>process>proof>services>metrics>story|notched|product-ui", "industry": "saas", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "dashboard-story"};

export default function Template0476({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm B2B Saas");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["SOC 2 Type II certified", "GDPR compliant", "99.95% uptime SLA", "ISO 27001 certified"];
  const storyQuote = "\u201cA focused product that removes repetitive work and makes the next action obvious.\u201d";
  const storyBody = "Elm B2B Saas is presented as a real working b2b saas, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Setup took 40 minutes. We replaced three separate tools and the team actually uses it — adoption was near-instant.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0476" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0476{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0476 *{box-sizing:border-box}
.zp0476 a{color:inherit;text-decoration:none}
.zp0476 h1,.zp0476 h2,.zp0476 h3,.zp0476 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0476 img{max-width:100%;display:block}
.zp0476 button,.zp0476 a{-webkit-tap-highlight-color:transparent}
.zp0476 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0476 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0476 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0476 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0476 .mobileMenu{display:none}
.zp0476 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0476 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0476 .eyebrow,.zp0476 .sectionTitle>span,.zp0476 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0476 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0476 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0476 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0476 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0476 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0476 .mapHero{grid-template-columns:1fr 1fr}
.zp0476 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0476 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0476 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0476 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0476 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0476 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0476 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0476 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0476 .serviceGrid p{color:var(--muted)}
.zp0476 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0476 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0476 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0476 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0476 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0476 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0476 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0476 .story p{color:var(--muted)}
.zp0476 details{border-top:1px solid var(--border);padding:20px 0}
.zp0476 details summary{font-weight:800;cursor:pointer}
.zp0476 details p{color:var(--muted);max-width:70ch}
.zp0476 .priceRows{border-top:1px solid var(--border)}
.zp0476 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0476 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0476 .metrics div{background:var(--bg);padding:30px}
.zp0476 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Segoe UI, Arial, sans-serif;color:var(--primary)}
.zp0476 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0476 .contact .eyebrow{color:var(--bg)}
.zp0476 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0476 .contactMeta{display:grid;gap:10px}
.zp0476 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0476 .heroCopy{animation:enter-475 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-475{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0476 .hero{min-height:auto}
.zp0476 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0476 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0476 .nav nav{display:none}
.zp0476 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0476 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0476 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0476 .mobileMenu nav a{padding:10px 8px}
.zp0476 .hero,.zp0476 .mapHero{grid-template-columns:1fr}
.zp0476 .section,.zp0476 .sectionTitle,.zp0476 .story,.zp0476 .contact{grid-template-columns:1fr}
.zp0476 .metrics{grid-template-columns:1fr 1fr}
.zp0476 .section{display:block}}
@media(max-width:430px){.zp0476{font-size:16px}
.zp0476 .hero,.zp0476 .section,.zp0476 .contact{padding-left:18px;padding-right:18px}
.zp0476 .serviceGrid,.zp0476 .proof,.zp0476 .metrics{grid-template-columns:1fr}
.zp0476 h1{font-size:clamp(42px,14vw,70px)}
.zp0476 .priceRows article{grid-template-columns:1fr}}

.zp0476 .heroActions a,.zp0476 .primary,.zp0476 .ctaBtn,.zp0476 .btnPrimary,.zp0476 .schedule>a,.zp0476 .newsletter>a{transition:all .2s ease}
.zp0476 .heroActions a:hover,.zp0476 .primary:hover,.zp0476 .ctaBtn:hover,.zp0476 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.03)
}
.zp0476 nav a,.zp0476 .nav a,.zp0476 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0476 nav a:hover,.zp0476 .nav a:hover,.zp0476 .footer a:hover{
  color:var(--primary)
}
.zp0476 .serviceGrid article,.zp0476 .projectCard,.zp0476 .teamCard,.zp0476 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0476 .serviceGrid article:hover,.zp0476 .projectCard:hover,.zp0476 .teamCard:hover,.zp0476 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0476 *,.zp0476 *::before,.zp0476 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0476 a,.zp0476 button,.zp0476 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Y2K / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
