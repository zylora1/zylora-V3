import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0490-ai-company-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|comparison-led|case-study>gallery>materials>services>proof|paper-sheet|retro-bookish", "industry": "ai-company", "hero": "service-led", "navigation": "left-sidebar", "layout": "comparison-led"};

export default function Template0490({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Ai Company");
  const headline = String(content.headline || "Applied AI designed around reliable workflows, measurable quality, and human control.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["AI assistants", "Document intelligence", "Automation", "Evaluation", "Enterprise deployment"];
  const industryLabel = "AI company";
  const serviceNotes = ["Production-ready models with clear input/output contracts and versioned endpoints.", "On-premise deployment available for data-sensitive organisations.", "Model cards and audit trails provided for every inference decision.", "Human-in-the-loop option: AI recommendations, human approvals, logged chain.", "Retraining on your proprietary data with performance benchmarks agreed upfront."];
  const proofPoints = ["EU AI Act compliant", "SOC 2 certified", "Explainability dashboard", "On-prem available"];
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0490" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0490{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0490 *{box-sizing:border-box}
.zp0490 a{color:inherit;text-decoration:none}
.zp0490 h1,.zp0490 h2,.zp0490 h3,.zp0490 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0490 img{max-width:100%;display:block}
.zp0490 button,.zp0490 a{-webkit-tap-highlight-color:transparent}
.zp0490 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0490 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0490 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0490 .mobileMenu{display:none}
.zp0490:has(.navRail)>.hero,.zp0490:has(.navRail)>.section,.zp0490:has(.navRail)>.contact,.zp0490:has(.navRail)>.footer{margin-left:190px}
.zp0490 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0490 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0490 .eyebrow,.zp0490 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0490 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0490 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0490 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0490 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0490 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0490 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0490 .serviceHeroList{display:grid;gap:4px}
.zp0490 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0490 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0490 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0490 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0490 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0490 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0490 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0490 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0490 .serviceGrid p{color:var(--muted)}
.zp0490 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0490 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0490 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0490 details{border-top:1px solid var(--border);padding:20px 0}
.zp0490 details summary{font-weight:800;cursor:pointer}
.zp0490 details p{color:var(--muted);max-width:70ch}
.zp0490 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0490 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0490 .galleryGrid>*:first-child{grid-row:1/3}
.zp0490 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0490 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0490 .g2,.zp0490 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0490 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0490 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0490 .projects article:nth-child(2){transform:translateY(32px)}
.zp0490 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0490 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0490 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0490 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0490 .contact .eyebrow{color:var(--bg)}
.zp0490 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0490 .contactMeta{display:grid;gap:10px}
.zp0490 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0490 .heroCopy{animation:enter-489 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-489{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0490 .hero{min-height:auto}
.zp0490 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0490 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0490 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0490 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0490 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0490 .mobileMenu nav a{padding:10px 8px}
.zp0490 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0490:has(.navRail)>.hero,.zp0490:has(.navRail)>.section,.zp0490:has(.navRail)>.contact,.zp0490:has(.navRail)>.footer{margin-left:0}
.zp0490 .hero,.zp0490 .serviceHero{grid-template-columns:1fr}
.zp0490 .section,.zp0490 .sectionTitle,.zp0490 .contact{grid-template-columns:1fr}
.zp0490 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0490 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0490 .projects .projectGrid{grid-template-columns:1fr}
.zp0490 .projects article:nth-child(2){transform:none}
.zp0490 .section{display:block}}
@media(max-width:430px){.zp0490{font-size:16px}
.zp0490 .hero,.zp0490 .section,.zp0490 .contact{padding-left:18px;padding-right:18px}
.zp0490 .serviceGrid,.zp0490 .proof{grid-template-columns:1fr}
.zp0490 h1{font-size:clamp(42px,14vw,70px)}
.zp0490 .galleryGrid{grid-template-columns:1fr}
.zp0490 .galleryGrid>*:first-child{grid-column:auto}}

.zp0490 .heroActions a,.zp0490 .primary,.zp0490 .ctaBtn,.zp0490 .btnPrimary,.zp0490 .schedule>a,.zp0490 .newsletter>a{transition:all .2s ease}
.zp0490 .heroActions a:hover,.zp0490 .primary:hover,.zp0490 .ctaBtn:hover,.zp0490 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0490 nav a,.zp0490 .nav a,.zp0490 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0490 nav a:hover,.zp0490 .nav a:hover,.zp0490 .footer a:hover{
  color:var(--primary)
}
.zp0490 .serviceGrid article,.zp0490 .projectCard,.zp0490 .teamCard,.zp0490 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0490 .serviceGrid article:hover,.zp0490 .projectCard:hover,.zp0490 .teamCard:hover,.zp0490 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0490 *,.zp0490 *::before,.zp0490 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0490 a,.zp0490 button,.zp0490 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
