import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0876-home-services-geometric", "family": "Geometric", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|stacked-posters|programmes>proof>menu>services>integrations>collection>press|notched|literary", "industry": "home-services", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "stacked-posters"};

export default function Template0876({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Home Services Company");
  const headline = String(content.headline || "Trusted local trades with transparent arrival windows and straightforward estimates.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Electrical", "Plumbing", "Heating", "Emergency callouts", "Maintenance plans"];
  const industryLabel = "Home services company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Home services company / Project A", "Home services company / Project B", "Home services company / Project C", "Home services company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Trusted local trades with transparent arrival windows and straightforward estimates. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0876" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0876{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0876 *{box-sizing:border-box}
.zp0876 a{color:inherit;text-decoration:none}
.zp0876 h1,.zp0876 h2,.zp0876 h3,.zp0876 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0876 img{max-width:100%;display:block}
.zp0876 button,.zp0876 a{-webkit-tap-highlight-color:transparent}
.zp0876 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0876 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0876 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0876 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0876 .mobileMenu{display:none}
.zp0876 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0876 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0876 .eyebrow,.zp0876 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0876 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0876 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0876 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0876 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0876 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0876 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0876 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0876 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0876 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0876 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0876 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0876 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0876 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0876 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0876 .serviceGrid p{color:var(--muted)}
.zp0876 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0876 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0876 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0876 details{border-top:1px solid var(--border);padding:20px 0}
.zp0876 details summary{font-weight:800;cursor:pointer}
.zp0876 details p{color:var(--muted);max-width:70ch}
.zp0876 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0876 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0876 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0876 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0876 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0876 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0876 .p1,.zp0876 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0876 .awards>div{max-width:800px;margin-left:auto}
.zp0876 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0876 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0876 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0876 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0876 .contact .eyebrow{color:var(--bg)}
.zp0876 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0876 .contactMeta{display:grid;gap:10px}
.zp0876 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0876 .heroCopy{animation:enter-875 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-875{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0876 .hero{min-height:auto}
.zp0876 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0876 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0876 .nav nav{display:none}
.zp0876 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0876 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0876 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0876 .mobileMenu nav a{padding:10px 8px}
.zp0876 .hero,.zp0876 .navLedHero{grid-template-columns:1fr}
.zp0876 .section,.zp0876 .sectionTitle,.zp0876 .contact{grid-template-columns:1fr}
.zp0876 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0876 .section{display:block}}
@media(max-width:430px){.zp0876{font-size:16px}
.zp0876 .hero,.zp0876 .section,.zp0876 .contact{padding-left:18px;padding-right:18px}
.zp0876 .serviceGrid,.zp0876 .proof,.zp0876 .collectionGrid,.zp0876 .programmes>div:last-child{grid-template-columns:1fr}
.zp0876 h1{font-size:clamp(42px,14vw,70px)}}

.zp0876 .heroActions a,.zp0876 .primary,.zp0876 .ctaBtn,.zp0876 .btnPrimary,.zp0876 .schedule>a,.zp0876 .newsletter>a{transition:all .2s ease}
.zp0876 .heroActions a:hover,.zp0876 .primary:hover,.zp0876 .ctaBtn:hover,.zp0876 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0876 nav a,.zp0876 .nav a,.zp0876 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0876 nav a:hover,.zp0876 .nav a:hover,.zp0876 .footer a:hover{
  color:var(--primary)
}
.zp0876 .serviceGrid article,.zp0876 .projectCard,.zp0876 .teamCard,.zp0876 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0876 .serviceGrid article:hover,.zp0876 .projectCard:hover,.zp0876 .teamCard:hover,.zp0876 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0876 *,.zp0876 *::before,.zp0876 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0876 a,.zp0876 button,.zp0876 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
