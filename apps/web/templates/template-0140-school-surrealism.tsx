import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0140-school-surrealism", "family": "Surrealism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|booking-led|research>press>proof>services>metrics>process|notched|product-ui", "industry": "school", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "booking-led"};

export default function Template0140({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0140" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0140{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0140 *{box-sizing:border-box}
.zp0140 a{color:inherit;text-decoration:none}
.zp0140 h1,.zp0140 h2,.zp0140 h3,.zp0140 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0140 img{max-width:100%;display:block}
.zp0140 button,.zp0140 a{-webkit-tap-highlight-color:transparent}
.zp0140 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0140 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0140 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0140 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0140 .mobileMenu{display:none}
.zp0140 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0140 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0140 .eyebrow,.zp0140 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0140 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0140 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0140 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0140 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0140 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0140 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0140 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0140 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0140 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0140 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0140 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0140 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0140 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0140 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0140 .serviceGrid p{color:var(--muted)}
.zp0140 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0140 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0140 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0140 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0140 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0140 details{border-top:1px solid var(--border);padding:20px 0}
.zp0140 details summary{font-weight:800;cursor:pointer}
.zp0140 details p{color:var(--muted);max-width:70ch}
.zp0140 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0140 .metrics div{background:var(--bg);padding:30px}
.zp0140 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Segoe UI, Arial, sans-serif;color:var(--primary)}
.zp0140 .awards>div{max-width:800px;margin-left:auto}
.zp0140 .awards p,.zp0140 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0140 .researchRows{max-width:900px;margin-left:auto}
.zp0140 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0140 .contact .eyebrow{color:var(--bg)}
.zp0140 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0140 .contactMeta{display:grid;gap:10px}
.zp0140 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0140 .heroCopy{animation:enter-139 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-139{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0140 .hero{min-height:auto}
.zp0140 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0140 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0140 .nav nav{display:none}
.zp0140 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0140 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0140 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0140 .mobileMenu nav a{padding:10px 8px}
.zp0140 .hero,.zp0140 .navLedHero{grid-template-columns:1fr}
.zp0140 .section,.zp0140 .sectionTitle,.zp0140 .contact{grid-template-columns:1fr}
.zp0140 .metrics{grid-template-columns:1fr 1fr}
.zp0140 .section{display:block}}
@media(max-width:430px){.zp0140{font-size:16px}
.zp0140 .hero,.zp0140 .section,.zp0140 .contact{padding-left:18px;padding-right:18px}
.zp0140 .serviceGrid,.zp0140 .proof,.zp0140 .metrics{grid-template-columns:1fr}
.zp0140 h1{font-size:clamp(42px,14vw,70px)}}

.zp0140 .heroActions a,.zp0140 .primary,.zp0140 .ctaBtn,.zp0140 .btnPrimary,.zp0140 .schedule>a,.zp0140 .newsletter>a{transition:all .2s ease}
.zp0140 .heroActions a:hover,.zp0140 .primary:hover,.zp0140 .ctaBtn:hover,.zp0140 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0140 nav a,.zp0140 .nav a,.zp0140 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0140 nav a:hover,.zp0140 .nav a:hover,.zp0140 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0140 .serviceGrid article,.zp0140 .projectCard,.zp0140 .teamCard,.zp0140 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0140 .serviceGrid article:hover,.zp0140 .projectCard:hover,.zp0140 .teamCard:hover,.zp0140 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0140 *,.zp0140 *::before,.zp0140 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0140 a,.zp0140 button,.zp0140 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
