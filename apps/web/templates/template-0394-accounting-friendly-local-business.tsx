import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0394-accounting-friendly-local-business", "family": "Friendly Local Business", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|local-service-map|proof>services>case-study>press>programmes|paper-sheet|retro-bookish", "industry": "accounting", "hero": "service-led", "navigation": "left-sidebar", "layout": "local-service-map"};

export default function Template0394({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Accounting Firm");
  const headline = String(content.headline || "Accurate numbers, useful reporting, and advice that helps owners make better decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Bookkeeping", "Tax filing", "Payroll", "Management accounts", "CFO advisory"];
  const industryLabel = "Accounting firm";
  const serviceNotes = ["Monthly management accounts with commentary — not just figures, but what they mean.", "Tax planning built around your business calendar, not filed as an afterthought.", "Payroll, auto-enrolment, and CIS handled so you focus on the work, not the admin.", "Cloud accounting setup and training: Xero, QuickBooks, or Sage — your choice.", "Annual accounts filed with HMRC two months early — never a penalty in 15 years."];
  const proofPoints = ["ICAEW/ACCA qualified", "Xero Platinum Partner", "Zero missed deadlines", "Fixed monthly fees"];
  const testimonial = "Switched from a large firm where I never spoke to the same person twice. Here my accountant knows my business inside out.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0394" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0394{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0394 *{box-sizing:border-box}
.zp0394 a{color:inherit;text-decoration:none}
.zp0394 h1,.zp0394 h2,.zp0394 h3,.zp0394 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0394 img{max-width:100%;display:block}
.zp0394 button,.zp0394 a{-webkit-tap-highlight-color:transparent}
.zp0394 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0394 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0394 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0394 .mobileMenu{display:none}
.zp0394:has(.navRail)>.hero,.zp0394:has(.navRail)>.section,.zp0394:has(.navRail)>.contact,.zp0394:has(.navRail)>.footer{margin-left:190px}
.zp0394 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0394 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0394 .eyebrow,.zp0394 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0394 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0394 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0394 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0394 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0394 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0394 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0394 .serviceHeroList{display:grid;gap:4px}
.zp0394 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0394 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0394 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0394 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0394 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0394 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0394 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0394 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0394 .serviceGrid p{color:var(--muted)}
.zp0394 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0394 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0394 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0394 details{border-top:1px solid var(--border);padding:20px 0}
.zp0394 details summary{font-weight:800;cursor:pointer}
.zp0394 details p{color:var(--muted);max-width:70ch}
.zp0394 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0394 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0394 .projects article:nth-child(2){transform:translateY(32px)}
.zp0394 .awards>div{max-width:800px;margin-left:auto}
.zp0394 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0394 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0394 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0394 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0394 .contact .eyebrow{color:var(--bg)}
.zp0394 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0394 .contactMeta{display:grid;gap:10px}
.zp0394 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0394 .heroCopy{animation:enter-393 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-393{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0394 .hero{min-height:auto}
.zp0394 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0394 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0394 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0394 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0394 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0394 .mobileMenu nav a{padding:10px 8px}
.zp0394 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0394:has(.navRail)>.hero,.zp0394:has(.navRail)>.section,.zp0394:has(.navRail)>.contact,.zp0394:has(.navRail)>.footer{margin-left:0}
.zp0394 .hero,.zp0394 .serviceHero{grid-template-columns:1fr}
.zp0394 .section,.zp0394 .sectionTitle,.zp0394 .contact{grid-template-columns:1fr}
.zp0394 .projects .projectGrid{grid-template-columns:1fr}
.zp0394 .projects article:nth-child(2){transform:none}
.zp0394 .section{display:block}}
@media(max-width:430px){.zp0394{font-size:16px}
.zp0394 .hero,.zp0394 .section,.zp0394 .contact{padding-left:18px;padding-right:18px}
.zp0394 .serviceGrid,.zp0394 .proof,.zp0394 .programmes>div:last-child{grid-template-columns:1fr}
.zp0394 h1{font-size:clamp(42px,14vw,70px)}}

.zp0394 .heroActions a,.zp0394 .primary,.zp0394 .ctaBtn,.zp0394 .btnPrimary,.zp0394 .schedule>a,.zp0394 .newsletter>a{transition:all .2s ease}
.zp0394 .heroActions a:hover,.zp0394 .primary:hover,.zp0394 .ctaBtn:hover,.zp0394 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0394 nav a,.zp0394 .nav a,.zp0394 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0394 nav a:hover,.zp0394 .nav a:hover,.zp0394 .footer a:hover{
  color:var(--primary)
}
.zp0394 .serviceGrid article,.zp0394 .projectCard,.zp0394 .teamCard,.zp0394 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0394 .serviceGrid article:hover,.zp0394 .projectCard:hover,.zp0394 .teamCard:hover,.zp0394 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0394 *,.zp0394 *::before,.zp0394 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0394 a,.zp0394 button,.zp0394 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
