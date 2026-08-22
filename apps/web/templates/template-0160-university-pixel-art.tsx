import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0160-university-pixel-art", "family": "Pixel Art", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|single-column-longform|newsletter>pricing>gallery>services>proof|heavy-frame|brutal-display", "industry": "university", "hero": "data-led", "navigation": "centered-logo", "layout": "single-column-longform"};

export default function Template0160({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow University Programme");
  const headline = String(content.headline || "Study, research, and community organised around meaningful real-world contribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Undergraduate study", "Graduate programmes", "Research", "Student life", "Admissions support"];
  const industryLabel = "University programme";
  const serviceNotes = ["Courses co-designed with industry partners so graduate skills meet real employer needs.", "Research-active faculty who bring live project experience into lectures.", "Industry placement years with 92% of students securing relevant roles.", "International exchange programmes at 60+ partner universities worldwide.", "Graduate outcome tracking with 18-month follow-up career support."];
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0160" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0160{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0160 *{box-sizing:border-box}
.zp0160 a{color:inherit;text-decoration:none}
.zp0160 h1,.zp0160 h2,.zp0160 h3,.zp0160 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0160 img{max-width:100%;display:block}
.zp0160 button,.zp0160 a{-webkit-tap-highlight-color:transparent}
.zp0160 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0160 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0160 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0160 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0160 .nav.centered strong{order:2;font-size:24px}
.zp0160 .nav.centered nav:first-child{order:1}
.zp0160 .nav.centered nav:last-child{order:3}
.zp0160 .mobileMenu{display:none}
.zp0160 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0160 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0160 .eyebrow,.zp0160 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0160 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0160 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0160 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0160 .heroActions a,.zp0160 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0160 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0160 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0160 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0160 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0160 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0160 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0160 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0160 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0160 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0160 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0160 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0160 .serviceGrid p{color:var(--muted)}
.zp0160 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0160 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0160 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0160 details{border-top:1px solid var(--border);padding:20px 0}
.zp0160 details summary{font-weight:800;cursor:pointer}
.zp0160 details p{color:var(--muted);max-width:70ch}
.zp0160 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0160 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0160 .galleryGrid>*:first-child{grid-row:1/3}
.zp0160 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0160 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0160 .g2,.zp0160 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0160 .priceRows{border-top:1px solid var(--border)}
.zp0160 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0160 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0160 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0160 .contact .eyebrow{color:var(--bg)}
.zp0160 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0160 .contactMeta{display:grid;gap:10px}
.zp0160 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0160 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0160 .sectionTitle{display:block}
.zp0160{image-rendering:pixelated}
.zp0160 *{border-radius:0!important}
@media(max-width:1024px){.zp0160 .hero{min-height:auto}
.zp0160 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0160 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0160 .nav nav{display:none}
.zp0160 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0160 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0160 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0160 .mobileMenu nav a{padding:10px 8px}
.zp0160 .hero,.zp0160 .dataHero{grid-template-columns:1fr}
.zp0160 .section,.zp0160 .sectionTitle,.zp0160 .contact{grid-template-columns:1fr}
.zp0160 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0160 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0160 .section{display:block}}
@media(max-width:430px){.zp0160{font-size:16px}
.zp0160 .hero,.zp0160 .section,.zp0160 .contact{padding-left:18px;padding-right:18px}
.zp0160 .serviceGrid,.zp0160 .proof{grid-template-columns:1fr}
.zp0160 h1{font-size:clamp(42px,14vw,70px)}
.zp0160 .priceRows article{grid-template-columns:1fr}
.zp0160 .galleryGrid{grid-template-columns:1fr}
.zp0160 .galleryGrid>*:first-child{grid-column:auto}}

.zp0160 .heroActions a,.zp0160 .primary,.zp0160 .ctaBtn,.zp0160 .btnPrimary,.zp0160 .schedule>a,.zp0160 .newsletter>a{transition:all .2s ease}
.zp0160 .heroActions a:hover,.zp0160 .primary:hover,.zp0160 .ctaBtn:hover,.zp0160 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0160 nav a,.zp0160 .nav a,.zp0160 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0160 nav a:hover,.zp0160 .nav a:hover,.zp0160 .footer a:hover{
  color:var(--primary)
}
.zp0160 .serviceGrid article,.zp0160 .projectCard,.zp0160 .teamCard,.zp0160 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0160 .serviceGrid article:hover,.zp0160 .projectCard:hover,.zp0160 .teamCard:hover,.zp0160 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@keyframes zpEnter{0%{opacity:0;clip-path:inset(0 100% 0 0)}100%{opacity:1;clip-path:inset(0 0 0 0)}}
.zp0160 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0160 .sectionTitle,.zp0160 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0160 *,.zp0160 *::before,.zp0160 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0160 a,.zp0160 button,.zp0160 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
