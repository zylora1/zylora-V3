import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0399-accounting-maximalism", "family": "Maximalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|story-first|features>programmes>services>packages>research>proof>faq|soft-12|geometric", "industry": "accounting", "hero": "location-led", "navigation": "vertical-rail", "layout": "story-first"};

export default function Template0399({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Accounting Firm");
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
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Accounting firm / Project A", "Accounting firm / Project B", "Accounting firm / Project C", "Accounting firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Accurate numbers, useful reporting, and advice that helps owners make better decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0399" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0399{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0399 *{box-sizing:border-box}
.zp0399 a{color:inherit;text-decoration:none}
.zp0399 h1,.zp0399 h2,.zp0399 h3,.zp0399 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0399 img{max-width:100%;display:block}
.zp0399 button,.zp0399 a{-webkit-tap-highlight-color:transparent}
.zp0399 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0399 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0399 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0399 .mobileMenu{display:none}
.zp0399:has(.navRail)>.hero,.zp0399:has(.navRail)>.section,.zp0399:has(.navRail)>.contact,.zp0399:has(.navRail)>.footer{margin-left:190px}
.zp0399 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0399 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0399 .eyebrow,.zp0399 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0399 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0399 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0399 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0399 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0399 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0399 .locationHero{grid-template-columns:1fr 1fr}
.zp0399 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0399 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0399 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0399 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0399 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0399 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0399 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0399 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0399 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0399 .serviceGrid p{color:var(--muted)}
.zp0399 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0399 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0399 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0399 .faqList{max-width:900px;margin-left:auto}
.zp0399 details{border-top:1px solid var(--border);padding:20px 0}
.zp0399 details summary{font-weight:800;cursor:pointer}
.zp0399 details p{color:var(--muted);max-width:70ch}
.zp0399 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0399 .features ul{list-style:none;margin:0;padding:0}
.zp0399 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0399 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0399 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0399 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0399 .packages>.sectionTitle{grid-column:1/-1}
.zp0399 .packages article{padding:24px;border:1px solid var(--border)}
.zp0399 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0399 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0399 .researchRows{max-width:900px;margin-left:auto}
.zp0399 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0399 .contact .eyebrow{color:var(--bg)}
.zp0399 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0399 .contactMeta{display:grid;gap:10px}
.zp0399 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0399 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(18deg)}
.zp0399 .heroCopy{animation:enter-398 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-398{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0399 .hero{min-height:auto}
.zp0399 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0399 .proof{grid-template-columns:1fr 1fr}
.zp0399 .packages{grid-template-columns:1fr 1fr}
.zp0399 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0399 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0399 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0399 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0399 .mobileMenu nav a{padding:10px 8px}
.zp0399 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0399:has(.navRail)>.hero,.zp0399:has(.navRail)>.section,.zp0399:has(.navRail)>.contact,.zp0399:has(.navRail)>.footer{margin-left:0}
.zp0399 .hero,.zp0399 .locationHero{grid-template-columns:1fr}
.zp0399 .section,.zp0399 .sectionTitle,.zp0399 .features,.zp0399 .contact{grid-template-columns:1fr}
.zp0399 .section{display:block}}
@media(max-width:430px){.zp0399{font-size:16px}
.zp0399 .hero,.zp0399 .section,.zp0399 .contact{padding-left:18px;padding-right:18px}
.zp0399 .serviceGrid,.zp0399 .proof,.zp0399 .packages,.zp0399 .programmes>div:last-child{grid-template-columns:1fr}
.zp0399 h1{font-size:clamp(42px,14vw,70px)}}

.zp0399 .heroActions a,.zp0399 .primary,.zp0399 .ctaBtn,.zp0399 .btnPrimary,.zp0399 .schedule>a,.zp0399 .newsletter>a{transition:all .2s ease}
.zp0399 .heroActions a:hover,.zp0399 .primary:hover,.zp0399 .ctaBtn:hover,.zp0399 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0399 nav a,.zp0399 .nav a,.zp0399 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0399 nav a:hover,.zp0399 .nav a:hover,.zp0399 .footer a:hover{
  color:var(--primary)
}
.zp0399 .serviceGrid article,.zp0399 .projectCard,.zp0399 .teamCard,.zp0399 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0399 .serviceGrid article:hover,.zp0399 .projectCard:hover,.zp0399 .teamCard:hover,.zp0399 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0399 *,.zp0399 *::before,.zp0399 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0399 a,.zp0399 button,.zp0399 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
