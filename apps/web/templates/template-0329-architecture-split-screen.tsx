import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0329-architecture-split-screen", "family": "Split-screen", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|schedule-led|services>faq>values>proof>story>research|hairline|friendly", "industry": "architecture", "hero": "poster", "navigation": "fullscreen-menu", "layout": "schedule-led"};

export default function Template0329({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Architecture Studio");
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
  const storyQuote = "\u201cArchitecture shaped by context, material, daylight, and how people actually live.\u201d";
  const storyBody = "Vale Architecture Studio is presented as a real working architecture studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0329" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0329{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0329 *{box-sizing:border-box}
.zp0329 a{color:inherit;text-decoration:none}
.zp0329 h1,.zp0329 h2,.zp0329 h3,.zp0329 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0329 img{max-width:100%;display:block}
.zp0329 button,.zp0329 a{-webkit-tap-highlight-color:transparent}
.zp0329 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0329 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0329 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0329 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0329 .nav.menu details{position:relative}
.zp0329 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0329 .mobileMenu{display:none}
.zp0329 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0329 .eyebrow,.zp0329 .sectionTitle>span,.zp0329 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0329 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0329 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0329 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0329 .posterTop,.zp0329 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0329 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0329 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0329 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0329 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0329 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0329 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0329 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0329 .serviceGrid p{color:var(--muted)}
.zp0329 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0329 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0329 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0329 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0329 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0329 .story p{color:var(--muted)}
.zp0329 .faqList{max-width:900px;margin-left:auto}
.zp0329 details{border-top:1px solid var(--border);padding:20px 0}
.zp0329 details summary{font-weight:800;cursor:pointer}
.zp0329 details p{color:var(--muted);max-width:70ch}
.zp0329 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Trebuchet MS, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0329 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0329 .researchRows{max-width:900px;margin-left:auto}
.zp0329 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0329 .contact .eyebrow{color:var(--bg)}
.zp0329 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0329 .contactMeta{display:grid;gap:10px}
.zp0329 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-328{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0329 .hero{min-height:auto}
.zp0329 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0329 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0329 .nav nav{display:none}
.zp0329 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0329 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0329 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0329 .mobileMenu nav a{padding:10px 8px}
.zp0329 .hero{grid-template-columns:1fr}
.zp0329 .section,.zp0329 .sectionTitle,.zp0329 .story,.zp0329 .contact{grid-template-columns:1fr}
.zp0329 .section{display:block}}
@media(max-width:430px){.zp0329{font-size:16px}
.zp0329 .hero,.zp0329 .section,.zp0329 .contact{padding-left:18px;padding-right:18px}
.zp0329 .serviceGrid,.zp0329 .proof{grid-template-columns:1fr}
.zp0329 h1{font-size:clamp(42px,14vw,70px)}
.zp0329 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0329 .heroActions a,.zp0329 .primary,.zp0329 .ctaBtn,.zp0329 .btnPrimary,.zp0329 .schedule>a,.zp0329 .newsletter>a{transition:all .2s ease}
.zp0329 .heroActions a:hover,.zp0329 .primary:hover,.zp0329 .ctaBtn:hover,.zp0329 .btnPrimary:hover{
  opacity:.85
}
.zp0329 nav a,.zp0329 .nav a,.zp0329 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0329 nav a:hover,.zp0329 .nav a:hover,.zp0329 .footer a:hover{
  color:var(--primary)
}
.zp0329 .serviceGrid article,.zp0329 .projectCard,.zp0329 .teamCard,.zp0329 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0329 .serviceGrid article:hover,.zp0329 .projectCard:hover,.zp0329 .teamCard:hover,.zp0329 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0329 *,.zp0329 *::before,.zp0329 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0329 a,.zp0329 button,.zp0329 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
