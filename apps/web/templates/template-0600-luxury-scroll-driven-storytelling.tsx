import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0600-luxury-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|property-led|destinations>newsletter>pricing>materials>proof>programmes>services|micro-radius|terminal", "industry": "luxury", "hero": "video-frame", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0600({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Luxury Brand");
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
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0600" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0600{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0600 *{box-sizing:border-box}
.zp0600 a{color:inherit;text-decoration:none}
.zp0600 h1,.zp0600 h2,.zp0600 h3,.zp0600 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0600 img{max-width:100%;display:block}
.zp0600 button,.zp0600 a{-webkit-tap-highlight-color:transparent}
.zp0600 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0600 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0600 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0600 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0600 .mobileMenu{display:none}
.zp0600 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0600 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0600 .eyebrow,.zp0600 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0600 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0600 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0600 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0600 .heroActions a,.zp0600 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0600 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0600 .visual,.zp0600 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0600 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0600 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0600 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0600 .heroPhoto{object-fit:cover}
.zp0600 .videoHero{grid-template-columns:1fr 1fr}
.zp0600 .videoFrame{position:relative}
.zp0600 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0600 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0600 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0600 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0600 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0600 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0600 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0600 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0600 .serviceGrid p{color:var(--muted)}
.zp0600 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0600 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0600 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0600 details{border-top:1px solid var(--border);padding:20px 0}
.zp0600 details summary{font-weight:800;cursor:pointer}
.zp0600 details p{color:var(--muted);max-width:70ch}
.zp0600 .priceRows{border-top:1px solid var(--border)}
.zp0600 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0600 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0600 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0600 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0600 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0600 .programmes>div:last-child,.zp0600 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0600 .programmes article,.zp0600 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0600 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0600 .contact .eyebrow{color:var(--bg)}
.zp0600 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0600 .contactMeta{display:grid;gap:10px}
.zp0600 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0600 .heroCopy{animation:enter-599 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-599{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0600 .hero{min-height:auto}
.zp0600 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0600 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0600 .nav nav{display:none}
.zp0600 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0600 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0600 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0600 .mobileMenu nav a{padding:10px 8px}
.zp0600 .hero,.zp0600 .videoHero{grid-template-columns:1fr}
.zp0600 .section,.zp0600 .sectionTitle,.zp0600 .contact{grid-template-columns:1fr}
.zp0600 .section{display:block}}
@media(max-width:430px){.zp0600{font-size:16px}
.zp0600 .hero,.zp0600 .section,.zp0600 .contact{padding-left:18px;padding-right:18px}
.zp0600 .serviceGrid,.zp0600 .proof,.zp0600 .programmes>div:last-child,.zp0600 .destinations>div:last-child{grid-template-columns:1fr}
.zp0600 h1{font-size:clamp(42px,14vw,70px)}
.zp0600 .priceRows article{grid-template-columns:1fr}}

.zp0600 .heroActions a,.zp0600 .primary,.zp0600 .ctaBtn,.zp0600 .btnPrimary,.zp0600 .schedule>a,.zp0600 .newsletter>a{transition:all .2s ease}
.zp0600 .heroActions a:hover,.zp0600 .primary:hover,.zp0600 .ctaBtn:hover,.zp0600 .btnPrimary:hover{
  opacity:.8
}
.zp0600 nav a,.zp0600 .nav a,.zp0600 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0600 nav a:hover,.zp0600 .nav a:hover,.zp0600 .footer a:hover{
  color:var(--primary)
}
.zp0600 .serviceGrid article,.zp0600 .projectCard,.zp0600 .teamCard,.zp0600 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0600 .serviceGrid article:hover,.zp0600 .projectCard:hover,.zp0600 .teamCard:hover,.zp0600 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0600 *,.zp0600 *::before,.zp0600 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0600 a,.zp0600 button,.zp0600 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">99</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
