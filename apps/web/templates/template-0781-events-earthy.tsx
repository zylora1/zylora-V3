"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0781-events-earthy", "family": "Earthy", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|magazine-sections|research>schedule>services>proof>manifesto|hard-outline|museum", "industry": "events", "hero": "side-caption", "navigation": "compact-floating", "layout": "magazine-sections"};

export default function Template0781({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Event Studio");
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
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0781" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0781{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0781 *{box-sizing:border-box}
.zp0781 a{color:inherit;text-decoration:none}
.zp0781 h1,.zp0781 h2,.zp0781 h3,.zp0781 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0781 img{max-width:100%;display:block}
.zp0781 button,.zp0781 a{-webkit-tap-highlight-color:transparent}
.zp0781 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0781 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0781 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0781 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0781 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0781 .mobileMenu{display:none}
.zp0781 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0781 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0781 .eyebrow,.zp0781 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0781 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0781 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0781 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0781 .heroActions a,.zp0781 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0781 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0781 .visual,.zp0781 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0781 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0781 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0781 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0781 .heroPhoto{object-fit:cover}
.zp0781 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0781 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0781 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0781 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0781 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0781 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0781 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0781 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0781 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0781 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0781 .serviceGrid p{color:var(--muted)}
.zp0781 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0781 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0781 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0781 details{border-top:1px solid var(--border);padding:20px 0}
.zp0781 details summary{font-weight:800;cursor:pointer}
.zp0781 details p{color:var(--muted);max-width:70ch}
.zp0781 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0781 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Gill Sans, Avenir, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0781 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0781 .researchRows{max-width:900px;margin-left:auto}
.zp0781 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0781 .contact .eyebrow{color:var(--bg)}
.zp0781 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0781 .contactMeta{display:grid;gap:10px}
.zp0781 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0781 .section{column-rule:1px solid var(--border)}
.zp0781 .sectionTitle h2{max-width:18ch}
.zp0781 .heroCopy{animation:enter-780 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-780{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0781 .hero{min-height:auto}
.zp0781 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0781 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0781 .nav nav{display:none}
.zp0781 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0781 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0781 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0781 .mobileMenu nav a{padding:10px 8px}
.zp0781 .hero,.zp0781 .captionHero{grid-template-columns:1fr}
.zp0781 .section,.zp0781 .sectionTitle,.zp0781 .contact{grid-template-columns:1fr}
.zp0781 .section{display:block}}
@media(max-width:430px){.zp0781{font-size:16px}
.zp0781 .hero,.zp0781 .section,.zp0781 .contact{padding-left:18px;padding-right:18px}
.zp0781 .serviceGrid,.zp0781 .proof{grid-template-columns:1fr}
.zp0781 h1{font-size:clamp(42px,14vw,70px)}}

.zp0781 .heroActions a,.zp0781 .primary,.zp0781 .ctaBtn,.zp0781 .btnPrimary,.zp0781 .schedule>a,.zp0781 .newsletter>a{transition:all .2s ease}
.zp0781 .heroActions a:hover,.zp0781 .primary:hover,.zp0781 .ctaBtn:hover,.zp0781 .btnPrimary:hover{
  opacity:.85;transform:translateY(-1px)
}
.zp0781 nav a,.zp0781 .nav a,.zp0781 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0781 nav a:hover,.zp0781 .nav a:hover,.zp0781 .footer a:hover{
  color:var(--primary)
}
.zp0781 .serviceGrid article,.zp0781 .projectCard,.zp0781 .teamCard,.zp0781 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0781 .serviceGrid article:hover,.zp0781 .projectCard:hover,.zp0781 .teamCard:hover,.zp0781 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0781 *,.zp0781 *::before,.zp0781 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0781 a,.zp0781 button,.zp0781 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">80</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Earthy / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
