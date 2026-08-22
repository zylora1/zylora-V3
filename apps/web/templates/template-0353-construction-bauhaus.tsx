import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0353-construction-bauhaus", "family": "Bauhaus", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|gallery-index|collection>faq>proof>packages>services>metrics|square-editorial|friendly", "industry": "construction", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "gallery-index"};

export default function Template0353({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0353" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0353{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0353 *{box-sizing:border-box}
.zp0353 a{color:inherit;text-decoration:none}
.zp0353 h1,.zp0353 h2,.zp0353 h3,.zp0353 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0353 img{max-width:100%;display:block}
.zp0353 button,.zp0353 a{-webkit-tap-highlight-color:transparent}
.zp0353 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0353 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0353 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0353 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0353 .mobileMenu{display:none}
.zp0353 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0353 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0353 .eyebrow,.zp0353 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0353 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0353 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0353 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0353 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0353 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0353 .typeOnly{grid-template-columns:1fr .28fr}
.zp0353 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0353 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0353 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0353 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0353 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0353 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0353 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0353 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0353 .serviceGrid p{color:var(--muted)}
.zp0353 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0353 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0353 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0353 .faqList{max-width:900px;margin-left:auto}
.zp0353 details{border-top:1px solid var(--border);padding:20px 0}
.zp0353 details summary{font-weight:800;cursor:pointer}
.zp0353 details p{color:var(--muted);max-width:70ch}
.zp0353 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0353 .metrics div{background:var(--bg);padding:30px}
.zp0353 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Trebuchet MS, Arial, sans-serif;color:var(--primary)}
.zp0353 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0353 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0353 .p1,.zp0353 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0353 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0353 .packages>.sectionTitle{grid-column:1/-1}
.zp0353 .packages article{padding:24px;border:1px solid var(--border)}
.zp0353 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0353 .contact .eyebrow{color:var(--bg)}
.zp0353 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0353 .contactMeta{display:grid;gap:10px}
.zp0353 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0353 .heroCopy{animation:enter-352 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-352{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0353 .hero{min-height:auto}
.zp0353 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0353 .proof{grid-template-columns:1fr 1fr}
.zp0353 .packages{grid-template-columns:1fr 1fr}
.zp0353 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0353 .nav nav{display:none}
.zp0353 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0353 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0353 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0353 .mobileMenu nav a{padding:10px 8px}
.zp0353 .hero{grid-template-columns:1fr}
.zp0353 .section,.zp0353 .sectionTitle,.zp0353 .contact{grid-template-columns:1fr}
.zp0353 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0353 .metrics{grid-template-columns:1fr 1fr}
.zp0353 .section{display:block}}
@media(max-width:430px){.zp0353{font-size:16px}
.zp0353 .hero,.zp0353 .section,.zp0353 .contact{padding-left:18px;padding-right:18px}
.zp0353 .serviceGrid,.zp0353 .proof,.zp0353 .collectionGrid,.zp0353 .metrics,.zp0353 .packages{grid-template-columns:1fr}
.zp0353 h1{font-size:clamp(42px,14vw,70px)}}

.zp0353 .heroActions a,.zp0353 .primary,.zp0353 .ctaBtn,.zp0353 .btnPrimary,.zp0353 .schedule>a,.zp0353 .newsletter>a{transition:all .2s ease}
.zp0353 .heroActions a:hover,.zp0353 .primary:hover,.zp0353 .ctaBtn:hover,.zp0353 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0353 nav a,.zp0353 .nav a,.zp0353 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0353 nav a:hover,.zp0353 .nav a:hover,.zp0353 .footer a:hover{
  color:var(--primary)
}
.zp0353 .serviceGrid article,.zp0353 .projectCard,.zp0353 .teamCard,.zp0353 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0353 .serviceGrid article:hover,.zp0353 .projectCard:hover,.zp0353 .teamCard:hover,.zp0353 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0353 *,.zp0353 *::before,.zp0353 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0353 a,.zp0353 button,.zp0353 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
