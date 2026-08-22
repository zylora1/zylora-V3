import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0579-fashion-glassmorphism", "family": "Glassmorphism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|story-first|proof>security>testimonial>collection>integrations>schedule>services|inset-panel|poster", "industry": "fashion", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "story-first"};

export default function Template0579({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Fashion Label");
  const headline = String(content.headline || "A strong point of view expressed through silhouette, material, and considered detail.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New collection", "Ready-to-wear", "Accessories", "Editorial", "Stockists"];
  const industryLabel = "Fashion label";
  const serviceNotes = ["Seasonal collections designed in-house with full lookbook photography managed.", "Made-to-order service with a 3-week lead time and fitting appointment included.", "Sustainable material sourcing: certified organic, deadstock, and recycled options.", "Wholesale programme with minimum order quantities designed for independent retailers.", "Alteration and repair service for garments you love but that need adapting."];
  const proofPoints = ["B Corp certified", "100% traceable supply chain", "Press: Vogue, Wallpaper", "Ships to 40+ countries"];
  const testimonial = "I bought one piece expecting to return it. Three years later I've replaced most of my wardrobe. The quality just holds.";
  const testimonialName = "Common client";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0579" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0579{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0579 *{box-sizing:border-box}
.zp0579 a{color:inherit;text-decoration:none}
.zp0579 h1,.zp0579 h2,.zp0579 h3,.zp0579 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0579 img{max-width:100%;display:block}
.zp0579 button,.zp0579 a{-webkit-tap-highlight-color:transparent}
.zp0579 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0579 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0579 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0579 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0579 .mobileMenu{display:none}
.zp0579 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0579 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0579 .eyebrow,.zp0579 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0579 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0579 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0579 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0579 .heroActions a,.zp0579 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0579 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0579 .visual,.zp0579 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0579 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0579 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0579 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0579 .heroPhoto{object-fit:cover}
.zp0579 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0579 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0579 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0579 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0579 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0579 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0579 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0579 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0579 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0579 .serviceGrid p{color:var(--muted)}
.zp0579 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0579 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0579 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0579 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0579 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0579 .testimonial>div{align-self:end}
.zp0579 .testimonial span{display:block;opacity:.7}
.zp0579 details{border-top:1px solid var(--border);padding:20px 0}
.zp0579 details summary{font-weight:800;cursor:pointer}
.zp0579 details p{color:var(--muted);max-width:70ch}
.zp0579 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0579 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0579 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0579 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0579 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0579 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0579 .p1,.zp0579 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0579 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0579 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0579 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0579 .contact .eyebrow{color:var(--bg)}
.zp0579 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0579 .contactMeta{display:grid;gap:10px}
.zp0579 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0579{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0579 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0579 .heroCopy{animation:enter-578 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-578{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0579 .hero{min-height:auto}
.zp0579 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0579 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0579 .nav nav{display:none}
.zp0579 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0579 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0579 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0579 .mobileMenu nav a{padding:10px 8px}
.zp0579 .hero,.zp0579 .diagonalHero{grid-template-columns:1fr}
.zp0579 .section,.zp0579 .sectionTitle,.zp0579 .security,.zp0579 .contact{grid-template-columns:1fr}
.zp0579 .testimonial{grid-template-columns:1fr}
.zp0579 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0579 .section{display:block}}
@media(max-width:430px){.zp0579{font-size:16px}
.zp0579 .hero,.zp0579 .section,.zp0579 .contact{padding-left:18px;padding-right:18px}
.zp0579 .serviceGrid,.zp0579 .proof,.zp0579 .collectionGrid{grid-template-columns:1fr}
.zp0579 h1{font-size:clamp(42px,14vw,70px)}}

.zp0579 .heroActions a,.zp0579 .primary,.zp0579 .ctaBtn,.zp0579 .btnPrimary,.zp0579 .schedule>a,.zp0579 .newsletter>a{transition:all .2s ease}
.zp0579 .heroActions a:hover,.zp0579 .primary:hover,.zp0579 .ctaBtn:hover,.zp0579 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0579 nav a,.zp0579 .nav a,.zp0579 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0579 nav a:hover,.zp0579 .nav a:hover,.zp0579 .footer a:hover{
  color:var(--primary)
}
.zp0579 .serviceGrid article,.zp0579 .projectCard,.zp0579 .teamCard,.zp0579 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0579 .serviceGrid article:hover,.zp0579 .projectCard:hover,.zp0579 .teamCard:hover,.zp0579 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0579 *,.zp0579 *::before,.zp0579 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0579 a,.zp0579 button,.zp0579 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">78</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
