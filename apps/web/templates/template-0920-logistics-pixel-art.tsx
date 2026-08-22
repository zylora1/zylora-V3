import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0920-logistics-pixel-art", "family": "Pixel Art", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|conversion-first|timeline>services>pricing>research>hours>proof|micro-radius|newspaper", "industry": "logistics", "hero": "video-frame", "navigation": "corner-dock", "layout": "conversion-first"};

export default function Template0920({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Logistics Company");
  const headline = String(content.headline || "Operational visibility and dependable movement from pickup through final delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Freight", "Warehousing", "Last-mile", "Customs support", "Tracking"];
  const industryLabel = "Logistics company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Logistics company / Project A", "Logistics company / Project B", "Logistics company / Project C", "Logistics company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Operational visibility and dependable movement from pickup through final delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0920" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0920{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0920 *{box-sizing:border-box}
.zp0920 a{color:inherit;text-decoration:none}
.zp0920 h1,.zp0920 h2,.zp0920 h3,.zp0920 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0920 img{max-width:100%;display:block}
.zp0920 button,.zp0920 a{-webkit-tap-highlight-color:transparent}
.zp0920 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0920 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0920 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0920 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0920 .mobileMenu{display:none}
.zp0920 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0920 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0920 .eyebrow,.zp0920 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0920 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0920 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0920 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0920 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0920 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0920 .visual,.zp0920 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0920 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0920 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0920 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0920 .heroPhoto{object-fit:cover}
.zp0920 .videoHero{grid-template-columns:1fr 1fr}
.zp0920 .videoFrame{position:relative}
.zp0920 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0920 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0920 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0920 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0920 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0920 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0920 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0920 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0920 .serviceGrid p{color:var(--muted)}
.zp0920 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0920 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0920 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0920 details{border-top:1px solid var(--border);padding:20px 0}
.zp0920 details summary{font-weight:800;cursor:pointer}
.zp0920 details p{color:var(--muted);max-width:70ch}
.zp0920 .priceRows{border-top:1px solid var(--border)}
.zp0920 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0920 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0920 .hours dl{margin:0}
.zp0920 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0920 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0920 .timeline article{padding:20px 0}
.zp0920 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0920 .researchRows{max-width:900px;margin-left:auto}
.zp0920 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0920 .contact .eyebrow{color:var(--bg)}
.zp0920 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0920 .contactMeta{display:grid;gap:10px}
.zp0920 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0920{image-rendering:pixelated}
.zp0920 *{border-radius:0!important}
.zp0920 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp0920 .heroCopy{animation:enter-919 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-919{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0920 .hero{min-height:auto}
.zp0920 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0920 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0920 .nav nav{display:none}
.zp0920 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0920 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0920 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0920 .mobileMenu nav a{padding:10px 8px}
.zp0920 .hero,.zp0920 .videoHero{grid-template-columns:1fr}
.zp0920 .section,.zp0920 .sectionTitle,.zp0920 .hours,.zp0920 .contact{grid-template-columns:1fr}
.zp0920 .section{display:block}}
@media(max-width:430px){.zp0920{font-size:16px}
.zp0920 .hero,.zp0920 .section,.zp0920 .contact{padding-left:18px;padding-right:18px}
.zp0920 .serviceGrid,.zp0920 .proof{grid-template-columns:1fr}
.zp0920 h1{font-size:clamp(42px,14vw,70px)}
.zp0920 .priceRows article{grid-template-columns:1fr}}

.zp0920 .heroActions a,.zp0920 .primary,.zp0920 .ctaBtn,.zp0920 .btnPrimary,.zp0920 .schedule>a,.zp0920 .newsletter>a{transition:all .2s ease}
.zp0920 .heroActions a:hover,.zp0920 .primary:hover,.zp0920 .ctaBtn:hover,.zp0920 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0920 nav a,.zp0920 .nav a,.zp0920 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0920 nav a:hover,.zp0920 .nav a:hover,.zp0920 .footer a:hover{
  color:var(--primary)
}
.zp0920 .serviceGrid article,.zp0920 .projectCard,.zp0920 .teamCard,.zp0920 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0920 .serviceGrid article:hover,.zp0920 .projectCard:hover,.zp0920 .teamCard:hover,.zp0920 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0920 *,.zp0920 *::before,.zp0920 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0920 a,.zp0920 button,.zp0920 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">19</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
