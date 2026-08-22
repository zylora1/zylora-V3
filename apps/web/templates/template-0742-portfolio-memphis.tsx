import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0742-portfolio-memphis", "family": "Memphis", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|comparison-led|proof>services>research>values>case-study|pill-controls|warm-editorial", "industry": "portfolio", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "comparison-led"};

export default function Template0742({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const industryLabel = "Creative portfolio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0742" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0742{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0742 *{box-sizing:border-box}
.zp0742 a{color:inherit;text-decoration:none}
.zp0742 h1,.zp0742 h2,.zp0742 h3,.zp0742 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0742 img{max-width:100%;display:block}
.zp0742 button,.zp0742 a{-webkit-tap-highlight-color:transparent}
.zp0742 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0742 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0742 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0742 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0742 .mobileMenu{display:none}
.zp0742 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0742 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0742 .eyebrow,.zp0742 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0742 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0742 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0742 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0742 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0742 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0742 .visual,.zp0742 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0742 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0742 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0742 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0742 .heroPhoto{object-fit:cover}
.zp0742 .cinematic{padding:0;min-height:100vh}
.zp0742 .cinematic>.heroPhoto,.zp0742 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0742 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0742 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0742 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0742 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0742 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0742 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0742 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0742 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0742 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0742 .serviceGrid p{color:var(--muted)}
.zp0742 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0742 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0742 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0742 details{border-top:1px solid var(--border);padding:20px 0}
.zp0742 details summary{font-weight:800;cursor:pointer}
.zp0742 details p{color:var(--muted);max-width:70ch}
.zp0742 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0742 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0742 .projects article:nth-child(2){transform:translateY(32px)}
.zp0742 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Palatino Linotype, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0742 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0742 .researchRows{max-width:900px;margin-left:auto}
.zp0742 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0742 .contact .eyebrow{color:var(--bg)}
.zp0742 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0742 .contactMeta{display:grid;gap:10px}
.zp0742 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0742 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(1deg)}
.zp0742 .heroCopy{animation:enter-741 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-741{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0742 .hero{min-height:auto}
.zp0742 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0742 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0742 .nav nav{display:none}
.zp0742 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0742 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0742 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0742 .mobileMenu nav a{padding:10px 8px}
.zp0742 .hero{grid-template-columns:1fr}
.zp0742 .section,.zp0742 .sectionTitle,.zp0742 .contact{grid-template-columns:1fr}
.zp0742 .projects .projectGrid{grid-template-columns:1fr}
.zp0742 .projects article:nth-child(2){transform:none}
.zp0742 .section{display:block}}
@media(max-width:430px){.zp0742{font-size:16px}
.zp0742 .hero,.zp0742 .section,.zp0742 .contact{padding-left:18px;padding-right:18px}
.zp0742 .serviceGrid,.zp0742 .proof{grid-template-columns:1fr}
.zp0742 h1{font-size:clamp(42px,14vw,70px)}}

.zp0742 .heroActions a,.zp0742 .primary,.zp0742 .ctaBtn,.zp0742 .btnPrimary,.zp0742 .schedule>a,.zp0742 .newsletter>a{transition:all .2s ease}
.zp0742 .heroActions a:hover,.zp0742 .primary:hover,.zp0742 .ctaBtn:hover,.zp0742 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0742 nav a,.zp0742 .nav a,.zp0742 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0742 nav a:hover,.zp0742 .nav a:hover,.zp0742 .footer a:hover{
  color:var(--primary)
}
.zp0742 .serviceGrid article,.zp0742 .projectCard,.zp0742 .teamCard,.zp0742 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0742 .serviceGrid article:hover,.zp0742 .projectCard:hover,.zp0742 .teamCard:hover,.zp0742 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0742 *,.zp0742 *::before,.zp0742 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0742 a,.zp0742 button,.zp0742 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">41</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
