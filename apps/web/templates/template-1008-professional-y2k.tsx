import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1008-professional-y2k", "family": "Y2K", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|catalogue-table|security>pricing>collection>story>proof>programmes>services|heavy-frame|terminal", "industry": "professional", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "catalogue-table"};

export default function Template1008({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Professional Services");
  const headline = String(content.headline || "Senior expertise delivered with clear scope, useful communication, and practical outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Advisory", "Assessment", "Implementation", "Retainers", "Workshops"];
  const industryLabel = "Professional services";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cSenior expertise delivered with clear scope, useful communication, and practical outcomes.\u201d";
  const storyBody = "Kite Professional Services is presented as a real working professional services, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp1008" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1008{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1008 *{box-sizing:border-box}
.zp1008 a{color:inherit;text-decoration:none}
.zp1008 h1,.zp1008 h2,.zp1008 h3,.zp1008 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp1008 img{max-width:100%;display:block}
.zp1008 button,.zp1008 a{-webkit-tap-highlight-color:transparent}
.zp1008 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1008 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp1008 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp1008 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1008 .nav.centered strong{order:2;font-size:24px}
.zp1008 .nav.centered nav:first-child{order:1}
.zp1008 .nav.centered nav:last-child{order:3}
.zp1008 .mobileMenu{display:none}
.zp1008 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1008 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp1008 .eyebrow,.zp1008 .sectionTitle>span,.zp1008 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1008 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1008 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp1008 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp1008 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp1008 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp1008 .visual,.zp1008 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp1008 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp1008 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp1008 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp1008 .heroPhoto{object-fit:cover}
.zp1008 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp1008 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1008 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1008 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1008 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp1008 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1008 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp1008 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1008 .serviceGrid p{color:var(--muted)}
.zp1008 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1008 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1008 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1008 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp1008 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp1008 .story p{color:var(--muted)}
.zp1008 details{border-top:1px solid var(--border);padding:20px 0}
.zp1008 details summary{font-weight:800;cursor:pointer}
.zp1008 details p{color:var(--muted);max-width:70ch}
.zp1008 .priceRows{border-top:1px solid var(--border)}
.zp1008 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp1008 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp1008 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp1008 .p1,.zp1008 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp1008 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp1008 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp1008 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp1008 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp1008 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1008 .contact .eyebrow{color:var(--bg)}
.zp1008 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1008 .contactMeta{display:grid;gap:10px}
.zp1008 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1008 .heroCopy{animation:enter-1007 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-1007{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp1008 .hero{min-height:auto}
.zp1008 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1008 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1008 .nav nav{display:none}
.zp1008 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1008 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1008 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1008 .mobileMenu nav a{padding:10px 8px}
.zp1008 .hero,.zp1008 .asymHero{grid-template-columns:1fr}
.zp1008 .section,.zp1008 .sectionTitle,.zp1008 .story,.zp1008 .security,.zp1008 .contact{grid-template-columns:1fr}
.zp1008 .collectionGrid{grid-template-columns:1fr 1fr}
.zp1008 .section{display:block}}
@media(max-width:430px){.zp1008{font-size:16px}
.zp1008 .hero,.zp1008 .section,.zp1008 .contact{padding-left:18px;padding-right:18px}
.zp1008 .serviceGrid,.zp1008 .proof,.zp1008 .collectionGrid,.zp1008 .programmes>div:last-child{grid-template-columns:1fr}
.zp1008 h1{font-size:clamp(42px,14vw,70px)}
.zp1008 .priceRows article{grid-template-columns:1fr}}

.zp1008 .heroActions a,.zp1008 .primary,.zp1008 .ctaBtn,.zp1008 .btnPrimary,.zp1008 .schedule>a,.zp1008 .newsletter>a{transition:all .2s ease}
.zp1008 .heroActions a:hover,.zp1008 .primary:hover,.zp1008 .ctaBtn:hover,.zp1008 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.03)
}
.zp1008 nav a,.zp1008 .nav a,.zp1008 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1008 nav a:hover,.zp1008 .nav a:hover,.zp1008 .footer a:hover{
  color:var(--primary)
}
.zp1008 .serviceGrid article,.zp1008 .projectCard,.zp1008 .teamCard,.zp1008 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1008 .serviceGrid article:hover,.zp1008 .projectCard:hover,.zp1008 .teamCard:hover,.zp1008 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp1008 *,.zp1008 *::before,.zp1008 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1008 a,.zp1008 button,.zp1008 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">09</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">07</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Y2K / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
