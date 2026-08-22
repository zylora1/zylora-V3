"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0769-events-japanese-minimalism", "family": "Japanese Minimalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|collection-led|credentials>community>services>metrics>proof|square-editorial|luxury-contrast", "industry": "events", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "collection-led"};

export default function Template0769({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Northline Event Studio is presented as a real working event studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0769" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0769{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0769 *{box-sizing:border-box}
.zp0769 a{color:inherit;text-decoration:none}
.zp0769 h1,.zp0769 h2,.zp0769 h3,.zp0769 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0769 img{max-width:100%;display:block}
.zp0769 button,.zp0769 a{-webkit-tap-highlight-color:transparent}
.zp0769 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0769 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0769 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0769 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0769 .mobileMenu{display:none}
.zp0769 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0769 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0769 .eyebrow,.zp0769 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0769 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0769 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0769 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0769 .heroActions a,.zp0769 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0769 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0769 .typeOnly{grid-template-columns:1fr .28fr}
.zp0769 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0769 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0769 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0769 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0769 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0769 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0769 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0769 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0769 .serviceGrid p{color:var(--muted)}
.zp0769 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0769 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0769 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0769 details{border-top:1px solid var(--border);padding:20px 0}
.zp0769 details summary{font-weight:800;cursor:pointer}
.zp0769 details p{color:var(--muted);max-width:70ch}
.zp0769 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0769 .metrics div{background:var(--bg);padding:30px}
.zp0769 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Didot, Georgia, serif;color:var(--primary)}
.zp0769 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0769 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0769 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0769 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0769 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0769 .contact .eyebrow{color:var(--bg)}
.zp0769 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0769 .contactMeta{display:grid;gap:10px}
.zp0769 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0769 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0769 .sectionTitle h2{font-weight:400}
.zp0769 .heroCopy{animation:enter-768 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-768{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0769 .hero{min-height:auto}
.zp0769 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0769 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0769 .nav nav{display:none}
.zp0769 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0769 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0769 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0769 .mobileMenu nav a{padding:10px 8px}
.zp0769 .hero{grid-template-columns:1fr}
.zp0769 .section,.zp0769 .sectionTitle,.zp0769 .contact{grid-template-columns:1fr}
.zp0769 .metrics{grid-template-columns:1fr 1fr}
.zp0769 .section{display:block}}
@media(max-width:430px){.zp0769{font-size:16px}
.zp0769 .hero,.zp0769 .section,.zp0769 .contact{padding-left:18px;padding-right:18px}
.zp0769 .serviceGrid,.zp0769 .proof,.zp0769 .metrics{grid-template-columns:1fr}
.zp0769 h1{font-size:clamp(42px,14vw,70px)}}

.zp0769 .heroActions a,.zp0769 .primary,.zp0769 .ctaBtn,.zp0769 .btnPrimary,.zp0769 .schedule>a,.zp0769 .newsletter>a{transition:all .2s ease}
.zp0769 .heroActions a:hover,.zp0769 .primary:hover,.zp0769 .ctaBtn:hover,.zp0769 .btnPrimary:hover{
  opacity:.75
}
.zp0769 nav a,.zp0769 .nav a,.zp0769 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0769 nav a:hover,.zp0769 .nav a:hover,.zp0769 .footer a:hover{
  opacity:.6
}
.zp0769 .serviceGrid article,.zp0769 .projectCard,.zp0769 .teamCard,.zp0769 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0769 .serviceGrid article:hover,.zp0769 .projectCard:hover,.zp0769 .teamCard:hover,.zp0769 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0769 *,.zp0769 *::before,.zp0769 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0769 a,.zp0769 button,.zp0769 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
