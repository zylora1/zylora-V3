"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0259-resort-aurora", "family": "Aurora", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|programme-led|services>destinations>proof>community>metrics|inset-panel|organic-modern", "industry": "resort", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "programme-led"};

export default function Template0259({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const storyBody = "Harbor Resort is presented as a real working resort, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0259" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0259{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0259 *{box-sizing:border-box}
.zp0259 a{color:inherit;text-decoration:none}
.zp0259 h1,.zp0259 h2,.zp0259 h3,.zp0259 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0259 img{max-width:100%;display:block}
.zp0259 button,.zp0259 a{-webkit-tap-highlight-color:transparent}
.zp0259 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0259 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0259 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0259 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0259 .mobileMenu{display:none}
.zp0259 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0259 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0259 .eyebrow,.zp0259 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0259 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0259 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0259 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0259 .heroActions a,.zp0259 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0259 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0259 .visual,.zp0259 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0259 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0259 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0259 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0259 .heroPhoto{object-fit:cover}
.zp0259 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0259 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0259 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0259 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0259 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0259 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0259 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0259 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0259 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0259 .serviceGrid p{color:var(--muted)}
.zp0259 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0259 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0259 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0259 details{border-top:1px solid var(--border);padding:20px 0}
.zp0259 details summary{font-weight:800;cursor:pointer}
.zp0259 details p{color:var(--muted);max-width:70ch}
.zp0259 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0259 .metrics div{background:var(--bg);padding:30px}
.zp0259 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Optima, Candara, sans-serif;color:var(--primary)}
.zp0259 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0259 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0259 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0259 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0259 .contact .eyebrow{color:var(--bg)}
.zp0259 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0259 .contactMeta{display:grid;gap:10px}
.zp0259 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0259{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0259 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0259 .heroCopy{animation:enter-258 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-258{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0259 .hero{min-height:auto}
.zp0259 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0259 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0259 .nav nav{display:none}
.zp0259 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0259 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0259 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0259 .mobileMenu nav a{padding:10px 8px}
.zp0259 .hero,.zp0259 .diagonalHero{grid-template-columns:1fr}
.zp0259 .section,.zp0259 .sectionTitle,.zp0259 .contact{grid-template-columns:1fr}
.zp0259 .metrics{grid-template-columns:1fr 1fr}
.zp0259 .section{display:block}}
@media(max-width:430px){.zp0259{font-size:16px}
.zp0259 .hero,.zp0259 .section,.zp0259 .contact{padding-left:18px;padding-right:18px}
.zp0259 .serviceGrid,.zp0259 .proof,.zp0259 .metrics,.zp0259 .destinations>div:last-child{grid-template-columns:1fr}
.zp0259 h1{font-size:clamp(42px,14vw,70px)}}

.zp0259 .heroActions a,.zp0259 .primary,.zp0259 .ctaBtn,.zp0259 .btnPrimary,.zp0259 .schedule>a,.zp0259 .newsletter>a{transition:all .2s ease}
.zp0259 .heroActions a:hover,.zp0259 .primary:hover,.zp0259 .ctaBtn:hover,.zp0259 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0259 nav a,.zp0259 .nav a,.zp0259 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0259 nav a:hover,.zp0259 .nav a:hover,.zp0259 .footer a:hover{
  color:var(--primary)
}
.zp0259 .serviceGrid article,.zp0259 .projectCard,.zp0259 .teamCard,.zp0259 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0259 .serviceGrid article:hover,.zp0259 .projectCard:hover,.zp0259 .teamCard:hover,.zp0259 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0259 *,.zp0259 *::before,.zp0259 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0259 a,.zp0259 button,.zp0259 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">58</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
