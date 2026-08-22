import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0042-physio-fashion-editorial", "family": "Fashion Editorial", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|image-led-chapters|team>collection>research>services>packages>proof>process|paper-sheet|utility", "industry": "physio", "hero": "service-led", "navigation": "left-sidebar", "layout": "image-led-chapters"};

export default function Template0042({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const industryLabel = "Physiotherapy studio";
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0042" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0042{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0042 *{box-sizing:border-box}
.zp0042 a{color:inherit;text-decoration:none}
.zp0042 h1,.zp0042 h2,.zp0042 h3,.zp0042 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0042 img{max-width:100%;display:block}
.zp0042 button,.zp0042 a{-webkit-tap-highlight-color:transparent}
.zp0042 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0042 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0042 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0042 .mobileMenu{display:none}
.zp0042:has(.navRail)>.hero,.zp0042:has(.navRail)>.section,.zp0042:has(.navRail)>.contact,.zp0042:has(.navRail)>.footer{margin-left:190px}
.zp0042 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0042 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0042 .eyebrow,.zp0042 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0042 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0042 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0042 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0042 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0042 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0042 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0042 .serviceHeroList{display:grid;gap:4px}
.zp0042 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0042 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0042 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0042 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0042 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0042 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0042 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0042 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0042 .serviceGrid p{color:var(--muted)}
.zp0042 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0042 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0042 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0042 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0042 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0042 details{border-top:1px solid var(--border);padding:20px 0}
.zp0042 details summary{font-weight:800;cursor:pointer}
.zp0042 details p{color:var(--muted);max-width:70ch}
.zp0042 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0042 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0042 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Verdana, sans-serif;margin-bottom:18px}
.zp0042 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0042 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0042 .p1,.zp0042 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0042 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0042 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0042 .packages>.sectionTitle{grid-column:1/-1}
.zp0042 .packages article{padding:24px;border:1px solid var(--border)}
.zp0042 .researchRows{max-width:900px;margin-left:auto}
.zp0042 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0042 .contact .eyebrow{color:var(--bg)}
.zp0042 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0042 .contactMeta{display:grid;gap:10px}
.zp0042 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0042 .heroCopy{animation:enter-41 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-41{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0042 .hero{min-height:auto}
.zp0042 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0042 .proof{grid-template-columns:1fr 1fr}
.zp0042 .packages{grid-template-columns:1fr 1fr}
.zp0042 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0042 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0042 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0042 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0042 .mobileMenu nav a{padding:10px 8px}
.zp0042 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0042:has(.navRail)>.hero,.zp0042:has(.navRail)>.section,.zp0042:has(.navRail)>.contact,.zp0042:has(.navRail)>.footer{margin-left:0}
.zp0042 .hero,.zp0042 .serviceHero{grid-template-columns:1fr}
.zp0042 .section,.zp0042 .sectionTitle,.zp0042 .contact{grid-template-columns:1fr}
.zp0042 .teamGrid{grid-template-columns:1fr 1fr}
.zp0042 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0042 .section{display:block}}
@media(max-width:430px){.zp0042{font-size:16px}
.zp0042 .hero,.zp0042 .section,.zp0042 .contact{padding-left:18px;padding-right:18px}
.zp0042 .serviceGrid,.zp0042 .proof,.zp0042 .teamGrid,.zp0042 .collectionGrid,.zp0042 .packages{grid-template-columns:1fr}
.zp0042 h1{font-size:clamp(42px,14vw,70px)}}

.zp0042 .heroActions a,.zp0042 .primary,.zp0042 .ctaBtn,.zp0042 .btnPrimary,.zp0042 .schedule>a,.zp0042 .newsletter>a{transition:all .2s ease}
.zp0042 .heroActions a:hover,.zp0042 .primary:hover,.zp0042 .ctaBtn:hover,.zp0042 .btnPrimary:hover{
  opacity:.8
}
.zp0042 nav a,.zp0042 .nav a,.zp0042 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0042 nav a:hover,.zp0042 .nav a:hover,.zp0042 .footer a:hover{
  color:var(--primary)
}
.zp0042 .serviceGrid article,.zp0042 .projectCard,.zp0042 .teamCard,.zp0042 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0042 .serviceGrid article:hover,.zp0042 .projectCard:hover,.zp0042 .teamCard:hover,.zp0042 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0042 *,.zp0042 *::before,.zp0042 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0042 a,.zp0042 button,.zp0042 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Fashion Editorial / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
