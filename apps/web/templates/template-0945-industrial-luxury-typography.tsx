import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0945-industrial-luxury-typography", "family": "Luxury Typography", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|community-led|testimonial>proof>products>services>location>security>manifesto|square-editorial|slab", "industry": "industrial", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "community-led"};

export default function Template0945({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Industrial Supplier");
  const headline = String(content.headline || "Technical products, practical documentation, and responsive support for critical operations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Equipment", "Parts", "Engineering support", "Maintenance", "Procurement"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Mosaic client";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Industrial supplier / Project A", "Industrial supplier / Project B", "Industrial supplier / Project C", "Industrial supplier / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Technical products, practical documentation, and responsive support for critical operations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0945" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0945{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0945 *{box-sizing:border-box}
.zp0945 a{color:inherit;text-decoration:none}
.zp0945 h1,.zp0945 h2,.zp0945 h3,.zp0945 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0945 img{max-width:100%;display:block}
.zp0945 button,.zp0945 a{-webkit-tap-highlight-color:transparent}
.zp0945 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0945 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0945 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0945 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0945 .mobileMenu{display:none}
.zp0945 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0945 .eyebrow,.zp0945 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0945 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0945 .visual,.zp0945 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0945 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0945 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0945 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0945 .heroPhoto{object-fit:cover}
.zp0945 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0945 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0945 .coverCaption{align-self:end}
.zp0945 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0945 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0945 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0945 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0945 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0945 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0945 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0945 .serviceGrid p{color:var(--muted)}
.zp0945 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0945 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0945 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0945 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0945 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0945 .testimonial>div{align-self:end}
.zp0945 .testimonial span{display:block;opacity:.7}
.zp0945 details{border-top:1px solid var(--border);padding:20px 0}
.zp0945 details summary{font-weight:800;cursor:pointer}
.zp0945 details p{color:var(--muted);max-width:70ch}
.zp0945 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0945 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0945 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0945 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0945 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0945 .p1,.zp0945 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0945 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Rockwell, Courier New, serif;letter-spacing:-.04em;max-width:17ch}
.zp0945 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0945 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0945 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0945 .contact .eyebrow{color:var(--bg)}
.zp0945 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0945 .contactMeta{display:grid;gap:10px}
.zp0945 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-944{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0945 .hero{min-height:auto}
.zp0945 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0945 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0945 .nav nav{display:none}
.zp0945 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0945 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0945 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0945 .mobileMenu nav a{padding:10px 8px}
.zp0945 .hero,.zp0945 .coverHero{grid-template-columns:1fr}
.zp0945 .section,.zp0945 .sectionTitle,.zp0945 .location,.zp0945 .security,.zp0945 .contact{grid-template-columns:1fr}
.zp0945 .testimonial{grid-template-columns:1fr}
.zp0945 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0945 .section{display:block}}
@media(max-width:430px){.zp0945{font-size:16px}
.zp0945 .hero,.zp0945 .section,.zp0945 .contact{padding-left:18px;padding-right:18px}
.zp0945 .serviceGrid,.zp0945 .proof,.zp0945 .collectionGrid{grid-template-columns:1fr}
.zp0945 h1{font-size:clamp(42px,14vw,70px)}}

.zp0945 .heroActions a,.zp0945 .primary,.zp0945 .ctaBtn,.zp0945 .btnPrimary,.zp0945 .schedule>a,.zp0945 .newsletter>a{transition:all .2s ease}
.zp0945 .heroActions a:hover,.zp0945 .primary:hover,.zp0945 .ctaBtn:hover,.zp0945 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0945 nav a,.zp0945 .nav a,.zp0945 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0945 nav a:hover,.zp0945 .nav a:hover,.zp0945 .footer a:hover{
  opacity:.65
}
.zp0945 .serviceGrid article,.zp0945 .projectCard,.zp0945 .teamCard,.zp0945 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0945 .serviceGrid article:hover,.zp0945 .projectCard:hover,.zp0945 .teamCard:hover,.zp0945 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0945 *,.zp0945 *::before,.zp0945 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0945 a,.zp0945 button,.zp0945 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0945</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">44</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
