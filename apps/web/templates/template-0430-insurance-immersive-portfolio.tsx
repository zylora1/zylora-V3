import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0430-insurance-immersive-portfolio", "family": "Immersive Portfolio", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|local-service-map|availability>services>proof>features>pricing|circular|warm-editorial", "industry": "insurance", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "local-service-map"};

export default function Template0430({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0430" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0430{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0430 *{box-sizing:border-box}
.zp0430 a{color:inherit;text-decoration:none}
.zp0430 h1,.zp0430 h2,.zp0430 h3,.zp0430 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0430 img{max-width:100%;display:block}
.zp0430 button,.zp0430 a{-webkit-tap-highlight-color:transparent}
.zp0430 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0430 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0430 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0430 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0430 .nav.cluster{align-items:flex-end}
.zp0430 .mobileMenu{display:none}
.zp0430 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0430 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0430 .eyebrow,.zp0430 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0430 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0430 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0430 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0430 .heroActions a,.zp0430 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0430 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0430 .visual,.zp0430 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0430 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0430 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0430 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0430 .heroPhoto{object-fit:cover}
.zp0430 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0430 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0430 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0430 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0430 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0430 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0430 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0430 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0430 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0430 .serviceGrid p{color:var(--muted)}
.zp0430 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0430 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0430 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0430 details{border-top:1px solid var(--border);padding:20px 0}
.zp0430 details summary{font-weight:800;cursor:pointer}
.zp0430 details p{color:var(--muted);max-width:70ch}
.zp0430 .priceRows{border-top:1px solid var(--border)}
.zp0430 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0430 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0430 .features ul{list-style:none;margin:0;padding:0}
.zp0430 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0430 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0430 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0430 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0430 .contact .eyebrow{color:var(--bg)}
.zp0430 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0430 .contactMeta{display:grid;gap:10px}
.zp0430 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0430 .heroCopy{animation:enter-429 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-429{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0430 .hero{min-height:auto}
.zp0430 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0430 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0430 .nav nav{display:none}
.zp0430 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0430 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0430 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0430 .mobileMenu nav a{padding:10px 8px}
.zp0430 .hero,.zp0430 .carouselHero{grid-template-columns:1fr}
.zp0430 .section,.zp0430 .sectionTitle,.zp0430 .features,.zp0430 .contact{grid-template-columns:1fr}
.zp0430 .section{display:block}}
@media(max-width:430px){.zp0430{font-size:16px}
.zp0430 .hero,.zp0430 .section,.zp0430 .contact{padding-left:18px;padding-right:18px}
.zp0430 .serviceGrid,.zp0430 .proof{grid-template-columns:1fr}
.zp0430 h1{font-size:clamp(42px,14vw,70px)}
.zp0430 .priceRows article{grid-template-columns:1fr}}

.zp0430 .heroActions a,.zp0430 .primary,.zp0430 .ctaBtn,.zp0430 .btnPrimary,.zp0430 .schedule>a,.zp0430 .newsletter>a{transition:all .2s ease}
.zp0430 .heroActions a:hover,.zp0430 .primary:hover,.zp0430 .ctaBtn:hover,.zp0430 .btnPrimary:hover{
  opacity:.8
}
.zp0430 nav a,.zp0430 .nav a,.zp0430 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0430 nav a:hover,.zp0430 .nav a:hover,.zp0430 .footer a:hover{
  opacity:.65
}
.zp0430 .serviceGrid article,.zp0430 .projectCard,.zp0430 .teamCard,.zp0430 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0430 .serviceGrid article:hover,.zp0430 .projectCard:hover,.zp0430 .teamCard:hover,.zp0430 .bentoCard:hover{
  transform:scale(1.03)
}
@media(prefers-reduced-motion:reduce){.zp0430 *,.zp0430 *::before,.zp0430 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0430 a,.zp0430 button,.zp0430 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">29</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Immersive Portfolio / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
