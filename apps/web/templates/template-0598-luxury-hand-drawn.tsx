import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0598-luxury-hand-drawn", "family": "Hand-drawn", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|comparison-led|proof>case-study>services>materials>comparison|pill-controls|warm-editorial", "industry": "luxury", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "comparison-led"};

export default function Template0598({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Luxury Brand");
  const headline = String(content.headline || "Quiet confidence, exceptional materials, and service designed around individual clients.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Signature collection", "Bespoke service", "Private appointments", "Journal", "Boutiques"];
  const industryLabel = "Luxury brand";
  const serviceNotes = ["Provenance documentation for every piece: origin, maker, and material certification.", "Private client service with discretion, privacy, and non-disclosure as standard.", "White-glove delivery and installation by our own specialist team.", "Bespoke commission pathway with a dedicated atelier contact from concept to completion.", "Aftercare programme: annual maintenance, authentication, and insurance valuation updates."];
  const proofPoints = ["Sotheby's and Christie's vetted", "Private client discretion assured", "Provenance documentation", "Expert aftercare service"];
  const testimonial = "I sent a single enquiry. Within an hour I had a call from someone who clearly knew the category. That is rare in this market.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0598" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0598{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0598 *{box-sizing:border-box}
.zp0598 a{color:inherit;text-decoration:none}
.zp0598 h1,.zp0598 h2,.zp0598 h3,.zp0598 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0598 img{max-width:100%;display:block}
.zp0598 button,.zp0598 a{-webkit-tap-highlight-color:transparent}
.zp0598 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0598 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0598 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0598 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0598 .mobileMenu{display:none}
.zp0598 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0598 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0598 .eyebrow,.zp0598 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0598 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0598 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0598 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0598 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0598 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0598 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0598 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0598 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0598 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0598 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0598 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0598 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0598 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0598 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0598 .serviceGrid p{color:var(--muted)}
.zp0598 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0598 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0598 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0598 details{border-top:1px solid var(--border);padding:20px 0}
.zp0598 details summary{font-weight:800;cursor:pointer}
.zp0598 details p{color:var(--muted);max-width:70ch}
.zp0598 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0598 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0598 .projects article:nth-child(2){transform:translateY(32px)}
.zp0598 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0598 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0598 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0598 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0598 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0598 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0598 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0598 .contact .eyebrow{color:var(--bg)}
.zp0598 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0598 .contactMeta{display:grid;gap:10px}
.zp0598 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0598 .heroCopy{animation:enter-597 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-597{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0598 .hero{min-height:auto}
.zp0598 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0598 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0598 .nav nav{display:none}
.zp0598 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0598 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0598 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0598 .mobileMenu nav a{padding:10px 8px}
.zp0598 .hero,.zp0598 .timelineHero{grid-template-columns:1fr}
.zp0598 .section,.zp0598 .sectionTitle,.zp0598 .contact{grid-template-columns:1fr}
.zp0598 .projects .projectGrid{grid-template-columns:1fr}
.zp0598 .projects article:nth-child(2){transform:none}
.zp0598 .section{display:block}}
@media(max-width:430px){.zp0598{font-size:16px}
.zp0598 .hero,.zp0598 .section,.zp0598 .contact{padding-left:18px;padding-right:18px}
.zp0598 .serviceGrid,.zp0598 .proof,.zp0598 .compareGrid{grid-template-columns:1fr}
.zp0598 h1{font-size:clamp(42px,14vw,70px)}}

.zp0598 .heroActions a,.zp0598 .primary,.zp0598 .ctaBtn,.zp0598 .btnPrimary,.zp0598 .schedule>a,.zp0598 .newsletter>a{transition:all .2s ease}
.zp0598 .heroActions a:hover,.zp0598 .primary:hover,.zp0598 .ctaBtn:hover,.zp0598 .btnPrimary:hover{
  opacity:.8;text-decoration:underline wavy
}
.zp0598 nav a,.zp0598 .nav a,.zp0598 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0598 nav a:hover,.zp0598 .nav a:hover,.zp0598 .footer a:hover{
  opacity:.7
}
.zp0598 .serviceGrid article,.zp0598 .projectCard,.zp0598 .teamCard,.zp0598 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0598 .serviceGrid article:hover,.zp0598 .projectCard:hover,.zp0598 .teamCard:hover,.zp0598 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0598 *,.zp0598 *::before,.zp0598 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0598 a,.zp0598 button,.zp0598 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Hand-drawn / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
