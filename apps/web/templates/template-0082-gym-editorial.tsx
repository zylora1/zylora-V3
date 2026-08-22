import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0082-gym-editorial", "family": "Editorial", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|service-catalogue|location>projects>research>proof>services|borderless|retro-bookish", "industry": "gym", "hero": "gallery-wall", "navigation": "tabbed", "layout": "service-catalogue"};

export default function Template0082({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Training Gym");
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
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0082" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0082{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0082 *{box-sizing:border-box}
.zp0082 a{color:inherit;text-decoration:none}
.zp0082 h1,.zp0082 h2,.zp0082 h3,.zp0082 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0082 img{max-width:100%;display:block}
.zp0082 button,.zp0082 a{-webkit-tap-highlight-color:transparent}
.zp0082 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0082 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0082 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0082 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0082 .mobileMenu{display:none}
.zp0082 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0082 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0082 .eyebrow,.zp0082 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0082 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0082 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0082 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0082 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0082 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0082 .wallHero{grid-template-columns:1fr 1fr}
.zp0082 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0082 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0082 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0082 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0082 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0082 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0082 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0082 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0082 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0082 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0082 .serviceGrid p{color:var(--muted)}
.zp0082 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0082 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0082 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0082 details{border-top:1px solid var(--border);padding:20px 0}
.zp0082 details summary{font-weight:800;cursor:pointer}
.zp0082 details p{color:var(--muted);max-width:70ch}
.zp0082 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0082 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0082 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0082 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0082 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0082 .projects article:nth-child(2){transform:translateY(32px)}
.zp0082 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0082 .researchRows{max-width:900px;margin-left:auto}
.zp0082 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0082 .contact .eyebrow{color:var(--bg)}
.zp0082 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0082 .contactMeta{display:grid;gap:10px}
.zp0082 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0082 .heroCopy{animation:enter-81 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-81{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0082 .hero{min-height:auto}
.zp0082 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0082 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0082 .nav nav{display:none}
.zp0082 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0082 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0082 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0082 .mobileMenu nav a{padding:10px 8px}
.zp0082 .hero,.zp0082 .wallHero{grid-template-columns:1fr}
.zp0082 .section,.zp0082 .sectionTitle,.zp0082 .location,.zp0082 .contact{grid-template-columns:1fr}
.zp0082 .projects .projectGrid{grid-template-columns:1fr}
.zp0082 .projects article:nth-child(2){transform:none}
.zp0082 .section{display:block}}
@media(max-width:430px){.zp0082{font-size:16px}
.zp0082 .hero,.zp0082 .section,.zp0082 .contact{padding-left:18px;padding-right:18px}
.zp0082 .serviceGrid,.zp0082 .proof{grid-template-columns:1fr}
.zp0082 h1{font-size:clamp(42px,14vw,70px)}}

.zp0082 .heroActions a,.zp0082 .primary,.zp0082 .ctaBtn,.zp0082 .btnPrimary,.zp0082 .schedule>a,.zp0082 .newsletter>a{transition:all .2s ease}
.zp0082 .heroActions a:hover,.zp0082 .primary:hover,.zp0082 .ctaBtn:hover,.zp0082 .btnPrimary:hover{
  opacity:.8
}
.zp0082 nav a,.zp0082 .nav a,.zp0082 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0082 nav a:hover,.zp0082 .nav a:hover,.zp0082 .footer a:hover{
  color:var(--primary)
}
.zp0082 .serviceGrid article,.zp0082 .projectCard,.zp0082 .teamCard,.zp0082 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0082 .serviceGrid article:hover,.zp0082 .projectCard:hover,.zp0082 .teamCard:hover,.zp0082 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0082 *,.zp0082 *::before,.zp0082 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0082 a,.zp0082 button,.zp0082 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Editorial / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
