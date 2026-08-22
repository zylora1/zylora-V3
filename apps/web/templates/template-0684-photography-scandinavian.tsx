import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0684-photography-scandinavian", "family": "Scandinavian", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|catalogue-table|gallery>services>awards>press>pricing>proof>process|notched|literary", "industry": "photography", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "catalogue-table"};

export default function Template0684({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Photography Studio");
  const headline = String(content.headline || "Photography with a clear visual language and production that stays calm on set.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Editorial", "Commercial", "Portraits", "Campaigns", "Licensing"];
  const industryLabel = "Photography studio";
  const serviceNotes = ["Commercial and editorial commissions with same-day turnaround for press deadlines.", "Natural-light and studio sessions available with full styling coordination.", "Wedding coverage: two photographers, full day, premium album design and print.", "Brand photography packages with art direction, prop sourcing, and retouching.", "Archival printing on fine art paper — limited editions signed and numbered."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Published: The Sunday Times, FT Weekend", "35mm and digital capability", "2-week edit turnaround guaranteed", "RAW files included"];
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0684" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0684{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0684 *{box-sizing:border-box}
.zp0684 a{color:inherit;text-decoration:none}
.zp0684 h1,.zp0684 h2,.zp0684 h3,.zp0684 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0684 img{max-width:100%;display:block}
.zp0684 button,.zp0684 a{-webkit-tap-highlight-color:transparent}
.zp0684 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0684 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0684 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0684 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0684 .mobileMenu{display:none}
.zp0684 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0684 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0684 .eyebrow,.zp0684 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0684 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0684 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0684 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0684 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0684 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0684 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0684 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0684 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0684 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0684 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0684 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0684 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0684 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0684 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0684 .serviceGrid p{color:var(--muted)}
.zp0684 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0684 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0684 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0684 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0684 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0684 details{border-top:1px solid var(--border);padding:20px 0}
.zp0684 details summary{font-weight:800;cursor:pointer}
.zp0684 details p{color:var(--muted);max-width:70ch}
.zp0684 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0684 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0684 .galleryGrid>*:first-child{grid-row:1/3}
.zp0684 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0684 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0684 .g2,.zp0684 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0684 .priceRows{border-top:1px solid var(--border)}
.zp0684 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0684 .awards>div{max-width:800px;margin-left:auto}
.zp0684 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0684 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0684 .contact .eyebrow{color:var(--bg)}
.zp0684 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0684 .contactMeta{display:grid;gap:10px}
.zp0684 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0684 .heroCopy{animation:enter-683 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-683{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0684 .hero{min-height:auto}
.zp0684 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0684 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0684 .nav nav{display:none}
.zp0684 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0684 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0684 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0684 .mobileMenu nav a{padding:10px 8px}
.zp0684 .hero,.zp0684 .navLedHero{grid-template-columns:1fr}
.zp0684 .section,.zp0684 .sectionTitle,.zp0684 .contact{grid-template-columns:1fr}
.zp0684 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0684 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0684 .section{display:block}}
@media(max-width:430px){.zp0684{font-size:16px}
.zp0684 .hero,.zp0684 .section,.zp0684 .contact{padding-left:18px;padding-right:18px}
.zp0684 .serviceGrid,.zp0684 .proof{grid-template-columns:1fr}
.zp0684 h1{font-size:clamp(42px,14vw,70px)}
.zp0684 .priceRows article{grid-template-columns:1fr}
.zp0684 .galleryGrid{grid-template-columns:1fr}
.zp0684 .galleryGrid>*:first-child{grid-column:auto}}

.zp0684 .heroActions a,.zp0684 .primary,.zp0684 .ctaBtn,.zp0684 .btnPrimary,.zp0684 .schedule>a,.zp0684 .newsletter>a{transition:all .2s ease}
.zp0684 .heroActions a:hover,.zp0684 .primary:hover,.zp0684 .ctaBtn:hover,.zp0684 .btnPrimary:hover{
  opacity:.75
}
.zp0684 nav a,.zp0684 .nav a,.zp0684 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0684 nav a:hover,.zp0684 .nav a:hover,.zp0684 .footer a:hover{
  opacity:.65
}
.zp0684 .serviceGrid article,.zp0684 .projectCard,.zp0684 .teamCard,.zp0684 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0684 .serviceGrid article:hover,.zp0684 .projectCard:hover,.zp0684 .teamCard:hover,.zp0684 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0684 *,.zp0684 *::before,.zp0684 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0684 a,.zp0684 button,.zp0684 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
