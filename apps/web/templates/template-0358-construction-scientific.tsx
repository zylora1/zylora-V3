import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0358-construction-scientific", "family": "Scientific", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|local-service-map|materials>schedule>security>proof>services|pill-controls|warm-editorial", "industry": "construction", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "local-service-map"};

export default function Template0358({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Construction Company");
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
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0358" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0358{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0358 *{box-sizing:border-box}
.zp0358 a{color:inherit;text-decoration:none}
.zp0358 h1,.zp0358 h2,.zp0358 h3,.zp0358 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0358 img{max-width:100%;display:block}
.zp0358 button,.zp0358 a{-webkit-tap-highlight-color:transparent}
.zp0358 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0358 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0358 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0358 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0358 .mobileMenu{display:none}
.zp0358 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0358 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0358 .eyebrow,.zp0358 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0358 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0358 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0358 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0358 .heroActions a,.zp0358 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0358 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0358 .visual,.zp0358 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0358 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0358 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0358 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0358 .heroPhoto{object-fit:cover}
.zp0358 .cinematic{padding:0;min-height:100vh}
.zp0358 .cinematic>.heroPhoto,.zp0358 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0358 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0358 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0358 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0358 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0358 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0358 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0358 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0358 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0358 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0358 .serviceGrid p{color:var(--muted)}
.zp0358 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0358 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0358 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0358 details{border-top:1px solid var(--border);padding:20px 0}
.zp0358 details summary{font-weight:800;cursor:pointer}
.zp0358 details p{color:var(--muted);max-width:70ch}
.zp0358 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0358 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0358 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0358 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0358 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0358 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0358 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0358 .contact .eyebrow{color:var(--bg)}
.zp0358 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0358 .contactMeta{display:grid;gap:10px}
.zp0358 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0358 .heroCopy{animation:enter-357 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-357{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0358 .hero{min-height:auto}
.zp0358 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0358 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0358 .nav nav{display:none}
.zp0358 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0358 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0358 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0358 .mobileMenu nav a{padding:10px 8px}
.zp0358 .hero{grid-template-columns:1fr}
.zp0358 .section,.zp0358 .sectionTitle,.zp0358 .security,.zp0358 .contact{grid-template-columns:1fr}
.zp0358 .section{display:block}}
@media(max-width:430px){.zp0358{font-size:16px}
.zp0358 .hero,.zp0358 .section,.zp0358 .contact{padding-left:18px;padding-right:18px}
.zp0358 .serviceGrid,.zp0358 .proof{grid-template-columns:1fr}
.zp0358 h1{font-size:clamp(42px,14vw,70px)}}

.zp0358 .heroActions a,.zp0358 .primary,.zp0358 .ctaBtn,.zp0358 .btnPrimary,.zp0358 .schedule>a,.zp0358 .newsletter>a{transition:all .2s ease}
.zp0358 .heroActions a:hover,.zp0358 .primary:hover,.zp0358 .ctaBtn:hover,.zp0358 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0358 nav a,.zp0358 .nav a,.zp0358 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0358 nav a:hover,.zp0358 .nav a:hover,.zp0358 .footer a:hover{
  color:var(--primary)
}
.zp0358 .serviceGrid article,.zp0358 .projectCard,.zp0358 .teamCard,.zp0358 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0358 .serviceGrid article:hover,.zp0358 .projectCard:hover,.zp0358 .teamCard:hover,.zp0358 .bentoCard:hover{
  border-left:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0358 *,.zp0358 *::before,.zp0358 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0358 a,.zp0358 button,.zp0358 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">57</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scientific / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
