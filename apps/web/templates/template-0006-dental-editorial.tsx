import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0006-dental-editorial", "family": "Editorial", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|image-led-chapters|services>programmes>pricing>team>schedule>case-study>proof|pill-controls|neo-grotesk", "industry": "dental", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "image-led-chapters"};

export default function Template0006({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Dental Practice");
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
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Dental practice / Project A", "Dental practice / Project B", "Dental practice / Project C", "Dental practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Calm dentistry with clear explanations and time for questions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0006" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0006{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0006 *{box-sizing:border-box}
.zp0006 a{color:inherit;text-decoration:none}
.zp0006 h1,.zp0006 h2,.zp0006 h3,.zp0006 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0006 img{max-width:100%;display:block}
.zp0006 button,.zp0006 a{-webkit-tap-highlight-color:transparent}
.zp0006 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0006 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0006 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0006 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0006 .mobileMenu{display:none}
.zp0006 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0006 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0006 .eyebrow,.zp0006 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0006 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0006 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0006 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0006 .heroActions a,.zp0006 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0006 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0006 .visual,.zp0006 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0006 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0006 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0006 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0006 .heroPhoto{object-fit:cover}
.zp0006 .cinematic{padding:0;min-height:100vh}
.zp0006 .cinematic>.heroPhoto,.zp0006 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0006 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0006 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0006 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0006 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0006 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0006 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0006 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0006 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0006 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0006 .serviceGrid p{color:var(--muted)}
.zp0006 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0006 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0006 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0006 details{border-top:1px solid var(--border);padding:20px 0}
.zp0006 details summary{font-weight:800;cursor:pointer}
.zp0006 details p{color:var(--muted);max-width:70ch}
.zp0006 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0006 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0006 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Helvetica Neue, Arial, sans-serif;margin-bottom:18px}
.zp0006 .priceRows{border-top:1px solid var(--border)}
.zp0006 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0006 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0006 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0006 .projects article:nth-child(2){transform:translateY(32px)}
.zp0006 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0006 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0006 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0006 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0006 .contact .eyebrow{color:var(--bg)}
.zp0006 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0006 .contactMeta{display:grid;gap:10px}
.zp0006 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0006 .hero{min-height:auto}
.zp0006 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0006 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0006 .nav nav{display:none}
.zp0006 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0006 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0006 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0006 .mobileMenu nav a{padding:10px 8px}
.zp0006 .hero{grid-template-columns:1fr}
.zp0006 .section,.zp0006 .sectionTitle,.zp0006 .contact{grid-template-columns:1fr}
.zp0006 .teamGrid{grid-template-columns:1fr 1fr}
.zp0006 .projects .projectGrid{grid-template-columns:1fr}
.zp0006 .projects article:nth-child(2){transform:none}
.zp0006 .section{display:block}}
@media(max-width:430px){.zp0006{font-size:16px}
.zp0006 .hero,.zp0006 .section,.zp0006 .contact{padding-left:18px;padding-right:18px}
.zp0006 .serviceGrid,.zp0006 .proof,.zp0006 .teamGrid,.zp0006 .programmes>div:last-child{grid-template-columns:1fr}
.zp0006 h1{font-size:clamp(42px,14vw,70px)}
.zp0006 .priceRows article{grid-template-columns:1fr}}

.zp0006 .heroActions a,.zp0006 .primary,.zp0006 .ctaBtn,.zp0006 .btnPrimary,.zp0006 .schedule>a,.zp0006 .newsletter>a{transition:all .2s ease}
.zp0006 .heroActions a:hover,.zp0006 .primary:hover,.zp0006 .ctaBtn:hover,.zp0006 .btnPrimary:hover{
  opacity:.8
}
.zp0006 nav a,.zp0006 .nav a,.zp0006 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0006 nav a:hover,.zp0006 .nav a:hover,.zp0006 .footer a:hover{
  color:var(--primary)
}
.zp0006 .serviceGrid article,.zp0006 .projectCard,.zp0006 .teamCard,.zp0006 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0006 .serviceGrid article:hover,.zp0006 .projectCard:hover,.zp0006 .teamCard:hover,.zp0006 .bentoCard:hover{
  transform:translateY(-3px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0006 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0006 .sectionTitle,.zp0006 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0006 *,.zp0006 *::before,.zp0006 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0006 a,.zp0006 button,.zp0006 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">05</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Editorial / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
