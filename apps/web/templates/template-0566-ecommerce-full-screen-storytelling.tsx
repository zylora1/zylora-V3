import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0566-ecommerce-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|menu-led|gallery>services>proof>credentials>security>press|pill-controls|ceremonial", "industry": "ecommerce", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "menu-led"};

export default function Template0566({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Ecommerce Brand");
  const headline = String(content.headline || "Useful products presented with clarity, confidence, and a friction-light buying path.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New arrivals", "Best sellers", "Collections", "Gift cards", "Customer care"];
  const industryLabel = "Ecommerce brand";
  const serviceNotes = ["Shopify, WooCommerce, and headless builds — we recommend based on your scale and roadmap.", "Conversion rate optimisation built into every build: checkout, PDP, and search flows.", "Inventory and ERP integrations with real-time sync across warehouse and storefront.", "International expansion support: multi-currency, tax compliance, and localised UX.", "Post-launch CRO: A/B testing programme for 90 days after go-live included."];
  const proofPoints = ["Average: 34% CRO lift", "Shopify Plus certified", "PCI DSS compliant", "99.9% uptime SLA"];
  const testimonial = "Conversion rate went from 1.2% to 2.8% in the first quarter. They found the leaks in our checkout nobody else had flagged.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0566" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0566{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0566 *{box-sizing:border-box}
.zp0566 a{color:inherit;text-decoration:none}
.zp0566 h1,.zp0566 h2,.zp0566 h3,.zp0566 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0566 img{max-width:100%;display:block}
.zp0566 button,.zp0566 a{-webkit-tap-highlight-color:transparent}
.zp0566 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0566 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0566 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0566 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0566 .mobileMenu{display:none}
.zp0566 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0566 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0566 .eyebrow,.zp0566 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0566 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0566 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0566 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0566 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0566 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0566 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0566 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0566 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0566 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0566 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0566 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0566 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0566 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0566 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0566 .serviceGrid p{color:var(--muted)}
.zp0566 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0566 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0566 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0566 details{border-top:1px solid var(--border);padding:20px 0}
.zp0566 details summary{font-weight:800;cursor:pointer}
.zp0566 details p{color:var(--muted);max-width:70ch}
.zp0566 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0566 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0566 .galleryGrid>*:first-child{grid-row:1/3}
.zp0566 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0566 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0566 .g2,.zp0566 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0566 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0566 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0566 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0566 .awards>div{max-width:800px;margin-left:auto}
.zp0566 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0566 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0566 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0566 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0566 .contact .eyebrow{color:var(--bg)}
.zp0566 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0566 .contactMeta{display:grid;gap:10px}
.zp0566 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0566 .hero{min-height:auto}
.zp0566 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0566 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0566 .nav nav{display:none}
.zp0566 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0566 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0566 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0566 .mobileMenu nav a{padding:10px 8px}
.zp0566 .hero,.zp0566 .timelineHero{grid-template-columns:1fr}
.zp0566 .section,.zp0566 .sectionTitle,.zp0566 .security,.zp0566 .contact{grid-template-columns:1fr}
.zp0566 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0566 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0566 .section{display:block}}
@media(max-width:430px){.zp0566{font-size:16px}
.zp0566 .hero,.zp0566 .section,.zp0566 .contact{padding-left:18px;padding-right:18px}
.zp0566 .serviceGrid,.zp0566 .proof{grid-template-columns:1fr}
.zp0566 h1{font-size:clamp(42px,14vw,70px)}
.zp0566 .galleryGrid{grid-template-columns:1fr}
.zp0566 .galleryGrid>*:first-child{grid-column:auto}}

.zp0566 .heroActions a,.zp0566 .primary,.zp0566 .ctaBtn,.zp0566 .btnPrimary,.zp0566 .schedule>a,.zp0566 .newsletter>a{transition:all .2s ease}
.zp0566 .heroActions a:hover,.zp0566 .primary:hover,.zp0566 .ctaBtn:hover,.zp0566 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0566 nav a,.zp0566 .nav a,.zp0566 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0566 nav a:hover,.zp0566 .nav a:hover,.zp0566 .footer a:hover{
  color:var(--primary)
}
.zp0566 .serviceGrid article,.zp0566 .projectCard,.zp0566 .teamCard,.zp0566 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0566 .serviceGrid article:hover,.zp0566 .projectCard:hover,.zp0566 .teamCard:hover,.zp0566 .bentoCard:hover{
  transform:scale(1.02)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0566 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0566 .sectionTitle,.zp0566 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0566 *,.zp0566 *::before,.zp0566 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0566 a,.zp0566 button,.zp0566 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
