import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0362-construction-memphis", "family": "Memphis", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|full-bleed-chapters|services>materials>metrics>proof>values>timeline|paper-sheet|modernist-duo", "industry": "construction", "hero": "service-led", "navigation": "left-sidebar", "layout": "full-bleed-chapters"};

export default function Template0362({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0362" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0362{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0362 *{box-sizing:border-box}
.zp0362 a{color:inherit;text-decoration:none}
.zp0362 h1,.zp0362 h2,.zp0362 h3,.zp0362 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0362 img{max-width:100%;display:block}
.zp0362 button,.zp0362 a{-webkit-tap-highlight-color:transparent}
.zp0362 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0362 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0362 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0362 .mobileMenu{display:none}
.zp0362:has(.navRail)>.hero,.zp0362:has(.navRail)>.section,.zp0362:has(.navRail)>.contact,.zp0362:has(.navRail)>.footer{margin-left:190px}
.zp0362 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0362 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0362 .eyebrow,.zp0362 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0362 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0362 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0362 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0362 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0362 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0362 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0362 .serviceHeroList{display:grid;gap:4px}
.zp0362 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0362 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0362 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0362 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0362 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0362 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0362 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0362 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0362 .serviceGrid p{color:var(--muted)}
.zp0362 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0362 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0362 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0362 details{border-top:1px solid var(--border);padding:20px 0}
.zp0362 details summary{font-weight:800;cursor:pointer}
.zp0362 details p{color:var(--muted);max-width:70ch}
.zp0362 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0362 .metrics div{background:var(--bg);padding:30px}
.zp0362 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Futura, Avenir, Arial, sans-serif;color:var(--primary)}
.zp0362 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0362 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0362 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0362 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0362 .timeline article{padding:20px 0}
.zp0362 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Futura, Avenir, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0362 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0362 .contact .eyebrow{color:var(--bg)}
.zp0362 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0362 .contactMeta{display:grid;gap:10px}
.zp0362 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0362 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0362 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-19deg)}
.zp0362 .heroCopy{animation:enter-361 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-361{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0362 .hero{min-height:auto}
.zp0362 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0362 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0362 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0362 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0362 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0362 .mobileMenu nav a{padding:10px 8px}
.zp0362 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0362:has(.navRail)>.hero,.zp0362:has(.navRail)>.section,.zp0362:has(.navRail)>.contact,.zp0362:has(.navRail)>.footer{margin-left:0}
.zp0362 .hero,.zp0362 .serviceHero{grid-template-columns:1fr}
.zp0362 .section,.zp0362 .sectionTitle,.zp0362 .contact{grid-template-columns:1fr}
.zp0362 .metrics{grid-template-columns:1fr 1fr}
.zp0362 .section{display:block}}
@media(max-width:430px){.zp0362{font-size:16px}
.zp0362 .hero,.zp0362 .section,.zp0362 .contact{padding-left:18px;padding-right:18px}
.zp0362 .serviceGrid,.zp0362 .proof,.zp0362 .metrics{grid-template-columns:1fr}
.zp0362 h1{font-size:clamp(42px,14vw,70px)}}

.zp0362 .heroActions a,.zp0362 .primary,.zp0362 .ctaBtn,.zp0362 .btnPrimary,.zp0362 .schedule>a,.zp0362 .newsletter>a{transition:all .2s ease}
.zp0362 .heroActions a:hover,.zp0362 .primary:hover,.zp0362 .ctaBtn:hover,.zp0362 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0362 nav a,.zp0362 .nav a,.zp0362 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0362 nav a:hover,.zp0362 .nav a:hover,.zp0362 .footer a:hover{
  color:var(--primary)
}
.zp0362 .serviceGrid article,.zp0362 .projectCard,.zp0362 .teamCard,.zp0362 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0362 .serviceGrid article:hover,.zp0362 .projectCard:hover,.zp0362 .teamCard:hover,.zp0362 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0362 *,.zp0362 *::before,.zp0362 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0362 a,.zp0362 button,.zp0362 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
