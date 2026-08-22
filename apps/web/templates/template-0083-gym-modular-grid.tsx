import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0083-gym-modular-grid", "family": "Modular Grid", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|press-led|services>collection>availability>testimonial>values>proof|inset-panel|editorial-serif", "industry": "gym", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "press-led"};

export default function Template0083({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Training Gym");
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
  const testimonialName = "Bureau client";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0083" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0083{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0083 *{box-sizing:border-box}
.zp0083 a{color:inherit;text-decoration:none}
.zp0083 h1,.zp0083 h2,.zp0083 h3,.zp0083 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0083 img{max-width:100%;display:block}
.zp0083 button,.zp0083 a{-webkit-tap-highlight-color:transparent}
.zp0083 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0083 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0083 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0083 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0083 .mobileMenu{display:none}
.zp0083 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0083 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0083 .eyebrow,.zp0083 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0083 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0083 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0083 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0083 .heroActions a,.zp0083 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0083 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0083 .visual,.zp0083 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0083 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0083 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0083 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0083 .heroPhoto{object-fit:cover}
.zp0083 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0083 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0083 .railBlock{background:var(--primary)}
.zp0083 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0083 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0083 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0083 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0083 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0083 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0083 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0083 .serviceGrid p{color:var(--muted)}
.zp0083 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0083 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0083 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0083 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0083 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0083 .testimonial>div{align-self:end}
.zp0083 .testimonial span{display:block;opacity:.7}
.zp0083 details{border-top:1px solid var(--border);padding:20px 0}
.zp0083 details summary{font-weight:800;cursor:pointer}
.zp0083 details p{color:var(--muted);max-width:70ch}
.zp0083 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0083 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0083 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0083 .p1,.zp0083 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0083 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0083 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0083 .contact .eyebrow{color:var(--bg)}
.zp0083 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0083 .contactMeta{display:grid;gap:10px}
.zp0083 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0083 .heroCopy{animation:enter-82 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-82{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0083 .hero{min-height:auto}
.zp0083 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0083 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0083 .nav nav{display:none}
.zp0083 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0083 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0083 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0083 .mobileMenu nav a{padding:10px 8px}
.zp0083 .hero,.zp0083 .verticalHero{grid-template-columns:1fr}
.zp0083 .section,.zp0083 .sectionTitle,.zp0083 .contact{grid-template-columns:1fr}
.zp0083 .testimonial{grid-template-columns:1fr}
.zp0083 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0083 .section{display:block}}
@media(max-width:430px){.zp0083{font-size:16px}
.zp0083 .hero,.zp0083 .section,.zp0083 .contact{padding-left:18px;padding-right:18px}
.zp0083 .serviceGrid,.zp0083 .proof,.zp0083 .collectionGrid{grid-template-columns:1fr}
.zp0083 h1{font-size:clamp(42px,14vw,70px)}}

.zp0083 .heroActions a,.zp0083 .primary,.zp0083 .ctaBtn,.zp0083 .btnPrimary,.zp0083 .schedule>a,.zp0083 .newsletter>a{transition:all .2s ease}
.zp0083 .heroActions a:hover,.zp0083 .primary:hover,.zp0083 .ctaBtn:hover,.zp0083 .btnPrimary:hover{
  opacity:.85
}
.zp0083 nav a,.zp0083 .nav a,.zp0083 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0083 nav a:hover,.zp0083 .nav a:hover,.zp0083 .footer a:hover{
  color:var(--primary)
}
.zp0083 .serviceGrid article,.zp0083 .projectCard,.zp0083 .teamCard,.zp0083 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0083 .serviceGrid article:hover,.zp0083 .projectCard:hover,.zp0083 .teamCard:hover,.zp0083 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0083 *,.zp0083 *::before,.zp0083 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0083 a,.zp0083 button,.zp0083 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">82</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modular Grid / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
