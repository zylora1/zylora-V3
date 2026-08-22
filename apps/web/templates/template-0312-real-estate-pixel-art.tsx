import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0312-real-estate-pixel-art", "family": "Pixel Art", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|property-led|location>timeline>manifesto>proof>process>services>packages|micro-radius|terminal", "industry": "real-estate", "hero": "video-frame", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0312({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Real Estate Agency");
  const headline = String(content.headline || "Local market knowledge, sharp presentation, and straightforward advice through every move.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential sales", "Buyer representation", "Rentals", "Market appraisals", "Relocation"];
  const industryLabel = "Real estate agency";
  const serviceNotes = ["Market appraisal within 48 hours — accurate figures, not inflated ones to win instructions.", "Professional photography, floor plans, and videography included in our standard package.", "Accompanied viewings managed by someone who knows the property, not a junior.", "Negotiation management with weekly updates on where every offer stands.", "Completion support including solicitor liaison, survey coordination, and move-in day contact."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["NAEA Propertymark member", "0% sale fall-through rate", "Average sale: 98.2% of asking", "Fully managed lettings"];
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0312" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0312{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0312 *{box-sizing:border-box}
.zp0312 a{color:inherit;text-decoration:none}
.zp0312 h1,.zp0312 h2,.zp0312 h3,.zp0312 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0312 img{max-width:100%;display:block}
.zp0312 button,.zp0312 a{-webkit-tap-highlight-color:transparent}
.zp0312 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0312 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0312 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0312 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0312 .mobileMenu{display:none}
.zp0312 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0312 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0312 .eyebrow,.zp0312 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0312 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0312 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0312 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0312 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0312 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0312 .visual,.zp0312 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0312 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0312 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0312 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0312 .heroPhoto{object-fit:cover}
.zp0312 .videoHero{grid-template-columns:1fr 1fr}
.zp0312 .videoFrame{position:relative}
.zp0312 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0312 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0312 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0312 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0312 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0312 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0312 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0312 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0312 .serviceGrid p{color:var(--muted)}
.zp0312 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0312 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0312 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0312 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0312 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0312 details{border-top:1px solid var(--border);padding:20px 0}
.zp0312 details summary{font-weight:800;cursor:pointer}
.zp0312 details p{color:var(--muted);max-width:70ch}
.zp0312 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0312 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0312 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0312 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0312 .timeline article{padding:20px 0}
.zp0312 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0312 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0312 .packages>.sectionTitle{grid-column:1/-1}
.zp0312 .packages article{padding:24px;border:1px solid var(--border)}
.zp0312 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0312 .contact .eyebrow{color:var(--bg)}
.zp0312 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0312 .contactMeta{display:grid;gap:10px}
.zp0312 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0312{image-rendering:pixelated}
.zp0312 *{border-radius:0!important}
.zp0312 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp0312 .heroCopy{animation:enter-311 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-311{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0312 .hero{min-height:auto}
.zp0312 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0312 .proof{grid-template-columns:1fr 1fr}
.zp0312 .packages{grid-template-columns:1fr 1fr}
.zp0312 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0312 .nav nav{display:none}
.zp0312 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0312 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0312 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0312 .mobileMenu nav a{padding:10px 8px}
.zp0312 .hero,.zp0312 .videoHero{grid-template-columns:1fr}
.zp0312 .section,.zp0312 .sectionTitle,.zp0312 .location,.zp0312 .contact{grid-template-columns:1fr}
.zp0312 .section{display:block}}
@media(max-width:430px){.zp0312{font-size:16px}
.zp0312 .hero,.zp0312 .section,.zp0312 .contact{padding-left:18px;padding-right:18px}
.zp0312 .serviceGrid,.zp0312 .proof,.zp0312 .packages{grid-template-columns:1fr}
.zp0312 h1{font-size:clamp(42px,14vw,70px)}}

.zp0312 .heroActions a,.zp0312 .primary,.zp0312 .ctaBtn,.zp0312 .btnPrimary,.zp0312 .schedule>a,.zp0312 .newsletter>a{transition:all .2s ease}
.zp0312 .heroActions a:hover,.zp0312 .primary:hover,.zp0312 .ctaBtn:hover,.zp0312 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0312 nav a,.zp0312 .nav a,.zp0312 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0312 nav a:hover,.zp0312 .nav a:hover,.zp0312 .footer a:hover{
  color:var(--primary)
}
.zp0312 .serviceGrid article,.zp0312 .projectCard,.zp0312 .teamCard,.zp0312 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0312 .serviceGrid article:hover,.zp0312 .projectCard:hover,.zp0312 .teamCard:hover,.zp0312 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0312 *,.zp0312 *::before,.zp0312 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0312 a,.zp0312 button,.zp0312 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">11</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
