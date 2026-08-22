import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0204-restaurant-dark-cinematic", "family": "Dark Cinematic", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|property-led|services>timeline>proof>press>testimonial>projects>values|notched|literary", "industry": "restaurant", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "property-led"};

export default function Template0204({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Restaurant");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const testimonialName = "Oak & Tide client";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0204" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0204{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0204 *{box-sizing:border-box}
.zp0204 a{color:inherit;text-decoration:none}
.zp0204 h1,.zp0204 h2,.zp0204 h3,.zp0204 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0204 img{max-width:100%;display:block}
.zp0204 button,.zp0204 a{-webkit-tap-highlight-color:transparent}
.zp0204 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0204 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0204 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0204 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0204 .mobileMenu{display:none}
.zp0204 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0204 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0204 .eyebrow,.zp0204 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0204 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0204 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0204 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0204 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0204 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0204 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0204 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0204 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0204 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0204 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0204 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0204 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0204 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0204 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0204 .serviceGrid p{color:var(--muted)}
.zp0204 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0204 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0204 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0204 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0204 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0204 .testimonial>div{align-self:end}
.zp0204 .testimonial span{display:block;opacity:.7}
.zp0204 details{border-top:1px solid var(--border);padding:20px 0}
.zp0204 details summary{font-weight:800;cursor:pointer}
.zp0204 details p{color:var(--muted);max-width:70ch}
.zp0204 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0204 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0204 .projects article:nth-child(2){transform:translateY(32px)}
.zp0204 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0204 .timeline article{padding:20px 0}
.zp0204 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Garamond, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0204 .awards>div{max-width:800px;margin-left:auto}
.zp0204 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0204 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0204 .contact .eyebrow{color:var(--bg)}
.zp0204 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0204 .contactMeta{display:grid;gap:10px}
.zp0204 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0204 .heroCopy{animation:enter-203 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-203{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0204 .hero{min-height:auto}
.zp0204 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0204 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0204 .nav nav{display:none}
.zp0204 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0204 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0204 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0204 .mobileMenu nav a{padding:10px 8px}
.zp0204 .hero,.zp0204 .navLedHero{grid-template-columns:1fr}
.zp0204 .section,.zp0204 .sectionTitle,.zp0204 .contact{grid-template-columns:1fr}
.zp0204 .testimonial{grid-template-columns:1fr}
.zp0204 .projects .projectGrid{grid-template-columns:1fr}
.zp0204 .projects article:nth-child(2){transform:none}
.zp0204 .section{display:block}}
@media(max-width:430px){.zp0204{font-size:16px}
.zp0204 .hero,.zp0204 .section,.zp0204 .contact{padding-left:18px;padding-right:18px}
.zp0204 .serviceGrid,.zp0204 .proof{grid-template-columns:1fr}
.zp0204 h1{font-size:clamp(42px,14vw,70px)}}

.zp0204 .heroActions a,.zp0204 .primary,.zp0204 .ctaBtn,.zp0204 .btnPrimary,.zp0204 .schedule>a,.zp0204 .newsletter>a{transition:all .2s ease}
.zp0204 .heroActions a:hover,.zp0204 .primary:hover,.zp0204 .ctaBtn:hover,.zp0204 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0204 nav a,.zp0204 .nav a,.zp0204 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0204 nav a:hover,.zp0204 .nav a:hover,.zp0204 .footer a:hover{
  opacity:.7
}
.zp0204 .serviceGrid article,.zp0204 .projectCard,.zp0204 .teamCard,.zp0204 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0204 .serviceGrid article:hover,.zp0204 .projectCard:hover,.zp0204 .teamCard:hover,.zp0204 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0204 *,.zp0204 *::before,.zp0204 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0204 a,.zp0204 button,.zp0204 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dark Cinematic / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
