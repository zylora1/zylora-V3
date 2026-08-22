import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0225-bakery-neo-classical", "family": "Neo-classical", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|community-led|projects>proof>security>destinations>integrations>programmes>services|square-editorial|slab", "industry": "bakery", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "community-led"};

export default function Template0225({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0225" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0225{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0225 *{box-sizing:border-box}
.zp0225 a{color:inherit;text-decoration:none}
.zp0225 h1,.zp0225 h2,.zp0225 h3,.zp0225 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0225 img{max-width:100%;display:block}
.zp0225 button,.zp0225 a{-webkit-tap-highlight-color:transparent}
.zp0225 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0225 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0225 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0225 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0225 .mobileMenu{display:none}
.zp0225 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0225 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0225 .eyebrow,.zp0225 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0225 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0225 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0225 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0225 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0225 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0225 .typeOnly{grid-template-columns:1fr .28fr}
.zp0225 .oversizeWord{font-family:Rockwell, Courier New, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0225 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0225 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0225 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0225 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0225 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0225 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0225 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0225 .serviceGrid p{color:var(--muted)}
.zp0225 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0225 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0225 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0225 details{border-top:1px solid var(--border);padding:20px 0}
.zp0225 details summary{font-weight:800;cursor:pointer}
.zp0225 details p{color:var(--muted);max-width:70ch}
.zp0225 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0225 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0225 .projects article:nth-child(2){transform:translateY(32px)}
.zp0225 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0225 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0225 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0225 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0225 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0225 .programmes>div:last-child,.zp0225 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0225 .programmes article,.zp0225 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0225 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0225 .contact .eyebrow{color:var(--bg)}
.zp0225 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0225 .contactMeta{display:grid;gap:10px}
.zp0225 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0225 .heroCopy{animation:enter-224 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-224{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0225 .hero{min-height:auto}
.zp0225 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0225 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0225 .nav nav{display:none}
.zp0225 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0225 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0225 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0225 .mobileMenu nav a{padding:10px 8px}
.zp0225 .hero{grid-template-columns:1fr}
.zp0225 .section,.zp0225 .sectionTitle,.zp0225 .security,.zp0225 .contact{grid-template-columns:1fr}
.zp0225 .projects .projectGrid{grid-template-columns:1fr}
.zp0225 .projects article:nth-child(2){transform:none}
.zp0225 .section{display:block}}
@media(max-width:430px){.zp0225{font-size:16px}
.zp0225 .hero,.zp0225 .section,.zp0225 .contact{padding-left:18px;padding-right:18px}
.zp0225 .serviceGrid,.zp0225 .proof,.zp0225 .programmes>div:last-child,.zp0225 .destinations>div:last-child{grid-template-columns:1fr}
.zp0225 h1{font-size:clamp(42px,14vw,70px)}}

.zp0225 .heroActions a,.zp0225 .primary,.zp0225 .ctaBtn,.zp0225 .btnPrimary,.zp0225 .schedule>a,.zp0225 .newsletter>a{transition:all .2s ease}
.zp0225 .heroActions a:hover,.zp0225 .primary:hover,.zp0225 .ctaBtn:hover,.zp0225 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0225 nav a,.zp0225 .nav a,.zp0225 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0225 nav a:hover,.zp0225 .nav a:hover,.zp0225 .footer a:hover{
  color:var(--secondary)
}
.zp0225 .serviceGrid article,.zp0225 .projectCard,.zp0225 .teamCard,.zp0225 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0225 .serviceGrid article:hover,.zp0225 .projectCard:hover,.zp0225 .teamCard:hover,.zp0225 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0225 *,.zp0225 *::before,.zp0225 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0225 a,.zp0225 button,.zp0225 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
