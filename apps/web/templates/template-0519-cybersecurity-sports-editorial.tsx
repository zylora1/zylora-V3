import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0519-cybersecurity-sports-editorial", "family": "Sports Editorial", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|product-journey|gallery>process>press>credentials>community>services>proof|asymmetric-radius|geometric", "industry": "cybersecurity", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "product-journey"};

export default function Template0519({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Cybersecurity Firm");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["CREST certified testers", "Incident response 24/7", "ISO 27001 certified", "CHECK approved"];
  const storyBody = "Lumen Cybersecurity Firm is presented as a real working cybersecurity firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0519" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0519{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0519 *{box-sizing:border-box}
.zp0519 a{color:inherit;text-decoration:none}
.zp0519 h1,.zp0519 h2,.zp0519 h3,.zp0519 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0519 img{max-width:100%;display:block}
.zp0519 button,.zp0519 a{-webkit-tap-highlight-color:transparent}
.zp0519 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0519 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0519 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0519 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0519 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0519 .nav.index nav{justify-content:flex-end}
.zp0519 .mobileMenu{display:none}
.zp0519 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0519 .eyebrow,.zp0519 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0519 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0519 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0519 .minimalHero{display:block;min-height:74vh}
.zp0519 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0519 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0519 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0519 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0519 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0519 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0519 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0519 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0519 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0519 .serviceGrid p{color:var(--muted)}
.zp0519 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0519 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0519 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0519 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0519 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0519 details{border-top:1px solid var(--border);padding:20px 0}
.zp0519 details summary{font-weight:800;cursor:pointer}
.zp0519 details p{color:var(--muted);max-width:70ch}
.zp0519 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0519 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0519 .galleryGrid>*:first-child{grid-row:1/3}
.zp0519 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0519 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0519 .g2,.zp0519 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0519 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0519 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0519 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0519 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0519 .awards>div{max-width:800px;margin-left:auto}
.zp0519 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0519 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0519 .contact .eyebrow{color:var(--bg)}
.zp0519 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0519 .contactMeta{display:grid;gap:10px}
.zp0519 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-518{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0519 .hero{min-height:auto}
.zp0519 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0519 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0519 .nav nav{display:none}
.zp0519 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0519 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0519 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0519 .mobileMenu nav a{padding:10px 8px}
.zp0519 .hero{grid-template-columns:1fr}
.zp0519 .section,.zp0519 .sectionTitle,.zp0519 .contact{grid-template-columns:1fr}
.zp0519 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0519 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0519 .section{display:block}}
@media(max-width:430px){.zp0519{font-size:16px}
.zp0519 .hero,.zp0519 .section,.zp0519 .contact{padding-left:18px;padding-right:18px}
.zp0519 .serviceGrid,.zp0519 .proof{grid-template-columns:1fr}
.zp0519 h1{font-size:clamp(42px,14vw,70px)}
.zp0519 .galleryGrid{grid-template-columns:1fr}
.zp0519 .galleryGrid>*:first-child{grid-column:auto}
.zp0519 .minimalFoot{grid-template-columns:1fr}
.zp0519 .nav.index{grid-template-columns:1fr auto}
.zp0519 .nav.index>span{display:none}}

.zp0519 .heroActions a,.zp0519 .primary,.zp0519 .ctaBtn,.zp0519 .btnPrimary,.zp0519 .schedule>a,.zp0519 .newsletter>a{transition:all .2s ease}
.zp0519 .heroActions a:hover,.zp0519 .primary:hover,.zp0519 .ctaBtn:hover,.zp0519 .btnPrimary:hover{
  opacity:.8
}
.zp0519 nav a,.zp0519 .nav a,.zp0519 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0519 nav a:hover,.zp0519 .nav a:hover,.zp0519 .footer a:hover{
  color:var(--primary)
}
.zp0519 .serviceGrid article,.zp0519 .projectCard,.zp0519 .teamCard,.zp0519 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0519 .serviceGrid article:hover,.zp0519 .projectCard:hover,.zp0519 .teamCard:hover,.zp0519 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0519 *,.zp0519 *::before,.zp0519 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0519 a,.zp0519 button,.zp0519 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
