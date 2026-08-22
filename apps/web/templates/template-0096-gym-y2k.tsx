import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0096-gym-y2k", "family": "Y2K", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|property-led|packages>credentials>services>schedule>process>proof>case-study|heavy-frame|terminal", "industry": "gym", "hero": "data-led", "navigation": "centered-logo", "layout": "property-led"};

export default function Template0096({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Training Gym");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0096" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0096{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0096 *{box-sizing:border-box}
.zp0096 a{color:inherit;text-decoration:none}
.zp0096 h1,.zp0096 h2,.zp0096 h3,.zp0096 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0096 img{max-width:100%;display:block}
.zp0096 button,.zp0096 a{-webkit-tap-highlight-color:transparent}
.zp0096 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0096 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0096 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0096 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0096 .nav.centered strong{order:2;font-size:24px}
.zp0096 .nav.centered nav:first-child{order:1}
.zp0096 .nav.centered nav:last-child{order:3}
.zp0096 .mobileMenu{display:none}
.zp0096 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0096 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0096 .eyebrow,.zp0096 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0096 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0096 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0096 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0096 .heroActions a,.zp0096 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0096 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0096 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0096 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0096 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0096 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0096 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0096 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0096 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0096 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0096 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0096 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0096 .serviceGrid p{color:var(--muted)}
.zp0096 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0096 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0096 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0096 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0096 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0096 details{border-top:1px solid var(--border);padding:20px 0}
.zp0096 details summary{font-weight:800;cursor:pointer}
.zp0096 details p{color:var(--muted);max-width:70ch}
.zp0096 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0096 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0096 .projects article:nth-child(2){transform:translateY(32px)}
.zp0096 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0096 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0096 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0096 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0096 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0096 .packages>.sectionTitle{grid-column:1/-1}
.zp0096 .packages article{padding:24px;border:1px solid var(--border)}
.zp0096 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0096 .contact .eyebrow{color:var(--bg)}
.zp0096 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0096 .contactMeta{display:grid;gap:10px}
.zp0096 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0096 .heroCopy{animation:enter-95 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-95{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0096 .hero{min-height:auto}
.zp0096 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0096 .proof{grid-template-columns:1fr 1fr}
.zp0096 .packages{grid-template-columns:1fr 1fr}
.zp0096 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0096 .nav nav{display:none}
.zp0096 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0096 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0096 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0096 .mobileMenu nav a{padding:10px 8px}
.zp0096 .hero,.zp0096 .dataHero{grid-template-columns:1fr}
.zp0096 .section,.zp0096 .sectionTitle,.zp0096 .contact{grid-template-columns:1fr}
.zp0096 .projects .projectGrid{grid-template-columns:1fr}
.zp0096 .projects article:nth-child(2){transform:none}
.zp0096 .section{display:block}}
@media(max-width:430px){.zp0096{font-size:16px}
.zp0096 .hero,.zp0096 .section,.zp0096 .contact{padding-left:18px;padding-right:18px}
.zp0096 .serviceGrid,.zp0096 .proof,.zp0096 .packages{grid-template-columns:1fr}
.zp0096 h1{font-size:clamp(42px,14vw,70px)}}

.zp0096 .heroActions a,.zp0096 .primary,.zp0096 .ctaBtn,.zp0096 .btnPrimary,.zp0096 .schedule>a,.zp0096 .newsletter>a{transition:all .2s ease}
.zp0096 .heroActions a:hover,.zp0096 .primary:hover,.zp0096 .ctaBtn:hover,.zp0096 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.03)
}
.zp0096 nav a,.zp0096 .nav a,.zp0096 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0096 nav a:hover,.zp0096 .nav a:hover,.zp0096 .footer a:hover{
  color:var(--primary)
}
.zp0096 .serviceGrid article,.zp0096 .projectCard,.zp0096 .teamCard,.zp0096 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0096 .serviceGrid article:hover,.zp0096 .projectCard:hover,.zp0096 .teamCard:hover,.zp0096 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0096 *,.zp0096 *::before,.zp0096 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0096 a,.zp0096 button,.zp0096 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Y2K / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
