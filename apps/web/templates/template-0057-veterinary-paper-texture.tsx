import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0057-veterinary-paper-texture", "family": "Paper Texture", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|architectural-grid|menu>services>location>metrics>process>timeline>proof|hairline|slab", "industry": "veterinary", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "architectural-grid"};

export default function Template0057({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Veterinary Clinic");
  const headline = String(content.headline || "Modern veterinary care that keeps owners informed at every step.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Wellness exams", "Vaccinations", "Dental care", "Diagnostics", "Urgent care"];
  const industryLabel = "Veterinary clinic";
  const serviceNotes = ["Comprehensive wellness exams covering nutrition, behaviour, and preventive care.", "Gentle handling protocols that reduce stress for anxious patients.", "In-house laboratory for fast results — no waiting days for basic bloods.", "Dental health programmes that protect your pet's overall wellbeing.", "End-of-life care provided with dignity and full family support."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0057" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0057{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0057 *{box-sizing:border-box}
.zp0057 a{color:inherit;text-decoration:none}
.zp0057 h1,.zp0057 h2,.zp0057 h3,.zp0057 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0057 img{max-width:100%;display:block}
.zp0057 button,.zp0057 a{-webkit-tap-highlight-color:transparent}
.zp0057 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0057 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0057 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0057 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0057 .nav.menu details{position:relative}
.zp0057 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0057 .mobileMenu{display:none}
.zp0057 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0057 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0057 .eyebrow,.zp0057 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0057 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0057 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0057 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0057 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0057 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0057 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0057 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0057 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0057 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0057 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0057 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0057 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0057 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0057 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0057 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0057 .serviceGrid p{color:var(--muted)}
.zp0057 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0057 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0057 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0057 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0057 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0057 details{border-top:1px solid var(--border);padding:20px 0}
.zp0057 details summary{font-weight:800;cursor:pointer}
.zp0057 details p{color:var(--muted);max-width:70ch}
.zp0057 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0057 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0057 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0057 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0057 .metrics div{background:var(--bg);padding:30px}
.zp0057 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Rockwell, Courier New, serif;color:var(--primary)}
.zp0057 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0057 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0057 .timeline article{padding:20px 0}
.zp0057 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0057 .contact .eyebrow{color:var(--bg)}
.zp0057 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0057 .contactMeta{display:grid;gap:10px}
.zp0057 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0057{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0057 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0057 .heroCopy{animation:enter-56 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-56{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0057 .hero{min-height:auto}
.zp0057 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0057 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0057 .nav nav{display:none}
.zp0057 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0057 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0057 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0057 .mobileMenu nav a{padding:10px 8px}
.zp0057 .hero,.zp0057 .archiveHero{grid-template-columns:1fr}
.zp0057 .section,.zp0057 .sectionTitle,.zp0057 .location,.zp0057 .contact{grid-template-columns:1fr}
.zp0057 .metrics{grid-template-columns:1fr 1fr}
.zp0057 .section{display:block}}
@media(max-width:430px){.zp0057{font-size:16px}
.zp0057 .hero,.zp0057 .section,.zp0057 .contact{padding-left:18px;padding-right:18px}
.zp0057 .serviceGrid,.zp0057 .proof,.zp0057 .metrics{grid-template-columns:1fr}
.zp0057 h1{font-size:clamp(42px,14vw,70px)}}

.zp0057 .heroActions a,.zp0057 .primary,.zp0057 .ctaBtn,.zp0057 .btnPrimary,.zp0057 .schedule>a,.zp0057 .newsletter>a{transition:all .2s ease}
.zp0057 .heroActions a:hover,.zp0057 .primary:hover,.zp0057 .ctaBtn:hover,.zp0057 .btnPrimary:hover{
  opacity:.8
}
.zp0057 nav a,.zp0057 .nav a,.zp0057 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0057 nav a:hover,.zp0057 .nav a:hover,.zp0057 .footer a:hover{
  color:var(--primary)
}
.zp0057 .serviceGrid article,.zp0057 .projectCard,.zp0057 .teamCard,.zp0057 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0057 .serviceGrid article:hover,.zp0057 .projectCard:hover,.zp0057 .teamCard:hover,.zp0057 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0057 *,.zp0057 *::before,.zp0057 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0057 a,.zp0057 button,.zp0057 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
