import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0546-developer-friendly-local-business", "family": "Friendly Local Business", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|image-led-chapters|services>programmes>research>integrations>case-study>proof>manifesto|borderless|utility", "industry": "developer", "hero": "layered-photography", "navigation": "tabbed", "layout": "image-led-chapters"};

export default function Template0546({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Developer Portfolio");
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
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0546" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0546{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0546 *{box-sizing:border-box}
.zp0546 a{color:inherit;text-decoration:none}
.zp0546 h1,.zp0546 h2,.zp0546 h3,.zp0546 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0546 img{max-width:100%;display:block}
.zp0546 button,.zp0546 a{-webkit-tap-highlight-color:transparent}
.zp0546 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0546 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0546 .nav strong{font-family:Verdana, sans-serif;font-size:18px}
.zp0546 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0546 .mobileMenu{display:none}
.zp0546 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0546 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0546 .eyebrow,.zp0546 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0546 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0546 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0546 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0546 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0546 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0546 .visual,.zp0546 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0546 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0546 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0546 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0546 .heroPhoto{object-fit:cover}
.zp0546 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0546 .layered{position:relative;padding:8%}
.zp0546 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0546 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0546 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0546 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0546 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0546 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0546 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0546 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0546 .serviceGrid p{color:var(--muted)}
.zp0546 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0546 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0546 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0546 details{border-top:1px solid var(--border);padding:20px 0}
.zp0546 details summary{font-weight:800;cursor:pointer}
.zp0546 details p{color:var(--muted);max-width:70ch}
.zp0546 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0546 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0546 .projects article:nth-child(2){transform:translateY(32px)}
.zp0546 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0546 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0546 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0546 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Verdana, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0546 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0546 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0546 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0546 .researchRows{max-width:900px;margin-left:auto}
.zp0546 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0546 .contact .eyebrow{color:var(--bg)}
.zp0546 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0546 .contactMeta{display:grid;gap:10px}
.zp0546 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0546 .heroCopy{animation:enter-545 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-545{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0546 .hero{min-height:auto}
.zp0546 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0546 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0546 .nav nav{display:none}
.zp0546 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0546 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0546 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0546 .mobileMenu nav a{padding:10px 8px}
.zp0546 .hero,.zp0546 .layeredHero{grid-template-columns:1fr}
.zp0546 .section,.zp0546 .sectionTitle,.zp0546 .contact{grid-template-columns:1fr}
.zp0546 .projects .projectGrid{grid-template-columns:1fr}
.zp0546 .projects article:nth-child(2){transform:none}
.zp0546 .section{display:block}}
@media(max-width:430px){.zp0546{font-size:16px}
.zp0546 .hero,.zp0546 .section,.zp0546 .contact{padding-left:18px;padding-right:18px}
.zp0546 .serviceGrid,.zp0546 .proof,.zp0546 .programmes>div:last-child{grid-template-columns:1fr}
.zp0546 h1{font-size:clamp(42px,14vw,70px)}}

.zp0546 .heroActions a,.zp0546 .primary,.zp0546 .ctaBtn,.zp0546 .btnPrimary,.zp0546 .schedule>a,.zp0546 .newsletter>a{transition:all .2s ease}
.zp0546 .heroActions a:hover,.zp0546 .primary:hover,.zp0546 .ctaBtn:hover,.zp0546 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0546 nav a,.zp0546 .nav a,.zp0546 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0546 nav a:hover,.zp0546 .nav a:hover,.zp0546 .footer a:hover{
  color:var(--primary)
}
.zp0546 .serviceGrid article,.zp0546 .projectCard,.zp0546 .teamCard,.zp0546 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0546 .serviceGrid article:hover,.zp0546 .projectCard:hover,.zp0546 .teamCard:hover,.zp0546 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0546 *,.zp0546 *::before,.zp0546 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0546 a,.zp0546 button,.zp0546 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">45</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
