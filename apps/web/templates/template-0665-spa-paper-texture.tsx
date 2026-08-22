import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0665-spa-paper-texture", "family": "Paper Texture", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|case-study-led|services>gallery>credentials>proof>process>research|hairline|friendly", "industry": "spa", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "case-study-led"};

export default function Template0665({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Day Spa");
  const headline = String(content.headline || "A restorative pause with thoughtful treatments, quiet spaces, and easy booking.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage", "Facials", "Body treatments", "Rituals", "Memberships"];
  const industryLabel = "Day spa";
  const serviceNotes = ["ESPA and Elemis trained therapists with ongoing annual certification.", "Treatment programme design: 3 or 6-session plans with outcome-focused protocols.", "Couples' spa days with private suite, champagne, and shared treatment sequence.", "Thermal suite access included in all treatment bookings: pool, sauna, and steam.", "Corporate wellness days with catering, treatments, and meeting space combined."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Luxury Guild accredited", "Thermal suite and vitality pool", "Corporate packages available", "Gift vouchers online"];
  const testimonial = "The therapist spent 10 minutes asking about what I needed before any treatment. The session was precisely right.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0665" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0665{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0665 *{box-sizing:border-box}
.zp0665 a{color:inherit;text-decoration:none}
.zp0665 h1,.zp0665 h2,.zp0665 h3,.zp0665 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0665 img{max-width:100%;display:block}
.zp0665 button,.zp0665 a{-webkit-tap-highlight-color:transparent}
.zp0665 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0665 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0665 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0665 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0665 .nav.menu details{position:relative}
.zp0665 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0665 .mobileMenu{display:none}
.zp0665 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0665 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0665 .eyebrow,.zp0665 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0665 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0665 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0665 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0665 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0665 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0665 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0665 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0665 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0665 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0665 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0665 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0665 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0665 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0665 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0665 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0665 .serviceGrid p{color:var(--muted)}
.zp0665 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0665 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0665 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0665 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0665 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0665 details{border-top:1px solid var(--border);padding:20px 0}
.zp0665 details summary{font-weight:800;cursor:pointer}
.zp0665 details p{color:var(--muted);max-width:70ch}
.zp0665 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0665 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0665 .galleryGrid>*:first-child{grid-row:1/3}
.zp0665 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0665 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0665 .g2,.zp0665 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0665 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0665 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0665 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0665 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0665 .researchRows{max-width:900px;margin-left:auto}
.zp0665 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0665 .contact .eyebrow{color:var(--bg)}
.zp0665 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0665 .contactMeta{display:grid;gap:10px}
.zp0665 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0665{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0665 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0665 .heroCopy{animation:enter-664 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-664{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0665 .hero{min-height:auto}
.zp0665 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0665 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0665 .nav nav{display:none}
.zp0665 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0665 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0665 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0665 .mobileMenu nav a{padding:10px 8px}
.zp0665 .hero,.zp0665 .archiveHero{grid-template-columns:1fr}
.zp0665 .section,.zp0665 .sectionTitle,.zp0665 .contact{grid-template-columns:1fr}
.zp0665 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0665 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0665 .section{display:block}}
@media(max-width:430px){.zp0665{font-size:16px}
.zp0665 .hero,.zp0665 .section,.zp0665 .contact{padding-left:18px;padding-right:18px}
.zp0665 .serviceGrid,.zp0665 .proof{grid-template-columns:1fr}
.zp0665 h1{font-size:clamp(42px,14vw,70px)}
.zp0665 .galleryGrid{grid-template-columns:1fr}
.zp0665 .galleryGrid>*:first-child{grid-column:auto}}

.zp0665 .heroActions a,.zp0665 .primary,.zp0665 .ctaBtn,.zp0665 .btnPrimary,.zp0665 .schedule>a,.zp0665 .newsletter>a{transition:all .2s ease}
.zp0665 .heroActions a:hover,.zp0665 .primary:hover,.zp0665 .ctaBtn:hover,.zp0665 .btnPrimary:hover{
  opacity:.8
}
.zp0665 nav a,.zp0665 .nav a,.zp0665 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0665 nav a:hover,.zp0665 .nav a:hover,.zp0665 .footer a:hover{
  color:var(--primary)
}
.zp0665 .serviceGrid article,.zp0665 .projectCard,.zp0665 .teamCard,.zp0665 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0665 .serviceGrid article:hover,.zp0665 .projectCard:hover,.zp0665 .teamCard:hover,.zp0665 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0665 *,.zp0665 *::before,.zp0665 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0665 a,.zp0665 button,.zp0665 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
