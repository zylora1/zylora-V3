import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0573-ecommerce-dashboard-inspired-marketing", "family": "Dashboard-inspired Marketing", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|split-scroll|packages>manifesto>press>availability>proof>services>features|hard-outline|humanist-classic", "industry": "ecommerce", "hero": "floating-panels", "navigation": "compact-floating", "layout": "split-scroll"};

export default function Template0573({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Ecommerce Brand");
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
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0573" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0573{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0573 *{box-sizing:border-box}
.zp0573 a{color:inherit;text-decoration:none}
.zp0573 h1,.zp0573 h2,.zp0573 h3,.zp0573 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0573 img{max-width:100%;display:block}
.zp0573 button,.zp0573 a{-webkit-tap-highlight-color:transparent}
.zp0573 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0573 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0573 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0573 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0573 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0573 .mobileMenu{display:none}
.zp0573 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0573 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0573 .eyebrow,.zp0573 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0573 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0573 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0573 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0573 .heroActions a,.zp0573 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0573 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0573 .visual,.zp0573 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0573 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0573 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0573 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0573 .heroPhoto{object-fit:cover}
.zp0573 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0573 .floatStack{position:relative;min-height:500px}
.zp0573 .floatStack>*{position:absolute}
.zp0573 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0573 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0573 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0573 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0573 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0573 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0573 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0573 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0573 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0573 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0573 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0573 .serviceGrid p{color:var(--muted)}
.zp0573 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0573 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0573 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0573 details{border-top:1px solid var(--border);padding:20px 0}
.zp0573 details summary{font-weight:800;cursor:pointer}
.zp0573 details p{color:var(--muted);max-width:70ch}
.zp0573 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0573 .features ul{list-style:none;margin:0;padding:0}
.zp0573 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0573 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0573 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0573 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0573 .awards>div{max-width:800px;margin-left:auto}
.zp0573 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0573 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0573 .packages>.sectionTitle{grid-column:1/-1}
.zp0573 .packages article{padding:24px;border:1px solid var(--border)}
.zp0573 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0573 .contact .eyebrow{color:var(--bg)}
.zp0573 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0573 .contactMeta{display:grid;gap:10px}
.zp0573 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0573 .heroCopy{animation:enter-572 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-572{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0573 .hero{min-height:auto}
.zp0573 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0573 .proof{grid-template-columns:1fr 1fr}
.zp0573 .packages{grid-template-columns:1fr 1fr}
.zp0573 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0573 .nav nav{display:none}
.zp0573 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0573 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0573 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0573 .mobileMenu nav a{padding:10px 8px}
.zp0573 .hero,.zp0573 .floatingHero{grid-template-columns:1fr}
.zp0573 .section,.zp0573 .sectionTitle,.zp0573 .features,.zp0573 .contact{grid-template-columns:1fr}
.zp0573 .section{display:block}}
@media(max-width:430px){.zp0573{font-size:16px}
.zp0573 .hero,.zp0573 .section,.zp0573 .contact{padding-left:18px;padding-right:18px}
.zp0573 .serviceGrid,.zp0573 .proof,.zp0573 .packages{grid-template-columns:1fr}
.zp0573 h1{font-size:clamp(42px,14vw,70px)}}

.zp0573 .heroActions a,.zp0573 .primary,.zp0573 .ctaBtn,.zp0573 .btnPrimary,.zp0573 .schedule>a,.zp0573 .newsletter>a{transition:all .2s ease}
.zp0573 .heroActions a:hover,.zp0573 .primary:hover,.zp0573 .ctaBtn:hover,.zp0573 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0573 nav a,.zp0573 .nav a,.zp0573 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0573 nav a:hover,.zp0573 .nav a:hover,.zp0573 .footer a:hover{
  color:var(--primary)
}
.zp0573 .serviceGrid article,.zp0573 .projectCard,.zp0573 .teamCard,.zp0573 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0573 .serviceGrid article:hover,.zp0573 .projectCard:hover,.zp0573 .teamCard:hover,.zp0573 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0573 *,.zp0573 *::before,.zp0573 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0573 a,.zp0573 button,.zp0573 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">72</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dashboard-inspired Marketing / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
