import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0950-industrial-neo-futurism", "family": "Neo-futurism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|masonry-story|services>values>menu>proof>pricing>products|pill-controls|ceremonial", "industry": "industrial", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "masonry-story"};

export default function Template0950({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Industrial Supplier");
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
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Industrial supplier / Project A", "Industrial supplier / Project B", "Industrial supplier / Project C", "Industrial supplier / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Technical products, practical documentation, and responsive support for critical operations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0950" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0950{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0950 *{box-sizing:border-box}
.zp0950 a{color:inherit;text-decoration:none}
.zp0950 h1,.zp0950 h2,.zp0950 h3,.zp0950 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0950 img{max-width:100%;display:block}
.zp0950 button,.zp0950 a{-webkit-tap-highlight-color:transparent}
.zp0950 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0950 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0950 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0950 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0950 .mobileMenu{display:none}
.zp0950 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0950 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0950 .eyebrow,.zp0950 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0950 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0950 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0950 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0950 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0950 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0950 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0950 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0950 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0950 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0950 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0950 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0950 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0950 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0950 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0950 .serviceGrid p{color:var(--muted)}
.zp0950 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0950 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0950 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0950 details{border-top:1px solid var(--border);padding:20px 0}
.zp0950 details summary{font-weight:800;cursor:pointer}
.zp0950 details p{color:var(--muted);max-width:70ch}
.zp0950 .priceRows{border-top:1px solid var(--border)}
.zp0950 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0950 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0950 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0950 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0950 .p1,.zp0950 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0950 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Copperplate, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0950 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0950 .contact .eyebrow{color:var(--bg)}
.zp0950 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0950 .contactMeta{display:grid;gap:10px}
.zp0950 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0950 .heroCopy{animation:enter-949 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-949{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0950 .hero{min-height:auto}
.zp0950 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0950 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0950 .nav nav{display:none}
.zp0950 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0950 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0950 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0950 .mobileMenu nav a{padding:10px 8px}
.zp0950 .hero,.zp0950 .timelineHero{grid-template-columns:1fr}
.zp0950 .section,.zp0950 .sectionTitle,.zp0950 .contact{grid-template-columns:1fr}
.zp0950 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0950 .section{display:block}}
@media(max-width:430px){.zp0950{font-size:16px}
.zp0950 .hero,.zp0950 .section,.zp0950 .contact{padding-left:18px;padding-right:18px}
.zp0950 .serviceGrid,.zp0950 .proof,.zp0950 .collectionGrid{grid-template-columns:1fr}
.zp0950 h1{font-size:clamp(42px,14vw,70px)}
.zp0950 .priceRows article{grid-template-columns:1fr}}

.zp0950 .heroActions a,.zp0950 .primary,.zp0950 .ctaBtn,.zp0950 .btnPrimary,.zp0950 .schedule>a,.zp0950 .newsletter>a{transition:all .2s ease}
.zp0950 .heroActions a:hover,.zp0950 .primary:hover,.zp0950 .ctaBtn:hover,.zp0950 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0950 nav a,.zp0950 .nav a,.zp0950 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0950 nav a:hover,.zp0950 .nav a:hover,.zp0950 .footer a:hover{
  color:var(--primary)
}
.zp0950 .serviceGrid article,.zp0950 .projectCard,.zp0950 .teamCard,.zp0950 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0950 .serviceGrid article:hover,.zp0950 .projectCard:hover,.zp0950 .teamCard:hover,.zp0950 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0950 *,.zp0950 *::before,.zp0950 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0950 a,.zp0950 button,.zp0950 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-futurism / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
