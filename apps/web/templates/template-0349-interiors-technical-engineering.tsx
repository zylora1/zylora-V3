"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0349-interiors-technical-engineering", "family": "Technical Engineering", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|magazine-sections|proof>services>materials>destinations>community|hard-outline|museum", "industry": "interiors", "hero": "floating-panels", "navigation": "compact-floating", "layout": "magazine-sections"};

export default function Template0349({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const storyBody = "Rook Interior Design Studio is presented as a real working interior design studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0349" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0349{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0349 *{box-sizing:border-box}
.zp0349 a{color:inherit;text-decoration:none}
.zp0349 h1,.zp0349 h2,.zp0349 h3,.zp0349 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0349 img{max-width:100%;display:block}
.zp0349 button,.zp0349 a{-webkit-tap-highlight-color:transparent}
.zp0349 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0349 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0349 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0349 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0349 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0349 .mobileMenu{display:none}
.zp0349 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0349 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0349 .eyebrow,.zp0349 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0349 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0349 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0349 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0349 .heroActions a,.zp0349 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0349 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0349 .visual,.zp0349 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0349 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0349 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0349 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0349 .heroPhoto{object-fit:cover}
.zp0349 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0349 .floatStack{position:relative;min-height:500px}
.zp0349 .floatStack>*{position:absolute}
.zp0349 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0349 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0349 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0349 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0349 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0349 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0349 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0349 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0349 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0349 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0349 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0349 .serviceGrid p{color:var(--muted)}
.zp0349 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0349 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0349 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0349 details{border-top:1px solid var(--border);padding:20px 0}
.zp0349 details summary{font-weight:800;cursor:pointer}
.zp0349 details p{color:var(--muted);max-width:70ch}
.zp0349 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0349 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0349 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0349 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0349 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0349 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0349 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0349 .contact .eyebrow{color:var(--bg)}
.zp0349 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0349 .contactMeta{display:grid;gap:10px}
.zp0349 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0349 .section{column-rule:1px solid var(--border)}
.zp0349 .sectionTitle h2{max-width:18ch}
.zp0349 .heroCopy{animation:enter-348 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-348{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0349 .hero{min-height:auto}
.zp0349 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0349 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0349 .nav nav{display:none}
.zp0349 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0349 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0349 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0349 .mobileMenu nav a{padding:10px 8px}
.zp0349 .hero,.zp0349 .floatingHero{grid-template-columns:1fr}
.zp0349 .section,.zp0349 .sectionTitle,.zp0349 .contact{grid-template-columns:1fr}
.zp0349 .section{display:block}}
@media(max-width:430px){.zp0349{font-size:16px}
.zp0349 .hero,.zp0349 .section,.zp0349 .contact{padding-left:18px;padding-right:18px}
.zp0349 .serviceGrid,.zp0349 .proof,.zp0349 .destinations>div:last-child{grid-template-columns:1fr}
.zp0349 h1{font-size:clamp(42px,14vw,70px)}}

.zp0349 .heroActions a,.zp0349 .primary,.zp0349 .ctaBtn,.zp0349 .btnPrimary,.zp0349 .schedule>a,.zp0349 .newsletter>a{transition:all .2s ease}
.zp0349 .heroActions a:hover,.zp0349 .primary:hover,.zp0349 .ctaBtn:hover,.zp0349 .btnPrimary:hover{
  border-color:var(--primary)
}
.zp0349 nav a,.zp0349 .nav a,.zp0349 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0349 nav a:hover,.zp0349 .nav a:hover,.zp0349 .footer a:hover{
  color:var(--primary)
}
.zp0349 .serviceGrid article,.zp0349 .projectCard,.zp0349 .teamCard,.zp0349 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0349 .serviceGrid article:hover,.zp0349 .projectCard:hover,.zp0349 .teamCard:hover,.zp0349 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0349 *,.zp0349 *::before,.zp0349 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0349 a,.zp0349 button,.zp0349 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">48</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Technical Engineering / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
