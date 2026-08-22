import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0114-sports-neo-futurism", "family": "Neo-futurism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|image-led-chapters|manifesto>gallery>services>story>materials>features>proof|borderless|utility", "industry": "sports", "hero": "gallery-wall", "navigation": "tabbed", "layout": "image-led-chapters"};

export default function Template0114({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const storyQuote = "\u201cStructured coaching that turns practice time into visible performance gains.\u201d";
  const storyBody = "Signal Sports Academy is presented as a real working sports academy, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0114" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0114{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0114 *{box-sizing:border-box}
.zp0114 a{color:inherit;text-decoration:none}
.zp0114 h1,.zp0114 h2,.zp0114 h3,.zp0114 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0114 img{max-width:100%;display:block}
.zp0114 button,.zp0114 a{-webkit-tap-highlight-color:transparent}
.zp0114 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0114 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0114 .nav strong{font-family:Verdana, sans-serif;font-size:18px}
.zp0114 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0114 .mobileMenu{display:none}
.zp0114 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0114 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0114 .eyebrow,.zp0114 .sectionTitle>span,.zp0114 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0114 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0114 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0114 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0114 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0114 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0114 .wallHero{grid-template-columns:1fr 1fr}
.zp0114 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0114 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0114 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0114 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0114 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0114 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0114 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0114 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0114 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0114 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0114 .serviceGrid p{color:var(--muted)}
.zp0114 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0114 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0114 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0114 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0114 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0114 .story p{color:var(--muted)}
.zp0114 details{border-top:1px solid var(--border);padding:20px 0}
.zp0114 details summary{font-weight:800;cursor:pointer}
.zp0114 details p{color:var(--muted);max-width:70ch}
.zp0114 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0114 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0114 .galleryGrid>*:first-child{grid-row:1/3}
.zp0114 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0114 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0114 .g2,.zp0114 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0114 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0114 .features ul{list-style:none;margin:0;padding:0}
.zp0114 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0114 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0114 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0114 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0114 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0114 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Verdana, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0114 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0114 .contact .eyebrow{color:var(--bg)}
.zp0114 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0114 .contactMeta{display:grid;gap:10px}
.zp0114 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0114 .heroCopy{animation:enter-113 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-113{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0114 .hero{min-height:auto}
.zp0114 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0114 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0114 .nav nav{display:none}
.zp0114 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0114 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0114 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0114 .mobileMenu nav a{padding:10px 8px}
.zp0114 .hero,.zp0114 .wallHero{grid-template-columns:1fr}
.zp0114 .section,.zp0114 .sectionTitle,.zp0114 .story,.zp0114 .features,.zp0114 .contact{grid-template-columns:1fr}
.zp0114 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0114 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0114 .section{display:block}}
@media(max-width:430px){.zp0114{font-size:16px}
.zp0114 .hero,.zp0114 .section,.zp0114 .contact{padding-left:18px;padding-right:18px}
.zp0114 .serviceGrid,.zp0114 .proof{grid-template-columns:1fr}
.zp0114 h1{font-size:clamp(42px,14vw,70px)}
.zp0114 .galleryGrid{grid-template-columns:1fr}
.zp0114 .galleryGrid>*:first-child{grid-column:auto}}

.zp0114 .heroActions a,.zp0114 .primary,.zp0114 .ctaBtn,.zp0114 .btnPrimary,.zp0114 .schedule>a,.zp0114 .newsletter>a{transition:all .2s ease}
.zp0114 .heroActions a:hover,.zp0114 .primary:hover,.zp0114 .ctaBtn:hover,.zp0114 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0114 nav a,.zp0114 .nav a,.zp0114 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0114 nav a:hover,.zp0114 .nav a:hover,.zp0114 .footer a:hover{
  color:var(--primary)
}
.zp0114 .serviceGrid article,.zp0114 .projectCard,.zp0114 .teamCard,.zp0114 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0114 .serviceGrid article:hover,.zp0114 .projectCard:hover,.zp0114 .teamCard:hover,.zp0114 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0114 *,.zp0114 *::before,.zp0114 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0114 a,.zp0114 button,.zp0114 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-futurism / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
