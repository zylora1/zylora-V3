import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0578-fashion-brutalism", "family": "Brutalism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|full-bleed-chapters|services>comparison>proof>research>packages>community|borderless|modernist-duo", "industry": "fashion", "hero": "layered-photography", "navigation": "tabbed", "layout": "full-bleed-chapters"};

export default function Template0578({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Fashion Label");
  const headline = String(content.headline || "A strong point of view expressed through silhouette, material, and considered detail.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New collection", "Ready-to-wear", "Accessories", "Editorial", "Stockists"];
  const industryLabel = "Fashion label";
  const serviceNotes = ["Seasonal collections designed in-house with full lookbook photography managed.", "Made-to-order service with a 3-week lead time and fitting appointment included.", "Sustainable material sourcing: certified organic, deadstock, and recycled options.", "Wholesale programme with minimum order quantities designed for independent retailers.", "Alteration and repair service for garments you love but that need adapting."];
  const proofPoints = ["B Corp certified", "100% traceable supply chain", "Press: Vogue, Wallpaper", "Ships to 40+ countries"];
  const storyBody = "Morrow Fashion Label is presented as a real working fashion label, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0578" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0578{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:none;--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0578 *{box-sizing:border-box}
.zp0578 a{color:inherit;text-decoration:none}
.zp0578 h1,.zp0578 h2,.zp0578 h3,.zp0578 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0578 img{max-width:100%;display:block}
.zp0578 button,.zp0578 a{-webkit-tap-highlight-color:transparent}
.zp0578 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0578 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0578 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0578 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0578 .mobileMenu{display:none}
.zp0578 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0578 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0578 .eyebrow,.zp0578 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0578 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0578 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0578 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0578 .heroActions a,.zp0578 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0578 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0578 .visual,.zp0578 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0578 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0578 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0578 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0578 .heroPhoto{object-fit:cover}
.zp0578 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0578 .layered{position:relative;padding:8%}
.zp0578 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0578 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0578 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0578 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0578 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0578 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0578 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0578 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0578 .serviceGrid p{color:var(--muted)}
.zp0578 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0578 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0578 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0578 details{border-top:1px solid var(--border);padding:20px 0}
.zp0578 details summary{font-weight:800;cursor:pointer}
.zp0578 details p{color:var(--muted);max-width:70ch}
.zp0578 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0578 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0578 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0578 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0578 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0578 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0578 .packages>.sectionTitle{grid-column:1/-1}
.zp0578 .packages article{padding:24px;border:1px solid var(--border)}
.zp0578 .researchRows{max-width:900px;margin-left:auto}
.zp0578 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0578 .contact .eyebrow{color:var(--bg)}
.zp0578 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0578 .contactMeta{display:grid;gap:10px}
.zp0578 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0578 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0578 .heroActions a,.zp0578 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0578 h1{text-transform:uppercase}
.zp0578 .heroCopy{animation:enter-577 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-577{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0578 .hero{min-height:auto}
.zp0578 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0578 .proof{grid-template-columns:1fr 1fr}
.zp0578 .packages{grid-template-columns:1fr 1fr}
.zp0578 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0578 .nav nav{display:none}
.zp0578 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0578 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0578 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0578 .mobileMenu nav a{padding:10px 8px}
.zp0578 .hero,.zp0578 .layeredHero{grid-template-columns:1fr}
.zp0578 .section,.zp0578 .sectionTitle,.zp0578 .contact{grid-template-columns:1fr}
.zp0578 .section{display:block}}
@media(max-width:430px){.zp0578{font-size:16px}
.zp0578 .hero,.zp0578 .section,.zp0578 .contact{padding-left:18px;padding-right:18px}
.zp0578 .serviceGrid,.zp0578 .proof,.zp0578 .packages,.zp0578 .compareGrid{grid-template-columns:1fr}
.zp0578 h1{font-size:clamp(42px,14vw,70px)}}

.zp0578 .heroActions a,.zp0578 .primary,.zp0578 .ctaBtn,.zp0578 .btnPrimary,.zp0578 .schedule>a,.zp0578 .newsletter>a{transition:all .2s ease}
.zp0578 .heroActions a:hover,.zp0578 .primary:hover,.zp0578 .ctaBtn:hover,.zp0578 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0578 nav a,.zp0578 .nav a,.zp0578 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0578 nav a:hover,.zp0578 .nav a:hover,.zp0578 .footer a:hover{
  text-decoration:underline
}
.zp0578 .serviceGrid article,.zp0578 .projectCard,.zp0578 .teamCard,.zp0578 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0578 .serviceGrid article:hover,.zp0578 .projectCard:hover,.zp0578 .teamCard:hover,.zp0578 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0578 *,.zp0578 *::before,.zp0578 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0578 a,.zp0578 button,.zp0578 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">77</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
