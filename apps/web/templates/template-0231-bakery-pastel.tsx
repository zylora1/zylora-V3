import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0231-bakery-pastel", "family": "Pastel", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|product-journey|awards>newsletter>features>packages>proof>services>location|asymmetric-radius|geometric", "industry": "bakery", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "product-journey"};

export default function Template0231({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Bakery");
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
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0231" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0231{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0231 *{box-sizing:border-box}
.zp0231 a{color:inherit;text-decoration:none}
.zp0231 h1,.zp0231 h2,.zp0231 h3,.zp0231 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0231 img{max-width:100%;display:block}
.zp0231 button,.zp0231 a{-webkit-tap-highlight-color:transparent}
.zp0231 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0231 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0231 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0231 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0231 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0231 .nav.index nav{justify-content:flex-end}
.zp0231 .mobileMenu{display:none}
.zp0231 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0231 .eyebrow,.zp0231 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0231 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0231 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0231 .minimalHero{display:block;min-height:74vh}
.zp0231 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0231 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0231 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0231 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0231 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0231 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0231 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0231 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0231 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0231 .serviceGrid p{color:var(--muted)}
.zp0231 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0231 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0231 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0231 details{border-top:1px solid var(--border);padding:20px 0}
.zp0231 details summary{font-weight:800;cursor:pointer}
.zp0231 details p{color:var(--muted);max-width:70ch}
.zp0231 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0231 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0231 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0231 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0231 .features ul{list-style:none;margin:0;padding:0}
.zp0231 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0231 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0231 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0231 .awards>div{max-width:800px;margin-left:auto}
.zp0231 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0231 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0231 .packages>.sectionTitle{grid-column:1/-1}
.zp0231 .packages article{padding:24px;border:1px solid var(--border)}
.zp0231 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0231 .contact .eyebrow{color:var(--bg)}
.zp0231 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0231 .contactMeta{display:grid;gap:10px}
.zp0231 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-230{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0231 .hero{min-height:auto}
.zp0231 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0231 .proof{grid-template-columns:1fr 1fr}
.zp0231 .packages{grid-template-columns:1fr 1fr}
.zp0231 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0231 .nav nav{display:none}
.zp0231 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0231 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0231 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0231 .mobileMenu nav a{padding:10px 8px}
.zp0231 .hero{grid-template-columns:1fr}
.zp0231 .section,.zp0231 .sectionTitle,.zp0231 .location,.zp0231 .features,.zp0231 .contact{grid-template-columns:1fr}
.zp0231 .section{display:block}}
@media(max-width:430px){.zp0231{font-size:16px}
.zp0231 .hero,.zp0231 .section,.zp0231 .contact{padding-left:18px;padding-right:18px}
.zp0231 .serviceGrid,.zp0231 .proof,.zp0231 .packages{grid-template-columns:1fr}
.zp0231 h1{font-size:clamp(42px,14vw,70px)}
.zp0231 .minimalFoot{grid-template-columns:1fr}
.zp0231 .nav.index{grid-template-columns:1fr auto}
.zp0231 .nav.index>span{display:none}}

.zp0231 .heroActions a,.zp0231 .primary,.zp0231 .ctaBtn,.zp0231 .btnPrimary,.zp0231 .schedule>a,.zp0231 .newsletter>a{transition:all .2s ease}
.zp0231 .heroActions a:hover,.zp0231 .primary:hover,.zp0231 .ctaBtn:hover,.zp0231 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0231 nav a,.zp0231 .nav a,.zp0231 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0231 nav a:hover,.zp0231 .nav a:hover,.zp0231 .footer a:hover{
  color:var(--primary)
}
.zp0231 .serviceGrid article,.zp0231 .projectCard,.zp0231 .teamCard,.zp0231 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0231 .serviceGrid article:hover,.zp0231 .projectCard:hover,.zp0231 .teamCard:hover,.zp0231 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0231 *,.zp0231 *::before,.zp0231 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0231 a,.zp0231 button,.zp0231 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
