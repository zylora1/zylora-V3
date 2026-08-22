import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0135-school-horizontal-storytelling", "family": "Horizontal Storytelling", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|timeline-narrative|testimonial>services>projects>integrations>proof>destinations>programmes|asymmetric-radius|geometric", "industry": "school", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "timeline-narrative"};

export default function Template0135({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen School");
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
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const testimonialName = "Stillwater client";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0135" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0135{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0135 *{box-sizing:border-box}
.zp0135 a{color:inherit;text-decoration:none}
.zp0135 h1,.zp0135 h2,.zp0135 h3,.zp0135 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0135 img{max-width:100%;display:block}
.zp0135 button,.zp0135 a{-webkit-tap-highlight-color:transparent}
.zp0135 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0135 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0135 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0135 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0135 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0135 .nav.index nav{justify-content:flex-end}
.zp0135 .mobileMenu{display:none}
.zp0135 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0135 .eyebrow,.zp0135 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0135 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0135 .minimalHero{display:block;min-height:74vh}
.zp0135 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0135 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0135 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0135 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0135 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0135 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0135 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0135 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0135 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0135 .serviceGrid p{color:var(--muted)}
.zp0135 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0135 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0135 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0135 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0135 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0135 .testimonial>div{align-self:end}
.zp0135 .testimonial span{display:block;opacity:.7}
.zp0135 details{border-top:1px solid var(--border);padding:20px 0}
.zp0135 details summary{font-weight:800;cursor:pointer}
.zp0135 details p{color:var(--muted);max-width:70ch}
.zp0135 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0135 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0135 .projects article:nth-child(2){transform:translateY(32px)}
.zp0135 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0135 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0135 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0135 .programmes>div:last-child,.zp0135 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0135 .programmes article,.zp0135 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0135 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0135 .contact .eyebrow{color:var(--bg)}
.zp0135 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0135 .contactMeta{display:grid;gap:10px}
.zp0135 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-134{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0135 .hero{min-height:auto}
.zp0135 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0135 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0135 .nav nav{display:none}
.zp0135 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0135 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0135 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0135 .mobileMenu nav a{padding:10px 8px}
.zp0135 .hero{grid-template-columns:1fr}
.zp0135 .section,.zp0135 .sectionTitle,.zp0135 .contact{grid-template-columns:1fr}
.zp0135 .testimonial{grid-template-columns:1fr}
.zp0135 .projects .projectGrid{grid-template-columns:1fr}
.zp0135 .projects article:nth-child(2){transform:none}
.zp0135 .section{display:block}}
@media(max-width:430px){.zp0135{font-size:16px}
.zp0135 .hero,.zp0135 .section,.zp0135 .contact{padding-left:18px;padding-right:18px}
.zp0135 .serviceGrid,.zp0135 .proof,.zp0135 .programmes>div:last-child,.zp0135 .destinations>div:last-child{grid-template-columns:1fr}
.zp0135 h1{font-size:clamp(42px,14vw,70px)}
.zp0135 .minimalFoot{grid-template-columns:1fr}
.zp0135 .nav.index{grid-template-columns:1fr auto}
.zp0135 .nav.index>span{display:none}}

.zp0135 .heroActions a,.zp0135 .primary,.zp0135 .ctaBtn,.zp0135 .btnPrimary,.zp0135 .schedule>a,.zp0135 .newsletter>a{transition:all .2s ease}
.zp0135 .heroActions a:hover,.zp0135 .primary:hover,.zp0135 .ctaBtn:hover,.zp0135 .btnPrimary:hover{
  opacity:.8
}
.zp0135 nav a,.zp0135 .nav a,.zp0135 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0135 nav a:hover,.zp0135 .nav a:hover,.zp0135 .footer a:hover{
  color:var(--primary)
}
.zp0135 .serviceGrid article,.zp0135 .projectCard,.zp0135 .teamCard,.zp0135 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0135 .serviceGrid article:hover,.zp0135 .projectCard:hover,.zp0135 .teamCard:hover,.zp0135 .bentoCard:hover{
  transform:translateX(2px)
}
@media(prefers-reduced-motion:reduce){.zp0135 *,.zp0135 *::before,.zp0135 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0135 a,.zp0135 button,.zp0135 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Call us</a></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Horizontal Storytelling / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
