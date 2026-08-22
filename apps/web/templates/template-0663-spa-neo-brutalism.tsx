import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0663-spa-neo-brutalism", "family": "Neo-Brutalism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|product-journey|schedule>destinations>materials>packages>process>services>proof|asymmetric-radius|geometric", "industry": "spa", "hero": "index-led", "navigation": "editorial-index", "layout": "product-journey"};

export default function Template0663({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Day Spa");
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
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0663" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0663{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:3px;--shadow:none;--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0663 *{box-sizing:border-box}
.zp0663 a{color:inherit;text-decoration:none}
.zp0663 h1,.zp0663 h2,.zp0663 h3,.zp0663 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0663 img{max-width:100%;display:block}
.zp0663 button,.zp0663 a{-webkit-tap-highlight-color:transparent}
.zp0663 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0663 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0663 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0663 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0663 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0663 .nav.index nav{justify-content:flex-end}
.zp0663 .mobileMenu{display:none}
.zp0663 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0663 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0663 .eyebrow,.zp0663 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0663 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0663 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0663 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0663 .heroActions a,.zp0663 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0663 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0663 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0663 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0663 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0663 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0663 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0663 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0663 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0663 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0663 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0663 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0663 .serviceGrid p{color:var(--muted)}
.zp0663 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0663 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0663 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0663 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0663 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0663 details{border-top:1px solid var(--border);padding:20px 0}
.zp0663 details summary{font-weight:800;cursor:pointer}
.zp0663 details p{color:var(--muted);max-width:70ch}
.zp0663 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0663 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0663 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0663 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0663 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0663 .packages>.sectionTitle{grid-column:1/-1}
.zp0663 .packages article{padding:24px;border:1px solid var(--border)}
.zp0663 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0663 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0663 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0663 .contact .eyebrow{color:var(--bg)}
.zp0663 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0663 .contactMeta{display:grid;gap:10px}
.zp0663 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0663 .heroActions a,.zp0663 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0663 h1{text-transform:uppercase}
.zp0663 .heroCopy{animation:enter-662 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-662{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0663 .hero{min-height:auto}
.zp0663 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0663 .proof{grid-template-columns:1fr 1fr}
.zp0663 .packages{grid-template-columns:1fr 1fr}
.zp0663 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0663 .nav nav{display:none}
.zp0663 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0663 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0663 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0663 .mobileMenu nav a{padding:10px 8px}
.zp0663 .hero,.zp0663 .indexHero{grid-template-columns:1fr}
.zp0663 .section,.zp0663 .sectionTitle,.zp0663 .contact{grid-template-columns:1fr}
.zp0663 .section{display:block}}
@media(max-width:430px){.zp0663{font-size:16px}
.zp0663 .hero,.zp0663 .section,.zp0663 .contact{padding-left:18px;padding-right:18px}
.zp0663 .serviceGrid,.zp0663 .proof,.zp0663 .packages,.zp0663 .destinations>div:last-child{grid-template-columns:1fr}
.zp0663 h1{font-size:clamp(42px,14vw,70px)}
.zp0663 .nav.index{grid-template-columns:1fr auto}
.zp0663 .nav.index>span{display:none}}

.zp0663 .heroActions a,.zp0663 .primary,.zp0663 .ctaBtn,.zp0663 .btnPrimary,.zp0663 .schedule>a,.zp0663 .newsletter>a{transition:all .2s ease}
.zp0663 .heroActions a:hover,.zp0663 .primary:hover,.zp0663 .ctaBtn:hover,.zp0663 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0663 nav a,.zp0663 .nav a,.zp0663 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0663 nav a:hover,.zp0663 .nav a:hover,.zp0663 .footer a:hover{
  text-decoration:underline
}
.zp0663 .serviceGrid article,.zp0663 .projectCard,.zp0663 .teamCard,.zp0663 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0663 .serviceGrid article:hover,.zp0663 .projectCard:hover,.zp0663 .teamCard:hover,.zp0663 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0663 *,.zp0663 *::before,.zp0663 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0663 a,.zp0663 button,.zp0663 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
