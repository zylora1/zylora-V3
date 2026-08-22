import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0426-insurance-brutalism", "family": "Brutalism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|portfolio-sequence|pricing>location>services>awards>hours>credentials>proof|paper-sheet|utility", "industry": "insurance", "hero": "service-led", "navigation": "left-sidebar", "layout": "portfolio-sequence"};

export default function Template0426({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0426" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0426{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:3px;--shadow:none;--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0426 *{box-sizing:border-box}
.zp0426 a{color:inherit;text-decoration:none}
.zp0426 h1,.zp0426 h2,.zp0426 h3,.zp0426 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0426 img{max-width:100%;display:block}
.zp0426 button,.zp0426 a{-webkit-tap-highlight-color:transparent}
.zp0426 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0426 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0426 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0426 .mobileMenu{display:none}
.zp0426:has(.navRail)>.hero,.zp0426:has(.navRail)>.section,.zp0426:has(.navRail)>.contact,.zp0426:has(.navRail)>.footer{margin-left:190px}
.zp0426 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0426 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0426 .eyebrow,.zp0426 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0426 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0426 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0426 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0426 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0426 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0426 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0426 .serviceHeroList{display:grid;gap:4px}
.zp0426 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0426 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0426 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0426 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0426 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0426 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0426 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0426 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0426 .serviceGrid p{color:var(--muted)}
.zp0426 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0426 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0426 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0426 details{border-top:1px solid var(--border);padding:20px 0}
.zp0426 details summary{font-weight:800;cursor:pointer}
.zp0426 details p{color:var(--muted);max-width:70ch}
.zp0426 .priceRows{border-top:1px solid var(--border)}
.zp0426 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0426 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0426 .hours dl{margin:0}
.zp0426 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0426 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0426 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0426 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0426 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0426 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0426 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0426 .awards>div{max-width:800px;margin-left:auto}
.zp0426 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0426 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0426 .contact .eyebrow{color:var(--bg)}
.zp0426 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0426 .contactMeta{display:grid;gap:10px}
.zp0426 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0426 .heroActions a,.zp0426 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0426 h1{text-transform:uppercase}
@media(max-width:1024px){.zp0426 .hero{min-height:auto}
.zp0426 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0426 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0426 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0426 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0426 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0426 .mobileMenu nav a{padding:10px 8px}
.zp0426 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0426:has(.navRail)>.hero,.zp0426:has(.navRail)>.section,.zp0426:has(.navRail)>.contact,.zp0426:has(.navRail)>.footer{margin-left:0}
.zp0426 .hero,.zp0426 .serviceHero{grid-template-columns:1fr}
.zp0426 .section,.zp0426 .sectionTitle,.zp0426 .hours,.zp0426 .location,.zp0426 .contact{grid-template-columns:1fr}
.zp0426 .section{display:block}}
@media(max-width:430px){.zp0426{font-size:16px}
.zp0426 .hero,.zp0426 .section,.zp0426 .contact{padding-left:18px;padding-right:18px}
.zp0426 .serviceGrid,.zp0426 .proof{grid-template-columns:1fr}
.zp0426 h1{font-size:clamp(42px,14vw,70px)}
.zp0426 .priceRows article{grid-template-columns:1fr}}

.zp0426 .heroActions a,.zp0426 .primary,.zp0426 .ctaBtn,.zp0426 .btnPrimary,.zp0426 .schedule>a,.zp0426 .newsletter>a{transition:all .2s ease}
.zp0426 .heroActions a:hover,.zp0426 .primary:hover,.zp0426 .ctaBtn:hover,.zp0426 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0426 nav a,.zp0426 .nav a,.zp0426 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0426 nav a:hover,.zp0426 .nav a:hover,.zp0426 .footer a:hover{
  text-decoration:underline
}
.zp0426 .serviceGrid article,.zp0426 .projectCard,.zp0426 .teamCard,.zp0426 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0426 .serviceGrid article:hover,.zp0426 .projectCard:hover,.zp0426 .teamCard:hover,.zp0426 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@keyframes zpEnter{from{opacity:0;transform:translate(-8px,12px)}to{opacity:1;transform:none}}
.zp0426 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0426 .sectionTitle,.zp0426 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0426 *,.zp0426 *::before,.zp0426 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0426 a,.zp0426 button,.zp0426 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
