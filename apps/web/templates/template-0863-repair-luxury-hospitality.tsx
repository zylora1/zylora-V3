import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0863-repair-luxury-hospitality", "family": "Luxury Hospitality", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|asymmetric-5-7|schedule>pricing>story>destinations>services>proof|soft-12|clean-humanist", "industry": "repair", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "asymmetric-5-7"};

export default function Template0863({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cClear estimates, reliable workmanship, and updates you can understand.\u201d";
  const storyBody = "Clove Repair Service is presented as a real working repair service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0863" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0863{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0863 *{box-sizing:border-box}
.zp0863 a{color:inherit;text-decoration:none}
.zp0863 h1,.zp0863 h2,.zp0863 h3,.zp0863 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0863 img{max-width:100%;display:block}
.zp0863 button,.zp0863 a{-webkit-tap-highlight-color:transparent}
.zp0863 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0863 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0863 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0863 .mobileMenu{display:none}
.zp0863:has(.navRail)>.hero,.zp0863:has(.navRail)>.section,.zp0863:has(.navRail)>.contact,.zp0863:has(.navRail)>.footer{margin-left:190px}
.zp0863 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0863 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0863 .eyebrow,.zp0863 .sectionTitle>span,.zp0863 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0863 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0863 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0863 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0863 .heroActions a,.zp0863 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0863 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0863 .canvasHero{overflow:hidden}
.zp0863 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0863 .canvasGrid i{border-right:1px solid var(--border)}
.zp0863 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0863 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0863 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0863 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0863 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0863 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0863 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0863 .serviceGrid p{color:var(--muted)}
.zp0863 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0863 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0863 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0863 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0863 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0863 .story p{color:var(--muted)}
.zp0863 details{border-top:1px solid var(--border);padding:20px 0}
.zp0863 details summary{font-weight:800;cursor:pointer}
.zp0863 details p{color:var(--muted);max-width:70ch}
.zp0863 .priceRows{border-top:1px solid var(--border)}
.zp0863 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0863 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0863 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0863 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0863 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0863 .contact .eyebrow{color:var(--bg)}
.zp0863 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0863 .contactMeta{display:grid;gap:10px}
.zp0863 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0863 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0863 .heroCopy{animation:enter-862 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-862{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0863 .hero{min-height:auto}
.zp0863 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0863 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0863 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0863 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0863 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0863 .mobileMenu nav a{padding:10px 8px}
.zp0863 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0863:has(.navRail)>.hero,.zp0863:has(.navRail)>.section,.zp0863:has(.navRail)>.contact,.zp0863:has(.navRail)>.footer{margin-left:0}
.zp0863 .hero{grid-template-columns:1fr}
.zp0863 .section,.zp0863 .sectionTitle,.zp0863 .story,.zp0863 .contact{grid-template-columns:1fr}
.zp0863 .section{display:block}}
@media(max-width:430px){.zp0863{font-size:16px}
.zp0863 .hero,.zp0863 .section,.zp0863 .contact{padding-left:18px;padding-right:18px}
.zp0863 .serviceGrid,.zp0863 .proof,.zp0863 .destinations>div:last-child{grid-template-columns:1fr}
.zp0863 h1{font-size:clamp(42px,14vw,70px)}
.zp0863 .priceRows article{grid-template-columns:1fr}}

.zp0863 .heroActions a,.zp0863 .primary,.zp0863 .ctaBtn,.zp0863 .btnPrimary,.zp0863 .schedule>a,.zp0863 .newsletter>a{transition:all .2s ease}
.zp0863 .heroActions a:hover,.zp0863 .primary:hover,.zp0863 .ctaBtn:hover,.zp0863 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0863 nav a,.zp0863 .nav a,.zp0863 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0863 nav a:hover,.zp0863 .nav a:hover,.zp0863 .footer a:hover{
  opacity:.65
}
.zp0863 .serviceGrid article,.zp0863 .projectCard,.zp0863 .teamCard,.zp0863 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0863 .serviceGrid article:hover,.zp0863 .projectCard:hover,.zp0863 .teamCard:hover,.zp0863 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0863 *,.zp0863 *::before,.zp0863 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0863 a,.zp0863 button,.zp0863 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
