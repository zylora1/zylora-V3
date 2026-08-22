import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0624-jewellery-asymmetric-grid", "family": "Asymmetric Grid", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|stacked-posters|location>services>packages>materials>team>proof>pricing|heavy-frame|terminal", "industry": "jewellery", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "stacked-posters"};

export default function Template0624({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Jewellery Studio");
  const headline = String(content.headline || "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Fine jewellery", "Engagement", "Bespoke", "Repairs", "Private viewings"];
  const industryLabel = "Jewellery studio";
  const serviceNotes = ["Bespoke commissions from sketch to setting — your brief, your story, our craft.", "Ethically sourced gemstones with Kimberley Process certification as standard.", "In-house goldsmith: repairs, resizing, and remounting while you wait in most cases.", "Valuation service for insurance and probate, issued on headed paper.", "Engraving available on most pieces — personal inscriptions completed in-house."];
  const proofPoints = ["NAJ member", "Hallmarked at Birmingham Assay", "Lifetime warranty on settings", "Conflict-free certification"];
  const testimonial = "They remodelled my grandmother's ring into something I actually wear every day. The craftsmanship is extraordinary.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0624" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0624{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0624 *{box-sizing:border-box}
.zp0624 a{color:inherit;text-decoration:none}
.zp0624 h1,.zp0624 h2,.zp0624 h3,.zp0624 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0624 img{max-width:100%;display:block}
.zp0624 button,.zp0624 a{-webkit-tap-highlight-color:transparent}
.zp0624 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0624 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0624 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0624 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0624 .nav.centered strong{order:2;font-size:24px}
.zp0624 .nav.centered nav:first-child{order:1}
.zp0624 .nav.centered nav:last-child{order:3}
.zp0624 .mobileMenu{display:none}
.zp0624 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0624 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0624 .eyebrow,.zp0624 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0624 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0624 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0624 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0624 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0624 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0624 .visual,.zp0624 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0624 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0624 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0624 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0624 .heroPhoto{object-fit:cover}
.zp0624 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0624 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0624 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0624 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0624 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0624 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0624 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0624 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0624 .serviceGrid p{color:var(--muted)}
.zp0624 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0624 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0624 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0624 details{border-top:1px solid var(--border);padding:20px 0}
.zp0624 details summary{font-weight:800;cursor:pointer}
.zp0624 details p{color:var(--muted);max-width:70ch}
.zp0624 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0624 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0624 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Lucida Console, Monaco, monospace;margin-bottom:18px}
.zp0624 .priceRows{border-top:1px solid var(--border)}
.zp0624 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0624 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0624 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0624 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0624 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0624 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0624 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0624 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0624 .packages>.sectionTitle{grid-column:1/-1}
.zp0624 .packages article{padding:24px;border:1px solid var(--border)}
.zp0624 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0624 .contact .eyebrow{color:var(--bg)}
.zp0624 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0624 .contactMeta{display:grid;gap:10px}
.zp0624 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0624 .heroCopy{animation:enter-623 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-623{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0624 .hero{min-height:auto}
.zp0624 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0624 .proof{grid-template-columns:1fr 1fr}
.zp0624 .packages{grid-template-columns:1fr 1fr}
.zp0624 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0624 .nav nav{display:none}
.zp0624 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0624 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0624 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0624 .mobileMenu nav a{padding:10px 8px}
.zp0624 .hero,.zp0624 .asymHero{grid-template-columns:1fr}
.zp0624 .section,.zp0624 .sectionTitle,.zp0624 .location,.zp0624 .contact{grid-template-columns:1fr}
.zp0624 .teamGrid{grid-template-columns:1fr 1fr}
.zp0624 .section{display:block}}
@media(max-width:430px){.zp0624{font-size:16px}
.zp0624 .hero,.zp0624 .section,.zp0624 .contact{padding-left:18px;padding-right:18px}
.zp0624 .serviceGrid,.zp0624 .proof,.zp0624 .teamGrid,.zp0624 .packages{grid-template-columns:1fr}
.zp0624 h1{font-size:clamp(42px,14vw,70px)}
.zp0624 .priceRows article{grid-template-columns:1fr}}

.zp0624 .heroActions a,.zp0624 .primary,.zp0624 .ctaBtn,.zp0624 .btnPrimary,.zp0624 .schedule>a,.zp0624 .newsletter>a{transition:all .2s ease}
.zp0624 .heroActions a:hover,.zp0624 .primary:hover,.zp0624 .ctaBtn:hover,.zp0624 .btnPrimary:hover{
  opacity:.85
}
.zp0624 nav a,.zp0624 .nav a,.zp0624 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0624 nav a:hover,.zp0624 .nav a:hover,.zp0624 .footer a:hover{
  color:var(--primary)
}
.zp0624 .serviceGrid article,.zp0624 .projectCard,.zp0624 .teamCard,.zp0624 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0624 .serviceGrid article:hover,.zp0624 .projectCard:hover,.zp0624 .teamCard:hover,.zp0624 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0624 *,.zp0624 *::before,.zp0624 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0624 a,.zp0624 button,.zp0624 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">03</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">23</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
