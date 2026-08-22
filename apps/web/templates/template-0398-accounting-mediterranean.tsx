import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0398-accounting-mediterranean", "family": "Mediterranean", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|full-bleed-chapters|metrics>security>location>proof>newsletter>services|circular|ceremonial", "industry": "accounting", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "full-bleed-chapters"};

export default function Template0398({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Accounting Firm");
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
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0398" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0398{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0398 *{box-sizing:border-box}
.zp0398 a{color:inherit;text-decoration:none}
.zp0398 h1,.zp0398 h2,.zp0398 h3,.zp0398 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0398 img{max-width:100%;display:block}
.zp0398 button,.zp0398 a{-webkit-tap-highlight-color:transparent}
.zp0398 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0398 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0398 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0398 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0398 .nav.cluster{align-items:flex-end}
.zp0398 .mobileMenu{display:none}
.zp0398 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0398 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0398 .eyebrow,.zp0398 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0398 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0398 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0398 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0398 .heroActions a,.zp0398 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0398 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0398 .visual,.zp0398 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0398 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0398 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0398 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0398 .heroPhoto{object-fit:cover}
.zp0398 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0398 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0398 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0398 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0398 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0398 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0398 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0398 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0398 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0398 .serviceGrid p{color:var(--muted)}
.zp0398 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0398 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0398 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0398 details{border-top:1px solid var(--border);padding:20px 0}
.zp0398 details summary{font-weight:800;cursor:pointer}
.zp0398 details p{color:var(--muted);max-width:70ch}
.zp0398 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0398 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0398 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0398 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0398 .metrics div{background:var(--bg);padding:30px}
.zp0398 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Copperplate, Georgia, serif;color:var(--primary)}
.zp0398 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0398 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0398 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0398 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0398 .contact .eyebrow{color:var(--bg)}
.zp0398 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0398 .contactMeta{display:grid;gap:10px}
.zp0398 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0398 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
@media(max-width:1024px){.zp0398 .hero{min-height:auto}
.zp0398 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0398 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0398 .nav nav{display:none}
.zp0398 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0398 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0398 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0398 .mobileMenu nav a{padding:10px 8px}
.zp0398 .hero,.zp0398 .carouselHero{grid-template-columns:1fr}
.zp0398 .section,.zp0398 .sectionTitle,.zp0398 .location,.zp0398 .security,.zp0398 .contact{grid-template-columns:1fr}
.zp0398 .metrics{grid-template-columns:1fr 1fr}
.zp0398 .section{display:block}}
@media(max-width:430px){.zp0398{font-size:16px}
.zp0398 .hero,.zp0398 .section,.zp0398 .contact{padding-left:18px;padding-right:18px}
.zp0398 .serviceGrid,.zp0398 .proof,.zp0398 .metrics{grid-template-columns:1fr}
.zp0398 h1{font-size:clamp(42px,14vw,70px)}}

.zp0398 .heroActions a,.zp0398 .primary,.zp0398 .ctaBtn,.zp0398 .btnPrimary,.zp0398 .schedule>a,.zp0398 .newsletter>a{transition:all .2s ease}
.zp0398 .heroActions a:hover,.zp0398 .primary:hover,.zp0398 .ctaBtn:hover,.zp0398 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0398 nav a,.zp0398 .nav a,.zp0398 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0398 nav a:hover,.zp0398 .nav a:hover,.zp0398 .footer a:hover{
  color:var(--primary)
}
.zp0398 .serviceGrid article,.zp0398 .projectCard,.zp0398 .teamCard,.zp0398 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0398 .serviceGrid article:hover,.zp0398 .projectCard:hover,.zp0398 .teamCard:hover,.zp0398 .bentoCard:hover{
  transform:translateY(-3px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0398 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0398 .sectionTitle,.zp0398 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0398 *,.zp0398 *::before,.zp0398 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0398 a,.zp0398 button,.zp0398 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">97</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Mediterranean / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
