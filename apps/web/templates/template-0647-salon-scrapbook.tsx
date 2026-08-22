import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0647-salon-scrapbook", "family": "Scrapbook", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|asymmetric-5-7|hours>services>research>newsletter>story>proof|asymmetric-radius|clean-humanist", "industry": "salon", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "asymmetric-5-7"};

export default function Template0647({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const storyQuote = "\u201cGreat hair built on consultation, craft, and a style that works after you leave.\u201d";
  const storyBody = "Lumen Hair Salon is presented as a real working hair salon, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp0647" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0647{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0647 *{box-sizing:border-box}
.zp0647 a{color:inherit;text-decoration:none}
.zp0647 h1,.zp0647 h2,.zp0647 h3,.zp0647 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0647 img{max-width:100%;display:block}
.zp0647 button,.zp0647 a{-webkit-tap-highlight-color:transparent}
.zp0647 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0647 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0647 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0647 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0647 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0647 .nav.index nav{justify-content:flex-end}
.zp0647 .mobileMenu{display:none}
.zp0647 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0647 .eyebrow,.zp0647 .sectionTitle>span,.zp0647 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0647 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0647 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0647 .minimalHero{display:block;min-height:74vh}
.zp0647 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0647 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0647 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0647 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0647 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0647 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0647 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0647 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0647 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0647 .serviceGrid p{color:var(--muted)}
.zp0647 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0647 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0647 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0647 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0647 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0647 .story p{color:var(--muted)}
.zp0647 details{border-top:1px solid var(--border);padding:20px 0}
.zp0647 details summary{font-weight:800;cursor:pointer}
.zp0647 details p{color:var(--muted);max-width:70ch}
.zp0647 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0647 .hours dl{margin:0}
.zp0647 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0647 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0647 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0647 .researchRows{max-width:900px;margin-left:auto}
.zp0647 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0647 .contact .eyebrow{color:var(--bg)}
.zp0647 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0647 .contactMeta{display:grid;gap:10px}
.zp0647 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0647 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0647{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0647 .section:nth-of-type(3n){transform:rotate(0.35deg)}
@keyframes enter-646{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0647 .hero{min-height:auto}
.zp0647 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0647 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0647 .nav nav{display:none}
.zp0647 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0647 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0647 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0647 .mobileMenu nav a{padding:10px 8px}
.zp0647 .hero{grid-template-columns:1fr}
.zp0647 .section,.zp0647 .sectionTitle,.zp0647 .story,.zp0647 .hours,.zp0647 .contact{grid-template-columns:1fr}
.zp0647 .section{display:block}}
@media(max-width:430px){.zp0647{font-size:16px}
.zp0647 .hero,.zp0647 .section,.zp0647 .contact{padding-left:18px;padding-right:18px}
.zp0647 .serviceGrid,.zp0647 .proof{grid-template-columns:1fr}
.zp0647 h1{font-size:clamp(42px,14vw,70px)}
.zp0647 .minimalFoot{grid-template-columns:1fr}
.zp0647 .nav.index{grid-template-columns:1fr auto}
.zp0647 .nav.index>span{display:none}}

.zp0647 .heroActions a,.zp0647 .primary,.zp0647 .ctaBtn,.zp0647 .btnPrimary,.zp0647 .schedule>a,.zp0647 .newsletter>a{transition:all .2s ease}
.zp0647 .heroActions a:hover,.zp0647 .primary:hover,.zp0647 .ctaBtn:hover,.zp0647 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0647 nav a,.zp0647 .nav a,.zp0647 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0647 nav a:hover,.zp0647 .nav a:hover,.zp0647 .footer a:hover{
  color:var(--primary)
}
.zp0647 .serviceGrid article,.zp0647 .projectCard,.zp0647 .teamCard,.zp0647 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0647 .serviceGrid article:hover,.zp0647 .projectCard:hover,.zp0647 .teamCard:hover,.zp0647 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0647 *,.zp0647 *::before,.zp0647 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0647 a,.zp0647 button,.zp0647 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
