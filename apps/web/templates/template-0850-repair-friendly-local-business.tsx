import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0850-repair-friendly-local-business", "family": "Friendly Local Business", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|comparison-led|gallery>integrations>services>collection>proof|borderless|retro-bookish", "industry": "repair", "hero": "gallery-wall", "navigation": "tabbed", "layout": "comparison-led"};

export default function Template0850({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0850" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0850{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0850 *{box-sizing:border-box}
.zp0850 a{color:inherit;text-decoration:none}
.zp0850 h1,.zp0850 h2,.zp0850 h3,.zp0850 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0850 img{max-width:100%;display:block}
.zp0850 button,.zp0850 a{-webkit-tap-highlight-color:transparent}
.zp0850 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0850 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0850 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0850 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0850 .mobileMenu{display:none}
.zp0850 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0850 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0850 .eyebrow,.zp0850 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0850 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0850 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0850 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0850 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0850 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0850 .wallHero{grid-template-columns:1fr 1fr}
.zp0850 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0850 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0850 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0850 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0850 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0850 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0850 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0850 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0850 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0850 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0850 .serviceGrid p{color:var(--muted)}
.zp0850 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0850 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0850 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0850 details{border-top:1px solid var(--border);padding:20px 0}
.zp0850 details summary{font-weight:800;cursor:pointer}
.zp0850 details p{color:var(--muted);max-width:70ch}
.zp0850 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0850 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0850 .galleryGrid>*:first-child{grid-row:1/3}
.zp0850 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0850 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0850 .g2,.zp0850 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0850 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0850 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0850 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0850 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0850 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0850 .p1,.zp0850 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0850 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0850 .contact .eyebrow{color:var(--bg)}
.zp0850 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0850 .contactMeta{display:grid;gap:10px}
.zp0850 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0850 .heroCopy{animation:enter-849 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-849{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0850 .hero{min-height:auto}
.zp0850 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0850 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0850 .nav nav{display:none}
.zp0850 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0850 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0850 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0850 .mobileMenu nav a{padding:10px 8px}
.zp0850 .hero,.zp0850 .wallHero{grid-template-columns:1fr}
.zp0850 .section,.zp0850 .sectionTitle,.zp0850 .contact{grid-template-columns:1fr}
.zp0850 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0850 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0850 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0850 .section{display:block}}
@media(max-width:430px){.zp0850{font-size:16px}
.zp0850 .hero,.zp0850 .section,.zp0850 .contact{padding-left:18px;padding-right:18px}
.zp0850 .serviceGrid,.zp0850 .proof,.zp0850 .collectionGrid{grid-template-columns:1fr}
.zp0850 h1{font-size:clamp(42px,14vw,70px)}
.zp0850 .galleryGrid{grid-template-columns:1fr}
.zp0850 .galleryGrid>*:first-child{grid-column:auto}}

.zp0850 .heroActions a,.zp0850 .primary,.zp0850 .ctaBtn,.zp0850 .btnPrimary,.zp0850 .schedule>a,.zp0850 .newsletter>a{transition:all .2s ease}
.zp0850 .heroActions a:hover,.zp0850 .primary:hover,.zp0850 .ctaBtn:hover,.zp0850 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0850 nav a,.zp0850 .nav a,.zp0850 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0850 nav a:hover,.zp0850 .nav a:hover,.zp0850 .footer a:hover{
  color:var(--primary)
}
.zp0850 .serviceGrid article,.zp0850 .projectCard,.zp0850 .teamCard,.zp0850 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0850 .serviceGrid article:hover,.zp0850 .projectCard:hover,.zp0850 .teamCard:hover,.zp0850 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0850 *,.zp0850 *::before,.zp0850 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0850 a,.zp0850 button,.zp0850 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
