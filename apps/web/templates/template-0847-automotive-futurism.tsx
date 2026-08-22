"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0847-automotive-futurism", "family": "Futurism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|two-speed-scroll|gallery>services>security>proof>research|soft-12|technical-mono", "industry": "automotive", "hero": "location-led", "navigation": "vertical-rail", "layout": "two-speed-scroll"};

export default function Template0847({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const industryLabel = "Automotive dealer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0847" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0847{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0847 *{box-sizing:border-box}
.zp0847 a{color:inherit;text-decoration:none}
.zp0847 h1,.zp0847 h2,.zp0847 h3,.zp0847 blockquote{font-family:Courier New, monospace;text-wrap:balance}
.zp0847 img{max-width:100%;display:block}
.zp0847 button,.zp0847 a{-webkit-tap-highlight-color:transparent}
.zp0847 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0847 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0847 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0847 .mobileMenu{display:none}
.zp0847:has(.navRail)>.hero,.zp0847:has(.navRail)>.section,.zp0847:has(.navRail)>.contact,.zp0847:has(.navRail)>.footer{margin-left:190px}
.zp0847 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0847 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0847 .eyebrow,.zp0847 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0847 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0847 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0847 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0847 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0847 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0847 .locationHero{grid-template-columns:1fr 1fr}
.zp0847 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0847 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0847 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0847 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0847 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0847 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0847 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0847 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0847 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0847 .serviceGrid p{color:var(--muted)}
.zp0847 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0847 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0847 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0847 details{border-top:1px solid var(--border);padding:20px 0}
.zp0847 details summary{font-weight:800;cursor:pointer}
.zp0847 details p{color:var(--muted);max-width:70ch}
.zp0847 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0847 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0847 .galleryGrid>*:first-child{grid-row:1/3}
.zp0847 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0847 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0847 .g2,.zp0847 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0847 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0847 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0847 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0847 .researchRows{max-width:900px;margin-left:auto}
.zp0847 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0847 .contact .eyebrow{color:var(--bg)}
.zp0847 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0847 .contactMeta{display:grid;gap:10px}
.zp0847 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0847 .heroCopy{animation:enter-846 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-846{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0847 .hero{min-height:auto}
.zp0847 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0847 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0847 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0847 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0847 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0847 .mobileMenu nav a{padding:10px 8px}
.zp0847 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0847:has(.navRail)>.hero,.zp0847:has(.navRail)>.section,.zp0847:has(.navRail)>.contact,.zp0847:has(.navRail)>.footer{margin-left:0}
.zp0847 .hero,.zp0847 .locationHero{grid-template-columns:1fr}
.zp0847 .section,.zp0847 .sectionTitle,.zp0847 .security,.zp0847 .contact{grid-template-columns:1fr}
.zp0847 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0847 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0847 .section{display:block}}
@media(max-width:430px){.zp0847{font-size:16px}
.zp0847 .hero,.zp0847 .section,.zp0847 .contact{padding-left:18px;padding-right:18px}
.zp0847 .serviceGrid,.zp0847 .proof{grid-template-columns:1fr}
.zp0847 h1{font-size:clamp(42px,14vw,70px)}
.zp0847 .galleryGrid{grid-template-columns:1fr}
.zp0847 .galleryGrid>*:first-child{grid-column:auto}}

.zp0847 .heroActions a,.zp0847 .primary,.zp0847 .ctaBtn,.zp0847 .btnPrimary,.zp0847 .schedule>a,.zp0847 .newsletter>a{transition:all .2s ease}
.zp0847 .heroActions a:hover,.zp0847 .primary:hover,.zp0847 .ctaBtn:hover,.zp0847 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0847 nav a,.zp0847 .nav a,.zp0847 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0847 nav a:hover,.zp0847 .nav a:hover,.zp0847 .footer a:hover{
  color:var(--primary)
}
.zp0847 .serviceGrid article,.zp0847 .projectCard,.zp0847 .teamCard,.zp0847 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0847 .serviceGrid article:hover,.zp0847 .projectCard:hover,.zp0847 .teamCard:hover,.zp0847 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0847 *,.zp0847 *::before,.zp0847 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0847 a,.zp0847 button,.zp0847 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
