import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0576-ecommerce-architectural", "family": "Architectural", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|catalogue-table|proof>team>comparison>values>schedule>programmes>services|heavy-frame|terminal", "industry": "ecommerce", "hero": "data-led", "navigation": "centered-logo", "layout": "catalogue-table"};

export default function Template0576({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Ecommerce Brand");
  const headline = String(content.headline || "Useful products presented with clarity, confidence, and a friction-light buying path.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New arrivals", "Best sellers", "Collections", "Gift cards", "Customer care"];
  const industryLabel = "Ecommerce brand";
  const serviceNotes = ["Shopify, WooCommerce, and headless builds — we recommend based on your scale and roadmap.", "Conversion rate optimisation built into every build: checkout, PDP, and search flows.", "Inventory and ERP integrations with real-time sync across warehouse and storefront.", "International expansion support: multi-currency, tax compliance, and localised UX.", "Post-launch CRO: A/B testing programme for 90 days after go-live included."];
  const proofPoints = ["Average: 34% CRO lift", "Shopify Plus certified", "PCI DSS compliant", "99.9% uptime SLA"];
  const testimonial = "Conversion rate went from 1.2% to 2.8% in the first quarter. They found the leaks in our checkout nobody else had flagged.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0576" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0576{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0576 *{box-sizing:border-box}
.zp0576 a{color:inherit;text-decoration:none}
.zp0576 h1,.zp0576 h2,.zp0576 h3,.zp0576 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0576 img{max-width:100%;display:block}
.zp0576 button,.zp0576 a{-webkit-tap-highlight-color:transparent}
.zp0576 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0576 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0576 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0576 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0576 .nav.centered strong{order:2;font-size:24px}
.zp0576 .nav.centered nav:first-child{order:1}
.zp0576 .nav.centered nav:last-child{order:3}
.zp0576 .mobileMenu{display:none}
.zp0576 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0576 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0576 .eyebrow,.zp0576 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0576 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0576 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0576 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0576 .heroActions a,.zp0576 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0576 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0576 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0576 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0576 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0576 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0576 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0576 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0576 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0576 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0576 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0576 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0576 .serviceGrid p{color:var(--muted)}
.zp0576 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0576 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0576 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0576 details{border-top:1px solid var(--border);padding:20px 0}
.zp0576 details summary{font-weight:800;cursor:pointer}
.zp0576 details p{color:var(--muted);max-width:70ch}
.zp0576 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0576 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0576 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Lucida Console, Monaco, monospace;margin-bottom:18px}
.zp0576 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0576 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0576 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0576 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0576 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0576 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0576 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0576 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0576 .contact .eyebrow{color:var(--bg)}
.zp0576 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0576 .contactMeta{display:grid;gap:10px}
.zp0576 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0576 .heroCopy{animation:enter-575 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-575{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0576 .hero{min-height:auto}
.zp0576 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0576 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0576 .nav nav{display:none}
.zp0576 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0576 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0576 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0576 .mobileMenu nav a{padding:10px 8px}
.zp0576 .hero,.zp0576 .dataHero{grid-template-columns:1fr}
.zp0576 .section,.zp0576 .sectionTitle,.zp0576 .contact{grid-template-columns:1fr}
.zp0576 .teamGrid{grid-template-columns:1fr 1fr}
.zp0576 .section{display:block}}
@media(max-width:430px){.zp0576{font-size:16px}
.zp0576 .hero,.zp0576 .section,.zp0576 .contact{padding-left:18px;padding-right:18px}
.zp0576 .serviceGrid,.zp0576 .proof,.zp0576 .teamGrid,.zp0576 .programmes>div:last-child,.zp0576 .compareGrid{grid-template-columns:1fr}
.zp0576 h1{font-size:clamp(42px,14vw,70px)}}

.zp0576 .heroActions a,.zp0576 .primary,.zp0576 .ctaBtn,.zp0576 .btnPrimary,.zp0576 .schedule>a,.zp0576 .newsletter>a{transition:all .2s ease}
.zp0576 .heroActions a:hover,.zp0576 .primary:hover,.zp0576 .ctaBtn:hover,.zp0576 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0576 nav a,.zp0576 .nav a,.zp0576 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0576 nav a:hover,.zp0576 .nav a:hover,.zp0576 .footer a:hover{
  opacity:.7
}
.zp0576 .serviceGrid article,.zp0576 .projectCard,.zp0576 .teamCard,.zp0576 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0576 .serviceGrid article:hover,.zp0576 .projectCard:hover,.zp0576 .teamCard:hover,.zp0576 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0576 *,.zp0576 *::before,.zp0576 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0576 a,.zp0576 button,.zp0576 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
