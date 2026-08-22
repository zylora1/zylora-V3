import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0401-finance-earthy", "family": "Earthy", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|schedule-led|services>proof>features>gallery>schedule>team|square-editorial|friendly", "industry": "finance", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "schedule-led"};

export default function Template0401({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Financial Advisory");
  const headline = String(content.headline || "Clear financial decisions built around goals, risk, and the life behind the numbers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Financial planning", "Investments", "Retirement", "Estate strategy", "Business-owner planning"];
  const serviceNotes = ["Whole-of-market mortgage advice covering 90+ lenders, not a panel.", "Protection review included with every mortgage: life, income, and critical illness covered.", "Business lending specialists for commercial mortgages, bridging, and development finance.", "First-time buyer programme with dedicated support from application to keys.", "Annual mortgage review: we check your rate automatically and flag remortgage opportunities."];
  const proofPoints = ["FCA authorised and regulated", "Whole-of-market access", "No broker fee to clients", "95% recommend us"];
  const testimonial = "My mortgage application was complex — self-employed, irregular income, quirky property. They found a lender on the first search.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Financial advisory / Project A", "Financial advisory / Project B", "Financial advisory / Project C", "Financial advisory / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear financial decisions built around goals, risk, and the life behind the numbers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0401" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0401{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0401 *{box-sizing:border-box}
.zp0401 a{color:inherit;text-decoration:none}
.zp0401 h1,.zp0401 h2,.zp0401 h3,.zp0401 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0401 img{max-width:100%;display:block}
.zp0401 button,.zp0401 a{-webkit-tap-highlight-color:transparent}
.zp0401 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0401 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0401 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0401 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0401 .mobileMenu{display:none}
.zp0401 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0401 .eyebrow,.zp0401 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0401 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0401 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0401 .visual,.zp0401 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0401 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0401 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0401 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0401 .heroPhoto{object-fit:cover}
.zp0401 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0401 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0401 .coverCaption{align-self:end}
.zp0401 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0401 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0401 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0401 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0401 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0401 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0401 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0401 .serviceGrid p{color:var(--muted)}
.zp0401 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0401 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0401 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0401 details{border-top:1px solid var(--border);padding:20px 0}
.zp0401 details summary{font-weight:800;cursor:pointer}
.zp0401 details p{color:var(--muted);max-width:70ch}
.zp0401 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0401 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0401 .galleryGrid>*:first-child{grid-row:1/3}
.zp0401 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0401 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0401 .g2,.zp0401 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0401 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0401 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0401 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Trebuchet MS, Arial, sans-serif;margin-bottom:18px}
.zp0401 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0401 .features ul{list-style:none;margin:0;padding:0}
.zp0401 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0401 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0401 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0401 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0401 .contact .eyebrow{color:var(--bg)}
.zp0401 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0401 .contactMeta{display:grid;gap:10px}
.zp0401 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-400{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0401 .hero{min-height:auto}
.zp0401 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0401 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0401 .nav nav{display:none}
.zp0401 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0401 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0401 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0401 .mobileMenu nav a{padding:10px 8px}
.zp0401 .hero,.zp0401 .coverHero{grid-template-columns:1fr}
.zp0401 .section,.zp0401 .sectionTitle,.zp0401 .features,.zp0401 .contact{grid-template-columns:1fr}
.zp0401 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0401 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0401 .teamGrid{grid-template-columns:1fr 1fr}
.zp0401 .section{display:block}}
@media(max-width:430px){.zp0401{font-size:16px}
.zp0401 .hero,.zp0401 .section,.zp0401 .contact{padding-left:18px;padding-right:18px}
.zp0401 .serviceGrid,.zp0401 .proof,.zp0401 .teamGrid{grid-template-columns:1fr}
.zp0401 h1{font-size:clamp(42px,14vw,70px)}
.zp0401 .galleryGrid{grid-template-columns:1fr}
.zp0401 .galleryGrid>*:first-child{grid-column:auto}}

.zp0401 .heroActions a,.zp0401 .primary,.zp0401 .ctaBtn,.zp0401 .btnPrimary,.zp0401 .schedule>a,.zp0401 .newsletter>a{transition:all .2s ease}
.zp0401 .heroActions a:hover,.zp0401 .primary:hover,.zp0401 .ctaBtn:hover,.zp0401 .btnPrimary:hover{
  opacity:.85;transform:translateY(-1px)
}
.zp0401 nav a,.zp0401 .nav a,.zp0401 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0401 nav a:hover,.zp0401 .nav a:hover,.zp0401 .footer a:hover{
  color:var(--primary)
}
.zp0401 .serviceGrid article,.zp0401 .projectCard,.zp0401 .teamCard,.zp0401 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0401 .serviceGrid article:hover,.zp0401 .projectCard:hover,.zp0401 .teamCard:hover,.zp0401 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0401 *,.zp0401 *::before,.zp0401 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0401 a,.zp0401 button,.zp0401 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0401</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">00</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Earthy / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
