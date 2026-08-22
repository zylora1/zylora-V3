import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0134-school-memphis", "family": "Memphis", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|menu-led|location>gallery>services>proof>testimonial>comparison|pill-controls|ceremonial", "industry": "school", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "menu-led"};

export default function Template0134({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar School");
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
  const testimonialName = "Juniper client";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0134" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0134{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0134 *{box-sizing:border-box}
.zp0134 a{color:inherit;text-decoration:none}
.zp0134 h1,.zp0134 h2,.zp0134 h3,.zp0134 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0134 img{max-width:100%;display:block}
.zp0134 button,.zp0134 a{-webkit-tap-highlight-color:transparent}
.zp0134 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0134 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0134 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0134 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0134 .mobileMenu{display:none}
.zp0134 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0134 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0134 .eyebrow,.zp0134 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0134 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0134 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0134 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0134 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0134 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0134 .visual,.zp0134 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0134 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0134 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0134 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0134 .heroPhoto{object-fit:cover}
.zp0134 .cinematic{padding:0;min-height:100vh}
.zp0134 .cinematic>.heroPhoto,.zp0134 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0134 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0134 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0134 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0134 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0134 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0134 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0134 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0134 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0134 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0134 .serviceGrid p{color:var(--muted)}
.zp0134 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0134 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0134 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0134 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0134 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0134 .testimonial>div{align-self:end}
.zp0134 .testimonial span{display:block;opacity:.7}
.zp0134 details{border-top:1px solid var(--border);padding:20px 0}
.zp0134 details summary{font-weight:800;cursor:pointer}
.zp0134 details p{color:var(--muted);max-width:70ch}
.zp0134 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0134 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0134 .galleryGrid>*:first-child{grid-row:1/3}
.zp0134 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0134 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0134 .g2,.zp0134 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0134 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0134 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0134 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0134 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0134 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0134 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0134 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0134 .contact .eyebrow{color:var(--bg)}
.zp0134 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0134 .contactMeta{display:grid;gap:10px}
.zp0134 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0134 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-7deg)}
.zp0134 .heroCopy{animation:enter-133 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-133{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0134 .hero{min-height:auto}
.zp0134 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0134 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0134 .nav nav{display:none}
.zp0134 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0134 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0134 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0134 .mobileMenu nav a{padding:10px 8px}
.zp0134 .hero{grid-template-columns:1fr}
.zp0134 .section,.zp0134 .sectionTitle,.zp0134 .location,.zp0134 .contact{grid-template-columns:1fr}
.zp0134 .testimonial{grid-template-columns:1fr}
.zp0134 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0134 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0134 .section{display:block}}
@media(max-width:430px){.zp0134{font-size:16px}
.zp0134 .hero,.zp0134 .section,.zp0134 .contact{padding-left:18px;padding-right:18px}
.zp0134 .serviceGrid,.zp0134 .proof,.zp0134 .compareGrid{grid-template-columns:1fr}
.zp0134 h1{font-size:clamp(42px,14vw,70px)}
.zp0134 .galleryGrid{grid-template-columns:1fr}
.zp0134 .galleryGrid>*:first-child{grid-column:auto}}

.zp0134 .heroActions a,.zp0134 .primary,.zp0134 .ctaBtn,.zp0134 .btnPrimary,.zp0134 .schedule>a,.zp0134 .newsletter>a{transition:all .2s ease}
.zp0134 .heroActions a:hover,.zp0134 .primary:hover,.zp0134 .ctaBtn:hover,.zp0134 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0134 nav a,.zp0134 .nav a,.zp0134 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0134 nav a:hover,.zp0134 .nav a:hover,.zp0134 .footer a:hover{
  color:var(--primary)
}
.zp0134 .serviceGrid article,.zp0134 .projectCard,.zp0134 .teamCard,.zp0134 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0134 .serviceGrid article:hover,.zp0134 .projectCard:hover,.zp0134 .teamCard:hover,.zp0134 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0134 *,.zp0134 *::before,.zp0134 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0134 a,.zp0134 button,.zp0134 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">33</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
