"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0925-logistics-kinetic-typography", "family": "Kinetic Typography", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|magazine-sections|proof>services>packages>collection>menu|hard-outline|museum", "industry": "logistics", "hero": "floating-panels", "navigation": "compact-floating", "layout": "magazine-sections"};

export default function Template0925({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Logistics Company");
  const headline = String(content.headline || "Operational visibility and dependable movement from pickup through final delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Freight", "Warehousing", "Last-mile", "Customs support", "Tracking"];
  const industryLabel = "Logistics company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Logistics company / Project A", "Logistics company / Project B", "Logistics company / Project C", "Logistics company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Operational visibility and dependable movement from pickup through final delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0925" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0925{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0925 *{box-sizing:border-box}
.zp0925 a{color:inherit;text-decoration:none}
.zp0925 h1,.zp0925 h2,.zp0925 h3,.zp0925 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0925 img{max-width:100%;display:block}
.zp0925 button,.zp0925 a{-webkit-tap-highlight-color:transparent}
.zp0925 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0925 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0925 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0925 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0925 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0925 .mobileMenu{display:none}
.zp0925 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0925 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0925 .eyebrow,.zp0925 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0925 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0925 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0925 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0925 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0925 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0925 .visual,.zp0925 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0925 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0925 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0925 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0925 .heroPhoto{object-fit:cover}
.zp0925 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0925 .floatStack{position:relative;min-height:500px}
.zp0925 .floatStack>*{position:absolute}
.zp0925 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0925 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0925 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0925 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0925 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0925 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0925 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0925 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0925 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0925 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0925 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0925 .serviceGrid p{color:var(--muted)}
.zp0925 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0925 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0925 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0925 details{border-top:1px solid var(--border);padding:20px 0}
.zp0925 details summary{font-weight:800;cursor:pointer}
.zp0925 details p{color:var(--muted);max-width:70ch}
.zp0925 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0925 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0925 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0925 .p1,.zp0925 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0925 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0925 .packages>.sectionTitle{grid-column:1/-1}
.zp0925 .packages article{padding:24px;border:1px solid var(--border)}
.zp0925 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0925 .contact .eyebrow{color:var(--bg)}
.zp0925 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0925 .contactMeta{display:grid;gap:10px}
.zp0925 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0925 .section{column-rule:1px solid var(--border)}
.zp0925 .sectionTitle h2{max-width:18ch}
.zp0925 .heroCopy{animation:enter-924 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-924{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0925 .hero{min-height:auto}
.zp0925 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0925 .proof{grid-template-columns:1fr 1fr}
.zp0925 .packages{grid-template-columns:1fr 1fr}
.zp0925 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0925 .nav nav{display:none}
.zp0925 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0925 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0925 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0925 .mobileMenu nav a{padding:10px 8px}
.zp0925 .hero,.zp0925 .floatingHero{grid-template-columns:1fr}
.zp0925 .section,.zp0925 .sectionTitle,.zp0925 .contact{grid-template-columns:1fr}
.zp0925 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0925 .section{display:block}}
@media(max-width:430px){.zp0925{font-size:16px}
.zp0925 .hero,.zp0925 .section,.zp0925 .contact{padding-left:18px;padding-right:18px}
.zp0925 .serviceGrid,.zp0925 .proof,.zp0925 .collectionGrid,.zp0925 .packages{grid-template-columns:1fr}
.zp0925 h1{font-size:clamp(42px,14vw,70px)}}

.zp0925 .heroActions a,.zp0925 .primary,.zp0925 .ctaBtn,.zp0925 .btnPrimary,.zp0925 .schedule>a,.zp0925 .newsletter>a{transition:all .2s ease}
.zp0925 .heroActions a:hover,.zp0925 .primary:hover,.zp0925 .ctaBtn:hover,.zp0925 .btnPrimary:hover{
  transform:scale(1.04);letter-spacing:.06em
}
.zp0925 nav a,.zp0925 .nav a,.zp0925 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0925 nav a:hover,.zp0925 .nav a:hover,.zp0925 .footer a:hover{
  letter-spacing:.08em;color:var(--primary)
}
.zp0925 .serviceGrid article,.zp0925 .projectCard,.zp0925 .teamCard,.zp0925 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0925 .serviceGrid article:hover,.zp0925 .projectCard:hover,.zp0925 .teamCard:hover,.zp0925 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0925 *,.zp0925 *::before,.zp0925 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0925 a,.zp0925 button,.zp0925 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">24</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Kinetic Typography / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
