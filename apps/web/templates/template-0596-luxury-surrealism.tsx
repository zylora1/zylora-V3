import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0596-luxury-surrealism", "family": "Surrealism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|conversion-first|team>services>metrics>proof>destinations>availability|cut-corners|product-ui", "industry": "luxury", "hero": "product-led", "navigation": "transparent-overlay", "layout": "conversion-first"};

export default function Template0596({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Luxury Brand");
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
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0596" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0596{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0596 *{box-sizing:border-box}
.zp0596 a{color:inherit;text-decoration:none}
.zp0596 h1,.zp0596 h2,.zp0596 h3,.zp0596 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0596 img{max-width:100%;display:block}
.zp0596 button,.zp0596 a{-webkit-tap-highlight-color:transparent}
.zp0596 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0596 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0596 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0596 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0596 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0596 .mobileMenu{display:none}
.zp0596 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0596 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0596 .eyebrow,.zp0596 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0596 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0596 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0596 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0596 .heroActions a,.zp0596 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0596 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0596 .visual,.zp0596 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0596 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0596 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0596 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0596 .heroPhoto{object-fit:cover}
.zp0596 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0596 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0596 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0596 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0596 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0596 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0596 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0596 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0596 .serviceGrid p{color:var(--muted)}
.zp0596 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0596 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0596 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0596 details{border-top:1px solid var(--border);padding:20px 0}
.zp0596 details summary{font-weight:800;cursor:pointer}
.zp0596 details p{color:var(--muted);max-width:70ch}
.zp0596 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0596 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0596 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Segoe UI, Arial, sans-serif;margin-bottom:18px}
.zp0596 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0596 .metrics div{background:var(--bg);padding:30px}
.zp0596 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Segoe UI, Arial, sans-serif;color:var(--primary)}
.zp0596 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0596 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0596 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0596 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0596 .contact .eyebrow{color:var(--bg)}
.zp0596 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0596 .contactMeta{display:grid;gap:10px}
.zp0596 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0596 .heroCopy{animation:enter-595 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-595{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0596 .hero{min-height:auto}
.zp0596 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0596 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0596 .nav nav{display:none}
.zp0596 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0596 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0596 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0596 .mobileMenu nav a{padding:10px 8px}
.zp0596 .hero,.zp0596 .productLedHero{grid-template-columns:1fr}
.zp0596 .section,.zp0596 .sectionTitle,.zp0596 .contact{grid-template-columns:1fr}
.zp0596 .teamGrid{grid-template-columns:1fr 1fr}
.zp0596 .metrics{grid-template-columns:1fr 1fr}
.zp0596 .section{display:block}}
@media(max-width:430px){.zp0596{font-size:16px}
.zp0596 .hero,.zp0596 .section,.zp0596 .contact{padding-left:18px;padding-right:18px}
.zp0596 .serviceGrid,.zp0596 .proof,.zp0596 .teamGrid,.zp0596 .metrics,.zp0596 .destinations>div:last-child{grid-template-columns:1fr}
.zp0596 h1{font-size:clamp(42px,14vw,70px)}}

.zp0596 .heroActions a,.zp0596 .primary,.zp0596 .ctaBtn,.zp0596 .btnPrimary,.zp0596 .schedule>a,.zp0596 .newsletter>a{transition:all .2s ease}
.zp0596 .heroActions a:hover,.zp0596 .primary:hover,.zp0596 .ctaBtn:hover,.zp0596 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0596 nav a,.zp0596 .nav a,.zp0596 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0596 nav a:hover,.zp0596 .nav a:hover,.zp0596 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0596 .serviceGrid article,.zp0596 .projectCard,.zp0596 .teamCard,.zp0596 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0596 .serviceGrid article:hover,.zp0596 .projectCard:hover,.zp0596 .teamCard:hover,.zp0596 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0596 *,.zp0596 *::before,.zp0596 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0596 a,.zp0596 button,.zp0596 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">95</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
