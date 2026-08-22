import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0582-fashion-immersive-portfolio", "family": "Immersive Portfolio", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|image-led-chapters|awards>features>proof>case-study>security>destinations>services|pill-controls|neo-grotesk", "industry": "fashion", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "image-led-chapters"};

export default function Template0582({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Fashion Label");
  const headline = String(content.headline || "A strong point of view expressed through silhouette, material, and considered detail.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New collection", "Ready-to-wear", "Accessories", "Editorial", "Stockists"];
  const industryLabel = "Fashion label";
  const serviceNotes = ["Seasonal collections designed in-house with full lookbook photography managed.", "Made-to-order service with a 3-week lead time and fitting appointment included.", "Sustainable material sourcing: certified organic, deadstock, and recycled options.", "Wholesale programme with minimum order quantities designed for independent retailers.", "Alteration and repair service for garments you love but that need adapting."];
  const proofPoints = ["B Corp certified", "100% traceable supply chain", "Press: Vogue, Wallpaper", "Ships to 40+ countries"];
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0582" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0582{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0582 *{box-sizing:border-box}
.zp0582 a{color:inherit;text-decoration:none}
.zp0582 h1,.zp0582 h2,.zp0582 h3,.zp0582 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0582 img{max-width:100%;display:block}
.zp0582 button,.zp0582 a{-webkit-tap-highlight-color:transparent}
.zp0582 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0582 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0582 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0582 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0582 .mobileMenu{display:none}
.zp0582 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0582 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0582 .eyebrow,.zp0582 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0582 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0582 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0582 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0582 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0582 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0582 .visual,.zp0582 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0582 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0582 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0582 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0582 .heroPhoto{object-fit:cover}
.zp0582 .cinematic{padding:0;min-height:100vh}
.zp0582 .cinematic>.heroPhoto,.zp0582 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0582 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0582 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0582 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0582 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0582 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0582 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0582 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0582 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0582 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0582 .serviceGrid p{color:var(--muted)}
.zp0582 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0582 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0582 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0582 details{border-top:1px solid var(--border);padding:20px 0}
.zp0582 details summary{font-weight:800;cursor:pointer}
.zp0582 details p{color:var(--muted);max-width:70ch}
.zp0582 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0582 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0582 .projects article:nth-child(2){transform:translateY(32px)}
.zp0582 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0582 .features ul{list-style:none;margin:0;padding:0}
.zp0582 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0582 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0582 .awards>div{max-width:800px;margin-left:auto}
.zp0582 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0582 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0582 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0582 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0582 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0582 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0582 .contact .eyebrow{color:var(--bg)}
.zp0582 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0582 .contactMeta{display:grid;gap:10px}
.zp0582 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0582 .heroCopy{animation:enter-581 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-581{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0582 .hero{min-height:auto}
.zp0582 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0582 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0582 .nav nav{display:none}
.zp0582 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0582 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0582 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0582 .mobileMenu nav a{padding:10px 8px}
.zp0582 .hero{grid-template-columns:1fr}
.zp0582 .section,.zp0582 .sectionTitle,.zp0582 .features,.zp0582 .security,.zp0582 .contact{grid-template-columns:1fr}
.zp0582 .projects .projectGrid{grid-template-columns:1fr}
.zp0582 .projects article:nth-child(2){transform:none}
.zp0582 .section{display:block}}
@media(max-width:430px){.zp0582{font-size:16px}
.zp0582 .hero,.zp0582 .section,.zp0582 .contact{padding-left:18px;padding-right:18px}
.zp0582 .serviceGrid,.zp0582 .proof,.zp0582 .destinations>div:last-child{grid-template-columns:1fr}
.zp0582 h1{font-size:clamp(42px,14vw,70px)}}

.zp0582 .heroActions a,.zp0582 .primary,.zp0582 .ctaBtn,.zp0582 .btnPrimary,.zp0582 .schedule>a,.zp0582 .newsletter>a{transition:all .2s ease}
.zp0582 .heroActions a:hover,.zp0582 .primary:hover,.zp0582 .ctaBtn:hover,.zp0582 .btnPrimary:hover{
  opacity:.8
}
.zp0582 nav a,.zp0582 .nav a,.zp0582 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0582 nav a:hover,.zp0582 .nav a:hover,.zp0582 .footer a:hover{
  opacity:.65
}
.zp0582 .serviceGrid article,.zp0582 .projectCard,.zp0582 .teamCard,.zp0582 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0582 .serviceGrid article:hover,.zp0582 .projectCard:hover,.zp0582 .teamCard:hover,.zp0582 .bentoCard:hover{
  transform:scale(1.03)
}
@media(prefers-reduced-motion:reduce){.zp0582 *,.zp0582 *::before,.zp0582 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0582 a,.zp0582 button,.zp0582 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">81</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Immersive Portfolio / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
