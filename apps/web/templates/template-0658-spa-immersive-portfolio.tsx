import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0658-spa-immersive-portfolio", "family": "Immersive Portfolio", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|service-catalogue|collection>proof>values>services>security|borderless|retro-bookish", "industry": "spa", "hero": "gallery-wall", "navigation": "tabbed", "layout": "service-catalogue"};

export default function Template0658({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Day Spa");
  const headline = String(content.headline || "A restorative pause with thoughtful treatments, quiet spaces, and easy booking.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage", "Facials", "Body treatments", "Rituals", "Memberships"];
  const industryLabel = "Day spa";
  const serviceNotes = ["ESPA and Elemis trained therapists with ongoing annual certification.", "Treatment programme design: 3 or 6-session plans with outcome-focused protocols.", "Couples' spa days with private suite, champagne, and shared treatment sequence.", "Thermal suite access included in all treatment bookings: pool, sauna, and steam.", "Corporate wellness days with catering, treatments, and meeting space combined."];
  const proofPoints = ["Luxury Guild accredited", "Thermal suite and vitality pool", "Corporate packages available", "Gift vouchers online"];
  const testimonial = "The therapist spent 10 minutes asking about what I needed before any treatment. The session was precisely right.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0658" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0658{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0658 *{box-sizing:border-box}
.zp0658 a{color:inherit;text-decoration:none}
.zp0658 h1,.zp0658 h2,.zp0658 h3,.zp0658 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0658 img{max-width:100%;display:block}
.zp0658 button,.zp0658 a{-webkit-tap-highlight-color:transparent}
.zp0658 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0658 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0658 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0658 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0658 .mobileMenu{display:none}
.zp0658 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0658 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0658 .eyebrow,.zp0658 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0658 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0658 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0658 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0658 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0658 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0658 .wallHero{grid-template-columns:1fr 1fr}
.zp0658 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0658 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0658 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0658 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0658 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0658 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0658 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0658 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0658 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0658 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0658 .serviceGrid p{color:var(--muted)}
.zp0658 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0658 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0658 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0658 details{border-top:1px solid var(--border);padding:20px 0}
.zp0658 details summary{font-weight:800;cursor:pointer}
.zp0658 details p{color:var(--muted);max-width:70ch}
.zp0658 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0658 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0658 .p1,.zp0658 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0658 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Bookman Old Style, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0658 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0658 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0658 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0658 .contact .eyebrow{color:var(--bg)}
.zp0658 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0658 .contactMeta{display:grid;gap:10px}
.zp0658 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0658 .heroCopy{animation:enter-657 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-657{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0658 .hero{min-height:auto}
.zp0658 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0658 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0658 .nav nav{display:none}
.zp0658 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0658 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0658 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0658 .mobileMenu nav a{padding:10px 8px}
.zp0658 .hero,.zp0658 .wallHero{grid-template-columns:1fr}
.zp0658 .section,.zp0658 .sectionTitle,.zp0658 .security,.zp0658 .contact{grid-template-columns:1fr}
.zp0658 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0658 .section{display:block}}
@media(max-width:430px){.zp0658{font-size:16px}
.zp0658 .hero,.zp0658 .section,.zp0658 .contact{padding-left:18px;padding-right:18px}
.zp0658 .serviceGrid,.zp0658 .proof,.zp0658 .collectionGrid{grid-template-columns:1fr}
.zp0658 h1{font-size:clamp(42px,14vw,70px)}}

.zp0658 .heroActions a,.zp0658 .primary,.zp0658 .ctaBtn,.zp0658 .btnPrimary,.zp0658 .schedule>a,.zp0658 .newsletter>a{transition:all .2s ease}
.zp0658 .heroActions a:hover,.zp0658 .primary:hover,.zp0658 .ctaBtn:hover,.zp0658 .btnPrimary:hover{
  opacity:.8
}
.zp0658 nav a,.zp0658 .nav a,.zp0658 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0658 nav a:hover,.zp0658 .nav a:hover,.zp0658 .footer a:hover{
  opacity:.65
}
.zp0658 .serviceGrid article,.zp0658 .projectCard,.zp0658 .teamCard,.zp0658 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0658 .serviceGrid article:hover,.zp0658 .projectCard:hover,.zp0658 .teamCard:hover,.zp0658 .bentoCard:hover{
  transform:scale(1.03)
}
@media(prefers-reduced-motion:reduce){.zp0658 *,.zp0658 *::before,.zp0658 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0658 a,.zp0658 button,.zp0658 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Immersive Portfolio / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
