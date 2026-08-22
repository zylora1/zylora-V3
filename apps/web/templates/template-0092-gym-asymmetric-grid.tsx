import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0092-gym-asymmetric-grid", "family": "Asymmetric Grid", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|conversion-first|case-study>proof>security>values>products>services|notched|product-ui", "industry": "gym", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "conversion-first"};

export default function Template0092({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Training Gym");
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
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0092" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0092{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0092 *{box-sizing:border-box}
.zp0092 a{color:inherit;text-decoration:none}
.zp0092 h1,.zp0092 h2,.zp0092 h3,.zp0092 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0092 img{max-width:100%;display:block}
.zp0092 button,.zp0092 a{-webkit-tap-highlight-color:transparent}
.zp0092 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0092 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0092 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0092 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0092 .mobileMenu{display:none}
.zp0092 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0092 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0092 .eyebrow,.zp0092 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0092 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0092 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0092 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0092 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0092 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0092 .mapHero{grid-template-columns:1fr 1fr}
.zp0092 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0092 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0092 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0092 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0092 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0092 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0092 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0092 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0092 .serviceGrid p{color:var(--muted)}
.zp0092 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0092 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0092 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0092 details{border-top:1px solid var(--border);padding:20px 0}
.zp0092 details summary{font-weight:800;cursor:pointer}
.zp0092 details p{color:var(--muted);max-width:70ch}
.zp0092 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0092 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0092 .projects article:nth-child(2){transform:translateY(32px)}
.zp0092 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0092 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0092 .p1,.zp0092 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0092 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Segoe UI, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0092 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0092 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0092 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0092 .contact .eyebrow{color:var(--bg)}
.zp0092 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0092 .contactMeta{display:grid;gap:10px}
.zp0092 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0092 .heroCopy{animation:enter-91 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-91{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0092 .hero{min-height:auto}
.zp0092 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0092 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0092 .nav nav{display:none}
.zp0092 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0092 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0092 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0092 .mobileMenu nav a{padding:10px 8px}
.zp0092 .hero,.zp0092 .mapHero{grid-template-columns:1fr}
.zp0092 .section,.zp0092 .sectionTitle,.zp0092 .security,.zp0092 .contact{grid-template-columns:1fr}
.zp0092 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0092 .projects .projectGrid{grid-template-columns:1fr}
.zp0092 .projects article:nth-child(2){transform:none}
.zp0092 .section{display:block}}
@media(max-width:430px){.zp0092{font-size:16px}
.zp0092 .hero,.zp0092 .section,.zp0092 .contact{padding-left:18px;padding-right:18px}
.zp0092 .serviceGrid,.zp0092 .proof,.zp0092 .collectionGrid{grid-template-columns:1fr}
.zp0092 h1{font-size:clamp(42px,14vw,70px)}}

.zp0092 .heroActions a,.zp0092 .primary,.zp0092 .ctaBtn,.zp0092 .btnPrimary,.zp0092 .schedule>a,.zp0092 .newsletter>a{transition:all .2s ease}
.zp0092 .heroActions a:hover,.zp0092 .primary:hover,.zp0092 .ctaBtn:hover,.zp0092 .btnPrimary:hover{
  opacity:.85
}
.zp0092 nav a,.zp0092 .nav a,.zp0092 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0092 nav a:hover,.zp0092 .nav a:hover,.zp0092 .footer a:hover{
  color:var(--primary)
}
.zp0092 .serviceGrid article,.zp0092 .projectCard,.zp0092 .teamCard,.zp0092 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0092 .serviceGrid article:hover,.zp0092 .projectCard:hover,.zp0092 .teamCard:hover,.zp0092 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0092 *,.zp0092 *::before,.zp0092 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0092 a,.zp0092 button,.zp0092 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
