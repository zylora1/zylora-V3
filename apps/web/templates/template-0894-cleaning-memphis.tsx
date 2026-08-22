import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0894-cleaning-memphis", "family": "Memphis", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|portfolio-sequence|proof>location>features>products>services>collection>community|circular|neo-grotesk", "industry": "cleaning", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "portfolio-sequence"};

export default function Template0894({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Cleaning Company");
  const headline = String(content.headline || "Reliable cleaning with simple scheduling, consistent teams, and clear scope.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Home cleaning", "Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring plans"];
  const industryLabel = "Cleaning company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Tandem Cleaning Company is presented as a real working cleaning company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0894" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0894{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0894 *{box-sizing:border-box}
.zp0894 a{color:inherit;text-decoration:none}
.zp0894 h1,.zp0894 h2,.zp0894 h3,.zp0894 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0894 img{max-width:100%;display:block}
.zp0894 button,.zp0894 a{-webkit-tap-highlight-color:transparent}
.zp0894 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0894 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0894 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0894 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0894 .nav.cluster{align-items:flex-end}
.zp0894 .mobileMenu{display:none}
.zp0894 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0894 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0894 .eyebrow,.zp0894 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0894 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0894 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0894 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0894 .heroActions a,.zp0894 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0894 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0894 .visual,.zp0894 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0894 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0894 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0894 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0894 .heroPhoto{object-fit:cover}
.zp0894 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0894 .circleHero{grid-template-columns:1fr 1fr}
.zp0894 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0894 .circleFrame>*{height:100%;border-radius:50%}
.zp0894 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0894 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0894 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0894 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0894 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0894 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0894 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0894 .serviceGrid p{color:var(--muted)}
.zp0894 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0894 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0894 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0894 details{border-top:1px solid var(--border);padding:20px 0}
.zp0894 details summary{font-weight:800;cursor:pointer}
.zp0894 details p{color:var(--muted);max-width:70ch}
.zp0894 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0894 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0894 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0894 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0894 .features ul{list-style:none;margin:0;padding:0}
.zp0894 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0894 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0894 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0894 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0894 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0894 .p1,.zp0894 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0894 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0894 .contact .eyebrow{color:var(--bg)}
.zp0894 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0894 .contactMeta{display:grid;gap:10px}
.zp0894 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0894 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-7deg)}
.zp0894 .heroCopy{animation:enter-893 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-893{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0894 .hero{min-height:auto}
.zp0894 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0894 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0894 .nav nav{display:none}
.zp0894 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0894 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0894 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0894 .mobileMenu nav a{padding:10px 8px}
.zp0894 .hero,.zp0894 .circleHero{grid-template-columns:1fr}
.zp0894 .section,.zp0894 .sectionTitle,.zp0894 .location,.zp0894 .features,.zp0894 .contact{grid-template-columns:1fr}
.zp0894 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0894 .section{display:block}}
@media(max-width:430px){.zp0894{font-size:16px}
.zp0894 .hero,.zp0894 .section,.zp0894 .contact{padding-left:18px;padding-right:18px}
.zp0894 .serviceGrid,.zp0894 .proof,.zp0894 .collectionGrid{grid-template-columns:1fr}
.zp0894 h1{font-size:clamp(42px,14vw,70px)}}

.zp0894 .heroActions a,.zp0894 .primary,.zp0894 .ctaBtn,.zp0894 .btnPrimary,.zp0894 .schedule>a,.zp0894 .newsletter>a{transition:all .2s ease}
.zp0894 .heroActions a:hover,.zp0894 .primary:hover,.zp0894 .ctaBtn:hover,.zp0894 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0894 nav a,.zp0894 .nav a,.zp0894 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0894 nav a:hover,.zp0894 .nav a:hover,.zp0894 .footer a:hover{
  color:var(--primary)
}
.zp0894 .serviceGrid article,.zp0894 .projectCard,.zp0894 .teamCard,.zp0894 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0894 .serviceGrid article:hover,.zp0894 .projectCard:hover,.zp0894 .teamCard:hover,.zp0894 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0894 *,.zp0894 *::before,.zp0894 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0894 a,.zp0894 button,.zp0894 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">93</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
