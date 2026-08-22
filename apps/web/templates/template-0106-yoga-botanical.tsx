import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0106-yoga-botanical", "family": "Botanical", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|local-service-map|services>location>schedule>proof>programmes|paper-sheet|retro-bookish", "industry": "yoga", "hero": "service-led", "navigation": "left-sidebar", "layout": "local-service-map"};

export default function Template0106({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const industryLabel = "Yoga studio";
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0106" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0106{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0106 *{box-sizing:border-box}
.zp0106 a{color:inherit;text-decoration:none}
.zp0106 h1,.zp0106 h2,.zp0106 h3,.zp0106 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0106 img{max-width:100%;display:block}
.zp0106 button,.zp0106 a{-webkit-tap-highlight-color:transparent}
.zp0106 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0106 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0106 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0106 .mobileMenu{display:none}
.zp0106:has(.navRail)>.hero,.zp0106:has(.navRail)>.section,.zp0106:has(.navRail)>.contact,.zp0106:has(.navRail)>.footer{margin-left:190px}
.zp0106 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0106 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0106 .eyebrow,.zp0106 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0106 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0106 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0106 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0106 .heroActions a,.zp0106 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0106 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0106 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0106 .serviceHeroList{display:grid;gap:4px}
.zp0106 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0106 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0106 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0106 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0106 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0106 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0106 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0106 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0106 .serviceGrid p{color:var(--muted)}
.zp0106 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0106 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0106 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0106 details{border-top:1px solid var(--border);padding:20px 0}
.zp0106 details summary{font-weight:800;cursor:pointer}
.zp0106 details p{color:var(--muted);max-width:70ch}
.zp0106 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0106 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0106 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0106 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0106 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0106 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0106 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0106 .contact .eyebrow{color:var(--bg)}
.zp0106 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0106 .contactMeta{display:grid;gap:10px}
.zp0106 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0106 .heroCopy{animation:enter-105 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-105{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0106 .hero{min-height:auto}
.zp0106 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0106 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0106 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0106 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0106 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0106 .mobileMenu nav a{padding:10px 8px}
.zp0106 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0106:has(.navRail)>.hero,.zp0106:has(.navRail)>.section,.zp0106:has(.navRail)>.contact,.zp0106:has(.navRail)>.footer{margin-left:0}
.zp0106 .hero,.zp0106 .serviceHero{grid-template-columns:1fr}
.zp0106 .section,.zp0106 .sectionTitle,.zp0106 .location,.zp0106 .contact{grid-template-columns:1fr}
.zp0106 .section{display:block}}
@media(max-width:430px){.zp0106{font-size:16px}
.zp0106 .hero,.zp0106 .section,.zp0106 .contact{padding-left:18px;padding-right:18px}
.zp0106 .serviceGrid,.zp0106 .proof,.zp0106 .programmes>div:last-child{grid-template-columns:1fr}
.zp0106 h1{font-size:clamp(42px,14vw,70px)}}

.zp0106 .heroActions a,.zp0106 .primary,.zp0106 .ctaBtn,.zp0106 .btnPrimary,.zp0106 .schedule>a,.zp0106 .newsletter>a{transition:all .2s ease}
.zp0106 .heroActions a:hover,.zp0106 .primary:hover,.zp0106 .ctaBtn:hover,.zp0106 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0106 nav a,.zp0106 .nav a,.zp0106 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0106 nav a:hover,.zp0106 .nav a:hover,.zp0106 .footer a:hover{
  color:var(--primary)
}
.zp0106 .serviceGrid article,.zp0106 .projectCard,.zp0106 .teamCard,.zp0106 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0106 .serviceGrid article:hover,.zp0106 .projectCard:hover,.zp0106 .teamCard:hover,.zp0106 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0106 *,.zp0106 *::before,.zp0106 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0106 a,.zp0106 button,.zp0106 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
