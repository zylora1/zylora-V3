import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0201-restaurant-bauhaus", "family": "Bauhaus", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|architectural-grid|faq>location>products>pricing>case-study>proof>services|hairline|slab", "industry": "restaurant", "hero": "poster", "navigation": "fullscreen-menu", "layout": "architectural-grid"};

export default function Template0201({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Restaurant");
  const headline = String(content.headline || "Ingredient-led cooking, warm service, and a menu that changes with the season.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Dinner service", "Tasting menu", "Private dining", "Seasonal specials", "Gift cards"];
  const industryLabel = "Restaurant";
  const serviceNotes = ["Seasonal menu updated monthly — what's on the plate reflects what's best that week.", "Private dining for up to 24 guests with a custom menu discussion included.", "Wine list curated by our sommelier with natural and classic options from small producers.", "Pre-theatre early service from 5:30 — main back by 7:15, guaranteed.", "Dietary requirements handled seriously: allergies logged and kitchen briefed."];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0201" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0201{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0201 *{box-sizing:border-box}
.zp0201 a{color:inherit;text-decoration:none}
.zp0201 h1,.zp0201 h2,.zp0201 h3,.zp0201 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0201 img{max-width:100%;display:block}
.zp0201 button,.zp0201 a{-webkit-tap-highlight-color:transparent}
.zp0201 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0201 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0201 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0201 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0201 .nav.menu details{position:relative}
.zp0201 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0201 .mobileMenu{display:none}
.zp0201 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0201 .eyebrow,.zp0201 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0201 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0201 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0201 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0201 .posterTop,.zp0201 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0201 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0201 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0201 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0201 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0201 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0201 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0201 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0201 .serviceGrid p{color:var(--muted)}
.zp0201 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0201 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0201 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0201 .faqList{max-width:900px;margin-left:auto}
.zp0201 details{border-top:1px solid var(--border);padding:20px 0}
.zp0201 details summary{font-weight:800;cursor:pointer}
.zp0201 details p{color:var(--muted);max-width:70ch}
.zp0201 .priceRows{border-top:1px solid var(--border)}
.zp0201 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0201 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0201 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0201 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0201 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0201 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0201 .projects article:nth-child(2){transform:translateY(32px)}
.zp0201 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0201 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0201 .p1,.zp0201 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0201 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0201 .contact .eyebrow{color:var(--bg)}
.zp0201 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0201 .contactMeta{display:grid;gap:10px}
.zp0201 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-200{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0201 .hero{min-height:auto}
.zp0201 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0201 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0201 .nav nav{display:none}
.zp0201 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0201 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0201 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0201 .mobileMenu nav a{padding:10px 8px}
.zp0201 .hero{grid-template-columns:1fr}
.zp0201 .section,.zp0201 .sectionTitle,.zp0201 .location,.zp0201 .contact{grid-template-columns:1fr}
.zp0201 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0201 .projects .projectGrid{grid-template-columns:1fr}
.zp0201 .projects article:nth-child(2){transform:none}
.zp0201 .section{display:block}}
@media(max-width:430px){.zp0201{font-size:16px}
.zp0201 .hero,.zp0201 .section,.zp0201 .contact{padding-left:18px;padding-right:18px}
.zp0201 .serviceGrid,.zp0201 .proof,.zp0201 .collectionGrid{grid-template-columns:1fr}
.zp0201 h1{font-size:clamp(42px,14vw,70px)}
.zp0201 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0201 .priceRows article{grid-template-columns:1fr}}

.zp0201 .heroActions a,.zp0201 .primary,.zp0201 .ctaBtn,.zp0201 .btnPrimary,.zp0201 .schedule>a,.zp0201 .newsletter>a{transition:all .2s ease}
.zp0201 .heroActions a:hover,.zp0201 .primary:hover,.zp0201 .ctaBtn:hover,.zp0201 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0201 nav a,.zp0201 .nav a,.zp0201 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0201 nav a:hover,.zp0201 .nav a:hover,.zp0201 .footer a:hover{
  color:var(--primary)
}
.zp0201 .serviceGrid article,.zp0201 .projectCard,.zp0201 .teamCard,.zp0201 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0201 .serviceGrid article:hover,.zp0201 .projectCard:hover,.zp0201 .teamCard:hover,.zp0201 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0201 *,.zp0201 *::before,.zp0201 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0201 a,.zp0201 button,.zp0201 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
