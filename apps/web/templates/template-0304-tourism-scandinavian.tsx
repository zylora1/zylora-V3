import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0304-tourism-scandinavian", "family": "Scandinavian", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|single-column-longform|team>proof>case-study>services>collection|heavy-frame|brutal-display", "industry": "tourism", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "single-column-longform"};

export default function Template0304({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Tour Operator");
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
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0304" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0304{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0304 *{box-sizing:border-box}
.zp0304 a{color:inherit;text-decoration:none}
.zp0304 h1,.zp0304 h2,.zp0304 h3,.zp0304 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0304 img{max-width:100%;display:block}
.zp0304 button,.zp0304 a{-webkit-tap-highlight-color:transparent}
.zp0304 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0304 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0304 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0304 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0304 .nav.centered strong{order:2;font-size:24px}
.zp0304 .nav.centered nav:first-child{order:1}
.zp0304 .nav.centered nav:last-child{order:3}
.zp0304 .mobileMenu{display:none}
.zp0304 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0304 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0304 .eyebrow,.zp0304 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0304 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0304 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0304 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0304 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0304 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0304 .visual,.zp0304 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0304 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0304 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0304 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0304 .heroPhoto{object-fit:cover}
.zp0304 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0304 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0304 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0304 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0304 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0304 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0304 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0304 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0304 .serviceGrid p{color:var(--muted)}
.zp0304 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0304 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0304 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0304 details{border-top:1px solid var(--border);padding:20px 0}
.zp0304 details summary{font-weight:800;cursor:pointer}
.zp0304 details p{color:var(--muted);max-width:70ch}
.zp0304 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0304 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0304 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Arial Black, Arial, sans-serif;margin-bottom:18px}
.zp0304 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0304 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0304 .projects article:nth-child(2){transform:translateY(32px)}
.zp0304 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0304 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0304 .p1,.zp0304 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0304 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0304 .contact .eyebrow{color:var(--bg)}
.zp0304 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0304 .contactMeta{display:grid;gap:10px}
.zp0304 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0304 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0304 .sectionTitle{display:block}
.zp0304 .heroCopy{animation:enter-303 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-303{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0304 .hero{min-height:auto}
.zp0304 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0304 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0304 .nav nav{display:none}
.zp0304 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0304 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0304 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0304 .mobileMenu nav a{padding:10px 8px}
.zp0304 .hero,.zp0304 .asymHero{grid-template-columns:1fr}
.zp0304 .section,.zp0304 .sectionTitle,.zp0304 .contact{grid-template-columns:1fr}
.zp0304 .teamGrid{grid-template-columns:1fr 1fr}
.zp0304 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0304 .projects .projectGrid{grid-template-columns:1fr}
.zp0304 .projects article:nth-child(2){transform:none}
.zp0304 .section{display:block}}
@media(max-width:430px){.zp0304{font-size:16px}
.zp0304 .hero,.zp0304 .section,.zp0304 .contact{padding-left:18px;padding-right:18px}
.zp0304 .serviceGrid,.zp0304 .proof,.zp0304 .teamGrid,.zp0304 .collectionGrid{grid-template-columns:1fr}
.zp0304 h1{font-size:clamp(42px,14vw,70px)}}

.zp0304 .heroActions a,.zp0304 .primary,.zp0304 .ctaBtn,.zp0304 .btnPrimary,.zp0304 .schedule>a,.zp0304 .newsletter>a{transition:all .2s ease}
.zp0304 .heroActions a:hover,.zp0304 .primary:hover,.zp0304 .ctaBtn:hover,.zp0304 .btnPrimary:hover{
  opacity:.75
}
.zp0304 nav a,.zp0304 .nav a,.zp0304 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0304 nav a:hover,.zp0304 .nav a:hover,.zp0304 .footer a:hover{
  opacity:.65
}
.zp0304 .serviceGrid article,.zp0304 .projectCard,.zp0304 .teamCard,.zp0304 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0304 .serviceGrid article:hover,.zp0304 .projectCard:hover,.zp0304 .teamCard:hover,.zp0304 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0304 *,.zp0304 *::before,.zp0304 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0304 a,.zp0304 button,.zp0304 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">07</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">03</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
