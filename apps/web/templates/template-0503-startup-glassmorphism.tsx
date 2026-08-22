import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0503-startup-glassmorphism", "family": "Glassmorphism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|asymmetric-5-7|proof>features>comparison>projects>services>values|asymmetric-radius|clean-humanist", "industry": "startup", "hero": "index-led", "navigation": "editorial-index", "layout": "asymmetric-5-7"};

export default function Template0503({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Technology Startup");
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
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0503" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0503{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0503 *{box-sizing:border-box}
.zp0503 a{color:inherit;text-decoration:none}
.zp0503 h1,.zp0503 h2,.zp0503 h3,.zp0503 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0503 img{max-width:100%;display:block}
.zp0503 button,.zp0503 a{-webkit-tap-highlight-color:transparent}
.zp0503 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0503 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0503 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0503 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0503 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0503 .nav.index nav{justify-content:flex-end}
.zp0503 .mobileMenu{display:none}
.zp0503 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0503 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0503 .eyebrow,.zp0503 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0503 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0503 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0503 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0503 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0503 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0503 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0503 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0503 .indexHero li{font:700 18px/1.2 Avenir, Helvetica Neue, Arial, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0503 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0503 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0503 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0503 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0503 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0503 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0503 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0503 .serviceGrid p{color:var(--muted)}
.zp0503 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0503 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0503 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0503 details{border-top:1px solid var(--border);padding:20px 0}
.zp0503 details summary{font-weight:800;cursor:pointer}
.zp0503 details p{color:var(--muted);max-width:70ch}
.zp0503 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0503 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0503 .projects article:nth-child(2){transform:translateY(32px)}
.zp0503 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0503 .features ul{list-style:none;margin:0;padding:0}
.zp0503 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0503 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0503 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Avenir, Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0503 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0503 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0503 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0503 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0503 .contact .eyebrow{color:var(--bg)}
.zp0503 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0503 .contactMeta{display:grid;gap:10px}
.zp0503 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0503 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0503{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0503 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0503 .heroCopy{animation:enter-502 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-502{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0503 .hero{min-height:auto}
.zp0503 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0503 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0503 .nav nav{display:none}
.zp0503 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0503 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0503 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0503 .mobileMenu nav a{padding:10px 8px}
.zp0503 .hero,.zp0503 .indexHero{grid-template-columns:1fr}
.zp0503 .section,.zp0503 .sectionTitle,.zp0503 .features,.zp0503 .contact{grid-template-columns:1fr}
.zp0503 .projects .projectGrid{grid-template-columns:1fr}
.zp0503 .projects article:nth-child(2){transform:none}
.zp0503 .section{display:block}}
@media(max-width:430px){.zp0503{font-size:16px}
.zp0503 .hero,.zp0503 .section,.zp0503 .contact{padding-left:18px;padding-right:18px}
.zp0503 .serviceGrid,.zp0503 .proof,.zp0503 .compareGrid{grid-template-columns:1fr}
.zp0503 h1{font-size:clamp(42px,14vw,70px)}
.zp0503 .nav.index{grid-template-columns:1fr auto}
.zp0503 .nav.index>span{display:none}}

.zp0503 .heroActions a,.zp0503 .primary,.zp0503 .ctaBtn,.zp0503 .btnPrimary,.zp0503 .schedule>a,.zp0503 .newsletter>a{transition:all .2s ease}
.zp0503 .heroActions a:hover,.zp0503 .primary:hover,.zp0503 .ctaBtn:hover,.zp0503 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0503 nav a,.zp0503 .nav a,.zp0503 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0503 nav a:hover,.zp0503 .nav a:hover,.zp0503 .footer a:hover{
  color:var(--primary)
}
.zp0503 .serviceGrid article,.zp0503 .projectCard,.zp0503 .teamCard,.zp0503 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0503 .serviceGrid article:hover,.zp0503 .projectCard:hover,.zp0503 .teamCard:hover,.zp0503 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0503 *,.zp0503 *::before,.zp0503 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0503 a,.zp0503 button,.zp0503 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
