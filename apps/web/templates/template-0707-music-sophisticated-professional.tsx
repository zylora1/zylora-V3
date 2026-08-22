import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0707-music-sophisticated-professional", "family": "Sophisticated Professional", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|manifesto-grid|hours>press>availability>credentials>proof>services|inset-panel|editorial-serif", "industry": "music", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "manifesto-grid"};

export default function Template0707({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0707" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0707{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0707 *{box-sizing:border-box}
.zp0707 a{color:inherit;text-decoration:none}
.zp0707 h1,.zp0707 h2,.zp0707 h3,.zp0707 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0707 img{max-width:100%;display:block}
.zp0707 button,.zp0707 a{-webkit-tap-highlight-color:transparent}
.zp0707 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0707 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0707 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0707 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0707 .mobileMenu{display:none}
.zp0707 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0707 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0707 .eyebrow,.zp0707 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0707 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0707 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0707 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0707 .heroActions a,.zp0707 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0707 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0707 .visual,.zp0707 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0707 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0707 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0707 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0707 .heroPhoto{object-fit:cover}
.zp0707 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0707 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0707 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0707 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0707 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0707 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0707 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0707 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0707 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0707 .serviceGrid p{color:var(--muted)}
.zp0707 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0707 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0707 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0707 details{border-top:1px solid var(--border);padding:20px 0}
.zp0707 details summary{font-weight:800;cursor:pointer}
.zp0707 details p{color:var(--muted);max-width:70ch}
.zp0707 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0707 .hours dl{margin:0}
.zp0707 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0707 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0707 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0707 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0707 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0707 .awards>div{max-width:800px;margin-left:auto}
.zp0707 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0707 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0707 .contact .eyebrow{color:var(--bg)}
.zp0707 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0707 .contactMeta{display:grid;gap:10px}
.zp0707 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0707 .heroCopy{animation:enter-706 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-706{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0707 .hero{min-height:auto}
.zp0707 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0707 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0707 .nav nav{display:none}
.zp0707 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0707 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0707 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0707 .mobileMenu nav a{padding:10px 8px}
.zp0707 .hero,.zp0707 .diagonalHero{grid-template-columns:1fr}
.zp0707 .section,.zp0707 .sectionTitle,.zp0707 .hours,.zp0707 .contact{grid-template-columns:1fr}
.zp0707 .section{display:block}}
@media(max-width:430px){.zp0707{font-size:16px}
.zp0707 .hero,.zp0707 .section,.zp0707 .contact{padding-left:18px;padding-right:18px}
.zp0707 .serviceGrid,.zp0707 .proof{grid-template-columns:1fr}
.zp0707 h1{font-size:clamp(42px,14vw,70px)}}

.zp0707 .heroActions a,.zp0707 .primary,.zp0707 .ctaBtn,.zp0707 .btnPrimary,.zp0707 .schedule>a,.zp0707 .newsletter>a{transition:all .2s ease}
.zp0707 .heroActions a:hover,.zp0707 .primary:hover,.zp0707 .ctaBtn:hover,.zp0707 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0707 nav a,.zp0707 .nav a,.zp0707 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0707 nav a:hover,.zp0707 .nav a:hover,.zp0707 .footer a:hover{
  color:var(--primary)
}
.zp0707 .serviceGrid article,.zp0707 .projectCard,.zp0707 .teamCard,.zp0707 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0707 .serviceGrid article:hover,.zp0707 .projectCard:hover,.zp0707 .teamCard:hover,.zp0707 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0707 *,.zp0707 *::before,.zp0707 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0707 a,.zp0707 button,.zp0707 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">06</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
