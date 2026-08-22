import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0455-agency-conceptual-sketch", "family": "Conceptual Sketch", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|manifesto-grid|menu>location>integrations>services>proof>press|asymmetric-radius|clean-humanist", "industry": "agency", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "manifesto-grid"};

export default function Template0455({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Creative Agency");
  const headline = String(content.headline || "Sharp strategy and distinctive creative work built to earn attention and action.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Brand strategy", "Web design", "Campaigns", "Content", "Production"];
  const industryLabel = "Creative agency";
  const serviceNotes = ["Strategy-led creative: we understand your market before designing anything.", "Integrated teams — strategy, design, and engineering in the same room.", "Brand systems that work across print, digital, and environmental without being rigid.", "Campaign measurement built in: we track outcomes, not just outputs.", "Retained partnerships with monthly delivery and quarterly direction reviews."];
  const proofPoints = ["D&AD and Cannes Lions awarded", "Average client tenure: 4.2 years", "ISO 27001 data security", "ISBA member"];
  const testimonial = "They killed our first concept because it wouldn't work — then delivered something far better. That's what a good agency does.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0455" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0455{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0455 *{box-sizing:border-box}
.zp0455 a{color:inherit;text-decoration:none}
.zp0455 h1,.zp0455 h2,.zp0455 h3,.zp0455 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0455 img{max-width:100%;display:block}
.zp0455 button,.zp0455 a{-webkit-tap-highlight-color:transparent}
.zp0455 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0455 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0455 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0455 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0455 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0455 .nav.index nav{justify-content:flex-end}
.zp0455 .mobileMenu{display:none}
.zp0455 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0455 .eyebrow,.zp0455 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0455 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0455 .minimalHero{display:block;min-height:74vh}
.zp0455 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0455 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0455 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0455 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0455 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0455 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0455 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0455 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0455 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0455 .serviceGrid p{color:var(--muted)}
.zp0455 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0455 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0455 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0455 details{border-top:1px solid var(--border);padding:20px 0}
.zp0455 details summary{font-weight:800;cursor:pointer}
.zp0455 details p{color:var(--muted);max-width:70ch}
.zp0455 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0455 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0455 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0455 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0455 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0455 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0455 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0455 .awards>div{max-width:800px;margin-left:auto}
.zp0455 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0455 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0455 .contact .eyebrow{color:var(--bg)}
.zp0455 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0455 .contactMeta{display:grid;gap:10px}
.zp0455 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-454{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0455 .hero{min-height:auto}
.zp0455 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0455 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0455 .nav nav{display:none}
.zp0455 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0455 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0455 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0455 .mobileMenu nav a{padding:10px 8px}
.zp0455 .hero{grid-template-columns:1fr}
.zp0455 .section,.zp0455 .sectionTitle,.zp0455 .location,.zp0455 .contact{grid-template-columns:1fr}
.zp0455 .section{display:block}}
@media(max-width:430px){.zp0455{font-size:16px}
.zp0455 .hero,.zp0455 .section,.zp0455 .contact{padding-left:18px;padding-right:18px}
.zp0455 .serviceGrid,.zp0455 .proof{grid-template-columns:1fr}
.zp0455 h1{font-size:clamp(42px,14vw,70px)}
.zp0455 .minimalFoot{grid-template-columns:1fr}
.zp0455 .nav.index{grid-template-columns:1fr auto}
.zp0455 .nav.index>span{display:none}}

.zp0455 .heroActions a,.zp0455 .primary,.zp0455 .ctaBtn,.zp0455 .btnPrimary,.zp0455 .schedule>a,.zp0455 .newsletter>a{transition:all .2s ease}
.zp0455 .heroActions a:hover,.zp0455 .primary:hover,.zp0455 .ctaBtn:hover,.zp0455 .btnPrimary:hover{
  opacity:.8
}
.zp0455 nav a,.zp0455 .nav a,.zp0455 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0455 nav a:hover,.zp0455 .nav a:hover,.zp0455 .footer a:hover{
  opacity:.7
}
.zp0455 .serviceGrid article,.zp0455 .projectCard,.zp0455 .teamCard,.zp0455 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0455 .serviceGrid article:hover,.zp0455 .projectCard:hover,.zp0455 .teamCard:hover,.zp0455 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0455 *,.zp0455 *::before,.zp0455 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0455 a,.zp0455 button,.zp0455 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Join the community</a></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Conceptual Sketch / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
