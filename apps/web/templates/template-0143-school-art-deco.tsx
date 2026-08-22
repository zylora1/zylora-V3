import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0143-school-art-deco", "family": "Art Deco", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|asymmetric-5-7|services>products>timeline>metrics>proof>hours|soft-12|clean-humanist", "industry": "school", "hero": "location-led", "navigation": "vertical-rail", "layout": "asymmetric-5-7"};

export default function Template0143({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0143" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0143{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0143 *{box-sizing:border-box}
.zp0143 a{color:inherit;text-decoration:none}
.zp0143 h1,.zp0143 h2,.zp0143 h3,.zp0143 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0143 img{max-width:100%;display:block}
.zp0143 button,.zp0143 a{-webkit-tap-highlight-color:transparent}
.zp0143 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0143 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0143 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0143 .mobileMenu{display:none}
.zp0143:has(.navRail)>.hero,.zp0143:has(.navRail)>.section,.zp0143:has(.navRail)>.contact,.zp0143:has(.navRail)>.footer{margin-left:190px}
.zp0143 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0143 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0143 .eyebrow,.zp0143 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0143 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0143 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0143 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0143 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0143 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0143 .locationHero{grid-template-columns:1fr 1fr}
.zp0143 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0143 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0143 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0143 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0143 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0143 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0143 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0143 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0143 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0143 .serviceGrid p{color:var(--muted)}
.zp0143 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0143 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0143 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0143 details{border-top:1px solid var(--border);padding:20px 0}
.zp0143 details summary{font-weight:800;cursor:pointer}
.zp0143 details p{color:var(--muted);max-width:70ch}
.zp0143 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0143 .hours dl{margin:0}
.zp0143 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0143 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0143 .metrics div{background:var(--bg);padding:30px}
.zp0143 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Avenir, Helvetica Neue, Arial, sans-serif;color:var(--primary)}
.zp0143 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0143 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0143 .p1,.zp0143 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0143 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0143 .timeline article{padding:20px 0}
.zp0143 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0143 .contact .eyebrow{color:var(--bg)}
.zp0143 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0143 .contactMeta{display:grid;gap:10px}
.zp0143 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0143 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0143 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
.zp0143 .heroCopy{animation:enter-142 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-142{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0143 .hero{min-height:auto}
.zp0143 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0143 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0143 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0143 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0143 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0143 .mobileMenu nav a{padding:10px 8px}
.zp0143 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0143:has(.navRail)>.hero,.zp0143:has(.navRail)>.section,.zp0143:has(.navRail)>.contact,.zp0143:has(.navRail)>.footer{margin-left:0}
.zp0143 .hero,.zp0143 .locationHero{grid-template-columns:1fr}
.zp0143 .section,.zp0143 .sectionTitle,.zp0143 .hours,.zp0143 .contact{grid-template-columns:1fr}
.zp0143 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0143 .metrics{grid-template-columns:1fr 1fr}
.zp0143 .section{display:block}}
@media(max-width:430px){.zp0143{font-size:16px}
.zp0143 .hero,.zp0143 .section,.zp0143 .contact{padding-left:18px;padding-right:18px}
.zp0143 .serviceGrid,.zp0143 .proof,.zp0143 .collectionGrid,.zp0143 .metrics{grid-template-columns:1fr}
.zp0143 h1{font-size:clamp(42px,14vw,70px)}}

.zp0143 .heroActions a,.zp0143 .primary,.zp0143 .ctaBtn,.zp0143 .btnPrimary,.zp0143 .schedule>a,.zp0143 .newsletter>a{transition:all .2s ease}
.zp0143 .heroActions a:hover,.zp0143 .primary:hover,.zp0143 .ctaBtn:hover,.zp0143 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0143 nav a,.zp0143 .nav a,.zp0143 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0143 nav a:hover,.zp0143 .nav a:hover,.zp0143 .footer a:hover{
  color:var(--primary)
}
.zp0143 .serviceGrid article,.zp0143 .projectCard,.zp0143 .teamCard,.zp0143 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0143 .serviceGrid article:hover,.zp0143 .projectCard:hover,.zp0143 .teamCard:hover,.zp0143 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0143 *,.zp0143 *::before,.zp0143 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0143 a,.zp0143 button,.zp0143 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
