import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0825-community-claymorphism", "family": "Claymorphism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|split-scroll|schedule>services>proof>credentials>integrations>newsletter>manifesto|hairline|slab", "industry": "community", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "split-scroll"};

export default function Template0825({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const industryLabel = "Community organization";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0825" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0825{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0825 *{box-sizing:border-box}
.zp0825 a{color:inherit;text-decoration:none}
.zp0825 h1,.zp0825 h2,.zp0825 h3,.zp0825 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0825 img{max-width:100%;display:block}
.zp0825 button,.zp0825 a{-webkit-tap-highlight-color:transparent}
.zp0825 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0825 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0825 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0825 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0825 .nav.menu details{position:relative}
.zp0825 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0825 .mobileMenu{display:none}
.zp0825 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0825 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0825 .eyebrow,.zp0825 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0825 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0825 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0825 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0825 .heroActions a,.zp0825 .schedule>a,.zp0825 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0825 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0825 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0825 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0825 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0825 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0825 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0825 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0825 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0825 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0825 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0825 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0825 .serviceGrid p{color:var(--muted)}
.zp0825 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0825 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0825 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0825 details{border-top:1px solid var(--border);padding:20px 0}
.zp0825 details summary{font-weight:800;cursor:pointer}
.zp0825 details p{color:var(--muted);max-width:70ch}
.zp0825 .credentials,.zp0825 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0825 .credentials>div,.zp0825 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0825 .credentials b,.zp0825 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0825 .schedule,.zp0825 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0825 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Rockwell, Courier New, serif;letter-spacing:-.04em;max-width:17ch}
.zp0825 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0825 .contact .eyebrow{color:var(--bg)}
.zp0825 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0825 .contactMeta{display:grid;gap:10px}
.zp0825 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0825 .heroCopy{animation:enter-824 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-824{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0825 .hero{min-height:auto}
.zp0825 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0825 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0825 .nav nav{display:none}
.zp0825 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0825 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0825 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0825 .mobileMenu nav a{padding:10px 8px}
.zp0825 .hero,.zp0825 .archiveHero{grid-template-columns:1fr}
.zp0825 .section,.zp0825 .sectionTitle,.zp0825 .contact{grid-template-columns:1fr}
.zp0825 .section{display:block}}
@media(max-width:430px){.zp0825{font-size:16px}
.zp0825 .hero,.zp0825 .section,.zp0825 .contact{padding-left:18px;padding-right:18px}
.zp0825 .serviceGrid,.zp0825 .proof{grid-template-columns:1fr}
.zp0825 h1{font-size:clamp(42px,14vw,70px)}}

.zp0825 .heroActions a,.zp0825 .primary,.zp0825 .ctaBtn,.zp0825 .btnPrimary,.zp0825 .schedule>a,.zp0825 .newsletter>a{transition:all .2s ease}
.zp0825 .heroActions a:hover,.zp0825 .primary:hover,.zp0825 .ctaBtn:hover,.zp0825 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0825 nav a,.zp0825 .nav a,.zp0825 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0825 nav a:hover,.zp0825 .nav a:hover,.zp0825 .footer a:hover{
  color:var(--primary)
}
.zp0825 .serviceGrid article,.zp0825 .projectCard,.zp0825 .teamCard,.zp0825 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0825 .serviceGrid article:hover,.zp0825 .projectCard:hover,.zp0825 .teamCard:hover,.zp0825 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0825 *,.zp0825 *::before,.zp0825 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0825 a,.zp0825 button,.zp0825 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
