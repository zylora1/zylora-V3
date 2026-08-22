import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1000-professional-organic", "family": "Organic", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|research-led|credentials>integrations>collection>proof>services|micro-radius|brutal-display", "industry": "professional", "hero": "monumental-type", "navigation": "corner-dock", "layout": "research-led"};

export default function Template1000({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Professional Services");
  const headline = String(content.headline || "Senior expertise delivered with clear scope, useful communication, and practical outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Advisory", "Assessment", "Implementation", "Retainers", "Workshops"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp1000" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1000{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1000 *{box-sizing:border-box}
.zp1000 a{color:inherit;text-decoration:none}
.zp1000 h1,.zp1000 h2,.zp1000 h3,.zp1000 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp1000 img{max-width:100%;display:block}
.zp1000 button,.zp1000 a{-webkit-tap-highlight-color:transparent}
.zp1000 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1000 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp1000 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp1000 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1000 .mobileMenu{display:none}
.zp1000 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1000 .eyebrow,.zp1000 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1000 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1000 .monumentalHero{display:block}
.zp1000 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp1000 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp1000 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1000 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1000 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1000 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp1000 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1000 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp1000 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1000 .serviceGrid p{color:var(--muted)}
.zp1000 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1000 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1000 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1000 details{border-top:1px solid var(--border);padding:20px 0}
.zp1000 details summary{font-weight:800;cursor:pointer}
.zp1000 details p{color:var(--muted);max-width:70ch}
.zp1000 .credentials,.zp1000 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp1000 .credentials>div,.zp1000 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp1000 .credentials b,.zp1000 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp1000 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp1000 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp1000 .p1,.zp1000 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp1000 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1000 .contact .eyebrow{color:var(--bg)}
.zp1000 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1000 .contactMeta{display:grid;gap:10px}
.zp1000 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp1000 .hero{min-height:auto}
.zp1000 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1000 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1000 .nav nav{display:none}
.zp1000 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1000 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1000 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1000 .mobileMenu nav a{padding:10px 8px}
.zp1000 .hero{grid-template-columns:1fr}
.zp1000 .section,.zp1000 .sectionTitle,.zp1000 .contact{grid-template-columns:1fr}
.zp1000 .collectionGrid{grid-template-columns:1fr 1fr}
.zp1000 .section{display:block}}
@media(max-width:430px){.zp1000{font-size:16px}
.zp1000 .hero,.zp1000 .section,.zp1000 .contact{padding-left:18px;padding-right:18px}
.zp1000 .serviceGrid,.zp1000 .proof,.zp1000 .collectionGrid{grid-template-columns:1fr}
.zp1000 h1{font-size:clamp(42px,14vw,70px)}
.zp1000 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp1000 .monumentalBody{grid-template-columns:1fr}}

.zp1000 .heroActions a,.zp1000 .primary,.zp1000 .ctaBtn,.zp1000 .btnPrimary,.zp1000 .schedule>a,.zp1000 .newsletter>a{transition:all .2s ease}
.zp1000 .heroActions a:hover,.zp1000 .primary:hover,.zp1000 .ctaBtn:hover,.zp1000 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);border-radius:30px
}
.zp1000 nav a,.zp1000 .nav a,.zp1000 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1000 nav a:hover,.zp1000 .nav a:hover,.zp1000 .footer a:hover{
  color:var(--primary)
}
.zp1000 .serviceGrid article,.zp1000 .projectCard,.zp1000 .teamCard,.zp1000 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1000 .serviceGrid article:hover,.zp1000 .projectCard:hover,.zp1000 .teamCard:hover,.zp1000 .bentoCard:hover{
  transform:translateY(-4px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp1000 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp1000 .sectionTitle,.zp1000 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp1000 *,.zp1000 *::before,.zp1000 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1000 a,.zp1000 button,.zp1000 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Plan your visit</a></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Organic / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
