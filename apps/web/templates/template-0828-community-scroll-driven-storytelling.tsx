import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0828-community-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|catalogue-table|services>pricing>proof>metrics>press>security>hours|notched|literary", "industry": "community", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "catalogue-table"};

export default function Template0828({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Community Organization");
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
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0828" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0828{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0828 *{box-sizing:border-box}
.zp0828 a{color:inherit;text-decoration:none}
.zp0828 h1,.zp0828 h2,.zp0828 h3,.zp0828 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0828 img{max-width:100%;display:block}
.zp0828 button,.zp0828 a{-webkit-tap-highlight-color:transparent}
.zp0828 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0828 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0828 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0828 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0828 .mobileMenu{display:none}
.zp0828 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0828 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0828 .eyebrow,.zp0828 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0828 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0828 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0828 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0828 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0828 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0828 .mapHero{grid-template-columns:1fr 1fr}
.zp0828 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0828 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0828 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0828 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0828 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0828 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0828 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0828 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0828 .serviceGrid p{color:var(--muted)}
.zp0828 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0828 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0828 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0828 details{border-top:1px solid var(--border);padding:20px 0}
.zp0828 details summary{font-weight:800;cursor:pointer}
.zp0828 details p{color:var(--muted);max-width:70ch}
.zp0828 .priceRows{border-top:1px solid var(--border)}
.zp0828 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0828 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0828 .hours dl{margin:0}
.zp0828 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0828 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0828 .metrics div{background:var(--bg);padding:30px}
.zp0828 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Garamond, Georgia, serif;color:var(--primary)}
.zp0828 .awards>div{max-width:800px;margin-left:auto}
.zp0828 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0828 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0828 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0828 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0828 .contact .eyebrow{color:var(--bg)}
.zp0828 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0828 .contactMeta{display:grid;gap:10px}
.zp0828 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0828 .heroCopy{animation:enter-827 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-827{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0828 .hero{min-height:auto}
.zp0828 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0828 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0828 .nav nav{display:none}
.zp0828 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0828 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0828 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0828 .mobileMenu nav a{padding:10px 8px}
.zp0828 .hero,.zp0828 .mapHero{grid-template-columns:1fr}
.zp0828 .section,.zp0828 .sectionTitle,.zp0828 .hours,.zp0828 .security,.zp0828 .contact{grid-template-columns:1fr}
.zp0828 .metrics{grid-template-columns:1fr 1fr}
.zp0828 .section{display:block}}
@media(max-width:430px){.zp0828{font-size:16px}
.zp0828 .hero,.zp0828 .section,.zp0828 .contact{padding-left:18px;padding-right:18px}
.zp0828 .serviceGrid,.zp0828 .proof,.zp0828 .metrics{grid-template-columns:1fr}
.zp0828 h1{font-size:clamp(42px,14vw,70px)}
.zp0828 .priceRows article{grid-template-columns:1fr}}

.zp0828 .heroActions a,.zp0828 .primary,.zp0828 .ctaBtn,.zp0828 .btnPrimary,.zp0828 .schedule>a,.zp0828 .newsletter>a{transition:all .2s ease}
.zp0828 .heroActions a:hover,.zp0828 .primary:hover,.zp0828 .ctaBtn:hover,.zp0828 .btnPrimary:hover{
  opacity:.8
}
.zp0828 nav a,.zp0828 .nav a,.zp0828 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0828 nav a:hover,.zp0828 .nav a:hover,.zp0828 .footer a:hover{
  color:var(--primary)
}
.zp0828 .serviceGrid article,.zp0828 .projectCard,.zp0828 .teamCard,.zp0828 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0828 .serviceGrid article:hover,.zp0828 .projectCard:hover,.zp0828 .teamCard:hover,.zp0828 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0828 *,.zp0828 *::before,.zp0828 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0828 a,.zp0828 button,.zp0828 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
