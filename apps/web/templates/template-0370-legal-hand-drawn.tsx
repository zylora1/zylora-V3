import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0370-legal-hand-drawn", "family": "Hand-drawn", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|service-catalogue|metrics>proof>services>story>products|borderless|retro-bookish", "industry": "legal", "hero": "gallery-wall", "navigation": "tabbed", "layout": "service-catalogue"};

export default function Template0370({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Law Firm");
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
  const storyQuote = "\u201cPractical legal advice, clear next steps, and responsive communication.\u201d";
  const storyBody = "Signal Law Firm is presented as a real working law firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0370" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0370{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0370 *{box-sizing:border-box}
.zp0370 a{color:inherit;text-decoration:none}
.zp0370 h1,.zp0370 h2,.zp0370 h3,.zp0370 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0370 img{max-width:100%;display:block}
.zp0370 button,.zp0370 a{-webkit-tap-highlight-color:transparent}
.zp0370 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0370 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0370 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0370 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0370 .mobileMenu{display:none}
.zp0370 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0370 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0370 .eyebrow,.zp0370 .sectionTitle>span,.zp0370 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0370 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0370 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0370 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0370 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0370 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0370 .wallHero{grid-template-columns:1fr 1fr}
.zp0370 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0370 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0370 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0370 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0370 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0370 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0370 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0370 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0370 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0370 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0370 .serviceGrid p{color:var(--muted)}
.zp0370 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0370 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0370 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0370 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0370 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0370 .story p{color:var(--muted)}
.zp0370 details{border-top:1px solid var(--border);padding:20px 0}
.zp0370 details summary{font-weight:800;cursor:pointer}
.zp0370 details p{color:var(--muted);max-width:70ch}
.zp0370 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0370 .metrics div{background:var(--bg);padding:30px}
.zp0370 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Bookman Old Style, Georgia, serif;color:var(--primary)}
.zp0370 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0370 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0370 .p1,.zp0370 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0370 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0370 .contact .eyebrow{color:var(--bg)}
.zp0370 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0370 .contactMeta{display:grid;gap:10px}
.zp0370 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0370 .hero{min-height:auto}
.zp0370 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0370 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0370 .nav nav{display:none}
.zp0370 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0370 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0370 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0370 .mobileMenu nav a{padding:10px 8px}
.zp0370 .hero,.zp0370 .wallHero{grid-template-columns:1fr}
.zp0370 .section,.zp0370 .sectionTitle,.zp0370 .story,.zp0370 .contact{grid-template-columns:1fr}
.zp0370 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0370 .metrics{grid-template-columns:1fr 1fr}
.zp0370 .section{display:block}}
@media(max-width:430px){.zp0370{font-size:16px}
.zp0370 .hero,.zp0370 .section,.zp0370 .contact{padding-left:18px;padding-right:18px}
.zp0370 .serviceGrid,.zp0370 .proof,.zp0370 .collectionGrid,.zp0370 .metrics{grid-template-columns:1fr}
.zp0370 h1{font-size:clamp(42px,14vw,70px)}}

.zp0370 .heroActions a,.zp0370 .primary,.zp0370 .ctaBtn,.zp0370 .btnPrimary,.zp0370 .schedule>a,.zp0370 .newsletter>a{transition:all .2s ease}
.zp0370 .heroActions a:hover,.zp0370 .primary:hover,.zp0370 .ctaBtn:hover,.zp0370 .btnPrimary:hover{
  opacity:.8;text-decoration:underline wavy
}
.zp0370 nav a,.zp0370 .nav a,.zp0370 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0370 nav a:hover,.zp0370 .nav a:hover,.zp0370 .footer a:hover{
  opacity:.7
}
.zp0370 .serviceGrid article,.zp0370 .projectCard,.zp0370 .teamCard,.zp0370 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0370 .serviceGrid article:hover,.zp0370 .projectCard:hover,.zp0370 .teamCard:hover,.zp0370 .bentoCard:hover{
  transform:scale(1.02)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0370 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0370 .sectionTitle,.zp0370 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0370 *,.zp0370 *::before,.zp0370 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0370 a,.zp0370 button,.zp0370 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Hand-drawn / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
