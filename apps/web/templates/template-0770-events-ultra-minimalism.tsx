import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0770-events-ultra-minimalism", "family": "Ultra Minimalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "tabbed|layered-photography|masonry-story|proof>testimonial>availability>features>services>newsletter|borderless|modernist-duo", "industry": "events", "hero": "layered-photography", "navigation": "tabbed", "layout": "masonry-story"};

export default function Template0770({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Morrow Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Lumen client";
  const team = [{"name": "Aster Lead", "role": "Principal / Lead"}, {"name": "Vale Team", "role": "Client experience"}, {"name": "Civic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0770" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0770{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0770 *{box-sizing:border-box}
.zp0770 a{color:inherit;text-decoration:none}
.zp0770 h1,.zp0770 h2,.zp0770 h3,.zp0770 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0770 img{max-width:100%;display:block}
.zp0770 button,.zp0770 a{-webkit-tap-highlight-color:transparent}
.zp0770 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0770 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0770 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0770 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0770 .mobileMenu{display:none}
.zp0770 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0770 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0770 .eyebrow,.zp0770 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0770 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0770 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0770 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0770 .heroActions a,.zp0770 .schedule>a,.zp0770 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0770 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0770 .visual,.zp0770 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0770 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0770 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0770 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0770 .heroPhoto{object-fit:cover}
.zp0770 .layeredHero{grid-template-columns:0.85fr 1.15fr}
.zp0770 .layered{position:relative;padding:8%}
.zp0770 .layerCard{position:absolute;right:0;bottom:3%;background:var(--primary);color:var(--primary-fg);padding:22px;transform:rotate(-4deg)}
.zp0770 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0770 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0770 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0770 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0770 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0770 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0770 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0770 .serviceGrid p{color:var(--muted)}
.zp0770 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0770 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0770 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0770 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0770 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0770 .testimonial>div{align-self:end}
.zp0770 .testimonial span{display:block;opacity:.7}
.zp0770 details{border-top:1px solid var(--border);padding:20px 0}
.zp0770 details summary{font-weight:800;cursor:pointer}
.zp0770 details p{color:var(--muted);max-width:70ch}
.zp0770 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0770 .features ul{list-style:none;margin:0;padding:0}
.zp0770 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0770 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0770 .schedule,.zp0770 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0770 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0770 .contact .eyebrow{color:var(--bg)}
.zp0770 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0770 .contactMeta{display:grid;gap:10px}
.zp0770 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0770 .heroCopy{animation:enter-769 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-769{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0770 .hero{min-height:auto}
.zp0770 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0770 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0770 .nav nav{display:none}
.zp0770 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0770 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0770 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0770 .mobileMenu nav a{padding:10px 8px}
.zp0770 .hero,.zp0770 .layeredHero{grid-template-columns:1fr}
.zp0770 .section,.zp0770 .sectionTitle,.zp0770 .features,.zp0770 .contact{grid-template-columns:1fr}
.zp0770 .testimonial{grid-template-columns:1fr}
.zp0770 .section{display:block}}
@media(max-width:430px){.zp0770{font-size:16px}
.zp0770 .hero,.zp0770 .section,.zp0770 .contact{padding-left:18px;padding-right:18px}
.zp0770 .serviceGrid,.zp0770 .proof{grid-template-columns:1fr}
.zp0770 h1{font-size:clamp(42px,14vw,70px)}}

.zp0770 .heroActions a,.zp0770 .primary,.zp0770 .ctaBtn,.zp0770 .btnPrimary,.zp0770 .schedule>a,.zp0770 .newsletter>a{transition:all .2s ease}
.zp0770 .heroActions a:hover,.zp0770 .primary:hover,.zp0770 .ctaBtn:hover,.zp0770 .btnPrimary:hover{
  opacity:.75
}
.zp0770 nav a,.zp0770 .nav a,.zp0770 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0770 nav a:hover,.zp0770 .nav a:hover,.zp0770 .footer a:hover{
  opacity:.6
}
.zp0770 .serviceGrid article,.zp0770 .projectCard,.zp0770 .teamCard,.zp0770 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0770 .serviceGrid article:hover,.zp0770 .projectCard:hover,.zp0770 .teamCard:hover,.zp0770 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0770 *,.zp0770 *::before,.zp0770 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0770 a,.zp0770 button,.zp0770 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero layeredHero"><div className="layered">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">69</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="layerCard">{businessName}</div></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
