import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0026-medical-terminal-inspired", "family": "Terminal-inspired", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|menu-led|values>gallery>services>timeline>research>proof|paper-sheet|modernist-duo", "industry": "medical", "hero": "product-demo", "navigation": "left-sidebar", "layout": "menu-led"};

export default function Template0026({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0026" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0026{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0026 *{box-sizing:border-box}
.zp0026 a{color:inherit;text-decoration:none}
.zp0026 h1,.zp0026 h2,.zp0026 h3,.zp0026 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0026 img{max-width:100%;display:block}
.zp0026 button,.zp0026 a{-webkit-tap-highlight-color:transparent}
.zp0026 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0026 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0026 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0026 .mobileMenu{display:none}
.zp0026:has(.navRail)>.hero,.zp0026:has(.navRail)>.section,.zp0026:has(.navRail)>.contact,.zp0026:has(.navRail)>.footer{margin-left:190px}
.zp0026 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0026 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0026 .eyebrow,.zp0026 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0026 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0026 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0026 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0026 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0026 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0026 .visual,.zp0026 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0026 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0026 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0026 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0026 .heroPhoto{object-fit:cover}
.zp0026 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0026 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0026 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0026 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0026 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0026 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0026 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0026 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0026 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0026 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0026 .serviceGrid p{color:var(--muted)}
.zp0026 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0026 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0026 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0026 details{border-top:1px solid var(--border);padding:20px 0}
.zp0026 details summary{font-weight:800;cursor:pointer}
.zp0026 details p{color:var(--muted);max-width:70ch}
.zp0026 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0026 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0026 .galleryGrid>*:first-child{grid-row:1/3}
.zp0026 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0026 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0026 .g2,.zp0026 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0026 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0026 .timeline article{padding:20px 0}
.zp0026 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Futura, Avenir, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0026 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0026 .researchRows{max-width:900px;margin-left:auto}
.zp0026 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0026 .contact .eyebrow{color:var(--bg)}
.zp0026 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0026 .contactMeta{display:grid;gap:10px}
.zp0026 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0026{image-rendering:pixelated}
.zp0026 *{border-radius:0!important}
.zp0026 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp0026 .heroCopy{animation:enter-25 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-25{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0026 .hero{min-height:auto}
.zp0026 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0026 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0026 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0026 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0026 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0026 .mobileMenu nav a{padding:10px 8px}
.zp0026 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0026:has(.navRail)>.hero,.zp0026:has(.navRail)>.section,.zp0026:has(.navRail)>.contact,.zp0026:has(.navRail)>.footer{margin-left:0}
.zp0026 .hero,.zp0026 .productHero{grid-template-columns:1fr}
.zp0026 .section,.zp0026 .sectionTitle,.zp0026 .contact{grid-template-columns:1fr}
.zp0026 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0026 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0026 .section{display:block}}
@media(max-width:430px){.zp0026{font-size:16px}
.zp0026 .hero,.zp0026 .section,.zp0026 .contact{padding-left:18px;padding-right:18px}
.zp0026 .serviceGrid,.zp0026 .proof{grid-template-columns:1fr}
.zp0026 h1{font-size:clamp(42px,14vw,70px)}
.zp0026 .galleryGrid{grid-template-columns:1fr}
.zp0026 .galleryGrid>*:first-child{grid-column:auto}}

.zp0026 .heroActions a,.zp0026 .primary,.zp0026 .ctaBtn,.zp0026 .btnPrimary,.zp0026 .schedule>a,.zp0026 .newsletter>a{transition:all .2s ease}
.zp0026 .heroActions a:hover,.zp0026 .primary:hover,.zp0026 .ctaBtn:hover,.zp0026 .btnPrimary:hover{
  opacity:.85
}
.zp0026 nav a,.zp0026 .nav a,.zp0026 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0026 nav a:hover,.zp0026 .nav a:hover,.zp0026 .footer a:hover{
  color:var(--primary)
}
.zp0026 .serviceGrid article,.zp0026 .projectCard,.zp0026 .teamCard,.zp0026 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0026 .serviceGrid article:hover,.zp0026 .projectCard:hover,.zp0026 .teamCard:hover,.zp0026 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0026 *,.zp0026 *::before,.zp0026 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0026 a,.zp0026 button,.zp0026 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">25</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Terminal-inspired / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
