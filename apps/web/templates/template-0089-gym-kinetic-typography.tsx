import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0089-gym-kinetic-typography", "family": "Kinetic Typography", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|case-study-led|materials>proof>process>faq>services>security|hairline|friendly", "industry": "gym", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "case-study-led"};

export default function Template0089({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Training Gym");
  const headline = String(content.headline || "Coaching-led training for people who want structure, progress, and accountability.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strength coaching", "Small-group training", "Open gym", "Mobility sessions", "Performance testing"];
  const industryLabel = "Training gym";
  const serviceNotes = ["Open 24 hours so your schedule drives your training, not ours.", "Strength, cardio, and functional zones across 600+ sq metres of equipment.", "Personal training with coaches who build programmes around your goals, not templates.", "Monthly fitness assessments to track progress and adjust your plan.", "Recovery studio with sauna, ice bath, and stretch space included in membership."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0089" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0089{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0089 *{box-sizing:border-box}
.zp0089 a{color:inherit;text-decoration:none}
.zp0089 h1,.zp0089 h2,.zp0089 h3,.zp0089 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0089 img{max-width:100%;display:block}
.zp0089 button,.zp0089 a{-webkit-tap-highlight-color:transparent}
.zp0089 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0089 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0089 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0089 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0089 .nav.menu details{position:relative}
.zp0089 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0089 .mobileMenu{display:none}
.zp0089 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0089 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0089 .eyebrow,.zp0089 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0089 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0089 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0089 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0089 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0089 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0089 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0089 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0089 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0089 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0089 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0089 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0089 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0089 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0089 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0089 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0089 .serviceGrid p{color:var(--muted)}
.zp0089 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0089 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0089 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0089 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0089 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0089 .faqList{max-width:900px;margin-left:auto}
.zp0089 details{border-top:1px solid var(--border);padding:20px 0}
.zp0089 details summary{font-weight:800;cursor:pointer}
.zp0089 details p{color:var(--muted);max-width:70ch}
.zp0089 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0089 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0089 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0089 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0089 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0089 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0089 .contact .eyebrow{color:var(--bg)}
.zp0089 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0089 .contactMeta{display:grid;gap:10px}
.zp0089 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0089 .heroCopy{animation:enter-88 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-88{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0089 .hero{min-height:auto}
.zp0089 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0089 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0089 .nav nav{display:none}
.zp0089 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0089 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0089 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0089 .mobileMenu nav a{padding:10px 8px}
.zp0089 .hero,.zp0089 .archiveHero{grid-template-columns:1fr}
.zp0089 .section,.zp0089 .sectionTitle,.zp0089 .security,.zp0089 .contact{grid-template-columns:1fr}
.zp0089 .section{display:block}}
@media(max-width:430px){.zp0089{font-size:16px}
.zp0089 .hero,.zp0089 .section,.zp0089 .contact{padding-left:18px;padding-right:18px}
.zp0089 .serviceGrid,.zp0089 .proof{grid-template-columns:1fr}
.zp0089 h1{font-size:clamp(42px,14vw,70px)}}

.zp0089 .heroActions a,.zp0089 .primary,.zp0089 .ctaBtn,.zp0089 .btnPrimary,.zp0089 .schedule>a,.zp0089 .newsletter>a{transition:all .2s ease}
.zp0089 .heroActions a:hover,.zp0089 .primary:hover,.zp0089 .ctaBtn:hover,.zp0089 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0089 nav a,.zp0089 .nav a,.zp0089 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0089 nav a:hover,.zp0089 .nav a:hover,.zp0089 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0089 .serviceGrid article,.zp0089 .projectCard,.zp0089 .teamCard,.zp0089 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0089 .serviceGrid article:hover,.zp0089 .projectCard:hover,.zp0089 .teamCard:hover,.zp0089 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0089 *,.zp0089 *::before,.zp0089 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0089 a,.zp0089 button,.zp0089 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
