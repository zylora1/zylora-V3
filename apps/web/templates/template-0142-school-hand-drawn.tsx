import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0142-school-hand-drawn", "family": "Hand-drawn", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|local-service-map|process>services>research>comparison>proof|circular|warm-editorial", "industry": "school", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "local-service-map"};

export default function Template0142({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate School");
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
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0142" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0142{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0142 *{box-sizing:border-box}
.zp0142 a{color:inherit;text-decoration:none}
.zp0142 h1,.zp0142 h2,.zp0142 h3,.zp0142 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0142 img{max-width:100%;display:block}
.zp0142 button,.zp0142 a{-webkit-tap-highlight-color:transparent}
.zp0142 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0142 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0142 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0142 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0142 .nav.cluster{align-items:flex-end}
.zp0142 .mobileMenu{display:none}
.zp0142 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0142 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0142 .eyebrow,.zp0142 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0142 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0142 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0142 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0142 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0142 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0142 .visual,.zp0142 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0142 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0142 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0142 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0142 .heroPhoto{object-fit:cover}
.zp0142 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0142 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0142 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0142 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0142 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0142 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0142 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0142 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0142 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0142 .serviceGrid p{color:var(--muted)}
.zp0142 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0142 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0142 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0142 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0142 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0142 details{border-top:1px solid var(--border);padding:20px 0}
.zp0142 details summary{font-weight:800;cursor:pointer}
.zp0142 details p{color:var(--muted);max-width:70ch}
.zp0142 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0142 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0142 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0142 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0142 .researchRows{max-width:900px;margin-left:auto}
.zp0142 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0142 .contact .eyebrow{color:var(--bg)}
.zp0142 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0142 .contactMeta{display:grid;gap:10px}
.zp0142 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0142 .heroCopy{animation:enter-141 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-141{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0142 .hero{min-height:auto}
.zp0142 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0142 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0142 .nav nav{display:none}
.zp0142 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0142 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0142 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0142 .mobileMenu nav a{padding:10px 8px}
.zp0142 .hero,.zp0142 .carouselHero{grid-template-columns:1fr}
.zp0142 .section,.zp0142 .sectionTitle,.zp0142 .contact{grid-template-columns:1fr}
.zp0142 .section{display:block}}
@media(max-width:430px){.zp0142{font-size:16px}
.zp0142 .hero,.zp0142 .section,.zp0142 .contact{padding-left:18px;padding-right:18px}
.zp0142 .serviceGrid,.zp0142 .proof,.zp0142 .compareGrid{grid-template-columns:1fr}
.zp0142 h1{font-size:clamp(42px,14vw,70px)}}

.zp0142 .heroActions a,.zp0142 .primary,.zp0142 .ctaBtn,.zp0142 .btnPrimary,.zp0142 .schedule>a,.zp0142 .newsletter>a{transition:all .2s ease}
.zp0142 .heroActions a:hover,.zp0142 .primary:hover,.zp0142 .ctaBtn:hover,.zp0142 .btnPrimary:hover{
  opacity:.8;text-decoration:underline wavy
}
.zp0142 nav a,.zp0142 .nav a,.zp0142 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0142 nav a:hover,.zp0142 .nav a:hover,.zp0142 .footer a:hover{
  opacity:.7
}
.zp0142 .serviceGrid article,.zp0142 .projectCard,.zp0142 .teamCard,.zp0142 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0142 .serviceGrid article:hover,.zp0142 .projectCard:hover,.zp0142 .teamCard:hover,.zp0142 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0142 *,.zp0142 *::before,.zp0142 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0142 a,.zp0142 button,.zp0142 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">41</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Hand-drawn / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
