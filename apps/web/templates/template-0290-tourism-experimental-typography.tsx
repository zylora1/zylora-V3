import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0290-tourism-experimental-typography", "family": "Experimental Typography", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|full-bleed-chapters|packages>services>security>location>case-study>proof|borderless|modernist-duo", "industry": "tourism", "hero": "layered-photography", "navigation": "tabbed", "layout": "full-bleed-chapters"};

export default function Template0290({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Tour Operator");
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
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0290" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0290{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0290 *{box-sizing:border-box}
.zp0290 a{color:inherit;text-decoration:none}
.zp0290 h1,.zp0290 h2,.zp0290 h3,.zp0290 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0290 img{max-width:100%;display:block}
.zp0290 button,.zp0290 a{-webkit-tap-highlight-color:transparent}
.zp0290 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0290 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0290 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0290 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0290 .mobileMenu{display:none}
.zp0290 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0290 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0290 .eyebrow,.zp0290 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0290 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0290 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0290 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0290 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0290 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0290 .visual,.zp0290 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0290 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0290 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0290 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0290 .heroPhoto{object-fit:cover}
.zp0290 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0290 .layered{position:relative;padding:8%}
.zp0290 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0290 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0290 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0290 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0290 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0290 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0290 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0290 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0290 .serviceGrid p{color:var(--muted)}
.zp0290 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0290 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0290 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0290 details{border-top:1px solid var(--border);padding:20px 0}
.zp0290 details summary{font-weight:800;cursor:pointer}
.zp0290 details p{color:var(--muted);max-width:70ch}
.zp0290 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0290 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0290 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0290 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0290 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0290 .projects article:nth-child(2){transform:translateY(32px)}
.zp0290 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0290 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0290 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0290 .packages>.sectionTitle{grid-column:1/-1}
.zp0290 .packages article{padding:24px;border:1px solid var(--border)}
.zp0290 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0290 .contact .eyebrow{color:var(--bg)}
.zp0290 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0290 .contactMeta{display:grid;gap:10px}
.zp0290 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0290 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0290 .heroCopy{animation:enter-289 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-289{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0290 .hero{min-height:auto}
.zp0290 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0290 .proof{grid-template-columns:1fr 1fr}
.zp0290 .packages{grid-template-columns:1fr 1fr}
.zp0290 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0290 .nav nav{display:none}
.zp0290 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0290 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0290 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0290 .mobileMenu nav a{padding:10px 8px}
.zp0290 .hero,.zp0290 .layeredHero{grid-template-columns:1fr}
.zp0290 .section,.zp0290 .sectionTitle,.zp0290 .location,.zp0290 .security,.zp0290 .contact{grid-template-columns:1fr}
.zp0290 .projects .projectGrid{grid-template-columns:1fr}
.zp0290 .projects article:nth-child(2){transform:none}
.zp0290 .section{display:block}}
@media(max-width:430px){.zp0290{font-size:16px}
.zp0290 .hero,.zp0290 .section,.zp0290 .contact{padding-left:18px;padding-right:18px}
.zp0290 .serviceGrid,.zp0290 .proof,.zp0290 .packages{grid-template-columns:1fr}
.zp0290 h1{font-size:clamp(42px,14vw,70px)}}

.zp0290 .heroActions a,.zp0290 .primary,.zp0290 .ctaBtn,.zp0290 .btnPrimary,.zp0290 .schedule>a,.zp0290 .newsletter>a{transition:all .2s ease}
.zp0290 .heroActions a:hover,.zp0290 .primary:hover,.zp0290 .ctaBtn:hover,.zp0290 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0290 nav a,.zp0290 .nav a,.zp0290 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0290 nav a:hover,.zp0290 .nav a:hover,.zp0290 .footer a:hover{
  letter-spacing:.12em
}
.zp0290 .serviceGrid article,.zp0290 .projectCard,.zp0290 .teamCard,.zp0290 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0290 .serviceGrid article:hover,.zp0290 .projectCard:hover,.zp0290 .teamCard:hover,.zp0290 .bentoCard:hover{
  transform:skewX(-2deg)
}
@media(prefers-reduced-motion:reduce){.zp0290 *,.zp0290 *::before,.zp0290 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0290 a,.zp0290 button,.zp0290 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">89</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Experimental Typography / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
