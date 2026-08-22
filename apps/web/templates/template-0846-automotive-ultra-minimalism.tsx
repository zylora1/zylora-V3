import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0846-automotive-ultra-minimalism", "family": "Ultra Minimalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|modular-12|case-study>materials>pricing>proof>comparison>programmes>services|circular|neo-grotesk", "industry": "automotive", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "modular-12"};

export default function Template0846({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const industryLabel = "Automotive dealer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0846" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0846{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:0px;--shadow:none;--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0846 *{box-sizing:border-box}
.zp0846 a{color:inherit;text-decoration:none}
.zp0846 h1,.zp0846 h2,.zp0846 h3,.zp0846 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0846 img{max-width:100%;display:block}
.zp0846 button,.zp0846 a{-webkit-tap-highlight-color:transparent}
.zp0846 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0846 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0846 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0846 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0846 .nav.cluster{align-items:flex-end}
.zp0846 .mobileMenu{display:none}
.zp0846 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0846 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0846 .eyebrow,.zp0846 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0846 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0846 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0846 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0846 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0846 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0846 .visual,.zp0846 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0846 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0846 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0846 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0846 .heroPhoto{object-fit:cover}
.zp0846 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0846 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0846 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0846 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0846 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0846 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0846 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0846 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0846 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0846 .serviceGrid p{color:var(--muted)}
.zp0846 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0846 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0846 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0846 details{border-top:1px solid var(--border);padding:20px 0}
.zp0846 details summary{font-weight:800;cursor:pointer}
.zp0846 details p{color:var(--muted);max-width:70ch}
.zp0846 .priceRows{border-top:1px solid var(--border)}
.zp0846 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0846 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0846 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0846 .projects article:nth-child(2){transform:translateY(32px)}
.zp0846 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0846 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0846 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0846 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0846 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0846 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0846 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0846 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0846 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0846 .contact .eyebrow{color:var(--bg)}
.zp0846 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0846 .contactMeta{display:grid;gap:10px}
.zp0846 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0846 .hero{min-height:auto}
.zp0846 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0846 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0846 .nav nav{display:none}
.zp0846 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0846 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0846 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0846 .mobileMenu nav a{padding:10px 8px}
.zp0846 .hero,.zp0846 .carouselHero{grid-template-columns:1fr}
.zp0846 .section,.zp0846 .sectionTitle,.zp0846 .contact{grid-template-columns:1fr}
.zp0846 .projects .projectGrid{grid-template-columns:1fr}
.zp0846 .projects article:nth-child(2){transform:none}
.zp0846 .section{display:block}}
@media(max-width:430px){.zp0846{font-size:16px}
.zp0846 .hero,.zp0846 .section,.zp0846 .contact{padding-left:18px;padding-right:18px}
.zp0846 .serviceGrid,.zp0846 .proof,.zp0846 .programmes>div:last-child,.zp0846 .compareGrid{grid-template-columns:1fr}
.zp0846 h1{font-size:clamp(42px,14vw,70px)}
.zp0846 .priceRows article{grid-template-columns:1fr}}

.zp0846 .heroActions a,.zp0846 .primary,.zp0846 .ctaBtn,.zp0846 .btnPrimary,.zp0846 .schedule>a,.zp0846 .newsletter>a{transition:all .2s ease}
.zp0846 .heroActions a:hover,.zp0846 .primary:hover,.zp0846 .ctaBtn:hover,.zp0846 .btnPrimary:hover{
  opacity:.75
}
.zp0846 nav a,.zp0846 .nav a,.zp0846 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0846 nav a:hover,.zp0846 .nav a:hover,.zp0846 .footer a:hover{
  opacity:.6
}
.zp0846 .serviceGrid article,.zp0846 .projectCard,.zp0846 .teamCard,.zp0846 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0846 .serviceGrid article:hover,.zp0846 .projectCard:hover,.zp0846 .teamCard:hover,.zp0846 .bentoCard:hover{
  opacity:.9
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0846 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0846 .sectionTitle,.zp0846 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0846 *,.zp0846 *::before,.zp0846 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0846 a,.zp0846 button,.zp0846 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">45</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
