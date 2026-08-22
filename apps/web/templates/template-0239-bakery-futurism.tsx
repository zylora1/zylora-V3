import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0239-bakery-futurism", "family": "Futurism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|manifesto-grid|press>proof>case-study>projects>location>services|soft-12|clean-humanist", "industry": "bakery", "hero": "location-led", "navigation": "vertical-rail", "layout": "manifesto-grid"};

export default function Template0239({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0239" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0239{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0239 *{box-sizing:border-box}
.zp0239 a{color:inherit;text-decoration:none}
.zp0239 h1,.zp0239 h2,.zp0239 h3,.zp0239 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0239 img{max-width:100%;display:block}
.zp0239 button,.zp0239 a{-webkit-tap-highlight-color:transparent}
.zp0239 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0239 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0239 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0239 .mobileMenu{display:none}
.zp0239:has(.navRail)>.hero,.zp0239:has(.navRail)>.section,.zp0239:has(.navRail)>.contact,.zp0239:has(.navRail)>.footer{margin-left:190px}
.zp0239 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0239 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0239 .eyebrow,.zp0239 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0239 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0239 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0239 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0239 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0239 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0239 .locationHero{grid-template-columns:1fr 1fr}
.zp0239 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0239 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0239 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0239 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0239 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0239 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0239 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0239 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0239 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0239 .serviceGrid p{color:var(--muted)}
.zp0239 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0239 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0239 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0239 details{border-top:1px solid var(--border);padding:20px 0}
.zp0239 details summary{font-weight:800;cursor:pointer}
.zp0239 details p{color:var(--muted);max-width:70ch}
.zp0239 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0239 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0239 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0239 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0239 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0239 .projects article:nth-child(2){transform:translateY(32px)}
.zp0239 .awards>div{max-width:800px;margin-left:auto}
.zp0239 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0239 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0239 .contact .eyebrow{color:var(--bg)}
.zp0239 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0239 .contactMeta{display:grid;gap:10px}
.zp0239 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0239 .heroCopy{animation:enter-238 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-238{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0239 .hero{min-height:auto}
.zp0239 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0239 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0239 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0239 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0239 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0239 .mobileMenu nav a{padding:10px 8px}
.zp0239 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0239:has(.navRail)>.hero,.zp0239:has(.navRail)>.section,.zp0239:has(.navRail)>.contact,.zp0239:has(.navRail)>.footer{margin-left:0}
.zp0239 .hero,.zp0239 .locationHero{grid-template-columns:1fr}
.zp0239 .section,.zp0239 .sectionTitle,.zp0239 .location,.zp0239 .contact{grid-template-columns:1fr}
.zp0239 .projects .projectGrid{grid-template-columns:1fr}
.zp0239 .projects article:nth-child(2){transform:none}
.zp0239 .section{display:block}}
@media(max-width:430px){.zp0239{font-size:16px}
.zp0239 .hero,.zp0239 .section,.zp0239 .contact{padding-left:18px;padding-right:18px}
.zp0239 .serviceGrid,.zp0239 .proof{grid-template-columns:1fr}
.zp0239 h1{font-size:clamp(42px,14vw,70px)}}

.zp0239 .heroActions a,.zp0239 .primary,.zp0239 .ctaBtn,.zp0239 .btnPrimary,.zp0239 .schedule>a,.zp0239 .newsletter>a{transition:all .2s ease}
.zp0239 .heroActions a:hover,.zp0239 .primary:hover,.zp0239 .ctaBtn:hover,.zp0239 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0239 nav a,.zp0239 .nav a,.zp0239 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0239 nav a:hover,.zp0239 .nav a:hover,.zp0239 .footer a:hover{
  color:var(--primary)
}
.zp0239 .serviceGrid article,.zp0239 .projectCard,.zp0239 .teamCard,.zp0239 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0239 .serviceGrid article:hover,.zp0239 .projectCard:hover,.zp0239 .teamCard:hover,.zp0239 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0239 *,.zp0239 *::before,.zp0239 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0239 a,.zp0239 button,.zp0239 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
