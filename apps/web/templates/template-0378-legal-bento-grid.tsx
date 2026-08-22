import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0378-legal-bento-grid", "family": "Bento Grid", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|modular-12|team>projects>pricing>services>proof>integrations>security|paper-sheet|utility", "industry": "legal", "hero": "product-demo", "navigation": "left-sidebar", "layout": "modular-12"};

export default function Template0378({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Law Firm");
  const headline = String(content.headline || "Practical legal advice, clear next steps, and responsive communication.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business law", "Dispute resolution", "Property law", "Employment", "Estate planning"];
  const industryLabel = "Law firm";
  const serviceNotes = ["Fixed-fee options for defined scope matters — clear costs before we begin.", "24h response guarantee on all client communications, not just weekdays.", "Plain-English advice: we translate legal complexity into decisions you can make.", "Video and in-person consultation options across all practice areas.", "Regular matter updates so you're never left wondering where things stand."];
  const proofPoints = ["SRA regulated", "Lexcel accredited", "Legal 500 listed", "No win no fee options"];
  const testimonial = "My solicitor explained everything in plain terms and never made me feel like a question was too basic. That's rare.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Law firm / Project A", "Law firm / Project B", "Law firm / Project C", "Law firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical legal advice, clear next steps, and responsive communication. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0378" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0378{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0378 *{box-sizing:border-box}
.zp0378 a{color:inherit;text-decoration:none}
.zp0378 h1,.zp0378 h2,.zp0378 h3,.zp0378 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0378 img{max-width:100%;display:block}
.zp0378 button,.zp0378 a{-webkit-tap-highlight-color:transparent}
.zp0378 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0378 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0378 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0378 .mobileMenu{display:none}
.zp0378:has(.navRail)>.hero,.zp0378:has(.navRail)>.section,.zp0378:has(.navRail)>.contact,.zp0378:has(.navRail)>.footer{margin-left:190px}
.zp0378 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0378 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0378 .eyebrow,.zp0378 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0378 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0378 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0378 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0378 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0378 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0378 .visual,.zp0378 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0378 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0378 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0378 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0378 .heroPhoto{object-fit:cover}
.zp0378 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0378 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0378 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0378 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0378 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0378 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0378 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0378 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0378 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0378 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0378 .serviceGrid p{color:var(--muted)}
.zp0378 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0378 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0378 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0378 details{border-top:1px solid var(--border);padding:20px 0}
.zp0378 details summary{font-weight:800;cursor:pointer}
.zp0378 details p{color:var(--muted);max-width:70ch}
.zp0378 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0378 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0378 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Verdana, sans-serif;margin-bottom:18px}
.zp0378 .priceRows{border-top:1px solid var(--border)}
.zp0378 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0378 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0378 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0378 .projects article:nth-child(2){transform:translateY(32px)}
.zp0378 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0378 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0378 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0378 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0378 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0378 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0378 .contact .eyebrow{color:var(--bg)}
.zp0378 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0378 .contactMeta{display:grid;gap:10px}
.zp0378 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0378 .heroCopy{animation:enter-377 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-377{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0378 .hero{min-height:auto}
.zp0378 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0378 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0378 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0378 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0378 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0378 .mobileMenu nav a{padding:10px 8px}
.zp0378 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0378:has(.navRail)>.hero,.zp0378:has(.navRail)>.section,.zp0378:has(.navRail)>.contact,.zp0378:has(.navRail)>.footer{margin-left:0}
.zp0378 .hero,.zp0378 .productHero{grid-template-columns:1fr}
.zp0378 .section,.zp0378 .sectionTitle,.zp0378 .security,.zp0378 .contact{grid-template-columns:1fr}
.zp0378 .teamGrid{grid-template-columns:1fr 1fr}
.zp0378 .projects .projectGrid{grid-template-columns:1fr}
.zp0378 .projects article:nth-child(2){transform:none}
.zp0378 .section{display:block}}
@media(max-width:430px){.zp0378{font-size:16px}
.zp0378 .hero,.zp0378 .section,.zp0378 .contact{padding-left:18px;padding-right:18px}
.zp0378 .serviceGrid,.zp0378 .proof,.zp0378 .teamGrid{grid-template-columns:1fr}
.zp0378 h1{font-size:clamp(42px,14vw,70px)}
.zp0378 .priceRows article{grid-template-columns:1fr}}

.zp0378 .heroActions a,.zp0378 .primary,.zp0378 .ctaBtn,.zp0378 .btnPrimary,.zp0378 .schedule>a,.zp0378 .newsletter>a{transition:all .2s ease}
.zp0378 .heroActions a:hover,.zp0378 .primary:hover,.zp0378 .ctaBtn:hover,.zp0378 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0378 nav a,.zp0378 .nav a,.zp0378 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0378 nav a:hover,.zp0378 .nav a:hover,.zp0378 .footer a:hover{
  color:var(--primary)
}
.zp0378 .serviceGrid article,.zp0378 .projectCard,.zp0378 .teamCard,.zp0378 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0378 .serviceGrid article:hover,.zp0378 .projectCard:hover,.zp0378 .teamCard:hover,.zp0378 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0378 *,.zp0378 *::before,.zp0378 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0378 a,.zp0378 button,.zp0378 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">77</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bento Grid / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
