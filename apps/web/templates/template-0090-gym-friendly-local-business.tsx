import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0090-gym-friendly-local-business", "family": "Friendly Local Business", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|modular-12|integrations>press>services>availability>destinations>packages>proof|paper-sheet|utility", "industry": "gym", "hero": "product-demo", "navigation": "left-sidebar", "layout": "modular-12"};

export default function Template0090({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Training Gym");
  const headline = String(content.headline || "Coaching-led training for people who want structure, progress, and accountability.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strength coaching", "Small-group training", "Open gym", "Mobility sessions", "Performance testing"];
  const industryLabel = "Training gym";
  const serviceNotes = ["Open 24 hours so your schedule drives your training, not ours.", "Strength, cardio, and functional zones across 600+ sq metres of equipment.", "Personal training with coaches who build programmes around your goals, not templates.", "Monthly fitness assessments to track progress and adjust your plan.", "Recovery studio with sauna, ice bath, and stretch space included in membership."];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0090" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0090{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0090 *{box-sizing:border-box}
.zp0090 a{color:inherit;text-decoration:none}
.zp0090 h1,.zp0090 h2,.zp0090 h3,.zp0090 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0090 img{max-width:100%;display:block}
.zp0090 button,.zp0090 a{-webkit-tap-highlight-color:transparent}
.zp0090 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0090 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0090 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0090 .mobileMenu{display:none}
.zp0090:has(.navRail)>.hero,.zp0090:has(.navRail)>.section,.zp0090:has(.navRail)>.contact,.zp0090:has(.navRail)>.footer{margin-left:190px}
.zp0090 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0090 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0090 .eyebrow,.zp0090 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0090 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0090 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0090 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0090 .heroActions a,.zp0090 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0090 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0090 .visual,.zp0090 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0090 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0090 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0090 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0090 .heroPhoto{object-fit:cover}
.zp0090 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0090 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0090 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0090 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0090 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0090 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0090 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0090 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0090 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0090 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0090 .serviceGrid p{color:var(--muted)}
.zp0090 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0090 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0090 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0090 details{border-top:1px solid var(--border);padding:20px 0}
.zp0090 details summary{font-weight:800;cursor:pointer}
.zp0090 details p{color:var(--muted);max-width:70ch}
.zp0090 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0090 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0090 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0090 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0090 .awards>div{max-width:800px;margin-left:auto}
.zp0090 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0090 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0090 .packages>.sectionTitle{grid-column:1/-1}
.zp0090 .packages article{padding:24px;border:1px solid var(--border)}
.zp0090 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0090 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0090 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0090 .contact .eyebrow{color:var(--bg)}
.zp0090 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0090 .contactMeta{display:grid;gap:10px}
.zp0090 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0090 .hero{min-height:auto}
.zp0090 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0090 .proof{grid-template-columns:1fr 1fr}
.zp0090 .packages{grid-template-columns:1fr 1fr}
.zp0090 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0090 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0090 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0090 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0090 .mobileMenu nav a{padding:10px 8px}
.zp0090 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0090:has(.navRail)>.hero,.zp0090:has(.navRail)>.section,.zp0090:has(.navRail)>.contact,.zp0090:has(.navRail)>.footer{margin-left:0}
.zp0090 .hero,.zp0090 .productHero{grid-template-columns:1fr}
.zp0090 .section,.zp0090 .sectionTitle,.zp0090 .contact{grid-template-columns:1fr}
.zp0090 .section{display:block}}
@media(max-width:430px){.zp0090{font-size:16px}
.zp0090 .hero,.zp0090 .section,.zp0090 .contact{padding-left:18px;padding-right:18px}
.zp0090 .serviceGrid,.zp0090 .proof,.zp0090 .packages,.zp0090 .destinations>div:last-child{grid-template-columns:1fr}
.zp0090 h1{font-size:clamp(42px,14vw,70px)}}

.zp0090 .heroActions a,.zp0090 .primary,.zp0090 .ctaBtn,.zp0090 .btnPrimary,.zp0090 .schedule>a,.zp0090 .newsletter>a{transition:all .2s ease}
.zp0090 .heroActions a:hover,.zp0090 .primary:hover,.zp0090 .ctaBtn:hover,.zp0090 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0090 nav a,.zp0090 .nav a,.zp0090 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0090 nav a:hover,.zp0090 .nav a:hover,.zp0090 .footer a:hover{
  color:var(--primary)
}
.zp0090 .serviceGrid article,.zp0090 .projectCard,.zp0090 .teamCard,.zp0090 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0090 .serviceGrid article:hover,.zp0090 .projectCard:hover,.zp0090 .teamCard:hover,.zp0090 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0090 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0090 .sectionTitle,.zp0090 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0090 *,.zp0090 *::before,.zp0090 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0090 a,.zp0090 button,.zp0090 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">89</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
