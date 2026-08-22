import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0170-coaching-mediterranean", "family": "Mediterranean", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|menu-led|programmes>pricing>features>collection>services>proof|paper-sheet|modernist-duo", "industry": "coaching", "hero": "service-led", "navigation": "left-sidebar", "layout": "menu-led"};

export default function Template0170({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const industryLabel = "Coaching centre";
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0170" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0170{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0170 *{box-sizing:border-box}
.zp0170 a{color:inherit;text-decoration:none}
.zp0170 h1,.zp0170 h2,.zp0170 h3,.zp0170 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0170 img{max-width:100%;display:block}
.zp0170 button,.zp0170 a{-webkit-tap-highlight-color:transparent}
.zp0170 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0170 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0170 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0170 .mobileMenu{display:none}
.zp0170:has(.navRail)>.hero,.zp0170:has(.navRail)>.section,.zp0170:has(.navRail)>.contact,.zp0170:has(.navRail)>.footer{margin-left:190px}
.zp0170 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0170 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0170 .eyebrow,.zp0170 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0170 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0170 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0170 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0170 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0170 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0170 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0170 .serviceHeroList{display:grid;gap:4px}
.zp0170 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0170 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0170 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0170 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0170 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0170 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0170 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0170 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0170 .serviceGrid p{color:var(--muted)}
.zp0170 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0170 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0170 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0170 details{border-top:1px solid var(--border);padding:20px 0}
.zp0170 details summary{font-weight:800;cursor:pointer}
.zp0170 details p{color:var(--muted);max-width:70ch}
.zp0170 .priceRows{border-top:1px solid var(--border)}
.zp0170 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0170 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0170 .features ul{list-style:none;margin:0;padding:0}
.zp0170 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0170 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0170 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0170 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0170 .p1,.zp0170 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0170 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0170 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0170 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0170 .contact .eyebrow{color:var(--bg)}
.zp0170 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0170 .contactMeta{display:grid;gap:10px}
.zp0170 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0170 .heroCopy{animation:enter-169 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-169{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0170 .hero{min-height:auto}
.zp0170 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0170 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0170 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0170 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0170 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0170 .mobileMenu nav a{padding:10px 8px}
.zp0170 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0170:has(.navRail)>.hero,.zp0170:has(.navRail)>.section,.zp0170:has(.navRail)>.contact,.zp0170:has(.navRail)>.footer{margin-left:0}
.zp0170 .hero,.zp0170 .serviceHero{grid-template-columns:1fr}
.zp0170 .section,.zp0170 .sectionTitle,.zp0170 .features,.zp0170 .contact{grid-template-columns:1fr}
.zp0170 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0170 .section{display:block}}
@media(max-width:430px){.zp0170{font-size:16px}
.zp0170 .hero,.zp0170 .section,.zp0170 .contact{padding-left:18px;padding-right:18px}
.zp0170 .serviceGrid,.zp0170 .proof,.zp0170 .collectionGrid,.zp0170 .programmes>div:last-child{grid-template-columns:1fr}
.zp0170 h1{font-size:clamp(42px,14vw,70px)}
.zp0170 .priceRows article{grid-template-columns:1fr}}

.zp0170 .heroActions a,.zp0170 .primary,.zp0170 .ctaBtn,.zp0170 .btnPrimary,.zp0170 .schedule>a,.zp0170 .newsletter>a{transition:all .2s ease}
.zp0170 .heroActions a:hover,.zp0170 .primary:hover,.zp0170 .ctaBtn:hover,.zp0170 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0170 nav a,.zp0170 .nav a,.zp0170 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0170 nav a:hover,.zp0170 .nav a:hover,.zp0170 .footer a:hover{
  color:var(--primary)
}
.zp0170 .serviceGrid article,.zp0170 .projectCard,.zp0170 .teamCard,.zp0170 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0170 .serviceGrid article:hover,.zp0170 .projectCard:hover,.zp0170 .teamCard:hover,.zp0170 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0170 *,.zp0170 *::before,.zp0170 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0170 a,.zp0170 button,.zp0170 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Mediterranean / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
