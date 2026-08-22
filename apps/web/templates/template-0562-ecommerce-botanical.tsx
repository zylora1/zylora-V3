import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0562-ecommerce-botanical", "family": "Botanical", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|comparison-led|services>faq>proof>values>features|borderless|retro-bookish", "industry": "ecommerce", "hero": "gallery-wall", "navigation": "tabbed", "layout": "comparison-led"};

export default function Template0562({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Ecommerce Brand");
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
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0562" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0562{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0562 *{box-sizing:border-box}
.zp0562 a{color:inherit;text-decoration:none}
.zp0562 h1,.zp0562 h2,.zp0562 h3,.zp0562 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0562 img{max-width:100%;display:block}
.zp0562 button,.zp0562 a{-webkit-tap-highlight-color:transparent}
.zp0562 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0562 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0562 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0562 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0562 .mobileMenu{display:none}
.zp0562 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0562 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0562 .eyebrow,.zp0562 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0562 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0562 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0562 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0562 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0562 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0562 .wallHero{grid-template-columns:1fr 1fr}
.zp0562 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0562 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0562 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0562 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0562 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0562 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0562 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0562 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0562 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0562 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0562 .serviceGrid p{color:var(--muted)}
.zp0562 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0562 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0562 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0562 .faqList{max-width:900px;margin-left:auto}
.zp0562 details{border-top:1px solid var(--border);padding:20px 0}
.zp0562 details summary{font-weight:800;cursor:pointer}
.zp0562 details p{color:var(--muted);max-width:70ch}
.zp0562 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0562 .features ul{list-style:none;margin:0;padding:0}
.zp0562 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0562 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0562 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Bookman Old Style, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0562 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0562 .contact .eyebrow{color:var(--bg)}
.zp0562 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0562 .contactMeta{display:grid;gap:10px}
.zp0562 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0562 .heroCopy{animation:enter-561 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-561{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0562 .hero{min-height:auto}
.zp0562 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0562 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0562 .nav nav{display:none}
.zp0562 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0562 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0562 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0562 .mobileMenu nav a{padding:10px 8px}
.zp0562 .hero,.zp0562 .wallHero{grid-template-columns:1fr}
.zp0562 .section,.zp0562 .sectionTitle,.zp0562 .features,.zp0562 .contact{grid-template-columns:1fr}
.zp0562 .section{display:block}}
@media(max-width:430px){.zp0562{font-size:16px}
.zp0562 .hero,.zp0562 .section,.zp0562 .contact{padding-left:18px;padding-right:18px}
.zp0562 .serviceGrid,.zp0562 .proof{grid-template-columns:1fr}
.zp0562 h1{font-size:clamp(42px,14vw,70px)}}

.zp0562 .heroActions a,.zp0562 .primary,.zp0562 .ctaBtn,.zp0562 .btnPrimary,.zp0562 .schedule>a,.zp0562 .newsletter>a{transition:all .2s ease}
.zp0562 .heroActions a:hover,.zp0562 .primary:hover,.zp0562 .ctaBtn:hover,.zp0562 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0562 nav a,.zp0562 .nav a,.zp0562 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0562 nav a:hover,.zp0562 .nav a:hover,.zp0562 .footer a:hover{
  color:var(--primary)
}
.zp0562 .serviceGrid article,.zp0562 .projectCard,.zp0562 .teamCard,.zp0562 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0562 .serviceGrid article:hover,.zp0562 .projectCard:hover,.zp0562 .teamCard:hover,.zp0562 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0562 *,.zp0562 *::before,.zp0562 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0562 a,.zp0562 button,.zp0562 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
