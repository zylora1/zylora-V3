import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0605-luxury-neo-classical", "family": "Neo-classical", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|gallery-index|pricing>projects>metrics>services>proof>programmes|hard-outline|condensed-editorial", "industry": "luxury", "hero": "floating-panels", "navigation": "compact-floating", "layout": "gallery-index"};

export default function Template0605({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Luxury Brand");
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
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0605" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0605{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0605 *{box-sizing:border-box}
.zp0605 a{color:inherit;text-decoration:none}
.zp0605 h1,.zp0605 h2,.zp0605 h3,.zp0605 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0605 img{max-width:100%;display:block}
.zp0605 button,.zp0605 a{-webkit-tap-highlight-color:transparent}
.zp0605 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0605 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0605 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0605 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0605 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0605 .mobileMenu{display:none}
.zp0605 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0605 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0605 .eyebrow,.zp0605 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0605 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0605 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0605 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0605 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0605 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0605 .visual,.zp0605 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0605 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0605 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0605 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0605 .heroPhoto{object-fit:cover}
.zp0605 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0605 .floatStack{position:relative;min-height:500px}
.zp0605 .floatStack>*{position:absolute}
.zp0605 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0605 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0605 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0605 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0605 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0605 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0605 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0605 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0605 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0605 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0605 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0605 .serviceGrid p{color:var(--muted)}
.zp0605 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0605 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0605 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0605 details{border-top:1px solid var(--border);padding:20px 0}
.zp0605 details summary{font-weight:800;cursor:pointer}
.zp0605 details p{color:var(--muted);max-width:70ch}
.zp0605 .priceRows{border-top:1px solid var(--border)}
.zp0605 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0605 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0605 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0605 .projects article:nth-child(2){transform:translateY(32px)}
.zp0605 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0605 .metrics div{background:var(--bg);padding:30px}
.zp0605 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Arial Narrow, Arial, sans-serif;color:var(--primary)}
.zp0605 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0605 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0605 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0605 .contact .eyebrow{color:var(--bg)}
.zp0605 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0605 .contactMeta{display:grid;gap:10px}
.zp0605 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0605 .heroCopy{animation:enter-604 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-604{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0605 .hero{min-height:auto}
.zp0605 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0605 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0605 .nav nav{display:none}
.zp0605 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0605 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0605 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0605 .mobileMenu nav a{padding:10px 8px}
.zp0605 .hero,.zp0605 .floatingHero{grid-template-columns:1fr}
.zp0605 .section,.zp0605 .sectionTitle,.zp0605 .contact{grid-template-columns:1fr}
.zp0605 .metrics{grid-template-columns:1fr 1fr}
.zp0605 .projects .projectGrid{grid-template-columns:1fr}
.zp0605 .projects article:nth-child(2){transform:none}
.zp0605 .section{display:block}}
@media(max-width:430px){.zp0605{font-size:16px}
.zp0605 .hero,.zp0605 .section,.zp0605 .contact{padding-left:18px;padding-right:18px}
.zp0605 .serviceGrid,.zp0605 .proof,.zp0605 .metrics,.zp0605 .programmes>div:last-child{grid-template-columns:1fr}
.zp0605 h1{font-size:clamp(42px,14vw,70px)}
.zp0605 .priceRows article{grid-template-columns:1fr}}

.zp0605 .heroActions a,.zp0605 .primary,.zp0605 .ctaBtn,.zp0605 .btnPrimary,.zp0605 .schedule>a,.zp0605 .newsletter>a{transition:all .2s ease}
.zp0605 .heroActions a:hover,.zp0605 .primary:hover,.zp0605 .ctaBtn:hover,.zp0605 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0605 nav a,.zp0605 .nav a,.zp0605 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0605 nav a:hover,.zp0605 .nav a:hover,.zp0605 .footer a:hover{
  color:var(--secondary)
}
.zp0605 .serviceGrid article,.zp0605 .projectCard,.zp0605 .teamCard,.zp0605 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0605 .serviceGrid article:hover,.zp0605 .projectCard:hover,.zp0605 .teamCard:hover,.zp0605 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0605 *,.zp0605 *::before,.zp0605 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0605 a,.zp0605 button,.zp0605 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">04</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
