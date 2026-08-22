import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0599-luxury-art-deco", "family": "Art Deco", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|manifesto-grid|integrations>community>services>proof>credentials>products|asymmetric-radius|clean-humanist", "industry": "luxury", "hero": "index-led", "navigation": "editorial-index", "layout": "manifesto-grid"};

export default function Template0599({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Luxury Brand");
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
  const proofPoints = ["Sotheby's and Christie's vetted", "Private client discretion assured", "Provenance documentation", "Expert aftercare service"];
  const storyBody = "Foxglove Luxury Brand is presented as a real working luxury brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I sent a single enquiry. Within an hour I had a call from someone who clearly knew the category. That is rare in this market.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Luxury brand / Project A", "Luxury brand / Project B", "Luxury brand / Project C", "Luxury brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Quiet confidence, exceptional materials, and service designed around individual clients. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0599" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0599{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0599 *{box-sizing:border-box}
.zp0599 a{color:inherit;text-decoration:none}
.zp0599 h1,.zp0599 h2,.zp0599 h3,.zp0599 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0599 img{max-width:100%;display:block}
.zp0599 button,.zp0599 a{-webkit-tap-highlight-color:transparent}
.zp0599 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0599 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0599 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0599 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0599 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0599 .nav.index nav{justify-content:flex-end}
.zp0599 .mobileMenu{display:none}
.zp0599 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0599 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0599 .eyebrow,.zp0599 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0599 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0599 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0599 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0599 .heroActions a,.zp0599 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0599 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0599 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0599 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0599 .indexHero li{font:700 18px/1.2 Avenir, Helvetica Neue, Arial, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0599 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0599 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0599 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0599 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0599 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0599 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0599 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0599 .serviceGrid p{color:var(--muted)}
.zp0599 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0599 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0599 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0599 details{border-top:1px solid var(--border);padding:20px 0}
.zp0599 details summary{font-weight:800;cursor:pointer}
.zp0599 details p{color:var(--muted);max-width:70ch}
.zp0599 .credentials,.zp0599 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0599 .credentials>div,.zp0599 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0599 .credentials b,.zp0599 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0599 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0599 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0599 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0599 .p1,.zp0599 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0599 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0599 .contact .eyebrow{color:var(--bg)}
.zp0599 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0599 .contactMeta{display:grid;gap:10px}
.zp0599 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0599 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
.zp0599 .heroCopy{animation:enter-598 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-598{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0599 .hero{min-height:auto}
.zp0599 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0599 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0599 .nav nav{display:none}
.zp0599 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0599 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0599 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0599 .mobileMenu nav a{padding:10px 8px}
.zp0599 .hero,.zp0599 .indexHero{grid-template-columns:1fr}
.zp0599 .section,.zp0599 .sectionTitle,.zp0599 .contact{grid-template-columns:1fr}
.zp0599 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0599 .section{display:block}}
@media(max-width:430px){.zp0599{font-size:16px}
.zp0599 .hero,.zp0599 .section,.zp0599 .contact{padding-left:18px;padding-right:18px}
.zp0599 .serviceGrid,.zp0599 .proof,.zp0599 .collectionGrid{grid-template-columns:1fr}
.zp0599 h1{font-size:clamp(42px,14vw,70px)}
.zp0599 .nav.index{grid-template-columns:1fr auto}
.zp0599 .nav.index>span{display:none}}

.zp0599 .heroActions a,.zp0599 .primary,.zp0599 .ctaBtn,.zp0599 .btnPrimary,.zp0599 .schedule>a,.zp0599 .newsletter>a{transition:all .2s ease}
.zp0599 .heroActions a:hover,.zp0599 .primary:hover,.zp0599 .ctaBtn:hover,.zp0599 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0599 nav a,.zp0599 .nav a,.zp0599 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0599 nav a:hover,.zp0599 .nav a:hover,.zp0599 .footer a:hover{
  color:var(--primary)
}
.zp0599 .serviceGrid article,.zp0599 .projectCard,.zp0599 .teamCard,.zp0599 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0599 .serviceGrid article:hover,.zp0599 .projectCard:hover,.zp0599 .teamCard:hover,.zp0599 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0599 *,.zp0599 *::before,.zp0599 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0599 a,.zp0599 button,.zp0599 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
