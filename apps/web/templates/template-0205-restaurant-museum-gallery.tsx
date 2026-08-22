"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0205-restaurant-museum-gallery", "family": "Museum Gallery", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|magazine-sections|availability>values>security>services>proof|hard-outline|museum", "industry": "restaurant", "hero": "side-caption", "navigation": "compact-floating", "layout": "magazine-sections"};

export default function Template0205({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Restaurant");
  const headline = String(content.headline || "Ingredient-led cooking, warm service, and a menu that changes with the season.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Dinner service", "Tasting menu", "Private dining", "Seasonal specials", "Gift cards"];
  const industryLabel = "Restaurant";
  const serviceNotes = ["Seasonal menu updated monthly — what's on the plate reflects what's best that week.", "Private dining for up to 24 guests with a custom menu discussion included.", "Wine list curated by our sommelier with natural and classic options from small producers.", "Pre-theatre early service from 5:30 — main back by 7:15, guaranteed.", "Dietary requirements handled seriously: allergies logged and kitchen briefed."];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0205" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0205{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0205 *{box-sizing:border-box}
.zp0205 a{color:inherit;text-decoration:none}
.zp0205 h1,.zp0205 h2,.zp0205 h3,.zp0205 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0205 img{max-width:100%;display:block}
.zp0205 button,.zp0205 a{-webkit-tap-highlight-color:transparent}
.zp0205 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0205 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0205 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0205 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0205 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0205 .mobileMenu{display:none}
.zp0205 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0205 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0205 .eyebrow,.zp0205 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0205 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0205 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0205 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0205 .heroActions a,.zp0205 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0205 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0205 .visual,.zp0205 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0205 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0205 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0205 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0205 .heroPhoto{object-fit:cover}
.zp0205 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0205 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0205 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0205 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0205 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0205 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0205 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0205 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0205 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0205 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0205 .serviceGrid p{color:var(--muted)}
.zp0205 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0205 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0205 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0205 details{border-top:1px solid var(--border);padding:20px 0}
.zp0205 details summary{font-weight:800;cursor:pointer}
.zp0205 details p{color:var(--muted);max-width:70ch}
.zp0205 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0205 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Gill Sans, Avenir, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0205 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0205 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0205 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0205 .contact .eyebrow{color:var(--bg)}
.zp0205 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0205 .contactMeta{display:grid;gap:10px}
.zp0205 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0205 .section{column-rule:1px solid var(--border)}
.zp0205 .sectionTitle h2{max-width:18ch}
.zp0205 .heroCopy{animation:enter-204 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-204{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0205 .hero{min-height:auto}
.zp0205 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0205 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0205 .nav nav{display:none}
.zp0205 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0205 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0205 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0205 .mobileMenu nav a{padding:10px 8px}
.zp0205 .hero,.zp0205 .captionHero{grid-template-columns:1fr}
.zp0205 .section,.zp0205 .sectionTitle,.zp0205 .security,.zp0205 .contact{grid-template-columns:1fr}
.zp0205 .section{display:block}}
@media(max-width:430px){.zp0205{font-size:16px}
.zp0205 .hero,.zp0205 .section,.zp0205 .contact{padding-left:18px;padding-right:18px}
.zp0205 .serviceGrid,.zp0205 .proof{grid-template-columns:1fr}
.zp0205 h1{font-size:clamp(42px,14vw,70px)}}

.zp0205 .heroActions a,.zp0205 .primary,.zp0205 .ctaBtn,.zp0205 .btnPrimary,.zp0205 .schedule>a,.zp0205 .newsletter>a{transition:all .2s ease}
.zp0205 .heroActions a:hover,.zp0205 .primary:hover,.zp0205 .ctaBtn:hover,.zp0205 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0205 nav a,.zp0205 .nav a,.zp0205 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0205 nav a:hover,.zp0205 .nav a:hover,.zp0205 .footer a:hover{
  opacity:.7
}
.zp0205 .serviceGrid article,.zp0205 .projectCard,.zp0205 .teamCard,.zp0205 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0205 .serviceGrid article:hover,.zp0205 .projectCard:hover,.zp0205 .teamCard:hover,.zp0205 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0205 *,.zp0205 *::before,.zp0205 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0205 a,.zp0205 button,.zp0205 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">04</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Museum Gallery / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
