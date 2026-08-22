import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0572-ecommerce-geometric", "family": "Geometric", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|booking-led|destinations>services>projects>proof>availability>case-study|notched|product-ui", "industry": "ecommerce", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "booking-led"};

export default function Template0572({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Ecommerce Brand");
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
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0572" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0572{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0572 *{box-sizing:border-box}
.zp0572 a{color:inherit;text-decoration:none}
.zp0572 h1,.zp0572 h2,.zp0572 h3,.zp0572 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0572 img{max-width:100%;display:block}
.zp0572 button,.zp0572 a{-webkit-tap-highlight-color:transparent}
.zp0572 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0572 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0572 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0572 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0572 .mobileMenu{display:none}
.zp0572 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0572 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0572 .eyebrow,.zp0572 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0572 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0572 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0572 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0572 .heroActions a,.zp0572 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0572 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0572 .mapHero{grid-template-columns:1fr 1fr}
.zp0572 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0572 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0572 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0572 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0572 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0572 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0572 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0572 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0572 .serviceGrid p{color:var(--muted)}
.zp0572 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0572 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0572 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0572 details{border-top:1px solid var(--border);padding:20px 0}
.zp0572 details summary{font-weight:800;cursor:pointer}
.zp0572 details p{color:var(--muted);max-width:70ch}
.zp0572 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0572 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0572 .projects article:nth-child(2){transform:translateY(32px)}
.zp0572 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0572 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0572 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0572 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0572 .contact .eyebrow{color:var(--bg)}
.zp0572 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0572 .contactMeta{display:grid;gap:10px}
.zp0572 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0572 .heroCopy{animation:enter-571 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-571{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0572 .hero{min-height:auto}
.zp0572 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0572 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0572 .nav nav{display:none}
.zp0572 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0572 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0572 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0572 .mobileMenu nav a{padding:10px 8px}
.zp0572 .hero,.zp0572 .mapHero{grid-template-columns:1fr}
.zp0572 .section,.zp0572 .sectionTitle,.zp0572 .contact{grid-template-columns:1fr}
.zp0572 .projects .projectGrid{grid-template-columns:1fr}
.zp0572 .projects article:nth-child(2){transform:none}
.zp0572 .section{display:block}}
@media(max-width:430px){.zp0572{font-size:16px}
.zp0572 .hero,.zp0572 .section,.zp0572 .contact{padding-left:18px;padding-right:18px}
.zp0572 .serviceGrid,.zp0572 .proof,.zp0572 .destinations>div:last-child{grid-template-columns:1fr}
.zp0572 h1{font-size:clamp(42px,14vw,70px)}}

.zp0572 .heroActions a,.zp0572 .primary,.zp0572 .ctaBtn,.zp0572 .btnPrimary,.zp0572 .schedule>a,.zp0572 .newsletter>a{transition:all .2s ease}
.zp0572 .heroActions a:hover,.zp0572 .primary:hover,.zp0572 .ctaBtn:hover,.zp0572 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0572 nav a,.zp0572 .nav a,.zp0572 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0572 nav a:hover,.zp0572 .nav a:hover,.zp0572 .footer a:hover{
  color:var(--primary)
}
.zp0572 .serviceGrid article,.zp0572 .projectCard,.zp0572 .teamCard,.zp0572 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0572 .serviceGrid article:hover,.zp0572 .projectCard:hover,.zp0572 .teamCard:hover,.zp0572 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0572 *,.zp0572 *::before,.zp0572 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0572 a,.zp0572 button,.zp0572 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
