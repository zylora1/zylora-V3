import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0564-ecommerce-product-led-saas", "family": "Product-led SaaS", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|property-led|proof>services>availability>features>manifesto>metrics>awards|cut-corners|literary", "industry": "ecommerce", "hero": "product-led", "navigation": "transparent-overlay", "layout": "property-led"};

export default function Template0564({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Ecommerce Brand");
  const headline = String(content.headline || "Useful products presented with clarity, confidence, and a friction-light buying path.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New arrivals", "Best sellers", "Collections", "Gift cards", "Customer care"];
  const industryLabel = "Ecommerce brand";
  const serviceNotes = ["Shopify, WooCommerce, and headless builds — we recommend based on your scale and roadmap.", "Conversion rate optimisation built into every build: checkout, PDP, and search flows.", "Inventory and ERP integrations with real-time sync across warehouse and storefront.", "International expansion support: multi-currency, tax compliance, and localised UX.", "Post-launch CRO: A/B testing programme for 90 days after go-live included."];
  const proofPoints = ["Average: 34% CRO lift", "Shopify Plus certified", "PCI DSS compliant", "99.9% uptime SLA"];
  const testimonial = "Conversion rate went from 1.2% to 2.8% in the first quarter. They found the leaks in our checkout nobody else had flagged.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0564" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0564{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0564 *{box-sizing:border-box}
.zp0564 a{color:inherit;text-decoration:none}
.zp0564 h1,.zp0564 h2,.zp0564 h3,.zp0564 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0564 img{max-width:100%;display:block}
.zp0564 button,.zp0564 a{-webkit-tap-highlight-color:transparent}
.zp0564 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0564 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0564 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0564 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0564 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0564 .mobileMenu{display:none}
.zp0564 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0564 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0564 .eyebrow,.zp0564 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0564 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0564 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0564 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0564 .heroActions a,.zp0564 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0564 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0564 .visual,.zp0564 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0564 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0564 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0564 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0564 .heroPhoto{object-fit:cover}
.zp0564 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0564 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0564 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0564 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0564 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0564 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0564 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0564 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0564 .serviceGrid p{color:var(--muted)}
.zp0564 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0564 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0564 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0564 details{border-top:1px solid var(--border);padding:20px 0}
.zp0564 details summary{font-weight:800;cursor:pointer}
.zp0564 details p{color:var(--muted);max-width:70ch}
.zp0564 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0564 .features ul{list-style:none;margin:0;padding:0}
.zp0564 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0564 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0564 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0564 .metrics div{background:var(--bg);padding:30px}
.zp0564 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Garamond, Georgia, serif;color:var(--primary)}
.zp0564 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0564 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Garamond, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0564 .awards>div{max-width:800px;margin-left:auto}
.zp0564 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0564 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0564 .contact .eyebrow{color:var(--bg)}
.zp0564 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0564 .contactMeta{display:grid;gap:10px}
.zp0564 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0564 .heroCopy{animation:enter-563 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-563{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0564 .hero{min-height:auto}
.zp0564 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0564 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0564 .nav nav{display:none}
.zp0564 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0564 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0564 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0564 .mobileMenu nav a{padding:10px 8px}
.zp0564 .hero,.zp0564 .productLedHero{grid-template-columns:1fr}
.zp0564 .section,.zp0564 .sectionTitle,.zp0564 .features,.zp0564 .contact{grid-template-columns:1fr}
.zp0564 .metrics{grid-template-columns:1fr 1fr}
.zp0564 .section{display:block}}
@media(max-width:430px){.zp0564{font-size:16px}
.zp0564 .hero,.zp0564 .section,.zp0564 .contact{padding-left:18px;padding-right:18px}
.zp0564 .serviceGrid,.zp0564 .proof,.zp0564 .metrics{grid-template-columns:1fr}
.zp0564 h1{font-size:clamp(42px,14vw,70px)}}

.zp0564 .heroActions a,.zp0564 .primary,.zp0564 .ctaBtn,.zp0564 .btnPrimary,.zp0564 .schedule>a,.zp0564 .newsletter>a{transition:all .2s ease}
.zp0564 .heroActions a:hover,.zp0564 .primary:hover,.zp0564 .ctaBtn:hover,.zp0564 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0564 nav a,.zp0564 .nav a,.zp0564 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0564 nav a:hover,.zp0564 .nav a:hover,.zp0564 .footer a:hover{
  color:var(--primary)
}
.zp0564 .serviceGrid article,.zp0564 .projectCard,.zp0564 .teamCard,.zp0564 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0564 .serviceGrid article:hover,.zp0564 .projectCard:hover,.zp0564 .teamCard:hover,.zp0564 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.15)
}
@media(prefers-reduced-motion:reduce){.zp0564 *,.zp0564 *::before,.zp0564 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0564 a,.zp0564 button,.zp0564 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">63</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Product-led SaaS / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
