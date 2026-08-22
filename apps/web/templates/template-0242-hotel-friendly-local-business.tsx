import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0242-hotel-friendly-local-business", "family": "Friendly Local Business", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|menu-led|availability>proof>services>menu>process>metrics|borderless|modernist-duo", "industry": "hotel", "hero": "gallery-wall", "navigation": "tabbed", "layout": "menu-led"};

export default function Template0242({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Boutique Hotel");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0242" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0242{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0242 *{box-sizing:border-box}
.zp0242 a{color:inherit;text-decoration:none}
.zp0242 h1,.zp0242 h2,.zp0242 h3,.zp0242 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0242 img{max-width:100%;display:block}
.zp0242 button,.zp0242 a{-webkit-tap-highlight-color:transparent}
.zp0242 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0242 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0242 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0242 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0242 .mobileMenu{display:none}
.zp0242 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0242 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0242 .eyebrow,.zp0242 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0242 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0242 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0242 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0242 .heroActions a,.zp0242 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0242 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0242 .wallHero{grid-template-columns:1fr 1fr}
.zp0242 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0242 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0242 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0242 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0242 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0242 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0242 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0242 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0242 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0242 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0242 .serviceGrid p{color:var(--muted)}
.zp0242 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0242 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0242 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0242 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0242 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0242 details{border-top:1px solid var(--border);padding:20px 0}
.zp0242 details summary{font-weight:800;cursor:pointer}
.zp0242 details p{color:var(--muted);max-width:70ch}
.zp0242 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0242 .metrics div{background:var(--bg);padding:30px}
.zp0242 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Futura, Avenir, Arial, sans-serif;color:var(--primary)}
.zp0242 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0242 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0242 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0242 .contact .eyebrow{color:var(--bg)}
.zp0242 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0242 .contactMeta{display:grid;gap:10px}
.zp0242 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0242 .heroCopy{animation:enter-241 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-241{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0242 .hero{min-height:auto}
.zp0242 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0242 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0242 .nav nav{display:none}
.zp0242 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0242 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0242 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0242 .mobileMenu nav a{padding:10px 8px}
.zp0242 .hero,.zp0242 .wallHero{grid-template-columns:1fr}
.zp0242 .section,.zp0242 .sectionTitle,.zp0242 .contact{grid-template-columns:1fr}
.zp0242 .metrics{grid-template-columns:1fr 1fr}
.zp0242 .section{display:block}}
@media(max-width:430px){.zp0242{font-size:16px}
.zp0242 .hero,.zp0242 .section,.zp0242 .contact{padding-left:18px;padding-right:18px}
.zp0242 .serviceGrid,.zp0242 .proof,.zp0242 .metrics{grid-template-columns:1fr}
.zp0242 h1{font-size:clamp(42px,14vw,70px)}}

.zp0242 .heroActions a,.zp0242 .primary,.zp0242 .ctaBtn,.zp0242 .btnPrimary,.zp0242 .schedule>a,.zp0242 .newsletter>a{transition:all .2s ease}
.zp0242 .heroActions a:hover,.zp0242 .primary:hover,.zp0242 .ctaBtn:hover,.zp0242 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0242 nav a,.zp0242 .nav a,.zp0242 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0242 nav a:hover,.zp0242 .nav a:hover,.zp0242 .footer a:hover{
  color:var(--primary)
}
.zp0242 .serviceGrid article,.zp0242 .projectCard,.zp0242 .teamCard,.zp0242 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0242 .serviceGrid article:hover,.zp0242 .projectCard:hover,.zp0242 .teamCard:hover,.zp0242 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0242 *,.zp0242 *::before,.zp0242 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0242 a,.zp0242 button,.zp0242 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
