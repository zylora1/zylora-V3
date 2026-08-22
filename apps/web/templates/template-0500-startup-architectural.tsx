import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0500-startup-architectural", "family": "Architectural", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|booking-led|proof>services>features>credentials>community>manifesto|cut-corners|product-ui", "industry": "startup", "hero": "product-led", "navigation": "transparent-overlay", "layout": "booking-led"};

export default function Template0500({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Technology Startup");
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
  const storyBody = "Pavilion Technology Startup is presented as a real working technology startup, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0500" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0500{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0500 *{box-sizing:border-box}
.zp0500 a{color:inherit;text-decoration:none}
.zp0500 h1,.zp0500 h2,.zp0500 h3,.zp0500 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0500 img{max-width:100%;display:block}
.zp0500 button,.zp0500 a{-webkit-tap-highlight-color:transparent}
.zp0500 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0500 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0500 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0500 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0500 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0500 .mobileMenu{display:none}
.zp0500 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0500 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0500 .eyebrow,.zp0500 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0500 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0500 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0500 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0500 .heroActions a,.zp0500 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0500 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0500 .visual,.zp0500 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0500 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0500 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0500 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0500 .heroPhoto{object-fit:cover}
.zp0500 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0500 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0500 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0500 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0500 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0500 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0500 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0500 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0500 .serviceGrid p{color:var(--muted)}
.zp0500 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0500 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0500 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0500 details{border-top:1px solid var(--border);padding:20px 0}
.zp0500 details summary{font-weight:800;cursor:pointer}
.zp0500 details p{color:var(--muted);max-width:70ch}
.zp0500 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0500 .features ul{list-style:none;margin:0;padding:0}
.zp0500 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0500 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0500 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0500 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0500 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0500 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0500 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Segoe UI, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0500 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0500 .contact .eyebrow{color:var(--bg)}
.zp0500 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0500 .contactMeta{display:grid;gap:10px}
.zp0500 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0500 .heroCopy{animation:enter-499 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-499{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0500 .hero{min-height:auto}
.zp0500 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0500 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0500 .nav nav{display:none}
.zp0500 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0500 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0500 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0500 .mobileMenu nav a{padding:10px 8px}
.zp0500 .hero,.zp0500 .productLedHero{grid-template-columns:1fr}
.zp0500 .section,.zp0500 .sectionTitle,.zp0500 .features,.zp0500 .contact{grid-template-columns:1fr}
.zp0500 .section{display:block}}
@media(max-width:430px){.zp0500{font-size:16px}
.zp0500 .hero,.zp0500 .section,.zp0500 .contact{padding-left:18px;padding-right:18px}
.zp0500 .serviceGrid,.zp0500 .proof{grid-template-columns:1fr}
.zp0500 h1{font-size:clamp(42px,14vw,70px)}}

.zp0500 .heroActions a,.zp0500 .primary,.zp0500 .ctaBtn,.zp0500 .btnPrimary,.zp0500 .schedule>a,.zp0500 .newsletter>a{transition:all .2s ease}
.zp0500 .heroActions a:hover,.zp0500 .primary:hover,.zp0500 .ctaBtn:hover,.zp0500 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0500 nav a,.zp0500 .nav a,.zp0500 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0500 nav a:hover,.zp0500 .nav a:hover,.zp0500 .footer a:hover{
  opacity:.7
}
.zp0500 .serviceGrid article,.zp0500 .projectCard,.zp0500 .teamCard,.zp0500 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0500 .serviceGrid article:hover,.zp0500 .projectCard:hover,.zp0500 .teamCard:hover,.zp0500 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0500 *,.zp0500 *::before,.zp0500 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0500 a,.zp0500 button,.zp0500 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">99</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
