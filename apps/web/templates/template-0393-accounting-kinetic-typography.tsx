import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0393-accounting-kinetic-typography", "family": "Kinetic Typography", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|split-scroll|process>community>destinations>manifesto>proof>credentials>services|hairline|slab", "industry": "accounting", "hero": "poster", "navigation": "fullscreen-menu", "layout": "split-scroll"};

export default function Template0393({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Accounting Firm");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ICAEW/ACCA qualified", "Xero Platinum Partner", "Zero missed deadlines", "Fixed monthly fees"];
  const storyBody = "Vale Accounting Firm is presented as a real working accounting firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Switched from a large firm where I never spoke to the same person twice. Here my accountant knows my business inside out.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0393" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0393{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0393 *{box-sizing:border-box}
.zp0393 a{color:inherit;text-decoration:none}
.zp0393 h1,.zp0393 h2,.zp0393 h3,.zp0393 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0393 img{max-width:100%;display:block}
.zp0393 button,.zp0393 a{-webkit-tap-highlight-color:transparent}
.zp0393 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0393 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0393 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0393 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0393 .nav.menu details{position:relative}
.zp0393 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0393 .mobileMenu{display:none}
.zp0393 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0393 .eyebrow,.zp0393 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0393 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0393 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0393 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0393 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0393 .posterTop,.zp0393 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0393 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0393 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0393 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0393 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0393 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0393 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0393 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0393 .serviceGrid p{color:var(--muted)}
.zp0393 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0393 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0393 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0393 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0393 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0393 details{border-top:1px solid var(--border);padding:20px 0}
.zp0393 details summary{font-weight:800;cursor:pointer}
.zp0393 details p{color:var(--muted);max-width:70ch}
.zp0393 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0393 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0393 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0393 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0393 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Rockwell, Courier New, serif;letter-spacing:-.04em;max-width:17ch}
.zp0393 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0393 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0393 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0393 .contact .eyebrow{color:var(--bg)}
.zp0393 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0393 .contactMeta{display:grid;gap:10px}
.zp0393 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-392{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0393 .hero{min-height:auto}
.zp0393 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0393 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0393 .nav nav{display:none}
.zp0393 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0393 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0393 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0393 .mobileMenu nav a{padding:10px 8px}
.zp0393 .hero{grid-template-columns:1fr}
.zp0393 .section,.zp0393 .sectionTitle,.zp0393 .contact{grid-template-columns:1fr}
.zp0393 .section{display:block}}
@media(max-width:430px){.zp0393{font-size:16px}
.zp0393 .hero,.zp0393 .section,.zp0393 .contact{padding-left:18px;padding-right:18px}
.zp0393 .serviceGrid,.zp0393 .proof,.zp0393 .destinations>div:last-child{grid-template-columns:1fr}
.zp0393 h1{font-size:clamp(42px,14vw,70px)}
.zp0393 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0393 .heroActions a,.zp0393 .primary,.zp0393 .ctaBtn,.zp0393 .btnPrimary,.zp0393 .schedule>a,.zp0393 .newsletter>a{transition:all .2s ease}
.zp0393 .heroActions a:hover,.zp0393 .primary:hover,.zp0393 .ctaBtn:hover,.zp0393 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0393 nav a,.zp0393 .nav a,.zp0393 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0393 nav a:hover,.zp0393 .nav a:hover,.zp0393 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0393 .serviceGrid article,.zp0393 .projectCard,.zp0393 .teamCard,.zp0393 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0393 .serviceGrid article:hover,.zp0393 .projectCard:hover,.zp0393 .teamCard:hover,.zp0393 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0393 *,.zp0393 *::before,.zp0393 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0393 a,.zp0393 button,.zp0393 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
