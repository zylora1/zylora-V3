import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0368-construction-surrealism", "family": "Surrealism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|dashboard-story|services>timeline>proof>press>gallery>comparison|heavy-frame|newspaper", "industry": "construction", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "dashboard-story"};

export default function Template0368({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0368" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0368{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0368 *{box-sizing:border-box}
.zp0368 a{color:inherit;text-decoration:none}
.zp0368 h1,.zp0368 h2,.zp0368 h3,.zp0368 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0368 img{max-width:100%;display:block}
.zp0368 button,.zp0368 a{-webkit-tap-highlight-color:transparent}
.zp0368 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0368 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0368 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0368 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0368 .nav.centered strong{order:2;font-size:24px}
.zp0368 .nav.centered nav:first-child{order:1}
.zp0368 .nav.centered nav:last-child{order:3}
.zp0368 .mobileMenu{display:none}
.zp0368 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0368 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0368 .eyebrow,.zp0368 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0368 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0368 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0368 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0368 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0368 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0368 .visual,.zp0368 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0368 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0368 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0368 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0368 .heroPhoto{object-fit:cover}
.zp0368 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0368 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0368 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0368 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0368 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0368 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0368 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0368 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0368 .serviceGrid p{color:var(--muted)}
.zp0368 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0368 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0368 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0368 details{border-top:1px solid var(--border);padding:20px 0}
.zp0368 details summary{font-weight:800;cursor:pointer}
.zp0368 details p{color:var(--muted);max-width:70ch}
.zp0368 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0368 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0368 .galleryGrid>*:first-child{grid-row:1/3}
.zp0368 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0368 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0368 .g2,.zp0368 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0368 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0368 .timeline article{padding:20px 0}
.zp0368 .awards>div{max-width:800px;margin-left:auto}
.zp0368 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0368 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0368 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0368 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0368 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0368 .contact .eyebrow{color:var(--bg)}
.zp0368 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0368 .contactMeta{display:grid;gap:10px}
.zp0368 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0368 .heroCopy{animation:enter-367 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-367{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0368 .hero{min-height:auto}
.zp0368 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0368 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0368 .nav nav{display:none}
.zp0368 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0368 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0368 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0368 .mobileMenu nav a{padding:10px 8px}
.zp0368 .hero,.zp0368 .asymHero{grid-template-columns:1fr}
.zp0368 .section,.zp0368 .sectionTitle,.zp0368 .contact{grid-template-columns:1fr}
.zp0368 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0368 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0368 .section{display:block}}
@media(max-width:430px){.zp0368{font-size:16px}
.zp0368 .hero,.zp0368 .section,.zp0368 .contact{padding-left:18px;padding-right:18px}
.zp0368 .serviceGrid,.zp0368 .proof,.zp0368 .compareGrid{grid-template-columns:1fr}
.zp0368 h1{font-size:clamp(42px,14vw,70px)}
.zp0368 .galleryGrid{grid-template-columns:1fr}
.zp0368 .galleryGrid>*:first-child{grid-column:auto}}

.zp0368 .heroActions a,.zp0368 .primary,.zp0368 .ctaBtn,.zp0368 .btnPrimary,.zp0368 .schedule>a,.zp0368 .newsletter>a{transition:all .2s ease}
.zp0368 .heroActions a:hover,.zp0368 .primary:hover,.zp0368 .ctaBtn:hover,.zp0368 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0368 nav a,.zp0368 .nav a,.zp0368 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0368 nav a:hover,.zp0368 .nav a:hover,.zp0368 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0368 .serviceGrid article,.zp0368 .projectCard,.zp0368 .teamCard,.zp0368 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0368 .serviceGrid article:hover,.zp0368 .projectCard:hover,.zp0368 .teamCard:hover,.zp0368 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0368 *,.zp0368 *::before,.zp0368 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0368 a,.zp0368 button,.zp0368 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">08</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">67</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
