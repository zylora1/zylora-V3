import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0494-ai-company-neo-futurism", "family": "Neo-futurism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|menu-led|story>services>programmes>proof>availability>gallery|circular|ceremonial", "industry": "ai-company", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "menu-led"};

export default function Template0494({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Ai Company");
  const headline = String(content.headline || "Applied AI designed around reliable workflows, measurable quality, and human control.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["AI assistants", "Document intelligence", "Automation", "Evaluation", "Enterprise deployment"];
  const industryLabel = "AI company";
  const serviceNotes = ["Production-ready models with clear input/output contracts and versioned endpoints.", "On-premise deployment available for data-sensitive organisations.", "Model cards and audit trails provided for every inference decision.", "Human-in-the-loop option: AI recommendations, human approvals, logged chain.", "Retraining on your proprietary data with performance benchmarks agreed upfront."];
  const proofPoints = ["EU AI Act compliant", "SOC 2 certified", "Explainability dashboard", "On-prem available"];
  const storyQuote = "\u201cApplied AI designed around reliable workflows, measurable quality, and human control.\u201d";
  const storyBody = "Slate Ai Company is presented as a real working ai company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0494" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0494{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0494 *{box-sizing:border-box}
.zp0494 a{color:inherit;text-decoration:none}
.zp0494 h1,.zp0494 h2,.zp0494 h3,.zp0494 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0494 img{max-width:100%;display:block}
.zp0494 button,.zp0494 a{-webkit-tap-highlight-color:transparent}
.zp0494 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0494 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0494 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0494 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0494 .nav.cluster{align-items:flex-end}
.zp0494 .mobileMenu{display:none}
.zp0494 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0494 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0494 .eyebrow,.zp0494 .sectionTitle>span,.zp0494 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0494 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0494 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0494 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0494 .heroActions a,.zp0494 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0494 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0494 .visual,.zp0494 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0494 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0494 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0494 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0494 .heroPhoto{object-fit:cover}
.zp0494 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0494 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0494 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0494 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0494 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0494 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0494 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0494 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0494 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0494 .serviceGrid p{color:var(--muted)}
.zp0494 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0494 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0494 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0494 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0494 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0494 .story p{color:var(--muted)}
.zp0494 details{border-top:1px solid var(--border);padding:20px 0}
.zp0494 details summary{font-weight:800;cursor:pointer}
.zp0494 details p{color:var(--muted);max-width:70ch}
.zp0494 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0494 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0494 .galleryGrid>*:first-child{grid-row:1/3}
.zp0494 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0494 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0494 .g2,.zp0494 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0494 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0494 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0494 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0494 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0494 .contact .eyebrow{color:var(--bg)}
.zp0494 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0494 .contactMeta{display:grid;gap:10px}
.zp0494 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0494 .heroCopy{animation:enter-493 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-493{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0494 .hero{min-height:auto}
.zp0494 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0494 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0494 .nav nav{display:none}
.zp0494 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0494 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0494 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0494 .mobileMenu nav a{padding:10px 8px}
.zp0494 .hero,.zp0494 .carouselHero{grid-template-columns:1fr}
.zp0494 .section,.zp0494 .sectionTitle,.zp0494 .story,.zp0494 .contact{grid-template-columns:1fr}
.zp0494 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0494 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0494 .section{display:block}}
@media(max-width:430px){.zp0494{font-size:16px}
.zp0494 .hero,.zp0494 .section,.zp0494 .contact{padding-left:18px;padding-right:18px}
.zp0494 .serviceGrid,.zp0494 .proof,.zp0494 .programmes>div:last-child{grid-template-columns:1fr}
.zp0494 h1{font-size:clamp(42px,14vw,70px)}
.zp0494 .galleryGrid{grid-template-columns:1fr}
.zp0494 .galleryGrid>*:first-child{grid-column:auto}}

.zp0494 .heroActions a,.zp0494 .primary,.zp0494 .ctaBtn,.zp0494 .btnPrimary,.zp0494 .schedule>a,.zp0494 .newsletter>a{transition:all .2s ease}
.zp0494 .heroActions a:hover,.zp0494 .primary:hover,.zp0494 .ctaBtn:hover,.zp0494 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0494 nav a,.zp0494 .nav a,.zp0494 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0494 nav a:hover,.zp0494 .nav a:hover,.zp0494 .footer a:hover{
  color:var(--primary)
}
.zp0494 .serviceGrid article,.zp0494 .projectCard,.zp0494 .teamCard,.zp0494 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0494 .serviceGrid article:hover,.zp0494 .projectCard:hover,.zp0494 .teamCard:hover,.zp0494 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0494 *,.zp0494 *::before,.zp0494 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0494 a,.zp0494 button,.zp0494 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">93</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-futurism / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
