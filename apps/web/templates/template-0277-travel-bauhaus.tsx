"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0277-travel-bauhaus", "family": "Bauhaus", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|magazine-sections|team>metrics>case-study>proof>services|ticket-edge|museum", "industry": "travel", "hero": "image-collage", "navigation": "lower-third", "layout": "magazine-sections"};

export default function Template0277({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Travel Studio");
  const headline = String(content.headline || "Trips designed around how you actually want to spend your days.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Tailored itineraries", "Honeymoons", "Family travel", "Group journeys", "Concierge support"];
  const industryLabel = "Travel studio";
  const serviceNotes = ["Curated itineraries designed by specialists who've made every journey themselves.", "Small-group tours: maximum 12 people, so guides can respond to the group.", "Solo traveller programme with built-in social moments and private space.", "Flexibility built into every trip — optional activities, not mandatory schedules.", "24h in-destination support from someone who knows the location, not a call centre."];
  const proofPoints = ["ATOL protected", "Average group: 8 travellers", "5-star guide rating average", "Carbon offset included"];
  const testimonial = "I've done package holidays and I've done this. There's no comparison — every day had something that felt genuinely discovered.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0277" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0277{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0277 *{box-sizing:border-box}
.zp0277 a{color:inherit;text-decoration:none}
.zp0277 h1,.zp0277 h2,.zp0277 h3,.zp0277 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0277 img{max-width:100%;display:block}
.zp0277 button,.zp0277 a{-webkit-tap-highlight-color:transparent}
.zp0277 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0277 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0277 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0277 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0277 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0277 .mobileMenu{display:none}
.zp0277 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0277 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0277 .eyebrow,.zp0277 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0277 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0277 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0277 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0277 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0277 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0277 .visual,.zp0277 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0277 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0277 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0277 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0277 .heroPhoto{object-fit:cover}
.zp0277 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0277 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0277 .collage>*:first-child{grid-row:1/3}
.zp0277 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0277 .miniVisual.alt{background:var(--secondary)}
.zp0277 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0277 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0277 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0277 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0277 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0277 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0277 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0277 .serviceGrid p{color:var(--muted)}
.zp0277 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0277 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0277 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0277 details{border-top:1px solid var(--border);padding:20px 0}
.zp0277 details summary{font-weight:800;cursor:pointer}
.zp0277 details p{color:var(--muted);max-width:70ch}
.zp0277 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0277 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0277 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Gill Sans, Avenir, Arial, sans-serif;margin-bottom:18px}
.zp0277 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0277 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0277 .projects article:nth-child(2){transform:translateY(32px)}
.zp0277 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0277 .metrics div{background:var(--bg);padding:30px}
.zp0277 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Gill Sans, Avenir, Arial, sans-serif;color:var(--primary)}
.zp0277 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0277 .contact .eyebrow{color:var(--bg)}
.zp0277 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0277 .contactMeta{display:grid;gap:10px}
.zp0277 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0277 .section{column-rule:1px solid var(--border)}
.zp0277 .sectionTitle h2{max-width:18ch}
.zp0277 .heroCopy{animation:enter-276 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-276{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0277 .hero{min-height:auto}
.zp0277 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0277 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0277 .nav nav{display:none}
.zp0277 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0277 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0277 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0277 .mobileMenu nav a{padding:10px 8px}
.zp0277 .hero,.zp0277 .collageHero{grid-template-columns:1fr}
.zp0277 .section,.zp0277 .sectionTitle,.zp0277 .contact{grid-template-columns:1fr}
.zp0277 .teamGrid{grid-template-columns:1fr 1fr}
.zp0277 .metrics{grid-template-columns:1fr 1fr}
.zp0277 .projects .projectGrid{grid-template-columns:1fr}
.zp0277 .projects article:nth-child(2){transform:none}
.zp0277 .section{display:block}}
@media(max-width:430px){.zp0277{font-size:16px}
.zp0277 .hero,.zp0277 .section,.zp0277 .contact{padding-left:18px;padding-right:18px}
.zp0277 .serviceGrid,.zp0277 .proof,.zp0277 .teamGrid,.zp0277 .metrics{grid-template-columns:1fr}
.zp0277 h1{font-size:clamp(42px,14vw,70px)}}

.zp0277 .heroActions a,.zp0277 .primary,.zp0277 .ctaBtn,.zp0277 .btnPrimary,.zp0277 .schedule>a,.zp0277 .newsletter>a{transition:all .2s ease}
.zp0277 .heroActions a:hover,.zp0277 .primary:hover,.zp0277 .ctaBtn:hover,.zp0277 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0277 nav a,.zp0277 .nav a,.zp0277 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0277 nav a:hover,.zp0277 .nav a:hover,.zp0277 .footer a:hover{
  color:var(--primary)
}
.zp0277 .serviceGrid article,.zp0277 .projectCard,.zp0277 .teamCard,.zp0277 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0277 .serviceGrid article:hover,.zp0277 .projectCard:hover,.zp0277 .teamCard:hover,.zp0277 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0277 *,.zp0277 *::before,.zp0277 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0277 a,.zp0277 button,.zp0277 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">76</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
