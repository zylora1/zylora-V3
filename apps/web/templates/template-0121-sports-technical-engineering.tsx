"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0121-sports-technical-engineering", "family": "Technical Engineering", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|collection-led|proof>programmes>timeline>faq>services|hairline|luxury-contrast", "industry": "sports", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "collection-led"};

export default function Template0121({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0121" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0121{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0121 *{box-sizing:border-box}
.zp0121 a{color:inherit;text-decoration:none}
.zp0121 h1,.zp0121 h2,.zp0121 h3,.zp0121 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0121 img{max-width:100%;display:block}
.zp0121 button,.zp0121 a{-webkit-tap-highlight-color:transparent}
.zp0121 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0121 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0121 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0121 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0121 .nav.menu details{position:relative}
.zp0121 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0121 .mobileMenu{display:none}
.zp0121 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0121 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0121 .eyebrow,.zp0121 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0121 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0121 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0121 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0121 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0121 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0121 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0121 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0121 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0121 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0121 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0121 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0121 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0121 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0121 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0121 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0121 .serviceGrid p{color:var(--muted)}
.zp0121 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0121 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0121 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0121 .faqList{max-width:900px;margin-left:auto}
.zp0121 details{border-top:1px solid var(--border);padding:20px 0}
.zp0121 details summary{font-weight:800;cursor:pointer}
.zp0121 details p{color:var(--muted);max-width:70ch}
.zp0121 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0121 .timeline article{padding:20px 0}
.zp0121 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0121 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0121 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0121 .contact .eyebrow{color:var(--bg)}
.zp0121 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0121 .contactMeta{display:grid;gap:10px}
.zp0121 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0121 .heroCopy{animation:enter-120 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-120{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0121 .hero{min-height:auto}
.zp0121 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0121 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0121 .nav nav{display:none}
.zp0121 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0121 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0121 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0121 .mobileMenu nav a{padding:10px 8px}
.zp0121 .hero,.zp0121 .archiveHero{grid-template-columns:1fr}
.zp0121 .section,.zp0121 .sectionTitle,.zp0121 .contact{grid-template-columns:1fr}
.zp0121 .section{display:block}}
@media(max-width:430px){.zp0121{font-size:16px}
.zp0121 .hero,.zp0121 .section,.zp0121 .contact{padding-left:18px;padding-right:18px}
.zp0121 .serviceGrid,.zp0121 .proof,.zp0121 .programmes>div:last-child{grid-template-columns:1fr}
.zp0121 h1{font-size:clamp(42px,14vw,70px)}}

.zp0121 .heroActions a,.zp0121 .primary,.zp0121 .ctaBtn,.zp0121 .btnPrimary,.zp0121 .schedule>a,.zp0121 .newsletter>a{transition:all .2s ease}
.zp0121 .heroActions a:hover,.zp0121 .primary:hover,.zp0121 .ctaBtn:hover,.zp0121 .btnPrimary:hover{
  border-color:var(--primary)
}
.zp0121 nav a,.zp0121 .nav a,.zp0121 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0121 nav a:hover,.zp0121 .nav a:hover,.zp0121 .footer a:hover{
  color:var(--primary)
}
.zp0121 .serviceGrid article,.zp0121 .projectCard,.zp0121 .teamCard,.zp0121 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0121 .serviceGrid article:hover,.zp0121 .projectCard:hover,.zp0121 .teamCard:hover,.zp0121 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0121 *,.zp0121 *::before,.zp0121 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0121 a,.zp0121 button,.zp0121 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Technical Engineering / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
