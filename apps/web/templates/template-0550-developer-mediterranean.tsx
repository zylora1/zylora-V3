import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0550-developer-mediterranean", "family": "Mediterranean", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|service-catalogue|availability>services>integrations>proof>manifesto|pill-controls|warm-editorial", "industry": "developer", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "service-catalogue"};

export default function Template0550({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Developer Portfolio");
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
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0550" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0550{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0550 *{box-sizing:border-box}
.zp0550 a{color:inherit;text-decoration:none}
.zp0550 h1,.zp0550 h2,.zp0550 h3,.zp0550 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0550 img{max-width:100%;display:block}
.zp0550 button,.zp0550 a{-webkit-tap-highlight-color:transparent}
.zp0550 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0550 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0550 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0550 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0550 .mobileMenu{display:none}
.zp0550 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0550 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0550 .eyebrow,.zp0550 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0550 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0550 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0550 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0550 .heroActions a,.zp0550 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0550 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0550 .visual,.zp0550 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0550 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0550 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0550 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0550 .heroPhoto{object-fit:cover}
.zp0550 .cinematic{padding:0;min-height:100vh}
.zp0550 .cinematic>.heroPhoto,.zp0550 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0550 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0550 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0550 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0550 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0550 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0550 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0550 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0550 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0550 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0550 .serviceGrid p{color:var(--muted)}
.zp0550 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0550 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0550 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0550 details{border-top:1px solid var(--border);padding:20px 0}
.zp0550 details summary{font-weight:800;cursor:pointer}
.zp0550 details p{color:var(--muted);max-width:70ch}
.zp0550 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0550 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0550 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0550 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0550 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Palatino Linotype, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0550 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0550 .contact .eyebrow{color:var(--bg)}
.zp0550 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0550 .contactMeta{display:grid;gap:10px}
.zp0550 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0550 .heroCopy{animation:enter-549 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-549{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0550 .hero{min-height:auto}
.zp0550 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0550 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0550 .nav nav{display:none}
.zp0550 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0550 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0550 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0550 .mobileMenu nav a{padding:10px 8px}
.zp0550 .hero{grid-template-columns:1fr}
.zp0550 .section,.zp0550 .sectionTitle,.zp0550 .contact{grid-template-columns:1fr}
.zp0550 .section{display:block}}
@media(max-width:430px){.zp0550{font-size:16px}
.zp0550 .hero,.zp0550 .section,.zp0550 .contact{padding-left:18px;padding-right:18px}
.zp0550 .serviceGrid,.zp0550 .proof{grid-template-columns:1fr}
.zp0550 h1{font-size:clamp(42px,14vw,70px)}}

.zp0550 .heroActions a,.zp0550 .primary,.zp0550 .ctaBtn,.zp0550 .btnPrimary,.zp0550 .schedule>a,.zp0550 .newsletter>a{transition:all .2s ease}
.zp0550 .heroActions a:hover,.zp0550 .primary:hover,.zp0550 .ctaBtn:hover,.zp0550 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0550 nav a,.zp0550 .nav a,.zp0550 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0550 nav a:hover,.zp0550 .nav a:hover,.zp0550 .footer a:hover{
  color:var(--primary)
}
.zp0550 .serviceGrid article,.zp0550 .projectCard,.zp0550 .teamCard,.zp0550 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0550 .serviceGrid article:hover,.zp0550 .projectCard:hover,.zp0550 .teamCard:hover,.zp0550 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0550 *,.zp0550 *::before,.zp0550 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0550 a,.zp0550 button,.zp0550 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">49</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Mediterranean / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
