"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0727-artist-cinematic", "family": "Cinematic", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|programme-led|hours>community>story>services>proof|asymmetric-radius|technical-mono", "industry": "artist", "hero": "index-led", "navigation": "editorial-index", "layout": "programme-led"};

export default function Template0727({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA spacious digital archive for work, exhibitions, process, and current enquiries.\u201d";
  const storyBody = "Foxglove Artist Studio is presented as a real working artist studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0727" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0727{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0727 *{box-sizing:border-box}
.zp0727 a{color:inherit;text-decoration:none}
.zp0727 h1,.zp0727 h2,.zp0727 h3,.zp0727 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0727 img{max-width:100%;display:block}
.zp0727 button,.zp0727 a{-webkit-tap-highlight-color:transparent}
.zp0727 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0727 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0727 .nav strong{font-family:Courier New, monospace;font-size:18px}
.zp0727 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0727 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0727 .nav.index nav{justify-content:flex-end}
.zp0727 .mobileMenu{display:none}
.zp0727 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0727 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0727 .eyebrow,.zp0727 .sectionTitle>span,.zp0727 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0727 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0727 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0727 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0727 .heroActions a,.zp0727 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0727 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0727 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0727 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0727 .indexHero li{font:700 18px/1.2 Courier New, monospace;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0727 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0727 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0727 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0727 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0727 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0727 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0727 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0727 .serviceGrid p{color:var(--muted)}
.zp0727 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0727 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0727 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0727 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0727 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0727 .story p{color:var(--muted)}
.zp0727 details{border-top:1px solid var(--border);padding:20px 0}
.zp0727 details summary{font-weight:800;cursor:pointer}
.zp0727 details p{color:var(--muted);max-width:70ch}
.zp0727 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0727 .hours dl{margin:0}
.zp0727 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0727 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0727 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0727 .contact .eyebrow{color:var(--bg)}
.zp0727 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0727 .contactMeta{display:grid;gap:10px}
.zp0727 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0727 .heroCopy{animation:enter-726 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-726{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0727 .hero{min-height:auto}
.zp0727 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0727 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0727 .nav nav{display:none}
.zp0727 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0727 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0727 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0727 .mobileMenu nav a{padding:10px 8px}
.zp0727 .hero,.zp0727 .indexHero{grid-template-columns:1fr}
.zp0727 .section,.zp0727 .sectionTitle,.zp0727 .story,.zp0727 .hours,.zp0727 .contact{grid-template-columns:1fr}
.zp0727 .section{display:block}}
@media(max-width:430px){.zp0727{font-size:16px}
.zp0727 .hero,.zp0727 .section,.zp0727 .contact{padding-left:18px;padding-right:18px}
.zp0727 .serviceGrid,.zp0727 .proof{grid-template-columns:1fr}
.zp0727 h1{font-size:clamp(42px,14vw,70px)}
.zp0727 .nav.index{grid-template-columns:1fr auto}
.zp0727 .nav.index>span{display:none}}

.zp0727 .heroActions a,.zp0727 .primary,.zp0727 .ctaBtn,.zp0727 .btnPrimary,.zp0727 .schedule>a,.zp0727 .newsletter>a{transition:all .2s ease}
.zp0727 .heroActions a:hover,.zp0727 .primary:hover,.zp0727 .ctaBtn:hover,.zp0727 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0727 nav a,.zp0727 .nav a,.zp0727 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0727 nav a:hover,.zp0727 .nav a:hover,.zp0727 .footer a:hover{
  opacity:.7
}
.zp0727 .serviceGrid article,.zp0727 .projectCard,.zp0727 .teamCard,.zp0727 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0727 .serviceGrid article:hover,.zp0727 .projectCard:hover,.zp0727 .teamCard:hover,.zp0727 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0727 *,.zp0727 *::before,.zp0727 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0727 a,.zp0727 button,.zp0727 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
