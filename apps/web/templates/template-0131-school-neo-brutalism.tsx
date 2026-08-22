import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0131-school-neo-brutalism", "family": "Neo-Brutalism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|manifesto-grid|proof>manifesto>services>products>gallery>schedule|inset-panel|editorial-serif", "industry": "school", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "manifesto-grid"};

export default function Template0131({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  return <main className="zp0131" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0131{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:3px;--shadow:none;--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0131 *{box-sizing:border-box}
.zp0131 a{color:inherit;text-decoration:none}
.zp0131 h1,.zp0131 h2,.zp0131 h3,.zp0131 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0131 img{max-width:100%;display:block}
.zp0131 button,.zp0131 a{-webkit-tap-highlight-color:transparent}
.zp0131 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0131 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0131 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0131 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0131 .mobileMenu{display:none}
.zp0131 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0131 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0131 .eyebrow,.zp0131 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0131 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0131 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0131 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0131 .heroActions a,.zp0131 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0131 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0131 .visual,.zp0131 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0131 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0131 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0131 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0131 .heroPhoto{object-fit:cover}
.zp0131 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0131 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0131 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0131 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0131 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0131 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0131 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0131 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0131 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0131 .serviceGrid p{color:var(--muted)}
.zp0131 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0131 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0131 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0131 details{border-top:1px solid var(--border);padding:20px 0}
.zp0131 details summary{font-weight:800;cursor:pointer}
.zp0131 details p{color:var(--muted);max-width:70ch}
.zp0131 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0131 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0131 .galleryGrid>*:first-child{grid-row:1/3}
.zp0131 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0131 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0131 .g2,.zp0131 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0131 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0131 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0131 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0131 .p1,.zp0131 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0131 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0131 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0131 .contact .eyebrow{color:var(--bg)}
.zp0131 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0131 .contactMeta{display:grid;gap:10px}
.zp0131 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0131 .heroActions a,.zp0131 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0131 h1{text-transform:uppercase}
.zp0131 .heroCopy{animation:enter-130 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-130{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0131 .hero{min-height:auto}
.zp0131 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0131 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0131 .nav nav{display:none}
.zp0131 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0131 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0131 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0131 .mobileMenu nav a{padding:10px 8px}
.zp0131 .hero,.zp0131 .diagonalHero{grid-template-columns:1fr}
.zp0131 .section,.zp0131 .sectionTitle,.zp0131 .contact{grid-template-columns:1fr}
.zp0131 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0131 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0131 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0131 .section{display:block}}
@media(max-width:430px){.zp0131{font-size:16px}
.zp0131 .hero,.zp0131 .section,.zp0131 .contact{padding-left:18px;padding-right:18px}
.zp0131 .serviceGrid,.zp0131 .proof,.zp0131 .collectionGrid{grid-template-columns:1fr}
.zp0131 h1{font-size:clamp(42px,14vw,70px)}
.zp0131 .galleryGrid{grid-template-columns:1fr}
.zp0131 .galleryGrid>*:first-child{grid-column:auto}}

.zp0131 .heroActions a,.zp0131 .primary,.zp0131 .ctaBtn,.zp0131 .btnPrimary,.zp0131 .schedule>a,.zp0131 .newsletter>a{transition:all .2s ease}
.zp0131 .heroActions a:hover,.zp0131 .primary:hover,.zp0131 .ctaBtn:hover,.zp0131 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0131 nav a,.zp0131 .nav a,.zp0131 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0131 nav a:hover,.zp0131 .nav a:hover,.zp0131 .footer a:hover{
  text-decoration:underline
}
.zp0131 .serviceGrid article,.zp0131 .projectCard,.zp0131 .teamCard,.zp0131 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0131 .serviceGrid article:hover,.zp0131 .projectCard:hover,.zp0131 .teamCard:hover,.zp0131 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0131 *,.zp0131 *::before,.zp0131 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0131 a,.zp0131 button,.zp0131 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">30</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
