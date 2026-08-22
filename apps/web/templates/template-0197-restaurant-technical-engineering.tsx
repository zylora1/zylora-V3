import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0197-restaurant-technical-engineering", "family": "Technical Engineering", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|case-study-led|testimonial>menu>newsletter>services>availability>proof|ticket-edge|condensed-editorial", "industry": "restaurant", "hero": "testimonial-led", "navigation": "lower-third", "layout": "case-study-led"};

export default function Template0197({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Restaurant");
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
  const testimonialName = "Arc client";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0197" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0197{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0197 *{box-sizing:border-box}
.zp0197 a{color:inherit;text-decoration:none}
.zp0197 h1,.zp0197 h2,.zp0197 h3,.zp0197 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0197 img{max-width:100%;display:block}
.zp0197 button,.zp0197 a{-webkit-tap-highlight-color:transparent}
.zp0197 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0197 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0197 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0197 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0197 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0197 .mobileMenu{display:none}
.zp0197 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0197 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0197 .eyebrow,.zp0197 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0197 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0197 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0197 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0197 .heroActions a,.zp0197 .schedule>a,.zp0197 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0197 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0197 .quoteHero{grid-template-columns:1fr 1fr}
.zp0197 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0197 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0197 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0197 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0197 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0197 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0197 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0197 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0197 .serviceGrid p{color:var(--muted)}
.zp0197 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0197 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0197 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0197 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0197 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0197 .testimonial>div{align-self:end}
.zp0197 .testimonial span{display:block;opacity:.7}
.zp0197 details{border-top:1px solid var(--border);padding:20px 0}
.zp0197 details summary{font-weight:800;cursor:pointer}
.zp0197 details p{color:var(--muted);max-width:70ch}
.zp0197 .schedule,.zp0197 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0197 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0197 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0197 .contact .eyebrow{color:var(--bg)}
.zp0197 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0197 .contactMeta{display:grid;gap:10px}
.zp0197 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0197 .heroCopy{animation:enter-196 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-196{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0197 .hero{min-height:auto}
.zp0197 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0197 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0197 .nav nav{display:none}
.zp0197 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0197 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0197 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0197 .mobileMenu nav a{padding:10px 8px}
.zp0197 .hero,.zp0197 .quoteHero{grid-template-columns:1fr}
.zp0197 .section,.zp0197 .sectionTitle,.zp0197 .contact{grid-template-columns:1fr}
.zp0197 .testimonial{grid-template-columns:1fr}
.zp0197 .section{display:block}}
@media(max-width:430px){.zp0197{font-size:16px}
.zp0197 .hero,.zp0197 .section,.zp0197 .contact{padding-left:18px;padding-right:18px}
.zp0197 .serviceGrid,.zp0197 .proof{grid-template-columns:1fr}
.zp0197 h1{font-size:clamp(42px,14vw,70px)}}

.zp0197 .heroActions a,.zp0197 .primary,.zp0197 .ctaBtn,.zp0197 .btnPrimary,.zp0197 .schedule>a,.zp0197 .newsletter>a{transition:all .2s ease}
.zp0197 .heroActions a:hover,.zp0197 .primary:hover,.zp0197 .ctaBtn:hover,.zp0197 .btnPrimary:hover{
  border-color:var(--primary)
}
.zp0197 nav a,.zp0197 .nav a,.zp0197 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0197 nav a:hover,.zp0197 .nav a:hover,.zp0197 .footer a:hover{
  color:var(--primary)
}
.zp0197 .serviceGrid article,.zp0197 .projectCard,.zp0197 .teamCard,.zp0197 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0197 .serviceGrid article:hover,.zp0197 .projectCard:hover,.zp0197 .teamCard:hover,.zp0197 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0197 *,.zp0197 *::before,.zp0197 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0197 a,.zp0197 button,.zp0197 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Technical Engineering / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
