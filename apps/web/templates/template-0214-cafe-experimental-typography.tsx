import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0214-cafe-experimental-typography", "family": "Experimental Typography", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|local-service-map|services>newsletter>menu>integrations>proof|pill-controls|warm-editorial", "industry": "cafe", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "local-service-map"};

export default function Template0214({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Cafe");
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
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0214" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0214{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0214 *{box-sizing:border-box}
.zp0214 a{color:inherit;text-decoration:none}
.zp0214 h1,.zp0214 h2,.zp0214 h3,.zp0214 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0214 img{max-width:100%;display:block}
.zp0214 button,.zp0214 a{-webkit-tap-highlight-color:transparent}
.zp0214 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0214 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0214 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0214 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0214 .mobileMenu{display:none}
.zp0214 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0214 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0214 .eyebrow,.zp0214 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0214 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0214 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0214 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0214 .heroActions a,.zp0214 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0214 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0214 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0214 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0214 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0214 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0214 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0214 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0214 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0214 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0214 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0214 .serviceGrid p{color:var(--muted)}
.zp0214 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0214 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0214 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0214 details{border-top:1px solid var(--border);padding:20px 0}
.zp0214 details summary{font-weight:800;cursor:pointer}
.zp0214 details p{color:var(--muted);max-width:70ch}
.zp0214 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0214 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0214 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0214 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0214 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0214 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0214 .contact .eyebrow{color:var(--bg)}
.zp0214 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0214 .contactMeta{display:grid;gap:10px}
.zp0214 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0214 .heroCopy{animation:enter-213 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-213{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0214 .hero{min-height:auto}
.zp0214 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0214 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0214 .nav nav{display:none}
.zp0214 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0214 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0214 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0214 .mobileMenu nav a{padding:10px 8px}
.zp0214 .hero,.zp0214 .timelineHero{grid-template-columns:1fr}
.zp0214 .section,.zp0214 .sectionTitle,.zp0214 .contact{grid-template-columns:1fr}
.zp0214 .section{display:block}}
@media(max-width:430px){.zp0214{font-size:16px}
.zp0214 .hero,.zp0214 .section,.zp0214 .contact{padding-left:18px;padding-right:18px}
.zp0214 .serviceGrid,.zp0214 .proof{grid-template-columns:1fr}
.zp0214 h1{font-size:clamp(42px,14vw,70px)}}

.zp0214 .heroActions a,.zp0214 .primary,.zp0214 .ctaBtn,.zp0214 .btnPrimary,.zp0214 .schedule>a,.zp0214 .newsletter>a{transition:all .2s ease}
.zp0214 .heroActions a:hover,.zp0214 .primary:hover,.zp0214 .ctaBtn:hover,.zp0214 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0214 nav a,.zp0214 .nav a,.zp0214 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0214 nav a:hover,.zp0214 .nav a:hover,.zp0214 .footer a:hover{
  letter-spacing:.12em
}
.zp0214 .serviceGrid article,.zp0214 .projectCard,.zp0214 .teamCard,.zp0214 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0214 .serviceGrid article:hover,.zp0214 .projectCard:hover,.zp0214 .teamCard:hover,.zp0214 .bentoCard:hover{
  transform:skewX(-2deg)
}
@media(prefers-reduced-motion:reduce){.zp0214 *,.zp0214 *::before,.zp0214 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0214 a,.zp0214 button,.zp0214 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Experimental Typography / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
