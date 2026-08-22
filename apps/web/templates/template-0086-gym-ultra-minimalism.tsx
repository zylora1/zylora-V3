import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0086-gym-ultra-minimalism", "family": "Ultra Minimalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|masonry-story|proof>credentials>collection>services>destinations>awards|pill-controls|ceremonial", "industry": "gym", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "masonry-story"};

export default function Template0086({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Training Gym");
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
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0086" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0086{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:0px;--shadow:none;--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0086 *{box-sizing:border-box}
.zp0086 a{color:inherit;text-decoration:none}
.zp0086 h1,.zp0086 h2,.zp0086 h3,.zp0086 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0086 img{max-width:100%;display:block}
.zp0086 button,.zp0086 a{-webkit-tap-highlight-color:transparent}
.zp0086 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0086 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0086 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0086 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0086 .mobileMenu{display:none}
.zp0086 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0086 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0086 .eyebrow,.zp0086 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0086 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0086 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0086 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0086 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0086 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0086 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0086 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0086 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0086 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0086 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0086 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0086 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0086 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0086 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0086 .serviceGrid p{color:var(--muted)}
.zp0086 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0086 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0086 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0086 details{border-top:1px solid var(--border);padding:20px 0}
.zp0086 details summary{font-weight:800;cursor:pointer}
.zp0086 details p{color:var(--muted);max-width:70ch}
.zp0086 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0086 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0086 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0086 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0086 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0086 .p1,.zp0086 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0086 .awards>div{max-width:800px;margin-left:auto}
.zp0086 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0086 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0086 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0086 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0086 .contact .eyebrow{color:var(--bg)}
.zp0086 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0086 .contactMeta{display:grid;gap:10px}
.zp0086 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0086 .heroCopy{animation:enter-85 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-85{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0086 .hero{min-height:auto}
.zp0086 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0086 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0086 .nav nav{display:none}
.zp0086 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0086 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0086 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0086 .mobileMenu nav a{padding:10px 8px}
.zp0086 .hero,.zp0086 .timelineHero{grid-template-columns:1fr}
.zp0086 .section,.zp0086 .sectionTitle,.zp0086 .contact{grid-template-columns:1fr}
.zp0086 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0086 .section{display:block}}
@media(max-width:430px){.zp0086{font-size:16px}
.zp0086 .hero,.zp0086 .section,.zp0086 .contact{padding-left:18px;padding-right:18px}
.zp0086 .serviceGrid,.zp0086 .proof,.zp0086 .collectionGrid,.zp0086 .destinations>div:last-child{grid-template-columns:1fr}
.zp0086 h1{font-size:clamp(42px,14vw,70px)}}

.zp0086 .heroActions a,.zp0086 .primary,.zp0086 .ctaBtn,.zp0086 .btnPrimary,.zp0086 .schedule>a,.zp0086 .newsletter>a{transition:all .2s ease}
.zp0086 .heroActions a:hover,.zp0086 .primary:hover,.zp0086 .ctaBtn:hover,.zp0086 .btnPrimary:hover{
  opacity:.75
}
.zp0086 nav a,.zp0086 .nav a,.zp0086 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0086 nav a:hover,.zp0086 .nav a:hover,.zp0086 .footer a:hover{
  opacity:.6
}
.zp0086 .serviceGrid article,.zp0086 .projectCard,.zp0086 .teamCard,.zp0086 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0086 .serviceGrid article:hover,.zp0086 .projectCard:hover,.zp0086 .teamCard:hover,.zp0086 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0086 *,.zp0086 *::before,.zp0086 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0086 a,.zp0086 button,.zp0086 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
