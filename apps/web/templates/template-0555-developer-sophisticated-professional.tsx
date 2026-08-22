import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0555-developer-sophisticated-professional", "family": "Sophisticated Professional", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|product-journey|proof>awards>services>packages>menu>materials>gallery|capsule|poster", "industry": "developer", "hero": "split-image", "navigation": "statement-bar", "layout": "product-journey"};

export default function Template0555({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Developer Portfolio");
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
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  return <main className="zp0555" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0555{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0555 *{box-sizing:border-box}
.zp0555 a{color:inherit;text-decoration:none}
.zp0555 h1,.zp0555 h2,.zp0555 h3,.zp0555 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0555 img{max-width:100%;display:block}
.zp0555 button,.zp0555 a{-webkit-tap-highlight-color:transparent}
.zp0555 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0555 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0555 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0555 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0555 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0555 .nav.statement>a{justify-self:end}
.zp0555 .mobileMenu{display:none}
.zp0555 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0555 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0555 .eyebrow,.zp0555 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0555 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0555 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0555 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0555 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0555 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0555 .visual,.zp0555 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0555 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0555 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0555 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0555 .heroPhoto{object-fit:cover}
.zp0555 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0555 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0555 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0555 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0555 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0555 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0555 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0555 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0555 .serviceGrid p{color:var(--muted)}
.zp0555 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0555 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0555 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0555 details{border-top:1px solid var(--border);padding:20px 0}
.zp0555 details summary{font-weight:800;cursor:pointer}
.zp0555 details p{color:var(--muted);max-width:70ch}
.zp0555 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0555 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0555 .galleryGrid>*:first-child{grid-row:1/3}
.zp0555 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0555 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0555 .g2,.zp0555 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0555 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0555 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0555 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0555 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0555 .awards>div{max-width:800px;margin-left:auto}
.zp0555 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0555 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0555 .packages>.sectionTitle{grid-column:1/-1}
.zp0555 .packages article{padding:24px;border:1px solid var(--border)}
.zp0555 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0555 .contact .eyebrow{color:var(--bg)}
.zp0555 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0555 .contactMeta{display:grid;gap:10px}
.zp0555 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0555 .heroCopy{animation:enter-554 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-554{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0555 .hero{min-height:auto}
.zp0555 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0555 .proof{grid-template-columns:1fr 1fr}
.zp0555 .packages{grid-template-columns:1fr 1fr}
.zp0555 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0555 .nav nav{display:none}
.zp0555 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0555 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0555 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0555 .mobileMenu nav a{padding:10px 8px}
.zp0555 .hero,.zp0555 .splitHero{grid-template-columns:1fr}
.zp0555 .section,.zp0555 .sectionTitle,.zp0555 .contact{grid-template-columns:1fr}
.zp0555 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0555 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0555 .section{display:block}}
@media(max-width:430px){.zp0555{font-size:16px}
.zp0555 .hero,.zp0555 .section,.zp0555 .contact{padding-left:18px;padding-right:18px}
.zp0555 .serviceGrid,.zp0555 .proof,.zp0555 .packages{grid-template-columns:1fr}
.zp0555 h1{font-size:clamp(42px,14vw,70px)}
.zp0555 .galleryGrid{grid-template-columns:1fr}
.zp0555 .galleryGrid>*:first-child{grid-column:auto}
.zp0555 .nav.statement{grid-template-columns:1fr auto}
.zp0555 .nav.statement>span:first-child{display:none}}

.zp0555 .heroActions a,.zp0555 .primary,.zp0555 .ctaBtn,.zp0555 .btnPrimary,.zp0555 .schedule>a,.zp0555 .newsletter>a{transition:all .2s ease}
.zp0555 .heroActions a:hover,.zp0555 .primary:hover,.zp0555 .ctaBtn:hover,.zp0555 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0555 nav a,.zp0555 .nav a,.zp0555 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0555 nav a:hover,.zp0555 .nav a:hover,.zp0555 .footer a:hover{
  color:var(--primary)
}
.zp0555 .serviceGrid article,.zp0555 .projectCard,.zp0555 .teamCard,.zp0555 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0555 .serviceGrid article:hover,.zp0555 .projectCard:hover,.zp0555 .teamCard:hover,.zp0555 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0555 *,.zp0555 *::before,.zp0555 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0555 a,.zp0555 button,.zp0555 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">54</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
