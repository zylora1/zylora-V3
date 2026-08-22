import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0335-architecture-aurora", "family": "Aurora", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|press-led|services>projects>proof>materials>community>integrations|soft-12|clean-humanist", "industry": "architecture", "hero": "location-led", "navigation": "vertical-rail", "layout": "press-led"};

export default function Template0335({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Architecture Studio");
  const headline = String(content.headline || "Architecture shaped by context, material, daylight, and how people actually live.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential design", "Commercial projects", "Planning", "Interiors", "Feasibility studies"];
  const industryLabel = "Architecture studio";
  const serviceNotes = ["Concept to planning permission service: we handle the technical and navigate the bureaucratic.", "New build and conversion projects for residential, commercial, and mixed-use clients.", "Planning appeal specialists with a strong track record on complex applications.", "BIM-capable studio: full 3D modelling and clash detection before a brick is laid.", "Post-occupancy evaluation included — we track how buildings perform, not just how they look."];
  const proofPoints = ["ARB and RIBA chartered", "RIBA Award winners", "£2M PI insurance", "Sustainable design lead"];
  const storyBody = "Miller & Rowe Architecture Studio is presented as a real working architecture studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0335" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0335{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0335 *{box-sizing:border-box}
.zp0335 a{color:inherit;text-decoration:none}
.zp0335 h1,.zp0335 h2,.zp0335 h3,.zp0335 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0335 img{max-width:100%;display:block}
.zp0335 button,.zp0335 a{-webkit-tap-highlight-color:transparent}
.zp0335 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0335 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0335 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0335 .mobileMenu{display:none}
.zp0335:has(.navRail)>.hero,.zp0335:has(.navRail)>.section,.zp0335:has(.navRail)>.contact,.zp0335:has(.navRail)>.footer{margin-left:190px}
.zp0335 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0335 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0335 .eyebrow,.zp0335 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0335 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0335 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0335 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0335 .heroActions a,.zp0335 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0335 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0335 .locationHero{grid-template-columns:1fr 1fr}
.zp0335 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0335 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0335 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0335 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0335 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0335 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0335 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0335 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0335 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0335 .serviceGrid p{color:var(--muted)}
.zp0335 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0335 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0335 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0335 details{border-top:1px solid var(--border);padding:20px 0}
.zp0335 details summary{font-weight:800;cursor:pointer}
.zp0335 details p{color:var(--muted);max-width:70ch}
.zp0335 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0335 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0335 .projects article:nth-child(2){transform:translateY(32px)}
.zp0335 .integrations,.zp0335 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0335 .integrations>div,.zp0335 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0335 .integrations b,.zp0335 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0335 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0335 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0335 .contact .eyebrow{color:var(--bg)}
.zp0335 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0335 .contactMeta{display:grid;gap:10px}
.zp0335 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0335{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0335 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0335 .heroCopy{animation:enter-334 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-334{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0335 .hero{min-height:auto}
.zp0335 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0335 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0335 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0335 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0335 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0335 .mobileMenu nav a{padding:10px 8px}
.zp0335 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0335:has(.navRail)>.hero,.zp0335:has(.navRail)>.section,.zp0335:has(.navRail)>.contact,.zp0335:has(.navRail)>.footer{margin-left:0}
.zp0335 .hero,.zp0335 .locationHero{grid-template-columns:1fr}
.zp0335 .section,.zp0335 .sectionTitle,.zp0335 .contact{grid-template-columns:1fr}
.zp0335 .projects .projectGrid{grid-template-columns:1fr}
.zp0335 .projects article:nth-child(2){transform:none}
.zp0335 .section{display:block}}
@media(max-width:430px){.zp0335{font-size:16px}
.zp0335 .hero,.zp0335 .section,.zp0335 .contact{padding-left:18px;padding-right:18px}
.zp0335 .serviceGrid,.zp0335 .proof{grid-template-columns:1fr}
.zp0335 h1{font-size:clamp(42px,14vw,70px)}}

.zp0335 .heroActions a,.zp0335 .primary,.zp0335 .ctaBtn,.zp0335 .btnPrimary,.zp0335 .schedule>a,.zp0335 .newsletter>a{transition:all .2s ease}
.zp0335 .heroActions a:hover,.zp0335 .primary:hover,.zp0335 .ctaBtn:hover,.zp0335 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0335 nav a,.zp0335 .nav a,.zp0335 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0335 nav a:hover,.zp0335 .nav a:hover,.zp0335 .footer a:hover{
  color:var(--primary)
}
.zp0335 .serviceGrid article,.zp0335 .projectCard,.zp0335 .teamCard,.zp0335 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0335 .serviceGrid article:hover,.zp0335 .projectCard:hover,.zp0335 .teamCard:hover,.zp0335 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0335 *,.zp0335 *::before,.zp0335 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0335 a,.zp0335 button,.zp0335 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
