import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0774-events-friendly-local-business", "family": "Friendly Local Business", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|modular-12|team>collection>awards>packages>location>services>proof|pill-controls|neo-grotesk", "industry": "events", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "modular-12"};

export default function Template0774({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0774" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0774{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0774 *{box-sizing:border-box}
.zp0774 a{color:inherit;text-decoration:none}
.zp0774 h1,.zp0774 h2,.zp0774 h3,.zp0774 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0774 img{max-width:100%;display:block}
.zp0774 button,.zp0774 a{-webkit-tap-highlight-color:transparent}
.zp0774 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0774 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0774 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0774 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0774 .mobileMenu{display:none}
.zp0774 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0774 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0774 .eyebrow,.zp0774 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0774 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0774 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0774 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0774 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0774 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0774 .visual,.zp0774 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0774 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0774 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0774 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0774 .heroPhoto{object-fit:cover}
.zp0774 .cinematic{padding:0;min-height:100vh}
.zp0774 .cinematic>.heroPhoto,.zp0774 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0774 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0774 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0774 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0774 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0774 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0774 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0774 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0774 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0774 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0774 .serviceGrid p{color:var(--muted)}
.zp0774 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0774 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0774 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0774 details{border-top:1px solid var(--border);padding:20px 0}
.zp0774 details summary{font-weight:800;cursor:pointer}
.zp0774 details p{color:var(--muted);max-width:70ch}
.zp0774 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0774 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0774 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Helvetica Neue, Arial, sans-serif;margin-bottom:18px}
.zp0774 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0774 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0774 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0774 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0774 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0774 .p1,.zp0774 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0774 .awards>div{max-width:800px;margin-left:auto}
.zp0774 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0774 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0774 .packages>.sectionTitle{grid-column:1/-1}
.zp0774 .packages article{padding:24px;border:1px solid var(--border)}
.zp0774 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0774 .contact .eyebrow{color:var(--bg)}
.zp0774 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0774 .contactMeta{display:grid;gap:10px}
.zp0774 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0774 .heroCopy{animation:enter-773 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-773{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0774 .hero{min-height:auto}
.zp0774 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0774 .proof{grid-template-columns:1fr 1fr}
.zp0774 .packages{grid-template-columns:1fr 1fr}
.zp0774 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0774 .nav nav{display:none}
.zp0774 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0774 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0774 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0774 .mobileMenu nav a{padding:10px 8px}
.zp0774 .hero{grid-template-columns:1fr}
.zp0774 .section,.zp0774 .sectionTitle,.zp0774 .location,.zp0774 .contact{grid-template-columns:1fr}
.zp0774 .teamGrid{grid-template-columns:1fr 1fr}
.zp0774 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0774 .section{display:block}}
@media(max-width:430px){.zp0774{font-size:16px}
.zp0774 .hero,.zp0774 .section,.zp0774 .contact{padding-left:18px;padding-right:18px}
.zp0774 .serviceGrid,.zp0774 .proof,.zp0774 .teamGrid,.zp0774 .collectionGrid,.zp0774 .packages{grid-template-columns:1fr}
.zp0774 h1{font-size:clamp(42px,14vw,70px)}}

.zp0774 .heroActions a,.zp0774 .primary,.zp0774 .ctaBtn,.zp0774 .btnPrimary,.zp0774 .schedule>a,.zp0774 .newsletter>a{transition:all .2s ease}
.zp0774 .heroActions a:hover,.zp0774 .primary:hover,.zp0774 .ctaBtn:hover,.zp0774 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0774 nav a,.zp0774 .nav a,.zp0774 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0774 nav a:hover,.zp0774 .nav a:hover,.zp0774 .footer a:hover{
  color:var(--primary)
}
.zp0774 .serviceGrid article,.zp0774 .projectCard,.zp0774 .teamCard,.zp0774 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0774 .serviceGrid article:hover,.zp0774 .projectCard:hover,.zp0774 .teamCard:hover,.zp0774 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0774 *,.zp0774 *::before,.zp0774 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0774 a,.zp0774 button,.zp0774 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">73</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
