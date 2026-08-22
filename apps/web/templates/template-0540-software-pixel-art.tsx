import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0540-software-pixel-art", "family": "Pixel Art", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|catalogue-table|programmes>proof>press>services>projects>case-study>location|notched|literary", "industry": "software", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "catalogue-table"};

export default function Template0540({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Software Studio");
  const headline = String(content.headline || "Experienced product engineering for teams that need reliable software and clear delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product engineering", "Web applications", "Mobile apps", "Platform modernization", "Support"];
  const industryLabel = "Software studio";
  const serviceNotes = ["Agile delivery with two-week sprints: working software every fortnight, not just updates.", "Code quality: 85%+ test coverage required before any feature ships to production.", "Architecture review at project start — we identify technical risk before writing a line.", "Maintenance packages that include dependency updates, security patches, and monitoring.", "Source code escrow and full handover documentation as standard on every engagement."];
  const proofPoints = ["ISO 9001 quality certified", "GitHub-first delivery", "85%+ test coverage minimum", "GDPR compliant processes"];
  const testimonial = "Every sprint we had something working to test. The quality was high from the start — no big crunch at the end.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0540" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0540{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0540 *{box-sizing:border-box}
.zp0540 a{color:inherit;text-decoration:none}
.zp0540 h1,.zp0540 h2,.zp0540 h3,.zp0540 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0540 img{max-width:100%;display:block}
.zp0540 button,.zp0540 a{-webkit-tap-highlight-color:transparent}
.zp0540 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0540 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0540 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0540 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0540 .mobileMenu{display:none}
.zp0540 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0540 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0540 .eyebrow,.zp0540 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0540 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0540 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0540 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0540 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0540 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0540 .mapHero{grid-template-columns:1fr 1fr}
.zp0540 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0540 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0540 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0540 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0540 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0540 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0540 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0540 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0540 .serviceGrid p{color:var(--muted)}
.zp0540 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0540 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0540 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0540 details{border-top:1px solid var(--border);padding:20px 0}
.zp0540 details summary{font-weight:800;cursor:pointer}
.zp0540 details p{color:var(--muted);max-width:70ch}
.zp0540 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0540 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0540 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0540 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0540 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0540 .projects article:nth-child(2){transform:translateY(32px)}
.zp0540 .awards>div{max-width:800px;margin-left:auto}
.zp0540 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0540 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0540 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0540 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0540 .contact .eyebrow{color:var(--bg)}
.zp0540 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0540 .contactMeta{display:grid;gap:10px}
.zp0540 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0540{image-rendering:pixelated}
.zp0540 *{border-radius:0!important}
.zp0540 .heroCopy{animation:enter-539 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-539{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0540 .hero{min-height:auto}
.zp0540 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0540 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0540 .nav nav{display:none}
.zp0540 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0540 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0540 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0540 .mobileMenu nav a{padding:10px 8px}
.zp0540 .hero,.zp0540 .mapHero{grid-template-columns:1fr}
.zp0540 .section,.zp0540 .sectionTitle,.zp0540 .location,.zp0540 .contact{grid-template-columns:1fr}
.zp0540 .projects .projectGrid{grid-template-columns:1fr}
.zp0540 .projects article:nth-child(2){transform:none}
.zp0540 .section{display:block}}
@media(max-width:430px){.zp0540{font-size:16px}
.zp0540 .hero,.zp0540 .section,.zp0540 .contact{padding-left:18px;padding-right:18px}
.zp0540 .serviceGrid,.zp0540 .proof,.zp0540 .programmes>div:last-child{grid-template-columns:1fr}
.zp0540 h1{font-size:clamp(42px,14vw,70px)}}

.zp0540 .heroActions a,.zp0540 .primary,.zp0540 .ctaBtn,.zp0540 .btnPrimary,.zp0540 .schedule>a,.zp0540 .newsletter>a{transition:all .2s ease}
.zp0540 .heroActions a:hover,.zp0540 .primary:hover,.zp0540 .ctaBtn:hover,.zp0540 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0540 nav a,.zp0540 .nav a,.zp0540 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0540 nav a:hover,.zp0540 .nav a:hover,.zp0540 .footer a:hover{
  color:var(--primary)
}
.zp0540 .serviceGrid article,.zp0540 .projectCard,.zp0540 .teamCard,.zp0540 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0540 .serviceGrid article:hover,.zp0540 .projectCard:hover,.zp0540 .teamCard:hover,.zp0540 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0540 *,.zp0540 *::before,.zp0540 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0540 a,.zp0540 button,.zp0540 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
