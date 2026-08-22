import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0581-fashion-bauhaus", "family": "Bauhaus", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|schedule-led|services>security>gallery>awards>proof>packages|ticket-edge|condensed-editorial", "industry": "fashion", "hero": "testimonial-led", "navigation": "lower-third", "layout": "schedule-led"};

export default function Template0581({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Fashion Label");
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
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0581" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0581{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0581 *{box-sizing:border-box}
.zp0581 a{color:inherit;text-decoration:none}
.zp0581 h1,.zp0581 h2,.zp0581 h3,.zp0581 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0581 img{max-width:100%;display:block}
.zp0581 button,.zp0581 a{-webkit-tap-highlight-color:transparent}
.zp0581 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0581 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0581 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0581 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0581 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0581 .mobileMenu{display:none}
.zp0581 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0581 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0581 .eyebrow,.zp0581 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0581 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0581 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0581 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0581 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0581 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0581 .quoteHero{grid-template-columns:1fr 1fr}
.zp0581 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0581 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0581 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0581 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0581 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0581 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0581 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0581 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0581 .serviceGrid p{color:var(--muted)}
.zp0581 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0581 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0581 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0581 details{border-top:1px solid var(--border);padding:20px 0}
.zp0581 details summary{font-weight:800;cursor:pointer}
.zp0581 details p{color:var(--muted);max-width:70ch}
.zp0581 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0581 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0581 .galleryGrid>*:first-child{grid-row:1/3}
.zp0581 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0581 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0581 .g2,.zp0581 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0581 .awards>div{max-width:800px;margin-left:auto}
.zp0581 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0581 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0581 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0581 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0581 .packages>.sectionTitle{grid-column:1/-1}
.zp0581 .packages article{padding:24px;border:1px solid var(--border)}
.zp0581 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0581 .contact .eyebrow{color:var(--bg)}
.zp0581 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0581 .contactMeta{display:grid;gap:10px}
.zp0581 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0581 .heroCopy{animation:enter-580 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-580{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0581 .hero{min-height:auto}
.zp0581 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0581 .proof{grid-template-columns:1fr 1fr}
.zp0581 .packages{grid-template-columns:1fr 1fr}
.zp0581 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0581 .nav nav{display:none}
.zp0581 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0581 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0581 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0581 .mobileMenu nav a{padding:10px 8px}
.zp0581 .hero,.zp0581 .quoteHero{grid-template-columns:1fr}
.zp0581 .section,.zp0581 .sectionTitle,.zp0581 .security,.zp0581 .contact{grid-template-columns:1fr}
.zp0581 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0581 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0581 .section{display:block}}
@media(max-width:430px){.zp0581{font-size:16px}
.zp0581 .hero,.zp0581 .section,.zp0581 .contact{padding-left:18px;padding-right:18px}
.zp0581 .serviceGrid,.zp0581 .proof,.zp0581 .packages{grid-template-columns:1fr}
.zp0581 h1{font-size:clamp(42px,14vw,70px)}
.zp0581 .galleryGrid{grid-template-columns:1fr}
.zp0581 .galleryGrid>*:first-child{grid-column:auto}}

.zp0581 .heroActions a,.zp0581 .primary,.zp0581 .ctaBtn,.zp0581 .btnPrimary,.zp0581 .schedule>a,.zp0581 .newsletter>a{transition:all .2s ease}
.zp0581 .heroActions a:hover,.zp0581 .primary:hover,.zp0581 .ctaBtn:hover,.zp0581 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0581 nav a,.zp0581 .nav a,.zp0581 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0581 nav a:hover,.zp0581 .nav a:hover,.zp0581 .footer a:hover{
  color:var(--primary)
}
.zp0581 .serviceGrid article,.zp0581 .projectCard,.zp0581 .teamCard,.zp0581 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0581 .serviceGrid article:hover,.zp0581 .projectCard:hover,.zp0581 .teamCard:hover,.zp0581 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0581 *,.zp0581 *::before,.zp0581 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0581 a,.zp0581 button,.zp0581 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
