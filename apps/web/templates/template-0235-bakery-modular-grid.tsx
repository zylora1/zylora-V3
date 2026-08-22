"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0235-bakery-modular-grid", "family": "Modular Grid", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|two-speed-scroll|materials>proof>services>security>community|capsule|organic-modern", "industry": "bakery", "hero": "split-image", "navigation": "statement-bar", "layout": "two-speed-scroll"};

export default function Template0235({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const storyBody = "Juniper Bakery is presented as a real working bakery, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0235" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0235{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0235 *{box-sizing:border-box}
.zp0235 a{color:inherit;text-decoration:none}
.zp0235 h1,.zp0235 h2,.zp0235 h3,.zp0235 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0235 img{max-width:100%;display:block}
.zp0235 button,.zp0235 a{-webkit-tap-highlight-color:transparent}
.zp0235 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0235 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0235 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0235 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0235 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0235 .nav.statement>a{justify-self:end}
.zp0235 .mobileMenu{display:none}
.zp0235 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0235 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0235 .eyebrow,.zp0235 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0235 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0235 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0235 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0235 .heroActions a,.zp0235 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0235 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0235 .visual,.zp0235 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0235 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0235 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0235 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0235 .heroPhoto{object-fit:cover}
.zp0235 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0235 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0235 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0235 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0235 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0235 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0235 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0235 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0235 .serviceGrid p{color:var(--muted)}
.zp0235 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0235 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0235 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0235 details{border-top:1px solid var(--border);padding:20px 0}
.zp0235 details summary{font-weight:800;cursor:pointer}
.zp0235 details p{color:var(--muted);max-width:70ch}
.zp0235 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0235 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0235 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0235 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0235 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0235 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0235 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0235 .contact .eyebrow{color:var(--bg)}
.zp0235 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0235 .contactMeta{display:grid;gap:10px}
.zp0235 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0235 .heroCopy{animation:enter-234 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-234{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0235 .hero{min-height:auto}
.zp0235 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0235 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0235 .nav nav{display:none}
.zp0235 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0235 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0235 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0235 .mobileMenu nav a{padding:10px 8px}
.zp0235 .hero,.zp0235 .splitHero{grid-template-columns:1fr}
.zp0235 .section,.zp0235 .sectionTitle,.zp0235 .security,.zp0235 .contact{grid-template-columns:1fr}
.zp0235 .section{display:block}}
@media(max-width:430px){.zp0235{font-size:16px}
.zp0235 .hero,.zp0235 .section,.zp0235 .contact{padding-left:18px;padding-right:18px}
.zp0235 .serviceGrid,.zp0235 .proof{grid-template-columns:1fr}
.zp0235 h1{font-size:clamp(42px,14vw,70px)}
.zp0235 .nav.statement{grid-template-columns:1fr auto}
.zp0235 .nav.statement>span:first-child{display:none}}

.zp0235 .heroActions a,.zp0235 .primary,.zp0235 .ctaBtn,.zp0235 .btnPrimary,.zp0235 .schedule>a,.zp0235 .newsletter>a{transition:all .2s ease}
.zp0235 .heroActions a:hover,.zp0235 .primary:hover,.zp0235 .ctaBtn:hover,.zp0235 .btnPrimary:hover{
  opacity:.85
}
.zp0235 nav a,.zp0235 .nav a,.zp0235 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0235 nav a:hover,.zp0235 .nav a:hover,.zp0235 .footer a:hover{
  color:var(--primary)
}
.zp0235 .serviceGrid article,.zp0235 .projectCard,.zp0235 .teamCard,.zp0235 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0235 .serviceGrid article:hover,.zp0235 .projectCard:hover,.zp0235 .teamCard:hover,.zp0235 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0235 *,.zp0235 *::before,.zp0235 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0235 a,.zp0235 button,.zp0235 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">34</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modular Grid / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
