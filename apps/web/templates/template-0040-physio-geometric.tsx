import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0040-physio-geometric", "family": "Geometric", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|offset-cards|proof>awards>manifesto>products>services|micro-radius|brutal-display", "industry": "physio", "hero": "monumental-type", "navigation": "corner-dock", "layout": "offset-cards"};

export default function Template0040({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0040" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0040{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0040 *{box-sizing:border-box}
.zp0040 a{color:inherit;text-decoration:none}
.zp0040 h1,.zp0040 h2,.zp0040 h3,.zp0040 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0040 img{max-width:100%;display:block}
.zp0040 button,.zp0040 a{-webkit-tap-highlight-color:transparent}
.zp0040 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0040 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0040 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0040 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0040 .mobileMenu{display:none}
.zp0040 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0040 .eyebrow,.zp0040 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0040 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0040 .monumentalHero{display:block}
.zp0040 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0040 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0040 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0040 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0040 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0040 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0040 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0040 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0040 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0040 .serviceGrid p{color:var(--muted)}
.zp0040 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0040 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0040 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0040 details{border-top:1px solid var(--border);padding:20px 0}
.zp0040 details summary{font-weight:800;cursor:pointer}
.zp0040 details p{color:var(--muted);max-width:70ch}
.zp0040 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0040 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0040 .p1,.zp0040 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0040 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Black, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0040 .awards>div{max-width:800px;margin-left:auto}
.zp0040 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0040 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0040 .contact .eyebrow{color:var(--bg)}
.zp0040 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0040 .contactMeta{display:grid;gap:10px}
.zp0040 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0040 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
@keyframes enter-39{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0040 .hero{min-height:auto}
.zp0040 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0040 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0040 .nav nav{display:none}
.zp0040 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0040 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0040 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0040 .mobileMenu nav a{padding:10px 8px}
.zp0040 .hero{grid-template-columns:1fr}
.zp0040 .section,.zp0040 .sectionTitle,.zp0040 .contact{grid-template-columns:1fr}
.zp0040 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0040 .section{display:block}}
@media(max-width:430px){.zp0040{font-size:16px}
.zp0040 .hero,.zp0040 .section,.zp0040 .contact{padding-left:18px;padding-right:18px}
.zp0040 .serviceGrid,.zp0040 .proof,.zp0040 .collectionGrid{grid-template-columns:1fr}
.zp0040 h1{font-size:clamp(42px,14vw,70px)}
.zp0040 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0040 .monumentalBody{grid-template-columns:1fr}}

.zp0040 .heroActions a,.zp0040 .primary,.zp0040 .ctaBtn,.zp0040 .btnPrimary,.zp0040 .schedule>a,.zp0040 .newsletter>a{transition:all .2s ease}
.zp0040 .heroActions a:hover,.zp0040 .primary:hover,.zp0040 .ctaBtn:hover,.zp0040 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0040 nav a,.zp0040 .nav a,.zp0040 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0040 nav a:hover,.zp0040 .nav a:hover,.zp0040 .footer a:hover{
  color:var(--primary)
}
.zp0040 .serviceGrid article,.zp0040 .projectCard,.zp0040 .teamCard,.zp0040 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0040 .serviceGrid article:hover,.zp0040 .projectCard:hover,.zp0040 .teamCard:hover,.zp0040 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0040 *,.zp0040 *::before,.zp0040 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0040 a,.zp0040 button,.zp0040 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Request a quote</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
