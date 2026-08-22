import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0392-accounting-organic", "family": "Organic", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|booking-led|awards>press>faq>services>proof>comparison|micro-radius|newspaper", "industry": "accounting", "hero": "monumental-type", "navigation": "corner-dock", "layout": "booking-led"};

export default function Template0392({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Accounting Firm");
  const headline = String(content.headline || "Accurate numbers, useful reporting, and advice that helps owners make better decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Bookkeeping", "Tax filing", "Payroll", "Management accounts", "CFO advisory"];
  const serviceNotes = ["Monthly management accounts with commentary — not just figures, but what they mean.", "Tax planning built around your business calendar, not filed as an afterthought.", "Payroll, auto-enrolment, and CIS handled so you focus on the work, not the admin.", "Cloud accounting setup and training: Xero, QuickBooks, or Sage — your choice.", "Annual accounts filed with HMRC two months early — never a penalty in 15 years."];
  const proofPoints = ["ICAEW/ACCA qualified", "Xero Platinum Partner", "Zero missed deadlines", "Fixed monthly fees"];
  const testimonial = "Switched from a large firm where I never spoke to the same person twice. Here my accountant knows my business inside out.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0392" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0392{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0392 *{box-sizing:border-box}
.zp0392 a{color:inherit;text-decoration:none}
.zp0392 h1,.zp0392 h2,.zp0392 h3,.zp0392 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0392 img{max-width:100%;display:block}
.zp0392 button,.zp0392 a{-webkit-tap-highlight-color:transparent}
.zp0392 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0392 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0392 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0392 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0392 .mobileMenu{display:none}
.zp0392 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0392 .eyebrow,.zp0392 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0392 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0392 .monumentalHero{display:block}
.zp0392 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0392 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0392 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0392 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0392 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0392 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0392 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0392 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0392 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0392 .serviceGrid p{color:var(--muted)}
.zp0392 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0392 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0392 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0392 .faqList{max-width:900px;margin-left:auto}
.zp0392 details{border-top:1px solid var(--border);padding:20px 0}
.zp0392 details summary{font-weight:800;cursor:pointer}
.zp0392 details p{color:var(--muted);max-width:70ch}
.zp0392 .awards>div{max-width:800px;margin-left:auto}
.zp0392 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0392 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0392 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0392 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0392 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0392 .contact .eyebrow{color:var(--bg)}
.zp0392 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0392 .contactMeta{display:grid;gap:10px}
.zp0392 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-391{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0392 .hero{min-height:auto}
.zp0392 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0392 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0392 .nav nav{display:none}
.zp0392 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0392 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0392 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0392 .mobileMenu nav a{padding:10px 8px}
.zp0392 .hero{grid-template-columns:1fr}
.zp0392 .section,.zp0392 .sectionTitle,.zp0392 .contact{grid-template-columns:1fr}
.zp0392 .section{display:block}}
@media(max-width:430px){.zp0392{font-size:16px}
.zp0392 .hero,.zp0392 .section,.zp0392 .contact{padding-left:18px;padding-right:18px}
.zp0392 .serviceGrid,.zp0392 .proof,.zp0392 .compareGrid{grid-template-columns:1fr}
.zp0392 h1{font-size:clamp(42px,14vw,70px)}
.zp0392 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0392 .monumentalBody{grid-template-columns:1fr}}

.zp0392 .heroActions a,.zp0392 .primary,.zp0392 .ctaBtn,.zp0392 .btnPrimary,.zp0392 .schedule>a,.zp0392 .newsletter>a{transition:all .2s ease}
.zp0392 .heroActions a:hover,.zp0392 .primary:hover,.zp0392 .ctaBtn:hover,.zp0392 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);border-radius:30px
}
.zp0392 nav a,.zp0392 .nav a,.zp0392 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0392 nav a:hover,.zp0392 .nav a:hover,.zp0392 .footer a:hover{
  color:var(--primary)
}
.zp0392 .serviceGrid article,.zp0392 .projectCard,.zp0392 .teamCard,.zp0392 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0392 .serviceGrid article:hover,.zp0392 .projectCard:hover,.zp0392 .teamCard:hover,.zp0392 .bentoCard:hover{
  transform:translateY(-4px)
}
@media(prefers-reduced-motion:reduce){.zp0392 *,.zp0392 *::before,.zp0392 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0392 a,.zp0392 button,.zp0392 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Start free</a></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Organic / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
