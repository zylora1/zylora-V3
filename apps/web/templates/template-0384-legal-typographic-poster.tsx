import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0384-legal-typographic-poster", "family": "Typographic Poster", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|property-led|products>awards>services>materials>proof>story>hours|heavy-frame|terminal", "industry": "legal", "hero": "data-led", "navigation": "centered-logo", "layout": "property-led"};

export default function Template0384({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Law Firm");
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
  const storyBody = "Marrow Law Firm is presented as a real working law firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0384" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0384{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0384 *{box-sizing:border-box}
.zp0384 a{color:inherit;text-decoration:none}
.zp0384 h1,.zp0384 h2,.zp0384 h3,.zp0384 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0384 img{max-width:100%;display:block}
.zp0384 button,.zp0384 a{-webkit-tap-highlight-color:transparent}
.zp0384 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0384 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0384 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0384 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0384 .nav.centered strong{order:2;font-size:24px}
.zp0384 .nav.centered nav:first-child{order:1}
.zp0384 .nav.centered nav:last-child{order:3}
.zp0384 .mobileMenu{display:none}
.zp0384 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0384 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0384 .eyebrow,.zp0384 .sectionTitle>span,.zp0384 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0384 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0384 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0384 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0384 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0384 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0384 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0384 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0384 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0384 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0384 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0384 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0384 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0384 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0384 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0384 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0384 .serviceGrid p{color:var(--muted)}
.zp0384 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0384 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0384 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0384 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0384 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0384 .story p{color:var(--muted)}
.zp0384 details{border-top:1px solid var(--border);padding:20px 0}
.zp0384 details summary{font-weight:800;cursor:pointer}
.zp0384 details p{color:var(--muted);max-width:70ch}
.zp0384 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0384 .hours dl{margin:0}
.zp0384 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0384 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0384 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0384 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0384 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0384 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0384 .p1,.zp0384 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0384 .awards>div{max-width:800px;margin-left:auto}
.zp0384 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0384 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0384 .contact .eyebrow{color:var(--bg)}
.zp0384 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0384 .contactMeta{display:grid;gap:10px}
.zp0384 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0384 .hero{min-height:auto}
.zp0384 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0384 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0384 .nav nav{display:none}
.zp0384 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0384 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0384 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0384 .mobileMenu nav a{padding:10px 8px}
.zp0384 .hero,.zp0384 .dataHero{grid-template-columns:1fr}
.zp0384 .section,.zp0384 .sectionTitle,.zp0384 .story,.zp0384 .hours,.zp0384 .contact{grid-template-columns:1fr}
.zp0384 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0384 .section{display:block}}
@media(max-width:430px){.zp0384{font-size:16px}
.zp0384 .hero,.zp0384 .section,.zp0384 .contact{padding-left:18px;padding-right:18px}
.zp0384 .serviceGrid,.zp0384 .proof,.zp0384 .collectionGrid{grid-template-columns:1fr}
.zp0384 h1{font-size:clamp(42px,14vw,70px)}}

.zp0384 .heroActions a,.zp0384 .primary,.zp0384 .ctaBtn,.zp0384 .btnPrimary,.zp0384 .schedule>a,.zp0384 .newsletter>a{transition:all .2s ease}
.zp0384 .heroActions a:hover,.zp0384 .primary:hover,.zp0384 .ctaBtn:hover,.zp0384 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0384 nav a,.zp0384 .nav a,.zp0384 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0384 nav a:hover,.zp0384 .nav a:hover,.zp0384 .footer a:hover{
  color:var(--primary)
}
.zp0384 .serviceGrid article,.zp0384 .projectCard,.zp0384 .teamCard,.zp0384 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0384 .serviceGrid article:hover,.zp0384 .projectCard:hover,.zp0384 .teamCard:hover,.zp0384 .bentoCard:hover{
  background:var(--surface)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0384 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0384 .sectionTitle,.zp0384 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0384 *,.zp0384 *::before,.zp0384 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0384 a,.zp0384 button,.zp0384 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
