import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0590-fashion-memphis", "family": "Memphis", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|masonry-story|hours>team>features>services>proof>community|circular|ceremonial", "industry": "fashion", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "masonry-story"};

export default function Template0590({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Fashion Label");
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
  const storyBody = "Slate Fashion Label is presented as a real working fashion label, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0590" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0590{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0590 *{box-sizing:border-box}
.zp0590 a{color:inherit;text-decoration:none}
.zp0590 h1,.zp0590 h2,.zp0590 h3,.zp0590 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0590 img{max-width:100%;display:block}
.zp0590 button,.zp0590 a{-webkit-tap-highlight-color:transparent}
.zp0590 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0590 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0590 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0590 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0590 .nav.cluster{align-items:flex-end}
.zp0590 .mobileMenu{display:none}
.zp0590 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0590 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0590 .eyebrow,.zp0590 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0590 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0590 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0590 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0590 .heroActions a,.zp0590 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0590 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0590 .visual,.zp0590 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0590 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0590 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0590 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0590 .heroPhoto{object-fit:cover}
.zp0590 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0590 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0590 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0590 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0590 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0590 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0590 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0590 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0590 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0590 .serviceGrid p{color:var(--muted)}
.zp0590 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0590 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0590 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0590 details{border-top:1px solid var(--border);padding:20px 0}
.zp0590 details summary{font-weight:800;cursor:pointer}
.zp0590 details p{color:var(--muted);max-width:70ch}
.zp0590 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0590 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0590 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Copperplate, Georgia, serif;margin-bottom:18px}
.zp0590 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0590 .hours dl{margin:0}
.zp0590 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0590 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0590 .features ul{list-style:none;margin:0;padding:0}
.zp0590 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0590 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0590 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0590 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0590 .contact .eyebrow{color:var(--bg)}
.zp0590 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0590 .contactMeta{display:grid;gap:10px}
.zp0590 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0590 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(9deg)}
.zp0590 .heroCopy{animation:enter-589 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-589{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0590 .hero{min-height:auto}
.zp0590 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0590 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0590 .nav nav{display:none}
.zp0590 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0590 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0590 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0590 .mobileMenu nav a{padding:10px 8px}
.zp0590 .hero,.zp0590 .carouselHero{grid-template-columns:1fr}
.zp0590 .section,.zp0590 .sectionTitle,.zp0590 .hours,.zp0590 .features,.zp0590 .contact{grid-template-columns:1fr}
.zp0590 .teamGrid{grid-template-columns:1fr 1fr}
.zp0590 .section{display:block}}
@media(max-width:430px){.zp0590{font-size:16px}
.zp0590 .hero,.zp0590 .section,.zp0590 .contact{padding-left:18px;padding-right:18px}
.zp0590 .serviceGrid,.zp0590 .proof,.zp0590 .teamGrid{grid-template-columns:1fr}
.zp0590 h1{font-size:clamp(42px,14vw,70px)}}

.zp0590 .heroActions a,.zp0590 .primary,.zp0590 .ctaBtn,.zp0590 .btnPrimary,.zp0590 .schedule>a,.zp0590 .newsletter>a{transition:all .2s ease}
.zp0590 .heroActions a:hover,.zp0590 .primary:hover,.zp0590 .ctaBtn:hover,.zp0590 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0590 nav a,.zp0590 .nav a,.zp0590 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0590 nav a:hover,.zp0590 .nav a:hover,.zp0590 .footer a:hover{
  color:var(--primary)
}
.zp0590 .serviceGrid article,.zp0590 .projectCard,.zp0590 .teamCard,.zp0590 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0590 .serviceGrid article:hover,.zp0590 .projectCard:hover,.zp0590 .teamCard:hover,.zp0590 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0590 *,.zp0590 *::before,.zp0590 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0590 a,.zp0590 button,.zp0590 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">89</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
