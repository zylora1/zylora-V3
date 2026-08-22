import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-1004-professional-asymmetric-grid", "family": "Asymmetric Grid", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|booking-led|story>materials>proof>destinations>services>programmes|notched|product-ui", "industry": "professional", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "booking-led"};

export default function Template1004({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Professional Services");
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
  const storyBody = "Stillwater Professional Services is presented as a real working professional services, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp1004" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp1004{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp1004 *{box-sizing:border-box}
.zp1004 a{color:inherit;text-decoration:none}
.zp1004 h1,.zp1004 h2,.zp1004 h3,.zp1004 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp1004 img{max-width:100%;display:block}
.zp1004 button,.zp1004 a{-webkit-tap-highlight-color:transparent}
.zp1004 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp1004 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp1004 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp1004 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1004 .mobileMenu{display:none}
.zp1004 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp1004 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp1004 .eyebrow,.zp1004 .sectionTitle>span,.zp1004 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp1004 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp1004 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp1004 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp1004 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp1004 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp1004 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp1004 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp1004 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp1004 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp1004 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp1004 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp1004 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp1004 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp1004 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp1004 .serviceGrid p{color:var(--muted)}
.zp1004 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp1004 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp1004 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp1004 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp1004 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp1004 .story p{color:var(--muted)}
.zp1004 details{border-top:1px solid var(--border);padding:20px 0}
.zp1004 details summary{font-weight:800;cursor:pointer}
.zp1004 details p{color:var(--muted);max-width:70ch}
.zp1004 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp1004 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp1004 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp1004 .programmes>div:last-child,.zp1004 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp1004 .programmes article,.zp1004 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp1004 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp1004 .contact .eyebrow{color:var(--bg)}
.zp1004 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp1004 .contactMeta{display:grid;gap:10px}
.zp1004 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp1004 .heroCopy{animation:enter-1003 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-1003{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp1004 .hero{min-height:auto}
.zp1004 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp1004 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp1004 .nav nav{display:none}
.zp1004 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp1004 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp1004 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp1004 .mobileMenu nav a{padding:10px 8px}
.zp1004 .hero,.zp1004 .navLedHero{grid-template-columns:1fr}
.zp1004 .section,.zp1004 .sectionTitle,.zp1004 .story,.zp1004 .contact{grid-template-columns:1fr}
.zp1004 .section{display:block}}
@media(max-width:430px){.zp1004{font-size:16px}
.zp1004 .hero,.zp1004 .section,.zp1004 .contact{padding-left:18px;padding-right:18px}
.zp1004 .serviceGrid,.zp1004 .proof,.zp1004 .programmes>div:last-child,.zp1004 .destinations>div:last-child{grid-template-columns:1fr}
.zp1004 h1{font-size:clamp(42px,14vw,70px)}}

.zp1004 .heroActions a,.zp1004 .primary,.zp1004 .ctaBtn,.zp1004 .btnPrimary,.zp1004 .schedule>a,.zp1004 .newsletter>a{transition:all .2s ease}
.zp1004 .heroActions a:hover,.zp1004 .primary:hover,.zp1004 .ctaBtn:hover,.zp1004 .btnPrimary:hover{
  opacity:.85
}
.zp1004 nav a,.zp1004 .nav a,.zp1004 .footer a{transition:opacity .15s ease,color .15s ease}
.zp1004 nav a:hover,.zp1004 .nav a:hover,.zp1004 .footer a:hover{
  color:var(--primary)
}
.zp1004 .serviceGrid article,.zp1004 .projectCard,.zp1004 .teamCard,.zp1004 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp1004 .serviceGrid article:hover,.zp1004 .projectCard:hover,.zp1004 .teamCard:hover,.zp1004 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp1004 *,.zp1004 *::before,.zp1004 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp1004 a,.zp1004 button,.zp1004 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
