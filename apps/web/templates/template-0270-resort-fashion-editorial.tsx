import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0270-resort-fashion-editorial", "family": "Fashion Editorial", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|modular-12|availability>features>services>proof>credentials>products>comparison|circular|neo-grotesk", "industry": "resort", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "modular-12"};

export default function Template0270({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0270" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0270{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0270 *{box-sizing:border-box}
.zp0270 a{color:inherit;text-decoration:none}
.zp0270 h1,.zp0270 h2,.zp0270 h3,.zp0270 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0270 img{max-width:100%;display:block}
.zp0270 button,.zp0270 a{-webkit-tap-highlight-color:transparent}
.zp0270 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0270 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0270 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0270 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0270 .nav.cluster{align-items:flex-end}
.zp0270 .mobileMenu{display:none}
.zp0270 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0270 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0270 .eyebrow,.zp0270 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0270 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0270 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0270 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0270 .heroActions a,.zp0270 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0270 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0270 .visual,.zp0270 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0270 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0270 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0270 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0270 .heroPhoto{object-fit:cover}
.zp0270 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0270 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0270 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0270 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0270 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0270 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0270 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0270 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0270 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0270 .serviceGrid p{color:var(--muted)}
.zp0270 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0270 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0270 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0270 details{border-top:1px solid var(--border);padding:20px 0}
.zp0270 details summary{font-weight:800;cursor:pointer}
.zp0270 details p{color:var(--muted);max-width:70ch}
.zp0270 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0270 .features ul{list-style:none;margin:0;padding:0}
.zp0270 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0270 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0270 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0270 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0270 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0270 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0270 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0270 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0270 .p1,.zp0270 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0270 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0270 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0270 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0270 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0270 .contact .eyebrow{color:var(--bg)}
.zp0270 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0270 .contactMeta{display:grid;gap:10px}
.zp0270 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0270 .heroCopy{animation:enter-269 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-269{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0270 .hero{min-height:auto}
.zp0270 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0270 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0270 .nav nav{display:none}
.zp0270 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0270 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0270 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0270 .mobileMenu nav a{padding:10px 8px}
.zp0270 .hero,.zp0270 .carouselHero{grid-template-columns:1fr}
.zp0270 .section,.zp0270 .sectionTitle,.zp0270 .features,.zp0270 .contact{grid-template-columns:1fr}
.zp0270 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0270 .section{display:block}}
@media(max-width:430px){.zp0270{font-size:16px}
.zp0270 .hero,.zp0270 .section,.zp0270 .contact{padding-left:18px;padding-right:18px}
.zp0270 .serviceGrid,.zp0270 .proof,.zp0270 .collectionGrid,.zp0270 .compareGrid{grid-template-columns:1fr}
.zp0270 h1{font-size:clamp(42px,14vw,70px)}}

.zp0270 .heroActions a,.zp0270 .primary,.zp0270 .ctaBtn,.zp0270 .btnPrimary,.zp0270 .schedule>a,.zp0270 .newsletter>a{transition:all .2s ease}
.zp0270 .heroActions a:hover,.zp0270 .primary:hover,.zp0270 .ctaBtn:hover,.zp0270 .btnPrimary:hover{
  opacity:.8
}
.zp0270 nav a,.zp0270 .nav a,.zp0270 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0270 nav a:hover,.zp0270 .nav a:hover,.zp0270 .footer a:hover{
  color:var(--primary)
}
.zp0270 .serviceGrid article,.zp0270 .projectCard,.zp0270 .teamCard,.zp0270 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0270 .serviceGrid article:hover,.zp0270 .projectCard:hover,.zp0270 .teamCard:hover,.zp0270 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0270 *,.zp0270 *::before,.zp0270 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0270 a,.zp0270 button,.zp0270 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">69</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Fashion Editorial / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
