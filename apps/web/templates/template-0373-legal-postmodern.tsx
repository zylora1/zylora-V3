"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0373-legal-postmodern", "family": "Postmodern", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|collection-led|proof>process>menu>services>credentials|ticket-edge|museum", "industry": "legal", "hero": "image-collage", "navigation": "lower-third", "layout": "collection-led"};

export default function Template0373({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Law Firm");
  const headline = String(content.headline || "Practical legal advice, clear next steps, and responsive communication.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business law", "Dispute resolution", "Property law", "Employment", "Estate planning"];
  const industryLabel = "Law firm";
  const serviceNotes = ["Fixed-fee options for defined scope matters — clear costs before we begin.", "24h response guarantee on all client communications, not just weekdays.", "Plain-English advice: we translate legal complexity into decisions you can make.", "Video and in-person consultation options across all practice areas.", "Regular matter updates so you're never left wondering where things stand."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["SRA regulated", "Lexcel accredited", "Legal 500 listed", "No win no fee options"];
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0373" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0373{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0373 *{box-sizing:border-box}
.zp0373 a{color:inherit;text-decoration:none}
.zp0373 h1,.zp0373 h2,.zp0373 h3,.zp0373 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0373 img{max-width:100%;display:block}
.zp0373 button,.zp0373 a{-webkit-tap-highlight-color:transparent}
.zp0373 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0373 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0373 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0373 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0373 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0373 .mobileMenu{display:none}
.zp0373 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0373 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0373 .eyebrow,.zp0373 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0373 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0373 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0373 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0373 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0373 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0373 .visual,.zp0373 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0373 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0373 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0373 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0373 .heroPhoto{object-fit:cover}
.zp0373 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0373 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0373 .collage>*:first-child{grid-row:1/3}
.zp0373 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0373 .miniVisual.alt{background:var(--secondary)}
.zp0373 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0373 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0373 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0373 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0373 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0373 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0373 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0373 .serviceGrid p{color:var(--muted)}
.zp0373 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0373 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0373 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0373 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0373 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0373 details{border-top:1px solid var(--border);padding:20px 0}
.zp0373 details summary{font-weight:800;cursor:pointer}
.zp0373 details p{color:var(--muted);max-width:70ch}
.zp0373 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0373 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0373 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0373 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0373 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0373 .contact .eyebrow{color:var(--bg)}
.zp0373 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0373 .contactMeta{display:grid;gap:10px}
.zp0373 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0373 .heroCopy{animation:enter-372 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-372{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0373 .hero{min-height:auto}
.zp0373 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0373 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0373 .nav nav{display:none}
.zp0373 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0373 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0373 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0373 .mobileMenu nav a{padding:10px 8px}
.zp0373 .hero,.zp0373 .collageHero{grid-template-columns:1fr}
.zp0373 .section,.zp0373 .sectionTitle,.zp0373 .contact{grid-template-columns:1fr}
.zp0373 .section{display:block}}
@media(max-width:430px){.zp0373{font-size:16px}
.zp0373 .hero,.zp0373 .section,.zp0373 .contact{padding-left:18px;padding-right:18px}
.zp0373 .serviceGrid,.zp0373 .proof{grid-template-columns:1fr}
.zp0373 h1{font-size:clamp(42px,14vw,70px)}}

.zp0373 .heroActions a,.zp0373 .primary,.zp0373 .ctaBtn,.zp0373 .btnPrimary,.zp0373 .schedule>a,.zp0373 .newsletter>a{transition:all .2s ease}
.zp0373 .heroActions a:hover,.zp0373 .primary:hover,.zp0373 .ctaBtn:hover,.zp0373 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0373 nav a,.zp0373 .nav a,.zp0373 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0373 nav a:hover,.zp0373 .nav a:hover,.zp0373 .footer a:hover{
  color:var(--primary)
}
.zp0373 .serviceGrid article,.zp0373 .projectCard,.zp0373 .teamCard,.zp0373 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0373 .serviceGrid article:hover,.zp0373 .projectCard:hover,.zp0373 .teamCard:hover,.zp0373 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0373 *,.zp0373 *::before,.zp0373 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0373 a,.zp0373 button,.zp0373 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">72</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
