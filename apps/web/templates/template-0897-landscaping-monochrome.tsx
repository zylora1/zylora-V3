import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0897-landscaping-monochrome", "family": "Monochrome", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|split-scroll|destinations>collection>proof>products>availability>process>services|square-editorial|slab", "industry": "landscaping", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "split-scroll"};

export default function Template0897({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Landscape Company");
  const headline = String(content.headline || "Outdoor spaces designed for the site, the climate, and how clients actually use them.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Garden design", "Installation", "Maintenance", "Irrigation", "Outdoor lighting"];
  const industryLabel = "Landscape company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Landscape company / Project A", "Landscape company / Project B", "Landscape company / Project C", "Landscape company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Outdoor spaces designed for the site, the climate, and how clients actually use them. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b75a3c";
  return <main className="zp0897" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0897{--bg:#f2e6d8;--fg:#34291d;--primary:#b75a3c;--primary-fg:#ffffff;--secondary:#5a7c6b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0897 *{box-sizing:border-box}
.zp0897 a{color:inherit;text-decoration:none}
.zp0897 h1,.zp0897 h2,.zp0897 h3,.zp0897 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0897 img{max-width:100%;display:block}
.zp0897 button,.zp0897 a{-webkit-tap-highlight-color:transparent}
.zp0897 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0897 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0897 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0897 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0897 .mobileMenu{display:none}
.zp0897 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0897 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0897 .eyebrow,.zp0897 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0897 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0897 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0897 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0897 .heroActions a,.zp0897 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0897 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0897 .typeOnly{grid-template-columns:1fr .28fr}
.zp0897 .oversizeWord{font-family:Rockwell, Courier New, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0897 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0897 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0897 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0897 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0897 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0897 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0897 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0897 .serviceGrid p{color:var(--muted)}
.zp0897 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0897 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0897 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0897 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0897 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0897 details{border-top:1px solid var(--border);padding:20px 0}
.zp0897 details summary{font-weight:800;cursor:pointer}
.zp0897 details p{color:var(--muted);max-width:70ch}
.zp0897 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0897 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0897 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0897 .p1,.zp0897 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0897 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0897 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0897 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0897 .contact .eyebrow{color:var(--bg)}
.zp0897 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0897 .contactMeta{display:grid;gap:10px}
.zp0897 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0897 .heroCopy{animation:enter-896 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-896{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0897 .hero{min-height:auto}
.zp0897 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0897 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0897 .nav nav{display:none}
.zp0897 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0897 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0897 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0897 .mobileMenu nav a{padding:10px 8px}
.zp0897 .hero{grid-template-columns:1fr}
.zp0897 .section,.zp0897 .sectionTitle,.zp0897 .contact{grid-template-columns:1fr}
.zp0897 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0897 .section{display:block}}
@media(max-width:430px){.zp0897{font-size:16px}
.zp0897 .hero,.zp0897 .section,.zp0897 .contact{padding-left:18px;padding-right:18px}
.zp0897 .serviceGrid,.zp0897 .proof,.zp0897 .collectionGrid,.zp0897 .destinations>div:last-child{grid-template-columns:1fr}
.zp0897 h1{font-size:clamp(42px,14vw,70px)}}

.zp0897 .heroActions a,.zp0897 .primary,.zp0897 .ctaBtn,.zp0897 .btnPrimary,.zp0897 .schedule>a,.zp0897 .newsletter>a{transition:all .2s ease}
.zp0897 .heroActions a:hover,.zp0897 .primary:hover,.zp0897 .ctaBtn:hover,.zp0897 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0897 nav a,.zp0897 .nav a,.zp0897 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0897 nav a:hover,.zp0897 .nav a:hover,.zp0897 .footer a:hover{
  color:var(--secondary)
}
.zp0897 .serviceGrid article,.zp0897 .projectCard,.zp0897 .teamCard,.zp0897 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0897 .serviceGrid article:hover,.zp0897 .projectCard:hover,.zp0897 .teamCard:hover,.zp0897 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0897 *,.zp0897 *::before,.zp0897 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0897 a,.zp0897 button,.zp0897 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
