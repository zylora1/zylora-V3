import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0726-artist-fashion-editorial", "family": "Fashion Editorial", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|image-led-chapters|gallery>services>metrics>products>proof>awards>packages|pill-controls|neo-grotesk", "industry": "artist", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "image-led-chapters"};

export default function Template0726({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0726" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0726{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0726 *{box-sizing:border-box}
.zp0726 a{color:inherit;text-decoration:none}
.zp0726 h1,.zp0726 h2,.zp0726 h3,.zp0726 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0726 img{max-width:100%;display:block}
.zp0726 button,.zp0726 a{-webkit-tap-highlight-color:transparent}
.zp0726 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0726 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0726 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0726 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0726 .mobileMenu{display:none}
.zp0726 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0726 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0726 .eyebrow,.zp0726 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0726 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0726 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0726 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0726 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0726 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0726 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0726 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0726 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0726 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0726 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0726 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0726 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0726 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0726 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0726 .serviceGrid p{color:var(--muted)}
.zp0726 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0726 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0726 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0726 details{border-top:1px solid var(--border);padding:20px 0}
.zp0726 details summary{font-weight:800;cursor:pointer}
.zp0726 details p{color:var(--muted);max-width:70ch}
.zp0726 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0726 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0726 .galleryGrid>*:first-child{grid-row:1/3}
.zp0726 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0726 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0726 .g2,.zp0726 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0726 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0726 .metrics div{background:var(--bg);padding:30px}
.zp0726 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Helvetica Neue, Arial, sans-serif;color:var(--primary)}
.zp0726 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0726 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0726 .p1,.zp0726 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0726 .awards>div{max-width:800px;margin-left:auto}
.zp0726 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0726 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0726 .packages>.sectionTitle{grid-column:1/-1}
.zp0726 .packages article{padding:24px;border:1px solid var(--border)}
.zp0726 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0726 .contact .eyebrow{color:var(--bg)}
.zp0726 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0726 .contactMeta{display:grid;gap:10px}
.zp0726 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0726 .heroCopy{animation:enter-725 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-725{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0726 .hero{min-height:auto}
.zp0726 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0726 .proof{grid-template-columns:1fr 1fr}
.zp0726 .packages{grid-template-columns:1fr 1fr}
.zp0726 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0726 .nav nav{display:none}
.zp0726 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0726 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0726 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0726 .mobileMenu nav a{padding:10px 8px}
.zp0726 .hero,.zp0726 .timelineHero{grid-template-columns:1fr}
.zp0726 .section,.zp0726 .sectionTitle,.zp0726 .contact{grid-template-columns:1fr}
.zp0726 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0726 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0726 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0726 .metrics{grid-template-columns:1fr 1fr}
.zp0726 .section{display:block}}
@media(max-width:430px){.zp0726{font-size:16px}
.zp0726 .hero,.zp0726 .section,.zp0726 .contact{padding-left:18px;padding-right:18px}
.zp0726 .serviceGrid,.zp0726 .proof,.zp0726 .collectionGrid,.zp0726 .metrics,.zp0726 .packages{grid-template-columns:1fr}
.zp0726 h1{font-size:clamp(42px,14vw,70px)}
.zp0726 .galleryGrid{grid-template-columns:1fr}
.zp0726 .galleryGrid>*:first-child{grid-column:auto}}

.zp0726 .heroActions a,.zp0726 .primary,.zp0726 .ctaBtn,.zp0726 .btnPrimary,.zp0726 .schedule>a,.zp0726 .newsletter>a{transition:all .2s ease}
.zp0726 .heroActions a:hover,.zp0726 .primary:hover,.zp0726 .ctaBtn:hover,.zp0726 .btnPrimary:hover{
  opacity:.8
}
.zp0726 nav a,.zp0726 .nav a,.zp0726 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0726 nav a:hover,.zp0726 .nav a:hover,.zp0726 .footer a:hover{
  color:var(--primary)
}
.zp0726 .serviceGrid article,.zp0726 .projectCard,.zp0726 .teamCard,.zp0726 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0726 .serviceGrid article:hover,.zp0726 .projectCard:hover,.zp0726 .teamCard:hover,.zp0726 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0726 *,.zp0726 *::before,.zp0726 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0726 a,.zp0726 button,.zp0726 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Fashion Editorial / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
