"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0655-salon-glassmorphism", "family": "Glassmorphism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|programme-led|gallery>proof>services>values>materials|soft-12|technical-mono", "industry": "salon", "hero": "location-led", "navigation": "vertical-rail", "layout": "programme-led"};

export default function Template0655({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0655" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0655{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0655 *{box-sizing:border-box}
.zp0655 a{color:inherit;text-decoration:none}
.zp0655 h1,.zp0655 h2,.zp0655 h3,.zp0655 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0655 img{max-width:100%;display:block}
.zp0655 button,.zp0655 a{-webkit-tap-highlight-color:transparent}
.zp0655 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0655 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0655 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0655 .mobileMenu{display:none}
.zp0655:has(.navRail)>.hero,.zp0655:has(.navRail)>.section,.zp0655:has(.navRail)>.contact,.zp0655:has(.navRail)>.footer{margin-left:190px}
.zp0655 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0655 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0655 .eyebrow,.zp0655 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0655 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0655 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0655 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0655 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0655 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0655 .locationHero{grid-template-columns:1fr 1fr}
.zp0655 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0655 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0655 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0655 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0655 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0655 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0655 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0655 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0655 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0655 .serviceGrid p{color:var(--muted)}
.zp0655 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0655 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0655 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0655 details{border-top:1px solid var(--border);padding:20px 0}
.zp0655 details summary{font-weight:800;cursor:pointer}
.zp0655 details p{color:var(--muted);max-width:70ch}
.zp0655 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0655 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0655 .galleryGrid>*:first-child{grid-row:1/3}
.zp0655 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0655 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0655 .g2,.zp0655 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0655 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0655 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0655 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0655 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Courier New, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0655 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0655 .contact .eyebrow{color:var(--bg)}
.zp0655 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0655 .contactMeta{display:grid;gap:10px}
.zp0655 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0655{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0655 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0655 .heroCopy{animation:enter-654 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-654{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0655 .hero{min-height:auto}
.zp0655 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0655 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0655 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0655 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0655 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0655 .mobileMenu nav a{padding:10px 8px}
.zp0655 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0655:has(.navRail)>.hero,.zp0655:has(.navRail)>.section,.zp0655:has(.navRail)>.contact,.zp0655:has(.navRail)>.footer{margin-left:0}
.zp0655 .hero,.zp0655 .locationHero{grid-template-columns:1fr}
.zp0655 .section,.zp0655 .sectionTitle,.zp0655 .contact{grid-template-columns:1fr}
.zp0655 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0655 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0655 .section{display:block}}
@media(max-width:430px){.zp0655{font-size:16px}
.zp0655 .hero,.zp0655 .section,.zp0655 .contact{padding-left:18px;padding-right:18px}
.zp0655 .serviceGrid,.zp0655 .proof{grid-template-columns:1fr}
.zp0655 h1{font-size:clamp(42px,14vw,70px)}
.zp0655 .galleryGrid{grid-template-columns:1fr}
.zp0655 .galleryGrid>*:first-child{grid-column:auto}}

.zp0655 .heroActions a,.zp0655 .primary,.zp0655 .ctaBtn,.zp0655 .btnPrimary,.zp0655 .schedule>a,.zp0655 .newsletter>a{transition:all .2s ease}
.zp0655 .heroActions a:hover,.zp0655 .primary:hover,.zp0655 .ctaBtn:hover,.zp0655 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0655 nav a,.zp0655 .nav a,.zp0655 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0655 nav a:hover,.zp0655 .nav a:hover,.zp0655 .footer a:hover{
  color:var(--primary)
}
.zp0655 .serviceGrid article,.zp0655 .projectCard,.zp0655 .teamCard,.zp0655 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0655 .serviceGrid article:hover,.zp0655 .projectCard:hover,.zp0655 .teamCard:hover,.zp0655 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0655 *,.zp0655 *::before,.zp0655 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0655 a,.zp0655 button,.zp0655 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
