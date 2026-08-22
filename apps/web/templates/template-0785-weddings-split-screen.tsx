import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0785-weddings-split-screen", "family": "Split-screen", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|gallery-index|integrations>credentials>services>programmes>testimonial>proof|square-editorial|friendly", "industry": "weddings", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "gallery-index"};

export default function Template0785({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Mosaic client";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0785" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0785{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0785 *{box-sizing:border-box}
.zp0785 a{color:inherit;text-decoration:none}
.zp0785 h1,.zp0785 h2,.zp0785 h3,.zp0785 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0785 img{max-width:100%;display:block}
.zp0785 button,.zp0785 a{-webkit-tap-highlight-color:transparent}
.zp0785 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0785 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0785 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0785 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0785 .mobileMenu{display:none}
.zp0785 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0785 .eyebrow,.zp0785 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0785 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0785 .visual,.zp0785 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0785 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0785 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0785 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0785 .heroPhoto{object-fit:cover}
.zp0785 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0785 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0785 .coverCaption{align-self:end}
.zp0785 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0785 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0785 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0785 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0785 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0785 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0785 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0785 .serviceGrid p{color:var(--muted)}
.zp0785 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0785 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0785 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0785 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0785 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0785 .testimonial>div{align-self:end}
.zp0785 .testimonial span{display:block;opacity:.7}
.zp0785 details{border-top:1px solid var(--border);padding:20px 0}
.zp0785 details summary{font-weight:800;cursor:pointer}
.zp0785 details p{color:var(--muted);max-width:70ch}
.zp0785 .credentials,.zp0785 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0785 .credentials>div,.zp0785 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0785 .credentials b,.zp0785 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0785 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0785 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0785 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0785 .contact .eyebrow{color:var(--bg)}
.zp0785 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0785 .contactMeta{display:grid;gap:10px}
.zp0785 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-784{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0785 .hero{min-height:auto}
.zp0785 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0785 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0785 .nav nav{display:none}
.zp0785 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0785 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0785 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0785 .mobileMenu nav a{padding:10px 8px}
.zp0785 .hero,.zp0785 .coverHero{grid-template-columns:1fr}
.zp0785 .section,.zp0785 .sectionTitle,.zp0785 .contact{grid-template-columns:1fr}
.zp0785 .testimonial{grid-template-columns:1fr}
.zp0785 .section{display:block}}
@media(max-width:430px){.zp0785{font-size:16px}
.zp0785 .hero,.zp0785 .section,.zp0785 .contact{padding-left:18px;padding-right:18px}
.zp0785 .serviceGrid,.zp0785 .proof,.zp0785 .programmes>div:last-child{grid-template-columns:1fr}
.zp0785 h1{font-size:clamp(42px,14vw,70px)}}

.zp0785 .heroActions a,.zp0785 .primary,.zp0785 .ctaBtn,.zp0785 .btnPrimary,.zp0785 .schedule>a,.zp0785 .newsletter>a{transition:all .2s ease}
.zp0785 .heroActions a:hover,.zp0785 .primary:hover,.zp0785 .ctaBtn:hover,.zp0785 .btnPrimary:hover{
  opacity:.85
}
.zp0785 nav a,.zp0785 .nav a,.zp0785 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0785 nav a:hover,.zp0785 .nav a:hover,.zp0785 .footer a:hover{
  color:var(--primary)
}
.zp0785 .serviceGrid article,.zp0785 .projectCard,.zp0785 .teamCard,.zp0785 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0785 .serviceGrid article:hover,.zp0785 .projectCard:hover,.zp0785 .teamCard:hover,.zp0785 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0785 *,.zp0785 *::before,.zp0785 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0785 a,.zp0785 button,.zp0785 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0785</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">84</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
