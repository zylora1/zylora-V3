"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0709-music-split-screen", "family": "Split-screen", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|magazine-sections|services>schedule>packages>proof>case-study|ticket-edge|museum", "industry": "music", "hero": "testimonial-led", "navigation": "lower-third", "layout": "magazine-sections"};

export default function Template0709({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0709" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0709{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0709 *{box-sizing:border-box}
.zp0709 a{color:inherit;text-decoration:none}
.zp0709 h1,.zp0709 h2,.zp0709 h3,.zp0709 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0709 img{max-width:100%;display:block}
.zp0709 button,.zp0709 a{-webkit-tap-highlight-color:transparent}
.zp0709 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0709 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0709 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0709 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0709 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0709 .mobileMenu{display:none}
.zp0709 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0709 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0709 .eyebrow,.zp0709 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0709 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0709 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0709 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0709 .heroActions a,.zp0709 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0709 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0709 .quoteHero{grid-template-columns:1fr 1fr}
.zp0709 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0709 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0709 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0709 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0709 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0709 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0709 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0709 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0709 .serviceGrid p{color:var(--muted)}
.zp0709 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0709 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0709 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0709 details{border-top:1px solid var(--border);padding:20px 0}
.zp0709 details summary{font-weight:800;cursor:pointer}
.zp0709 details p{color:var(--muted);max-width:70ch}
.zp0709 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0709 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0709 .projects article:nth-child(2){transform:translateY(32px)}
.zp0709 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0709 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0709 .packages>.sectionTitle{grid-column:1/-1}
.zp0709 .packages article{padding:24px;border:1px solid var(--border)}
.zp0709 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0709 .contact .eyebrow{color:var(--bg)}
.zp0709 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0709 .contactMeta{display:grid;gap:10px}
.zp0709 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0709 .section{column-rule:1px solid var(--border)}
.zp0709 .sectionTitle h2{max-width:18ch}
.zp0709 .heroCopy{animation:enter-708 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-708{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0709 .hero{min-height:auto}
.zp0709 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0709 .proof{grid-template-columns:1fr 1fr}
.zp0709 .packages{grid-template-columns:1fr 1fr}
.zp0709 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0709 .nav nav{display:none}
.zp0709 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0709 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0709 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0709 .mobileMenu nav a{padding:10px 8px}
.zp0709 .hero,.zp0709 .quoteHero{grid-template-columns:1fr}
.zp0709 .section,.zp0709 .sectionTitle,.zp0709 .contact{grid-template-columns:1fr}
.zp0709 .projects .projectGrid{grid-template-columns:1fr}
.zp0709 .projects article:nth-child(2){transform:none}
.zp0709 .section{display:block}}
@media(max-width:430px){.zp0709{font-size:16px}
.zp0709 .hero,.zp0709 .section,.zp0709 .contact{padding-left:18px;padding-right:18px}
.zp0709 .serviceGrid,.zp0709 .proof,.zp0709 .packages{grid-template-columns:1fr}
.zp0709 h1{font-size:clamp(42px,14vw,70px)}}

.zp0709 .heroActions a,.zp0709 .primary,.zp0709 .ctaBtn,.zp0709 .btnPrimary,.zp0709 .schedule>a,.zp0709 .newsletter>a{transition:all .2s ease}
.zp0709 .heroActions a:hover,.zp0709 .primary:hover,.zp0709 .ctaBtn:hover,.zp0709 .btnPrimary:hover{
  opacity:.85
}
.zp0709 nav a,.zp0709 .nav a,.zp0709 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0709 nav a:hover,.zp0709 .nav a:hover,.zp0709 .footer a:hover{
  color:var(--primary)
}
.zp0709 .serviceGrid article,.zp0709 .projectCard,.zp0709 .teamCard,.zp0709 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0709 .serviceGrid article:hover,.zp0709 .projectCard:hover,.zp0709 .teamCard:hover,.zp0709 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0709 *,.zp0709 *::before,.zp0709 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0709 a,.zp0709 button,.zp0709 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
