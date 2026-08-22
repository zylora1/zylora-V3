import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0226-bakery-bento-grid", "family": "Bento Grid", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|service-catalogue|destinations>case-study>newsletter>proof>services|borderless|retro-bookish", "industry": "bakery", "hero": "layered-photography", "navigation": "tabbed", "layout": "service-catalogue"};

export default function Template0226({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0226" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0226{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0226 *{box-sizing:border-box}
.zp0226 a{color:inherit;text-decoration:none}
.zp0226 h1,.zp0226 h2,.zp0226 h3,.zp0226 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0226 img{max-width:100%;display:block}
.zp0226 button,.zp0226 a{-webkit-tap-highlight-color:transparent}
.zp0226 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0226 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0226 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0226 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0226 .mobileMenu{display:none}
.zp0226 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0226 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0226 .eyebrow,.zp0226 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0226 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0226 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0226 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0226 .heroActions a,.zp0226 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0226 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0226 .visual,.zp0226 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0226 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0226 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0226 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0226 .heroPhoto{object-fit:cover}
.zp0226 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0226 .layered{position:relative;padding:8%}
.zp0226 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0226 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0226 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0226 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0226 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0226 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0226 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0226 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0226 .serviceGrid p{color:var(--muted)}
.zp0226 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0226 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0226 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0226 details{border-top:1px solid var(--border);padding:20px 0}
.zp0226 details summary{font-weight:800;cursor:pointer}
.zp0226 details p{color:var(--muted);max-width:70ch}
.zp0226 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0226 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0226 .projects article:nth-child(2){transform:translateY(32px)}
.zp0226 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0226 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0226 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0226 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0226 .contact .eyebrow{color:var(--bg)}
.zp0226 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0226 .contactMeta{display:grid;gap:10px}
.zp0226 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0226 .heroCopy{animation:enter-225 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-225{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0226 .hero{min-height:auto}
.zp0226 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0226 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0226 .nav nav{display:none}
.zp0226 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0226 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0226 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0226 .mobileMenu nav a{padding:10px 8px}
.zp0226 .hero,.zp0226 .layeredHero{grid-template-columns:1fr}
.zp0226 .section,.zp0226 .sectionTitle,.zp0226 .contact{grid-template-columns:1fr}
.zp0226 .projects .projectGrid{grid-template-columns:1fr}
.zp0226 .projects article:nth-child(2){transform:none}
.zp0226 .section{display:block}}
@media(max-width:430px){.zp0226{font-size:16px}
.zp0226 .hero,.zp0226 .section,.zp0226 .contact{padding-left:18px;padding-right:18px}
.zp0226 .serviceGrid,.zp0226 .proof,.zp0226 .destinations>div:last-child{grid-template-columns:1fr}
.zp0226 h1{font-size:clamp(42px,14vw,70px)}}

.zp0226 .heroActions a,.zp0226 .primary,.zp0226 .ctaBtn,.zp0226 .btnPrimary,.zp0226 .schedule>a,.zp0226 .newsletter>a{transition:all .2s ease}
.zp0226 .heroActions a:hover,.zp0226 .primary:hover,.zp0226 .ctaBtn:hover,.zp0226 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0226 nav a,.zp0226 .nav a,.zp0226 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0226 nav a:hover,.zp0226 .nav a:hover,.zp0226 .footer a:hover{
  color:var(--primary)
}
.zp0226 .serviceGrid article,.zp0226 .projectCard,.zp0226 .teamCard,.zp0226 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0226 .serviceGrid article:hover,.zp0226 .projectCard:hover,.zp0226 .teamCard:hover,.zp0226 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0226 *,.zp0226 *::before,.zp0226 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0226 a,.zp0226 button,.zp0226 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">25</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bento Grid / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
