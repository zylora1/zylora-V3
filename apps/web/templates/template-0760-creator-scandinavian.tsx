import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0760-creator-scandinavian", "family": "Scandinavian", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|offset-cards|proof>research>services>metrics>menu|micro-radius|brutal-display", "industry": "creator", "hero": "video-frame", "navigation": "corner-dock", "layout": "offset-cards"};

export default function Template0760({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Creator Brand");
  const headline = String(content.headline || "A clear home base for work, audience, collaborations, and owned distribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Latest work", "Partnerships", "Newsletter", "Resources", "Speaking"];
  const industryLabel = "Creator brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creator brand / Project A", "Creator brand / Project B", "Creator brand / Project C", "Creator brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear home base for work, audience, collaborations, and owned distribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0760" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0760{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0760 *{box-sizing:border-box}
.zp0760 a{color:inherit;text-decoration:none}
.zp0760 h1,.zp0760 h2,.zp0760 h3,.zp0760 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0760 img{max-width:100%;display:block}
.zp0760 button,.zp0760 a{-webkit-tap-highlight-color:transparent}
.zp0760 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0760 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0760 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0760 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0760 .mobileMenu{display:none}
.zp0760 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0760 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0760 .eyebrow,.zp0760 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0760 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0760 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0760 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0760 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0760 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0760 .visual,.zp0760 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0760 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0760 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0760 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0760 .heroPhoto{object-fit:cover}
.zp0760 .videoHero{grid-template-columns:1fr 1fr}
.zp0760 .videoFrame{position:relative}
.zp0760 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0760 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0760 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0760 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0760 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0760 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0760 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0760 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0760 .serviceGrid p{color:var(--muted)}
.zp0760 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0760 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0760 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0760 details{border-top:1px solid var(--border);padding:20px 0}
.zp0760 details summary{font-weight:800;cursor:pointer}
.zp0760 details p{color:var(--muted);max-width:70ch}
.zp0760 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0760 .metrics div{background:var(--bg);padding:30px}
.zp0760 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Arial Black, Arial, sans-serif;color:var(--primary)}
.zp0760 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0760 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0760 .researchRows{max-width:900px;margin-left:auto}
.zp0760 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0760 .contact .eyebrow{color:var(--bg)}
.zp0760 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0760 .contactMeta{display:grid;gap:10px}
.zp0760 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0760 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0760 .heroCopy{animation:enter-759 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-759{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0760 .hero{min-height:auto}
.zp0760 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0760 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0760 .nav nav{display:none}
.zp0760 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0760 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0760 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0760 .mobileMenu nav a{padding:10px 8px}
.zp0760 .hero,.zp0760 .videoHero{grid-template-columns:1fr}
.zp0760 .section,.zp0760 .sectionTitle,.zp0760 .contact{grid-template-columns:1fr}
.zp0760 .metrics{grid-template-columns:1fr 1fr}
.zp0760 .section{display:block}}
@media(max-width:430px){.zp0760{font-size:16px}
.zp0760 .hero,.zp0760 .section,.zp0760 .contact{padding-left:18px;padding-right:18px}
.zp0760 .serviceGrid,.zp0760 .proof,.zp0760 .metrics{grid-template-columns:1fr}
.zp0760 h1{font-size:clamp(42px,14vw,70px)}}

.zp0760 .heroActions a,.zp0760 .primary,.zp0760 .ctaBtn,.zp0760 .btnPrimary,.zp0760 .schedule>a,.zp0760 .newsletter>a{transition:all .2s ease}
.zp0760 .heroActions a:hover,.zp0760 .primary:hover,.zp0760 .ctaBtn:hover,.zp0760 .btnPrimary:hover{
  opacity:.75
}
.zp0760 nav a,.zp0760 .nav a,.zp0760 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0760 nav a:hover,.zp0760 .nav a:hover,.zp0760 .footer a:hover{
  opacity:.65
}
.zp0760 .serviceGrid article,.zp0760 .projectCard,.zp0760 .teamCard,.zp0760 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0760 .serviceGrid article:hover,.zp0760 .projectCard:hover,.zp0760 .teamCard:hover,.zp0760 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0760 *,.zp0760 *::before,.zp0760 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0760 a,.zp0760 button,.zp0760 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">59</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
