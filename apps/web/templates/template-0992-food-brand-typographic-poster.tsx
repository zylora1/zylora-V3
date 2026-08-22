import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0992-food-brand-typographic-poster", "family": "Typographic Poster", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|conversion-first|awards>availability>proof>metrics>team>services|heavy-frame|newspaper", "industry": "food-brand", "hero": "data-led", "navigation": "centered-logo", "layout": "conversion-first"};

export default function Template0992({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Food Brand");
  const headline = String(content.headline || "A food brand built around distinctive flavour, clear provenance, and easy discovery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Products", "Recipes", "Stockists", "Wholesale", "Story"];
  const industryLabel = "Food brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0992" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0992{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0992 *{box-sizing:border-box}
.zp0992 a{color:inherit;text-decoration:none}
.zp0992 h1,.zp0992 h2,.zp0992 h3,.zp0992 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0992 img{max-width:100%;display:block}
.zp0992 button,.zp0992 a{-webkit-tap-highlight-color:transparent}
.zp0992 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0992 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0992 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0992 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0992 .nav.centered strong{order:2;font-size:24px}
.zp0992 .nav.centered nav:first-child{order:1}
.zp0992 .nav.centered nav:last-child{order:3}
.zp0992 .mobileMenu{display:none}
.zp0992 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0992 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0992 .eyebrow,.zp0992 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0992 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0992 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0992 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0992 .heroActions a,.zp0992 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0992 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0992 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0992 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0992 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0992 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0992 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0992 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0992 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0992 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0992 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0992 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0992 .serviceGrid p{color:var(--muted)}
.zp0992 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0992 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0992 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0992 details{border-top:1px solid var(--border);padding:20px 0}
.zp0992 details summary{font-weight:800;cursor:pointer}
.zp0992 details p{color:var(--muted);max-width:70ch}
.zp0992 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0992 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0992 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Times New Roman, serif;margin-bottom:18px}
.zp0992 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0992 .metrics div{background:var(--bg);padding:30px}
.zp0992 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Times New Roman, serif;color:var(--primary)}
.zp0992 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0992 .awards>div{max-width:800px;margin-left:auto}
.zp0992 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0992 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0992 .contact .eyebrow{color:var(--bg)}
.zp0992 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0992 .contactMeta{display:grid;gap:10px}
.zp0992 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0992 .heroCopy{animation:enter-991 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-991{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0992 .hero{min-height:auto}
.zp0992 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0992 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0992 .nav nav{display:none}
.zp0992 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0992 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0992 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0992 .mobileMenu nav a{padding:10px 8px}
.zp0992 .hero,.zp0992 .dataHero{grid-template-columns:1fr}
.zp0992 .section,.zp0992 .sectionTitle,.zp0992 .contact{grid-template-columns:1fr}
.zp0992 .teamGrid{grid-template-columns:1fr 1fr}
.zp0992 .metrics{grid-template-columns:1fr 1fr}
.zp0992 .section{display:block}}
@media(max-width:430px){.zp0992{font-size:16px}
.zp0992 .hero,.zp0992 .section,.zp0992 .contact{padding-left:18px;padding-right:18px}
.zp0992 .serviceGrid,.zp0992 .proof,.zp0992 .teamGrid,.zp0992 .metrics{grid-template-columns:1fr}
.zp0992 h1{font-size:clamp(42px,14vw,70px)}}

.zp0992 .heroActions a,.zp0992 .primary,.zp0992 .ctaBtn,.zp0992 .btnPrimary,.zp0992 .schedule>a,.zp0992 .newsletter>a{transition:all .2s ease}
.zp0992 .heroActions a:hover,.zp0992 .primary:hover,.zp0992 .ctaBtn:hover,.zp0992 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0992 nav a,.zp0992 .nav a,.zp0992 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0992 nav a:hover,.zp0992 .nav a:hover,.zp0992 .footer a:hover{
  color:var(--primary)
}
.zp0992 .serviceGrid article,.zp0992 .projectCard,.zp0992 .teamCard,.zp0992 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0992 .serviceGrid article:hover,.zp0992 .projectCard:hover,.zp0992 .teamCard:hover,.zp0992 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0992 *,.zp0992 *::before,.zp0992 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0992 a,.zp0992 button,.zp0992 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
