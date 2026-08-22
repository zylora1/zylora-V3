import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0238-bakery-ultra-minimalism", "family": "Ultra Minimalism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|comparison-led|metrics>services>process>availability>proof|circular|warm-editorial", "industry": "bakery", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "comparison-led"};

export default function Template0238({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0238" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0238{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:0px;--shadow:none;--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0238 *{box-sizing:border-box}
.zp0238 a{color:inherit;text-decoration:none}
.zp0238 h1,.zp0238 h2,.zp0238 h3,.zp0238 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0238 img{max-width:100%;display:block}
.zp0238 button,.zp0238 a{-webkit-tap-highlight-color:transparent}
.zp0238 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0238 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0238 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0238 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0238 .nav.cluster{align-items:flex-end}
.zp0238 .mobileMenu{display:none}
.zp0238 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0238 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0238 .eyebrow,.zp0238 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0238 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0238 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0238 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0238 .heroActions a,.zp0238 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0238 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0238 .visual,.zp0238 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0238 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0238 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0238 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0238 .heroPhoto{object-fit:cover}
.zp0238 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0238 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0238 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0238 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0238 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0238 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0238 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0238 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0238 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0238 .serviceGrid p{color:var(--muted)}
.zp0238 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0238 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0238 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0238 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0238 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0238 details{border-top:1px solid var(--border);padding:20px 0}
.zp0238 details summary{font-weight:800;cursor:pointer}
.zp0238 details p{color:var(--muted);max-width:70ch}
.zp0238 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0238 .metrics div{background:var(--bg);padding:30px}
.zp0238 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Palatino Linotype, Georgia, serif;color:var(--primary)}
.zp0238 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0238 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0238 .contact .eyebrow{color:var(--bg)}
.zp0238 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0238 .contactMeta{display:grid;gap:10px}
.zp0238 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0238 .heroCopy{animation:enter-237 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-237{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0238 .hero{min-height:auto}
.zp0238 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0238 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0238 .nav nav{display:none}
.zp0238 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0238 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0238 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0238 .mobileMenu nav a{padding:10px 8px}
.zp0238 .hero,.zp0238 .carouselHero{grid-template-columns:1fr}
.zp0238 .section,.zp0238 .sectionTitle,.zp0238 .contact{grid-template-columns:1fr}
.zp0238 .metrics{grid-template-columns:1fr 1fr}
.zp0238 .section{display:block}}
@media(max-width:430px){.zp0238{font-size:16px}
.zp0238 .hero,.zp0238 .section,.zp0238 .contact{padding-left:18px;padding-right:18px}
.zp0238 .serviceGrid,.zp0238 .proof,.zp0238 .metrics{grid-template-columns:1fr}
.zp0238 h1{font-size:clamp(42px,14vw,70px)}}

.zp0238 .heroActions a,.zp0238 .primary,.zp0238 .ctaBtn,.zp0238 .btnPrimary,.zp0238 .schedule>a,.zp0238 .newsletter>a{transition:all .2s ease}
.zp0238 .heroActions a:hover,.zp0238 .primary:hover,.zp0238 .ctaBtn:hover,.zp0238 .btnPrimary:hover{
  opacity:.75
}
.zp0238 nav a,.zp0238 .nav a,.zp0238 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0238 nav a:hover,.zp0238 .nav a:hover,.zp0238 .footer a:hover{
  opacity:.6
}
.zp0238 .serviceGrid article,.zp0238 .projectCard,.zp0238 .teamCard,.zp0238 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0238 .serviceGrid article:hover,.zp0238 .projectCard:hover,.zp0238 .teamCard:hover,.zp0238 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0238 *,.zp0238 *::before,.zp0238 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0238 a,.zp0238 button,.zp0238 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">37</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
