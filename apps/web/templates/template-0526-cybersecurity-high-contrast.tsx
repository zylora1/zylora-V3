import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0526-cybersecurity-high-contrast", "family": "High Contrast", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|comparison-led|values>packages>collection>services>proof|circular|warm-editorial", "industry": "cybersecurity", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "comparison-led"};

export default function Template0526({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Cybersecurity Firm");
  const headline = String(content.headline || "Practical security that reduces exposure without slowing the business down.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Security assessments", "Managed detection", "Incident response", "Cloud security", "Compliance"];
  const industryLabel = "Cybersecurity firm";
  const serviceNotes = ["Penetration testing on infrastructure, web applications, and physical security.", "Incident response retainer: guaranteed 2h response, 24h containment commitment.", "Security awareness training delivered in-person and via self-paced modules.", "ISO 27001, Cyber Essentials, and SOC 2 readiness programmes end-to-end.", "Red team exercises that simulate advanced persistent threats realistically."];
  const proofPoints = ["CREST certified testers", "Incident response 24/7", "ISO 27001 certified", "CHECK approved"];
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0526" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0526{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0526 *{box-sizing:border-box}
.zp0526 a{color:inherit;text-decoration:none}
.zp0526 h1,.zp0526 h2,.zp0526 h3,.zp0526 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0526 img{max-width:100%;display:block}
.zp0526 button,.zp0526 a{-webkit-tap-highlight-color:transparent}
.zp0526 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0526 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0526 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0526 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0526 .nav.cluster{align-items:flex-end}
.zp0526 .mobileMenu{display:none}
.zp0526 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0526 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0526 .eyebrow,.zp0526 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0526 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0526 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0526 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0526 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0526 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0526 .visual,.zp0526 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0526 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0526 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0526 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0526 .heroPhoto{object-fit:cover}
.zp0526 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0526 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0526 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0526 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0526 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0526 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0526 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0526 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0526 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0526 .serviceGrid p{color:var(--muted)}
.zp0526 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0526 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0526 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0526 details{border-top:1px solid var(--border);padding:20px 0}
.zp0526 details summary{font-weight:800;cursor:pointer}
.zp0526 details p{color:var(--muted);max-width:70ch}
.zp0526 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0526 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0526 .p1,.zp0526 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0526 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Palatino Linotype, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0526 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0526 .packages>.sectionTitle{grid-column:1/-1}
.zp0526 .packages article{padding:24px;border:1px solid var(--border)}
.zp0526 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0526 .contact .eyebrow{color:var(--bg)}
.zp0526 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0526 .contactMeta{display:grid;gap:10px}
.zp0526 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0526 .heroCopy{animation:enter-525 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-525{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0526 .hero{min-height:auto}
.zp0526 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0526 .proof{grid-template-columns:1fr 1fr}
.zp0526 .packages{grid-template-columns:1fr 1fr}
.zp0526 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0526 .nav nav{display:none}
.zp0526 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0526 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0526 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0526 .mobileMenu nav a{padding:10px 8px}
.zp0526 .hero,.zp0526 .carouselHero{grid-template-columns:1fr}
.zp0526 .section,.zp0526 .sectionTitle,.zp0526 .contact{grid-template-columns:1fr}
.zp0526 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0526 .section{display:block}}
@media(max-width:430px){.zp0526{font-size:16px}
.zp0526 .hero,.zp0526 .section,.zp0526 .contact{padding-left:18px;padding-right:18px}
.zp0526 .serviceGrid,.zp0526 .proof,.zp0526 .collectionGrid,.zp0526 .packages{grid-template-columns:1fr}
.zp0526 h1{font-size:clamp(42px,14vw,70px)}}

.zp0526 .heroActions a,.zp0526 .primary,.zp0526 .ctaBtn,.zp0526 .btnPrimary,.zp0526 .schedule>a,.zp0526 .newsletter>a{transition:all .2s ease}
.zp0526 .heroActions a:hover,.zp0526 .primary:hover,.zp0526 .ctaBtn:hover,.zp0526 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0526 nav a,.zp0526 .nav a,.zp0526 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0526 nav a:hover,.zp0526 .nav a:hover,.zp0526 .footer a:hover{
  color:var(--primary)
}
.zp0526 .serviceGrid article,.zp0526 .projectCard,.zp0526 .teamCard,.zp0526 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0526 .serviceGrid article:hover,.zp0526 .projectCard:hover,.zp0526 .teamCard:hover,.zp0526 .bentoCard:hover{
  box-shadow:0 0 0 3px var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0526 *,.zp0526 *::before,.zp0526 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0526 a,.zp0526 button,.zp0526 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">25</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>High Contrast / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
