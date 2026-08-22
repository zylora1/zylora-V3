import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0203-restaurant-art-direction", "family": "Art Direction", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|manifesto-grid|services>team>destinations>awards>proof>case-study|capsule|editorial-serif", "industry": "restaurant", "hero": "split-image", "navigation": "statement-bar", "layout": "manifesto-grid"};

export default function Template0203({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Restaurant");
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
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0203" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0203{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0203 *{box-sizing:border-box}
.zp0203 a{color:inherit;text-decoration:none}
.zp0203 h1,.zp0203 h2,.zp0203 h3,.zp0203 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0203 img{max-width:100%;display:block}
.zp0203 button,.zp0203 a{-webkit-tap-highlight-color:transparent}
.zp0203 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0203 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0203 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0203 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0203 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0203 .nav.statement>a{justify-self:end}
.zp0203 .mobileMenu{display:none}
.zp0203 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0203 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0203 .eyebrow,.zp0203 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0203 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0203 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0203 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0203 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0203 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0203 .visual,.zp0203 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0203 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0203 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0203 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0203 .heroPhoto{object-fit:cover}
.zp0203 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0203 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0203 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0203 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0203 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0203 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0203 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0203 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0203 .serviceGrid p{color:var(--muted)}
.zp0203 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0203 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0203 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0203 details{border-top:1px solid var(--border);padding:20px 0}
.zp0203 details summary{font-weight:800;cursor:pointer}
.zp0203 details p{color:var(--muted);max-width:70ch}
.zp0203 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0203 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0203 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Georgia, serif;margin-bottom:18px}
.zp0203 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0203 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0203 .projects article:nth-child(2){transform:translateY(32px)}
.zp0203 .awards>div{max-width:800px;margin-left:auto}
.zp0203 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0203 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0203 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0203 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0203 .contact .eyebrow{color:var(--bg)}
.zp0203 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0203 .contactMeta{display:grid;gap:10px}
.zp0203 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0203 .heroCopy{animation:enter-202 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-202{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0203 .hero{min-height:auto}
.zp0203 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0203 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0203 .nav nav{display:none}
.zp0203 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0203 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0203 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0203 .mobileMenu nav a{padding:10px 8px}
.zp0203 .hero,.zp0203 .splitHero{grid-template-columns:1fr}
.zp0203 .section,.zp0203 .sectionTitle,.zp0203 .contact{grid-template-columns:1fr}
.zp0203 .teamGrid{grid-template-columns:1fr 1fr}
.zp0203 .projects .projectGrid{grid-template-columns:1fr}
.zp0203 .projects article:nth-child(2){transform:none}
.zp0203 .section{display:block}}
@media(max-width:430px){.zp0203{font-size:16px}
.zp0203 .hero,.zp0203 .section,.zp0203 .contact{padding-left:18px;padding-right:18px}
.zp0203 .serviceGrid,.zp0203 .proof,.zp0203 .teamGrid,.zp0203 .destinations>div:last-child{grid-template-columns:1fr}
.zp0203 h1{font-size:clamp(42px,14vw,70px)}
.zp0203 .nav.statement{grid-template-columns:1fr auto}
.zp0203 .nav.statement>span:first-child{display:none}}

.zp0203 .heroActions a,.zp0203 .primary,.zp0203 .ctaBtn,.zp0203 .btnPrimary,.zp0203 .schedule>a,.zp0203 .newsletter>a{transition:all .2s ease}
.zp0203 .heroActions a:hover,.zp0203 .primary:hover,.zp0203 .ctaBtn:hover,.zp0203 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0203 nav a,.zp0203 .nav a,.zp0203 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0203 nav a:hover,.zp0203 .nav a:hover,.zp0203 .footer a:hover{
  opacity:.7
}
.zp0203 .serviceGrid article,.zp0203 .projectCard,.zp0203 .teamCard,.zp0203 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0203 .serviceGrid article:hover,.zp0203 .projectCard:hover,.zp0203 .teamCard:hover,.zp0203 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0203 *,.zp0203 *::before,.zp0203 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0203 a,.zp0203 button,.zp0203 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">02</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
