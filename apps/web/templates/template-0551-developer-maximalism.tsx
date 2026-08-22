import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0551-developer-maximalism", "family": "Maximalism", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|press-led|proof>services>newsletter>integrations>credentials>menu|asymmetric-radius|clean-humanist", "industry": "developer", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "press-led"};

export default function Template0551({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Developer Portfolio");
  const headline = String(content.headline || "A focused record of shipped software, technical decisions, and measurable impact.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product work", "Open source", "Technical writing", "Speaking", "Consulting"];
  const industryLabel = "Developer portfolio";
  const serviceNotes = ["Full-stack capability: from database architecture to accessible frontend interfaces.", "Open-source contributors with real community credibility and public track record.", "Performance-first: Lighthouse scores reviewed and targets agreed before launch.", "Accessibility to WCAG 2.2 AA as a baseline requirement, not an optional extra.", "Retainer options for ongoing development, features, and maintenance."];
  const proofPoints = ["Core Web Vitals: all green", "WCAG 2.2 AA standard", "GitHub: 2,000+ contributions", "8-year average tenure"];
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0551" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0551{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0551 *{box-sizing:border-box}
.zp0551 a{color:inherit;text-decoration:none}
.zp0551 h1,.zp0551 h2,.zp0551 h3,.zp0551 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0551 img{max-width:100%;display:block}
.zp0551 button,.zp0551 a{-webkit-tap-highlight-color:transparent}
.zp0551 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0551 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0551 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0551 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0551 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0551 .nav.index nav{justify-content:flex-end}
.zp0551 .mobileMenu{display:none}
.zp0551 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0551 .eyebrow,.zp0551 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0551 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0551 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0551 .minimalHero{display:block;min-height:74vh}
.zp0551 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0551 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0551 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0551 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0551 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0551 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0551 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0551 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0551 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0551 .serviceGrid p{color:var(--muted)}
.zp0551 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0551 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0551 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0551 details{border-top:1px solid var(--border);padding:20px 0}
.zp0551 details summary{font-weight:800;cursor:pointer}
.zp0551 details p{color:var(--muted);max-width:70ch}
.zp0551 .credentials,.zp0551 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0551 .credentials>div,.zp0551 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0551 .credentials b,.zp0551 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0551 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0551 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0551 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0551 .contact .eyebrow{color:var(--bg)}
.zp0551 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0551 .contactMeta{display:grid;gap:10px}
.zp0551 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0551 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(10deg)}
@keyframes enter-550{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0551 .hero{min-height:auto}
.zp0551 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0551 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0551 .nav nav{display:none}
.zp0551 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0551 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0551 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0551 .mobileMenu nav a{padding:10px 8px}
.zp0551 .hero{grid-template-columns:1fr}
.zp0551 .section,.zp0551 .sectionTitle,.zp0551 .contact{grid-template-columns:1fr}
.zp0551 .section{display:block}}
@media(max-width:430px){.zp0551{font-size:16px}
.zp0551 .hero,.zp0551 .section,.zp0551 .contact{padding-left:18px;padding-right:18px}
.zp0551 .serviceGrid,.zp0551 .proof{grid-template-columns:1fr}
.zp0551 h1{font-size:clamp(42px,14vw,70px)}
.zp0551 .minimalFoot{grid-template-columns:1fr}
.zp0551 .nav.index{grid-template-columns:1fr auto}
.zp0551 .nav.index>span{display:none}}

.zp0551 .heroActions a,.zp0551 .primary,.zp0551 .ctaBtn,.zp0551 .btnPrimary,.zp0551 .schedule>a,.zp0551 .newsletter>a{transition:all .2s ease}
.zp0551 .heroActions a:hover,.zp0551 .primary:hover,.zp0551 .ctaBtn:hover,.zp0551 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0551 nav a,.zp0551 .nav a,.zp0551 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0551 nav a:hover,.zp0551 .nav a:hover,.zp0551 .footer a:hover{
  color:var(--primary)
}
.zp0551 .serviceGrid article,.zp0551 .projectCard,.zp0551 .teamCard,.zp0551 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0551 .serviceGrid article:hover,.zp0551 .projectCard:hover,.zp0551 .teamCard:hover,.zp0551 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0551 *,.zp0551 *::before,.zp0551 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0551 a,.zp0551 button,.zp0551 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Shop the collection</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
