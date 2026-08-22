import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0033-physio-luxury-typography", "family": "Luxury Typography", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|split-scroll|destinations>proof>case-study>pricing>programmes>services>products|square-editorial|slab", "industry": "physio", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "split-scroll"};

export default function Template0033({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Physiotherapy Studio");
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
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0033" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0033{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0033 *{box-sizing:border-box}
.zp0033 a{color:inherit;text-decoration:none}
.zp0033 h1,.zp0033 h2,.zp0033 h3,.zp0033 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0033 img{max-width:100%;display:block}
.zp0033 button,.zp0033 a{-webkit-tap-highlight-color:transparent}
.zp0033 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0033 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0033 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0033 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0033 .mobileMenu{display:none}
.zp0033 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0033 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0033 .eyebrow,.zp0033 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0033 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0033 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0033 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0033 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0033 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0033 .typeOnly{grid-template-columns:1fr .28fr}
.zp0033 .oversizeWord{font-family:Rockwell, Courier New, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0033 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0033 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0033 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0033 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0033 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0033 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0033 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0033 .serviceGrid p{color:var(--muted)}
.zp0033 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0033 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0033 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0033 details{border-top:1px solid var(--border);padding:20px 0}
.zp0033 details summary{font-weight:800;cursor:pointer}
.zp0033 details p{color:var(--muted);max-width:70ch}
.zp0033 .priceRows{border-top:1px solid var(--border)}
.zp0033 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0033 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0033 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0033 .projects article:nth-child(2){transform:translateY(32px)}
.zp0033 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0033 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0033 .p1,.zp0033 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0033 .programmes>div:last-child,.zp0033 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0033 .programmes article,.zp0033 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0033 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0033 .contact .eyebrow{color:var(--bg)}
.zp0033 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0033 .contactMeta{display:grid;gap:10px}
.zp0033 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0033 .heroCopy{animation:enter-32 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-32{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0033 .hero{min-height:auto}
.zp0033 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0033 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0033 .nav nav{display:none}
.zp0033 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0033 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0033 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0033 .mobileMenu nav a{padding:10px 8px}
.zp0033 .hero{grid-template-columns:1fr}
.zp0033 .section,.zp0033 .sectionTitle,.zp0033 .contact{grid-template-columns:1fr}
.zp0033 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0033 .projects .projectGrid{grid-template-columns:1fr}
.zp0033 .projects article:nth-child(2){transform:none}
.zp0033 .section{display:block}}
@media(max-width:430px){.zp0033{font-size:16px}
.zp0033 .hero,.zp0033 .section,.zp0033 .contact{padding-left:18px;padding-right:18px}
.zp0033 .serviceGrid,.zp0033 .proof,.zp0033 .collectionGrid,.zp0033 .programmes>div:last-child,.zp0033 .destinations>div:last-child{grid-template-columns:1fr}
.zp0033 h1{font-size:clamp(42px,14vw,70px)}
.zp0033 .priceRows article{grid-template-columns:1fr}}

.zp0033 .heroActions a,.zp0033 .primary,.zp0033 .ctaBtn,.zp0033 .btnPrimary,.zp0033 .schedule>a,.zp0033 .newsletter>a{transition:all .2s ease}
.zp0033 .heroActions a:hover,.zp0033 .primary:hover,.zp0033 .ctaBtn:hover,.zp0033 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0033 nav a,.zp0033 .nav a,.zp0033 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0033 nav a:hover,.zp0033 .nav a:hover,.zp0033 .footer a:hover{
  opacity:.65
}
.zp0033 .serviceGrid article,.zp0033 .projectCard,.zp0033 .teamCard,.zp0033 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0033 .serviceGrid article:hover,.zp0033 .projectCard:hover,.zp0033 .teamCard:hover,.zp0033 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0033 *,.zp0033 *::before,.zp0033 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0033 a,.zp0033 button,.zp0033 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
