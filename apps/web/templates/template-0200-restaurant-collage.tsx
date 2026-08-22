import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0200-restaurant-collage", "family": "Collage", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|conversion-first|awards>case-study>proof>menu>services>story|micro-radius|newspaper", "industry": "restaurant", "hero": "monumental-type", "navigation": "corner-dock", "layout": "conversion-first"};

export default function Template0200({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Restaurant");
  const headline = String(content.headline || "Ingredient-led cooking, warm service, and a menu that changes with the season.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Dinner service", "Tasting menu", "Private dining", "Seasonal specials", "Gift cards"];
  const serviceNotes = ["Seasonal menu updated monthly — what's on the plate reflects what's best that week.", "Private dining for up to 24 guests with a custom menu discussion included.", "Wine list curated by our sommelier with natural and classic options from small producers.", "Pre-theatre early service from 5:30 — main back by 7:15, guaranteed.", "Dietary requirements handled seriously: allergies logged and kitchen briefed."];
  const proofPoints = ["AA Two Rosettes", "Open 7 days", "Private dining available", "Full allergen menu"];
  const storyQuote = "\u201cIngredient-led cooking, warm service, and a menu that changes with the season.\u201d";
  const storyBody = "Common Restaurant is presented as a real working restaurant, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0200" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0200{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0200 *{box-sizing:border-box}
.zp0200 a{color:inherit;text-decoration:none}
.zp0200 h1,.zp0200 h2,.zp0200 h3,.zp0200 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0200 img{max-width:100%;display:block}
.zp0200 button,.zp0200 a{-webkit-tap-highlight-color:transparent}
.zp0200 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0200 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0200 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0200 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0200 .mobileMenu{display:none}
.zp0200 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0200 .eyebrow,.zp0200 .sectionTitle>span,.zp0200 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0200 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0200 .monumentalHero{display:block}
.zp0200 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0200 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0200 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0200 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0200 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0200 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0200 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0200 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0200 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0200 .serviceGrid p{color:var(--muted)}
.zp0200 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0200 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0200 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0200 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0200 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0200 .story p{color:var(--muted)}
.zp0200 details{border-top:1px solid var(--border);padding:20px 0}
.zp0200 details summary{font-weight:800;cursor:pointer}
.zp0200 details p{color:var(--muted);max-width:70ch}
.zp0200 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0200 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0200 .projects article:nth-child(2){transform:translateY(32px)}
.zp0200 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0200 .awards>div{max-width:800px;margin-left:auto}
.zp0200 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0200 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0200 .contact .eyebrow{color:var(--bg)}
.zp0200 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0200 .contactMeta{display:grid;gap:10px}
.zp0200 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0200{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0200 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
@keyframes enter-199{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0200 .hero{min-height:auto}
.zp0200 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0200 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0200 .nav nav{display:none}
.zp0200 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0200 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0200 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0200 .mobileMenu nav a{padding:10px 8px}
.zp0200 .hero{grid-template-columns:1fr}
.zp0200 .section,.zp0200 .sectionTitle,.zp0200 .story,.zp0200 .contact{grid-template-columns:1fr}
.zp0200 .projects .projectGrid{grid-template-columns:1fr}
.zp0200 .projects article:nth-child(2){transform:none}
.zp0200 .section{display:block}}
@media(max-width:430px){.zp0200{font-size:16px}
.zp0200 .hero,.zp0200 .section,.zp0200 .contact{padding-left:18px;padding-right:18px}
.zp0200 .serviceGrid,.zp0200 .proof{grid-template-columns:1fr}
.zp0200 h1{font-size:clamp(42px,14vw,70px)}
.zp0200 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0200 .monumentalBody{grid-template-columns:1fr}}

.zp0200 .heroActions a,.zp0200 .primary,.zp0200 .ctaBtn,.zp0200 .btnPrimary,.zp0200 .schedule>a,.zp0200 .newsletter>a{transition:all .2s ease}
.zp0200 .heroActions a:hover,.zp0200 .primary:hover,.zp0200 .ctaBtn:hover,.zp0200 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0200 nav a,.zp0200 .nav a,.zp0200 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0200 nav a:hover,.zp0200 .nav a:hover,.zp0200 .footer a:hover{
  color:var(--primary)
}
.zp0200 .serviceGrid article,.zp0200 .projectCard,.zp0200 .teamCard,.zp0200 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0200 .serviceGrid article:hover,.zp0200 .projectCard:hover,.zp0200 .teamCard:hover,.zp0200 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0200 *,.zp0200 *::before,.zp0200 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0200 a,.zp0200 button,.zp0200 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
