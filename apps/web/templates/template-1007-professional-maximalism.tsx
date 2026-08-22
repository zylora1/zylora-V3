import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1007-professional-maximalism", "family": "Maximalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|asymmetric-5-7|security>research>proof>services>process>press|soft-12|clean-humanist", "industry": "professional", "hero": "location-led", "navigation": "vertical-rail", "layout": "asymmetric-5-7"};

export default function Template1007({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Professional Services");
  const headline = String(content.headline || "Senior expertise delivered with clear scope, useful communication, and practical outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Advisory", "Assessment", "Implementation", "Retainers", "Workshops"];
  const industryLabel = "Professional services";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp1007" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1007{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1007 *{box-sizing:border-box}
.zp1007 a{color:inherit;text-decoration:none}
.zp1007 h1,.zp1007 h2,.zp1007 h3,.zp1007 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp1007 img{max-width:100%;display:block}
.zp1007 button,.zp1007 a{-webkit-tap-highlight-color:transparent}
.zp1007 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1007 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp1007 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp1007 .mobileMenu{display:none}
.zp1007:has(.navRail)>.hero,.zp1007:has(.navRail)>.section,.zp1007:has(.navRail)>.contact,.zp1007:has(.navRail)>.footer{margin-left:190px}
.zp1007 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1007 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp1007 .eyebrow,.zp1007 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1007 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1007 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp1007 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp1007 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp1007 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp1007 .locationHero{grid-template-columns:1fr 1fr}
.zp1007 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp1007 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp1007 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1007 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1007 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1007 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp1007 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1007 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp1007 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1007 .serviceGrid p{color:var(--muted)}
.zp1007 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp1007 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp1007 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1007 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1007 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1007 details{border-top:1px solid var(--border);padding:20px 0}
.zp1007 details summary{font-weight:800;cursor:pointer}
.zp1007 details p{color:var(--muted);max-width:70ch}
.zp1007 .awards>div{max-width:800px;margin-left:auto}
.zp1007 .awards p,.zp1007 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp1007 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp1007 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp1007 .researchRows{max-width:900px;margin-left:auto}
.zp1007 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1007 .contact .eyebrow{color:var(--bg)}
.zp1007 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1007 .contactMeta{display:grid;gap:10px}
.zp1007 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1007 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp1007 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-14deg)}
.zp1007 .heroCopy{animation:enter-1006 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-1006{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp1007 .hero{min-height:auto}
.zp1007 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1007 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1007 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1007 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1007 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1007 .mobileMenu nav a{padding:10px 8px}
.zp1007 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp1007:has(.navRail)>.hero,.zp1007:has(.navRail)>.section,.zp1007:has(.navRail)>.contact,.zp1007:has(.navRail)>.footer{margin-left:0}
.zp1007 .hero,.zp1007 .locationHero{grid-template-columns:1fr}
.zp1007 .section,.zp1007 .sectionTitle,.zp1007 .security,.zp1007 .contact{grid-template-columns:1fr}
.zp1007 .section{display:block}}
@media(max-width:430px){.zp1007{font-size:16px}
.zp1007 .hero,.zp1007 .section,.zp1007 .contact{padding-left:18px;padding-right:18px}
.zp1007 .serviceGrid,.zp1007 .proof{grid-template-columns:1fr}
.zp1007 h1{font-size:clamp(42px,14vw,70px)}}

.zp1007 .heroActions a,.zp1007 .primary,.zp1007 .ctaBtn,.zp1007 .btnPrimary,.zp1007 .schedule>a,.zp1007 .newsletter>a{transition:all .2s ease}
.zp1007 .heroActions a:hover,.zp1007 .primary:hover,.zp1007 .ctaBtn:hover,.zp1007 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp1007 nav a,.zp1007 .nav a,.zp1007 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1007 nav a:hover,.zp1007 .nav a:hover,.zp1007 .footer a:hover{
  color:var(--primary)
}
.zp1007 .serviceGrid article,.zp1007 .projectCard,.zp1007 .teamCard,.zp1007 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1007 .serviceGrid article:hover,.zp1007 .projectCard:hover,.zp1007 .teamCard:hover,.zp1007 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp1007 *,.zp1007 *::before,.zp1007 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1007 a,.zp1007 button,.zp1007 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
