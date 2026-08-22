import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0537-software-playful", "family": "Playful", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|split-scroll|comparison>pricing>awards>products>services>proof>testimonial|hairline|slab", "industry": "software", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "split-scroll"};

export default function Template0537({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Software Studio");
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
  const testimonialName = "Tandem client";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0537" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0537{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0537 *{box-sizing:border-box}
.zp0537 a{color:inherit;text-decoration:none}
.zp0537 h1,.zp0537 h2,.zp0537 h3,.zp0537 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0537 img{max-width:100%;display:block}
.zp0537 button,.zp0537 a{-webkit-tap-highlight-color:transparent}
.zp0537 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0537 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0537 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0537 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0537 .nav.menu details{position:relative}
.zp0537 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0537 .mobileMenu{display:none}
.zp0537 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0537 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0537 .eyebrow,.zp0537 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0537 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0537 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0537 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0537 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0537 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0537 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0537 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0537 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0537 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0537 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0537 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0537 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0537 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0537 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0537 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0537 .serviceGrid p{color:var(--muted)}
.zp0537 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0537 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0537 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0537 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0537 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0537 .testimonial>div{align-self:end}
.zp0537 .testimonial span{display:block;opacity:.7}
.zp0537 details{border-top:1px solid var(--border);padding:20px 0}
.zp0537 details summary{font-weight:800;cursor:pointer}
.zp0537 details p{color:var(--muted);max-width:70ch}
.zp0537 .priceRows{border-top:1px solid var(--border)}
.zp0537 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0537 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0537 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0537 .p1,.zp0537 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0537 .awards>div{max-width:800px;margin-left:auto}
.zp0537 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0537 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0537 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0537 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0537 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0537 .contact .eyebrow{color:var(--bg)}
.zp0537 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0537 .contactMeta{display:grid;gap:10px}
.zp0537 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0537 .heroCopy{animation:enter-536 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-536{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0537 .hero{min-height:auto}
.zp0537 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0537 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0537 .nav nav{display:none}
.zp0537 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0537 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0537 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0537 .mobileMenu nav a{padding:10px 8px}
.zp0537 .hero,.zp0537 .archiveHero{grid-template-columns:1fr}
.zp0537 .section,.zp0537 .sectionTitle,.zp0537 .contact{grid-template-columns:1fr}
.zp0537 .testimonial{grid-template-columns:1fr}
.zp0537 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0537 .section{display:block}}
@media(max-width:430px){.zp0537{font-size:16px}
.zp0537 .hero,.zp0537 .section,.zp0537 .contact{padding-left:18px;padding-right:18px}
.zp0537 .serviceGrid,.zp0537 .proof,.zp0537 .collectionGrid,.zp0537 .compareGrid{grid-template-columns:1fr}
.zp0537 h1{font-size:clamp(42px,14vw,70px)}
.zp0537 .priceRows article{grid-template-columns:1fr}}

.zp0537 .heroActions a,.zp0537 .primary,.zp0537 .ctaBtn,.zp0537 .btnPrimary,.zp0537 .schedule>a,.zp0537 .newsletter>a{transition:all .2s ease}
.zp0537 .heroActions a:hover,.zp0537 .primary:hover,.zp0537 .ctaBtn:hover,.zp0537 .btnPrimary:hover{
  transform:scale(1.05) rotate(-1deg)
}
.zp0537 nav a,.zp0537 .nav a,.zp0537 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0537 nav a:hover,.zp0537 .nav a:hover,.zp0537 .footer a:hover{
  color:var(--primary)
}
.zp0537 .serviceGrid article,.zp0537 .projectCard,.zp0537 .teamCard,.zp0537 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0537 .serviceGrid article:hover,.zp0537 .projectCard:hover,.zp0537 .teamCard:hover,.zp0537 .bentoCard:hover{
  transform:scale(1.02) rotate(.5deg)
}
@media(prefers-reduced-motion:reduce){.zp0537 *,.zp0537 *::before,.zp0537 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0537 a,.zp0537 button,.zp0537 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Playful / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
