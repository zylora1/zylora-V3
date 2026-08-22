import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0796-weddings-premium-corporate", "family": "Premium Corporate", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|offset-cards|location>proof>services>destinations>security|notched|sports-editorial", "industry": "weddings", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "offset-cards"};

export default function Template0796({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0796" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0796{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0796 *{box-sizing:border-box}
.zp0796 a{color:inherit;text-decoration:none}
.zp0796 h1,.zp0796 h2,.zp0796 h3,.zp0796 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0796 img{max-width:100%;display:block}
.zp0796 button,.zp0796 a{-webkit-tap-highlight-color:transparent}
.zp0796 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0796 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0796 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0796 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0796 .mobileMenu{display:none}
.zp0796 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0796 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0796 .eyebrow,.zp0796 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0796 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0796 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0796 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0796 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0796 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0796 .mapHero{grid-template-columns:1fr 1fr}
.zp0796 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0796 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0796 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0796 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0796 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0796 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0796 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0796 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0796 .serviceGrid p{color:var(--muted)}
.zp0796 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0796 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0796 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0796 details{border-top:1px solid var(--border);padding:20px 0}
.zp0796 details summary{font-weight:800;cursor:pointer}
.zp0796 details p{color:var(--muted);max-width:70ch}
.zp0796 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0796 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0796 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0796 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0796 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0796 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0796 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0796 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0796 .contact .eyebrow{color:var(--bg)}
.zp0796 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0796 .contactMeta{display:grid;gap:10px}
.zp0796 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0796 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0796 .heroCopy{animation:enter-795 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-795{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0796 .hero{min-height:auto}
.zp0796 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0796 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0796 .nav nav{display:none}
.zp0796 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0796 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0796 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0796 .mobileMenu nav a{padding:10px 8px}
.zp0796 .hero,.zp0796 .mapHero{grid-template-columns:1fr}
.zp0796 .section,.zp0796 .sectionTitle,.zp0796 .location,.zp0796 .security,.zp0796 .contact{grid-template-columns:1fr}
.zp0796 .section{display:block}}
@media(max-width:430px){.zp0796{font-size:16px}
.zp0796 .hero,.zp0796 .section,.zp0796 .contact{padding-left:18px;padding-right:18px}
.zp0796 .serviceGrid,.zp0796 .proof,.zp0796 .destinations>div:last-child{grid-template-columns:1fr}
.zp0796 h1{font-size:clamp(42px,14vw,70px)}}

.zp0796 .heroActions a,.zp0796 .primary,.zp0796 .ctaBtn,.zp0796 .btnPrimary,.zp0796 .schedule>a,.zp0796 .newsletter>a{transition:all .2s ease}
.zp0796 .heroActions a:hover,.zp0796 .primary:hover,.zp0796 .ctaBtn:hover,.zp0796 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0796 nav a,.zp0796 .nav a,.zp0796 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0796 nav a:hover,.zp0796 .nav a:hover,.zp0796 .footer a:hover{
  color:var(--primary)
}
.zp0796 .serviceGrid article,.zp0796 .projectCard,.zp0796 .teamCard,.zp0796 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0796 .serviceGrid article:hover,.zp0796 .projectCard:hover,.zp0796 .teamCard:hover,.zp0796 .bentoCard:hover{
  box-shadow:0 8px 24px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0796 *,.zp0796 *::before,.zp0796 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0796 a,.zp0796 button,.zp0796 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Premium Corporate / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
