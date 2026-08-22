import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0297-tourism-postmodern", "family": "Postmodern", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|community-led|proof>comparison>schedule>awards>services>location>values|hairline|slab", "industry": "tourism", "hero": "poster", "navigation": "fullscreen-menu", "layout": "community-led"};

export default function Template0297({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0297" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0297{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0297 *{box-sizing:border-box}
.zp0297 a{color:inherit;text-decoration:none}
.zp0297 h1,.zp0297 h2,.zp0297 h3,.zp0297 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0297 img{max-width:100%;display:block}
.zp0297 button,.zp0297 a{-webkit-tap-highlight-color:transparent}
.zp0297 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0297 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0297 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0297 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0297 .nav.menu details{position:relative}
.zp0297 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0297 .mobileMenu{display:none}
.zp0297 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0297 .eyebrow,.zp0297 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0297 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0297 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0297 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0297 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0297 .posterTop,.zp0297 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0297 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0297 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0297 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0297 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0297 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0297 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0297 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0297 .serviceGrid p{color:var(--muted)}
.zp0297 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0297 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0297 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0297 details{border-top:1px solid var(--border);padding:20px 0}
.zp0297 details summary{font-weight:800;cursor:pointer}
.zp0297 details p{color:var(--muted);max-width:70ch}
.zp0297 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0297 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0297 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0297 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0297 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Rockwell, Courier New, serif;letter-spacing:-.04em;max-width:17ch}
.zp0297 .awards>div{max-width:800px;margin-left:auto}
.zp0297 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0297 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0297 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0297 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0297 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0297 .contact .eyebrow{color:var(--bg)}
.zp0297 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0297 .contactMeta{display:grid;gap:10px}
.zp0297 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-296{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0297 .hero{min-height:auto}
.zp0297 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0297 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0297 .nav nav{display:none}
.zp0297 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0297 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0297 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0297 .mobileMenu nav a{padding:10px 8px}
.zp0297 .hero{grid-template-columns:1fr}
.zp0297 .section,.zp0297 .sectionTitle,.zp0297 .location,.zp0297 .contact{grid-template-columns:1fr}
.zp0297 .section{display:block}}
@media(max-width:430px){.zp0297{font-size:16px}
.zp0297 .hero,.zp0297 .section,.zp0297 .contact{padding-left:18px;padding-right:18px}
.zp0297 .serviceGrid,.zp0297 .proof,.zp0297 .compareGrid{grid-template-columns:1fr}
.zp0297 h1{font-size:clamp(42px,14vw,70px)}
.zp0297 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0297 .heroActions a,.zp0297 .primary,.zp0297 .ctaBtn,.zp0297 .btnPrimary,.zp0297 .schedule>a,.zp0297 .newsletter>a{transition:all .2s ease}
.zp0297 .heroActions a:hover,.zp0297 .primary:hover,.zp0297 .ctaBtn:hover,.zp0297 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0297 nav a,.zp0297 .nav a,.zp0297 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0297 nav a:hover,.zp0297 .nav a:hover,.zp0297 .footer a:hover{
  color:var(--primary)
}
.zp0297 .serviceGrid article,.zp0297 .projectCard,.zp0297 .teamCard,.zp0297 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0297 .serviceGrid article:hover,.zp0297 .projectCard:hover,.zp0297 .teamCard:hover,.zp0297 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0297 *,.zp0297 *::before,.zp0297 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0297 a,.zp0297 button,.zp0297 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
