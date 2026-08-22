import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0022-medical-gradient-mesh", "family": "Gradient Mesh", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|comparison-led|proof>services>location>comparison>packages|pill-controls|warm-editorial", "industry": "medical", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "comparison-led"};

export default function Template0022({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0022" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0022{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0022 *{box-sizing:border-box}
.zp0022 a{color:inherit;text-decoration:none}
.zp0022 h1,.zp0022 h2,.zp0022 h3,.zp0022 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0022 img{max-width:100%;display:block}
.zp0022 button,.zp0022 a{-webkit-tap-highlight-color:transparent}
.zp0022 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0022 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0022 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0022 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0022 .mobileMenu{display:none}
.zp0022 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0022 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0022 .eyebrow,.zp0022 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0022 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0022 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0022 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0022 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0022 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0022 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0022 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0022 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0022 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0022 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0022 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0022 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0022 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0022 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0022 .serviceGrid p{color:var(--muted)}
.zp0022 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0022 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0022 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0022 details{border-top:1px solid var(--border);padding:20px 0}
.zp0022 details summary{font-weight:800;cursor:pointer}
.zp0022 details p{color:var(--muted);max-width:70ch}
.zp0022 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0022 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0022 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0022 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0022 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0022 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0022 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0022 .packages>.sectionTitle{grid-column:1/-1}
.zp0022 .packages article{padding:24px;border:1px solid var(--border)}
.zp0022 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0022 .contact .eyebrow{color:var(--bg)}
.zp0022 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0022 .contactMeta{display:grid;gap:10px}
.zp0022 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0022{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0022 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0022 .heroCopy{animation:enter-21 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-21{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0022 .hero{min-height:auto}
.zp0022 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0022 .proof{grid-template-columns:1fr 1fr}
.zp0022 .packages{grid-template-columns:1fr 1fr}
.zp0022 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0022 .nav nav{display:none}
.zp0022 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0022 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0022 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0022 .mobileMenu nav a{padding:10px 8px}
.zp0022 .hero,.zp0022 .timelineHero{grid-template-columns:1fr}
.zp0022 .section,.zp0022 .sectionTitle,.zp0022 .location,.zp0022 .contact{grid-template-columns:1fr}
.zp0022 .section{display:block}}
@media(max-width:430px){.zp0022{font-size:16px}
.zp0022 .hero,.zp0022 .section,.zp0022 .contact{padding-left:18px;padding-right:18px}
.zp0022 .serviceGrid,.zp0022 .proof,.zp0022 .packages,.zp0022 .compareGrid{grid-template-columns:1fr}
.zp0022 h1{font-size:clamp(42px,14vw,70px)}}

.zp0022 .heroActions a,.zp0022 .primary,.zp0022 .ctaBtn,.zp0022 .btnPrimary,.zp0022 .schedule>a,.zp0022 .newsletter>a{transition:all .2s ease}
.zp0022 .heroActions a:hover,.zp0022 .primary:hover,.zp0022 .ctaBtn:hover,.zp0022 .btnPrimary:hover{
  opacity:.9;box-shadow:0 4px 16px rgba(0,0,0,.2)
}
.zp0022 nav a,.zp0022 .nav a,.zp0022 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0022 nav a:hover,.zp0022 .nav a:hover,.zp0022 .footer a:hover{
  color:var(--primary)
}
.zp0022 .serviceGrid article,.zp0022 .projectCard,.zp0022 .teamCard,.zp0022 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0022 .serviceGrid article:hover,.zp0022 .projectCard:hover,.zp0022 .teamCard:hover,.zp0022 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0022 *,.zp0022 *::before,.zp0022 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0022 a,.zp0022 button,.zp0022 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Gradient Mesh / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
