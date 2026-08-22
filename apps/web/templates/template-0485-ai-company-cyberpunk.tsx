import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0485-ai-company-cyberpunk", "family": "Cyberpunk", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|case-study-led|services>proof>press>location>awards>menu|ticket-edge|condensed-editorial", "industry": "ai-company", "hero": "testimonial-led", "navigation": "lower-third", "layout": "case-study-led"};

export default function Template0485({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Ai Company");
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
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0485" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0485{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0485 *{box-sizing:border-box}
.zp0485 a{color:inherit;text-decoration:none}
.zp0485 h1,.zp0485 h2,.zp0485 h3,.zp0485 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0485 img{max-width:100%;display:block}
.zp0485 button,.zp0485 a{-webkit-tap-highlight-color:transparent}
.zp0485 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0485 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0485 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0485 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0485 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0485 .mobileMenu{display:none}
.zp0485 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0485 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0485 .eyebrow,.zp0485 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0485 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0485 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0485 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0485 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0485 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0485 .quoteHero{grid-template-columns:1fr 1fr}
.zp0485 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0485 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0485 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0485 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0485 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0485 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0485 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0485 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0485 .serviceGrid p{color:var(--muted)}
.zp0485 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0485 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0485 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0485 details{border-top:1px solid var(--border);padding:20px 0}
.zp0485 details summary{font-weight:800;cursor:pointer}
.zp0485 details p{color:var(--muted);max-width:70ch}
.zp0485 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0485 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0485 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0485 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0485 .awards>div{max-width:800px;margin-left:auto}
.zp0485 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0485 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0485 .contact .eyebrow{color:var(--bg)}
.zp0485 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0485 .contactMeta{display:grid;gap:10px}
.zp0485 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0485 .heroCopy{animation:enter-484 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-484{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0485 .hero{min-height:auto}
.zp0485 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0485 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0485 .nav nav{display:none}
.zp0485 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0485 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0485 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0485 .mobileMenu nav a{padding:10px 8px}
.zp0485 .hero,.zp0485 .quoteHero{grid-template-columns:1fr}
.zp0485 .section,.zp0485 .sectionTitle,.zp0485 .location,.zp0485 .contact{grid-template-columns:1fr}
.zp0485 .section{display:block}}
@media(max-width:430px){.zp0485{font-size:16px}
.zp0485 .hero,.zp0485 .section,.zp0485 .contact{padding-left:18px;padding-right:18px}
.zp0485 .serviceGrid,.zp0485 .proof{grid-template-columns:1fr}
.zp0485 h1{font-size:clamp(42px,14vw,70px)}}

.zp0485 .heroActions a,.zp0485 .primary,.zp0485 .ctaBtn,.zp0485 .btnPrimary,.zp0485 .schedule>a,.zp0485 .newsletter>a{transition:all .2s ease}
.zp0485 .heroActions a:hover,.zp0485 .primary:hover,.zp0485 .ctaBtn:hover,.zp0485 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0485 nav a,.zp0485 .nav a,.zp0485 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0485 nav a:hover,.zp0485 .nav a:hover,.zp0485 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0485 .serviceGrid article,.zp0485 .projectCard,.zp0485 .teamCard,.zp0485 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0485 .serviceGrid article:hover,.zp0485 .projectCard:hover,.zp0485 .teamCard:hover,.zp0485 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0485 *,.zp0485 *::before,.zp0485 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0485 a,.zp0485 button,.zp0485 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
