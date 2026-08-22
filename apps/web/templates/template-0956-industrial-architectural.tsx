import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0956-industrial-architectural", "family": "Architectural", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|conversion-first|features>proof>team>products>services>projects|notched|product-ui", "industry": "industrial", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "conversion-first"};

export default function Template0956({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Industrial Supplier");
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
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Industrial supplier / Project A", "Industrial supplier / Project B", "Industrial supplier / Project C", "Industrial supplier / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Technical products, practical documentation, and responsive support for critical operations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0956" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0956{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0956 *{box-sizing:border-box}
.zp0956 a{color:inherit;text-decoration:none}
.zp0956 h1,.zp0956 h2,.zp0956 h3,.zp0956 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0956 img{max-width:100%;display:block}
.zp0956 button,.zp0956 a{-webkit-tap-highlight-color:transparent}
.zp0956 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0956 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0956 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0956 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0956 .mobileMenu{display:none}
.zp0956 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0956 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0956 .eyebrow,.zp0956 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0956 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0956 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0956 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0956 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0956 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0956 .mapHero{grid-template-columns:1fr 1fr}
.zp0956 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0956 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0956 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0956 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0956 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0956 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0956 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0956 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0956 .serviceGrid p{color:var(--muted)}
.zp0956 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0956 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0956 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0956 details{border-top:1px solid var(--border);padding:20px 0}
.zp0956 details summary{font-weight:800;cursor:pointer}
.zp0956 details p{color:var(--muted);max-width:70ch}
.zp0956 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0956 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0956 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Segoe UI, Arial, sans-serif;margin-bottom:18px}
.zp0956 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0956 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0956 .projects article:nth-child(2){transform:translateY(32px)}
.zp0956 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0956 .features ul{list-style:none;margin:0;padding:0}
.zp0956 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0956 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0956 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0956 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0956 .p1,.zp0956 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0956 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0956 .contact .eyebrow{color:var(--bg)}
.zp0956 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0956 .contactMeta{display:grid;gap:10px}
.zp0956 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0956 .heroCopy{animation:enter-955 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-955{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0956 .hero{min-height:auto}
.zp0956 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0956 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0956 .nav nav{display:none}
.zp0956 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0956 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0956 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0956 .mobileMenu nav a{padding:10px 8px}
.zp0956 .hero,.zp0956 .mapHero{grid-template-columns:1fr}
.zp0956 .section,.zp0956 .sectionTitle,.zp0956 .features,.zp0956 .contact{grid-template-columns:1fr}
.zp0956 .teamGrid{grid-template-columns:1fr 1fr}
.zp0956 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0956 .projects .projectGrid{grid-template-columns:1fr}
.zp0956 .projects article:nth-child(2){transform:none}
.zp0956 .section{display:block}}
@media(max-width:430px){.zp0956{font-size:16px}
.zp0956 .hero,.zp0956 .section,.zp0956 .contact{padding-left:18px;padding-right:18px}
.zp0956 .serviceGrid,.zp0956 .proof,.zp0956 .teamGrid,.zp0956 .collectionGrid{grid-template-columns:1fr}
.zp0956 h1{font-size:clamp(42px,14vw,70px)}}

.zp0956 .heroActions a,.zp0956 .primary,.zp0956 .ctaBtn,.zp0956 .btnPrimary,.zp0956 .schedule>a,.zp0956 .newsletter>a{transition:all .2s ease}
.zp0956 .heroActions a:hover,.zp0956 .primary:hover,.zp0956 .ctaBtn:hover,.zp0956 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0956 nav a,.zp0956 .nav a,.zp0956 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0956 nav a:hover,.zp0956 .nav a:hover,.zp0956 .footer a:hover{
  opacity:.7
}
.zp0956 .serviceGrid article,.zp0956 .projectCard,.zp0956 .teamCard,.zp0956 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0956 .serviceGrid article:hover,.zp0956 .projectCard:hover,.zp0956 .teamCard:hover,.zp0956 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0956 *,.zp0956 *::before,.zp0956 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0956 a,.zp0956 button,.zp0956 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
