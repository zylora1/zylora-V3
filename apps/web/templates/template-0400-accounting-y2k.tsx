import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0400-accounting-y2k", "family": "Y2K", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|offset-cards|menu>proof>manifesto>services>credentials|heavy-frame|brutal-display", "industry": "accounting", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "offset-cards"};

export default function Template0400({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Accounting Firm");
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
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0400" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0400{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0400 *{box-sizing:border-box}
.zp0400 a{color:inherit;text-decoration:none}
.zp0400 h1,.zp0400 h2,.zp0400 h3,.zp0400 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0400 img{max-width:100%;display:block}
.zp0400 button,.zp0400 a{-webkit-tap-highlight-color:transparent}
.zp0400 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0400 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0400 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0400 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0400 .nav.centered strong{order:2;font-size:24px}
.zp0400 .nav.centered nav:first-child{order:1}
.zp0400 .nav.centered nav:last-child{order:3}
.zp0400 .mobileMenu{display:none}
.zp0400 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0400 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0400 .eyebrow,.zp0400 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0400 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0400 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0400 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0400 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0400 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0400 .visual,.zp0400 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0400 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0400 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0400 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0400 .heroPhoto{object-fit:cover}
.zp0400 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0400 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0400 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0400 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0400 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0400 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0400 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0400 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0400 .serviceGrid p{color:var(--muted)}
.zp0400 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0400 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0400 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0400 details{border-top:1px solid var(--border);padding:20px 0}
.zp0400 details summary{font-weight:800;cursor:pointer}
.zp0400 details p{color:var(--muted);max-width:70ch}
.zp0400 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0400 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0400 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0400 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0400 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Black, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0400 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0400 .contact .eyebrow{color:var(--bg)}
.zp0400 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0400 .contactMeta{display:grid;gap:10px}
.zp0400 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0400 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0400 .heroCopy{animation:enter-399 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-399{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0400 .hero{min-height:auto}
.zp0400 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0400 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0400 .nav nav{display:none}
.zp0400 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0400 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0400 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0400 .mobileMenu nav a{padding:10px 8px}
.zp0400 .hero,.zp0400 .asymHero{grid-template-columns:1fr}
.zp0400 .section,.zp0400 .sectionTitle,.zp0400 .contact{grid-template-columns:1fr}
.zp0400 .section{display:block}}
@media(max-width:430px){.zp0400{font-size:16px}
.zp0400 .hero,.zp0400 .section,.zp0400 .contact{padding-left:18px;padding-right:18px}
.zp0400 .serviceGrid,.zp0400 .proof{grid-template-columns:1fr}
.zp0400 h1{font-size:clamp(42px,14vw,70px)}}

.zp0400 .heroActions a,.zp0400 .primary,.zp0400 .ctaBtn,.zp0400 .btnPrimary,.zp0400 .schedule>a,.zp0400 .newsletter>a{transition:all .2s ease}
.zp0400 .heroActions a:hover,.zp0400 .primary:hover,.zp0400 .ctaBtn:hover,.zp0400 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.03)
}
.zp0400 nav a,.zp0400 .nav a,.zp0400 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0400 nav a:hover,.zp0400 .nav a:hover,.zp0400 .footer a:hover{
  color:var(--primary)
}
.zp0400 .serviceGrid article,.zp0400 .projectCard,.zp0400 .teamCard,.zp0400 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0400 .serviceGrid article:hover,.zp0400 .projectCard:hover,.zp0400 .teamCard:hover,.zp0400 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0400 *,.zp0400 *::before,.zp0400 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0400 a,.zp0400 button,.zp0400 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">04</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">99</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Y2K / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
