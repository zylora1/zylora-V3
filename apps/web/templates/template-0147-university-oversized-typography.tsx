import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0147-university-oversized-typography", "family": "Oversized Typography", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|story-first|services>newsletter>proof>availability>gallery>process>projects|inset-panel|poster", "industry": "university", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "story-first"};

export default function Template0147({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine University Programme");
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
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0147" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0147{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0147 *{box-sizing:border-box}
.zp0147 a{color:inherit;text-decoration:none}
.zp0147 h1,.zp0147 h2,.zp0147 h3,.zp0147 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0147 img{max-width:100%;display:block}
.zp0147 button,.zp0147 a{-webkit-tap-highlight-color:transparent}
.zp0147 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0147 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0147 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0147 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0147 .mobileMenu{display:none}
.zp0147 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0147 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0147 .eyebrow,.zp0147 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0147 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0147 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0147 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0147 .heroActions a,.zp0147 .schedule>a,.zp0147 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0147 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0147 .visual,.zp0147 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0147 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0147 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0147 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0147 .heroPhoto{object-fit:cover}
.zp0147 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0147 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0147 .railBlock{background:var(--primary)}
.zp0147 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0147 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0147 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0147 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0147 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0147 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0147 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0147 .serviceGrid p{color:var(--muted)}
.zp0147 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0147 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0147 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0147 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0147 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0147 details{border-top:1px solid var(--border);padding:20px 0}
.zp0147 details summary{font-weight:800;cursor:pointer}
.zp0147 details p{color:var(--muted);max-width:70ch}
.zp0147 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0147 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0147 .galleryGrid>*:first-child{grid-row:1/3}
.zp0147 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0147 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0147 .g2,.zp0147 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0147 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0147 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0147 .projects article:nth-child(2){transform:translateY(32px)}
.zp0147 .schedule,.zp0147 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0147 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0147 .contact .eyebrow{color:var(--bg)}
.zp0147 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0147 .contactMeta{display:grid;gap:10px}
.zp0147 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0147 .heroCopy{animation:enter-146 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-146{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0147 .hero{min-height:auto}
.zp0147 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0147 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0147 .nav nav{display:none}
.zp0147 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0147 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0147 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0147 .mobileMenu nav a{padding:10px 8px}
.zp0147 .hero,.zp0147 .verticalHero{grid-template-columns:1fr}
.zp0147 .section,.zp0147 .sectionTitle,.zp0147 .contact{grid-template-columns:1fr}
.zp0147 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0147 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0147 .projects .projectGrid{grid-template-columns:1fr}
.zp0147 .projects article:nth-child(2){transform:none}
.zp0147 .section{display:block}}
@media(max-width:430px){.zp0147{font-size:16px}
.zp0147 .hero,.zp0147 .section,.zp0147 .contact{padding-left:18px;padding-right:18px}
.zp0147 .serviceGrid,.zp0147 .proof{grid-template-columns:1fr}
.zp0147 h1{font-size:clamp(42px,14vw,70px)}
.zp0147 .galleryGrid{grid-template-columns:1fr}
.zp0147 .galleryGrid>*:first-child{grid-column:auto}}

.zp0147 .heroActions a,.zp0147 .primary,.zp0147 .ctaBtn,.zp0147 .btnPrimary,.zp0147 .schedule>a,.zp0147 .newsletter>a{transition:all .2s ease}
.zp0147 .heroActions a:hover,.zp0147 .primary:hover,.zp0147 .ctaBtn:hover,.zp0147 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0147 nav a,.zp0147 .nav a,.zp0147 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0147 nav a:hover,.zp0147 .nav a:hover,.zp0147 .footer a:hover{
  color:var(--primary)
}
.zp0147 .serviceGrid article,.zp0147 .projectCard,.zp0147 .teamCard,.zp0147 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0147 .serviceGrid article:hover,.zp0147 .projectCard:hover,.zp0147 .teamCard:hover,.zp0147 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0147 *,.zp0147 *::before,.zp0147 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0147 a,.zp0147 button,.zp0147 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">46</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
