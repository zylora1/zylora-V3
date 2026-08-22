import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0569-ecommerce-international-typographic-style", "family": "International Typographic Style", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|gallery-index|community>metrics>services>team>hours>proof|hairline|friendly", "industry": "ecommerce", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "gallery-index"};

export default function Template0569({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Ecommerce Brand");
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
  const storyBody = "Foundry Ecommerce Brand is presented as a real working ecommerce brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Conversion rate went from 1.2% to 2.8% in the first quarter. They found the leaks in our checkout nobody else had flagged.";
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Ecommerce brand / Project A", "Ecommerce brand / Project B", "Ecommerce brand / Project C", "Ecommerce brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Useful products presented with clarity, confidence, and a friction-light buying path. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0569" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0569{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0569 *{box-sizing:border-box}
.zp0569 a{color:inherit;text-decoration:none}
.zp0569 h1,.zp0569 h2,.zp0569 h3,.zp0569 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0569 img{max-width:100%;display:block}
.zp0569 button,.zp0569 a{-webkit-tap-highlight-color:transparent}
.zp0569 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0569 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0569 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0569 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0569 .nav.menu details{position:relative}
.zp0569 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0569 .mobileMenu{display:none}
.zp0569 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0569 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0569 .eyebrow,.zp0569 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0569 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0569 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0569 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0569 .heroActions a,.zp0569 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0569 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0569 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0569 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0569 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0569 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0569 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0569 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0569 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0569 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0569 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0569 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0569 .serviceGrid p{color:var(--muted)}
.zp0569 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0569 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0569 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0569 details{border-top:1px solid var(--border);padding:20px 0}
.zp0569 details summary{font-weight:800;cursor:pointer}
.zp0569 details p{color:var(--muted);max-width:70ch}
.zp0569 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0569 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0569 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Trebuchet MS, Arial, sans-serif;margin-bottom:18px}
.zp0569 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0569 .hours dl{margin:0}
.zp0569 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0569 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0569 .metrics div{background:var(--bg);padding:30px}
.zp0569 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Trebuchet MS, Arial, sans-serif;color:var(--primary)}
.zp0569 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0569 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0569 .contact .eyebrow{color:var(--bg)}
.zp0569 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0569 .contactMeta{display:grid;gap:10px}
.zp0569 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0569 .heroCopy{animation:enter-568 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-568{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0569 .hero{min-height:auto}
.zp0569 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0569 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0569 .nav nav{display:none}
.zp0569 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0569 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0569 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0569 .mobileMenu nav a{padding:10px 8px}
.zp0569 .hero,.zp0569 .archiveHero{grid-template-columns:1fr}
.zp0569 .section,.zp0569 .sectionTitle,.zp0569 .hours,.zp0569 .contact{grid-template-columns:1fr}
.zp0569 .teamGrid{grid-template-columns:1fr 1fr}
.zp0569 .metrics{grid-template-columns:1fr 1fr}
.zp0569 .section{display:block}}
@media(max-width:430px){.zp0569{font-size:16px}
.zp0569 .hero,.zp0569 .section,.zp0569 .contact{padding-left:18px;padding-right:18px}
.zp0569 .serviceGrid,.zp0569 .proof,.zp0569 .teamGrid,.zp0569 .metrics{grid-template-columns:1fr}
.zp0569 h1{font-size:clamp(42px,14vw,70px)}}

.zp0569 .heroActions a,.zp0569 .primary,.zp0569 .ctaBtn,.zp0569 .btnPrimary,.zp0569 .schedule>a,.zp0569 .newsletter>a{transition:all .2s ease}
.zp0569 .heroActions a:hover,.zp0569 .primary:hover,.zp0569 .ctaBtn:hover,.zp0569 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0569 nav a,.zp0569 .nav a,.zp0569 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0569 nav a:hover,.zp0569 .nav a:hover,.zp0569 .footer a:hover{
  text-decoration:underline
}
.zp0569 .serviceGrid article,.zp0569 .projectCard,.zp0569 .teamCard,.zp0569 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0569 .serviceGrid article:hover,.zp0569 .projectCard:hover,.zp0569 .teamCard:hover,.zp0569 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0569 *,.zp0569 *::before,.zp0569 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0569 a,.zp0569 button,.zp0569 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>International Typographic Style / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
