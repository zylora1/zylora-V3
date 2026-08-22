import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0783-events-sophisticated-professional", "family": "Sophisticated Professional", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|timeline-narrative|proof>values>availability>services>location>credentials>programmes|soft-12|geometric", "industry": "events", "hero": "location-led", "navigation": "vertical-rail", "layout": "timeline-narrative"};

export default function Template0783({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0783" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0783{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0783 *{box-sizing:border-box}
.zp0783 a{color:inherit;text-decoration:none}
.zp0783 h1,.zp0783 h2,.zp0783 h3,.zp0783 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0783 img{max-width:100%;display:block}
.zp0783 button,.zp0783 a{-webkit-tap-highlight-color:transparent}
.zp0783 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0783 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0783 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0783 .mobileMenu{display:none}
.zp0783:has(.navRail)>.hero,.zp0783:has(.navRail)>.section,.zp0783:has(.navRail)>.contact,.zp0783:has(.navRail)>.footer{margin-left:190px}
.zp0783 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0783 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0783 .eyebrow,.zp0783 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0783 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0783 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0783 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0783 .heroActions a,.zp0783 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0783 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0783 .locationHero{grid-template-columns:1fr 1fr}
.zp0783 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0783 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0783 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0783 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0783 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0783 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0783 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0783 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0783 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0783 .serviceGrid p{color:var(--muted)}
.zp0783 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0783 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0783 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0783 details{border-top:1px solid var(--border);padding:20px 0}
.zp0783 details summary{font-weight:800;cursor:pointer}
.zp0783 details p{color:var(--muted);max-width:70ch}
.zp0783 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0783 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0783 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0783 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0783 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0783 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0783 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0783 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0783 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0783 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0783 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0783 .contact .eyebrow{color:var(--bg)}
.zp0783 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0783 .contactMeta{display:grid;gap:10px}
.zp0783 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0783 .heroCopy{animation:enter-782 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-782{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0783 .hero{min-height:auto}
.zp0783 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0783 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0783 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0783 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0783 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0783 .mobileMenu nav a{padding:10px 8px}
.zp0783 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0783:has(.navRail)>.hero,.zp0783:has(.navRail)>.section,.zp0783:has(.navRail)>.contact,.zp0783:has(.navRail)>.footer{margin-left:0}
.zp0783 .hero,.zp0783 .locationHero{grid-template-columns:1fr}
.zp0783 .section,.zp0783 .sectionTitle,.zp0783 .location,.zp0783 .contact{grid-template-columns:1fr}
.zp0783 .section{display:block}}
@media(max-width:430px){.zp0783{font-size:16px}
.zp0783 .hero,.zp0783 .section,.zp0783 .contact{padding-left:18px;padding-right:18px}
.zp0783 .serviceGrid,.zp0783 .proof,.zp0783 .programmes>div:last-child{grid-template-columns:1fr}
.zp0783 h1{font-size:clamp(42px,14vw,70px)}}

.zp0783 .heroActions a,.zp0783 .primary,.zp0783 .ctaBtn,.zp0783 .btnPrimary,.zp0783 .schedule>a,.zp0783 .newsletter>a{transition:all .2s ease}
.zp0783 .heroActions a:hover,.zp0783 .primary:hover,.zp0783 .ctaBtn:hover,.zp0783 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0783 nav a,.zp0783 .nav a,.zp0783 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0783 nav a:hover,.zp0783 .nav a:hover,.zp0783 .footer a:hover{
  color:var(--primary)
}
.zp0783 .serviceGrid article,.zp0783 .projectCard,.zp0783 .teamCard,.zp0783 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0783 .serviceGrid article:hover,.zp0783 .projectCard:hover,.zp0783 .teamCard:hover,.zp0783 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0783 *,.zp0783 *::before,.zp0783 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0783 a,.zp0783 button,.zp0783 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
