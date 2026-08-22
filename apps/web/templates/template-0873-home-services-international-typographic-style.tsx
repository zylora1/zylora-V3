import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0873-home-services-international-typographic-style", "family": "International Typographic Style", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|community-led|testimonial>projects>case-study>features>products>services>proof|hairline|slab", "industry": "home-services", "hero": "poster", "navigation": "fullscreen-menu", "layout": "community-led"};

export default function Template0873({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Home Services Company");
  const headline = String(content.headline || "Trusted local trades with transparent arrival windows and straightforward estimates.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Electrical", "Plumbing", "Heating", "Emergency callouts", "Maintenance plans"];
  const industryLabel = "Home services company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Slate client";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Home services company / Project A", "Home services company / Project B", "Home services company / Project C", "Home services company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trusted local trades with transparent arrival windows and straightforward estimates. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0873" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0873{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0873 *{box-sizing:border-box}
.zp0873 a{color:inherit;text-decoration:none}
.zp0873 h1,.zp0873 h2,.zp0873 h3,.zp0873 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0873 img{max-width:100%;display:block}
.zp0873 button,.zp0873 a{-webkit-tap-highlight-color:transparent}
.zp0873 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0873 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0873 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0873 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0873 .nav.menu details{position:relative}
.zp0873 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0873 .mobileMenu{display:none}
.zp0873 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0873 .eyebrow,.zp0873 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0873 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0873 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0873 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0873 .posterTop,.zp0873 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0873 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0873 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0873 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0873 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0873 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0873 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0873 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0873 .serviceGrid p{color:var(--muted)}
.zp0873 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0873 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0873 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0873 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0873 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0873 .testimonial>div{align-self:end}
.zp0873 .testimonial span{display:block;opacity:.7}
.zp0873 details{border-top:1px solid var(--border);padding:20px 0}
.zp0873 details summary{font-weight:800;cursor:pointer}
.zp0873 details p{color:var(--muted);max-width:70ch}
.zp0873 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0873 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0873 .projects article:nth-child(2){transform:translateY(32px)}
.zp0873 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0873 .features ul{list-style:none;margin:0;padding:0}
.zp0873 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0873 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0873 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0873 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0873 .p1,.zp0873 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0873 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0873 .contact .eyebrow{color:var(--bg)}
.zp0873 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0873 .contactMeta{display:grid;gap:10px}
.zp0873 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-872{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0873 .hero{min-height:auto}
.zp0873 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0873 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0873 .nav nav{display:none}
.zp0873 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0873 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0873 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0873 .mobileMenu nav a{padding:10px 8px}
.zp0873 .hero{grid-template-columns:1fr}
.zp0873 .section,.zp0873 .sectionTitle,.zp0873 .features,.zp0873 .contact{grid-template-columns:1fr}
.zp0873 .testimonial{grid-template-columns:1fr}
.zp0873 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0873 .projects .projectGrid{grid-template-columns:1fr}
.zp0873 .projects article:nth-child(2){transform:none}
.zp0873 .section{display:block}}
@media(max-width:430px){.zp0873{font-size:16px}
.zp0873 .hero,.zp0873 .section,.zp0873 .contact{padding-left:18px;padding-right:18px}
.zp0873 .serviceGrid,.zp0873 .proof,.zp0873 .collectionGrid{grid-template-columns:1fr}
.zp0873 h1{font-size:clamp(42px,14vw,70px)}
.zp0873 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0873 .heroActions a,.zp0873 .primary,.zp0873 .ctaBtn,.zp0873 .btnPrimary,.zp0873 .schedule>a,.zp0873 .newsletter>a{transition:all .2s ease}
.zp0873 .heroActions a:hover,.zp0873 .primary:hover,.zp0873 .ctaBtn:hover,.zp0873 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0873 nav a,.zp0873 .nav a,.zp0873 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0873 nav a:hover,.zp0873 .nav a:hover,.zp0873 .footer a:hover{
  text-decoration:underline
}
.zp0873 .serviceGrid article,.zp0873 .projectCard,.zp0873 .teamCard,.zp0873 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0873 .serviceGrid article:hover,.zp0873 .projectCard:hover,.zp0873 .teamCard:hover,.zp0873 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0873 *,.zp0873 *::before,.zp0873 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0873 a,.zp0873 button,.zp0873 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>International Typographic Style / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
