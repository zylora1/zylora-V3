import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0554-developer-gradient-mesh", "family": "Gradient Mesh", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|masonry-story|community>gallery>services>features>press>proof|paper-sheet|modernist-duo", "industry": "developer", "hero": "service-led", "navigation": "left-sidebar", "layout": "masonry-story"};

export default function Template0554({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Developer Portfolio");
  const headline = String(content.headline || "A focused record of shipped software, technical decisions, and measurable impact.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product work", "Open source", "Technical writing", "Speaking", "Consulting"];
  const industryLabel = "Developer portfolio";
  const serviceNotes = ["Full-stack capability: from database architecture to accessible frontend interfaces.", "Open-source contributors with real community credibility and public track record.", "Performance-first: Lighthouse scores reviewed and targets agreed before launch.", "Accessibility to WCAG 2.2 AA as a baseline requirement, not an optional extra.", "Retainer options for ongoing development, features, and maintenance."];
  const proofPoints = ["Core Web Vitals: all green", "WCAG 2.2 AA standard", "GitHub: 2,000+ contributions", "8-year average tenure"];
  const storyBody = "Arc Developer Portfolio is presented as a real working developer portfolio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0554" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0554{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0554 *{box-sizing:border-box}
.zp0554 a{color:inherit;text-decoration:none}
.zp0554 h1,.zp0554 h2,.zp0554 h3,.zp0554 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0554 img{max-width:100%;display:block}
.zp0554 button,.zp0554 a{-webkit-tap-highlight-color:transparent}
.zp0554 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0554 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0554 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0554 .mobileMenu{display:none}
.zp0554:has(.navRail)>.hero,.zp0554:has(.navRail)>.section,.zp0554:has(.navRail)>.contact,.zp0554:has(.navRail)>.footer{margin-left:190px}
.zp0554 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0554 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0554 .eyebrow,.zp0554 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0554 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0554 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0554 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0554 .heroActions a,.zp0554 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0554 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0554 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0554 .serviceHeroList{display:grid;gap:4px}
.zp0554 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0554 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0554 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0554 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0554 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0554 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0554 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0554 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0554 .serviceGrid p{color:var(--muted)}
.zp0554 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0554 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0554 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0554 details{border-top:1px solid var(--border);padding:20px 0}
.zp0554 details summary{font-weight:800;cursor:pointer}
.zp0554 details p{color:var(--muted);max-width:70ch}
.zp0554 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0554 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0554 .galleryGrid>*:first-child{grid-row:1/3}
.zp0554 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0554 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0554 .g2,.zp0554 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0554 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0554 .features ul{list-style:none;margin:0;padding:0}
.zp0554 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0554 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0554 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0554 .awards>div{max-width:800px;margin-left:auto}
.zp0554 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0554 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0554 .contact .eyebrow{color:var(--bg)}
.zp0554 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0554 .contactMeta{display:grid;gap:10px}
.zp0554 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0554{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0554 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0554 .heroCopy{animation:enter-553 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-553{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0554 .hero{min-height:auto}
.zp0554 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0554 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0554 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0554 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0554 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0554 .mobileMenu nav a{padding:10px 8px}
.zp0554 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0554:has(.navRail)>.hero,.zp0554:has(.navRail)>.section,.zp0554:has(.navRail)>.contact,.zp0554:has(.navRail)>.footer{margin-left:0}
.zp0554 .hero,.zp0554 .serviceHero{grid-template-columns:1fr}
.zp0554 .section,.zp0554 .sectionTitle,.zp0554 .features,.zp0554 .contact{grid-template-columns:1fr}
.zp0554 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0554 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0554 .section{display:block}}
@media(max-width:430px){.zp0554{font-size:16px}
.zp0554 .hero,.zp0554 .section,.zp0554 .contact{padding-left:18px;padding-right:18px}
.zp0554 .serviceGrid,.zp0554 .proof{grid-template-columns:1fr}
.zp0554 h1{font-size:clamp(42px,14vw,70px)}
.zp0554 .galleryGrid{grid-template-columns:1fr}
.zp0554 .galleryGrid>*:first-child{grid-column:auto}}

.zp0554 .heroActions a,.zp0554 .primary,.zp0554 .ctaBtn,.zp0554 .btnPrimary,.zp0554 .schedule>a,.zp0554 .newsletter>a{transition:all .2s ease}
.zp0554 .heroActions a:hover,.zp0554 .primary:hover,.zp0554 .ctaBtn:hover,.zp0554 .btnPrimary:hover{
  opacity:.9;box-shadow:0 4px 16px rgba(0,0,0,.2)
}
.zp0554 nav a,.zp0554 .nav a,.zp0554 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0554 nav a:hover,.zp0554 .nav a:hover,.zp0554 .footer a:hover{
  color:var(--primary)
}
.zp0554 .serviceGrid article,.zp0554 .projectCard,.zp0554 .teamCard,.zp0554 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0554 .serviceGrid article:hover,.zp0554 .projectCard:hover,.zp0554 .teamCard:hover,.zp0554 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0554 *,.zp0554 *::before,.zp0554 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0554 a,.zp0554 button,.zp0554 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Gradient Mesh / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
