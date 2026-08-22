import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0504-startup-collage", "family": "Collage", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|catalogue-table|security>team>availability>awards>proof>services>programmes|micro-radius|terminal", "industry": "startup", "hero": "video-frame", "navigation": "corner-dock", "layout": "catalogue-table"};

export default function Template0504({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Technology Startup");
  const headline = String(content.headline || "A new product with a precise problem, a credible point of view, and proof it works.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product", "Solutions", "Research", "Customer stories", "Careers"];
  const industryLabel = "Technology startup";
  const serviceNotes = ["Advisory board access: domain experts available for 2h/month per advisor.", "Investor-ready financial models built with your unit economics, not templates.", "Legal setup: incorporation, shareholding, IP, and founder agreements done right once.", "Go-to-market planning with channel experiments prioritised by CAC potential.", "Fundraise preparation: pitch deck, data room, and investor narrative coaching."];
  const proofPoints = ["Portfolio: 47 companies", "Average seed raised: £1.2M", "Partner response within 48h", "Equity-free options available"];
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0504" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0504{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0504 *{box-sizing:border-box}
.zp0504 a{color:inherit;text-decoration:none}
.zp0504 h1,.zp0504 h2,.zp0504 h3,.zp0504 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0504 img{max-width:100%;display:block}
.zp0504 button,.zp0504 a{-webkit-tap-highlight-color:transparent}
.zp0504 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0504 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0504 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0504 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0504 .mobileMenu{display:none}
.zp0504 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0504 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0504 .eyebrow,.zp0504 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0504 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0504 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0504 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0504 .heroActions a,.zp0504 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0504 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0504 .visual,.zp0504 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0504 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0504 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0504 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0504 .heroPhoto{object-fit:cover}
.zp0504 .videoHero{grid-template-columns:1fr 1fr}
.zp0504 .videoFrame{position:relative}
.zp0504 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0504 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0504 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0504 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0504 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0504 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0504 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0504 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0504 .serviceGrid p{color:var(--muted)}
.zp0504 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0504 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0504 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0504 details{border-top:1px solid var(--border);padding:20px 0}
.zp0504 details summary{font-weight:800;cursor:pointer}
.zp0504 details p{color:var(--muted);max-width:70ch}
.zp0504 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0504 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0504 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Lucida Console, Monaco, monospace;margin-bottom:18px}
.zp0504 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0504 .awards>div{max-width:800px;margin-left:auto}
.zp0504 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0504 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0504 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0504 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0504 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0504 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0504 .contact .eyebrow{color:var(--bg)}
.zp0504 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0504 .contactMeta{display:grid;gap:10px}
.zp0504 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0504{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0504 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0504 .heroCopy{animation:enter-503 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-503{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0504 .hero{min-height:auto}
.zp0504 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0504 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0504 .nav nav{display:none}
.zp0504 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0504 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0504 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0504 .mobileMenu nav a{padding:10px 8px}
.zp0504 .hero,.zp0504 .videoHero{grid-template-columns:1fr}
.zp0504 .section,.zp0504 .sectionTitle,.zp0504 .security,.zp0504 .contact{grid-template-columns:1fr}
.zp0504 .teamGrid{grid-template-columns:1fr 1fr}
.zp0504 .section{display:block}}
@media(max-width:430px){.zp0504{font-size:16px}
.zp0504 .hero,.zp0504 .section,.zp0504 .contact{padding-left:18px;padding-right:18px}
.zp0504 .serviceGrid,.zp0504 .proof,.zp0504 .teamGrid,.zp0504 .programmes>div:last-child{grid-template-columns:1fr}
.zp0504 h1{font-size:clamp(42px,14vw,70px)}}

.zp0504 .heroActions a,.zp0504 .primary,.zp0504 .ctaBtn,.zp0504 .btnPrimary,.zp0504 .schedule>a,.zp0504 .newsletter>a{transition:all .2s ease}
.zp0504 .heroActions a:hover,.zp0504 .primary:hover,.zp0504 .ctaBtn:hover,.zp0504 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0504 nav a,.zp0504 .nav a,.zp0504 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0504 nav a:hover,.zp0504 .nav a:hover,.zp0504 .footer a:hover{
  color:var(--primary)
}
.zp0504 .serviceGrid article,.zp0504 .projectCard,.zp0504 .teamCard,.zp0504 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0504 .serviceGrid article:hover,.zp0504 .projectCard:hover,.zp0504 .teamCard:hover,.zp0504 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0504 *,.zp0504 *::before,.zp0504 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0504 a,.zp0504 button,.zp0504 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">03</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
