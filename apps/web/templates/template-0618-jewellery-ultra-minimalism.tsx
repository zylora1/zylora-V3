import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0618-jewellery-ultra-minimalism", "family": "Ultra Minimalism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|image-led-chapters|proof>press>services>products>projects>security>integrations|paper-sheet|utility", "industry": "jewellery", "hero": "service-led", "navigation": "left-sidebar", "layout": "image-led-chapters"};

export default function Template0618({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Jewellery Studio");
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
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0618" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0618{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:0px;--shadow:none;--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0618 *{box-sizing:border-box}
.zp0618 a{color:inherit;text-decoration:none}
.zp0618 h1,.zp0618 h2,.zp0618 h3,.zp0618 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0618 img{max-width:100%;display:block}
.zp0618 button,.zp0618 a{-webkit-tap-highlight-color:transparent}
.zp0618 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0618 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0618 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0618 .mobileMenu{display:none}
.zp0618:has(.navRail)>.hero,.zp0618:has(.navRail)>.section,.zp0618:has(.navRail)>.contact,.zp0618:has(.navRail)>.footer{margin-left:190px}
.zp0618 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0618 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0618 .eyebrow,.zp0618 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0618 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0618 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0618 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0618 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0618 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0618 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0618 .serviceHeroList{display:grid;gap:4px}
.zp0618 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0618 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0618 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0618 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0618 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0618 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0618 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0618 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0618 .serviceGrid p{color:var(--muted)}
.zp0618 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0618 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0618 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0618 details{border-top:1px solid var(--border);padding:20px 0}
.zp0618 details summary{font-weight:800;cursor:pointer}
.zp0618 details p{color:var(--muted);max-width:70ch}
.zp0618 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0618 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0618 .projects article:nth-child(2){transform:translateY(32px)}
.zp0618 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0618 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0618 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0618 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0618 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0618 .p1,.zp0618 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0618 .awards>div{max-width:800px;margin-left:auto}
.zp0618 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0618 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0618 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0618 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0618 .contact .eyebrow{color:var(--bg)}
.zp0618 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0618 .contactMeta{display:grid;gap:10px}
.zp0618 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0618 .heroCopy{animation:enter-617 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-617{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0618 .hero{min-height:auto}
.zp0618 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0618 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0618 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0618 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0618 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0618 .mobileMenu nav a{padding:10px 8px}
.zp0618 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0618:has(.navRail)>.hero,.zp0618:has(.navRail)>.section,.zp0618:has(.navRail)>.contact,.zp0618:has(.navRail)>.footer{margin-left:0}
.zp0618 .hero,.zp0618 .serviceHero{grid-template-columns:1fr}
.zp0618 .section,.zp0618 .sectionTitle,.zp0618 .security,.zp0618 .contact{grid-template-columns:1fr}
.zp0618 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0618 .projects .projectGrid{grid-template-columns:1fr}
.zp0618 .projects article:nth-child(2){transform:none}
.zp0618 .section{display:block}}
@media(max-width:430px){.zp0618{font-size:16px}
.zp0618 .hero,.zp0618 .section,.zp0618 .contact{padding-left:18px;padding-right:18px}
.zp0618 .serviceGrid,.zp0618 .proof,.zp0618 .collectionGrid{grid-template-columns:1fr}
.zp0618 h1{font-size:clamp(42px,14vw,70px)}}

.zp0618 .heroActions a,.zp0618 .primary,.zp0618 .ctaBtn,.zp0618 .btnPrimary,.zp0618 .schedule>a,.zp0618 .newsletter>a{transition:all .2s ease}
.zp0618 .heroActions a:hover,.zp0618 .primary:hover,.zp0618 .ctaBtn:hover,.zp0618 .btnPrimary:hover{
  opacity:.75
}
.zp0618 nav a,.zp0618 .nav a,.zp0618 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0618 nav a:hover,.zp0618 .nav a:hover,.zp0618 .footer a:hover{
  opacity:.6
}
.zp0618 .serviceGrid article,.zp0618 .projectCard,.zp0618 .teamCard,.zp0618 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0618 .serviceGrid article:hover,.zp0618 .projectCard:hover,.zp0618 .teamCard:hover,.zp0618 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0618 *,.zp0618 *::before,.zp0618 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0618 a,.zp0618 button,.zp0618 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
