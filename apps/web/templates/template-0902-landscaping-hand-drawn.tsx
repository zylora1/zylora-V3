import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0902-landscaping-hand-drawn", "family": "Hand-drawn", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|full-bleed-chapters|services>proof>metrics>programmes>pricing>press|pill-controls|ceremonial", "industry": "landscaping", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "full-bleed-chapters"};

export default function Template0902({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Landscape Company");
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
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Landscape company / Project A", "Landscape company / Project B", "Landscape company / Project C", "Landscape company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Outdoor spaces designed for the site, the climate, and how clients actually use them. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0902" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0902{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0902 *{box-sizing:border-box}
.zp0902 a{color:inherit;text-decoration:none}
.zp0902 h1,.zp0902 h2,.zp0902 h3,.zp0902 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0902 img{max-width:100%;display:block}
.zp0902 button,.zp0902 a{-webkit-tap-highlight-color:transparent}
.zp0902 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0902 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0902 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0902 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0902 .mobileMenu{display:none}
.zp0902 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0902 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0902 .eyebrow,.zp0902 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0902 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0902 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0902 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0902 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0902 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0902 .visual,.zp0902 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0902 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0902 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0902 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0902 .heroPhoto{object-fit:cover}
.zp0902 .cinematic{padding:0;min-height:100vh}
.zp0902 .cinematic>.heroPhoto,.zp0902 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0902 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0902 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0902 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0902 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0902 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0902 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0902 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0902 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0902 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0902 .serviceGrid p{color:var(--muted)}
.zp0902 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0902 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0902 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0902 details{border-top:1px solid var(--border);padding:20px 0}
.zp0902 details summary{font-weight:800;cursor:pointer}
.zp0902 details p{color:var(--muted);max-width:70ch}
.zp0902 .priceRows{border-top:1px solid var(--border)}
.zp0902 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0902 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0902 .metrics div{background:var(--bg);padding:30px}
.zp0902 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Copperplate, Georgia, serif;color:var(--primary)}
.zp0902 .awards>div{max-width:800px;margin-left:auto}
.zp0902 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0902 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0902 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0902 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0902 .contact .eyebrow{color:var(--bg)}
.zp0902 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0902 .contactMeta{display:grid;gap:10px}
.zp0902 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0902 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
@media(max-width:1024px){.zp0902 .hero{min-height:auto}
.zp0902 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0902 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0902 .nav nav{display:none}
.zp0902 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0902 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0902 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0902 .mobileMenu nav a{padding:10px 8px}
.zp0902 .hero{grid-template-columns:1fr}
.zp0902 .section,.zp0902 .sectionTitle,.zp0902 .contact{grid-template-columns:1fr}
.zp0902 .metrics{grid-template-columns:1fr 1fr}
.zp0902 .section{display:block}}
@media(max-width:430px){.zp0902{font-size:16px}
.zp0902 .hero,.zp0902 .section,.zp0902 .contact{padding-left:18px;padding-right:18px}
.zp0902 .serviceGrid,.zp0902 .proof,.zp0902 .metrics,.zp0902 .programmes>div:last-child{grid-template-columns:1fr}
.zp0902 h1{font-size:clamp(42px,14vw,70px)}
.zp0902 .priceRows article{grid-template-columns:1fr}}

.zp0902 .heroActions a,.zp0902 .primary,.zp0902 .ctaBtn,.zp0902 .btnPrimary,.zp0902 .schedule>a,.zp0902 .newsletter>a{transition:all .2s ease}
.zp0902 .heroActions a:hover,.zp0902 .primary:hover,.zp0902 .ctaBtn:hover,.zp0902 .btnPrimary:hover{
  opacity:.8;text-decoration:underline wavy
}
.zp0902 nav a,.zp0902 .nav a,.zp0902 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0902 nav a:hover,.zp0902 .nav a:hover,.zp0902 .footer a:hover{
  opacity:.7
}
.zp0902 .serviceGrid article,.zp0902 .projectCard,.zp0902 .teamCard,.zp0902 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0902 .serviceGrid article:hover,.zp0902 .projectCard:hover,.zp0902 .teamCard:hover,.zp0902 .bentoCard:hover{
  transform:scale(1.02)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0902 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0902 .sectionTitle,.zp0902 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0902 *,.zp0902 *::before,.zp0902 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0902 a,.zp0902 button,.zp0902 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">01</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Hand-drawn / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
