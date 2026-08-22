import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0975-agriculture-sports-editorial", "family": "Sports Editorial", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|story-first|location>services>security>credentials>proof>materials>metrics|soft-12|geometric", "industry": "agriculture", "hero": "location-led", "navigation": "vertical-rail", "layout": "story-first"};

export default function Template0975({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Agricultural Business");
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
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Agricultural business / Project A", "Agricultural business / Project B", "Agricultural business / Project C", "Agricultural business / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A working farm connected directly to buyers, partners, seasons, and provenance. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0975" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0975{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0975 *{box-sizing:border-box}
.zp0975 a{color:inherit;text-decoration:none}
.zp0975 h1,.zp0975 h2,.zp0975 h3,.zp0975 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0975 img{max-width:100%;display:block}
.zp0975 button,.zp0975 a{-webkit-tap-highlight-color:transparent}
.zp0975 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0975 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0975 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0975 .mobileMenu{display:none}
.zp0975:has(.navRail)>.hero,.zp0975:has(.navRail)>.section,.zp0975:has(.navRail)>.contact,.zp0975:has(.navRail)>.footer{margin-left:190px}
.zp0975 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0975 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0975 .eyebrow,.zp0975 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0975 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0975 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0975 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0975 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0975 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0975 .locationHero{grid-template-columns:1fr 1fr}
.zp0975 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0975 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0975 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0975 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0975 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0975 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0975 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0975 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0975 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0975 .serviceGrid p{color:var(--muted)}
.zp0975 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0975 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0975 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0975 details{border-top:1px solid var(--border);padding:20px 0}
.zp0975 details summary{font-weight:800;cursor:pointer}
.zp0975 details p{color:var(--muted);max-width:70ch}
.zp0975 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0975 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0975 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0975 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0975 .metrics div{background:var(--bg);padding:30px}
.zp0975 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Century Gothic, Avenir, sans-serif;color:var(--primary)}
.zp0975 .credentials,.zp0975 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0975 .credentials>div,.zp0975 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0975 .credentials b,.zp0975 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0975 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0975 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0975 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0975 .contact .eyebrow{color:var(--bg)}
.zp0975 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0975 .contactMeta{display:grid;gap:10px}
.zp0975 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0975 .heroCopy{animation:enter-974 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-974{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0975 .hero{min-height:auto}
.zp0975 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0975 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0975 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0975 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0975 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0975 .mobileMenu nav a{padding:10px 8px}
.zp0975 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0975:has(.navRail)>.hero,.zp0975:has(.navRail)>.section,.zp0975:has(.navRail)>.contact,.zp0975:has(.navRail)>.footer{margin-left:0}
.zp0975 .hero,.zp0975 .locationHero{grid-template-columns:1fr}
.zp0975 .section,.zp0975 .sectionTitle,.zp0975 .location,.zp0975 .security,.zp0975 .contact{grid-template-columns:1fr}
.zp0975 .metrics{grid-template-columns:1fr 1fr}
.zp0975 .section{display:block}}
@media(max-width:430px){.zp0975{font-size:16px}
.zp0975 .hero,.zp0975 .section,.zp0975 .contact{padding-left:18px;padding-right:18px}
.zp0975 .serviceGrid,.zp0975 .proof,.zp0975 .metrics{grid-template-columns:1fr}
.zp0975 h1{font-size:clamp(42px,14vw,70px)}}

.zp0975 .heroActions a,.zp0975 .primary,.zp0975 .ctaBtn,.zp0975 .btnPrimary,.zp0975 .schedule>a,.zp0975 .newsletter>a{transition:all .2s ease}
.zp0975 .heroActions a:hover,.zp0975 .primary:hover,.zp0975 .ctaBtn:hover,.zp0975 .btnPrimary:hover{
  opacity:.8
}
.zp0975 nav a,.zp0975 .nav a,.zp0975 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0975 nav a:hover,.zp0975 .nav a:hover,.zp0975 .footer a:hover{
  color:var(--primary)
}
.zp0975 .serviceGrid article,.zp0975 .projectCard,.zp0975 .teamCard,.zp0975 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0975 .serviceGrid article:hover,.zp0975 .projectCard:hover,.zp0975 .teamCard:hover,.zp0975 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0975 *,.zp0975 *::before,.zp0975 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0975 a,.zp0975 button,.zp0975 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
