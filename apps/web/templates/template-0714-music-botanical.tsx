import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0714-music-botanical", "family": "Botanical", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|portfolio-sequence|metrics>integrations>products>services>security>location>proof|paper-sheet|utility", "industry": "music", "hero": "service-led", "navigation": "left-sidebar", "layout": "portfolio-sequence"};

export default function Template0714({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#81946f";
  return <main className="zp0714" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0714{--bg:#f4eee5;--fg:#302821;--primary:#81946f;--primary-fg:#050505;--secondary:#c55d4d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0714 *{box-sizing:border-box}
.zp0714 a{color:inherit;text-decoration:none}
.zp0714 h1,.zp0714 h2,.zp0714 h3,.zp0714 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0714 img{max-width:100%;display:block}
.zp0714 button,.zp0714 a{-webkit-tap-highlight-color:transparent}
.zp0714 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0714 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0714 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0714 .mobileMenu{display:none}
.zp0714:has(.navRail)>.hero,.zp0714:has(.navRail)>.section,.zp0714:has(.navRail)>.contact,.zp0714:has(.navRail)>.footer{margin-left:190px}
.zp0714 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0714 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0714 .eyebrow,.zp0714 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0714 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0714 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0714 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0714 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0714 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0714 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0714 .serviceHeroList{display:grid;gap:4px}
.zp0714 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0714 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0714 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0714 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0714 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0714 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0714 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0714 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0714 .serviceGrid p{color:var(--muted)}
.zp0714 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0714 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0714 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0714 details{border-top:1px solid var(--border);padding:20px 0}
.zp0714 details summary{font-weight:800;cursor:pointer}
.zp0714 details p{color:var(--muted);max-width:70ch}
.zp0714 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0714 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0714 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0714 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0714 .metrics div{background:var(--bg);padding:30px}
.zp0714 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Verdana, sans-serif;color:var(--primary)}
.zp0714 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0714 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0714 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0714 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0714 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0714 .p1,.zp0714 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0714 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0714 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0714 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0714 .contact .eyebrow{color:var(--bg)}
.zp0714 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0714 .contactMeta{display:grid;gap:10px}
.zp0714 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0714 .heroCopy{animation:enter-713 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-713{from{opacity:0;transform:translateY(31px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0714 .hero{min-height:auto}
.zp0714 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0714 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0714 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0714 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0714 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0714 .mobileMenu nav a{padding:10px 8px}
.zp0714 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0714:has(.navRail)>.hero,.zp0714:has(.navRail)>.section,.zp0714:has(.navRail)>.contact,.zp0714:has(.navRail)>.footer{margin-left:0}
.zp0714 .hero,.zp0714 .serviceHero{grid-template-columns:1fr}
.zp0714 .section,.zp0714 .sectionTitle,.zp0714 .location,.zp0714 .security,.zp0714 .contact{grid-template-columns:1fr}
.zp0714 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0714 .metrics{grid-template-columns:1fr 1fr}
.zp0714 .section{display:block}}
@media(max-width:430px){.zp0714{font-size:16px}
.zp0714 .hero,.zp0714 .section,.zp0714 .contact{padding-left:18px;padding-right:18px}
.zp0714 .serviceGrid,.zp0714 .proof,.zp0714 .collectionGrid,.zp0714 .metrics{grid-template-columns:1fr}
.zp0714 h1{font-size:clamp(42px,14vw,70px)}}

.zp0714 .heroActions a,.zp0714 .primary,.zp0714 .ctaBtn,.zp0714 .btnPrimary,.zp0714 .schedule>a,.zp0714 .newsletter>a{transition:all .2s ease}
.zp0714 .heroActions a:hover,.zp0714 .primary:hover,.zp0714 .ctaBtn:hover,.zp0714 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0714 nav a,.zp0714 .nav a,.zp0714 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0714 nav a:hover,.zp0714 .nav a:hover,.zp0714 .footer a:hover{
  color:var(--primary)
}
.zp0714 .serviceGrid article,.zp0714 .projectCard,.zp0714 .teamCard,.zp0714 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0714 .serviceGrid article:hover,.zp0714 .projectCard:hover,.zp0714 .teamCard:hover,.zp0714 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0714 *,.zp0714 *::before,.zp0714 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0714 a,.zp0714 button,.zp0714 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
