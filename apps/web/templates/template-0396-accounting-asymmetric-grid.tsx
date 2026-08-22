import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0396-accounting-asymmetric-grid", "family": "Asymmetric Grid", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|catalogue-table|values>comparison>proof>awards>newsletter>security>services|notched|literary", "industry": "accounting", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "catalogue-table"};

export default function Template0396({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Accounting Firm");
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
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0396" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0396{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0396 *{box-sizing:border-box}
.zp0396 a{color:inherit;text-decoration:none}
.zp0396 h1,.zp0396 h2,.zp0396 h3,.zp0396 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0396 img{max-width:100%;display:block}
.zp0396 button,.zp0396 a{-webkit-tap-highlight-color:transparent}
.zp0396 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0396 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0396 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0396 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0396 .mobileMenu{display:none}
.zp0396 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0396 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0396 .eyebrow,.zp0396 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0396 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0396 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0396 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0396 .heroActions a,.zp0396 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0396 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0396 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0396 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0396 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0396 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0396 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0396 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0396 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0396 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0396 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0396 .serviceGrid p{color:var(--muted)}
.zp0396 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0396 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0396 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0396 details{border-top:1px solid var(--border);padding:20px 0}
.zp0396 details summary{font-weight:800;cursor:pointer}
.zp0396 details p{color:var(--muted);max-width:70ch}
.zp0396 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0396 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Garamond, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0396 .awards>div{max-width:800px;margin-left:auto}
.zp0396 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0396 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0396 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0396 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0396 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0396 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0396 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0396 .contact .eyebrow{color:var(--bg)}
.zp0396 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0396 .contactMeta{display:grid;gap:10px}
.zp0396 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0396 .heroCopy{animation:enter-395 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-395{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0396 .hero{min-height:auto}
.zp0396 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0396 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0396 .nav nav{display:none}
.zp0396 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0396 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0396 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0396 .mobileMenu nav a{padding:10px 8px}
.zp0396 .hero,.zp0396 .navLedHero{grid-template-columns:1fr}
.zp0396 .section,.zp0396 .sectionTitle,.zp0396 .security,.zp0396 .contact{grid-template-columns:1fr}
.zp0396 .section{display:block}}
@media(max-width:430px){.zp0396{font-size:16px}
.zp0396 .hero,.zp0396 .section,.zp0396 .contact{padding-left:18px;padding-right:18px}
.zp0396 .serviceGrid,.zp0396 .proof,.zp0396 .compareGrid{grid-template-columns:1fr}
.zp0396 h1{font-size:clamp(42px,14vw,70px)}}

.zp0396 .heroActions a,.zp0396 .primary,.zp0396 .ctaBtn,.zp0396 .btnPrimary,.zp0396 .schedule>a,.zp0396 .newsletter>a{transition:all .2s ease}
.zp0396 .heroActions a:hover,.zp0396 .primary:hover,.zp0396 .ctaBtn:hover,.zp0396 .btnPrimary:hover{
  opacity:.85
}
.zp0396 nav a,.zp0396 .nav a,.zp0396 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0396 nav a:hover,.zp0396 .nav a:hover,.zp0396 .footer a:hover{
  color:var(--primary)
}
.zp0396 .serviceGrid article,.zp0396 .projectCard,.zp0396 .teamCard,.zp0396 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0396 .serviceGrid article:hover,.zp0396 .projectCard:hover,.zp0396 .teamCard:hover,.zp0396 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0396 *,.zp0396 *::before,.zp0396 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0396 a,.zp0396 button,.zp0396 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
