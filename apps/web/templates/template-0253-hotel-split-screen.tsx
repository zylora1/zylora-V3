"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0253-hotel-split-screen", "family": "Split-screen", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|editorial-spine|features>services>timeline>proof>security|hard-outline|museum", "industry": "hotel", "hero": "floating-panels", "navigation": "compact-floating", "layout": "editorial-spine"};

export default function Template0253({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Boutique Hotel");
  const headline = String(content.headline || "A design-led stay shaped by place, quiet details, and genuinely useful hospitality.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Rooms and suites", "Dining", "Spa", "Private events", "Local experiences"];
  const industryLabel = "Boutique hotel";
  const serviceNotes = ["Rooms from studio to suite, each styled individually — no two are identical.", "Breakfast sourced within 30 miles: menus change with the seasons.", "Concierge-arranged experiences: hiking guides, private dining, gallery access.", "Business facilities including private meeting rooms with AV and catering.", "Flexible check-in and late check-out on request — we work around your plans."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0253" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0253{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0253 *{box-sizing:border-box}
.zp0253 a{color:inherit;text-decoration:none}
.zp0253 h1,.zp0253 h2,.zp0253 h3,.zp0253 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0253 img{max-width:100%;display:block}
.zp0253 button,.zp0253 a{-webkit-tap-highlight-color:transparent}
.zp0253 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0253 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0253 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0253 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0253 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0253 .mobileMenu{display:none}
.zp0253 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0253 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0253 .eyebrow,.zp0253 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0253 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0253 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0253 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0253 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0253 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0253 .visual,.zp0253 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0253 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0253 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0253 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0253 .heroPhoto{object-fit:cover}
.zp0253 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0253 .floatStack{position:relative;min-height:500px}
.zp0253 .floatStack>*{position:absolute}
.zp0253 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0253 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0253 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0253 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0253 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0253 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0253 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0253 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0253 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0253 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0253 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0253 .serviceGrid p{color:var(--muted)}
.zp0253 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0253 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0253 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0253 details{border-top:1px solid var(--border);padding:20px 0}
.zp0253 details summary{font-weight:800;cursor:pointer}
.zp0253 details p{color:var(--muted);max-width:70ch}
.zp0253 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0253 .features ul{list-style:none;margin:0;padding:0}
.zp0253 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0253 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0253 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0253 .timeline article{padding:20px 0}
.zp0253 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0253 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0253 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0253 .contact .eyebrow{color:var(--bg)}
.zp0253 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0253 .contactMeta{display:grid;gap:10px}
.zp0253 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0253 .heroCopy{animation:enter-252 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-252{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0253 .hero{min-height:auto}
.zp0253 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0253 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0253 .nav nav{display:none}
.zp0253 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0253 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0253 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0253 .mobileMenu nav a{padding:10px 8px}
.zp0253 .hero,.zp0253 .floatingHero{grid-template-columns:1fr}
.zp0253 .section,.zp0253 .sectionTitle,.zp0253 .features,.zp0253 .security,.zp0253 .contact{grid-template-columns:1fr}
.zp0253 .section{display:block}}
@media(max-width:430px){.zp0253{font-size:16px}
.zp0253 .hero,.zp0253 .section,.zp0253 .contact{padding-left:18px;padding-right:18px}
.zp0253 .serviceGrid,.zp0253 .proof{grid-template-columns:1fr}
.zp0253 h1{font-size:clamp(42px,14vw,70px)}}

.zp0253 .heroActions a,.zp0253 .primary,.zp0253 .ctaBtn,.zp0253 .btnPrimary,.zp0253 .schedule>a,.zp0253 .newsletter>a{transition:all .2s ease}
.zp0253 .heroActions a:hover,.zp0253 .primary:hover,.zp0253 .ctaBtn:hover,.zp0253 .btnPrimary:hover{
  opacity:.85
}
.zp0253 nav a,.zp0253 .nav a,.zp0253 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0253 nav a:hover,.zp0253 .nav a:hover,.zp0253 .footer a:hover{
  color:var(--primary)
}
.zp0253 .serviceGrid article,.zp0253 .projectCard,.zp0253 .teamCard,.zp0253 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0253 .serviceGrid article:hover,.zp0253 .projectCard:hover,.zp0253 .teamCard:hover,.zp0253 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0253 *,.zp0253 *::before,.zp0253 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0253 a,.zp0253 button,.zp0253 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">52</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
