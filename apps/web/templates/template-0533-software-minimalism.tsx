import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0533-software-minimalism", "family": "Minimalism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|gallery-index|case-study>services>proof>awards>destinations>security|ticket-edge|condensed-editorial", "industry": "software", "hero": "image-collage", "navigation": "lower-third", "layout": "gallery-index"};

export default function Template0533({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Software Studio");
  const headline = String(content.headline || "Experienced product engineering for teams that need reliable software and clear delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product engineering", "Web applications", "Mobile apps", "Platform modernization", "Support"];
  const industryLabel = "Software studio";
  const serviceNotes = ["Agile delivery with two-week sprints: working software every fortnight, not just updates.", "Code quality: 85%+ test coverage required before any feature ships to production.", "Architecture review at project start — we identify technical risk before writing a line.", "Maintenance packages that include dependency updates, security patches, and monitoring.", "Source code escrow and full handover documentation as standard on every engagement."];
  const proofPoints = ["ISO 9001 quality certified", "GitHub-first delivery", "85%+ test coverage minimum", "GDPR compliant processes"];
  const testimonial = "Every sprint we had something working to test. The quality was high from the start — no big crunch at the end.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0533" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0533{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:0px;--shadow:none;--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0533 *{box-sizing:border-box}
.zp0533 a{color:inherit;text-decoration:none}
.zp0533 h1,.zp0533 h2,.zp0533 h3,.zp0533 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0533 img{max-width:100%;display:block}
.zp0533 button,.zp0533 a{-webkit-tap-highlight-color:transparent}
.zp0533 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0533 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0533 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0533 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0533 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0533 .mobileMenu{display:none}
.zp0533 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0533 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0533 .eyebrow,.zp0533 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0533 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0533 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0533 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0533 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0533 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0533 .visual,.zp0533 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0533 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0533 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0533 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0533 .heroPhoto{object-fit:cover}
.zp0533 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0533 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0533 .collage>*:first-child{grid-row:1/3}
.zp0533 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0533 .miniVisual.alt{background:var(--secondary)}
.zp0533 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0533 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0533 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0533 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0533 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0533 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0533 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0533 .serviceGrid p{color:var(--muted)}
.zp0533 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0533 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0533 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0533 details{border-top:1px solid var(--border);padding:20px 0}
.zp0533 details summary{font-weight:800;cursor:pointer}
.zp0533 details p{color:var(--muted);max-width:70ch}
.zp0533 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0533 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0533 .projects article:nth-child(2){transform:translateY(32px)}
.zp0533 .awards>div{max-width:800px;margin-left:auto}
.zp0533 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0533 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0533 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0533 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0533 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0533 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0533 .contact .eyebrow{color:var(--bg)}
.zp0533 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0533 .contactMeta{display:grid;gap:10px}
.zp0533 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0533 .heroCopy{animation:enter-532 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-532{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0533 .hero{min-height:auto}
.zp0533 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0533 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0533 .nav nav{display:none}
.zp0533 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0533 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0533 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0533 .mobileMenu nav a{padding:10px 8px}
.zp0533 .hero,.zp0533 .collageHero{grid-template-columns:1fr}
.zp0533 .section,.zp0533 .sectionTitle,.zp0533 .security,.zp0533 .contact{grid-template-columns:1fr}
.zp0533 .projects .projectGrid{grid-template-columns:1fr}
.zp0533 .projects article:nth-child(2){transform:none}
.zp0533 .section{display:block}}
@media(max-width:430px){.zp0533{font-size:16px}
.zp0533 .hero,.zp0533 .section,.zp0533 .contact{padding-left:18px;padding-right:18px}
.zp0533 .serviceGrid,.zp0533 .proof,.zp0533 .destinations>div:last-child{grid-template-columns:1fr}
.zp0533 h1{font-size:clamp(42px,14vw,70px)}}

.zp0533 .heroActions a,.zp0533 .primary,.zp0533 .ctaBtn,.zp0533 .btnPrimary,.zp0533 .schedule>a,.zp0533 .newsletter>a{transition:all .2s ease}
.zp0533 .heroActions a:hover,.zp0533 .primary:hover,.zp0533 .ctaBtn:hover,.zp0533 .btnPrimary:hover{
  opacity:.75
}
.zp0533 nav a,.zp0533 .nav a,.zp0533 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0533 nav a:hover,.zp0533 .nav a:hover,.zp0533 .footer a:hover{
  opacity:.6
}
.zp0533 .serviceGrid article,.zp0533 .projectCard,.zp0533 .teamCard,.zp0533 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0533 .serviceGrid article:hover,.zp0533 .projectCard:hover,.zp0533 .teamCard:hover,.zp0533 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0533 *,.zp0533 *::before,.zp0533 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0533 a,.zp0533 button,.zp0533 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">32</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
