import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0538-software-editorial", "family": "Editorial", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|local-service-map|process>pricing>proof>services>packages|paper-sheet|retro-bookish", "industry": "software", "hero": "product-demo", "navigation": "left-sidebar", "layout": "local-service-map"};

export default function Template0538({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Software Studio");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ISO 9001 quality certified", "GitHub-first delivery", "85%+ test coverage minimum", "GDPR compliant processes"];
  const testimonial = "Every sprint we had something working to test. The quality was high from the start — no big crunch at the end.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0538" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0538{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0538 *{box-sizing:border-box}
.zp0538 a{color:inherit;text-decoration:none}
.zp0538 h1,.zp0538 h2,.zp0538 h3,.zp0538 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0538 img{max-width:100%;display:block}
.zp0538 button,.zp0538 a{-webkit-tap-highlight-color:transparent}
.zp0538 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0538 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0538 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0538 .mobileMenu{display:none}
.zp0538:has(.navRail)>.hero,.zp0538:has(.navRail)>.section,.zp0538:has(.navRail)>.contact,.zp0538:has(.navRail)>.footer{margin-left:190px}
.zp0538 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0538 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0538 .eyebrow,.zp0538 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0538 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0538 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0538 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0538 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0538 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0538 .visual,.zp0538 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0538 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0538 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0538 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0538 .heroPhoto{object-fit:cover}
.zp0538 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0538 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0538 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0538 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0538 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0538 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0538 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0538 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0538 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0538 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0538 .serviceGrid p{color:var(--muted)}
.zp0538 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0538 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0538 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0538 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0538 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0538 details{border-top:1px solid var(--border);padding:20px 0}
.zp0538 details summary{font-weight:800;cursor:pointer}
.zp0538 details p{color:var(--muted);max-width:70ch}
.zp0538 .priceRows{border-top:1px solid var(--border)}
.zp0538 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0538 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0538 .packages>.sectionTitle{grid-column:1/-1}
.zp0538 .packages article{padding:24px;border:1px solid var(--border)}
.zp0538 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0538 .contact .eyebrow{color:var(--bg)}
.zp0538 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0538 .contactMeta{display:grid;gap:10px}
.zp0538 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0538 .hero{min-height:auto}
.zp0538 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0538 .proof{grid-template-columns:1fr 1fr}
.zp0538 .packages{grid-template-columns:1fr 1fr}
.zp0538 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0538 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0538 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0538 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0538 .mobileMenu nav a{padding:10px 8px}
.zp0538 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0538:has(.navRail)>.hero,.zp0538:has(.navRail)>.section,.zp0538:has(.navRail)>.contact,.zp0538:has(.navRail)>.footer{margin-left:0}
.zp0538 .hero,.zp0538 .productHero{grid-template-columns:1fr}
.zp0538 .section,.zp0538 .sectionTitle,.zp0538 .contact{grid-template-columns:1fr}
.zp0538 .section{display:block}}
@media(max-width:430px){.zp0538{font-size:16px}
.zp0538 .hero,.zp0538 .section,.zp0538 .contact{padding-left:18px;padding-right:18px}
.zp0538 .serviceGrid,.zp0538 .proof,.zp0538 .packages{grid-template-columns:1fr}
.zp0538 h1{font-size:clamp(42px,14vw,70px)}
.zp0538 .priceRows article{grid-template-columns:1fr}}

.zp0538 .heroActions a,.zp0538 .primary,.zp0538 .ctaBtn,.zp0538 .btnPrimary,.zp0538 .schedule>a,.zp0538 .newsletter>a{transition:all .2s ease}
.zp0538 .heroActions a:hover,.zp0538 .primary:hover,.zp0538 .ctaBtn:hover,.zp0538 .btnPrimary:hover{
  opacity:.8
}
.zp0538 nav a,.zp0538 .nav a,.zp0538 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0538 nav a:hover,.zp0538 .nav a:hover,.zp0538 .footer a:hover{
  color:var(--primary)
}
.zp0538 .serviceGrid article,.zp0538 .projectCard,.zp0538 .teamCard,.zp0538 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0538 .serviceGrid article:hover,.zp0538 .projectCard:hover,.zp0538 .teamCard:hover,.zp0538 .bentoCard:hover{
  transform:translateY(-3px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0538 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0538 .sectionTitle,.zp0538 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0538 *,.zp0538 *::before,.zp0538 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0538 a,.zp0538 button,.zp0538 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">37</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Editorial / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
