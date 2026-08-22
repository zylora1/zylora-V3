"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0469-saas-kinetic-typography", "family": "Kinetic Typography", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|editorial-spine|services>pricing>availability>proof>location|ticket-edge|museum", "industry": "saas", "hero": "image-collage", "navigation": "lower-third", "layout": "editorial-spine"};

export default function Template0469({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine B2B Saas");
  const headline = String(content.headline || "A focused product that removes repetitive work and makes the next action obvious.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Workflow automation", "Analytics", "Integrations", "Team collaboration", "Security"];
  const industryLabel = "B2B SaaS";
  const serviceNotes = ["30-day free trial with full feature access — no credit card required to start.", "API and webhook integrations: connect your existing tools in under an hour.", "Data export in any format, any time — your data is yours, unconditionally.", "Dedicated onboarding specialist for teams over 10 users, included in all plans.", "99.95% uptime SLA with status page and incident communication in real-time."];
  const proofPoints = ["SOC 2 Type II certified", "GDPR compliant", "99.95% uptime SLA", "ISO 27001 certified"];
  const testimonial = "Setup took 40 minutes. We replaced three separate tools and the team actually uses it — adoption was near-instant.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0469" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0469{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0469 *{box-sizing:border-box}
.zp0469 a{color:inherit;text-decoration:none}
.zp0469 h1,.zp0469 h2,.zp0469 h3,.zp0469 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0469 img{max-width:100%;display:block}
.zp0469 button,.zp0469 a{-webkit-tap-highlight-color:transparent}
.zp0469 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0469 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0469 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0469 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0469 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0469 .mobileMenu{display:none}
.zp0469 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0469 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0469 .eyebrow,.zp0469 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0469 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0469 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0469 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0469 .heroActions a,.zp0469 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0469 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0469 .visual,.zp0469 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0469 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0469 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0469 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0469 .heroPhoto{object-fit:cover}
.zp0469 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0469 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0469 .collage>*:first-child{grid-row:1/3}
.zp0469 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0469 .miniVisual.alt{background:var(--secondary)}
.zp0469 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0469 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0469 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0469 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0469 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0469 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0469 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0469 .serviceGrid p{color:var(--muted)}
.zp0469 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0469 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0469 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0469 details{border-top:1px solid var(--border);padding:20px 0}
.zp0469 details summary{font-weight:800;cursor:pointer}
.zp0469 details p{color:var(--muted);max-width:70ch}
.zp0469 .priceRows{border-top:1px solid var(--border)}
.zp0469 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0469 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0469 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0469 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0469 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0469 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0469 .contact .eyebrow{color:var(--bg)}
.zp0469 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0469 .contactMeta{display:grid;gap:10px}
.zp0469 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0469 .heroCopy{animation:enter-468 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-468{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0469 .hero{min-height:auto}
.zp0469 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0469 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0469 .nav nav{display:none}
.zp0469 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0469 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0469 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0469 .mobileMenu nav a{padding:10px 8px}
.zp0469 .hero,.zp0469 .collageHero{grid-template-columns:1fr}
.zp0469 .section,.zp0469 .sectionTitle,.zp0469 .location,.zp0469 .contact{grid-template-columns:1fr}
.zp0469 .section{display:block}}
@media(max-width:430px){.zp0469{font-size:16px}
.zp0469 .hero,.zp0469 .section,.zp0469 .contact{padding-left:18px;padding-right:18px}
.zp0469 .serviceGrid,.zp0469 .proof{grid-template-columns:1fr}
.zp0469 h1{font-size:clamp(42px,14vw,70px)}
.zp0469 .priceRows article{grid-template-columns:1fr}}

.zp0469 .heroActions a,.zp0469 .primary,.zp0469 .ctaBtn,.zp0469 .btnPrimary,.zp0469 .schedule>a,.zp0469 .newsletter>a{transition:all .2s ease}
.zp0469 .heroActions a:hover,.zp0469 .primary:hover,.zp0469 .ctaBtn:hover,.zp0469 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0469 nav a,.zp0469 .nav a,.zp0469 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0469 nav a:hover,.zp0469 .nav a:hover,.zp0469 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0469 .serviceGrid article,.zp0469 .projectCard,.zp0469 .teamCard,.zp0469 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0469 .serviceGrid article:hover,.zp0469 .projectCard:hover,.zp0469 .teamCard:hover,.zp0469 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0469 *,.zp0469 *::before,.zp0469 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0469 a,.zp0469 button,.zp0469 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">68</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
