import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0146-university-high-contrast", "family": "High Contrast", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|full-bleed-chapters|proof>products>community>services>credentials>testimonial|borderless|modernist-duo", "industry": "university", "hero": "gallery-wall", "navigation": "tabbed", "layout": "full-bleed-chapters"};

export default function Template0146({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal University Programme");
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
  const storyBody = "Signal University Programme is presented as a real working university programme, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const testimonialName = "Foxglove client";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0146" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0146{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0146 *{box-sizing:border-box}
.zp0146 a{color:inherit;text-decoration:none}
.zp0146 h1,.zp0146 h2,.zp0146 h3,.zp0146 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0146 img{max-width:100%;display:block}
.zp0146 button,.zp0146 a{-webkit-tap-highlight-color:transparent}
.zp0146 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0146 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0146 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0146 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0146 .mobileMenu{display:none}
.zp0146 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0146 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0146 .eyebrow,.zp0146 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0146 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0146 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0146 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0146 .heroActions a,.zp0146 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0146 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0146 .wallHero{grid-template-columns:1fr 1fr}
.zp0146 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0146 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0146 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0146 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0146 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0146 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0146 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0146 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0146 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0146 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0146 .serviceGrid p{color:var(--muted)}
.zp0146 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0146 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0146 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0146 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0146 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0146 .testimonial>div{align-self:end}
.zp0146 .testimonial span{display:block;opacity:.7}
.zp0146 details{border-top:1px solid var(--border);padding:20px 0}
.zp0146 details summary{font-weight:800;cursor:pointer}
.zp0146 details p{color:var(--muted);max-width:70ch}
.zp0146 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0146 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0146 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0146 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0146 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0146 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0146 .p1,.zp0146 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0146 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0146 .contact .eyebrow{color:var(--bg)}
.zp0146 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0146 .contactMeta{display:grid;gap:10px}
.zp0146 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0146 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
@media(max-width:1024px){.zp0146 .hero{min-height:auto}
.zp0146 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0146 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0146 .nav nav{display:none}
.zp0146 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0146 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0146 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0146 .mobileMenu nav a{padding:10px 8px}
.zp0146 .hero,.zp0146 .wallHero{grid-template-columns:1fr}
.zp0146 .section,.zp0146 .sectionTitle,.zp0146 .contact{grid-template-columns:1fr}
.zp0146 .testimonial{grid-template-columns:1fr}
.zp0146 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0146 .section{display:block}}
@media(max-width:430px){.zp0146{font-size:16px}
.zp0146 .hero,.zp0146 .section,.zp0146 .contact{padding-left:18px;padding-right:18px}
.zp0146 .serviceGrid,.zp0146 .proof,.zp0146 .collectionGrid{grid-template-columns:1fr}
.zp0146 h1{font-size:clamp(42px,14vw,70px)}}

.zp0146 .heroActions a,.zp0146 .primary,.zp0146 .ctaBtn,.zp0146 .btnPrimary,.zp0146 .schedule>a,.zp0146 .newsletter>a{transition:all .2s ease}
.zp0146 .heroActions a:hover,.zp0146 .primary:hover,.zp0146 .ctaBtn:hover,.zp0146 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0146 nav a,.zp0146 .nav a,.zp0146 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0146 nav a:hover,.zp0146 .nav a:hover,.zp0146 .footer a:hover{
  color:var(--primary)
}
.zp0146 .serviceGrid article,.zp0146 .projectCard,.zp0146 .teamCard,.zp0146 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0146 .serviceGrid article:hover,.zp0146 .projectCard:hover,.zp0146 .teamCard:hover,.zp0146 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0146 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0146 .sectionTitle,.zp0146 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0146 *,.zp0146 *::before,.zp0146 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0146 a,.zp0146 button,.zp0146 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
