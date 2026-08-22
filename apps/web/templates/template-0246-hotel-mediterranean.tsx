import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0246-hotel-mediterranean", "family": "Mediterranean", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|portfolio-sequence|location>projects>schedule>case-study>proof>services>manifesto|pill-controls|neo-grotesk", "industry": "hotel", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "portfolio-sequence"};

export default function Template0246({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Boutique Hotel");
  const headline = String(content.headline || "A design-led stay shaped by place, quiet details, and genuinely useful hospitality.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Rooms and suites", "Dining", "Spa", "Private events", "Local experiences"];
  const industryLabel = "Boutique hotel";
  const serviceNotes = ["Rooms from studio to suite, each styled individually — no two are identical.", "Breakfast sourced within 30 miles: menus change with the seasons.", "Concierge-arranged experiences: hiking guides, private dining, gallery access.", "Business facilities including private meeting rooms with AV and catering.", "Flexible check-in and late check-out on request — we work around your plans."];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0246" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0246{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0246 *{box-sizing:border-box}
.zp0246 a{color:inherit;text-decoration:none}
.zp0246 h1,.zp0246 h2,.zp0246 h3,.zp0246 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0246 img{max-width:100%;display:block}
.zp0246 button,.zp0246 a{-webkit-tap-highlight-color:transparent}
.zp0246 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0246 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0246 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0246 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0246 .mobileMenu{display:none}
.zp0246 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0246 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0246 .eyebrow,.zp0246 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0246 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0246 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0246 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0246 .heroActions a,.zp0246 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0246 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0246 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0246 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0246 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0246 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0246 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0246 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0246 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0246 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0246 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0246 .serviceGrid p{color:var(--muted)}
.zp0246 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0246 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0246 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0246 details{border-top:1px solid var(--border);padding:20px 0}
.zp0246 details summary{font-weight:800;cursor:pointer}
.zp0246 details p{color:var(--muted);max-width:70ch}
.zp0246 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0246 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0246 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0246 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0246 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0246 .projects article:nth-child(2){transform:translateY(32px)}
.zp0246 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0246 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0246 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0246 .contact .eyebrow{color:var(--bg)}
.zp0246 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0246 .contactMeta{display:grid;gap:10px}
.zp0246 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0246 .heroCopy{animation:enter-245 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-245{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0246 .hero{min-height:auto}
.zp0246 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0246 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0246 .nav nav{display:none}
.zp0246 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0246 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0246 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0246 .mobileMenu nav a{padding:10px 8px}
.zp0246 .hero,.zp0246 .timelineHero{grid-template-columns:1fr}
.zp0246 .section,.zp0246 .sectionTitle,.zp0246 .location,.zp0246 .contact{grid-template-columns:1fr}
.zp0246 .projects .projectGrid{grid-template-columns:1fr}
.zp0246 .projects article:nth-child(2){transform:none}
.zp0246 .section{display:block}}
@media(max-width:430px){.zp0246{font-size:16px}
.zp0246 .hero,.zp0246 .section,.zp0246 .contact{padding-left:18px;padding-right:18px}
.zp0246 .serviceGrid,.zp0246 .proof{grid-template-columns:1fr}
.zp0246 h1{font-size:clamp(42px,14vw,70px)}}

.zp0246 .heroActions a,.zp0246 .primary,.zp0246 .ctaBtn,.zp0246 .btnPrimary,.zp0246 .schedule>a,.zp0246 .newsletter>a{transition:all .2s ease}
.zp0246 .heroActions a:hover,.zp0246 .primary:hover,.zp0246 .ctaBtn:hover,.zp0246 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0246 nav a,.zp0246 .nav a,.zp0246 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0246 nav a:hover,.zp0246 .nav a:hover,.zp0246 .footer a:hover{
  color:var(--primary)
}
.zp0246 .serviceGrid article,.zp0246 .projectCard,.zp0246 .teamCard,.zp0246 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0246 .serviceGrid article:hover,.zp0246 .projectCard:hover,.zp0246 .teamCard:hover,.zp0246 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0246 *,.zp0246 *::before,.zp0246 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0246 a,.zp0246 button,.zp0246 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Mediterranean / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
