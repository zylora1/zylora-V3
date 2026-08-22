import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0575-ecommerce-cinematic", "family": "Cinematic", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|asymmetric-5-7|testimonial>services>proof>gallery>values>community|soft-12|clean-humanist", "industry": "ecommerce", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "asymmetric-5-7"};

export default function Template0575({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Ecommerce Brand");
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
  const storyBody = "Clove Ecommerce Brand is presented as a real working ecommerce brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Conversion rate went from 1.2% to 2.8% in the first quarter. They found the leaks in our checkout nobody else had flagged.";
  const testimonialName = "Fieldwork client";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0575" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0575{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0575 *{box-sizing:border-box}
.zp0575 a{color:inherit;text-decoration:none}
.zp0575 h1,.zp0575 h2,.zp0575 h3,.zp0575 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0575 img{max-width:100%;display:block}
.zp0575 button,.zp0575 a{-webkit-tap-highlight-color:transparent}
.zp0575 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0575 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0575 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0575 .mobileMenu{display:none}
.zp0575:has(.navRail)>.hero,.zp0575:has(.navRail)>.section,.zp0575:has(.navRail)>.contact,.zp0575:has(.navRail)>.footer{margin-left:190px}
.zp0575 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0575 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0575 .eyebrow,.zp0575 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0575 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0575 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0575 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0575 .heroActions a,.zp0575 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0575 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0575 .canvasHero{overflow:hidden}
.zp0575 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0575 .canvasGrid i{border-right:1px solid var(--border)}
.zp0575 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0575 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0575 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0575 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0575 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0575 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0575 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0575 .serviceGrid p{color:var(--muted)}
.zp0575 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0575 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0575 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0575 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0575 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0575 .testimonial>div{align-self:end}
.zp0575 .testimonial span{display:block;opacity:.7}
.zp0575 details{border-top:1px solid var(--border);padding:20px 0}
.zp0575 details summary{font-weight:800;cursor:pointer}
.zp0575 details p{color:var(--muted);max-width:70ch}
.zp0575 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0575 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0575 .galleryGrid>*:first-child{grid-row:1/3}
.zp0575 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0575 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0575 .g2,.zp0575 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0575 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0575 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Avenir, Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0575 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0575 .contact .eyebrow{color:var(--bg)}
.zp0575 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0575 .contactMeta{display:grid;gap:10px}
.zp0575 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0575 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0575 .heroCopy{animation:enter-574 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-574{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0575 .hero{min-height:auto}
.zp0575 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0575 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0575 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0575 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0575 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0575 .mobileMenu nav a{padding:10px 8px}
.zp0575 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0575:has(.navRail)>.hero,.zp0575:has(.navRail)>.section,.zp0575:has(.navRail)>.contact,.zp0575:has(.navRail)>.footer{margin-left:0}
.zp0575 .hero{grid-template-columns:1fr}
.zp0575 .section,.zp0575 .sectionTitle,.zp0575 .contact{grid-template-columns:1fr}
.zp0575 .testimonial{grid-template-columns:1fr}
.zp0575 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0575 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0575 .section{display:block}}
@media(max-width:430px){.zp0575{font-size:16px}
.zp0575 .hero,.zp0575 .section,.zp0575 .contact{padding-left:18px;padding-right:18px}
.zp0575 .serviceGrid,.zp0575 .proof{grid-template-columns:1fr}
.zp0575 h1{font-size:clamp(42px,14vw,70px)}
.zp0575 .galleryGrid{grid-template-columns:1fr}
.zp0575 .galleryGrid>*:first-child{grid-column:auto}}

.zp0575 .heroActions a,.zp0575 .primary,.zp0575 .ctaBtn,.zp0575 .btnPrimary,.zp0575 .schedule>a,.zp0575 .newsletter>a{transition:all .2s ease}
.zp0575 .heroActions a:hover,.zp0575 .primary:hover,.zp0575 .ctaBtn:hover,.zp0575 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0575 nav a,.zp0575 .nav a,.zp0575 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0575 nav a:hover,.zp0575 .nav a:hover,.zp0575 .footer a:hover{
  opacity:.7
}
.zp0575 .serviceGrid article,.zp0575 .projectCard,.zp0575 .teamCard,.zp0575 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0575 .serviceGrid article:hover,.zp0575 .projectCard:hover,.zp0575 .teamCard:hover,.zp0575 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0575 *,.zp0575 *::before,.zp0575 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0575 a,.zp0575 button,.zp0575 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
