import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0790-weddings-botanical", "family": "Botanical", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|local-service-map|timeline>programmes>services>proof>gallery|pill-controls|warm-editorial", "industry": "weddings", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "local-service-map"};

export default function Template0790({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0790" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0790{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0790 *{box-sizing:border-box}
.zp0790 a{color:inherit;text-decoration:none}
.zp0790 h1,.zp0790 h2,.zp0790 h3,.zp0790 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0790 img{max-width:100%;display:block}
.zp0790 button,.zp0790 a{-webkit-tap-highlight-color:transparent}
.zp0790 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0790 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0790 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0790 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0790 .mobileMenu{display:none}
.zp0790 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0790 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0790 .eyebrow,.zp0790 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0790 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0790 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0790 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0790 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0790 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0790 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0790 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0790 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0790 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0790 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0790 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0790 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0790 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0790 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0790 .serviceGrid p{color:var(--muted)}
.zp0790 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0790 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0790 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0790 details{border-top:1px solid var(--border);padding:20px 0}
.zp0790 details summary{font-weight:800;cursor:pointer}
.zp0790 details p{color:var(--muted);max-width:70ch}
.zp0790 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0790 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0790 .galleryGrid>*:first-child{grid-row:1/3}
.zp0790 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0790 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0790 .g2,.zp0790 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0790 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0790 .timeline article{padding:20px 0}
.zp0790 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0790 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0790 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0790 .contact .eyebrow{color:var(--bg)}
.zp0790 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0790 .contactMeta{display:grid;gap:10px}
.zp0790 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0790 .hero{min-height:auto}
.zp0790 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0790 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0790 .nav nav{display:none}
.zp0790 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0790 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0790 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0790 .mobileMenu nav a{padding:10px 8px}
.zp0790 .hero,.zp0790 .timelineHero{grid-template-columns:1fr}
.zp0790 .section,.zp0790 .sectionTitle,.zp0790 .contact{grid-template-columns:1fr}
.zp0790 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0790 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0790 .section{display:block}}
@media(max-width:430px){.zp0790{font-size:16px}
.zp0790 .hero,.zp0790 .section,.zp0790 .contact{padding-left:18px;padding-right:18px}
.zp0790 .serviceGrid,.zp0790 .proof,.zp0790 .programmes>div:last-child{grid-template-columns:1fr}
.zp0790 h1{font-size:clamp(42px,14vw,70px)}
.zp0790 .galleryGrid{grid-template-columns:1fr}
.zp0790 .galleryGrid>*:first-child{grid-column:auto}}

.zp0790 .heroActions a,.zp0790 .primary,.zp0790 .ctaBtn,.zp0790 .btnPrimary,.zp0790 .schedule>a,.zp0790 .newsletter>a{transition:all .2s ease}
.zp0790 .heroActions a:hover,.zp0790 .primary:hover,.zp0790 .ctaBtn:hover,.zp0790 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0790 nav a,.zp0790 .nav a,.zp0790 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0790 nav a:hover,.zp0790 .nav a:hover,.zp0790 .footer a:hover{
  color:var(--primary)
}
.zp0790 .serviceGrid article,.zp0790 .projectCard,.zp0790 .teamCard,.zp0790 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0790 .serviceGrid article:hover,.zp0790 .projectCard:hover,.zp0790 .teamCard:hover,.zp0790 .bentoCard:hover{
  transform:translateY(-3px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0790 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0790 .sectionTitle,.zp0790 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0790 *,.zp0790 *::before,.zp0790 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0790 a,.zp0790 button,.zp0790 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
