import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0800-weddings-geometric", "family": "Geometric", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|dashboard-story|proof>metrics>schedule>services>programmes>press|heavy-frame|newspaper", "industry": "weddings", "hero": "data-led", "navigation": "centered-logo", "layout": "dashboard-story"};

export default function Template0800({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0800" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0800{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0800 *{box-sizing:border-box}
.zp0800 a{color:inherit;text-decoration:none}
.zp0800 h1,.zp0800 h2,.zp0800 h3,.zp0800 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0800 img{max-width:100%;display:block}
.zp0800 button,.zp0800 a{-webkit-tap-highlight-color:transparent}
.zp0800 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0800 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0800 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0800 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0800 .nav.centered strong{order:2;font-size:24px}
.zp0800 .nav.centered nav:first-child{order:1}
.zp0800 .nav.centered nav:last-child{order:3}
.zp0800 .mobileMenu{display:none}
.zp0800 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0800 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0800 .eyebrow,.zp0800 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0800 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0800 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0800 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0800 .heroActions a,.zp0800 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0800 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0800 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0800 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0800 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0800 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0800 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0800 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0800 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0800 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0800 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0800 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0800 .serviceGrid p{color:var(--muted)}
.zp0800 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0800 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0800 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0800 details{border-top:1px solid var(--border);padding:20px 0}
.zp0800 details summary{font-weight:800;cursor:pointer}
.zp0800 details p{color:var(--muted);max-width:70ch}
.zp0800 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0800 .metrics div{background:var(--bg);padding:30px}
.zp0800 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Times New Roman, serif;color:var(--primary)}
.zp0800 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0800 .awards>div{max-width:800px;margin-left:auto}
.zp0800 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0800 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0800 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0800 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0800 .contact .eyebrow{color:var(--bg)}
.zp0800 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0800 .contactMeta{display:grid;gap:10px}
.zp0800 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0800 .heroCopy{animation:enter-799 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-799{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0800 .hero{min-height:auto}
.zp0800 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0800 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0800 .nav nav{display:none}
.zp0800 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0800 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0800 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0800 .mobileMenu nav a{padding:10px 8px}
.zp0800 .hero,.zp0800 .dataHero{grid-template-columns:1fr}
.zp0800 .section,.zp0800 .sectionTitle,.zp0800 .contact{grid-template-columns:1fr}
.zp0800 .metrics{grid-template-columns:1fr 1fr}
.zp0800 .section{display:block}}
@media(max-width:430px){.zp0800{font-size:16px}
.zp0800 .hero,.zp0800 .section,.zp0800 .contact{padding-left:18px;padding-right:18px}
.zp0800 .serviceGrid,.zp0800 .proof,.zp0800 .metrics,.zp0800 .programmes>div:last-child{grid-template-columns:1fr}
.zp0800 h1{font-size:clamp(42px,14vw,70px)}}

.zp0800 .heroActions a,.zp0800 .primary,.zp0800 .ctaBtn,.zp0800 .btnPrimary,.zp0800 .schedule>a,.zp0800 .newsletter>a{transition:all .2s ease}
.zp0800 .heroActions a:hover,.zp0800 .primary:hover,.zp0800 .ctaBtn:hover,.zp0800 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0800 nav a,.zp0800 .nav a,.zp0800 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0800 nav a:hover,.zp0800 .nav a:hover,.zp0800 .footer a:hover{
  color:var(--primary)
}
.zp0800 .serviceGrid article,.zp0800 .projectCard,.zp0800 .teamCard,.zp0800 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0800 .serviceGrid article:hover,.zp0800 .projectCard:hover,.zp0800 .teamCard:hover,.zp0800 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0800 *,.zp0800 *::before,.zp0800 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0800 a,.zp0800 button,.zp0800 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
