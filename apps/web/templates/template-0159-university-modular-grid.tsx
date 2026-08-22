import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0159-university-modular-grid", "family": "Modular Grid", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|product-journey|story>manifesto>case-study>services>team>proof>collection|soft-12|geometric", "industry": "university", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "product-journey"};

export default function Template0159({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove University Programme");
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
  const storyQuote = "\u201cStudy, research, and community organised around meaningful real-world contribution.\u201d";
  const storyBody = "Clove University Programme is presented as a real working university programme, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0159" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0159{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0159 *{box-sizing:border-box}
.zp0159 a{color:inherit;text-decoration:none}
.zp0159 h1,.zp0159 h2,.zp0159 h3,.zp0159 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0159 img{max-width:100%;display:block}
.zp0159 button,.zp0159 a{-webkit-tap-highlight-color:transparent}
.zp0159 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0159 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0159 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0159 .mobileMenu{display:none}
.zp0159:has(.navRail)>.hero,.zp0159:has(.navRail)>.section,.zp0159:has(.navRail)>.contact,.zp0159:has(.navRail)>.footer{margin-left:190px}
.zp0159 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0159 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0159 .eyebrow,.zp0159 .sectionTitle>span,.zp0159 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0159 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0159 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0159 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0159 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0159 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0159 .canvasHero{overflow:hidden}
.zp0159 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0159 .canvasGrid i{border-right:1px solid var(--border)}
.zp0159 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0159 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0159 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0159 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0159 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0159 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0159 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0159 .serviceGrid p{color:var(--muted)}
.zp0159 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0159 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0159 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0159 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0159 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0159 .story p{color:var(--muted)}
.zp0159 details{border-top:1px solid var(--border);padding:20px 0}
.zp0159 details summary{font-weight:800;cursor:pointer}
.zp0159 details p{color:var(--muted);max-width:70ch}
.zp0159 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0159 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0159 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Century Gothic, Avenir, sans-serif;margin-bottom:18px}
.zp0159 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0159 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0159 .projects article:nth-child(2){transform:translateY(32px)}
.zp0159 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0159 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0159 .p1,.zp0159 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0159 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0159 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0159 .contact .eyebrow{color:var(--bg)}
.zp0159 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0159 .contactMeta{display:grid;gap:10px}
.zp0159 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0159 .heroCopy{animation:enter-158 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-158{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0159 .hero{min-height:auto}
.zp0159 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0159 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0159 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0159 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0159 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0159 .mobileMenu nav a{padding:10px 8px}
.zp0159 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0159:has(.navRail)>.hero,.zp0159:has(.navRail)>.section,.zp0159:has(.navRail)>.contact,.zp0159:has(.navRail)>.footer{margin-left:0}
.zp0159 .hero{grid-template-columns:1fr}
.zp0159 .section,.zp0159 .sectionTitle,.zp0159 .story,.zp0159 .contact{grid-template-columns:1fr}
.zp0159 .teamGrid{grid-template-columns:1fr 1fr}
.zp0159 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0159 .projects .projectGrid{grid-template-columns:1fr}
.zp0159 .projects article:nth-child(2){transform:none}
.zp0159 .section{display:block}}
@media(max-width:430px){.zp0159{font-size:16px}
.zp0159 .hero,.zp0159 .section,.zp0159 .contact{padding-left:18px;padding-right:18px}
.zp0159 .serviceGrid,.zp0159 .proof,.zp0159 .teamGrid,.zp0159 .collectionGrid{grid-template-columns:1fr}
.zp0159 h1{font-size:clamp(42px,14vw,70px)}}

.zp0159 .heroActions a,.zp0159 .primary,.zp0159 .ctaBtn,.zp0159 .btnPrimary,.zp0159 .schedule>a,.zp0159 .newsletter>a{transition:all .2s ease}
.zp0159 .heroActions a:hover,.zp0159 .primary:hover,.zp0159 .ctaBtn:hover,.zp0159 .btnPrimary:hover{
  opacity:.85
}
.zp0159 nav a,.zp0159 .nav a,.zp0159 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0159 nav a:hover,.zp0159 .nav a:hover,.zp0159 .footer a:hover{
  color:var(--primary)
}
.zp0159 .serviceGrid article,.zp0159 .projectCard,.zp0159 .teamCard,.zp0159 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0159 .serviceGrid article:hover,.zp0159 .projectCard:hover,.zp0159 .teamCard:hover,.zp0159 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0159 *,.zp0159 *::before,.zp0159 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0159 a,.zp0159 button,.zp0159 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modular Grid / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
