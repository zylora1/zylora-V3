import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0380-legal-scandinavian", "family": "Scandinavian", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|conversion-first|proof>faq>team>research>story>services|notched|product-ui", "industry": "legal", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "conversion-first"};

export default function Template0380({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Law Firm");
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
  const storyBody = "Elm Law Firm is presented as a real working law firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0380" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0380{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0380 *{box-sizing:border-box}
.zp0380 a{color:inherit;text-decoration:none}
.zp0380 h1,.zp0380 h2,.zp0380 h3,.zp0380 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0380 img{max-width:100%;display:block}
.zp0380 button,.zp0380 a{-webkit-tap-highlight-color:transparent}
.zp0380 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0380 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0380 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0380 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0380 .mobileMenu{display:none}
.zp0380 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0380 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0380 .eyebrow,.zp0380 .sectionTitle>span,.zp0380 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0380 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0380 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0380 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0380 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0380 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0380 .mapHero{grid-template-columns:1fr 1fr}
.zp0380 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0380 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0380 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0380 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0380 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0380 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0380 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0380 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0380 .serviceGrid p{color:var(--muted)}
.zp0380 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0380 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0380 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0380 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0380 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0380 .story p{color:var(--muted)}
.zp0380 .faqList{max-width:900px;margin-left:auto}
.zp0380 details{border-top:1px solid var(--border);padding:20px 0}
.zp0380 details summary{font-weight:800;cursor:pointer}
.zp0380 details p{color:var(--muted);max-width:70ch}
.zp0380 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0380 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0380 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Segoe UI, Arial, sans-serif;margin-bottom:18px}
.zp0380 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0380 .researchRows{max-width:900px;margin-left:auto}
.zp0380 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0380 .contact .eyebrow{color:var(--bg)}
.zp0380 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0380 .contactMeta{display:grid;gap:10px}
.zp0380 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0380 .heroCopy{animation:enter-379 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-379{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0380 .hero{min-height:auto}
.zp0380 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0380 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0380 .nav nav{display:none}
.zp0380 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0380 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0380 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0380 .mobileMenu nav a{padding:10px 8px}
.zp0380 .hero,.zp0380 .mapHero{grid-template-columns:1fr}
.zp0380 .section,.zp0380 .sectionTitle,.zp0380 .story,.zp0380 .contact{grid-template-columns:1fr}
.zp0380 .teamGrid{grid-template-columns:1fr 1fr}
.zp0380 .section{display:block}}
@media(max-width:430px){.zp0380{font-size:16px}
.zp0380 .hero,.zp0380 .section,.zp0380 .contact{padding-left:18px;padding-right:18px}
.zp0380 .serviceGrid,.zp0380 .proof,.zp0380 .teamGrid{grid-template-columns:1fr}
.zp0380 h1{font-size:clamp(42px,14vw,70px)}}

.zp0380 .heroActions a,.zp0380 .primary,.zp0380 .ctaBtn,.zp0380 .btnPrimary,.zp0380 .schedule>a,.zp0380 .newsletter>a{transition:all .2s ease}
.zp0380 .heroActions a:hover,.zp0380 .primary:hover,.zp0380 .ctaBtn:hover,.zp0380 .btnPrimary:hover{
  opacity:.75
}
.zp0380 nav a,.zp0380 .nav a,.zp0380 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0380 nav a:hover,.zp0380 .nav a:hover,.zp0380 .footer a:hover{
  opacity:.65
}
.zp0380 .serviceGrid article,.zp0380 .projectCard,.zp0380 .teamCard,.zp0380 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0380 .serviceGrid article:hover,.zp0380 .projectCard:hover,.zp0380 .teamCard:hover,.zp0380 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0380 *,.zp0380 *::before,.zp0380 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0380 a,.zp0380 button,.zp0380 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
