import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0508-startup-dark-cinematic", "family": "Dark Cinematic", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|offset-cards|metrics>projects>collection>proof>services|notched|sports-editorial", "industry": "startup", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "offset-cards"};

export default function Template0508({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Technology Startup");
  const headline = String(content.headline || "A new product with a precise problem, a credible point of view, and proof it works.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product", "Solutions", "Research", "Customer stories", "Careers"];
  const industryLabel = "Technology startup";
  const serviceNotes = ["Advisory board access: domain experts available for 2h/month per advisor.", "Investor-ready financial models built with your unit economics, not templates.", "Legal setup: incorporation, shareholding, IP, and founder agreements done right once.", "Go-to-market planning with channel experiments prioritised by CAC potential.", "Fundraise preparation: pitch deck, data room, and investor narrative coaching."];
  const proofPoints = ["Portfolio: 47 companies", "Average seed raised: £1.2M", "Partner response within 48h", "Equity-free options available"];
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0508" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0508{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0508 *{box-sizing:border-box}
.zp0508 a{color:inherit;text-decoration:none}
.zp0508 h1,.zp0508 h2,.zp0508 h3,.zp0508 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0508 img{max-width:100%;display:block}
.zp0508 button,.zp0508 a{-webkit-tap-highlight-color:transparent}
.zp0508 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0508 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0508 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0508 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0508 .mobileMenu{display:none}
.zp0508 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0508 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0508 .eyebrow,.zp0508 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0508 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0508 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0508 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0508 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0508 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0508 .mapHero{grid-template-columns:1fr 1fr}
.zp0508 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0508 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0508 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0508 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0508 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0508 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0508 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0508 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0508 .serviceGrid p{color:var(--muted)}
.zp0508 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0508 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0508 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0508 details{border-top:1px solid var(--border);padding:20px 0}
.zp0508 details summary{font-weight:800;cursor:pointer}
.zp0508 details p{color:var(--muted);max-width:70ch}
.zp0508 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0508 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0508 .projects article:nth-child(2){transform:translateY(32px)}
.zp0508 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0508 .metrics div{background:var(--bg);padding:30px}
.zp0508 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;color:var(--primary)}
.zp0508 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0508 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0508 .p1,.zp0508 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0508 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0508 .contact .eyebrow{color:var(--bg)}
.zp0508 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0508 .contactMeta{display:grid;gap:10px}
.zp0508 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0508 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0508 .heroCopy{animation:enter-507 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-507{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0508 .hero{min-height:auto}
.zp0508 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0508 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0508 .nav nav{display:none}
.zp0508 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0508 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0508 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0508 .mobileMenu nav a{padding:10px 8px}
.zp0508 .hero,.zp0508 .mapHero{grid-template-columns:1fr}
.zp0508 .section,.zp0508 .sectionTitle,.zp0508 .contact{grid-template-columns:1fr}
.zp0508 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0508 .metrics{grid-template-columns:1fr 1fr}
.zp0508 .projects .projectGrid{grid-template-columns:1fr}
.zp0508 .projects article:nth-child(2){transform:none}
.zp0508 .section{display:block}}
@media(max-width:430px){.zp0508{font-size:16px}
.zp0508 .hero,.zp0508 .section,.zp0508 .contact{padding-left:18px;padding-right:18px}
.zp0508 .serviceGrid,.zp0508 .proof,.zp0508 .collectionGrid,.zp0508 .metrics{grid-template-columns:1fr}
.zp0508 h1{font-size:clamp(42px,14vw,70px)}}

.zp0508 .heroActions a,.zp0508 .primary,.zp0508 .ctaBtn,.zp0508 .btnPrimary,.zp0508 .schedule>a,.zp0508 .newsletter>a{transition:all .2s ease}
.zp0508 .heroActions a:hover,.zp0508 .primary:hover,.zp0508 .ctaBtn:hover,.zp0508 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0508 nav a,.zp0508 .nav a,.zp0508 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0508 nav a:hover,.zp0508 .nav a:hover,.zp0508 .footer a:hover{
  opacity:.7
}
.zp0508 .serviceGrid article,.zp0508 .projectCard,.zp0508 .teamCard,.zp0508 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0508 .serviceGrid article:hover,.zp0508 .projectCard:hover,.zp0508 .teamCard:hover,.zp0508 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0508 *,.zp0508 *::before,.zp0508 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0508 a,.zp0508 button,.zp0508 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dark Cinematic / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
