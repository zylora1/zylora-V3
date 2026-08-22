"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0991-food-brand-pastel", "family": "Pastel", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|two-speed-scroll|team>services>security>proof>faq|soft-12|technical-mono", "industry": "food-brand", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "two-speed-scroll"};

export default function Template0991({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Food Brand");
  const headline = String(content.headline || "A food brand built around distinctive flavour, clear provenance, and easy discovery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Products", "Recipes", "Stockists", "Wholesale", "Story"];
  const industryLabel = "Food brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0991" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0991{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0991 *{box-sizing:border-box}
.zp0991 a{color:inherit;text-decoration:none}
.zp0991 h1,.zp0991 h2,.zp0991 h3,.zp0991 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0991 img{max-width:100%;display:block}
.zp0991 button,.zp0991 a{-webkit-tap-highlight-color:transparent}
.zp0991 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0991 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0991 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0991 .mobileMenu{display:none}
.zp0991:has(.navRail)>.hero,.zp0991:has(.navRail)>.section,.zp0991:has(.navRail)>.contact,.zp0991:has(.navRail)>.footer{margin-left:190px}
.zp0991 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0991 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0991 .eyebrow,.zp0991 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0991 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0991 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0991 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0991 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0991 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0991 .canvasHero{overflow:hidden}
.zp0991 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0991 .canvasGrid i{border-right:1px solid var(--border)}
.zp0991 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0991 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0991 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0991 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0991 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0991 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0991 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0991 .serviceGrid p{color:var(--muted)}
.zp0991 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0991 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0991 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0991 .faqList{max-width:900px;margin-left:auto}
.zp0991 details{border-top:1px solid var(--border);padding:20px 0}
.zp0991 details summary{font-weight:800;cursor:pointer}
.zp0991 details p{color:var(--muted);max-width:70ch}
.zp0991 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0991 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0991 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Courier New, monospace;margin-bottom:18px}
.zp0991 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0991 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0991 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0991 .contact .eyebrow{color:var(--bg)}
.zp0991 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0991 .contactMeta{display:grid;gap:10px}
.zp0991 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0991 .heroCopy{animation:enter-990 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-990{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0991 .hero{min-height:auto}
.zp0991 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0991 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0991 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0991 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0991 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0991 .mobileMenu nav a{padding:10px 8px}
.zp0991 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0991:has(.navRail)>.hero,.zp0991:has(.navRail)>.section,.zp0991:has(.navRail)>.contact,.zp0991:has(.navRail)>.footer{margin-left:0}
.zp0991 .hero{grid-template-columns:1fr}
.zp0991 .section,.zp0991 .sectionTitle,.zp0991 .security,.zp0991 .contact{grid-template-columns:1fr}
.zp0991 .teamGrid{grid-template-columns:1fr 1fr}
.zp0991 .section{display:block}}
@media(max-width:430px){.zp0991{font-size:16px}
.zp0991 .hero,.zp0991 .section,.zp0991 .contact{padding-left:18px;padding-right:18px}
.zp0991 .serviceGrid,.zp0991 .proof,.zp0991 .teamGrid{grid-template-columns:1fr}
.zp0991 h1{font-size:clamp(42px,14vw,70px)}}

.zp0991 .heroActions a,.zp0991 .primary,.zp0991 .ctaBtn,.zp0991 .btnPrimary,.zp0991 .schedule>a,.zp0991 .newsletter>a{transition:all .2s ease}
.zp0991 .heroActions a:hover,.zp0991 .primary:hover,.zp0991 .ctaBtn:hover,.zp0991 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0991 nav a,.zp0991 .nav a,.zp0991 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0991 nav a:hover,.zp0991 .nav a:hover,.zp0991 .footer a:hover{
  color:var(--primary)
}
.zp0991 .serviceGrid article,.zp0991 .projectCard,.zp0991 .teamCard,.zp0991 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0991 .serviceGrid article:hover,.zp0991 .projectCard:hover,.zp0991 .teamCard:hover,.zp0991 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0991 *,.zp0991 *::before,.zp0991 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0991 a,.zp0991 button,.zp0991 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
