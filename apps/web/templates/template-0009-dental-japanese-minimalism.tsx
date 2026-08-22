import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0009-dental-japanese-minimalism", "family": "Japanese Minimalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|community-led|metrics>gallery>menu>proof>destinations>integrations>services|hairline|slab", "industry": "dental", "hero": "poster", "navigation": "fullscreen-menu", "layout": "community-led"};

export default function Template0009({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Dental Practice");
  const headline = String(content.headline || "Calm dentistry with clear explanations and time for questions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Preventive exams", "Restorative dentistry", "Invisalign consultations", "Emergency appointments", "Cosmetic dentistry"];
  const industryLabel = "Dental practice";
  const serviceNotes = ["Gentle, thorough care explained step by step so you always know what to expect.", "Modern techniques with minimal discomfort — your comfort guides every decision.", "Clear treatment plans with transparent costs before any work begins.", "Emergency slots kept available every day for urgent dental needs.", "Cosmetic results that enhance your smile without erasing what makes it yours."];
  const proofPoints = ["GDC registered practitioners", "Digital X-rays, same session", "Transparent fee schedule", "Same-day emergency care"];
  const testimonial = "I had avoided dentists for years. The team here explained everything before touching anything — completely changed my experience.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0009" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0009{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:0px;--shadow:none;--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0009 *{box-sizing:border-box}
.zp0009 a{color:inherit;text-decoration:none}
.zp0009 h1,.zp0009 h2,.zp0009 h3,.zp0009 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0009 img{max-width:100%;display:block}
.zp0009 button,.zp0009 a{-webkit-tap-highlight-color:transparent}
.zp0009 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0009 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0009 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0009 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0009 .nav.menu details{position:relative}
.zp0009 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0009 .mobileMenu{display:none}
.zp0009 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0009 .eyebrow,.zp0009 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0009 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0009 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0009 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0009 .posterTop,.zp0009 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0009 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0009 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0009 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0009 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0009 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0009 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0009 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0009 .serviceGrid p{color:var(--muted)}
.zp0009 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0009 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0009 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0009 details{border-top:1px solid var(--border);padding:20px 0}
.zp0009 details summary{font-weight:800;cursor:pointer}
.zp0009 details p{color:var(--muted);max-width:70ch}
.zp0009 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0009 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0009 .galleryGrid>*:first-child{grid-row:1/3}
.zp0009 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0009 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0009 .g2,.zp0009 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0009 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0009 .metrics div{background:var(--bg);padding:30px}
.zp0009 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Rockwell, Courier New, serif;color:var(--primary)}
.zp0009 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0009 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0009 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0009 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0009 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0009 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0009 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0009 .contact .eyebrow{color:var(--bg)}
.zp0009 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0009 .contactMeta{display:grid;gap:10px}
.zp0009 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0009 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0009 .sectionTitle h2{font-weight:400}
@keyframes enter-8{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0009 .hero{min-height:auto}
.zp0009 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0009 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0009 .nav nav{display:none}
.zp0009 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0009 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0009 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0009 .mobileMenu nav a{padding:10px 8px}
.zp0009 .hero{grid-template-columns:1fr}
.zp0009 .section,.zp0009 .sectionTitle,.zp0009 .contact{grid-template-columns:1fr}
.zp0009 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0009 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0009 .metrics{grid-template-columns:1fr 1fr}
.zp0009 .section{display:block}}
@media(max-width:430px){.zp0009{font-size:16px}
.zp0009 .hero,.zp0009 .section,.zp0009 .contact{padding-left:18px;padding-right:18px}
.zp0009 .serviceGrid,.zp0009 .proof,.zp0009 .metrics,.zp0009 .destinations>div:last-child{grid-template-columns:1fr}
.zp0009 h1{font-size:clamp(42px,14vw,70px)}
.zp0009 .posterHero h1{font-size:clamp(58px,19vw,100px)}
.zp0009 .galleryGrid{grid-template-columns:1fr}
.zp0009 .galleryGrid>*:first-child{grid-column:auto}}

.zp0009 .heroActions a,.zp0009 .primary,.zp0009 .ctaBtn,.zp0009 .btnPrimary,.zp0009 .schedule>a,.zp0009 .newsletter>a{transition:all .2s ease}
.zp0009 .heroActions a:hover,.zp0009 .primary:hover,.zp0009 .ctaBtn:hover,.zp0009 .btnPrimary:hover{
  opacity:.75
}
.zp0009 nav a,.zp0009 .nav a,.zp0009 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0009 nav a:hover,.zp0009 .nav a:hover,.zp0009 .footer a:hover{
  opacity:.6
}
.zp0009 .serviceGrid article,.zp0009 .projectCard,.zp0009 .teamCard,.zp0009 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0009 .serviceGrid article:hover,.zp0009 .projectCard:hover,.zp0009 .teamCard:hover,.zp0009 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0009 *,.zp0009 *::before,.zp0009 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0009 a,.zp0009 button,.zp0009 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Call us</a></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
