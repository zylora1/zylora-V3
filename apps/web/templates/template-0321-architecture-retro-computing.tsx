import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0321-architecture-retro-computing", "family": "Retro Computing", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|split-scroll|collection>services>proof>comparison>faq>research>programmes|square-editorial|slab", "industry": "architecture", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "split-scroll"};

export default function Template0321({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Architecture Studio");
  const headline = String(content.headline || "Architecture shaped by context, material, daylight, and how people actually live.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential design", "Commercial projects", "Planning", "Interiors", "Feasibility studies"];
  const industryLabel = "Architecture studio";
  const serviceNotes = ["Concept to planning permission service: we handle the technical and navigate the bureaucratic.", "New build and conversion projects for residential, commercial, and mixed-use clients.", "Planning appeal specialists with a strong track record on complex applications.", "BIM-capable studio: full 3D modelling and clash detection before a brick is laid.", "Post-occupancy evaluation included — we track how buildings perform, not just how they look."];
  const proofPoints = ["ARB and RIBA chartered", "RIBA Award winners", "£2M PI insurance", "Sustainable design lead"];
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0321" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0321{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0321 *{box-sizing:border-box}
.zp0321 a{color:inherit;text-decoration:none}
.zp0321 h1,.zp0321 h2,.zp0321 h3,.zp0321 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0321 img{max-width:100%;display:block}
.zp0321 button,.zp0321 a{-webkit-tap-highlight-color:transparent}
.zp0321 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0321 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0321 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0321 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0321 .mobileMenu{display:none}
.zp0321 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0321 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0321 .eyebrow,.zp0321 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0321 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0321 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0321 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0321 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0321 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0321 .typeOnly{grid-template-columns:1fr .28fr}
.zp0321 .oversizeWord{font-family:Rockwell, Courier New, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0321 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0321 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0321 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0321 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0321 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0321 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0321 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0321 .serviceGrid p{color:var(--muted)}
.zp0321 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0321 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0321 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0321 .faqList{max-width:900px;margin-left:auto}
.zp0321 details{border-top:1px solid var(--border);padding:20px 0}
.zp0321 details summary{font-weight:800;cursor:pointer}
.zp0321 details p{color:var(--muted);max-width:70ch}
.zp0321 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0321 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0321 .p1,.zp0321 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0321 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0321 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0321 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0321 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0321 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0321 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0321 .researchRows{max-width:900px;margin-left:auto}
.zp0321 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0321 .contact .eyebrow{color:var(--bg)}
.zp0321 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0321 .contactMeta{display:grid;gap:10px}
.zp0321 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0321{image-rendering:pixelated}
.zp0321 *{border-radius:0!important}
.zp0321 .heroCopy{animation:enter-320 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-320{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0321 .hero{min-height:auto}
.zp0321 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0321 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0321 .nav nav{display:none}
.zp0321 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0321 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0321 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0321 .mobileMenu nav a{padding:10px 8px}
.zp0321 .hero{grid-template-columns:1fr}
.zp0321 .section,.zp0321 .sectionTitle,.zp0321 .contact{grid-template-columns:1fr}
.zp0321 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0321 .section{display:block}}
@media(max-width:430px){.zp0321{font-size:16px}
.zp0321 .hero,.zp0321 .section,.zp0321 .contact{padding-left:18px;padding-right:18px}
.zp0321 .serviceGrid,.zp0321 .proof,.zp0321 .collectionGrid,.zp0321 .programmes>div:last-child,.zp0321 .compareGrid{grid-template-columns:1fr}
.zp0321 h1{font-size:clamp(42px,14vw,70px)}}

.zp0321 .heroActions a,.zp0321 .primary,.zp0321 .ctaBtn,.zp0321 .btnPrimary,.zp0321 .schedule>a,.zp0321 .newsletter>a{transition:all .2s ease}
.zp0321 .heroActions a:hover,.zp0321 .primary:hover,.zp0321 .ctaBtn:hover,.zp0321 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0321 nav a,.zp0321 .nav a,.zp0321 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0321 nav a:hover,.zp0321 .nav a:hover,.zp0321 .footer a:hover{
  color:var(--primary)
}
.zp0321 .serviceGrid article,.zp0321 .projectCard,.zp0321 .teamCard,.zp0321 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0321 .serviceGrid article:hover,.zp0321 .projectCard:hover,.zp0321 .teamCard:hover,.zp0321 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0321 *,.zp0321 *::before,.zp0321 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0321 a,.zp0321 button,.zp0321 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
