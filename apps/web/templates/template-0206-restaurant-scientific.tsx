import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0206-restaurant-scientific", "family": "Scientific", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|menu-led|team>services>hours>features>packages>proof|circular|ceremonial", "industry": "restaurant", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "menu-led"};

export default function Template0206({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Restaurant");
  const headline = String(content.headline || "Ingredient-led cooking, warm service, and a menu that changes with the season.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Dinner service", "Tasting menu", "Private dining", "Seasonal specials", "Gift cards"];
  const industryLabel = "Restaurant";
  const serviceNotes = ["Seasonal menu updated monthly — what's on the plate reflects what's best that week.", "Private dining for up to 24 guests with a custom menu discussion included.", "Wine list curated by our sommelier with natural and classic options from small producers.", "Pre-theatre early service from 5:30 — main back by 7:15, guaranteed.", "Dietary requirements handled seriously: allergies logged and kitchen briefed."];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0206" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0206{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0206 *{box-sizing:border-box}
.zp0206 a{color:inherit;text-decoration:none}
.zp0206 h1,.zp0206 h2,.zp0206 h3,.zp0206 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0206 img{max-width:100%;display:block}
.zp0206 button,.zp0206 a{-webkit-tap-highlight-color:transparent}
.zp0206 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0206 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0206 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0206 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0206 .nav.cluster{align-items:flex-end}
.zp0206 .mobileMenu{display:none}
.zp0206 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0206 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0206 .eyebrow,.zp0206 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0206 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0206 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0206 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0206 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0206 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0206 .visual,.zp0206 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0206 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0206 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0206 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0206 .heroPhoto{object-fit:cover}
.zp0206 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0206 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0206 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0206 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0206 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0206 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0206 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0206 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0206 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0206 .serviceGrid p{color:var(--muted)}
.zp0206 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0206 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0206 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0206 details{border-top:1px solid var(--border);padding:20px 0}
.zp0206 details summary{font-weight:800;cursor:pointer}
.zp0206 details p{color:var(--muted);max-width:70ch}
.zp0206 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0206 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0206 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Copperplate, Georgia, serif;margin-bottom:18px}
.zp0206 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0206 .hours dl{margin:0}
.zp0206 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0206 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0206 .features ul{list-style:none;margin:0;padding:0}
.zp0206 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0206 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0206 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0206 .packages>.sectionTitle{grid-column:1/-1}
.zp0206 .packages article{padding:24px;border:1px solid var(--border)}
.zp0206 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0206 .contact .eyebrow{color:var(--bg)}
.zp0206 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0206 .contactMeta{display:grid;gap:10px}
.zp0206 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0206 .heroCopy{animation:enter-205 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-205{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0206 .hero{min-height:auto}
.zp0206 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0206 .proof{grid-template-columns:1fr 1fr}
.zp0206 .packages{grid-template-columns:1fr 1fr}
.zp0206 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0206 .nav nav{display:none}
.zp0206 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0206 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0206 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0206 .mobileMenu nav a{padding:10px 8px}
.zp0206 .hero,.zp0206 .carouselHero{grid-template-columns:1fr}
.zp0206 .section,.zp0206 .sectionTitle,.zp0206 .hours,.zp0206 .features,.zp0206 .contact{grid-template-columns:1fr}
.zp0206 .teamGrid{grid-template-columns:1fr 1fr}
.zp0206 .section{display:block}}
@media(max-width:430px){.zp0206{font-size:16px}
.zp0206 .hero,.zp0206 .section,.zp0206 .contact{padding-left:18px;padding-right:18px}
.zp0206 .serviceGrid,.zp0206 .proof,.zp0206 .teamGrid,.zp0206 .packages{grid-template-columns:1fr}
.zp0206 h1{font-size:clamp(42px,14vw,70px)}}

.zp0206 .heroActions a,.zp0206 .primary,.zp0206 .ctaBtn,.zp0206 .btnPrimary,.zp0206 .schedule>a,.zp0206 .newsletter>a{transition:all .2s ease}
.zp0206 .heroActions a:hover,.zp0206 .primary:hover,.zp0206 .ctaBtn:hover,.zp0206 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0206 nav a,.zp0206 .nav a,.zp0206 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0206 nav a:hover,.zp0206 .nav a:hover,.zp0206 .footer a:hover{
  color:var(--primary)
}
.zp0206 .serviceGrid article,.zp0206 .projectCard,.zp0206 .teamCard,.zp0206 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0206 .serviceGrid article:hover,.zp0206 .projectCard:hover,.zp0206 .teamCard:hover,.zp0206 .bentoCard:hover{
  border-left:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0206 *,.zp0206 *::before,.zp0206 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0206 a,.zp0206 button,.zp0206 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">05</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scientific / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
