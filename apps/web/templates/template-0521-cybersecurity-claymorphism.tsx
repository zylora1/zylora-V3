import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0521-cybersecurity-claymorphism", "family": "Claymorphism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|case-study-led|services>research>timeline>programmes>collection>proof|hairline|friendly", "industry": "cybersecurity", "hero": "poster", "navigation": "fullscreen-menu", "layout": "case-study-led"};

export default function Template0521({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Cybersecurity Firm");
  const headline = String(content.headline || "Practical security that reduces exposure without slowing the business down.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Security assessments", "Managed detection", "Incident response", "Cloud security", "Compliance"];
  const industryLabel = "Cybersecurity firm";
  const serviceNotes = ["Penetration testing on infrastructure, web applications, and physical security.", "Incident response retainer: guaranteed 2h response, 24h containment commitment.", "Security awareness training delivered in-person and via self-paced modules.", "ISO 27001, Cyber Essentials, and SOC 2 readiness programmes end-to-end.", "Red team exercises that simulate advanced persistent threats realistically."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["CREST certified testers", "Incident response 24/7", "ISO 27001 certified", "CHECK approved"];
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0521" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0521{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0521 *{box-sizing:border-box}
.zp0521 a{color:inherit;text-decoration:none}
.zp0521 h1,.zp0521 h2,.zp0521 h3,.zp0521 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0521 img{max-width:100%;display:block}
.zp0521 button,.zp0521 a{-webkit-tap-highlight-color:transparent}
.zp0521 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0521 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0521 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0521 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0521 .nav.menu details{position:relative}
.zp0521 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0521 .mobileMenu{display:none}
.zp0521 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0521 .eyebrow,.zp0521 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0521 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0521 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0521 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0521 .posterTop,.zp0521 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0521 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0521 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0521 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0521 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0521 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0521 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0521 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0521 .serviceGrid p{color:var(--muted)}
.zp0521 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0521 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0521 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0521 details{border-top:1px solid var(--border);padding:20px 0}
.zp0521 details summary{font-weight:800;cursor:pointer}
.zp0521 details p{color:var(--muted);max-width:70ch}
.zp0521 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0521 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0521 .p1,.zp0521 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0521 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0521 .timeline article{padding:20px 0}
.zp0521 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0521 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0521 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0521 .researchRows{max-width:900px;margin-left:auto}
.zp0521 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0521 .contact .eyebrow{color:var(--bg)}
.zp0521 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0521 .contactMeta{display:grid;gap:10px}
.zp0521 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-520{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0521 .hero{min-height:auto}
.zp0521 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0521 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0521 .nav nav{display:none}
.zp0521 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0521 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0521 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0521 .mobileMenu nav a{padding:10px 8px}
.zp0521 .hero{grid-template-columns:1fr}
.zp0521 .section,.zp0521 .sectionTitle,.zp0521 .contact{grid-template-columns:1fr}
.zp0521 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0521 .section{display:block}}
@media(max-width:430px){.zp0521{font-size:16px}
.zp0521 .hero,.zp0521 .section,.zp0521 .contact{padding-left:18px;padding-right:18px}
.zp0521 .serviceGrid,.zp0521 .proof,.zp0521 .collectionGrid,.zp0521 .programmes>div:last-child{grid-template-columns:1fr}
.zp0521 h1{font-size:clamp(42px,14vw,70px)}
.zp0521 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0521 .heroActions a,.zp0521 .primary,.zp0521 .ctaBtn,.zp0521 .btnPrimary,.zp0521 .schedule>a,.zp0521 .newsletter>a{transition:all .2s ease}
.zp0521 .heroActions a:hover,.zp0521 .primary:hover,.zp0521 .ctaBtn:hover,.zp0521 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0521 nav a,.zp0521 .nav a,.zp0521 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0521 nav a:hover,.zp0521 .nav a:hover,.zp0521 .footer a:hover{
  color:var(--primary)
}
.zp0521 .serviceGrid article,.zp0521 .projectCard,.zp0521 .teamCard,.zp0521 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0521 .serviceGrid article:hover,.zp0521 .projectCard:hover,.zp0521 .teamCard:hover,.zp0521 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0521 *,.zp0521 *::before,.zp0521 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0521 a,.zp0521 button,.zp0521 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
