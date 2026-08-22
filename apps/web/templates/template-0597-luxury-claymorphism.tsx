import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0597-luxury-claymorphism", "family": "Claymorphism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|architectural-grid|team>services>testimonial>proof>gallery>features>research|ticket-edge|humanist-classic", "industry": "luxury", "hero": "image-collage", "navigation": "lower-third", "layout": "architectural-grid"};

export default function Template0597({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Luxury Brand");
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
  const testimonialName = "Kindred client";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0597" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0597{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0597 *{box-sizing:border-box}
.zp0597 a{color:inherit;text-decoration:none}
.zp0597 h1,.zp0597 h2,.zp0597 h3,.zp0597 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0597 img{max-width:100%;display:block}
.zp0597 button,.zp0597 a{-webkit-tap-highlight-color:transparent}
.zp0597 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0597 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0597 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0597 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0597 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0597 .mobileMenu{display:none}
.zp0597 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0597 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0597 .eyebrow,.zp0597 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0597 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0597 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0597 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0597 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0597 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0597 .visual,.zp0597 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0597 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0597 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0597 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0597 .heroPhoto{object-fit:cover}
.zp0597 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0597 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0597 .collage>*:first-child{grid-row:1/3}
.zp0597 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0597 .miniVisual.alt{background:var(--secondary)}
.zp0597 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0597 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0597 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0597 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0597 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0597 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0597 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0597 .serviceGrid p{color:var(--muted)}
.zp0597 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0597 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0597 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0597 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0597 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0597 .testimonial>div{align-self:end}
.zp0597 .testimonial span{display:block;opacity:.7}
.zp0597 details{border-top:1px solid var(--border);padding:20px 0}
.zp0597 details summary{font-weight:800;cursor:pointer}
.zp0597 details p{color:var(--muted);max-width:70ch}
.zp0597 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0597 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0597 .galleryGrid>*:first-child{grid-row:1/3}
.zp0597 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0597 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0597 .g2,.zp0597 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0597 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0597 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0597 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Baskerville, Georgia, serif;margin-bottom:18px}
.zp0597 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0597 .features ul{list-style:none;margin:0;padding:0}
.zp0597 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0597 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0597 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0597 .researchRows{max-width:900px;margin-left:auto}
.zp0597 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0597 .contact .eyebrow{color:var(--bg)}
.zp0597 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0597 .contactMeta{display:grid;gap:10px}
.zp0597 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0597 .heroCopy{animation:enter-596 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-596{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0597 .hero{min-height:auto}
.zp0597 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0597 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0597 .nav nav{display:none}
.zp0597 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0597 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0597 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0597 .mobileMenu nav a{padding:10px 8px}
.zp0597 .hero,.zp0597 .collageHero{grid-template-columns:1fr}
.zp0597 .section,.zp0597 .sectionTitle,.zp0597 .features,.zp0597 .contact{grid-template-columns:1fr}
.zp0597 .testimonial{grid-template-columns:1fr}
.zp0597 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0597 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0597 .teamGrid{grid-template-columns:1fr 1fr}
.zp0597 .section{display:block}}
@media(max-width:430px){.zp0597{font-size:16px}
.zp0597 .hero,.zp0597 .section,.zp0597 .contact{padding-left:18px;padding-right:18px}
.zp0597 .serviceGrid,.zp0597 .proof,.zp0597 .teamGrid{grid-template-columns:1fr}
.zp0597 h1{font-size:clamp(42px,14vw,70px)}
.zp0597 .galleryGrid{grid-template-columns:1fr}
.zp0597 .galleryGrid>*:first-child{grid-column:auto}}

.zp0597 .heroActions a,.zp0597 .primary,.zp0597 .ctaBtn,.zp0597 .btnPrimary,.zp0597 .schedule>a,.zp0597 .newsletter>a{transition:all .2s ease}
.zp0597 .heroActions a:hover,.zp0597 .primary:hover,.zp0597 .ctaBtn:hover,.zp0597 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0597 nav a,.zp0597 .nav a,.zp0597 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0597 nav a:hover,.zp0597 .nav a:hover,.zp0597 .footer a:hover{
  color:var(--primary)
}
.zp0597 .serviceGrid article,.zp0597 .projectCard,.zp0597 .teamCard,.zp0597 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0597 .serviceGrid article:hover,.zp0597 .projectCard:hover,.zp0597 .teamCard:hover,.zp0597 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0597 *,.zp0597 *::before,.zp0597 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0597 a,.zp0597 button,.zp0597 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">96</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
