"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0097-yoga-earthy", "family": "Earthy", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|magazine-sections|services>location>research>proof>metrics|square-editorial|luxury-contrast", "industry": "yoga", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "magazine-sections"};

export default function Template0097({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const industryLabel = "Yoga studio";
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0097" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0097{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0097 *{box-sizing:border-box}
.zp0097 a{color:inherit;text-decoration:none}
.zp0097 h1,.zp0097 h2,.zp0097 h3,.zp0097 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0097 img{max-width:100%;display:block}
.zp0097 button,.zp0097 a{-webkit-tap-highlight-color:transparent}
.zp0097 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0097 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0097 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0097 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0097 .mobileMenu{display:none}
.zp0097 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0097 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0097 .eyebrow,.zp0097 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0097 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0097 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0097 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0097 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0097 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0097 .typeOnly{grid-template-columns:1fr .28fr}
.zp0097 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0097 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0097 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0097 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0097 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0097 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0097 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0097 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0097 .serviceGrid p{color:var(--muted)}
.zp0097 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0097 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0097 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0097 details{border-top:1px solid var(--border);padding:20px 0}
.zp0097 details summary{font-weight:800;cursor:pointer}
.zp0097 details p{color:var(--muted);max-width:70ch}
.zp0097 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0097 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0097 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0097 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0097 .metrics div{background:var(--bg);padding:30px}
.zp0097 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Didot, Georgia, serif;color:var(--primary)}
.zp0097 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0097 .researchRows{max-width:900px;margin-left:auto}
.zp0097 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0097 .contact .eyebrow{color:var(--bg)}
.zp0097 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0097 .contactMeta{display:grid;gap:10px}
.zp0097 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0097 .section{column-rule:1px solid var(--border)}
.zp0097 .sectionTitle h2{max-width:18ch}
.zp0097 .heroCopy{animation:enter-96 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-96{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0097 .hero{min-height:auto}
.zp0097 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0097 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0097 .nav nav{display:none}
.zp0097 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0097 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0097 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0097 .mobileMenu nav a{padding:10px 8px}
.zp0097 .hero{grid-template-columns:1fr}
.zp0097 .section,.zp0097 .sectionTitle,.zp0097 .location,.zp0097 .contact{grid-template-columns:1fr}
.zp0097 .metrics{grid-template-columns:1fr 1fr}
.zp0097 .section{display:block}}
@media(max-width:430px){.zp0097{font-size:16px}
.zp0097 .hero,.zp0097 .section,.zp0097 .contact{padding-left:18px;padding-right:18px}
.zp0097 .serviceGrid,.zp0097 .proof,.zp0097 .metrics{grid-template-columns:1fr}
.zp0097 h1{font-size:clamp(42px,14vw,70px)}}

.zp0097 .heroActions a,.zp0097 .primary,.zp0097 .ctaBtn,.zp0097 .btnPrimary,.zp0097 .schedule>a,.zp0097 .newsletter>a{transition:all .2s ease}
.zp0097 .heroActions a:hover,.zp0097 .primary:hover,.zp0097 .ctaBtn:hover,.zp0097 .btnPrimary:hover{
  opacity:.85;transform:translateY(-1px)
}
.zp0097 nav a,.zp0097 .nav a,.zp0097 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0097 nav a:hover,.zp0097 .nav a:hover,.zp0097 .footer a:hover{
  color:var(--primary)
}
.zp0097 .serviceGrid article,.zp0097 .projectCard,.zp0097 .teamCard,.zp0097 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0097 .serviceGrid article:hover,.zp0097 .projectCard:hover,.zp0097 .teamCard:hover,.zp0097 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0097 *,.zp0097 *::before,.zp0097 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0097 a,.zp0097 button,.zp0097 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Earthy / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
