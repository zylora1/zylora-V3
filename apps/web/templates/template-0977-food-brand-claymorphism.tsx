import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0977-food-brand-claymorphism", "family": "Claymorphism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|schedule-led|metrics>security>services>integrations>press>proof|square-editorial|friendly", "industry": "food-brand", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "schedule-led"};

export default function Template0977({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Food Brand");
  const headline = String(content.headline || "A food brand built around distinctive flavour, clear provenance, and easy discovery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Products", "Recipes", "Stockists", "Wholesale", "Story"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0977" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0977{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0977 *{box-sizing:border-box}
.zp0977 a{color:inherit;text-decoration:none}
.zp0977 h1,.zp0977 h2,.zp0977 h3,.zp0977 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0977 img{max-width:100%;display:block}
.zp0977 button,.zp0977 a{-webkit-tap-highlight-color:transparent}
.zp0977 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0977 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0977 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0977 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0977 .mobileMenu{display:none}
.zp0977 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0977 .eyebrow,.zp0977 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0977 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0977 .visual,.zp0977 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0977 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0977 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0977 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0977 .heroPhoto{object-fit:cover}
.zp0977 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0977 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0977 .coverCaption{align-self:end}
.zp0977 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0977 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0977 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0977 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0977 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0977 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0977 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0977 .serviceGrid p{color:var(--muted)}
.zp0977 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0977 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0977 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0977 details{border-top:1px solid var(--border);padding:20px 0}
.zp0977 details summary{font-weight:800;cursor:pointer}
.zp0977 details p{color:var(--muted);max-width:70ch}
.zp0977 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0977 .metrics div{background:var(--bg);padding:30px}
.zp0977 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Trebuchet MS, Arial, sans-serif;color:var(--primary)}
.zp0977 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0977 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0977 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0977 .awards>div{max-width:800px;margin-left:auto}
.zp0977 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0977 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0977 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0977 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0977 .contact .eyebrow{color:var(--bg)}
.zp0977 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0977 .contactMeta{display:grid;gap:10px}
.zp0977 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-976{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0977 .hero{min-height:auto}
.zp0977 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0977 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0977 .nav nav{display:none}
.zp0977 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0977 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0977 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0977 .mobileMenu nav a{padding:10px 8px}
.zp0977 .hero,.zp0977 .coverHero{grid-template-columns:1fr}
.zp0977 .section,.zp0977 .sectionTitle,.zp0977 .security,.zp0977 .contact{grid-template-columns:1fr}
.zp0977 .metrics{grid-template-columns:1fr 1fr}
.zp0977 .section{display:block}}
@media(max-width:430px){.zp0977{font-size:16px}
.zp0977 .hero,.zp0977 .section,.zp0977 .contact{padding-left:18px;padding-right:18px}
.zp0977 .serviceGrid,.zp0977 .proof,.zp0977 .metrics{grid-template-columns:1fr}
.zp0977 h1{font-size:clamp(42px,14vw,70px)}}

.zp0977 .heroActions a,.zp0977 .primary,.zp0977 .ctaBtn,.zp0977 .btnPrimary,.zp0977 .schedule>a,.zp0977 .newsletter>a{transition:all .2s ease}
.zp0977 .heroActions a:hover,.zp0977 .primary:hover,.zp0977 .ctaBtn:hover,.zp0977 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0977 nav a,.zp0977 .nav a,.zp0977 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0977 nav a:hover,.zp0977 .nav a:hover,.zp0977 .footer a:hover{
  color:var(--primary)
}
.zp0977 .serviceGrid article,.zp0977 .projectCard,.zp0977 .teamCard,.zp0977 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0977 .serviceGrid article:hover,.zp0977 .projectCard:hover,.zp0977 .teamCard:hover,.zp0977 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0977 *,.zp0977 *::before,.zp0977 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0977 a,.zp0977 button,.zp0977 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0977</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">76</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
