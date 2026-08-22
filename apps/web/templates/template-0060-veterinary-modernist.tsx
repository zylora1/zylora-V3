import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0060-veterinary-modernist", "family": "Modernist", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|property-led|manifesto>metrics>packages>features>credentials>services>proof|notched|literary", "industry": "veterinary", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "property-led"};

export default function Template0060({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Veterinary Clinic");
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
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0060" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0060{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0060 *{box-sizing:border-box}
.zp0060 a{color:inherit;text-decoration:none}
.zp0060 h1,.zp0060 h2,.zp0060 h3,.zp0060 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0060 img{max-width:100%;display:block}
.zp0060 button,.zp0060 a{-webkit-tap-highlight-color:transparent}
.zp0060 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0060 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0060 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0060 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0060 .mobileMenu{display:none}
.zp0060 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0060 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0060 .eyebrow,.zp0060 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0060 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0060 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0060 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0060 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0060 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0060 .mapHero{grid-template-columns:1fr 1fr}
.zp0060 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0060 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0060 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0060 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0060 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0060 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0060 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0060 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0060 .serviceGrid p{color:var(--muted)}
.zp0060 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0060 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0060 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0060 details{border-top:1px solid var(--border);padding:20px 0}
.zp0060 details summary{font-weight:800;cursor:pointer}
.zp0060 details p{color:var(--muted);max-width:70ch}
.zp0060 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0060 .features ul{list-style:none;margin:0;padding:0}
.zp0060 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0060 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0060 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0060 .metrics div{background:var(--bg);padding:30px}
.zp0060 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Garamond, Georgia, serif;color:var(--primary)}
.zp0060 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0060 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0060 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0060 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Garamond, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0060 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0060 .packages>.sectionTitle{grid-column:1/-1}
.zp0060 .packages article{padding:24px;border:1px solid var(--border)}
.zp0060 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0060 .contact .eyebrow{color:var(--bg)}
.zp0060 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0060 .contactMeta{display:grid;gap:10px}
.zp0060 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0060 .heroCopy{animation:enter-59 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-59{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0060 .hero{min-height:auto}
.zp0060 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0060 .proof{grid-template-columns:1fr 1fr}
.zp0060 .packages{grid-template-columns:1fr 1fr}
.zp0060 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0060 .nav nav{display:none}
.zp0060 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0060 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0060 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0060 .mobileMenu nav a{padding:10px 8px}
.zp0060 .hero,.zp0060 .mapHero{grid-template-columns:1fr}
.zp0060 .section,.zp0060 .sectionTitle,.zp0060 .features,.zp0060 .contact{grid-template-columns:1fr}
.zp0060 .metrics{grid-template-columns:1fr 1fr}
.zp0060 .section{display:block}}
@media(max-width:430px){.zp0060{font-size:16px}
.zp0060 .hero,.zp0060 .section,.zp0060 .contact{padding-left:18px;padding-right:18px}
.zp0060 .serviceGrid,.zp0060 .proof,.zp0060 .metrics,.zp0060 .packages{grid-template-columns:1fr}
.zp0060 h1{font-size:clamp(42px,14vw,70px)}}

.zp0060 .heroActions a,.zp0060 .primary,.zp0060 .ctaBtn,.zp0060 .btnPrimary,.zp0060 .schedule>a,.zp0060 .newsletter>a{transition:all .2s ease}
.zp0060 .heroActions a:hover,.zp0060 .primary:hover,.zp0060 .ctaBtn:hover,.zp0060 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0060 nav a,.zp0060 .nav a,.zp0060 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0060 nav a:hover,.zp0060 .nav a:hover,.zp0060 .footer a:hover{
  color:var(--primary)
}
.zp0060 .serviceGrid article,.zp0060 .projectCard,.zp0060 .teamCard,.zp0060 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0060 .serviceGrid article:hover,.zp0060 .projectCard:hover,.zp0060 .teamCard:hover,.zp0060 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0060 *,.zp0060 *::before,.zp0060 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0060 a,.zp0060 button,.zp0060 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
