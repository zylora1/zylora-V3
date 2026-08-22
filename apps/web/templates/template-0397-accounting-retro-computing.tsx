"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0397-accounting-retro-computing", "family": "Retro Computing", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|editorial-spine|values>services>manifesto>availability>proof|hard-outline|museum", "industry": "accounting", "hero": "side-caption", "navigation": "compact-floating", "layout": "editorial-spine"};

export default function Template0397({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Accounting Firm");
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
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0397" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0397{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0397 *{box-sizing:border-box}
.zp0397 a{color:inherit;text-decoration:none}
.zp0397 h1,.zp0397 h2,.zp0397 h3,.zp0397 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0397 img{max-width:100%;display:block}
.zp0397 button,.zp0397 a{-webkit-tap-highlight-color:transparent}
.zp0397 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0397 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0397 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0397 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0397 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0397 .mobileMenu{display:none}
.zp0397 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0397 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0397 .eyebrow,.zp0397 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0397 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0397 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0397 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0397 .heroActions a,.zp0397 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0397 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0397 .visual,.zp0397 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0397 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0397 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0397 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0397 .heroPhoto{object-fit:cover}
.zp0397 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0397 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0397 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0397 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0397 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0397 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0397 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0397 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0397 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0397 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0397 .serviceGrid p{color:var(--muted)}
.zp0397 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0397 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0397 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0397 details{border-top:1px solid var(--border);padding:20px 0}
.zp0397 details summary{font-weight:800;cursor:pointer}
.zp0397 details p{color:var(--muted);max-width:70ch}
.zp0397 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0397 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Gill Sans, Avenir, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0397 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0397 .contact .eyebrow{color:var(--bg)}
.zp0397 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0397 .contactMeta{display:grid;gap:10px}
.zp0397 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0397{image-rendering:pixelated}
.zp0397 *{border-radius:0!important}
.zp0397 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp0397 .heroCopy{animation:enter-396 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-396{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0397 .hero{min-height:auto}
.zp0397 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0397 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0397 .nav nav{display:none}
.zp0397 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0397 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0397 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0397 .mobileMenu nav a{padding:10px 8px}
.zp0397 .hero,.zp0397 .captionHero{grid-template-columns:1fr}
.zp0397 .section,.zp0397 .sectionTitle,.zp0397 .contact{grid-template-columns:1fr}
.zp0397 .section{display:block}}
@media(max-width:430px){.zp0397{font-size:16px}
.zp0397 .hero,.zp0397 .section,.zp0397 .contact{padding-left:18px;padding-right:18px}
.zp0397 .serviceGrid,.zp0397 .proof{grid-template-columns:1fr}
.zp0397 h1{font-size:clamp(42px,14vw,70px)}}

.zp0397 .heroActions a,.zp0397 .primary,.zp0397 .ctaBtn,.zp0397 .btnPrimary,.zp0397 .schedule>a,.zp0397 .newsletter>a{transition:all .2s ease}
.zp0397 .heroActions a:hover,.zp0397 .primary:hover,.zp0397 .ctaBtn:hover,.zp0397 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0397 nav a,.zp0397 .nav a,.zp0397 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0397 nav a:hover,.zp0397 .nav a:hover,.zp0397 .footer a:hover{
  color:var(--primary)
}
.zp0397 .serviceGrid article,.zp0397 .projectCard,.zp0397 .teamCard,.zp0397 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0397 .serviceGrid article:hover,.zp0397 .projectCard:hover,.zp0397 .teamCard:hover,.zp0397 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0397 *,.zp0397 *::before,.zp0397 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0397 a,.zp0397 button,.zp0397 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">96</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
