import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0267-resort-scrapbook", "family": "Scrapbook", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|product-journey|projects>services>proof>newsletter>gallery>location>comparison|capsule|poster", "industry": "resort", "hero": "split-image", "navigation": "statement-bar", "layout": "product-journey"};

export default function Template0267({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0267" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0267{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0267 *{box-sizing:border-box}
.zp0267 a{color:inherit;text-decoration:none}
.zp0267 h1,.zp0267 h2,.zp0267 h3,.zp0267 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0267 img{max-width:100%;display:block}
.zp0267 button,.zp0267 a{-webkit-tap-highlight-color:transparent}
.zp0267 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0267 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0267 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0267 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0267 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0267 .nav.statement>a{justify-self:end}
.zp0267 .mobileMenu{display:none}
.zp0267 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0267 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0267 .eyebrow,.zp0267 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0267 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0267 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0267 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0267 .heroActions a,.zp0267 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0267 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0267 .visual,.zp0267 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0267 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0267 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0267 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0267 .heroPhoto{object-fit:cover}
.zp0267 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0267 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0267 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0267 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0267 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0267 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0267 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0267 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0267 .serviceGrid p{color:var(--muted)}
.zp0267 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0267 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0267 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0267 details{border-top:1px solid var(--border);padding:20px 0}
.zp0267 details summary{font-weight:800;cursor:pointer}
.zp0267 details p{color:var(--muted);max-width:70ch}
.zp0267 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0267 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0267 .galleryGrid>*:first-child{grid-row:1/3}
.zp0267 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0267 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0267 .g2,.zp0267 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0267 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0267 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0267 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0267 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0267 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0267 .projects article:nth-child(2){transform:translateY(32px)}
.zp0267 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0267 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0267 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0267 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0267 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0267 .contact .eyebrow{color:var(--bg)}
.zp0267 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0267 .contactMeta{display:grid;gap:10px}
.zp0267 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0267{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0267 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0267 .heroCopy{animation:enter-266 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-266{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0267 .hero{min-height:auto}
.zp0267 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0267 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0267 .nav nav{display:none}
.zp0267 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0267 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0267 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0267 .mobileMenu nav a{padding:10px 8px}
.zp0267 .hero,.zp0267 .splitHero{grid-template-columns:1fr}
.zp0267 .section,.zp0267 .sectionTitle,.zp0267 .location,.zp0267 .contact{grid-template-columns:1fr}
.zp0267 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0267 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0267 .projects .projectGrid{grid-template-columns:1fr}
.zp0267 .projects article:nth-child(2){transform:none}
.zp0267 .section{display:block}}
@media(max-width:430px){.zp0267{font-size:16px}
.zp0267 .hero,.zp0267 .section,.zp0267 .contact{padding-left:18px;padding-right:18px}
.zp0267 .serviceGrid,.zp0267 .proof,.zp0267 .compareGrid{grid-template-columns:1fr}
.zp0267 h1{font-size:clamp(42px,14vw,70px)}
.zp0267 .galleryGrid{grid-template-columns:1fr}
.zp0267 .galleryGrid>*:first-child{grid-column:auto}
.zp0267 .nav.statement{grid-template-columns:1fr auto}
.zp0267 .nav.statement>span:first-child{display:none}}

.zp0267 .heroActions a,.zp0267 .primary,.zp0267 .ctaBtn,.zp0267 .btnPrimary,.zp0267 .schedule>a,.zp0267 .newsletter>a{transition:all .2s ease}
.zp0267 .heroActions a:hover,.zp0267 .primary:hover,.zp0267 .ctaBtn:hover,.zp0267 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0267 nav a,.zp0267 .nav a,.zp0267 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0267 nav a:hover,.zp0267 .nav a:hover,.zp0267 .footer a:hover{
  color:var(--primary)
}
.zp0267 .serviceGrid article,.zp0267 .projectCard,.zp0267 .teamCard,.zp0267 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0267 .serviceGrid article:hover,.zp0267 .projectCard:hover,.zp0267 .teamCard:hover,.zp0267 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0267 *,.zp0267 *::before,.zp0267 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0267 a,.zp0267 button,.zp0267 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">66</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
