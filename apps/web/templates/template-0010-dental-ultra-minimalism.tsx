import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0010-dental-ultra-minimalism", "family": "Ultra Minimalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|service-catalogue|pricing>proof>services>materials>gallery|paper-sheet|retro-bookish", "industry": "dental", "hero": "service-led", "navigation": "left-sidebar", "layout": "service-catalogue"};

export default function Template0010({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Dental Practice");
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
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0010" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0010{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:0px;--shadow:none;--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0010 *{box-sizing:border-box}
.zp0010 a{color:inherit;text-decoration:none}
.zp0010 h1,.zp0010 h2,.zp0010 h3,.zp0010 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0010 img{max-width:100%;display:block}
.zp0010 button,.zp0010 a{-webkit-tap-highlight-color:transparent}
.zp0010 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0010 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0010 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0010 .mobileMenu{display:none}
.zp0010:has(.navRail)>.hero,.zp0010:has(.navRail)>.section,.zp0010:has(.navRail)>.contact,.zp0010:has(.navRail)>.footer{margin-left:190px}
.zp0010 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0010 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0010 .eyebrow,.zp0010 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0010 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0010 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0010 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0010 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0010 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0010 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0010 .serviceHeroList{display:grid;gap:4px}
.zp0010 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0010 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0010 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0010 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0010 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0010 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0010 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0010 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0010 .serviceGrid p{color:var(--muted)}
.zp0010 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0010 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0010 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0010 details{border-top:1px solid var(--border);padding:20px 0}
.zp0010 details summary{font-weight:800;cursor:pointer}
.zp0010 details p{color:var(--muted);max-width:70ch}
.zp0010 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0010 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0010 .galleryGrid>*:first-child{grid-row:1/3}
.zp0010 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0010 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0010 .g2,.zp0010 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0010 .priceRows{border-top:1px solid var(--border)}
.zp0010 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0010 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0010 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0010 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0010 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0010 .contact .eyebrow{color:var(--bg)}
.zp0010 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0010 .contactMeta{display:grid;gap:10px}
.zp0010 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0010 .heroCopy{animation:enter-9 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-9{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0010 .hero{min-height:auto}
.zp0010 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0010 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0010 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0010 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0010 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0010 .mobileMenu nav a{padding:10px 8px}
.zp0010 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0010:has(.navRail)>.hero,.zp0010:has(.navRail)>.section,.zp0010:has(.navRail)>.contact,.zp0010:has(.navRail)>.footer{margin-left:0}
.zp0010 .hero,.zp0010 .serviceHero{grid-template-columns:1fr}
.zp0010 .section,.zp0010 .sectionTitle,.zp0010 .contact{grid-template-columns:1fr}
.zp0010 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0010 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0010 .section{display:block}}
@media(max-width:430px){.zp0010{font-size:16px}
.zp0010 .hero,.zp0010 .section,.zp0010 .contact{padding-left:18px;padding-right:18px}
.zp0010 .serviceGrid,.zp0010 .proof{grid-template-columns:1fr}
.zp0010 h1{font-size:clamp(42px,14vw,70px)}
.zp0010 .priceRows article{grid-template-columns:1fr}
.zp0010 .galleryGrid{grid-template-columns:1fr}
.zp0010 .galleryGrid>*:first-child{grid-column:auto}}

.zp0010 .heroActions a,.zp0010 .primary,.zp0010 .ctaBtn,.zp0010 .btnPrimary,.zp0010 .schedule>a,.zp0010 .newsletter>a{transition:all .2s ease}
.zp0010 .heroActions a:hover,.zp0010 .primary:hover,.zp0010 .ctaBtn:hover,.zp0010 .btnPrimary:hover{
  opacity:.75
}
.zp0010 nav a,.zp0010 .nav a,.zp0010 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0010 nav a:hover,.zp0010 .nav a:hover,.zp0010 .footer a:hover{
  opacity:.6
}
.zp0010 .serviceGrid article,.zp0010 .projectCard,.zp0010 .teamCard,.zp0010 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0010 .serviceGrid article:hover,.zp0010 .projectCard:hover,.zp0010 .teamCard:hover,.zp0010 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0010 *,.zp0010 *::before,.zp0010 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0010 a,.zp0010 button,.zp0010 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
