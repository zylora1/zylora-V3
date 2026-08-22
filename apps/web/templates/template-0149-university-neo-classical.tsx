import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0149-university-neo-classical", "family": "Neo-classical", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|schedule-led|projects>values>services>credentials>gallery>proof|ticket-edge|condensed-editorial", "industry": "university", "hero": "image-collage", "navigation": "lower-third", "layout": "schedule-led"};

export default function Template0149({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine University Programme");
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
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  return <main className="zp0149" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0149{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0149 *{box-sizing:border-box}
.zp0149 a{color:inherit;text-decoration:none}
.zp0149 h1,.zp0149 h2,.zp0149 h3,.zp0149 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0149 img{max-width:100%;display:block}
.zp0149 button,.zp0149 a{-webkit-tap-highlight-color:transparent}
.zp0149 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0149 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0149 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0149 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0149 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0149 .mobileMenu{display:none}
.zp0149 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0149 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0149 .eyebrow,.zp0149 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0149 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0149 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0149 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0149 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0149 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0149 .visual,.zp0149 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0149 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0149 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0149 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0149 .heroPhoto{object-fit:cover}
.zp0149 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0149 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0149 .collage>*:first-child{grid-row:1/3}
.zp0149 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0149 .miniVisual.alt{background:var(--secondary)}
.zp0149 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0149 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0149 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0149 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0149 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0149 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0149 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0149 .serviceGrid p{color:var(--muted)}
.zp0149 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0149 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0149 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0149 details{border-top:1px solid var(--border);padding:20px 0}
.zp0149 details summary{font-weight:800;cursor:pointer}
.zp0149 details p{color:var(--muted);max-width:70ch}
.zp0149 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0149 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0149 .galleryGrid>*:first-child{grid-row:1/3}
.zp0149 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0149 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0149 .g2,.zp0149 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0149 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0149 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0149 .projects article:nth-child(2){transform:translateY(32px)}
.zp0149 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0149 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0149 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0149 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0149 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0149 .contact .eyebrow{color:var(--bg)}
.zp0149 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0149 .contactMeta{display:grid;gap:10px}
.zp0149 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0149 .heroCopy{animation:enter-148 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-148{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0149 .hero{min-height:auto}
.zp0149 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0149 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0149 .nav nav{display:none}
.zp0149 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0149 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0149 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0149 .mobileMenu nav a{padding:10px 8px}
.zp0149 .hero,.zp0149 .collageHero{grid-template-columns:1fr}
.zp0149 .section,.zp0149 .sectionTitle,.zp0149 .contact{grid-template-columns:1fr}
.zp0149 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0149 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0149 .projects .projectGrid{grid-template-columns:1fr}
.zp0149 .projects article:nth-child(2){transform:none}
.zp0149 .section{display:block}}
@media(max-width:430px){.zp0149{font-size:16px}
.zp0149 .hero,.zp0149 .section,.zp0149 .contact{padding-left:18px;padding-right:18px}
.zp0149 .serviceGrid,.zp0149 .proof{grid-template-columns:1fr}
.zp0149 h1{font-size:clamp(42px,14vw,70px)}
.zp0149 .galleryGrid{grid-template-columns:1fr}
.zp0149 .galleryGrid>*:first-child{grid-column:auto}}

.zp0149 .heroActions a,.zp0149 .primary,.zp0149 .ctaBtn,.zp0149 .btnPrimary,.zp0149 .schedule>a,.zp0149 .newsletter>a{transition:all .2s ease}
.zp0149 .heroActions a:hover,.zp0149 .primary:hover,.zp0149 .ctaBtn:hover,.zp0149 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0149 nav a,.zp0149 .nav a,.zp0149 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0149 nav a:hover,.zp0149 .nav a:hover,.zp0149 .footer a:hover{
  color:var(--secondary)
}
.zp0149 .serviceGrid article,.zp0149 .projectCard,.zp0149 .teamCard,.zp0149 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0149 .serviceGrid article:hover,.zp0149 .projectCard:hover,.zp0149 .teamCard:hover,.zp0149 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0149 *,.zp0149 *::before,.zp0149 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0149 a,.zp0149 button,.zp0149 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">48</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
