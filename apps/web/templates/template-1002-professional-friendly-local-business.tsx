import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1002-professional-friendly-local-business", "family": "Friendly Local Business", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|portfolio-sequence|integrations>proof>hours>services>team>programmes>products|paper-sheet|utility", "industry": "professional", "hero": "service-led", "navigation": "left-sidebar", "layout": "portfolio-sequence"};

export default function Template1002({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Professional Services");
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
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp1002" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1002{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1002 *{box-sizing:border-box}
.zp1002 a{color:inherit;text-decoration:none}
.zp1002 h1,.zp1002 h2,.zp1002 h3,.zp1002 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp1002 img{max-width:100%;display:block}
.zp1002 button,.zp1002 a{-webkit-tap-highlight-color:transparent}
.zp1002 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1002 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp1002 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp1002 .mobileMenu{display:none}
.zp1002:has(.navRail)>.hero,.zp1002:has(.navRail)>.section,.zp1002:has(.navRail)>.contact,.zp1002:has(.navRail)>.footer{margin-left:190px}
.zp1002 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1002 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp1002 .eyebrow,.zp1002 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1002 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1002 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp1002 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp1002 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp1002 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp1002 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp1002 .serviceHeroList{display:grid;gap:4px}
.zp1002 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp1002 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1002 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1002 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1002 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp1002 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1002 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp1002 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1002 .serviceGrid p{color:var(--muted)}
.zp1002 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1002 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1002 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1002 details{border-top:1px solid var(--border);padding:20px 0}
.zp1002 details summary{font-weight:800;cursor:pointer}
.zp1002 details p{color:var(--muted);max-width:70ch}
.zp1002 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp1002 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp1002 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Verdana, sans-serif;margin-bottom:18px}
.zp1002 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp1002 .hours dl{margin:0}
.zp1002 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp1002 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp1002 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp1002 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp1002 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp1002 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp1002 .p1,.zp1002 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp1002 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp1002 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp1002 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1002 .contact .eyebrow{color:var(--bg)}
.zp1002 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1002 .contactMeta{display:grid;gap:10px}
.zp1002 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1002 .heroCopy{animation:enter-1001 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-1001{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp1002 .hero{min-height:auto}
.zp1002 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1002 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1002 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1002 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1002 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1002 .mobileMenu nav a{padding:10px 8px}
.zp1002 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp1002:has(.navRail)>.hero,.zp1002:has(.navRail)>.section,.zp1002:has(.navRail)>.contact,.zp1002:has(.navRail)>.footer{margin-left:0}
.zp1002 .hero,.zp1002 .serviceHero{grid-template-columns:1fr}
.zp1002 .section,.zp1002 .sectionTitle,.zp1002 .hours,.zp1002 .contact{grid-template-columns:1fr}
.zp1002 .teamGrid{grid-template-columns:1fr 1fr}
.zp1002 .collectionGrid{grid-template-columns:1fr 1fr}
.zp1002 .section{display:block}}
@media(max-width:430px){.zp1002{font-size:16px}
.zp1002 .hero,.zp1002 .section,.zp1002 .contact{padding-left:18px;padding-right:18px}
.zp1002 .serviceGrid,.zp1002 .proof,.zp1002 .teamGrid,.zp1002 .collectionGrid,.zp1002 .programmes>div:last-child{grid-template-columns:1fr}
.zp1002 h1{font-size:clamp(42px,14vw,70px)}}

.zp1002 .heroActions a,.zp1002 .primary,.zp1002 .ctaBtn,.zp1002 .btnPrimary,.zp1002 .schedule>a,.zp1002 .newsletter>a{transition:all .2s ease}
.zp1002 .heroActions a:hover,.zp1002 .primary:hover,.zp1002 .ctaBtn:hover,.zp1002 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp1002 nav a,.zp1002 .nav a,.zp1002 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1002 nav a:hover,.zp1002 .nav a:hover,.zp1002 .footer a:hover{
  color:var(--primary)
}
.zp1002 .serviceGrid article,.zp1002 .projectCard,.zp1002 .teamCard,.zp1002 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1002 .serviceGrid article:hover,.zp1002 .projectCard:hover,.zp1002 .teamCard:hover,.zp1002 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp1002 *,.zp1002 *::before,.zp1002 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1002 a,.zp1002 button,.zp1002 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
