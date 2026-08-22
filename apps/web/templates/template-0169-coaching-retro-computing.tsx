"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0169-coaching-retro-computing", "family": "Retro Computing", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|magazine-sections|pricing>community>timeline>proof>services|hairline|luxury-contrast", "industry": "coaching", "hero": "poster", "navigation": "fullscreen-menu", "layout": "magazine-sections"};

export default function Template0169({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const industryLabel = "Coaching centre";
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const storyBody = "Vale Coaching Centre is presented as a real working coaching centre, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0169" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0169{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0169 *{box-sizing:border-box}
.zp0169 a{color:inherit;text-decoration:none}
.zp0169 h1,.zp0169 h2,.zp0169 h3,.zp0169 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0169 img{max-width:100%;display:block}
.zp0169 button,.zp0169 a{-webkit-tap-highlight-color:transparent}
.zp0169 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0169 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0169 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0169 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0169 .nav.menu details{position:relative}
.zp0169 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0169 .mobileMenu{display:none}
.zp0169 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0169 .eyebrow,.zp0169 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0169 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0169 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0169 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0169 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0169 .posterTop,.zp0169 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0169 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0169 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0169 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0169 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0169 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0169 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0169 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0169 .serviceGrid p{color:var(--muted)}
.zp0169 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0169 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0169 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0169 details{border-top:1px solid var(--border);padding:20px 0}
.zp0169 details summary{font-weight:800;cursor:pointer}
.zp0169 details p{color:var(--muted);max-width:70ch}
.zp0169 .priceRows{border-top:1px solid var(--border)}
.zp0169 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0169 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0169 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0169 .timeline article{padding:20px 0}
.zp0169 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0169 .contact .eyebrow{color:var(--bg)}
.zp0169 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0169 .contactMeta{display:grid;gap:10px}
.zp0169 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0169 .section{column-rule:1px solid var(--border)}
.zp0169 .sectionTitle h2{max-width:18ch}
.zp0169{image-rendering:pixelated}
.zp0169 *{border-radius:0!important}
@keyframes enter-168{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0169 .hero{min-height:auto}
.zp0169 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0169 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0169 .nav nav{display:none}
.zp0169 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0169 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0169 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0169 .mobileMenu nav a{padding:10px 8px}
.zp0169 .hero{grid-template-columns:1fr}
.zp0169 .section,.zp0169 .sectionTitle,.zp0169 .contact{grid-template-columns:1fr}
.zp0169 .section{display:block}}
@media(max-width:430px){.zp0169{font-size:16px}
.zp0169 .hero,.zp0169 .section,.zp0169 .contact{padding-left:18px;padding-right:18px}
.zp0169 .serviceGrid,.zp0169 .proof{grid-template-columns:1fr}
.zp0169 h1{font-size:clamp(42px,14vw,70px)}
.zp0169 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0169 .priceRows article{grid-template-columns:1fr}}

.zp0169 .heroActions a,.zp0169 .primary,.zp0169 .ctaBtn,.zp0169 .btnPrimary,.zp0169 .schedule>a,.zp0169 .newsletter>a{transition:all .2s ease}
.zp0169 .heroActions a:hover,.zp0169 .primary:hover,.zp0169 .ctaBtn:hover,.zp0169 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0169 nav a,.zp0169 .nav a,.zp0169 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0169 nav a:hover,.zp0169 .nav a:hover,.zp0169 .footer a:hover{
  color:var(--primary)
}
.zp0169 .serviceGrid article,.zp0169 .projectCard,.zp0169 .teamCard,.zp0169 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0169 .serviceGrid article:hover,.zp0169 .projectCard:hover,.zp0169 .teamCard:hover,.zp0169 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0169 *,.zp0169 *::before,.zp0169 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0169 a,.zp0169 button,.zp0169 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
