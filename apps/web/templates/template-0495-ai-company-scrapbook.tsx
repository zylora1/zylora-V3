import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0495-ai-company-scrapbook", "family": "Scrapbook", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|timeline-narrative|features>security>pricing>services>metrics>products>proof|soft-12|geometric", "industry": "ai-company", "hero": "location-led", "navigation": "vertical-rail", "layout": "timeline-narrative"};

export default function Template0495({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Ai Company");
  const headline = String(content.headline || "Applied AI designed around reliable workflows, measurable quality, and human control.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["AI assistants", "Document intelligence", "Automation", "Evaluation", "Enterprise deployment"];
  const industryLabel = "AI company";
  const serviceNotes = ["Production-ready models with clear input/output contracts and versioned endpoints.", "On-premise deployment available for data-sensitive organisations.", "Model cards and audit trails provided for every inference decision.", "Human-in-the-loop option: AI recommendations, human approvals, logged chain.", "Retraining on your proprietary data with performance benchmarks agreed upfront."];
  const proofPoints = ["EU AI Act compliant", "SOC 2 certified", "Explainability dashboard", "On-prem available"];
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0495" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0495{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0495 *{box-sizing:border-box}
.zp0495 a{color:inherit;text-decoration:none}
.zp0495 h1,.zp0495 h2,.zp0495 h3,.zp0495 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0495 img{max-width:100%;display:block}
.zp0495 button,.zp0495 a{-webkit-tap-highlight-color:transparent}
.zp0495 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0495 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0495 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0495 .mobileMenu{display:none}
.zp0495:has(.navRail)>.hero,.zp0495:has(.navRail)>.section,.zp0495:has(.navRail)>.contact,.zp0495:has(.navRail)>.footer{margin-left:190px}
.zp0495 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0495 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0495 .eyebrow,.zp0495 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0495 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0495 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0495 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0495 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0495 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0495 .locationHero{grid-template-columns:1fr 1fr}
.zp0495 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0495 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0495 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0495 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0495 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0495 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0495 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0495 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0495 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0495 .serviceGrid p{color:var(--muted)}
.zp0495 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0495 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0495 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0495 details{border-top:1px solid var(--border);padding:20px 0}
.zp0495 details summary{font-weight:800;cursor:pointer}
.zp0495 details p{color:var(--muted);max-width:70ch}
.zp0495 .priceRows{border-top:1px solid var(--border)}
.zp0495 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0495 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0495 .features ul{list-style:none;margin:0;padding:0}
.zp0495 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0495 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0495 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0495 .metrics div{background:var(--bg);padding:30px}
.zp0495 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Century Gothic, Avenir, sans-serif;color:var(--primary)}
.zp0495 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0495 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0495 .p1,.zp0495 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0495 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0495 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0495 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0495 .contact .eyebrow{color:var(--bg)}
.zp0495 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0495 .contactMeta{display:grid;gap:10px}
.zp0495 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0495{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0495 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0495 .heroCopy{animation:enter-494 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-494{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0495 .hero{min-height:auto}
.zp0495 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0495 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0495 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0495 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0495 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0495 .mobileMenu nav a{padding:10px 8px}
.zp0495 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0495:has(.navRail)>.hero,.zp0495:has(.navRail)>.section,.zp0495:has(.navRail)>.contact,.zp0495:has(.navRail)>.footer{margin-left:0}
.zp0495 .hero,.zp0495 .locationHero{grid-template-columns:1fr}
.zp0495 .section,.zp0495 .sectionTitle,.zp0495 .features,.zp0495 .security,.zp0495 .contact{grid-template-columns:1fr}
.zp0495 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0495 .metrics{grid-template-columns:1fr 1fr}
.zp0495 .section{display:block}}
@media(max-width:430px){.zp0495{font-size:16px}
.zp0495 .hero,.zp0495 .section,.zp0495 .contact{padding-left:18px;padding-right:18px}
.zp0495 .serviceGrid,.zp0495 .proof,.zp0495 .collectionGrid,.zp0495 .metrics{grid-template-columns:1fr}
.zp0495 h1{font-size:clamp(42px,14vw,70px)}
.zp0495 .priceRows article{grid-template-columns:1fr}}

.zp0495 .heroActions a,.zp0495 .primary,.zp0495 .ctaBtn,.zp0495 .btnPrimary,.zp0495 .schedule>a,.zp0495 .newsletter>a{transition:all .2s ease}
.zp0495 .heroActions a:hover,.zp0495 .primary:hover,.zp0495 .ctaBtn:hover,.zp0495 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0495 nav a,.zp0495 .nav a,.zp0495 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0495 nav a:hover,.zp0495 .nav a:hover,.zp0495 .footer a:hover{
  color:var(--primary)
}
.zp0495 .serviceGrid article,.zp0495 .projectCard,.zp0495 .teamCard,.zp0495 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0495 .serviceGrid article:hover,.zp0495 .projectCard:hover,.zp0495 .teamCard:hover,.zp0495 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0495 *,.zp0495 *::before,.zp0495 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0495 a,.zp0495 button,.zp0495 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
