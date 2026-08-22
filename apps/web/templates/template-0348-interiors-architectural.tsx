import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0348-interiors-architectural", "family": "Architectural", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|property-led|process>team>integrations>community>services>gallery>proof|notched|literary", "industry": "interiors", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "property-led"};

export default function Template0348({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const storyBody = "Elm Interior Design Studio is presented as a real working interior design studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0348" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0348{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0348 *{box-sizing:border-box}
.zp0348 a{color:inherit;text-decoration:none}
.zp0348 h1,.zp0348 h2,.zp0348 h3,.zp0348 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0348 img{max-width:100%;display:block}
.zp0348 button,.zp0348 a{-webkit-tap-highlight-color:transparent}
.zp0348 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0348 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0348 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0348 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0348 .mobileMenu{display:none}
.zp0348 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0348 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0348 .eyebrow,.zp0348 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0348 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0348 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0348 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0348 .heroActions a,.zp0348 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0348 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0348 .mapHero{grid-template-columns:1fr 1fr}
.zp0348 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0348 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0348 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0348 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0348 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0348 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0348 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0348 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0348 .serviceGrid p{color:var(--muted)}
.zp0348 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0348 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0348 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0348 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0348 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0348 details{border-top:1px solid var(--border);padding:20px 0}
.zp0348 details summary{font-weight:800;cursor:pointer}
.zp0348 details p{color:var(--muted);max-width:70ch}
.zp0348 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0348 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0348 .galleryGrid>*:first-child{grid-row:1/3}
.zp0348 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0348 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0348 .g2,.zp0348 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0348 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0348 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0348 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Garamond, Georgia, serif;margin-bottom:18px}
.zp0348 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0348 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0348 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0348 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0348 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0348 .contact .eyebrow{color:var(--bg)}
.zp0348 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0348 .contactMeta{display:grid;gap:10px}
.zp0348 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0348 .heroCopy{animation:enter-347 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-347{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0348 .hero{min-height:auto}
.zp0348 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0348 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0348 .nav nav{display:none}
.zp0348 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0348 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0348 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0348 .mobileMenu nav a{padding:10px 8px}
.zp0348 .hero,.zp0348 .mapHero{grid-template-columns:1fr}
.zp0348 .section,.zp0348 .sectionTitle,.zp0348 .contact{grid-template-columns:1fr}
.zp0348 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0348 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0348 .teamGrid{grid-template-columns:1fr 1fr}
.zp0348 .section{display:block}}
@media(max-width:430px){.zp0348{font-size:16px}
.zp0348 .hero,.zp0348 .section,.zp0348 .contact{padding-left:18px;padding-right:18px}
.zp0348 .serviceGrid,.zp0348 .proof,.zp0348 .teamGrid{grid-template-columns:1fr}
.zp0348 h1{font-size:clamp(42px,14vw,70px)}
.zp0348 .galleryGrid{grid-template-columns:1fr}
.zp0348 .galleryGrid>*:first-child{grid-column:auto}}

.zp0348 .heroActions a,.zp0348 .primary,.zp0348 .ctaBtn,.zp0348 .btnPrimary,.zp0348 .schedule>a,.zp0348 .newsletter>a{transition:all .2s ease}
.zp0348 .heroActions a:hover,.zp0348 .primary:hover,.zp0348 .ctaBtn:hover,.zp0348 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0348 nav a,.zp0348 .nav a,.zp0348 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0348 nav a:hover,.zp0348 .nav a:hover,.zp0348 .footer a:hover{
  opacity:.7
}
.zp0348 .serviceGrid article,.zp0348 .projectCard,.zp0348 .teamCard,.zp0348 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0348 .serviceGrid article:hover,.zp0348 .projectCard:hover,.zp0348 .teamCard:hover,.zp0348 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0348 *,.zp0348 *::before,.zp0348 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0348 a,.zp0348 button,.zp0348 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
