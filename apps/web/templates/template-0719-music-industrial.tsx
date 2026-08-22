import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0719-music-industrial", "family": "Industrial", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|asymmetric-5-7|services>press>newsletter>testimonial>hours>proof|soft-12|clean-humanist", "industry": "music", "hero": "location-led", "navigation": "vertical-rail", "layout": "asymmetric-5-7"};

export default function Template0719({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Pavilion client";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0719" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0719{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0719 *{box-sizing:border-box}
.zp0719 a{color:inherit;text-decoration:none}
.zp0719 h1,.zp0719 h2,.zp0719 h3,.zp0719 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0719 img{max-width:100%;display:block}
.zp0719 button,.zp0719 a{-webkit-tap-highlight-color:transparent}
.zp0719 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0719 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0719 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0719 .mobileMenu{display:none}
.zp0719:has(.navRail)>.hero,.zp0719:has(.navRail)>.section,.zp0719:has(.navRail)>.contact,.zp0719:has(.navRail)>.footer{margin-left:190px}
.zp0719 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0719 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0719 .eyebrow,.zp0719 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0719 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0719 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0719 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0719 .heroActions a,.zp0719 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0719 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0719 .locationHero{grid-template-columns:1fr 1fr}
.zp0719 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0719 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0719 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0719 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0719 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0719 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0719 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0719 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0719 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0719 .serviceGrid p{color:var(--muted)}
.zp0719 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0719 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0719 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0719 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0719 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0719 .testimonial>div{align-self:end}
.zp0719 .testimonial span{display:block;opacity:.7}
.zp0719 details{border-top:1px solid var(--border);padding:20px 0}
.zp0719 details summary{font-weight:800;cursor:pointer}
.zp0719 details p{color:var(--muted);max-width:70ch}
.zp0719 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0719 .hours dl{margin:0}
.zp0719 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0719 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0719 .awards>div{max-width:800px;margin-left:auto}
.zp0719 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0719 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0719 .contact .eyebrow{color:var(--bg)}
.zp0719 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0719 .contactMeta{display:grid;gap:10px}
.zp0719 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0719 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0719 .heroCopy{animation:enter-718 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-718{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0719 .hero{min-height:auto}
.zp0719 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0719 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0719 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0719 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0719 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0719 .mobileMenu nav a{padding:10px 8px}
.zp0719 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0719:has(.navRail)>.hero,.zp0719:has(.navRail)>.section,.zp0719:has(.navRail)>.contact,.zp0719:has(.navRail)>.footer{margin-left:0}
.zp0719 .hero,.zp0719 .locationHero{grid-template-columns:1fr}
.zp0719 .section,.zp0719 .sectionTitle,.zp0719 .hours,.zp0719 .contact{grid-template-columns:1fr}
.zp0719 .testimonial{grid-template-columns:1fr}
.zp0719 .section{display:block}}
@media(max-width:430px){.zp0719{font-size:16px}
.zp0719 .hero,.zp0719 .section,.zp0719 .contact{padding-left:18px;padding-right:18px}
.zp0719 .serviceGrid,.zp0719 .proof{grid-template-columns:1fr}
.zp0719 h1{font-size:clamp(42px,14vw,70px)}}

.zp0719 .heroActions a,.zp0719 .primary,.zp0719 .ctaBtn,.zp0719 .btnPrimary,.zp0719 .schedule>a,.zp0719 .newsletter>a{transition:all .2s ease}
.zp0719 .heroActions a:hover,.zp0719 .primary:hover,.zp0719 .ctaBtn:hover,.zp0719 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0719 nav a,.zp0719 .nav a,.zp0719 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0719 nav a:hover,.zp0719 .nav a:hover,.zp0719 .footer a:hover{
  color:var(--primary)
}
.zp0719 .serviceGrid article,.zp0719 .projectCard,.zp0719 .teamCard,.zp0719 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0719 .serviceGrid article:hover,.zp0719 .projectCard:hover,.zp0719 .teamCard:hover,.zp0719 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0719 *,.zp0719 *::before,.zp0719 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0719 a,.zp0719 button,.zp0719 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
