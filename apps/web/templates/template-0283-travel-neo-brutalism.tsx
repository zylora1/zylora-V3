"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0283-travel-neo-brutalism", "family": "Neo-Brutalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|horizontal-panels|services>features>location>comparison>proof|capsule|organic-modern", "industry": "travel", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "horizontal-panels"};

export default function Template0283({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Travel Studio");
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
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0283" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0283{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:3px;--shadow:none;--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0283 *{box-sizing:border-box}
.zp0283 a{color:inherit;text-decoration:none}
.zp0283 h1,.zp0283 h2,.zp0283 h3,.zp0283 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0283 img{max-width:100%;display:block}
.zp0283 button,.zp0283 a{-webkit-tap-highlight-color:transparent}
.zp0283 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0283 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0283 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0283 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0283 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0283 .nav.statement>a{justify-self:end}
.zp0283 .mobileMenu{display:none}
.zp0283 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0283 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0283 .eyebrow,.zp0283 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0283 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0283 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0283 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0283 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0283 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0283 .visual,.zp0283 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0283 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0283 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0283 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0283 .heroPhoto{object-fit:cover}
.zp0283 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0283 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Optima, Candara, sans-serif;opacity:.08}
.zp0283 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0283 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0283 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0283 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0283 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0283 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0283 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0283 .serviceGrid p{color:var(--muted)}
.zp0283 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0283 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0283 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0283 details{border-top:1px solid var(--border);padding:20px 0}
.zp0283 details summary{font-weight:800;cursor:pointer}
.zp0283 details p{color:var(--muted);max-width:70ch}
.zp0283 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0283 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0283 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0283 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0283 .features ul{list-style:none;margin:0;padding:0}
.zp0283 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0283 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0283 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0283 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0283 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0283 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0283 .contact .eyebrow{color:var(--bg)}
.zp0283 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0283 .contactMeta{display:grid;gap:10px}
.zp0283 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0283 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0283 .sectionTitle{display:block}
.zp0283 .heroActions a,.zp0283 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0283 h1{text-transform:uppercase}
.zp0283 .heroCopy{animation:enter-282 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-282{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0283 .hero{min-height:auto}
.zp0283 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0283 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0283 .nav nav{display:none}
.zp0283 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0283 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0283 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0283 .mobileMenu nav a{padding:10px 8px}
.zp0283 .hero,.zp0283 .stripHero{grid-template-columns:1fr}
.zp0283 .section,.zp0283 .sectionTitle,.zp0283 .location,.zp0283 .features,.zp0283 .contact{grid-template-columns:1fr}
.zp0283 .section{display:block}}
@media(max-width:430px){.zp0283{font-size:16px}
.zp0283 .hero,.zp0283 .section,.zp0283 .contact{padding-left:18px;padding-right:18px}
.zp0283 .serviceGrid,.zp0283 .proof,.zp0283 .compareGrid{grid-template-columns:1fr}
.zp0283 h1{font-size:clamp(42px,14vw,70px)}
.zp0283 .nav.statement{grid-template-columns:1fr auto}
.zp0283 .nav.statement>span:first-child{display:none}}

.zp0283 .heroActions a,.zp0283 .primary,.zp0283 .ctaBtn,.zp0283 .btnPrimary,.zp0283 .schedule>a,.zp0283 .newsletter>a{transition:all .2s ease}
.zp0283 .heroActions a:hover,.zp0283 .primary:hover,.zp0283 .ctaBtn:hover,.zp0283 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0283 nav a,.zp0283 .nav a,.zp0283 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0283 nav a:hover,.zp0283 .nav a:hover,.zp0283 .footer a:hover{
  text-decoration:underline
}
.zp0283 .serviceGrid article,.zp0283 .projectCard,.zp0283 .teamCard,.zp0283 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0283 .serviceGrid article:hover,.zp0283 .projectCard:hover,.zp0283 .teamCard:hover,.zp0283 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0283 *,.zp0283 *::before,.zp0283 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0283 a,.zp0283 button,.zp0283 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">82</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
