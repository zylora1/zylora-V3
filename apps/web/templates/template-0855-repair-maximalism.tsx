import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0855-repair-maximalism", "family": "Maximalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|timeline-narrative|research>proof>services>collection>case-study>destinations>gallery|asymmetric-radius|geometric", "industry": "repair", "hero": "index-led", "navigation": "editorial-index", "layout": "timeline-narrative"};

export default function Template0855({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0855" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0855{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0855 *{box-sizing:border-box}
.zp0855 a{color:inherit;text-decoration:none}
.zp0855 h1,.zp0855 h2,.zp0855 h3,.zp0855 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0855 img{max-width:100%;display:block}
.zp0855 button,.zp0855 a{-webkit-tap-highlight-color:transparent}
.zp0855 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0855 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0855 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0855 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0855 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0855 .nav.index nav{justify-content:flex-end}
.zp0855 .mobileMenu{display:none}
.zp0855 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0855 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0855 .eyebrow,.zp0855 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0855 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0855 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0855 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0855 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0855 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0855 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0855 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0855 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0855 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0855 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0855 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0855 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0855 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0855 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0855 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0855 .serviceGrid p{color:var(--muted)}
.zp0855 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0855 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0855 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0855 details{border-top:1px solid var(--border);padding:20px 0}
.zp0855 details summary{font-weight:800;cursor:pointer}
.zp0855 details p{color:var(--muted);max-width:70ch}
.zp0855 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0855 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0855 .galleryGrid>*:first-child{grid-row:1/3}
.zp0855 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0855 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0855 .g2,.zp0855 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0855 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0855 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0855 .projects article:nth-child(2){transform:translateY(32px)}
.zp0855 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0855 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0855 .p1,.zp0855 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0855 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0855 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0855 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0855 .researchRows{max-width:900px;margin-left:auto}
.zp0855 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0855 .contact .eyebrow{color:var(--bg)}
.zp0855 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0855 .contactMeta{display:grid;gap:10px}
.zp0855 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0855 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-6deg)}
.zp0855 .heroCopy{animation:enter-854 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-854{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0855 .hero{min-height:auto}
.zp0855 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0855 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0855 .nav nav{display:none}
.zp0855 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0855 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0855 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0855 .mobileMenu nav a{padding:10px 8px}
.zp0855 .hero,.zp0855 .indexHero{grid-template-columns:1fr}
.zp0855 .section,.zp0855 .sectionTitle,.zp0855 .contact{grid-template-columns:1fr}
.zp0855 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0855 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0855 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0855 .projects .projectGrid{grid-template-columns:1fr}
.zp0855 .projects article:nth-child(2){transform:none}
.zp0855 .section{display:block}}
@media(max-width:430px){.zp0855{font-size:16px}
.zp0855 .hero,.zp0855 .section,.zp0855 .contact{padding-left:18px;padding-right:18px}
.zp0855 .serviceGrid,.zp0855 .proof,.zp0855 .collectionGrid,.zp0855 .destinations>div:last-child{grid-template-columns:1fr}
.zp0855 h1{font-size:clamp(42px,14vw,70px)}
.zp0855 .galleryGrid{grid-template-columns:1fr}
.zp0855 .galleryGrid>*:first-child{grid-column:auto}
.zp0855 .nav.index{grid-template-columns:1fr auto}
.zp0855 .nav.index>span{display:none}}

.zp0855 .heroActions a,.zp0855 .primary,.zp0855 .ctaBtn,.zp0855 .btnPrimary,.zp0855 .schedule>a,.zp0855 .newsletter>a{transition:all .2s ease}
.zp0855 .heroActions a:hover,.zp0855 .primary:hover,.zp0855 .ctaBtn:hover,.zp0855 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0855 nav a,.zp0855 .nav a,.zp0855 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0855 nav a:hover,.zp0855 .nav a:hover,.zp0855 .footer a:hover{
  color:var(--primary)
}
.zp0855 .serviceGrid article,.zp0855 .projectCard,.zp0855 .teamCard,.zp0855 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0855 .serviceGrid article:hover,.zp0855 .projectCard:hover,.zp0855 .teamCard:hover,.zp0855 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0855 *,.zp0855 *::before,.zp0855 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0855 a,.zp0855 button,.zp0855 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
