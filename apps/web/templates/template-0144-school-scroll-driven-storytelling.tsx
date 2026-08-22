import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0144-school-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|catalogue-table|testimonial>services>availability>team>collection>proof>values|heavy-frame|terminal", "industry": "school", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "catalogue-table"};

export default function Template0144({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite School");
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
  const testimonialName = "Studio Nine client";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0144" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0144{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0144 *{box-sizing:border-box}
.zp0144 a{color:inherit;text-decoration:none}
.zp0144 h1,.zp0144 h2,.zp0144 h3,.zp0144 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0144 img{max-width:100%;display:block}
.zp0144 button,.zp0144 a{-webkit-tap-highlight-color:transparent}
.zp0144 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0144 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0144 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0144 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0144 .nav.centered strong{order:2;font-size:24px}
.zp0144 .nav.centered nav:first-child{order:1}
.zp0144 .nav.centered nav:last-child{order:3}
.zp0144 .mobileMenu{display:none}
.zp0144 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0144 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0144 .eyebrow,.zp0144 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0144 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0144 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0144 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0144 .heroActions a,.zp0144 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0144 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0144 .visual,.zp0144 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0144 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0144 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0144 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0144 .heroPhoto{object-fit:cover}
.zp0144 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0144 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0144 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0144 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0144 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0144 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0144 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0144 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0144 .serviceGrid p{color:var(--muted)}
.zp0144 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0144 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0144 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0144 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0144 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0144 .testimonial>div{align-self:end}
.zp0144 .testimonial span{display:block;opacity:.7}
.zp0144 details{border-top:1px solid var(--border);padding:20px 0}
.zp0144 details summary{font-weight:800;cursor:pointer}
.zp0144 details p{color:var(--muted);max-width:70ch}
.zp0144 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0144 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0144 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Lucida Console, Monaco, monospace;margin-bottom:18px}
.zp0144 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0144 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0144 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0144 .p1,.zp0144 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0144 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0144 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0144 .contact .eyebrow{color:var(--bg)}
.zp0144 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0144 .contactMeta{display:grid;gap:10px}
.zp0144 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0144 .heroCopy{animation:enter-143 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-143{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0144 .hero{min-height:auto}
.zp0144 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0144 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0144 .nav nav{display:none}
.zp0144 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0144 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0144 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0144 .mobileMenu nav a{padding:10px 8px}
.zp0144 .hero,.zp0144 .asymHero{grid-template-columns:1fr}
.zp0144 .section,.zp0144 .sectionTitle,.zp0144 .contact{grid-template-columns:1fr}
.zp0144 .testimonial{grid-template-columns:1fr}
.zp0144 .teamGrid{grid-template-columns:1fr 1fr}
.zp0144 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0144 .section{display:block}}
@media(max-width:430px){.zp0144{font-size:16px}
.zp0144 .hero,.zp0144 .section,.zp0144 .contact{padding-left:18px;padding-right:18px}
.zp0144 .serviceGrid,.zp0144 .proof,.zp0144 .teamGrid,.zp0144 .collectionGrid{grid-template-columns:1fr}
.zp0144 h1{font-size:clamp(42px,14vw,70px)}}

.zp0144 .heroActions a,.zp0144 .primary,.zp0144 .ctaBtn,.zp0144 .btnPrimary,.zp0144 .schedule>a,.zp0144 .newsletter>a{transition:all .2s ease}
.zp0144 .heroActions a:hover,.zp0144 .primary:hover,.zp0144 .ctaBtn:hover,.zp0144 .btnPrimary:hover{
  opacity:.8
}
.zp0144 nav a,.zp0144 .nav a,.zp0144 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0144 nav a:hover,.zp0144 .nav a:hover,.zp0144 .footer a:hover{
  color:var(--primary)
}
.zp0144 .serviceGrid article,.zp0144 .projectCard,.zp0144 .teamCard,.zp0144 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0144 .serviceGrid article:hover,.zp0144 .projectCard:hover,.zp0144 .teamCard:hover,.zp0144 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0144 *,.zp0144 *::before,.zp0144 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0144 a,.zp0144 button,.zp0144 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">09</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">43</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
