import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0602-luxury-high-contrast", "family": "High Contrast", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|menu-led|services>location>schedule>proof>process>integrations|paper-sheet|modernist-duo", "industry": "luxury", "hero": "product-demo", "navigation": "left-sidebar", "layout": "menu-led"};

export default function Template0602({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Luxury Brand");
  const headline = String(content.headline || "Quiet confidence, exceptional materials, and service designed around individual clients.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Signature collection", "Bespoke service", "Private appointments", "Journal", "Boutiques"];
  const industryLabel = "Luxury brand";
  const serviceNotes = ["Provenance documentation for every piece: origin, maker, and material certification.", "Private client service with discretion, privacy, and non-disclosure as standard.", "White-glove delivery and installation by our own specialist team.", "Bespoke commission pathway with a dedicated atelier contact from concept to completion.", "Aftercare programme: annual maintenance, authentication, and insurance valuation updates."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Sotheby's and Christie's vetted", "Private client discretion assured", "Provenance documentation", "Expert aftercare service"];
  const testimonial = "I sent a single enquiry. Within an hour I had a call from someone who clearly knew the category. That is rare in this market.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0602" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0602{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0602 *{box-sizing:border-box}
.zp0602 a{color:inherit;text-decoration:none}
.zp0602 h1,.zp0602 h2,.zp0602 h3,.zp0602 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0602 img{max-width:100%;display:block}
.zp0602 button,.zp0602 a{-webkit-tap-highlight-color:transparent}
.zp0602 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0602 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0602 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0602 .mobileMenu{display:none}
.zp0602:has(.navRail)>.hero,.zp0602:has(.navRail)>.section,.zp0602:has(.navRail)>.contact,.zp0602:has(.navRail)>.footer{margin-left:190px}
.zp0602 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0602 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0602 .eyebrow,.zp0602 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0602 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0602 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0602 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0602 .heroActions a,.zp0602 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0602 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0602 .visual,.zp0602 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0602 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0602 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0602 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0602 .heroPhoto{object-fit:cover}
.zp0602 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0602 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0602 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0602 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0602 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0602 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0602 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0602 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0602 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0602 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0602 .serviceGrid p{color:var(--muted)}
.zp0602 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0602 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0602 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0602 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0602 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0602 details{border-top:1px solid var(--border);padding:20px 0}
.zp0602 details summary{font-weight:800;cursor:pointer}
.zp0602 details p{color:var(--muted);max-width:70ch}
.zp0602 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0602 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0602 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0602 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0602 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0602 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0602 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0602 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0602 .contact .eyebrow{color:var(--bg)}
.zp0602 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0602 .contactMeta{display:grid;gap:10px}
.zp0602 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0602 .heroCopy{animation:enter-601 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-601{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0602 .hero{min-height:auto}
.zp0602 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0602 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0602 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0602 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0602 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0602 .mobileMenu nav a{padding:10px 8px}
.zp0602 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0602:has(.navRail)>.hero,.zp0602:has(.navRail)>.section,.zp0602:has(.navRail)>.contact,.zp0602:has(.navRail)>.footer{margin-left:0}
.zp0602 .hero,.zp0602 .productHero{grid-template-columns:1fr}
.zp0602 .section,.zp0602 .sectionTitle,.zp0602 .location,.zp0602 .contact{grid-template-columns:1fr}
.zp0602 .section{display:block}}
@media(max-width:430px){.zp0602{font-size:16px}
.zp0602 .hero,.zp0602 .section,.zp0602 .contact{padding-left:18px;padding-right:18px}
.zp0602 .serviceGrid,.zp0602 .proof{grid-template-columns:1fr}
.zp0602 h1{font-size:clamp(42px,14vw,70px)}}

.zp0602 .heroActions a,.zp0602 .primary,.zp0602 .ctaBtn,.zp0602 .btnPrimary,.zp0602 .schedule>a,.zp0602 .newsletter>a{transition:all .2s ease}
.zp0602 .heroActions a:hover,.zp0602 .primary:hover,.zp0602 .ctaBtn:hover,.zp0602 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0602 nav a,.zp0602 .nav a,.zp0602 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0602 nav a:hover,.zp0602 .nav a:hover,.zp0602 .footer a:hover{
  color:var(--primary)
}
.zp0602 .serviceGrid article,.zp0602 .projectCard,.zp0602 .teamCard,.zp0602 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0602 .serviceGrid article:hover,.zp0602 .projectCard:hover,.zp0602 .teamCard:hover,.zp0602 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0602 *,.zp0602 *::before,.zp0602 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0602 a,.zp0602 button,.zp0602 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">01</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
