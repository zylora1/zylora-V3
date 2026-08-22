"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0829-community-postmodern", "family": "Postmodern", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|editorial-spine|availability>team>services>proof>metrics|hard-outline|museum", "industry": "community", "hero": "floating-panels", "navigation": "compact-floating", "layout": "editorial-spine"};

export default function Template0829({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const industryLabel = "Community organization";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0829" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0829{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0829 *{box-sizing:border-box}
.zp0829 a{color:inherit;text-decoration:none}
.zp0829 h1,.zp0829 h2,.zp0829 h3,.zp0829 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0829 img{max-width:100%;display:block}
.zp0829 button,.zp0829 a{-webkit-tap-highlight-color:transparent}
.zp0829 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0829 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0829 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0829 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0829 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0829 .mobileMenu{display:none}
.zp0829 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0829 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0829 .eyebrow,.zp0829 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0829 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0829 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0829 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0829 .heroActions a,.zp0829 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0829 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0829 .visual,.zp0829 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0829 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0829 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0829 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0829 .heroPhoto{object-fit:cover}
.zp0829 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0829 .floatStack{position:relative;min-height:500px}
.zp0829 .floatStack>*{position:absolute}
.zp0829 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0829 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0829 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0829 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0829 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0829 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0829 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0829 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0829 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0829 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0829 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0829 .serviceGrid p{color:var(--muted)}
.zp0829 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0829 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0829 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0829 details{border-top:1px solid var(--border);padding:20px 0}
.zp0829 details summary{font-weight:800;cursor:pointer}
.zp0829 details p{color:var(--muted);max-width:70ch}
.zp0829 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0829 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0829 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Gill Sans, Avenir, Arial, sans-serif;margin-bottom:18px}
.zp0829 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0829 .metrics div{background:var(--bg);padding:30px}
.zp0829 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Gill Sans, Avenir, Arial, sans-serif;color:var(--primary)}
.zp0829 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0829 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0829 .contact .eyebrow{color:var(--bg)}
.zp0829 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0829 .contactMeta{display:grid;gap:10px}
.zp0829 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0829 .heroCopy{animation:enter-828 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-828{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0829 .hero{min-height:auto}
.zp0829 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0829 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0829 .nav nav{display:none}
.zp0829 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0829 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0829 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0829 .mobileMenu nav a{padding:10px 8px}
.zp0829 .hero,.zp0829 .floatingHero{grid-template-columns:1fr}
.zp0829 .section,.zp0829 .sectionTitle,.zp0829 .contact{grid-template-columns:1fr}
.zp0829 .teamGrid{grid-template-columns:1fr 1fr}
.zp0829 .metrics{grid-template-columns:1fr 1fr}
.zp0829 .section{display:block}}
@media(max-width:430px){.zp0829{font-size:16px}
.zp0829 .hero,.zp0829 .section,.zp0829 .contact{padding-left:18px;padding-right:18px}
.zp0829 .serviceGrid,.zp0829 .proof,.zp0829 .teamGrid,.zp0829 .metrics{grid-template-columns:1fr}
.zp0829 h1{font-size:clamp(42px,14vw,70px)}}

.zp0829 .heroActions a,.zp0829 .primary,.zp0829 .ctaBtn,.zp0829 .btnPrimary,.zp0829 .schedule>a,.zp0829 .newsletter>a{transition:all .2s ease}
.zp0829 .heroActions a:hover,.zp0829 .primary:hover,.zp0829 .ctaBtn:hover,.zp0829 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0829 nav a,.zp0829 .nav a,.zp0829 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0829 nav a:hover,.zp0829 .nav a:hover,.zp0829 .footer a:hover{
  color:var(--primary)
}
.zp0829 .serviceGrid article,.zp0829 .projectCard,.zp0829 .teamCard,.zp0829 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0829 .serviceGrid article:hover,.zp0829 .projectCard:hover,.zp0829 .teamCard:hover,.zp0829 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0829 *,.zp0829 *::before,.zp0829 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0829 a,.zp0829 button,.zp0829 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">28</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
