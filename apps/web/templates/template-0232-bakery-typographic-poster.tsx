import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0232-bakery-typographic-poster", "family": "Typographic Poster", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|single-column-longform|testimonial>proof>hours>metrics>services|micro-radius|brutal-display", "industry": "bakery", "hero": "monumental-type", "navigation": "corner-dock", "layout": "single-column-longform"};

export default function Template0232({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const testimonialName = "Civic client";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0232" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0232{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0232 *{box-sizing:border-box}
.zp0232 a{color:inherit;text-decoration:none}
.zp0232 h1,.zp0232 h2,.zp0232 h3,.zp0232 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0232 img{max-width:100%;display:block}
.zp0232 button,.zp0232 a{-webkit-tap-highlight-color:transparent}
.zp0232 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0232 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0232 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0232 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0232 .mobileMenu{display:none}
.zp0232 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0232 .eyebrow,.zp0232 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0232 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0232 .monumentalHero{display:block}
.zp0232 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0232 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0232 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0232 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0232 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0232 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0232 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0232 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0232 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0232 .serviceGrid p{color:var(--muted)}
.zp0232 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0232 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0232 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0232 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0232 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0232 .testimonial>div{align-self:end}
.zp0232 .testimonial span{display:block;opacity:.7}
.zp0232 details{border-top:1px solid var(--border);padding:20px 0}
.zp0232 details summary{font-weight:800;cursor:pointer}
.zp0232 details p{color:var(--muted);max-width:70ch}
.zp0232 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0232 .hours dl{margin:0}
.zp0232 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0232 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0232 .metrics div{background:var(--bg);padding:30px}
.zp0232 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Arial Black, Arial, sans-serif;color:var(--primary)}
.zp0232 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0232 .contact .eyebrow{color:var(--bg)}
.zp0232 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0232 .contactMeta{display:grid;gap:10px}
.zp0232 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0232 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0232 .sectionTitle{display:block}
@keyframes enter-231{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0232 .hero{min-height:auto}
.zp0232 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0232 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0232 .nav nav{display:none}
.zp0232 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0232 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0232 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0232 .mobileMenu nav a{padding:10px 8px}
.zp0232 .hero{grid-template-columns:1fr}
.zp0232 .section,.zp0232 .sectionTitle,.zp0232 .hours,.zp0232 .contact{grid-template-columns:1fr}
.zp0232 .testimonial{grid-template-columns:1fr}
.zp0232 .metrics{grid-template-columns:1fr 1fr}
.zp0232 .section{display:block}}
@media(max-width:430px){.zp0232{font-size:16px}
.zp0232 .hero,.zp0232 .section,.zp0232 .contact{padding-left:18px;padding-right:18px}
.zp0232 .serviceGrid,.zp0232 .proof,.zp0232 .metrics{grid-template-columns:1fr}
.zp0232 h1{font-size:clamp(42px,14vw,70px)}
.zp0232 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0232 .monumentalBody{grid-template-columns:1fr}}

.zp0232 .heroActions a,.zp0232 .primary,.zp0232 .ctaBtn,.zp0232 .btnPrimary,.zp0232 .schedule>a,.zp0232 .newsletter>a{transition:all .2s ease}
.zp0232 .heroActions a:hover,.zp0232 .primary:hover,.zp0232 .ctaBtn:hover,.zp0232 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0232 nav a,.zp0232 .nav a,.zp0232 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0232 nav a:hover,.zp0232 .nav a:hover,.zp0232 .footer a:hover{
  color:var(--primary)
}
.zp0232 .serviceGrid article,.zp0232 .projectCard,.zp0232 .teamCard,.zp0232 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0232 .serviceGrid article:hover,.zp0232 .projectCard:hover,.zp0232 .teamCard:hover,.zp0232 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0232 *,.zp0232 *::before,.zp0232 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0232 a,.zp0232 button,.zp0232 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Schedule a consultation</a></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
