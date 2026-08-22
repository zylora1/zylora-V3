"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0817-community-paper-texture", "family": "Paper Texture", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|magazine-sections|comparison>location>destinations>proof>services|square-editorial|luxury-contrast", "industry": "community", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "magazine-sections"};

export default function Template0817({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0817" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0817{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0817 *{box-sizing:border-box}
.zp0817 a{color:inherit;text-decoration:none}
.zp0817 h1,.zp0817 h2,.zp0817 h3,.zp0817 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0817 img{max-width:100%;display:block}
.zp0817 button,.zp0817 a{-webkit-tap-highlight-color:transparent}
.zp0817 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0817 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0817 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0817 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0817 .mobileMenu{display:none}
.zp0817 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0817 .eyebrow,.zp0817 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0817 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0817 .visual,.zp0817 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0817 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0817 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0817 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0817 .heroPhoto{object-fit:cover}
.zp0817 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0817 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0817 .coverCaption{align-self:end}
.zp0817 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0817 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0817 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0817 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0817 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0817 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0817 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0817 .serviceGrid p{color:var(--muted)}
.zp0817 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0817 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0817 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0817 details{border-top:1px solid var(--border);padding:20px 0}
.zp0817 details summary{font-weight:800;cursor:pointer}
.zp0817 details p{color:var(--muted);max-width:70ch}
.zp0817 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0817 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0817 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0817 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0817 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0817 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0817 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0817 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0817 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0817 .contact .eyebrow{color:var(--bg)}
.zp0817 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0817 .contactMeta{display:grid;gap:10px}
.zp0817 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0817 .section{column-rule:1px solid var(--border)}
.zp0817 .sectionTitle h2{max-width:18ch}
.zp0817{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0817 .section:nth-of-type(3n){transform:rotate(0.35deg)}
@keyframes enter-816{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0817 .hero{min-height:auto}
.zp0817 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0817 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0817 .nav nav{display:none}
.zp0817 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0817 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0817 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0817 .mobileMenu nav a{padding:10px 8px}
.zp0817 .hero,.zp0817 .coverHero{grid-template-columns:1fr}
.zp0817 .section,.zp0817 .sectionTitle,.zp0817 .location,.zp0817 .contact{grid-template-columns:1fr}
.zp0817 .section{display:block}}
@media(max-width:430px){.zp0817{font-size:16px}
.zp0817 .hero,.zp0817 .section,.zp0817 .contact{padding-left:18px;padding-right:18px}
.zp0817 .serviceGrid,.zp0817 .proof,.zp0817 .destinations>div:last-child,.zp0817 .compareGrid{grid-template-columns:1fr}
.zp0817 h1{font-size:clamp(42px,14vw,70px)}}

.zp0817 .heroActions a,.zp0817 .primary,.zp0817 .ctaBtn,.zp0817 .btnPrimary,.zp0817 .schedule>a,.zp0817 .newsletter>a{transition:all .2s ease}
.zp0817 .heroActions a:hover,.zp0817 .primary:hover,.zp0817 .ctaBtn:hover,.zp0817 .btnPrimary:hover{
  opacity:.8
}
.zp0817 nav a,.zp0817 .nav a,.zp0817 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0817 nav a:hover,.zp0817 .nav a:hover,.zp0817 .footer a:hover{
  color:var(--primary)
}
.zp0817 .serviceGrid article,.zp0817 .projectCard,.zp0817 .teamCard,.zp0817 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0817 .serviceGrid article:hover,.zp0817 .projectCard:hover,.zp0817 .teamCard:hover,.zp0817 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0817 *,.zp0817 *::before,.zp0817 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0817 a,.zp0817 button,.zp0817 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0817</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">16</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
