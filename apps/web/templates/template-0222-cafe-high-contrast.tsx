import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0222-cafe-high-contrast", "family": "High Contrast", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|image-led-chapters|gallery>materials>services>proof>case-study>integrations>values|circular|neo-grotesk", "industry": "cafe", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "image-led-chapters"};

export default function Template0222({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Cafe");
  const headline = String(content.headline || "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Espresso bar", "Breakfast", "Lunch", "House baking", "Catering"];
  const industryLabel = "Cafe";
  const serviceNotes = ["Single-origin espresso and filter programme sourced from farms we've visited.", "Pastries baked in-house each morning — what's there is what we made that day.", "Laptop-friendly with fast wifi and power at every seat.", "Outdoor terrace open from April through October, weather-permitting.", "Weekend brunch until 2pm with seasonal specials not on the regular menu."];
  const proofPoints = ["Specialty coffee certified", "In-house bakery", "Dog friendly", "Wifi and power included"];
  const testimonial = "I come here three times a week. The coffee is consistent, the staff know my order, and it's the one place I can actually get work done.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0222" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0222{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0222 *{box-sizing:border-box}
.zp0222 a{color:inherit;text-decoration:none}
.zp0222 h1,.zp0222 h2,.zp0222 h3,.zp0222 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0222 img{max-width:100%;display:block}
.zp0222 button,.zp0222 a{-webkit-tap-highlight-color:transparent}
.zp0222 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0222 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0222 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0222 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0222 .nav.cluster{align-items:flex-end}
.zp0222 .mobileMenu{display:none}
.zp0222 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0222 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0222 .eyebrow,.zp0222 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0222 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0222 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0222 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0222 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0222 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0222 .visual,.zp0222 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0222 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0222 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0222 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0222 .heroPhoto{object-fit:cover}
.zp0222 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0222 .circleHero{grid-template-columns:1fr 1fr}
.zp0222 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0222 .circleFrame>*{height:100%;border-radius:50%}
.zp0222 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0222 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0222 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0222 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0222 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0222 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0222 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0222 .serviceGrid p{color:var(--muted)}
.zp0222 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0222 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0222 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0222 details{border-top:1px solid var(--border);padding:20px 0}
.zp0222 details summary{font-weight:800;cursor:pointer}
.zp0222 details p{color:var(--muted);max-width:70ch}
.zp0222 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0222 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0222 .galleryGrid>*:first-child{grid-row:1/3}
.zp0222 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0222 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0222 .g2,.zp0222 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0222 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0222 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0222 .projects article:nth-child(2){transform:translateY(32px)}
.zp0222 .integrations,.zp0222 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0222 .integrations>div,.zp0222 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0222 .integrations b,.zp0222 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0222 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0222 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0222 .contact .eyebrow{color:var(--bg)}
.zp0222 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0222 .contactMeta{display:grid;gap:10px}
.zp0222 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0222 .heroCopy{animation:enter-221 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-221{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0222 .hero{min-height:auto}
.zp0222 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0222 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0222 .nav nav{display:none}
.zp0222 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0222 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0222 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0222 .mobileMenu nav a{padding:10px 8px}
.zp0222 .hero,.zp0222 .circleHero{grid-template-columns:1fr}
.zp0222 .section,.zp0222 .sectionTitle,.zp0222 .contact{grid-template-columns:1fr}
.zp0222 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0222 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0222 .projects .projectGrid{grid-template-columns:1fr}
.zp0222 .projects article:nth-child(2){transform:none}
.zp0222 .section{display:block}}
@media(max-width:430px){.zp0222{font-size:16px}
.zp0222 .hero,.zp0222 .section,.zp0222 .contact{padding-left:18px;padding-right:18px}
.zp0222 .serviceGrid,.zp0222 .proof{grid-template-columns:1fr}
.zp0222 h1{font-size:clamp(42px,14vw,70px)}
.zp0222 .galleryGrid{grid-template-columns:1fr}
.zp0222 .galleryGrid>*:first-child{grid-column:auto}}

.zp0222 .heroActions a,.zp0222 .primary,.zp0222 .ctaBtn,.zp0222 .btnPrimary,.zp0222 .schedule>a,.zp0222 .newsletter>a{transition:all .2s ease}
.zp0222 .heroActions a:hover,.zp0222 .primary:hover,.zp0222 .ctaBtn:hover,.zp0222 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0222 nav a,.zp0222 .nav a,.zp0222 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0222 nav a:hover,.zp0222 .nav a:hover,.zp0222 .footer a:hover{
  color:var(--primary)
}
.zp0222 .serviceGrid article,.zp0222 .projectCard,.zp0222 .teamCard,.zp0222 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0222 .serviceGrid article:hover,.zp0222 .projectCard:hover,.zp0222 .teamCard:hover,.zp0222 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0222 *,.zp0222 *::before,.zp0222 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0222 a,.zp0222 button,.zp0222 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">21</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
