import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0584-fashion-dark-cinematic", "family": "Dark Cinematic", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|dashboard-story|research>packages>team>programmes>services>proof|micro-radius|newspaper", "industry": "fashion", "hero": "monumental-type", "navigation": "corner-dock", "layout": "dashboard-story"};

export default function Template0584({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Fashion Label");
  const headline = String(content.headline || "A strong point of view expressed through silhouette, material, and considered detail.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New collection", "Ready-to-wear", "Accessories", "Editorial", "Stockists"];
  const serviceNotes = ["Seasonal collections designed in-house with full lookbook photography managed.", "Made-to-order service with a 3-week lead time and fitting appointment included.", "Sustainable material sourcing: certified organic, deadstock, and recycled options.", "Wholesale programme with minimum order quantities designed for independent retailers.", "Alteration and repair service for garments you love but that need adapting."];
  const proofPoints = ["B Corp certified", "100% traceable supply chain", "Press: Vogue, Wallpaper", "Ships to 40+ countries"];
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0584" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0584{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0584 *{box-sizing:border-box}
.zp0584 a{color:inherit;text-decoration:none}
.zp0584 h1,.zp0584 h2,.zp0584 h3,.zp0584 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0584 img{max-width:100%;display:block}
.zp0584 button,.zp0584 a{-webkit-tap-highlight-color:transparent}
.zp0584 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0584 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0584 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0584 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0584 .mobileMenu{display:none}
.zp0584 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0584 .eyebrow,.zp0584 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0584 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0584 .monumentalHero{display:block}
.zp0584 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0584 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0584 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0584 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0584 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0584 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0584 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0584 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0584 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0584 .serviceGrid p{color:var(--muted)}
.zp0584 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0584 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0584 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0584 details{border-top:1px solid var(--border);padding:20px 0}
.zp0584 details summary{font-weight:800;cursor:pointer}
.zp0584 details p{color:var(--muted);max-width:70ch}
.zp0584 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0584 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0584 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Times New Roman, serif;margin-bottom:18px}
.zp0584 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0584 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0584 .packages>.sectionTitle{grid-column:1/-1}
.zp0584 .packages article{padding:24px;border:1px solid var(--border)}
.zp0584 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0584 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0584 .researchRows{max-width:900px;margin-left:auto}
.zp0584 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0584 .contact .eyebrow{color:var(--bg)}
.zp0584 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0584 .contactMeta{display:grid;gap:10px}
.zp0584 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-583{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0584 .hero{min-height:auto}
.zp0584 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0584 .proof{grid-template-columns:1fr 1fr}
.zp0584 .packages{grid-template-columns:1fr 1fr}
.zp0584 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0584 .nav nav{display:none}
.zp0584 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0584 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0584 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0584 .mobileMenu nav a{padding:10px 8px}
.zp0584 .hero{grid-template-columns:1fr}
.zp0584 .section,.zp0584 .sectionTitle,.zp0584 .contact{grid-template-columns:1fr}
.zp0584 .teamGrid{grid-template-columns:1fr 1fr}
.zp0584 .section{display:block}}
@media(max-width:430px){.zp0584{font-size:16px}
.zp0584 .hero,.zp0584 .section,.zp0584 .contact{padding-left:18px;padding-right:18px}
.zp0584 .serviceGrid,.zp0584 .proof,.zp0584 .teamGrid,.zp0584 .packages,.zp0584 .programmes>div:last-child{grid-template-columns:1fr}
.zp0584 h1{font-size:clamp(42px,14vw,70px)}
.zp0584 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0584 .monumentalBody{grid-template-columns:1fr}}

.zp0584 .heroActions a,.zp0584 .primary,.zp0584 .ctaBtn,.zp0584 .btnPrimary,.zp0584 .schedule>a,.zp0584 .newsletter>a{transition:all .2s ease}
.zp0584 .heroActions a:hover,.zp0584 .primary:hover,.zp0584 .ctaBtn:hover,.zp0584 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0584 nav a,.zp0584 .nav a,.zp0584 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0584 nav a:hover,.zp0584 .nav a:hover,.zp0584 .footer a:hover{
  opacity:.7
}
.zp0584 .serviceGrid article,.zp0584 .projectCard,.zp0584 .teamCard,.zp0584 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0584 .serviceGrid article:hover,.zp0584 .projectCard:hover,.zp0584 .teamCard:hover,.zp0584 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0584 *,.zp0584 *::before,.zp0584 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0584 a,.zp0584 button,.zp0584 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">View selected work</a></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dark Cinematic / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
