import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0695-video-futurism", "family": "Futurism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|press-led|collection>integrations>proof>testimonial>location>services|asymmetric-radius|clean-humanist", "industry": "video", "hero": "index-led", "navigation": "editorial-index", "layout": "press-led"};

export default function Template0695({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Film Studio");
  const headline = String(content.headline || "Cinematic storytelling with disciplined production from first treatment to final grade.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Commercial films", "Brand stories", "Documentary", "Post-production", "Photography"];
  const industryLabel = "Film studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Elm client";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Film studio / Project A", "Film studio / Project B", "Film studio / Project C", "Film studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Cinematic storytelling with disciplined production from first treatment to final grade. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0695" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0695{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0695 *{box-sizing:border-box}
.zp0695 a{color:inherit;text-decoration:none}
.zp0695 h1,.zp0695 h2,.zp0695 h3,.zp0695 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0695 img{max-width:100%;display:block}
.zp0695 button,.zp0695 a{-webkit-tap-highlight-color:transparent}
.zp0695 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0695 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0695 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0695 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0695 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0695 .nav.index nav{justify-content:flex-end}
.zp0695 .mobileMenu{display:none}
.zp0695 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0695 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0695 .eyebrow,.zp0695 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0695 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0695 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0695 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0695 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0695 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0695 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0695 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0695 .indexHero li{font:700 18px/1.2 Avenir, Helvetica Neue, Arial, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0695 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0695 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0695 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0695 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0695 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0695 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0695 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0695 .serviceGrid p{color:var(--muted)}
.zp0695 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0695 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0695 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0695 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0695 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0695 .testimonial>div{align-self:end}
.zp0695 .testimonial span{display:block;opacity:.7}
.zp0695 details{border-top:1px solid var(--border);padding:20px 0}
.zp0695 details summary{font-weight:800;cursor:pointer}
.zp0695 details p{color:var(--muted);max-width:70ch}
.zp0695 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0695 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0695 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0695 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0695 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0695 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0695 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0695 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0695 .p1,.zp0695 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0695 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0695 .contact .eyebrow{color:var(--bg)}
.zp0695 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0695 .contactMeta{display:grid;gap:10px}
.zp0695 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0695 .heroCopy{animation:enter-694 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-694{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0695 .hero{min-height:auto}
.zp0695 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0695 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0695 .nav nav{display:none}
.zp0695 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0695 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0695 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0695 .mobileMenu nav a{padding:10px 8px}
.zp0695 .hero,.zp0695 .indexHero{grid-template-columns:1fr}
.zp0695 .section,.zp0695 .sectionTitle,.zp0695 .location,.zp0695 .contact{grid-template-columns:1fr}
.zp0695 .testimonial{grid-template-columns:1fr}
.zp0695 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0695 .section{display:block}}
@media(max-width:430px){.zp0695{font-size:16px}
.zp0695 .hero,.zp0695 .section,.zp0695 .contact{padding-left:18px;padding-right:18px}
.zp0695 .serviceGrid,.zp0695 .proof,.zp0695 .collectionGrid{grid-template-columns:1fr}
.zp0695 h1{font-size:clamp(42px,14vw,70px)}
.zp0695 .nav.index{grid-template-columns:1fr auto}
.zp0695 .nav.index>span{display:none}}

.zp0695 .heroActions a,.zp0695 .primary,.zp0695 .ctaBtn,.zp0695 .btnPrimary,.zp0695 .schedule>a,.zp0695 .newsletter>a{transition:all .2s ease}
.zp0695 .heroActions a:hover,.zp0695 .primary:hover,.zp0695 .ctaBtn:hover,.zp0695 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0695 nav a,.zp0695 .nav a,.zp0695 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0695 nav a:hover,.zp0695 .nav a:hover,.zp0695 .footer a:hover{
  color:var(--primary)
}
.zp0695 .serviceGrid article,.zp0695 .projectCard,.zp0695 .teamCard,.zp0695 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0695 .serviceGrid article:hover,.zp0695 .projectCard:hover,.zp0695 .teamCard:hover,.zp0695 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0695 *,.zp0695 *::before,.zp0695 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0695 a,.zp0695 button,.zp0695 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
