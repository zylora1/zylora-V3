import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0119-sports-cinematic", "family": "Cinematic", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|press-led|metrics>proof>materials>programmes>services>destinations|asymmetric-radius|clean-humanist", "industry": "sports", "hero": "index-led", "navigation": "editorial-index", "layout": "press-led"};

export default function Template0119({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0119" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0119{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0119 *{box-sizing:border-box}
.zp0119 a{color:inherit;text-decoration:none}
.zp0119 h1,.zp0119 h2,.zp0119 h3,.zp0119 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0119 img{max-width:100%;display:block}
.zp0119 button,.zp0119 a{-webkit-tap-highlight-color:transparent}
.zp0119 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0119 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0119 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0119 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0119 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0119 .nav.index nav{justify-content:flex-end}
.zp0119 .mobileMenu{display:none}
.zp0119 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0119 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0119 .eyebrow,.zp0119 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0119 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0119 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0119 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0119 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0119 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0119 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0119 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0119 .indexHero li{font:700 18px/1.2 Avenir, Helvetica Neue, Arial, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0119 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0119 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0119 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0119 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0119 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0119 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0119 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0119 .serviceGrid p{color:var(--muted)}
.zp0119 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0119 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0119 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0119 details{border-top:1px solid var(--border);padding:20px 0}
.zp0119 details summary{font-weight:800;cursor:pointer}
.zp0119 details p{color:var(--muted);max-width:70ch}
.zp0119 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0119 .metrics div{background:var(--bg);padding:30px}
.zp0119 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Avenir, Helvetica Neue, Arial, sans-serif;color:var(--primary)}
.zp0119 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0119 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0119 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0119 .programmes>div:last-child,.zp0119 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0119 .programmes article,.zp0119 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0119 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0119 .contact .eyebrow{color:var(--bg)}
.zp0119 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0119 .contactMeta{display:grid;gap:10px}
.zp0119 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0119 .heroCopy{animation:enter-118 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-118{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0119 .hero{min-height:auto}
.zp0119 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0119 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0119 .nav nav{display:none}
.zp0119 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0119 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0119 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0119 .mobileMenu nav a{padding:10px 8px}
.zp0119 .hero,.zp0119 .indexHero{grid-template-columns:1fr}
.zp0119 .section,.zp0119 .sectionTitle,.zp0119 .contact{grid-template-columns:1fr}
.zp0119 .metrics{grid-template-columns:1fr 1fr}
.zp0119 .section{display:block}}
@media(max-width:430px){.zp0119{font-size:16px}
.zp0119 .hero,.zp0119 .section,.zp0119 .contact{padding-left:18px;padding-right:18px}
.zp0119 .serviceGrid,.zp0119 .proof,.zp0119 .metrics,.zp0119 .programmes>div:last-child,.zp0119 .destinations>div:last-child{grid-template-columns:1fr}
.zp0119 h1{font-size:clamp(42px,14vw,70px)}
.zp0119 .nav.index{grid-template-columns:1fr auto}
.zp0119 .nav.index>span{display:none}}

.zp0119 .heroActions a,.zp0119 .primary,.zp0119 .ctaBtn,.zp0119 .btnPrimary,.zp0119 .schedule>a,.zp0119 .newsletter>a{transition:all .2s ease}
.zp0119 .heroActions a:hover,.zp0119 .primary:hover,.zp0119 .ctaBtn:hover,.zp0119 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0119 nav a,.zp0119 .nav a,.zp0119 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0119 nav a:hover,.zp0119 .nav a:hover,.zp0119 .footer a:hover{
  opacity:.7
}
.zp0119 .serviceGrid article,.zp0119 .projectCard,.zp0119 .teamCard,.zp0119 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0119 .serviceGrid article:hover,.zp0119 .projectCard:hover,.zp0119 .teamCard:hover,.zp0119 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0119 *,.zp0119 *::before,.zp0119 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0119 a,.zp0119 button,.zp0119 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
