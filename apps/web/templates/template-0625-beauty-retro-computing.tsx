"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0625-beauty-retro-computing", "family": "Retro Computing", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|collection-led|research>process>features>services>proof|square-editorial|luxury-contrast", "industry": "beauty", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "collection-led"};

export default function Template0625({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Beauty Studio");
  const headline = String(content.headline || "Results-focused treatments in a calm studio with transparent recommendations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Facials", "Brows", "Skin consultations", "Packages", "Gift cards"];
  const serviceNotes = ["Ingredient-transparent formulations: every product listing includes the full INCI.", "Patch-test kits available before committing to any new treatment or product line.", "Skin consultation appointment included with all bespoke skincare programmes.", "Cruelty-free certified and vegan-formulated across the entire product range.", "Results photography at 4 and 8 weeks so you can see the change objectively."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0625" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0625{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0625 *{box-sizing:border-box}
.zp0625 a{color:inherit;text-decoration:none}
.zp0625 h1,.zp0625 h2,.zp0625 h3,.zp0625 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0625 img{max-width:100%;display:block}
.zp0625 button,.zp0625 a{-webkit-tap-highlight-color:transparent}
.zp0625 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0625 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0625 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0625 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0625 .mobileMenu{display:none}
.zp0625 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0625 .eyebrow,.zp0625 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0625 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0625 .visual,.zp0625 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0625 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0625 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0625 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0625 .heroPhoto{object-fit:cover}
.zp0625 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0625 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0625 .coverCaption{align-self:end}
.zp0625 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0625 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0625 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0625 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0625 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0625 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0625 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0625 .serviceGrid p{color:var(--muted)}
.zp0625 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0625 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0625 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0625 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0625 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0625 details{border-top:1px solid var(--border);padding:20px 0}
.zp0625 details summary{font-weight:800;cursor:pointer}
.zp0625 details p{color:var(--muted);max-width:70ch}
.zp0625 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0625 .features ul{list-style:none;margin:0;padding:0}
.zp0625 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0625 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0625 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0625 .researchRows{max-width:900px;margin-left:auto}
.zp0625 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0625 .contact .eyebrow{color:var(--bg)}
.zp0625 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0625 .contactMeta{display:grid;gap:10px}
.zp0625 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0625{image-rendering:pixelated}
.zp0625 *{border-radius:0!important}
.zp0625 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
@keyframes enter-624{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0625 .hero{min-height:auto}
.zp0625 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0625 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0625 .nav nav{display:none}
.zp0625 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0625 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0625 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0625 .mobileMenu nav a{padding:10px 8px}
.zp0625 .hero,.zp0625 .coverHero{grid-template-columns:1fr}
.zp0625 .section,.zp0625 .sectionTitle,.zp0625 .features,.zp0625 .contact{grid-template-columns:1fr}
.zp0625 .section{display:block}}
@media(max-width:430px){.zp0625{font-size:16px}
.zp0625 .hero,.zp0625 .section,.zp0625 .contact{padding-left:18px;padding-right:18px}
.zp0625 .serviceGrid,.zp0625 .proof{grid-template-columns:1fr}
.zp0625 h1{font-size:clamp(42px,14vw,70px)}}

.zp0625 .heroActions a,.zp0625 .primary,.zp0625 .ctaBtn,.zp0625 .btnPrimary,.zp0625 .schedule>a,.zp0625 .newsletter>a{transition:all .2s ease}
.zp0625 .heroActions a:hover,.zp0625 .primary:hover,.zp0625 .ctaBtn:hover,.zp0625 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0625 nav a,.zp0625 .nav a,.zp0625 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0625 nav a:hover,.zp0625 .nav a:hover,.zp0625 .footer a:hover{
  color:var(--primary)
}
.zp0625 .serviceGrid article,.zp0625 .projectCard,.zp0625 .teamCard,.zp0625 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0625 .serviceGrid article:hover,.zp0625 .projectCard:hover,.zp0625 .teamCard:hover,.zp0625 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0625 *,.zp0625 *::before,.zp0625 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0625 a,.zp0625 button,.zp0625 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0625</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">24</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
