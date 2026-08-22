import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0198-restaurant-brutalism", "family": "Brutalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|modular-12|faq>proof>menu>projects>metrics>story>services|pill-controls|neo-grotesk", "industry": "restaurant", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "modular-12"};

export default function Template0198({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Restaurant");
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
  const storyQuote = "\u201cIngredient-led cooking, warm service, and a menu that changes with the season.\u201d";
  const storyBody = "Cedar Restaurant is presented as a real working restaurant, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The best meal we've had in years. The staff remembered it was our anniversary without us prompting — genuinely special.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Restaurant / Project A", "Restaurant / Project B", "Restaurant / Project C", "Restaurant / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Ingredient-led cooking, warm service, and a menu that changes with the season. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0198" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0198{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:3px;--shadow:none;--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0198 *{box-sizing:border-box}
.zp0198 a{color:inherit;text-decoration:none}
.zp0198 h1,.zp0198 h2,.zp0198 h3,.zp0198 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0198 img{max-width:100%;display:block}
.zp0198 button,.zp0198 a{-webkit-tap-highlight-color:transparent}
.zp0198 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0198 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0198 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0198 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0198 .mobileMenu{display:none}
.zp0198 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0198 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0198 .eyebrow,.zp0198 .sectionTitle>span,.zp0198 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0198 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0198 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0198 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0198 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0198 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0198 .visual,.zp0198 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0198 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0198 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0198 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0198 .heroPhoto{object-fit:cover}
.zp0198 .cinematic{padding:0;min-height:100vh}
.zp0198 .cinematic>.heroPhoto,.zp0198 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0198 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0198 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0198 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0198 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0198 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0198 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0198 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0198 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0198 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0198 .serviceGrid p{color:var(--muted)}
.zp0198 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0198 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0198 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0198 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0198 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0198 .story p{color:var(--muted)}
.zp0198 .faqList{max-width:900px;margin-left:auto}
.zp0198 details{border-top:1px solid var(--border);padding:20px 0}
.zp0198 details summary{font-weight:800;cursor:pointer}
.zp0198 details p{color:var(--muted);max-width:70ch}
.zp0198 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0198 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0198 .projects article:nth-child(2){transform:translateY(32px)}
.zp0198 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0198 .metrics div{background:var(--bg);padding:30px}
.zp0198 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Helvetica Neue, Arial, sans-serif;color:var(--primary)}
.zp0198 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0198 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0198 .contact .eyebrow{color:var(--bg)}
.zp0198 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0198 .contactMeta{display:grid;gap:10px}
.zp0198 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0198 .heroActions a,.zp0198 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0198 h1{text-transform:uppercase}
.zp0198 .heroCopy{animation:enter-197 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-197{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0198 .hero{min-height:auto}
.zp0198 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0198 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0198 .nav nav{display:none}
.zp0198 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0198 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0198 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0198 .mobileMenu nav a{padding:10px 8px}
.zp0198 .hero{grid-template-columns:1fr}
.zp0198 .section,.zp0198 .sectionTitle,.zp0198 .story,.zp0198 .contact{grid-template-columns:1fr}
.zp0198 .metrics{grid-template-columns:1fr 1fr}
.zp0198 .projects .projectGrid{grid-template-columns:1fr}
.zp0198 .projects article:nth-child(2){transform:none}
.zp0198 .section{display:block}}
@media(max-width:430px){.zp0198{font-size:16px}
.zp0198 .hero,.zp0198 .section,.zp0198 .contact{padding-left:18px;padding-right:18px}
.zp0198 .serviceGrid,.zp0198 .proof,.zp0198 .metrics{grid-template-columns:1fr}
.zp0198 h1{font-size:clamp(42px,14vw,70px)}}

.zp0198 .heroActions a,.zp0198 .primary,.zp0198 .ctaBtn,.zp0198 .btnPrimary,.zp0198 .schedule>a,.zp0198 .newsletter>a{transition:all .2s ease}
.zp0198 .heroActions a:hover,.zp0198 .primary:hover,.zp0198 .ctaBtn:hover,.zp0198 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0198 nav a,.zp0198 .nav a,.zp0198 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0198 nav a:hover,.zp0198 .nav a:hover,.zp0198 .footer a:hover{
  text-decoration:underline
}
.zp0198 .serviceGrid article,.zp0198 .projectCard,.zp0198 .teamCard,.zp0198 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0198 .serviceGrid article:hover,.zp0198 .projectCard:hover,.zp0198 .teamCard:hover,.zp0198 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0198 *,.zp0198 *::before,.zp0198 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0198 a,.zp0198 button,.zp0198 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">97</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
