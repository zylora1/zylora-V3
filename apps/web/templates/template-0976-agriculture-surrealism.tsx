import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0976-agriculture-surrealism", "family": "Surrealism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|offset-cards|credentials>awards>proof>services>availability|heavy-frame|brutal-display", "industry": "agriculture", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "offset-cards"};

export default function Template0976({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Agricultural Business");
  const headline = String(content.headline || "A working farm connected directly to buyers, partners, seasons, and provenance.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Produce", "Wholesale", "Farm visits", "Seasonal boxes", "Trade supply"];
  const industryLabel = "Agricultural business";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Agricultural business / Project A", "Agricultural business / Project B", "Agricultural business / Project C", "Agricultural business / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A working farm connected directly to buyers, partners, seasons, and provenance. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0976" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0976{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0976 *{box-sizing:border-box}
.zp0976 a{color:inherit;text-decoration:none}
.zp0976 h1,.zp0976 h2,.zp0976 h3,.zp0976 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0976 img{max-width:100%;display:block}
.zp0976 button,.zp0976 a{-webkit-tap-highlight-color:transparent}
.zp0976 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0976 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0976 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0976 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0976 .nav.centered strong{order:2;font-size:24px}
.zp0976 .nav.centered nav:first-child{order:1}
.zp0976 .nav.centered nav:last-child{order:3}
.zp0976 .mobileMenu{display:none}
.zp0976 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0976 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0976 .eyebrow,.zp0976 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0976 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0976 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0976 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0976 .heroActions a,.zp0976 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0976 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0976 .visual,.zp0976 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0976 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0976 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0976 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0976 .heroPhoto{object-fit:cover}
.zp0976 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0976 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0976 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0976 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0976 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0976 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0976 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0976 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0976 .serviceGrid p{color:var(--muted)}
.zp0976 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0976 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0976 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0976 details{border-top:1px solid var(--border);padding:20px 0}
.zp0976 details summary{font-weight:800;cursor:pointer}
.zp0976 details p{color:var(--muted);max-width:70ch}
.zp0976 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0976 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0976 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0976 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0976 .awards>div{max-width:800px;margin-left:auto}
.zp0976 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0976 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0976 .contact .eyebrow{color:var(--bg)}
.zp0976 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0976 .contactMeta{display:grid;gap:10px}
.zp0976 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0976 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0976 .heroCopy{animation:enter-975 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-975{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0976 .hero{min-height:auto}
.zp0976 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0976 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0976 .nav nav{display:none}
.zp0976 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0976 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0976 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0976 .mobileMenu nav a{padding:10px 8px}
.zp0976 .hero,.zp0976 .asymHero{grid-template-columns:1fr}
.zp0976 .section,.zp0976 .sectionTitle,.zp0976 .contact{grid-template-columns:1fr}
.zp0976 .section{display:block}}
@media(max-width:430px){.zp0976{font-size:16px}
.zp0976 .hero,.zp0976 .section,.zp0976 .contact{padding-left:18px;padding-right:18px}
.zp0976 .serviceGrid,.zp0976 .proof{grid-template-columns:1fr}
.zp0976 h1{font-size:clamp(42px,14vw,70px)}}

.zp0976 .heroActions a,.zp0976 .primary,.zp0976 .ctaBtn,.zp0976 .btnPrimary,.zp0976 .schedule>a,.zp0976 .newsletter>a{transition:all .2s ease}
.zp0976 .heroActions a:hover,.zp0976 .primary:hover,.zp0976 .ctaBtn:hover,.zp0976 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0976 nav a,.zp0976 .nav a,.zp0976 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0976 nav a:hover,.zp0976 .nav a:hover,.zp0976 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0976 .serviceGrid article,.zp0976 .projectCard,.zp0976 .teamCard,.zp0976 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0976 .serviceGrid article:hover,.zp0976 .projectCard:hover,.zp0976 .teamCard:hover,.zp0976 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0976 *,.zp0976 *::before,.zp0976 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0976 a,.zp0976 button,.zp0976 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">04</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">75</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
