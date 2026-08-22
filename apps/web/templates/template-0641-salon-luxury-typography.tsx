import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0641-salon-luxury-typography", "family": "Luxury Typography", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|gallery-index|destinations>services>schedule>packages>gallery>proof|square-editorial|friendly", "industry": "salon", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "gallery-index"};

export default function Template0641({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0641" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0641{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0641 *{box-sizing:border-box}
.zp0641 a{color:inherit;text-decoration:none}
.zp0641 h1,.zp0641 h2,.zp0641 h3,.zp0641 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0641 img{max-width:100%;display:block}
.zp0641 button,.zp0641 a{-webkit-tap-highlight-color:transparent}
.zp0641 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0641 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0641 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0641 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0641 .mobileMenu{display:none}
.zp0641 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0641 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0641 .eyebrow,.zp0641 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0641 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0641 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0641 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0641 .heroActions a,.zp0641 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0641 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0641 .typeOnly{grid-template-columns:1fr .28fr}
.zp0641 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0641 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0641 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0641 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0641 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0641 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0641 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0641 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0641 .serviceGrid p{color:var(--muted)}
.zp0641 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0641 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0641 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0641 details{border-top:1px solid var(--border);padding:20px 0}
.zp0641 details summary{font-weight:800;cursor:pointer}
.zp0641 details p{color:var(--muted);max-width:70ch}
.zp0641 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0641 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0641 .galleryGrid>*:first-child{grid-row:1/3}
.zp0641 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0641 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0641 .g2,.zp0641 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0641 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0641 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0641 .packages>.sectionTitle{grid-column:1/-1}
.zp0641 .packages article{padding:24px;border:1px solid var(--border)}
.zp0641 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0641 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0641 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0641 .contact .eyebrow{color:var(--bg)}
.zp0641 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0641 .contactMeta{display:grid;gap:10px}
.zp0641 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0641 .heroCopy{animation:enter-640 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-640{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0641 .hero{min-height:auto}
.zp0641 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0641 .proof{grid-template-columns:1fr 1fr}
.zp0641 .packages{grid-template-columns:1fr 1fr}
.zp0641 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0641 .nav nav{display:none}
.zp0641 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0641 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0641 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0641 .mobileMenu nav a{padding:10px 8px}
.zp0641 .hero{grid-template-columns:1fr}
.zp0641 .section,.zp0641 .sectionTitle,.zp0641 .contact{grid-template-columns:1fr}
.zp0641 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0641 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0641 .section{display:block}}
@media(max-width:430px){.zp0641{font-size:16px}
.zp0641 .hero,.zp0641 .section,.zp0641 .contact{padding-left:18px;padding-right:18px}
.zp0641 .serviceGrid,.zp0641 .proof,.zp0641 .packages,.zp0641 .destinations>div:last-child{grid-template-columns:1fr}
.zp0641 h1{font-size:clamp(42px,14vw,70px)}
.zp0641 .galleryGrid{grid-template-columns:1fr}
.zp0641 .galleryGrid>*:first-child{grid-column:auto}}

.zp0641 .heroActions a,.zp0641 .primary,.zp0641 .ctaBtn,.zp0641 .btnPrimary,.zp0641 .schedule>a,.zp0641 .newsletter>a{transition:all .2s ease}
.zp0641 .heroActions a:hover,.zp0641 .primary:hover,.zp0641 .ctaBtn:hover,.zp0641 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0641 nav a,.zp0641 .nav a,.zp0641 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0641 nav a:hover,.zp0641 .nav a:hover,.zp0641 .footer a:hover{
  opacity:.65
}
.zp0641 .serviceGrid article,.zp0641 .projectCard,.zp0641 .teamCard,.zp0641 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0641 .serviceGrid article:hover,.zp0641 .projectCard:hover,.zp0641 .teamCard:hover,.zp0641 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0641 *,.zp0641 *::before,.zp0641 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0641 a,.zp0641 button,.zp0641 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
