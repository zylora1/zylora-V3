import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0747-portfolio-sports-editorial", "family": "Sports Editorial", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|timeline-narrative|menu>process>security>services>packages>schedule>proof|capsule|poster", "industry": "portfolio", "hero": "split-image", "navigation": "statement-bar", "layout": "timeline-narrative"};

export default function Template0747({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const industryLabel = "Creative portfolio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0747" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0747{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0747 *{box-sizing:border-box}
.zp0747 a{color:inherit;text-decoration:none}
.zp0747 h1,.zp0747 h2,.zp0747 h3,.zp0747 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0747 img{max-width:100%;display:block}
.zp0747 button,.zp0747 a{-webkit-tap-highlight-color:transparent}
.zp0747 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0747 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0747 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0747 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0747 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0747 .nav.statement>a{justify-self:end}
.zp0747 .mobileMenu{display:none}
.zp0747 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0747 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0747 .eyebrow,.zp0747 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0747 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0747 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0747 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0747 .heroActions a,.zp0747 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0747 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0747 .visual,.zp0747 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0747 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0747 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0747 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0747 .heroPhoto{object-fit:cover}
.zp0747 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0747 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0747 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0747 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0747 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0747 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0747 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0747 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0747 .serviceGrid p{color:var(--muted)}
.zp0747 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0747 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0747 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0747 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0747 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0747 details{border-top:1px solid var(--border);padding:20px 0}
.zp0747 details summary{font-weight:800;cursor:pointer}
.zp0747 details p{color:var(--muted);max-width:70ch}
.zp0747 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0747 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0747 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0747 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0747 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0747 .packages>.sectionTitle{grid-column:1/-1}
.zp0747 .packages article{padding:24px;border:1px solid var(--border)}
.zp0747 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0747 .contact .eyebrow{color:var(--bg)}
.zp0747 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0747 .contactMeta{display:grid;gap:10px}
.zp0747 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0747 .heroCopy{animation:enter-746 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-746{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0747 .hero{min-height:auto}
.zp0747 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0747 .proof{grid-template-columns:1fr 1fr}
.zp0747 .packages{grid-template-columns:1fr 1fr}
.zp0747 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0747 .nav nav{display:none}
.zp0747 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0747 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0747 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0747 .mobileMenu nav a{padding:10px 8px}
.zp0747 .hero,.zp0747 .splitHero{grid-template-columns:1fr}
.zp0747 .section,.zp0747 .sectionTitle,.zp0747 .security,.zp0747 .contact{grid-template-columns:1fr}
.zp0747 .section{display:block}}
@media(max-width:430px){.zp0747{font-size:16px}
.zp0747 .hero,.zp0747 .section,.zp0747 .contact{padding-left:18px;padding-right:18px}
.zp0747 .serviceGrid,.zp0747 .proof,.zp0747 .packages{grid-template-columns:1fr}
.zp0747 h1{font-size:clamp(42px,14vw,70px)}
.zp0747 .nav.statement{grid-template-columns:1fr auto}
.zp0747 .nav.statement>span:first-child{display:none}}

.zp0747 .heroActions a,.zp0747 .primary,.zp0747 .ctaBtn,.zp0747 .btnPrimary,.zp0747 .schedule>a,.zp0747 .newsletter>a{transition:all .2s ease}
.zp0747 .heroActions a:hover,.zp0747 .primary:hover,.zp0747 .ctaBtn:hover,.zp0747 .btnPrimary:hover{
  opacity:.8
}
.zp0747 nav a,.zp0747 .nav a,.zp0747 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0747 nav a:hover,.zp0747 .nav a:hover,.zp0747 .footer a:hover{
  color:var(--primary)
}
.zp0747 .serviceGrid article,.zp0747 .projectCard,.zp0747 .teamCard,.zp0747 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0747 .serviceGrid article:hover,.zp0747 .projectCard:hover,.zp0747 .teamCard:hover,.zp0747 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0747 *,.zp0747 *::before,.zp0747 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0747 a,.zp0747 button,.zp0747 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">46</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
