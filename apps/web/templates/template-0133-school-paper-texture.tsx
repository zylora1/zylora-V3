"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0133-school-paper-texture", "family": "Paper Texture", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|magazine-sections|programmes>credentials>proof>services>gallery|ticket-edge|museum", "industry": "school", "hero": "testimonial-led", "navigation": "lower-third", "layout": "magazine-sections"};

export default function Template0133({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0133" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0133{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0133 *{box-sizing:border-box}
.zp0133 a{color:inherit;text-decoration:none}
.zp0133 h1,.zp0133 h2,.zp0133 h3,.zp0133 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0133 img{max-width:100%;display:block}
.zp0133 button,.zp0133 a{-webkit-tap-highlight-color:transparent}
.zp0133 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0133 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0133 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0133 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0133 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0133 .mobileMenu{display:none}
.zp0133 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0133 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0133 .eyebrow,.zp0133 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0133 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0133 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0133 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0133 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0133 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0133 .quoteHero{grid-template-columns:1fr 1fr}
.zp0133 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0133 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0133 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0133 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0133 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0133 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0133 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0133 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0133 .serviceGrid p{color:var(--muted)}
.zp0133 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0133 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0133 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0133 details{border-top:1px solid var(--border);padding:20px 0}
.zp0133 details summary{font-weight:800;cursor:pointer}
.zp0133 details p{color:var(--muted);max-width:70ch}
.zp0133 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0133 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0133 .galleryGrid>*:first-child{grid-row:1/3}
.zp0133 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0133 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0133 .g2,.zp0133 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0133 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0133 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0133 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0133 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0133 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0133 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0133 .contact .eyebrow{color:var(--bg)}
.zp0133 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0133 .contactMeta{display:grid;gap:10px}
.zp0133 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0133 .section{column-rule:1px solid var(--border)}
.zp0133 .sectionTitle h2{max-width:18ch}
.zp0133{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0133 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0133 .heroCopy{animation:enter-132 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-132{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0133 .hero{min-height:auto}
.zp0133 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0133 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0133 .nav nav{display:none}
.zp0133 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0133 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0133 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0133 .mobileMenu nav a{padding:10px 8px}
.zp0133 .hero,.zp0133 .quoteHero{grid-template-columns:1fr}
.zp0133 .section,.zp0133 .sectionTitle,.zp0133 .contact{grid-template-columns:1fr}
.zp0133 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0133 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0133 .section{display:block}}
@media(max-width:430px){.zp0133{font-size:16px}
.zp0133 .hero,.zp0133 .section,.zp0133 .contact{padding-left:18px;padding-right:18px}
.zp0133 .serviceGrid,.zp0133 .proof,.zp0133 .programmes>div:last-child{grid-template-columns:1fr}
.zp0133 h1{font-size:clamp(42px,14vw,70px)}
.zp0133 .galleryGrid{grid-template-columns:1fr}
.zp0133 .galleryGrid>*:first-child{grid-column:auto}}

.zp0133 .heroActions a,.zp0133 .primary,.zp0133 .ctaBtn,.zp0133 .btnPrimary,.zp0133 .schedule>a,.zp0133 .newsletter>a{transition:all .2s ease}
.zp0133 .heroActions a:hover,.zp0133 .primary:hover,.zp0133 .ctaBtn:hover,.zp0133 .btnPrimary:hover{
  opacity:.8
}
.zp0133 nav a,.zp0133 .nav a,.zp0133 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0133 nav a:hover,.zp0133 .nav a:hover,.zp0133 .footer a:hover{
  color:var(--primary)
}
.zp0133 .serviceGrid article,.zp0133 .projectCard,.zp0133 .teamCard,.zp0133 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0133 .serviceGrid article:hover,.zp0133 .projectCard:hover,.zp0133 .teamCard:hover,.zp0133 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0133 *,.zp0133 *::before,.zp0133 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0133 a,.zp0133 button,.zp0133 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
