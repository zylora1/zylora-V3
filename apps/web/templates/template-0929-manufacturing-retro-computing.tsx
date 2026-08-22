import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0929-manufacturing-retro-computing", "family": "Retro Computing", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|gallery-index|credentials>research>proof>menu>collection>services|square-editorial|friendly", "industry": "manufacturing", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "gallery-index"};

export default function Template0929({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Manufacturer");
  const headline = String(content.headline || "Precision manufacturing with traceable quality and dependable production planning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Engineering", "Production", "Quality control", "Supply chain", "Custom fabrication"];
  const industryLabel = "Manufacturer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Manufacturer / Project A", "Manufacturer / Project B", "Manufacturer / Project C", "Manufacturer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Precision manufacturing with traceable quality and dependable production planning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0929" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0929{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0929 *{box-sizing:border-box}
.zp0929 a{color:inherit;text-decoration:none}
.zp0929 h1,.zp0929 h2,.zp0929 h3,.zp0929 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0929 img{max-width:100%;display:block}
.zp0929 button,.zp0929 a{-webkit-tap-highlight-color:transparent}
.zp0929 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0929 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0929 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0929 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0929 .mobileMenu{display:none}
.zp0929 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0929 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0929 .eyebrow,.zp0929 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0929 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0929 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0929 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0929 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0929 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0929 .typeOnly{grid-template-columns:1fr .28fr}
.zp0929 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0929 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0929 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0929 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0929 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0929 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0929 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0929 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0929 .serviceGrid p{color:var(--muted)}
.zp0929 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0929 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0929 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0929 details{border-top:1px solid var(--border);padding:20px 0}
.zp0929 details summary{font-weight:800;cursor:pointer}
.zp0929 details p{color:var(--muted);max-width:70ch}
.zp0929 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0929 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0929 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0929 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0929 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0929 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0929 .p1,.zp0929 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0929 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0929 .researchRows{max-width:900px;margin-left:auto}
.zp0929 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0929 .contact .eyebrow{color:var(--bg)}
.zp0929 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0929 .contactMeta{display:grid;gap:10px}
.zp0929 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0929{image-rendering:pixelated}
.zp0929 *{border-radius:0!important}
.zp0929 .heroCopy{animation:enter-928 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-928{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0929 .hero{min-height:auto}
.zp0929 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0929 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0929 .nav nav{display:none}
.zp0929 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0929 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0929 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0929 .mobileMenu nav a{padding:10px 8px}
.zp0929 .hero{grid-template-columns:1fr}
.zp0929 .section,.zp0929 .sectionTitle,.zp0929 .contact{grid-template-columns:1fr}
.zp0929 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0929 .section{display:block}}
@media(max-width:430px){.zp0929{font-size:16px}
.zp0929 .hero,.zp0929 .section,.zp0929 .contact{padding-left:18px;padding-right:18px}
.zp0929 .serviceGrid,.zp0929 .proof,.zp0929 .collectionGrid{grid-template-columns:1fr}
.zp0929 h1{font-size:clamp(42px,14vw,70px)}}

.zp0929 .heroActions a,.zp0929 .primary,.zp0929 .ctaBtn,.zp0929 .btnPrimary,.zp0929 .schedule>a,.zp0929 .newsletter>a{transition:all .2s ease}
.zp0929 .heroActions a:hover,.zp0929 .primary:hover,.zp0929 .ctaBtn:hover,.zp0929 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0929 nav a,.zp0929 .nav a,.zp0929 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0929 nav a:hover,.zp0929 .nav a:hover,.zp0929 .footer a:hover{
  color:var(--primary)
}
.zp0929 .serviceGrid article,.zp0929 .projectCard,.zp0929 .teamCard,.zp0929 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0929 .serviceGrid article:hover,.zp0929 .projectCard:hover,.zp0929 .teamCard:hover,.zp0929 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0929 *,.zp0929 *::before,.zp0929 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0929 a,.zp0929 button,.zp0929 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
