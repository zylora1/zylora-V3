import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0567-ecommerce-industrial", "family": "Industrial", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|timeline-narrative|testimonial>services>collection>hours>timeline>research>proof|asymmetric-radius|geometric", "industry": "ecommerce", "hero": "index-led", "navigation": "editorial-index", "layout": "timeline-narrative"};

export default function Template0567({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Ecommerce Brand");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Average: 34% CRO lift", "Shopify Plus certified", "PCI DSS compliant", "99.9% uptime SLA"];
  const testimonial = "Conversion rate went from 1.2% to 2.8% in the first quarter. They found the leaks in our checkout nobody else had flagged.";
  const testimonialName = "Elm client";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp0567" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0567{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0567 *{box-sizing:border-box}
.zp0567 a{color:inherit;text-decoration:none}
.zp0567 h1,.zp0567 h2,.zp0567 h3,.zp0567 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0567 img{max-width:100%;display:block}
.zp0567 button,.zp0567 a{-webkit-tap-highlight-color:transparent}
.zp0567 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0567 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0567 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0567 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0567 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0567 .nav.index nav{justify-content:flex-end}
.zp0567 .mobileMenu{display:none}
.zp0567 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0567 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0567 .eyebrow,.zp0567 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0567 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0567 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0567 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0567 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0567 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0567 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0567 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0567 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0567 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0567 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0567 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0567 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0567 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0567 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0567 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0567 .serviceGrid p{color:var(--muted)}
.zp0567 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0567 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0567 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0567 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0567 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0567 .testimonial>div{align-self:end}
.zp0567 .testimonial span{display:block;opacity:.7}
.zp0567 details{border-top:1px solid var(--border);padding:20px 0}
.zp0567 details summary{font-weight:800;cursor:pointer}
.zp0567 details p{color:var(--muted);max-width:70ch}
.zp0567 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0567 .hours dl{margin:0}
.zp0567 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0567 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0567 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0567 .p1,.zp0567 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0567 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0567 .timeline article{padding:20px 0}
.zp0567 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0567 .researchRows{max-width:900px;margin-left:auto}
.zp0567 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0567 .contact .eyebrow{color:var(--bg)}
.zp0567 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0567 .contactMeta{display:grid;gap:10px}
.zp0567 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0567 .heroCopy{animation:enter-566 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-566{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0567 .hero{min-height:auto}
.zp0567 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0567 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0567 .nav nav{display:none}
.zp0567 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0567 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0567 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0567 .mobileMenu nav a{padding:10px 8px}
.zp0567 .hero,.zp0567 .indexHero{grid-template-columns:1fr}
.zp0567 .section,.zp0567 .sectionTitle,.zp0567 .hours,.zp0567 .contact{grid-template-columns:1fr}
.zp0567 .testimonial{grid-template-columns:1fr}
.zp0567 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0567 .section{display:block}}
@media(max-width:430px){.zp0567{font-size:16px}
.zp0567 .hero,.zp0567 .section,.zp0567 .contact{padding-left:18px;padding-right:18px}
.zp0567 .serviceGrid,.zp0567 .proof,.zp0567 .collectionGrid{grid-template-columns:1fr}
.zp0567 h1{font-size:clamp(42px,14vw,70px)}
.zp0567 .nav.index{grid-template-columns:1fr auto}
.zp0567 .nav.index>span{display:none}}

.zp0567 .heroActions a,.zp0567 .primary,.zp0567 .ctaBtn,.zp0567 .btnPrimary,.zp0567 .schedule>a,.zp0567 .newsletter>a{transition:all .2s ease}
.zp0567 .heroActions a:hover,.zp0567 .primary:hover,.zp0567 .ctaBtn:hover,.zp0567 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0567 nav a,.zp0567 .nav a,.zp0567 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0567 nav a:hover,.zp0567 .nav a:hover,.zp0567 .footer a:hover{
  color:var(--primary)
}
.zp0567 .serviceGrid article,.zp0567 .projectCard,.zp0567 .teamCard,.zp0567 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0567 .serviceGrid article:hover,.zp0567 .projectCard:hover,.zp0567 .teamCard:hover,.zp0567 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0567 *,.zp0567 *::before,.zp0567 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0567 a,.zp0567 button,.zp0567 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
