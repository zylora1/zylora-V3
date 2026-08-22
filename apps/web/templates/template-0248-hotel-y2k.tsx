import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0248-hotel-y2k", "family": "Y2K", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|booking-led|location>services>proof>products>collection>availability|micro-radius|newspaper", "industry": "hotel", "hero": "video-frame", "navigation": "corner-dock", "layout": "booking-led"};

export default function Template0248({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Boutique Hotel");
  const headline = String(content.headline || "A design-led stay shaped by place, quiet details, and genuinely useful hospitality.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Rooms and suites", "Dining", "Spa", "Private events", "Local experiences"];
  const industryLabel = "Boutique hotel";
  const serviceNotes = ["Rooms from studio to suite, each styled individually — no two are identical.", "Breakfast sourced within 30 miles: menus change with the seasons.", "Concierge-arranged experiences: hiking guides, private dining, gallery access.", "Business facilities including private meeting rooms with AV and catering.", "Flexible check-in and late check-out on request — we work around your plans."];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0248" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0248{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0248 *{box-sizing:border-box}
.zp0248 a{color:inherit;text-decoration:none}
.zp0248 h1,.zp0248 h2,.zp0248 h3,.zp0248 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0248 img{max-width:100%;display:block}
.zp0248 button,.zp0248 a{-webkit-tap-highlight-color:transparent}
.zp0248 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0248 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0248 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0248 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0248 .mobileMenu{display:none}
.zp0248 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0248 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0248 .eyebrow,.zp0248 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0248 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0248 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0248 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0248 .heroActions a,.zp0248 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0248 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0248 .visual,.zp0248 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0248 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0248 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0248 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0248 .heroPhoto{object-fit:cover}
.zp0248 .videoHero{grid-template-columns:1fr 1fr}
.zp0248 .videoFrame{position:relative}
.zp0248 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0248 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0248 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0248 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0248 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0248 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0248 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0248 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0248 .serviceGrid p{color:var(--muted)}
.zp0248 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0248 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0248 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0248 details{border-top:1px solid var(--border);padding:20px 0}
.zp0248 details summary{font-weight:800;cursor:pointer}
.zp0248 details p{color:var(--muted);max-width:70ch}
.zp0248 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0248 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0248 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0248 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0248 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0248 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0248 .p1,.zp0248 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0248 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0248 .contact .eyebrow{color:var(--bg)}
.zp0248 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0248 .contactMeta{display:grid;gap:10px}
.zp0248 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0248 .heroCopy{animation:enter-247 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-247{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0248 .hero{min-height:auto}
.zp0248 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0248 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0248 .nav nav{display:none}
.zp0248 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0248 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0248 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0248 .mobileMenu nav a{padding:10px 8px}
.zp0248 .hero,.zp0248 .videoHero{grid-template-columns:1fr}
.zp0248 .section,.zp0248 .sectionTitle,.zp0248 .location,.zp0248 .contact{grid-template-columns:1fr}
.zp0248 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0248 .section{display:block}}
@media(max-width:430px){.zp0248{font-size:16px}
.zp0248 .hero,.zp0248 .section,.zp0248 .contact{padding-left:18px;padding-right:18px}
.zp0248 .serviceGrid,.zp0248 .proof,.zp0248 .collectionGrid{grid-template-columns:1fr}
.zp0248 h1{font-size:clamp(42px,14vw,70px)}}

.zp0248 .heroActions a,.zp0248 .primary,.zp0248 .ctaBtn,.zp0248 .btnPrimary,.zp0248 .schedule>a,.zp0248 .newsletter>a{transition:all .2s ease}
.zp0248 .heroActions a:hover,.zp0248 .primary:hover,.zp0248 .ctaBtn:hover,.zp0248 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.03)
}
.zp0248 nav a,.zp0248 .nav a,.zp0248 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0248 nav a:hover,.zp0248 .nav a:hover,.zp0248 .footer a:hover{
  color:var(--primary)
}
.zp0248 .serviceGrid article,.zp0248 .projectCard,.zp0248 .teamCard,.zp0248 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0248 .serviceGrid article:hover,.zp0248 .projectCard:hover,.zp0248 .teamCard:hover,.zp0248 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0248 *,.zp0248 *::before,.zp0248 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0248 a,.zp0248 button,.zp0248 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">47</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Y2K / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
