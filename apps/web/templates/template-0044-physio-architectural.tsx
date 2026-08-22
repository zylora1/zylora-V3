import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0044-physio-architectural", "family": "Architectural", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|dashboard-story|faq>materials>research>testimonial>proof>services|notched|product-ui", "industry": "physio", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "dashboard-story"};

export default function Template0044({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const industryLabel = "Physiotherapy studio";
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const testimonialName = "Oak & Tide client";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0044" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0044{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0044 *{box-sizing:border-box}
.zp0044 a{color:inherit;text-decoration:none}
.zp0044 h1,.zp0044 h2,.zp0044 h3,.zp0044 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0044 img{max-width:100%;display:block}
.zp0044 button,.zp0044 a{-webkit-tap-highlight-color:transparent}
.zp0044 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0044 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0044 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0044 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0044 .mobileMenu{display:none}
.zp0044 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0044 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0044 .eyebrow,.zp0044 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0044 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0044 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0044 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0044 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0044 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0044 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0044 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0044 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0044 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0044 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0044 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0044 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0044 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0044 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0044 .serviceGrid p{color:var(--muted)}
.zp0044 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0044 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0044 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0044 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0044 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0044 .testimonial>div{align-self:end}
.zp0044 .testimonial span{display:block;opacity:.7}
.zp0044 .faqList{max-width:900px;margin-left:auto}
.zp0044 details{border-top:1px solid var(--border);padding:20px 0}
.zp0044 details summary{font-weight:800;cursor:pointer}
.zp0044 details p{color:var(--muted);max-width:70ch}
.zp0044 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0044 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0044 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0044 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0044 .researchRows{max-width:900px;margin-left:auto}
.zp0044 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0044 .contact .eyebrow{color:var(--bg)}
.zp0044 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0044 .contactMeta{display:grid;gap:10px}
.zp0044 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0044 .heroCopy{animation:enter-43 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-43{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0044 .hero{min-height:auto}
.zp0044 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0044 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0044 .nav nav{display:none}
.zp0044 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0044 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0044 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0044 .mobileMenu nav a{padding:10px 8px}
.zp0044 .hero,.zp0044 .navLedHero{grid-template-columns:1fr}
.zp0044 .section,.zp0044 .sectionTitle,.zp0044 .contact{grid-template-columns:1fr}
.zp0044 .testimonial{grid-template-columns:1fr}
.zp0044 .section{display:block}}
@media(max-width:430px){.zp0044{font-size:16px}
.zp0044 .hero,.zp0044 .section,.zp0044 .contact{padding-left:18px;padding-right:18px}
.zp0044 .serviceGrid,.zp0044 .proof{grid-template-columns:1fr}
.zp0044 h1{font-size:clamp(42px,14vw,70px)}}

.zp0044 .heroActions a,.zp0044 .primary,.zp0044 .ctaBtn,.zp0044 .btnPrimary,.zp0044 .schedule>a,.zp0044 .newsletter>a{transition:all .2s ease}
.zp0044 .heroActions a:hover,.zp0044 .primary:hover,.zp0044 .ctaBtn:hover,.zp0044 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0044 nav a,.zp0044 .nav a,.zp0044 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0044 nav a:hover,.zp0044 .nav a:hover,.zp0044 .footer a:hover{
  opacity:.7
}
.zp0044 .serviceGrid article,.zp0044 .projectCard,.zp0044 .teamCard,.zp0044 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0044 .serviceGrid article:hover,.zp0044 .projectCard:hover,.zp0044 .teamCard:hover,.zp0044 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0044 *,.zp0044 *::before,.zp0044 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0044 a,.zp0044 button,.zp0044 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
