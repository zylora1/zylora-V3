import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0095-gym-maximalism", "family": "Maximalism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|manifesto-grid|packages>location>integrations>proof>services>collection|soft-12|clean-humanist", "industry": "gym", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "manifesto-grid"};

export default function Template0095({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Training Gym");
  const headline = String(content.headline || "Coaching-led training for people who want structure, progress, and accountability.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strength coaching", "Small-group training", "Open gym", "Mobility sessions", "Performance testing"];
  const industryLabel = "Training gym";
  const serviceNotes = ["Open 24 hours so your schedule drives your training, not ours.", "Strength, cardio, and functional zones across 600+ sq metres of equipment.", "Personal training with coaches who build programmes around your goals, not templates.", "Monthly fitness assessments to track progress and adjust your plan.", "Recovery studio with sauna, ice bath, and stretch space included in membership."];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0095" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0095{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0095 *{box-sizing:border-box}
.zp0095 a{color:inherit;text-decoration:none}
.zp0095 h1,.zp0095 h2,.zp0095 h3,.zp0095 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0095 img{max-width:100%;display:block}
.zp0095 button,.zp0095 a{-webkit-tap-highlight-color:transparent}
.zp0095 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0095 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0095 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0095 .mobileMenu{display:none}
.zp0095:has(.navRail)>.hero,.zp0095:has(.navRail)>.section,.zp0095:has(.navRail)>.contact,.zp0095:has(.navRail)>.footer{margin-left:190px}
.zp0095 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0095 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0095 .eyebrow,.zp0095 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0095 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0095 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0095 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0095 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0095 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0095 .canvasHero{overflow:hidden}
.zp0095 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0095 .canvasGrid i{border-right:1px solid var(--border)}
.zp0095 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0095 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0095 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0095 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0095 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0095 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0095 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0095 .serviceGrid p{color:var(--muted)}
.zp0095 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0095 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0095 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0095 details{border-top:1px solid var(--border);padding:20px 0}
.zp0095 details summary{font-weight:800;cursor:pointer}
.zp0095 details p{color:var(--muted);max-width:70ch}
.zp0095 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0095 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0095 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0095 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0095 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0095 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0095 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0095 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0095 .p1,.zp0095 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0095 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0095 .packages>.sectionTitle{grid-column:1/-1}
.zp0095 .packages article{padding:24px;border:1px solid var(--border)}
.zp0095 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0095 .contact .eyebrow{color:var(--bg)}
.zp0095 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0095 .contactMeta{display:grid;gap:10px}
.zp0095 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0095 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-6deg)}
.zp0095 .heroCopy{animation:enter-94 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-94{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0095 .hero{min-height:auto}
.zp0095 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0095 .proof{grid-template-columns:1fr 1fr}
.zp0095 .packages{grid-template-columns:1fr 1fr}
.zp0095 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0095 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0095 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0095 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0095 .mobileMenu nav a{padding:10px 8px}
.zp0095 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0095:has(.navRail)>.hero,.zp0095:has(.navRail)>.section,.zp0095:has(.navRail)>.contact,.zp0095:has(.navRail)>.footer{margin-left:0}
.zp0095 .hero{grid-template-columns:1fr}
.zp0095 .section,.zp0095 .sectionTitle,.zp0095 .location,.zp0095 .contact{grid-template-columns:1fr}
.zp0095 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0095 .section{display:block}}
@media(max-width:430px){.zp0095{font-size:16px}
.zp0095 .hero,.zp0095 .section,.zp0095 .contact{padding-left:18px;padding-right:18px}
.zp0095 .serviceGrid,.zp0095 .proof,.zp0095 .collectionGrid,.zp0095 .packages{grid-template-columns:1fr}
.zp0095 h1{font-size:clamp(42px,14vw,70px)}}

.zp0095 .heroActions a,.zp0095 .primary,.zp0095 .ctaBtn,.zp0095 .btnPrimary,.zp0095 .schedule>a,.zp0095 .newsletter>a{transition:all .2s ease}
.zp0095 .heroActions a:hover,.zp0095 .primary:hover,.zp0095 .ctaBtn:hover,.zp0095 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0095 nav a,.zp0095 .nav a,.zp0095 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0095 nav a:hover,.zp0095 .nav a:hover,.zp0095 .footer a:hover{
  color:var(--primary)
}
.zp0095 .serviceGrid article,.zp0095 .projectCard,.zp0095 .teamCard,.zp0095 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0095 .serviceGrid article:hover,.zp0095 .projectCard:hover,.zp0095 .teamCard:hover,.zp0095 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0095 *,.zp0095 *::before,.zp0095 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0095 a,.zp0095 button,.zp0095 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
