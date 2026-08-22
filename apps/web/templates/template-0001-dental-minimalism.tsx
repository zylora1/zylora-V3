"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0001-dental-minimalism", "family": "Minimalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|editorial-spine|services>programmes>proof>hours>destinations|square-editorial|luxury-contrast", "industry": "dental", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "editorial-spine"};

export default function Template0001({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Dental Practice");
  const headline = String(content.headline || "Calm dentistry with clear explanations and time for questions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Preventive exams", "Restorative dentistry", "Invisalign consultations", "Emergency appointments", "Cosmetic dentistry"];
  const industryLabel = "Dental practice";
  const serviceNotes = ["Gentle, thorough care explained step by step so you always know what to expect.", "Modern techniques with minimal discomfort — your comfort guides every decision.", "Clear treatment plans with transparent costs before any work begins.", "Emergency slots kept available every day for urgent dental needs.", "Cosmetic results that enhance your smile without erasing what makes it yours."];
  const proofPoints = ["GDC registered practitioners", "Digital X-rays, same session", "Transparent fee schedule", "Same-day emergency care"];
  const testimonial = "I had avoided dentists for years. The team here explained everything before touching anything — completely changed my experience.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0001" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0001{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0001 *{box-sizing:border-box}
.zp0001 a{color:inherit;text-decoration:none}
.zp0001 h1,.zp0001 h2,.zp0001 h3,.zp0001 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0001 img{max-width:100%;display:block}
.zp0001 button,.zp0001 a{-webkit-tap-highlight-color:transparent}
.zp0001 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0001 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0001 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0001 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0001 .mobileMenu{display:none}
.zp0001 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0001 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0001 .eyebrow,.zp0001 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0001 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0001 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0001 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0001 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0001 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0001 .typeOnly{grid-template-columns:1fr .28fr}
.zp0001 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0001 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0001 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0001 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0001 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0001 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0001 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0001 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0001 .serviceGrid p{color:var(--muted)}
.zp0001 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0001 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0001 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0001 details{border-top:1px solid var(--border);padding:20px 0}
.zp0001 details summary{font-weight:800;cursor:pointer}
.zp0001 details p{color:var(--muted);max-width:70ch}
.zp0001 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0001 .hours dl{margin:0}
.zp0001 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0001 .programmes>div:last-child,.zp0001 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0001 .programmes article,.zp0001 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0001 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0001 .contact .eyebrow{color:var(--bg)}
.zp0001 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0001 .contactMeta{display:grid;gap:10px}
.zp0001 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0001 .heroCopy{animation:enter-0 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-0{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0001 .hero{min-height:auto}
.zp0001 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0001 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0001 .nav nav{display:none}
.zp0001 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0001 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0001 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0001 .mobileMenu nav a{padding:10px 8px}
.zp0001 .hero{grid-template-columns:1fr}
.zp0001 .section,.zp0001 .sectionTitle,.zp0001 .hours,.zp0001 .contact{grid-template-columns:1fr}
.zp0001 .section{display:block}}
@media(max-width:430px){.zp0001{font-size:16px}
.zp0001 .hero,.zp0001 .section,.zp0001 .contact{padding-left:18px;padding-right:18px}
.zp0001 .serviceGrid,.zp0001 .proof,.zp0001 .programmes>div:last-child,.zp0001 .destinations>div:last-child{grid-template-columns:1fr}
.zp0001 h1{font-size:clamp(42px,14vw,70px)}}

.zp0001 .heroActions a,.zp0001 .primary,.zp0001 .ctaBtn,.zp0001 .btnPrimary,.zp0001 .schedule>a,.zp0001 .newsletter>a{transition:all .2s ease}
.zp0001 .heroActions a:hover,.zp0001 .primary:hover,.zp0001 .ctaBtn:hover,.zp0001 .btnPrimary:hover{
  opacity:.75
}
.zp0001 nav a,.zp0001 .nav a,.zp0001 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0001 nav a:hover,.zp0001 .nav a:hover,.zp0001 .footer a:hover{
  opacity:.6
}
.zp0001 .serviceGrid article,.zp0001 .projectCard,.zp0001 .teamCard,.zp0001 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0001 .serviceGrid article:hover,.zp0001 .projectCard:hover,.zp0001 .teamCard:hover,.zp0001 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0001 *,.zp0001 *::before,.zp0001 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0001 a,.zp0001 button,.zp0001 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
