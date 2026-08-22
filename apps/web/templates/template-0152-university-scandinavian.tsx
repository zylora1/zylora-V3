import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0152-university-scandinavian", "family": "Scandinavian", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|dashboard-story|process>research>products>programmes>proof>services|micro-radius|newspaper", "industry": "university", "hero": "video-frame", "navigation": "corner-dock", "layout": "dashboard-story"};

export default function Template0152({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau University Programme");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0152" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0152{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0152 *{box-sizing:border-box}
.zp0152 a{color:inherit;text-decoration:none}
.zp0152 h1,.zp0152 h2,.zp0152 h3,.zp0152 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0152 img{max-width:100%;display:block}
.zp0152 button,.zp0152 a{-webkit-tap-highlight-color:transparent}
.zp0152 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0152 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0152 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0152 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0152 .mobileMenu{display:none}
.zp0152 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0152 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0152 .eyebrow,.zp0152 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0152 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0152 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0152 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0152 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0152 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0152 .visual,.zp0152 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0152 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0152 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0152 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0152 .heroPhoto{object-fit:cover}
.zp0152 .videoHero{grid-template-columns:1fr 1fr}
.zp0152 .videoFrame{position:relative}
.zp0152 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0152 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0152 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0152 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0152 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0152 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0152 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0152 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0152 .serviceGrid p{color:var(--muted)}
.zp0152 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0152 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0152 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0152 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0152 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0152 details{border-top:1px solid var(--border);padding:20px 0}
.zp0152 details summary{font-weight:800;cursor:pointer}
.zp0152 details p{color:var(--muted);max-width:70ch}
.zp0152 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0152 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0152 .p1,.zp0152 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0152 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0152 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0152 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0152 .researchRows{max-width:900px;margin-left:auto}
.zp0152 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0152 .contact .eyebrow{color:var(--bg)}
.zp0152 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0152 .contactMeta{display:grid;gap:10px}
.zp0152 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0152 .heroCopy{animation:enter-151 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-151{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0152 .hero{min-height:auto}
.zp0152 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0152 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0152 .nav nav{display:none}
.zp0152 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0152 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0152 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0152 .mobileMenu nav a{padding:10px 8px}
.zp0152 .hero,.zp0152 .videoHero{grid-template-columns:1fr}
.zp0152 .section,.zp0152 .sectionTitle,.zp0152 .contact{grid-template-columns:1fr}
.zp0152 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0152 .section{display:block}}
@media(max-width:430px){.zp0152{font-size:16px}
.zp0152 .hero,.zp0152 .section,.zp0152 .contact{padding-left:18px;padding-right:18px}
.zp0152 .serviceGrid,.zp0152 .proof,.zp0152 .collectionGrid,.zp0152 .programmes>div:last-child{grid-template-columns:1fr}
.zp0152 h1{font-size:clamp(42px,14vw,70px)}}

.zp0152 .heroActions a,.zp0152 .primary,.zp0152 .ctaBtn,.zp0152 .btnPrimary,.zp0152 .schedule>a,.zp0152 .newsletter>a{transition:all .2s ease}
.zp0152 .heroActions a:hover,.zp0152 .primary:hover,.zp0152 .ctaBtn:hover,.zp0152 .btnPrimary:hover{
  opacity:.75
}
.zp0152 nav a,.zp0152 .nav a,.zp0152 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0152 nav a:hover,.zp0152 .nav a:hover,.zp0152 .footer a:hover{
  opacity:.65
}
.zp0152 .serviceGrid article,.zp0152 .projectCard,.zp0152 .teamCard,.zp0152 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0152 .serviceGrid article:hover,.zp0152 .projectCard:hover,.zp0152 .teamCard:hover,.zp0152 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0152 *,.zp0152 *::before,.zp0152 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0152 a,.zp0152 button,.zp0152 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">51</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
