import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0333-architecture-cyberpunk", "family": "Cyberpunk", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|community-led|proof>manifesto>case-study>projects>values>metrics>services|hard-outline|humanist-classic", "industry": "architecture", "hero": "side-caption", "navigation": "compact-floating", "layout": "community-led"};

export default function Template0333({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Architecture Studio");
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
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0333" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0333{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0333 *{box-sizing:border-box}
.zp0333 a{color:inherit;text-decoration:none}
.zp0333 h1,.zp0333 h2,.zp0333 h3,.zp0333 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0333 img{max-width:100%;display:block}
.zp0333 button,.zp0333 a{-webkit-tap-highlight-color:transparent}
.zp0333 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0333 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0333 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0333 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0333 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0333 .mobileMenu{display:none}
.zp0333 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0333 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0333 .eyebrow,.zp0333 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0333 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0333 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0333 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0333 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0333 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0333 .visual,.zp0333 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0333 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0333 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0333 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0333 .heroPhoto{object-fit:cover}
.zp0333 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0333 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0333 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0333 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0333 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0333 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0333 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0333 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0333 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0333 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0333 .serviceGrid p{color:var(--muted)}
.zp0333 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0333 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0333 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0333 details{border-top:1px solid var(--border);padding:20px 0}
.zp0333 details summary{font-weight:800;cursor:pointer}
.zp0333 details p{color:var(--muted);max-width:70ch}
.zp0333 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0333 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0333 .projects article:nth-child(2){transform:translateY(32px)}
.zp0333 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0333 .metrics div{background:var(--bg);padding:30px}
.zp0333 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Baskerville, Georgia, serif;color:var(--primary)}
.zp0333 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0333 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0333 .contact .eyebrow{color:var(--bg)}
.zp0333 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0333 .contactMeta{display:grid;gap:10px}
.zp0333 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0333 .heroCopy{animation:enter-332 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-332{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0333 .hero{min-height:auto}
.zp0333 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0333 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0333 .nav nav{display:none}
.zp0333 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0333 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0333 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0333 .mobileMenu nav a{padding:10px 8px}
.zp0333 .hero,.zp0333 .captionHero{grid-template-columns:1fr}
.zp0333 .section,.zp0333 .sectionTitle,.zp0333 .contact{grid-template-columns:1fr}
.zp0333 .metrics{grid-template-columns:1fr 1fr}
.zp0333 .projects .projectGrid{grid-template-columns:1fr}
.zp0333 .projects article:nth-child(2){transform:none}
.zp0333 .section{display:block}}
@media(max-width:430px){.zp0333{font-size:16px}
.zp0333 .hero,.zp0333 .section,.zp0333 .contact{padding-left:18px;padding-right:18px}
.zp0333 .serviceGrid,.zp0333 .proof,.zp0333 .metrics{grid-template-columns:1fr}
.zp0333 h1{font-size:clamp(42px,14vw,70px)}}

.zp0333 .heroActions a,.zp0333 .primary,.zp0333 .ctaBtn,.zp0333 .btnPrimary,.zp0333 .schedule>a,.zp0333 .newsletter>a{transition:all .2s ease}
.zp0333 .heroActions a:hover,.zp0333 .primary:hover,.zp0333 .ctaBtn:hover,.zp0333 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0333 nav a,.zp0333 .nav a,.zp0333 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0333 nav a:hover,.zp0333 .nav a:hover,.zp0333 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0333 .serviceGrid article,.zp0333 .projectCard,.zp0333 .teamCard,.zp0333 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0333 .serviceGrid article:hover,.zp0333 .projectCard:hover,.zp0333 .teamCard:hover,.zp0333 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0333 *,.zp0333 *::before,.zp0333 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0333 a,.zp0333 button,.zp0333 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">32</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
