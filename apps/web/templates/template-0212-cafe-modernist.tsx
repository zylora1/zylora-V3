import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0212-cafe-modernist", "family": "Modernist", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|booking-led|services>proof>security>pricing>destinations>awards|cut-corners|product-ui", "industry": "cafe", "hero": "product-led", "navigation": "transparent-overlay", "layout": "booking-led"};

export default function Template0212({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Cafe");
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
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0212" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0212{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0212 *{box-sizing:border-box}
.zp0212 a{color:inherit;text-decoration:none}
.zp0212 h1,.zp0212 h2,.zp0212 h3,.zp0212 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0212 img{max-width:100%;display:block}
.zp0212 button,.zp0212 a{-webkit-tap-highlight-color:transparent}
.zp0212 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0212 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0212 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0212 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0212 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0212 .mobileMenu{display:none}
.zp0212 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0212 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0212 .eyebrow,.zp0212 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0212 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0212 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0212 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0212 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0212 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0212 .visual,.zp0212 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0212 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0212 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0212 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0212 .heroPhoto{object-fit:cover}
.zp0212 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0212 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0212 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0212 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0212 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0212 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0212 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0212 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0212 .serviceGrid p{color:var(--muted)}
.zp0212 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0212 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0212 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0212 details{border-top:1px solid var(--border);padding:20px 0}
.zp0212 details summary{font-weight:800;cursor:pointer}
.zp0212 details p{color:var(--muted);max-width:70ch}
.zp0212 .priceRows{border-top:1px solid var(--border)}
.zp0212 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0212 .awards>div{max-width:800px;margin-left:auto}
.zp0212 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0212 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0212 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0212 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0212 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0212 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0212 .contact .eyebrow{color:var(--bg)}
.zp0212 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0212 .contactMeta{display:grid;gap:10px}
.zp0212 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0212 .heroCopy{animation:enter-211 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-211{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0212 .hero{min-height:auto}
.zp0212 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0212 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0212 .nav nav{display:none}
.zp0212 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0212 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0212 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0212 .mobileMenu nav a{padding:10px 8px}
.zp0212 .hero,.zp0212 .productLedHero{grid-template-columns:1fr}
.zp0212 .section,.zp0212 .sectionTitle,.zp0212 .security,.zp0212 .contact{grid-template-columns:1fr}
.zp0212 .section{display:block}}
@media(max-width:430px){.zp0212{font-size:16px}
.zp0212 .hero,.zp0212 .section,.zp0212 .contact{padding-left:18px;padding-right:18px}
.zp0212 .serviceGrid,.zp0212 .proof,.zp0212 .destinations>div:last-child{grid-template-columns:1fr}
.zp0212 h1{font-size:clamp(42px,14vw,70px)}
.zp0212 .priceRows article{grid-template-columns:1fr}}

.zp0212 .heroActions a,.zp0212 .primary,.zp0212 .ctaBtn,.zp0212 .btnPrimary,.zp0212 .schedule>a,.zp0212 .newsletter>a{transition:all .2s ease}
.zp0212 .heroActions a:hover,.zp0212 .primary:hover,.zp0212 .ctaBtn:hover,.zp0212 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0212 nav a,.zp0212 .nav a,.zp0212 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0212 nav a:hover,.zp0212 .nav a:hover,.zp0212 .footer a:hover{
  color:var(--primary)
}
.zp0212 .serviceGrid article,.zp0212 .projectCard,.zp0212 .teamCard,.zp0212 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0212 .serviceGrid article:hover,.zp0212 .projectCard:hover,.zp0212 .teamCard:hover,.zp0212 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0212 *,.zp0212 *::before,.zp0212 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0212 a,.zp0212 button,.zp0212 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">11</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
