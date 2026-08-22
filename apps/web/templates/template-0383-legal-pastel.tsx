import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0383-legal-pastel", "family": "Pastel", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|manifesto-grid|story>proof>newsletter>services>press>pricing|soft-12|clean-humanist", "industry": "legal", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "manifesto-grid"};

export default function Template0383({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Law Firm");
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
  const storyBody = "Clove Law Firm is presented as a real working law firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0383" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0383{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0383 *{box-sizing:border-box}
.zp0383 a{color:inherit;text-decoration:none}
.zp0383 h1,.zp0383 h2,.zp0383 h3,.zp0383 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0383 img{max-width:100%;display:block}
.zp0383 button,.zp0383 a{-webkit-tap-highlight-color:transparent}
.zp0383 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0383 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0383 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0383 .mobileMenu{display:none}
.zp0383:has(.navRail)>.hero,.zp0383:has(.navRail)>.section,.zp0383:has(.navRail)>.contact,.zp0383:has(.navRail)>.footer{margin-left:190px}
.zp0383 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0383 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0383 .eyebrow,.zp0383 .sectionTitle>span,.zp0383 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0383 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0383 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0383 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0383 .heroActions a,.zp0383 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0383 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0383 .canvasHero{overflow:hidden}
.zp0383 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0383 .canvasGrid i{border-right:1px solid var(--border)}
.zp0383 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0383 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0383 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0383 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0383 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0383 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0383 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0383 .serviceGrid p{color:var(--muted)}
.zp0383 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0383 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0383 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0383 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0383 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0383 .story p{color:var(--muted)}
.zp0383 details{border-top:1px solid var(--border);padding:20px 0}
.zp0383 details summary{font-weight:800;cursor:pointer}
.zp0383 details p{color:var(--muted);max-width:70ch}
.zp0383 .priceRows{border-top:1px solid var(--border)}
.zp0383 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0383 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0383 .awards>div{max-width:800px;margin-left:auto}
.zp0383 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0383 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0383 .contact .eyebrow{color:var(--bg)}
.zp0383 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0383 .contactMeta{display:grid;gap:10px}
.zp0383 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0383 .heroCopy{animation:enter-382 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-382{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0383 .hero{min-height:auto}
.zp0383 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0383 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0383 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0383 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0383 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0383 .mobileMenu nav a{padding:10px 8px}
.zp0383 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0383:has(.navRail)>.hero,.zp0383:has(.navRail)>.section,.zp0383:has(.navRail)>.contact,.zp0383:has(.navRail)>.footer{margin-left:0}
.zp0383 .hero{grid-template-columns:1fr}
.zp0383 .section,.zp0383 .sectionTitle,.zp0383 .story,.zp0383 .contact{grid-template-columns:1fr}
.zp0383 .section{display:block}}
@media(max-width:430px){.zp0383{font-size:16px}
.zp0383 .hero,.zp0383 .section,.zp0383 .contact{padding-left:18px;padding-right:18px}
.zp0383 .serviceGrid,.zp0383 .proof{grid-template-columns:1fr}
.zp0383 h1{font-size:clamp(42px,14vw,70px)}
.zp0383 .priceRows article{grid-template-columns:1fr}}

.zp0383 .heroActions a,.zp0383 .primary,.zp0383 .ctaBtn,.zp0383 .btnPrimary,.zp0383 .schedule>a,.zp0383 .newsletter>a{transition:all .2s ease}
.zp0383 .heroActions a:hover,.zp0383 .primary:hover,.zp0383 .ctaBtn:hover,.zp0383 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0383 nav a,.zp0383 .nav a,.zp0383 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0383 nav a:hover,.zp0383 .nav a:hover,.zp0383 .footer a:hover{
  color:var(--primary)
}
.zp0383 .serviceGrid article,.zp0383 .projectCard,.zp0383 .teamCard,.zp0383 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0383 .serviceGrid article:hover,.zp0383 .projectCard:hover,.zp0383 .teamCard:hover,.zp0383 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0383 *,.zp0383 *::before,.zp0383 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0383 a,.zp0383 button,.zp0383 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
