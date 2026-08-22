import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0587-fashion-neo-brutalism", "family": "Neo-Brutalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|press-led|testimonial>gallery>pricing>proof>services>faq|capsule|editorial-serif", "industry": "fashion", "hero": "split-image", "navigation": "statement-bar", "layout": "press-led"};

export default function Template0587({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Fashion Label");
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
  const testimonialName = "Kite client";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Fashion label / Project A", "Fashion label / Project B", "Fashion label / Project C", "Fashion label / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A strong point of view expressed through silhouette, material, and considered detail. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0587" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0587{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:3px;--shadow:none;--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0587 *{box-sizing:border-box}
.zp0587 a{color:inherit;text-decoration:none}
.zp0587 h1,.zp0587 h2,.zp0587 h3,.zp0587 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0587 img{max-width:100%;display:block}
.zp0587 button,.zp0587 a{-webkit-tap-highlight-color:transparent}
.zp0587 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0587 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0587 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0587 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0587 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0587 .nav.statement>a{justify-self:end}
.zp0587 .mobileMenu{display:none}
.zp0587 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0587 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0587 .eyebrow,.zp0587 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0587 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0587 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0587 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0587 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0587 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0587 .visual,.zp0587 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0587 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0587 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0587 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0587 .heroPhoto{object-fit:cover}
.zp0587 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0587 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0587 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0587 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0587 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0587 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0587 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0587 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0587 .serviceGrid p{color:var(--muted)}
.zp0587 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0587 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0587 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0587 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0587 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0587 .testimonial>div{align-self:end}
.zp0587 .testimonial span{display:block;opacity:.7}
.zp0587 .faqList{max-width:900px;margin-left:auto}
.zp0587 details{border-top:1px solid var(--border);padding:20px 0}
.zp0587 details summary{font-weight:800;cursor:pointer}
.zp0587 details p{color:var(--muted);max-width:70ch}
.zp0587 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0587 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0587 .galleryGrid>*:first-child{grid-row:1/3}
.zp0587 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0587 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0587 .g2,.zp0587 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0587 .priceRows{border-top:1px solid var(--border)}
.zp0587 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0587 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0587 .contact .eyebrow{color:var(--bg)}
.zp0587 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0587 .contactMeta{display:grid;gap:10px}
.zp0587 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0587 .heroActions a,.zp0587 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0587 h1{text-transform:uppercase}
.zp0587 .heroCopy{animation:enter-586 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-586{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0587 .hero{min-height:auto}
.zp0587 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0587 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0587 .nav nav{display:none}
.zp0587 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0587 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0587 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0587 .mobileMenu nav a{padding:10px 8px}
.zp0587 .hero,.zp0587 .splitHero{grid-template-columns:1fr}
.zp0587 .section,.zp0587 .sectionTitle,.zp0587 .contact{grid-template-columns:1fr}
.zp0587 .testimonial{grid-template-columns:1fr}
.zp0587 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0587 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0587 .section{display:block}}
@media(max-width:430px){.zp0587{font-size:16px}
.zp0587 .hero,.zp0587 .section,.zp0587 .contact{padding-left:18px;padding-right:18px}
.zp0587 .serviceGrid,.zp0587 .proof{grid-template-columns:1fr}
.zp0587 h1{font-size:clamp(42px,14vw,70px)}
.zp0587 .priceRows article{grid-template-columns:1fr}
.zp0587 .galleryGrid{grid-template-columns:1fr}
.zp0587 .galleryGrid>*:first-child{grid-column:auto}
.zp0587 .nav.statement{grid-template-columns:1fr auto}
.zp0587 .nav.statement>span:first-child{display:none}}

.zp0587 .heroActions a,.zp0587 .primary,.zp0587 .ctaBtn,.zp0587 .btnPrimary,.zp0587 .schedule>a,.zp0587 .newsletter>a{transition:all .2s ease}
.zp0587 .heroActions a:hover,.zp0587 .primary:hover,.zp0587 .ctaBtn:hover,.zp0587 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0587 nav a,.zp0587 .nav a,.zp0587 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0587 nav a:hover,.zp0587 .nav a:hover,.zp0587 .footer a:hover{
  text-decoration:underline
}
.zp0587 .serviceGrid article,.zp0587 .projectCard,.zp0587 .teamCard,.zp0587 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0587 .serviceGrid article:hover,.zp0587 .projectCard:hover,.zp0587 .teamCard:hover,.zp0587 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0587 *,.zp0587 *::before,.zp0587 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0587 a,.zp0587 button,.zp0587 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">86</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
