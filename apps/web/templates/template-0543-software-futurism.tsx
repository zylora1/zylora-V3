import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0543-software-futurism", "family": "Futurism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|story-first|team>research>packages>proof>press>products>services|soft-12|geometric", "industry": "software", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "story-first"};

export default function Template0543({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Software Studio");
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
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0543" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0543{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0543 *{box-sizing:border-box}
.zp0543 a{color:inherit;text-decoration:none}
.zp0543 h1,.zp0543 h2,.zp0543 h3,.zp0543 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0543 img{max-width:100%;display:block}
.zp0543 button,.zp0543 a{-webkit-tap-highlight-color:transparent}
.zp0543 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0543 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0543 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0543 .mobileMenu{display:none}
.zp0543:has(.navRail)>.hero,.zp0543:has(.navRail)>.section,.zp0543:has(.navRail)>.contact,.zp0543:has(.navRail)>.footer{margin-left:190px}
.zp0543 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0543 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0543 .eyebrow,.zp0543 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0543 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0543 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0543 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0543 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0543 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0543 .canvasHero{overflow:hidden}
.zp0543 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0543 .canvasGrid i{border-right:1px solid var(--border)}
.zp0543 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0543 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0543 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0543 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0543 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0543 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0543 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0543 .serviceGrid p{color:var(--muted)}
.zp0543 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0543 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0543 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0543 details{border-top:1px solid var(--border);padding:20px 0}
.zp0543 details summary{font-weight:800;cursor:pointer}
.zp0543 details p{color:var(--muted);max-width:70ch}
.zp0543 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0543 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0543 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Century Gothic, Avenir, sans-serif;margin-bottom:18px}
.zp0543 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0543 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0543 .p1,.zp0543 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0543 .awards>div{max-width:800px;margin-left:auto}
.zp0543 .awards p,.zp0543 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0543 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0543 .packages>.sectionTitle{grid-column:1/-1}
.zp0543 .packages article{padding:24px;border:1px solid var(--border)}
.zp0543 .researchRows{max-width:900px;margin-left:auto}
.zp0543 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0543 .contact .eyebrow{color:var(--bg)}
.zp0543 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0543 .contactMeta{display:grid;gap:10px}
.zp0543 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0543 .heroCopy{animation:enter-542 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-542{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0543 .hero{min-height:auto}
.zp0543 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0543 .proof{grid-template-columns:1fr 1fr}
.zp0543 .packages{grid-template-columns:1fr 1fr}
.zp0543 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0543 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0543 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0543 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0543 .mobileMenu nav a{padding:10px 8px}
.zp0543 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0543:has(.navRail)>.hero,.zp0543:has(.navRail)>.section,.zp0543:has(.navRail)>.contact,.zp0543:has(.navRail)>.footer{margin-left:0}
.zp0543 .hero{grid-template-columns:1fr}
.zp0543 .section,.zp0543 .sectionTitle,.zp0543 .contact{grid-template-columns:1fr}
.zp0543 .teamGrid{grid-template-columns:1fr 1fr}
.zp0543 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0543 .section{display:block}}
@media(max-width:430px){.zp0543{font-size:16px}
.zp0543 .hero,.zp0543 .section,.zp0543 .contact{padding-left:18px;padding-right:18px}
.zp0543 .serviceGrid,.zp0543 .proof,.zp0543 .teamGrid,.zp0543 .collectionGrid,.zp0543 .packages{grid-template-columns:1fr}
.zp0543 h1{font-size:clamp(42px,14vw,70px)}}

.zp0543 .heroActions a,.zp0543 .primary,.zp0543 .ctaBtn,.zp0543 .btnPrimary,.zp0543 .schedule>a,.zp0543 .newsletter>a{transition:all .2s ease}
.zp0543 .heroActions a:hover,.zp0543 .primary:hover,.zp0543 .ctaBtn:hover,.zp0543 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0543 nav a,.zp0543 .nav a,.zp0543 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0543 nav a:hover,.zp0543 .nav a:hover,.zp0543 .footer a:hover{
  color:var(--primary)
}
.zp0543 .serviceGrid article,.zp0543 .projectCard,.zp0543 .teamCard,.zp0543 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0543 .serviceGrid article:hover,.zp0543 .projectCard:hover,.zp0543 .teamCard:hover,.zp0543 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0543 *,.zp0543 *::before,.zp0543 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0543 a,.zp0543 button,.zp0543 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
