import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0419-insurance-scrapbook", "family": "Scrapbook", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|manifesto-grid|proof>menu>materials>services>metrics>press|inset-panel|editorial-serif", "industry": "insurance", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "manifesto-grid"};

export default function Template0419({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0419" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0419{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0419 *{box-sizing:border-box}
.zp0419 a{color:inherit;text-decoration:none}
.zp0419 h1,.zp0419 h2,.zp0419 h3,.zp0419 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0419 img{max-width:100%;display:block}
.zp0419 button,.zp0419 a{-webkit-tap-highlight-color:transparent}
.zp0419 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0419 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0419 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0419 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0419 .mobileMenu{display:none}
.zp0419 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0419 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0419 .eyebrow,.zp0419 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0419 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0419 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0419 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0419 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0419 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0419 .visual,.zp0419 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0419 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0419 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0419 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0419 .heroPhoto{object-fit:cover}
.zp0419 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0419 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0419 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0419 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0419 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0419 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0419 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0419 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0419 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0419 .serviceGrid p{color:var(--muted)}
.zp0419 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0419 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0419 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0419 details{border-top:1px solid var(--border);padding:20px 0}
.zp0419 details summary{font-weight:800;cursor:pointer}
.zp0419 details p{color:var(--muted);max-width:70ch}
.zp0419 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0419 .metrics div{background:var(--bg);padding:30px}
.zp0419 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Georgia, serif;color:var(--primary)}
.zp0419 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0419 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0419 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0419 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0419 .awards>div{max-width:800px;margin-left:auto}
.zp0419 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0419 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0419 .contact .eyebrow{color:var(--bg)}
.zp0419 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0419 .contactMeta{display:grid;gap:10px}
.zp0419 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0419{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0419 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0419 .heroCopy{animation:enter-418 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-418{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0419 .hero{min-height:auto}
.zp0419 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0419 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0419 .nav nav{display:none}
.zp0419 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0419 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0419 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0419 .mobileMenu nav a{padding:10px 8px}
.zp0419 .hero,.zp0419 .diagonalHero{grid-template-columns:1fr}
.zp0419 .section,.zp0419 .sectionTitle,.zp0419 .contact{grid-template-columns:1fr}
.zp0419 .metrics{grid-template-columns:1fr 1fr}
.zp0419 .section{display:block}}
@media(max-width:430px){.zp0419{font-size:16px}
.zp0419 .hero,.zp0419 .section,.zp0419 .contact{padding-left:18px;padding-right:18px}
.zp0419 .serviceGrid,.zp0419 .proof,.zp0419 .metrics{grid-template-columns:1fr}
.zp0419 h1{font-size:clamp(42px,14vw,70px)}}

.zp0419 .heroActions a,.zp0419 .primary,.zp0419 .ctaBtn,.zp0419 .btnPrimary,.zp0419 .schedule>a,.zp0419 .newsletter>a{transition:all .2s ease}
.zp0419 .heroActions a:hover,.zp0419 .primary:hover,.zp0419 .ctaBtn:hover,.zp0419 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0419 nav a,.zp0419 .nav a,.zp0419 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0419 nav a:hover,.zp0419 .nav a:hover,.zp0419 .footer a:hover{
  color:var(--primary)
}
.zp0419 .serviceGrid article,.zp0419 .projectCard,.zp0419 .teamCard,.zp0419 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0419 .serviceGrid article:hover,.zp0419 .projectCard:hover,.zp0419 .teamCard:hover,.zp0419 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0419 *,.zp0419 *::before,.zp0419 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0419 a,.zp0419 button,.zp0419 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">18</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
