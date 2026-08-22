import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0502-startup-brutalism", "family": "Brutalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|local-service-map|proof>programmes>security>products>services|pill-controls|warm-editorial", "industry": "startup", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "local-service-map"};

export default function Template0502({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Technology Startup");
  const headline = String(content.headline || "A new product with a precise problem, a credible point of view, and proof it works.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product", "Solutions", "Research", "Customer stories", "Careers"];
  const industryLabel = "Technology startup";
  const serviceNotes = ["Advisory board access: domain experts available for 2h/month per advisor.", "Investor-ready financial models built with your unit economics, not templates.", "Legal setup: incorporation, shareholding, IP, and founder agreements done right once.", "Go-to-market planning with channel experiments prioritised by CAC potential.", "Fundraise preparation: pitch deck, data room, and investor narrative coaching."];
  const proofPoints = ["Portfolio: 47 companies", "Average seed raised: £1.2M", "Partner response within 48h", "Equity-free options available"];
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0502" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0502{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:3px;--shadow:none;--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0502 *{box-sizing:border-box}
.zp0502 a{color:inherit;text-decoration:none}
.zp0502 h1,.zp0502 h2,.zp0502 h3,.zp0502 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0502 img{max-width:100%;display:block}
.zp0502 button,.zp0502 a{-webkit-tap-highlight-color:transparent}
.zp0502 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0502 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0502 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0502 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0502 .mobileMenu{display:none}
.zp0502 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0502 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0502 .eyebrow,.zp0502 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0502 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0502 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0502 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0502 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0502 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0502 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0502 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0502 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0502 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0502 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0502 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0502 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0502 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0502 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0502 .serviceGrid p{color:var(--muted)}
.zp0502 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0502 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0502 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0502 details{border-top:1px solid var(--border);padding:20px 0}
.zp0502 details summary{font-weight:800;cursor:pointer}
.zp0502 details p{color:var(--muted);max-width:70ch}
.zp0502 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0502 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0502 .p1,.zp0502 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0502 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0502 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0502 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0502 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0502 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0502 .contact .eyebrow{color:var(--bg)}
.zp0502 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0502 .contactMeta{display:grid;gap:10px}
.zp0502 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0502 .heroActions a,.zp0502 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0502 h1{text-transform:uppercase}
.zp0502 .heroCopy{animation:enter-501 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-501{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0502 .hero{min-height:auto}
.zp0502 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0502 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0502 .nav nav{display:none}
.zp0502 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0502 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0502 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0502 .mobileMenu nav a{padding:10px 8px}
.zp0502 .hero,.zp0502 .timelineHero{grid-template-columns:1fr}
.zp0502 .section,.zp0502 .sectionTitle,.zp0502 .security,.zp0502 .contact{grid-template-columns:1fr}
.zp0502 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0502 .section{display:block}}
@media(max-width:430px){.zp0502{font-size:16px}
.zp0502 .hero,.zp0502 .section,.zp0502 .contact{padding-left:18px;padding-right:18px}
.zp0502 .serviceGrid,.zp0502 .proof,.zp0502 .collectionGrid,.zp0502 .programmes>div:last-child{grid-template-columns:1fr}
.zp0502 h1{font-size:clamp(42px,14vw,70px)}}

.zp0502 .heroActions a,.zp0502 .primary,.zp0502 .ctaBtn,.zp0502 .btnPrimary,.zp0502 .schedule>a,.zp0502 .newsletter>a{transition:all .2s ease}
.zp0502 .heroActions a:hover,.zp0502 .primary:hover,.zp0502 .ctaBtn:hover,.zp0502 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0502 nav a,.zp0502 .nav a,.zp0502 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0502 nav a:hover,.zp0502 .nav a:hover,.zp0502 .footer a:hover{
  text-decoration:underline
}
.zp0502 .serviceGrid article,.zp0502 .projectCard,.zp0502 .teamCard,.zp0502 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0502 .serviceGrid article:hover,.zp0502 .projectCard:hover,.zp0502 .teamCard:hover,.zp0502 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0502 *,.zp0502 *::before,.zp0502 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0502 a,.zp0502 button,.zp0502 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
