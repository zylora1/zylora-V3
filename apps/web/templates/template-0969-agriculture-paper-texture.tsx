import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0969-agriculture-paper-texture", "family": "Paper Texture", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|split-scroll|integrations>manifesto>proof>team>community>services>collection|hairline|slab", "industry": "agriculture", "hero": "poster", "navigation": "fullscreen-menu", "layout": "split-scroll"};

export default function Template0969({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Agricultural Business");
  const headline = String(content.headline || "A working farm connected directly to buyers, partners, seasons, and provenance.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Produce", "Wholesale", "Farm visits", "Seasonal boxes", "Trade supply"];
  const industryLabel = "Agricultural business";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Vale Agricultural Business is presented as a real working agricultural business, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Agricultural business / Project A", "Agricultural business / Project B", "Agricultural business / Project C", "Agricultural business / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A working farm connected directly to buyers, partners, seasons, and provenance. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  return <main className="zp0969" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0969{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0969 *{box-sizing:border-box}
.zp0969 a{color:inherit;text-decoration:none}
.zp0969 h1,.zp0969 h2,.zp0969 h3,.zp0969 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0969 img{max-width:100%;display:block}
.zp0969 button,.zp0969 a{-webkit-tap-highlight-color:transparent}
.zp0969 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0969 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0969 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0969 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0969 .nav.menu details{position:relative}
.zp0969 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0969 .mobileMenu{display:none}
.zp0969 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0969 .eyebrow,.zp0969 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0969 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0969 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0969 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0969 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0969 .posterTop,.zp0969 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0969 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0969 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0969 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0969 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0969 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0969 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0969 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0969 .serviceGrid p{color:var(--muted)}
.zp0969 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0969 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0969 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0969 details{border-top:1px solid var(--border);padding:20px 0}
.zp0969 details summary{font-weight:800;cursor:pointer}
.zp0969 details p{color:var(--muted);max-width:70ch}
.zp0969 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0969 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0969 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Rockwell, Courier New, serif;margin-bottom:18px}
.zp0969 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0969 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0969 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0969 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0969 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0969 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0969 .p1,.zp0969 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0969 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Rockwell, Courier New, serif;letter-spacing:-.04em;max-width:17ch}
.zp0969 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0969 .contact .eyebrow{color:var(--bg)}
.zp0969 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0969 .contactMeta{display:grid;gap:10px}
.zp0969 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0969{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0969 .section:nth-of-type(3n){transform:rotate(0.35deg)}
@keyframes enter-968{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0969 .hero{min-height:auto}
.zp0969 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0969 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0969 .nav nav{display:none}
.zp0969 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0969 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0969 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0969 .mobileMenu nav a{padding:10px 8px}
.zp0969 .hero{grid-template-columns:1fr}
.zp0969 .section,.zp0969 .sectionTitle,.zp0969 .contact{grid-template-columns:1fr}
.zp0969 .teamGrid{grid-template-columns:1fr 1fr}
.zp0969 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0969 .section{display:block}}
@media(max-width:430px){.zp0969{font-size:16px}
.zp0969 .hero,.zp0969 .section,.zp0969 .contact{padding-left:18px;padding-right:18px}
.zp0969 .serviceGrid,.zp0969 .proof,.zp0969 .teamGrid,.zp0969 .collectionGrid{grid-template-columns:1fr}
.zp0969 h1{font-size:clamp(42px,14vw,70px)}
.zp0969 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0969 .heroActions a,.zp0969 .primary,.zp0969 .ctaBtn,.zp0969 .btnPrimary,.zp0969 .schedule>a,.zp0969 .newsletter>a{transition:all .2s ease}
.zp0969 .heroActions a:hover,.zp0969 .primary:hover,.zp0969 .ctaBtn:hover,.zp0969 .btnPrimary:hover{
  opacity:.8
}
.zp0969 nav a,.zp0969 .nav a,.zp0969 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0969 nav a:hover,.zp0969 .nav a:hover,.zp0969 .footer a:hover{
  color:var(--primary)
}
.zp0969 .serviceGrid article,.zp0969 .projectCard,.zp0969 .teamCard,.zp0969 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0969 .serviceGrid article:hover,.zp0969 .projectCard:hover,.zp0969 .teamCard:hover,.zp0969 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0969 *,.zp0969 *::before,.zp0969 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0969 a,.zp0969 button,.zp0969 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
