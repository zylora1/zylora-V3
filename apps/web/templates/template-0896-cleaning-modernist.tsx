import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0896-cleaning-modernist", "family": "Modernist", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|booking-led|pricing>services>proof>availability>credentials>story|heavy-frame|newspaper", "industry": "cleaning", "hero": "data-led", "navigation": "centered-logo", "layout": "booking-led"};

export default function Template0896({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Cleaning Company");
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
  const storyQuote = "\u201cReliable cleaning with simple scheduling, consistent teams, and clear scope.\u201d";
  const storyBody = "Marrow Cleaning Company is presented as a real working cleaning company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0896" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0896{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0896 *{box-sizing:border-box}
.zp0896 a{color:inherit;text-decoration:none}
.zp0896 h1,.zp0896 h2,.zp0896 h3,.zp0896 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0896 img{max-width:100%;display:block}
.zp0896 button,.zp0896 a{-webkit-tap-highlight-color:transparent}
.zp0896 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0896 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0896 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0896 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0896 .nav.centered strong{order:2;font-size:24px}
.zp0896 .nav.centered nav:first-child{order:1}
.zp0896 .nav.centered nav:last-child{order:3}
.zp0896 .mobileMenu{display:none}
.zp0896 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0896 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0896 .eyebrow,.zp0896 .sectionTitle>span,.zp0896 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0896 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0896 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0896 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0896 .heroActions a,.zp0896 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0896 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0896 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0896 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0896 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0896 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0896 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0896 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0896 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0896 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0896 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0896 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0896 .serviceGrid p{color:var(--muted)}
.zp0896 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0896 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0896 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0896 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0896 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0896 .story p{color:var(--muted)}
.zp0896 details{border-top:1px solid var(--border);padding:20px 0}
.zp0896 details summary{font-weight:800;cursor:pointer}
.zp0896 details p{color:var(--muted);max-width:70ch}
.zp0896 .priceRows{border-top:1px solid var(--border)}
.zp0896 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0896 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0896 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0896 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0896 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0896 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0896 .contact .eyebrow{color:var(--bg)}
.zp0896 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0896 .contactMeta{display:grid;gap:10px}
.zp0896 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0896 .heroCopy{animation:enter-895 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-895{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0896 .hero{min-height:auto}
.zp0896 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0896 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0896 .nav nav{display:none}
.zp0896 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0896 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0896 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0896 .mobileMenu nav a{padding:10px 8px}
.zp0896 .hero,.zp0896 .dataHero{grid-template-columns:1fr}
.zp0896 .section,.zp0896 .sectionTitle,.zp0896 .story,.zp0896 .contact{grid-template-columns:1fr}
.zp0896 .section{display:block}}
@media(max-width:430px){.zp0896{font-size:16px}
.zp0896 .hero,.zp0896 .section,.zp0896 .contact{padding-left:18px;padding-right:18px}
.zp0896 .serviceGrid,.zp0896 .proof{grid-template-columns:1fr}
.zp0896 h1{font-size:clamp(42px,14vw,70px)}
.zp0896 .priceRows article{grid-template-columns:1fr}}

.zp0896 .heroActions a,.zp0896 .primary,.zp0896 .ctaBtn,.zp0896 .btnPrimary,.zp0896 .schedule>a,.zp0896 .newsletter>a{transition:all .2s ease}
.zp0896 .heroActions a:hover,.zp0896 .primary:hover,.zp0896 .ctaBtn:hover,.zp0896 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0896 nav a,.zp0896 .nav a,.zp0896 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0896 nav a:hover,.zp0896 .nav a:hover,.zp0896 .footer a:hover{
  color:var(--primary)
}
.zp0896 .serviceGrid article,.zp0896 .projectCard,.zp0896 .teamCard,.zp0896 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0896 .serviceGrid article:hover,.zp0896 .projectCard:hover,.zp0896 .teamCard:hover,.zp0896 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0896 *,.zp0896 *::before,.zp0896 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0896 a,.zp0896 button,.zp0896 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
