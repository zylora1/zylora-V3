import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0544-software-organic", "family": "Organic", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|offset-cards|packages>services>destinations>values>proof|heavy-frame|brutal-display", "industry": "software", "hero": "data-led", "navigation": "centered-logo", "layout": "offset-cards"};

export default function Template0544({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Software Studio");
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
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0544" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0544{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0544 *{box-sizing:border-box}
.zp0544 a{color:inherit;text-decoration:none}
.zp0544 h1,.zp0544 h2,.zp0544 h3,.zp0544 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0544 img{max-width:100%;display:block}
.zp0544 button,.zp0544 a{-webkit-tap-highlight-color:transparent}
.zp0544 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0544 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0544 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0544 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0544 .nav.centered strong{order:2;font-size:24px}
.zp0544 .nav.centered nav:first-child{order:1}
.zp0544 .nav.centered nav:last-child{order:3}
.zp0544 .mobileMenu{display:none}
.zp0544 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0544 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0544 .eyebrow,.zp0544 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0544 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0544 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0544 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0544 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0544 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0544 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0544 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0544 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0544 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0544 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0544 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0544 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0544 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0544 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0544 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0544 .serviceGrid p{color:var(--muted)}
.zp0544 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0544 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0544 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0544 details{border-top:1px solid var(--border);padding:20px 0}
.zp0544 details summary{font-weight:800;cursor:pointer}
.zp0544 details p{color:var(--muted);max-width:70ch}
.zp0544 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Black, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0544 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0544 .packages>.sectionTitle{grid-column:1/-1}
.zp0544 .packages article{padding:24px;border:1px solid var(--border)}
.zp0544 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0544 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0544 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0544 .contact .eyebrow{color:var(--bg)}
.zp0544 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0544 .contactMeta{display:grid;gap:10px}
.zp0544 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0544 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0544 .heroCopy{animation:enter-543 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-543{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0544 .hero{min-height:auto}
.zp0544 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0544 .proof{grid-template-columns:1fr 1fr}
.zp0544 .packages{grid-template-columns:1fr 1fr}
.zp0544 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0544 .nav nav{display:none}
.zp0544 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0544 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0544 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0544 .mobileMenu nav a{padding:10px 8px}
.zp0544 .hero,.zp0544 .dataHero{grid-template-columns:1fr}
.zp0544 .section,.zp0544 .sectionTitle,.zp0544 .contact{grid-template-columns:1fr}
.zp0544 .section{display:block}}
@media(max-width:430px){.zp0544{font-size:16px}
.zp0544 .hero,.zp0544 .section,.zp0544 .contact{padding-left:18px;padding-right:18px}
.zp0544 .serviceGrid,.zp0544 .proof,.zp0544 .packages,.zp0544 .destinations>div:last-child{grid-template-columns:1fr}
.zp0544 h1{font-size:clamp(42px,14vw,70px)}}

.zp0544 .heroActions a,.zp0544 .primary,.zp0544 .ctaBtn,.zp0544 .btnPrimary,.zp0544 .schedule>a,.zp0544 .newsletter>a{transition:all .2s ease}
.zp0544 .heroActions a:hover,.zp0544 .primary:hover,.zp0544 .ctaBtn:hover,.zp0544 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);border-radius:30px
}
.zp0544 nav a,.zp0544 .nav a,.zp0544 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0544 nav a:hover,.zp0544 .nav a:hover,.zp0544 .footer a:hover{
  color:var(--primary)
}
.zp0544 .serviceGrid article,.zp0544 .projectCard,.zp0544 .teamCard,.zp0544 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0544 .serviceGrid article:hover,.zp0544 .projectCard:hover,.zp0544 .teamCard:hover,.zp0544 .bentoCard:hover{
  transform:translateY(-4px)
}
@media(prefers-reduced-motion:reduce){.zp0544 *,.zp0544 *::before,.zp0544 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0544 a,.zp0544 button,.zp0544 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Organic / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
