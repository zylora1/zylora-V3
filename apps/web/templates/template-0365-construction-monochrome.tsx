import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0365-construction-monochrome", "family": "Monochrome", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|schedule-led|case-study>services>testimonial>proof>metrics>timeline|hard-outline|condensed-editorial", "industry": "construction", "hero": "side-caption", "navigation": "compact-floating", "layout": "schedule-led"};

export default function Template0365({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const testimonialName = "Signal client";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0365" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0365{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0365 *{box-sizing:border-box}
.zp0365 a{color:inherit;text-decoration:none}
.zp0365 h1,.zp0365 h2,.zp0365 h3,.zp0365 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0365 img{max-width:100%;display:block}
.zp0365 button,.zp0365 a{-webkit-tap-highlight-color:transparent}
.zp0365 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0365 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0365 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0365 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0365 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0365 .mobileMenu{display:none}
.zp0365 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0365 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0365 .eyebrow,.zp0365 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0365 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0365 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0365 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0365 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0365 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0365 .visual,.zp0365 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0365 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0365 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0365 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0365 .heroPhoto{object-fit:cover}
.zp0365 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0365 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0365 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0365 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0365 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0365 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0365 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0365 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0365 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0365 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0365 .serviceGrid p{color:var(--muted)}
.zp0365 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0365 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0365 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0365 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0365 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0365 .testimonial>div{align-self:end}
.zp0365 .testimonial span{display:block;opacity:.7}
.zp0365 details{border-top:1px solid var(--border);padding:20px 0}
.zp0365 details summary{font-weight:800;cursor:pointer}
.zp0365 details p{color:var(--muted);max-width:70ch}
.zp0365 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0365 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0365 .projects article:nth-child(2){transform:translateY(32px)}
.zp0365 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0365 .metrics div{background:var(--bg);padding:30px}
.zp0365 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Arial Narrow, Arial, sans-serif;color:var(--primary)}
.zp0365 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0365 .timeline article{padding:20px 0}
.zp0365 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0365 .contact .eyebrow{color:var(--bg)}
.zp0365 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0365 .contactMeta{display:grid;gap:10px}
.zp0365 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0365 .heroCopy{animation:enter-364 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-364{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0365 .hero{min-height:auto}
.zp0365 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0365 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0365 .nav nav{display:none}
.zp0365 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0365 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0365 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0365 .mobileMenu nav a{padding:10px 8px}
.zp0365 .hero,.zp0365 .captionHero{grid-template-columns:1fr}
.zp0365 .section,.zp0365 .sectionTitle,.zp0365 .contact{grid-template-columns:1fr}
.zp0365 .testimonial{grid-template-columns:1fr}
.zp0365 .metrics{grid-template-columns:1fr 1fr}
.zp0365 .projects .projectGrid{grid-template-columns:1fr}
.zp0365 .projects article:nth-child(2){transform:none}
.zp0365 .section{display:block}}
@media(max-width:430px){.zp0365{font-size:16px}
.zp0365 .hero,.zp0365 .section,.zp0365 .contact{padding-left:18px;padding-right:18px}
.zp0365 .serviceGrid,.zp0365 .proof,.zp0365 .metrics{grid-template-columns:1fr}
.zp0365 h1{font-size:clamp(42px,14vw,70px)}}

.zp0365 .heroActions a,.zp0365 .primary,.zp0365 .ctaBtn,.zp0365 .btnPrimary,.zp0365 .schedule>a,.zp0365 .newsletter>a{transition:all .2s ease}
.zp0365 .heroActions a:hover,.zp0365 .primary:hover,.zp0365 .ctaBtn:hover,.zp0365 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0365 nav a,.zp0365 .nav a,.zp0365 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0365 nav a:hover,.zp0365 .nav a:hover,.zp0365 .footer a:hover{
  color:var(--secondary)
}
.zp0365 .serviceGrid article,.zp0365 .projectCard,.zp0365 .teamCard,.zp0365 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0365 .serviceGrid article:hover,.zp0365 .projectCard:hover,.zp0365 .teamCard:hover,.zp0365 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0365 *,.zp0365 *::before,.zp0365 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0365 a,.zp0365 button,.zp0365 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">64</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
