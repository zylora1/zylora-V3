import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0906-landscaping-high-contrast", "family": "High Contrast", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|image-led-chapters|proof>programmes>materials>process>timeline>services>destinations|paper-sheet|utility", "industry": "landscaping", "hero": "service-led", "navigation": "left-sidebar", "layout": "image-led-chapters"};

export default function Template0906({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Landscape Company");
  const headline = String(content.headline || "Outdoor spaces designed for the site, the climate, and how clients actually use them.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Garden design", "Installation", "Maintenance", "Irrigation", "Outdoor lighting"];
  const industryLabel = "Landscape company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Landscape company / Project A", "Landscape company / Project B", "Landscape company / Project C", "Landscape company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Outdoor spaces designed for the site, the climate, and how clients actually use them. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0906" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0906{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0906 *{box-sizing:border-box}
.zp0906 a{color:inherit;text-decoration:none}
.zp0906 h1,.zp0906 h2,.zp0906 h3,.zp0906 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0906 img{max-width:100%;display:block}
.zp0906 button,.zp0906 a{-webkit-tap-highlight-color:transparent}
.zp0906 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0906 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0906 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0906 .mobileMenu{display:none}
.zp0906:has(.navRail)>.hero,.zp0906:has(.navRail)>.section,.zp0906:has(.navRail)>.contact,.zp0906:has(.navRail)>.footer{margin-left:190px}
.zp0906 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0906 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0906 .eyebrow,.zp0906 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0906 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0906 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0906 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0906 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0906 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0906 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0906 .serviceHeroList{display:grid;gap:4px}
.zp0906 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0906 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0906 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0906 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0906 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0906 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0906 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0906 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0906 .serviceGrid p{color:var(--muted)}
.zp0906 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0906 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0906 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0906 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0906 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0906 details{border-top:1px solid var(--border);padding:20px 0}
.zp0906 details summary{font-weight:800;cursor:pointer}
.zp0906 details p{color:var(--muted);max-width:70ch}
.zp0906 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0906 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0906 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0906 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0906 .timeline article{padding:20px 0}
.zp0906 .programmes>div:last-child,.zp0906 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0906 .programmes article,.zp0906 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0906 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0906 .contact .eyebrow{color:var(--bg)}
.zp0906 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0906 .contactMeta{display:grid;gap:10px}
.zp0906 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0906 .heroCopy{animation:enter-905 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-905{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0906 .hero{min-height:auto}
.zp0906 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0906 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0906 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0906 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0906 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0906 .mobileMenu nav a{padding:10px 8px}
.zp0906 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0906:has(.navRail)>.hero,.zp0906:has(.navRail)>.section,.zp0906:has(.navRail)>.contact,.zp0906:has(.navRail)>.footer{margin-left:0}
.zp0906 .hero,.zp0906 .serviceHero{grid-template-columns:1fr}
.zp0906 .section,.zp0906 .sectionTitle,.zp0906 .contact{grid-template-columns:1fr}
.zp0906 .section{display:block}}
@media(max-width:430px){.zp0906{font-size:16px}
.zp0906 .hero,.zp0906 .section,.zp0906 .contact{padding-left:18px;padding-right:18px}
.zp0906 .serviceGrid,.zp0906 .proof,.zp0906 .programmes>div:last-child,.zp0906 .destinations>div:last-child{grid-template-columns:1fr}
.zp0906 h1{font-size:clamp(42px,14vw,70px)}}

.zp0906 .heroActions a,.zp0906 .primary,.zp0906 .ctaBtn,.zp0906 .btnPrimary,.zp0906 .schedule>a,.zp0906 .newsletter>a{transition:all .2s ease}
.zp0906 .heroActions a:hover,.zp0906 .primary:hover,.zp0906 .ctaBtn:hover,.zp0906 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0906 nav a,.zp0906 .nav a,.zp0906 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0906 nav a:hover,.zp0906 .nav a:hover,.zp0906 .footer a:hover{
  color:var(--primary)
}
.zp0906 .serviceGrid article,.zp0906 .projectCard,.zp0906 .teamCard,.zp0906 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0906 .serviceGrid article:hover,.zp0906 .projectCard:hover,.zp0906 .teamCard:hover,.zp0906 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0906 *,.zp0906 *::before,.zp0906 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0906 a,.zp0906 button,.zp0906 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
