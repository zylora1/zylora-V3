import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0377-legal-neo-classical", "family": "Neo-classical", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|case-study-led|packages>proof>services>case-study>location>gallery|hairline|friendly", "industry": "legal", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "case-study-led"};

export default function Template0377({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Law Firm");
  const headline = String(content.headline || "Practical legal advice, clear next steps, and responsive communication.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business law", "Dispute resolution", "Property law", "Employment", "Estate planning"];
  const industryLabel = "Law firm";
  const serviceNotes = ["Fixed-fee options for defined scope matters — clear costs before we begin.", "24h response guarantee on all client communications, not just weekdays.", "Plain-English advice: we translate legal complexity into decisions you can make.", "Video and in-person consultation options across all practice areas.", "Regular matter updates so you're never left wondering where things stand."];
  const proofPoints = ["SRA regulated", "Lexcel accredited", "Legal 500 listed", "No win no fee options"];
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0377" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0377{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0377 *{box-sizing:border-box}
.zp0377 a{color:inherit;text-decoration:none}
.zp0377 h1,.zp0377 h2,.zp0377 h3,.zp0377 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0377 img{max-width:100%;display:block}
.zp0377 button,.zp0377 a{-webkit-tap-highlight-color:transparent}
.zp0377 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0377 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0377 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0377 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0377 .nav.menu details{position:relative}
.zp0377 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0377 .mobileMenu{display:none}
.zp0377 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0377 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0377 .eyebrow,.zp0377 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0377 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0377 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0377 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0377 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0377 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0377 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0377 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0377 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0377 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0377 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0377 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0377 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0377 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0377 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0377 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0377 .serviceGrid p{color:var(--muted)}
.zp0377 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0377 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0377 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0377 details{border-top:1px solid var(--border);padding:20px 0}
.zp0377 details summary{font-weight:800;cursor:pointer}
.zp0377 details p{color:var(--muted);max-width:70ch}
.zp0377 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0377 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0377 .galleryGrid>*:first-child{grid-row:1/3}
.zp0377 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0377 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0377 .g2,.zp0377 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0377 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0377 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0377 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0377 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0377 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0377 .projects article:nth-child(2){transform:translateY(32px)}
.zp0377 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0377 .packages>.sectionTitle{grid-column:1/-1}
.zp0377 .packages article{padding:24px;border:1px solid var(--border)}
.zp0377 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0377 .contact .eyebrow{color:var(--bg)}
.zp0377 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0377 .contactMeta{display:grid;gap:10px}
.zp0377 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0377 .heroCopy{animation:enter-376 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-376{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0377 .hero{min-height:auto}
.zp0377 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0377 .proof{grid-template-columns:1fr 1fr}
.zp0377 .packages{grid-template-columns:1fr 1fr}
.zp0377 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0377 .nav nav{display:none}
.zp0377 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0377 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0377 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0377 .mobileMenu nav a{padding:10px 8px}
.zp0377 .hero,.zp0377 .archiveHero{grid-template-columns:1fr}
.zp0377 .section,.zp0377 .sectionTitle,.zp0377 .location,.zp0377 .contact{grid-template-columns:1fr}
.zp0377 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0377 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0377 .projects .projectGrid{grid-template-columns:1fr}
.zp0377 .projects article:nth-child(2){transform:none}
.zp0377 .section{display:block}}
@media(max-width:430px){.zp0377{font-size:16px}
.zp0377 .hero,.zp0377 .section,.zp0377 .contact{padding-left:18px;padding-right:18px}
.zp0377 .serviceGrid,.zp0377 .proof,.zp0377 .packages{grid-template-columns:1fr}
.zp0377 h1{font-size:clamp(42px,14vw,70px)}
.zp0377 .galleryGrid{grid-template-columns:1fr}
.zp0377 .galleryGrid>*:first-child{grid-column:auto}}

.zp0377 .heroActions a,.zp0377 .primary,.zp0377 .ctaBtn,.zp0377 .btnPrimary,.zp0377 .schedule>a,.zp0377 .newsletter>a{transition:all .2s ease}
.zp0377 .heroActions a:hover,.zp0377 .primary:hover,.zp0377 .ctaBtn:hover,.zp0377 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0377 nav a,.zp0377 .nav a,.zp0377 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0377 nav a:hover,.zp0377 .nav a:hover,.zp0377 .footer a:hover{
  color:var(--secondary)
}
.zp0377 .serviceGrid article,.zp0377 .projectCard,.zp0377 .teamCard,.zp0377 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0377 .serviceGrid article:hover,.zp0377 .projectCard:hover,.zp0377 .teamCard:hover,.zp0377 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0377 *,.zp0377 *::before,.zp0377 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0377 a,.zp0377 button,.zp0377 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
