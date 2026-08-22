import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0153-university-minimalism", "family": "Minimalism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|community-led|awards>values>availability>proof>services>community>products|hairline|slab", "industry": "university", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "community-led"};

export default function Template0153({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry University Programme");
  const headline = String(content.headline || "Study, research, and community organised around meaningful real-world contribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Undergraduate study", "Graduate programmes", "Research", "Student life", "Admissions support"];
  const industryLabel = "University programme";
  const serviceNotes = ["Courses co-designed with industry partners so graduate skills meet real employer needs.", "Research-active faculty who bring live project experience into lectures.", "Industry placement years with 92% of students securing relevant roles.", "International exchange programmes at 60+ partner universities worldwide.", "Graduate outcome tracking with 18-month follow-up career support."];
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const storyBody = "Foundry University Programme is presented as a real working university programme, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0153" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0153{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:0px;--shadow:none;--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0153 *{box-sizing:border-box}
.zp0153 a{color:inherit;text-decoration:none}
.zp0153 h1,.zp0153 h2,.zp0153 h3,.zp0153 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0153 img{max-width:100%;display:block}
.zp0153 button,.zp0153 a{-webkit-tap-highlight-color:transparent}
.zp0153 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0153 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0153 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0153 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0153 .nav.menu details{position:relative}
.zp0153 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0153 .mobileMenu{display:none}
.zp0153 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0153 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0153 .eyebrow,.zp0153 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0153 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0153 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0153 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0153 .heroActions a,.zp0153 .schedule>a,.zp0153 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0153 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0153 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0153 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0153 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0153 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0153 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0153 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0153 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0153 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0153 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0153 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0153 .serviceGrid p{color:var(--muted)}
.zp0153 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0153 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0153 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0153 details{border-top:1px solid var(--border);padding:20px 0}
.zp0153 details summary{font-weight:800;cursor:pointer}
.zp0153 details p{color:var(--muted);max-width:70ch}
.zp0153 .schedule,.zp0153 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0153 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0153 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0153 .p1,.zp0153 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0153 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Rockwell, Courier New, serif;letter-spacing:-.04em;max-width:17ch}
.zp0153 .awards>div{max-width:800px;margin-left:auto}
.zp0153 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0153 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0153 .contact .eyebrow{color:var(--bg)}
.zp0153 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0153 .contactMeta{display:grid;gap:10px}
.zp0153 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0153 .heroCopy{animation:enter-152 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-152{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0153 .hero{min-height:auto}
.zp0153 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0153 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0153 .nav nav{display:none}
.zp0153 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0153 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0153 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0153 .mobileMenu nav a{padding:10px 8px}
.zp0153 .hero,.zp0153 .archiveHero{grid-template-columns:1fr}
.zp0153 .section,.zp0153 .sectionTitle,.zp0153 .contact{grid-template-columns:1fr}
.zp0153 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0153 .section{display:block}}
@media(max-width:430px){.zp0153{font-size:16px}
.zp0153 .hero,.zp0153 .section,.zp0153 .contact{padding-left:18px;padding-right:18px}
.zp0153 .serviceGrid,.zp0153 .proof,.zp0153 .collectionGrid{grid-template-columns:1fr}
.zp0153 h1{font-size:clamp(42px,14vw,70px)}}

.zp0153 .heroActions a,.zp0153 .primary,.zp0153 .ctaBtn,.zp0153 .btnPrimary,.zp0153 .schedule>a,.zp0153 .newsletter>a{transition:all .2s ease}
.zp0153 .heroActions a:hover,.zp0153 .primary:hover,.zp0153 .ctaBtn:hover,.zp0153 .btnPrimary:hover{
  opacity:.75
}
.zp0153 nav a,.zp0153 .nav a,.zp0153 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0153 nav a:hover,.zp0153 .nav a:hover,.zp0153 .footer a:hover{
  opacity:.6
}
.zp0153 .serviceGrid article,.zp0153 .projectCard,.zp0153 .teamCard,.zp0153 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0153 .serviceGrid article:hover,.zp0153 .projectCard:hover,.zp0153 .teamCard:hover,.zp0153 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0153 *,.zp0153 *::before,.zp0153 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0153 a,.zp0153 button,.zp0153 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
