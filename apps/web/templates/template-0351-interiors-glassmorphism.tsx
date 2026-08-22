import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0351-interiors-glassmorphism", "family": "Glassmorphism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|timeline-narrative|packages>case-study>metrics>proof>hours>services>projects|soft-12|geometric", "industry": "interiors", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "timeline-narrative"};

export default function Template0351({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0351" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0351{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0351 *{box-sizing:border-box}
.zp0351 a{color:inherit;text-decoration:none}
.zp0351 h1,.zp0351 h2,.zp0351 h3,.zp0351 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0351 img{max-width:100%;display:block}
.zp0351 button,.zp0351 a{-webkit-tap-highlight-color:transparent}
.zp0351 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0351 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0351 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0351 .mobileMenu{display:none}
.zp0351:has(.navRail)>.hero,.zp0351:has(.navRail)>.section,.zp0351:has(.navRail)>.contact,.zp0351:has(.navRail)>.footer{margin-left:190px}
.zp0351 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0351 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0351 .eyebrow,.zp0351 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0351 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0351 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0351 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0351 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0351 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0351 .canvasHero{overflow:hidden}
.zp0351 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0351 .canvasGrid i{border-right:1px solid var(--border)}
.zp0351 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0351 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0351 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0351 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0351 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0351 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0351 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0351 .serviceGrid p{color:var(--muted)}
.zp0351 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0351 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0351 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0351 details{border-top:1px solid var(--border);padding:20px 0}
.zp0351 details summary{font-weight:800;cursor:pointer}
.zp0351 details p{color:var(--muted);max-width:70ch}
.zp0351 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0351 .hours dl{margin:0}
.zp0351 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0351 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0351 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0351 .projects article:nth-child(2){transform:translateY(32px)}
.zp0351 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0351 .metrics div{background:var(--bg);padding:30px}
.zp0351 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Century Gothic, Avenir, sans-serif;color:var(--primary)}
.zp0351 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0351 .packages>.sectionTitle{grid-column:1/-1}
.zp0351 .packages article{padding:24px;border:1px solid var(--border)}
.zp0351 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0351 .contact .eyebrow{color:var(--bg)}
.zp0351 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0351 .contactMeta{display:grid;gap:10px}
.zp0351 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0351{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0351 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0351 .heroCopy{animation:enter-350 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-350{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0351 .hero{min-height:auto}
.zp0351 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0351 .proof{grid-template-columns:1fr 1fr}
.zp0351 .packages{grid-template-columns:1fr 1fr}
.zp0351 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0351 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0351 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0351 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0351 .mobileMenu nav a{padding:10px 8px}
.zp0351 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0351:has(.navRail)>.hero,.zp0351:has(.navRail)>.section,.zp0351:has(.navRail)>.contact,.zp0351:has(.navRail)>.footer{margin-left:0}
.zp0351 .hero{grid-template-columns:1fr}
.zp0351 .section,.zp0351 .sectionTitle,.zp0351 .hours,.zp0351 .contact{grid-template-columns:1fr}
.zp0351 .metrics{grid-template-columns:1fr 1fr}
.zp0351 .projects .projectGrid{grid-template-columns:1fr}
.zp0351 .projects article:nth-child(2){transform:none}
.zp0351 .section{display:block}}
@media(max-width:430px){.zp0351{font-size:16px}
.zp0351 .hero,.zp0351 .section,.zp0351 .contact{padding-left:18px;padding-right:18px}
.zp0351 .serviceGrid,.zp0351 .proof,.zp0351 .metrics,.zp0351 .packages{grid-template-columns:1fr}
.zp0351 h1{font-size:clamp(42px,14vw,70px)}}

.zp0351 .heroActions a,.zp0351 .primary,.zp0351 .ctaBtn,.zp0351 .btnPrimary,.zp0351 .schedule>a,.zp0351 .newsletter>a{transition:all .2s ease}
.zp0351 .heroActions a:hover,.zp0351 .primary:hover,.zp0351 .ctaBtn:hover,.zp0351 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0351 nav a,.zp0351 .nav a,.zp0351 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0351 nav a:hover,.zp0351 .nav a:hover,.zp0351 .footer a:hover{
  color:var(--primary)
}
.zp0351 .serviceGrid article,.zp0351 .projectCard,.zp0351 .teamCard,.zp0351 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0351 .serviceGrid article:hover,.zp0351 .projectCard:hover,.zp0351 .teamCard:hover,.zp0351 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0351 *,.zp0351 *::before,.zp0351 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0351 a,.zp0351 button,.zp0351 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
