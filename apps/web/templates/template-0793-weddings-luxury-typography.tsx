"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0793-weddings-luxury-typography", "family": "Luxury Typography", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|editorial-spine|proof>projects>services>packages>faq|hairline|luxury-contrast", "industry": "weddings", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "editorial-spine"};

export default function Template0793({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0793" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0793{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0793 *{box-sizing:border-box}
.zp0793 a{color:inherit;text-decoration:none}
.zp0793 h1,.zp0793 h2,.zp0793 h3,.zp0793 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0793 img{max-width:100%;display:block}
.zp0793 button,.zp0793 a{-webkit-tap-highlight-color:transparent}
.zp0793 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0793 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0793 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0793 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0793 .nav.menu details{position:relative}
.zp0793 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0793 .mobileMenu{display:none}
.zp0793 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0793 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0793 .eyebrow,.zp0793 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0793 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0793 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0793 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0793 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0793 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0793 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0793 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0793 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0793 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0793 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0793 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0793 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0793 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0793 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0793 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0793 .serviceGrid p{color:var(--muted)}
.zp0793 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0793 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0793 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0793 .faqList{max-width:900px;margin-left:auto}
.zp0793 details{border-top:1px solid var(--border);padding:20px 0}
.zp0793 details summary{font-weight:800;cursor:pointer}
.zp0793 details p{color:var(--muted);max-width:70ch}
.zp0793 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0793 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0793 .projects article:nth-child(2){transform:translateY(32px)}
.zp0793 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0793 .packages>.sectionTitle{grid-column:1/-1}
.zp0793 .packages article{padding:24px;border:1px solid var(--border)}
.zp0793 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0793 .contact .eyebrow{color:var(--bg)}
.zp0793 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0793 .contactMeta{display:grid;gap:10px}
.zp0793 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0793 .heroCopy{animation:enter-792 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-792{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0793 .hero{min-height:auto}
.zp0793 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0793 .proof{grid-template-columns:1fr 1fr}
.zp0793 .packages{grid-template-columns:1fr 1fr}
.zp0793 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0793 .nav nav{display:none}
.zp0793 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0793 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0793 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0793 .mobileMenu nav a{padding:10px 8px}
.zp0793 .hero,.zp0793 .archiveHero{grid-template-columns:1fr}
.zp0793 .section,.zp0793 .sectionTitle,.zp0793 .contact{grid-template-columns:1fr}
.zp0793 .projects .projectGrid{grid-template-columns:1fr}
.zp0793 .projects article:nth-child(2){transform:none}
.zp0793 .section{display:block}}
@media(max-width:430px){.zp0793{font-size:16px}
.zp0793 .hero,.zp0793 .section,.zp0793 .contact{padding-left:18px;padding-right:18px}
.zp0793 .serviceGrid,.zp0793 .proof,.zp0793 .packages{grid-template-columns:1fr}
.zp0793 h1{font-size:clamp(42px,14vw,70px)}}

.zp0793 .heroActions a,.zp0793 .primary,.zp0793 .ctaBtn,.zp0793 .btnPrimary,.zp0793 .schedule>a,.zp0793 .newsletter>a{transition:all .2s ease}
.zp0793 .heroActions a:hover,.zp0793 .primary:hover,.zp0793 .ctaBtn:hover,.zp0793 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0793 nav a,.zp0793 .nav a,.zp0793 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0793 nav a:hover,.zp0793 .nav a:hover,.zp0793 .footer a:hover{
  opacity:.65
}
.zp0793 .serviceGrid article,.zp0793 .projectCard,.zp0793 .teamCard,.zp0793 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0793 .serviceGrid article:hover,.zp0793 .projectCard:hover,.zp0793 .teamCard:hover,.zp0793 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0793 *,.zp0793 *::before,.zp0793 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0793 a,.zp0793 button,.zp0793 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
