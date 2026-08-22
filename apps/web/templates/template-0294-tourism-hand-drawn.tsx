import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0294-tourism-hand-drawn", "family": "Hand-drawn", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|image-led-chapters|timeline>services>awards>proof>press>integrations>credentials|pill-controls|neo-grotesk", "industry": "tourism", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "image-led-chapters"};

export default function Template0294({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0294" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0294{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0294 *{box-sizing:border-box}
.zp0294 a{color:inherit;text-decoration:none}
.zp0294 h1,.zp0294 h2,.zp0294 h3,.zp0294 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0294 img{max-width:100%;display:block}
.zp0294 button,.zp0294 a{-webkit-tap-highlight-color:transparent}
.zp0294 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0294 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0294 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0294 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0294 .mobileMenu{display:none}
.zp0294 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0294 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0294 .eyebrow,.zp0294 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0294 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0294 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0294 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0294 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0294 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0294 .visual,.zp0294 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0294 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0294 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0294 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0294 .heroPhoto{object-fit:cover}
.zp0294 .cinematic{padding:0;min-height:100vh}
.zp0294 .cinematic>.heroPhoto,.zp0294 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0294 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0294 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0294 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0294 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0294 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0294 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0294 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0294 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0294 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0294 .serviceGrid p{color:var(--muted)}
.zp0294 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0294 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0294 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0294 details{border-top:1px solid var(--border);padding:20px 0}
.zp0294 details summary{font-weight:800;cursor:pointer}
.zp0294 details p{color:var(--muted);max-width:70ch}
.zp0294 .credentials,.zp0294 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0294 .credentials>div,.zp0294 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0294 .credentials b,.zp0294 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0294 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0294 .timeline article{padding:20px 0}
.zp0294 .awards>div{max-width:800px;margin-left:auto}
.zp0294 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0294 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0294 .contact .eyebrow{color:var(--bg)}
.zp0294 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0294 .contactMeta{display:grid;gap:10px}
.zp0294 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0294 .heroCopy{animation:enter-293 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-293{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0294 .hero{min-height:auto}
.zp0294 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0294 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0294 .nav nav{display:none}
.zp0294 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0294 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0294 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0294 .mobileMenu nav a{padding:10px 8px}
.zp0294 .hero{grid-template-columns:1fr}
.zp0294 .section,.zp0294 .sectionTitle,.zp0294 .contact{grid-template-columns:1fr}
.zp0294 .section{display:block}}
@media(max-width:430px){.zp0294{font-size:16px}
.zp0294 .hero,.zp0294 .section,.zp0294 .contact{padding-left:18px;padding-right:18px}
.zp0294 .serviceGrid,.zp0294 .proof{grid-template-columns:1fr}
.zp0294 h1{font-size:clamp(42px,14vw,70px)}}

.zp0294 .heroActions a,.zp0294 .primary,.zp0294 .ctaBtn,.zp0294 .btnPrimary,.zp0294 .schedule>a,.zp0294 .newsletter>a{transition:all .2s ease}
.zp0294 .heroActions a:hover,.zp0294 .primary:hover,.zp0294 .ctaBtn:hover,.zp0294 .btnPrimary:hover{
  opacity:.8;text-decoration:underline wavy
}
.zp0294 nav a,.zp0294 .nav a,.zp0294 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0294 nav a:hover,.zp0294 .nav a:hover,.zp0294 .footer a:hover{
  opacity:.7
}
.zp0294 .serviceGrid article,.zp0294 .projectCard,.zp0294 .teamCard,.zp0294 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0294 .serviceGrid article:hover,.zp0294 .projectCard:hover,.zp0294 .teamCard:hover,.zp0294 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0294 *,.zp0294 *::before,.zp0294 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0294 a,.zp0294 button,.zp0294 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">93</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Hand-drawn / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
