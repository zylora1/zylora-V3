import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0815-nonprofit-neo-brutalism", "family": "Neo-Brutalism", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|manifesto-grid|features>proof>credentials>timeline>testimonial>services|soft-12|clean-humanist", "industry": "nonprofit", "hero": "location-led", "navigation": "vertical-rail", "layout": "manifesto-grid"};

export default function Template0815({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Nonprofit");
  const headline = String(content.headline || "A clear case for action, transparent impact, and simple ways to participate or give.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Programmes", "Impact", "Volunteer", "Donate", "Resources"];
  const industryLabel = "Nonprofit";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Pavilion client";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Nonprofit / Project A", "Nonprofit / Project B", "Nonprofit / Project C", "Nonprofit / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear case for action, transparent impact, and simple ways to participate or give. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0815" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0815{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:3px;--shadow:none;--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0815 *{box-sizing:border-box}
.zp0815 a{color:inherit;text-decoration:none}
.zp0815 h1,.zp0815 h2,.zp0815 h3,.zp0815 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0815 img{max-width:100%;display:block}
.zp0815 button,.zp0815 a{-webkit-tap-highlight-color:transparent}
.zp0815 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0815 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0815 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0815 .mobileMenu{display:none}
.zp0815:has(.navRail)>.hero,.zp0815:has(.navRail)>.section,.zp0815:has(.navRail)>.contact,.zp0815:has(.navRail)>.footer{margin-left:190px}
.zp0815 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0815 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0815 .eyebrow,.zp0815 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0815 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0815 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0815 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0815 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0815 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0815 .locationHero{grid-template-columns:1fr 1fr}
.zp0815 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0815 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0815 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0815 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0815 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0815 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0815 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0815 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0815 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0815 .serviceGrid p{color:var(--muted)}
.zp0815 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0815 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0815 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0815 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0815 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0815 .testimonial>div{align-self:end}
.zp0815 .testimonial span{display:block;opacity:.7}
.zp0815 details{border-top:1px solid var(--border);padding:20px 0}
.zp0815 details summary{font-weight:800;cursor:pointer}
.zp0815 details p{color:var(--muted);max-width:70ch}
.zp0815 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0815 .features ul{list-style:none;margin:0;padding:0}
.zp0815 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0815 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0815 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0815 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0815 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0815 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0815 .timeline article{padding:20px 0}
.zp0815 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0815 .contact .eyebrow{color:var(--bg)}
.zp0815 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0815 .contactMeta{display:grid;gap:10px}
.zp0815 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0815 .heroActions a,.zp0815 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0815 h1{text-transform:uppercase}
.zp0815 .heroCopy{animation:enter-814 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-814{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0815 .hero{min-height:auto}
.zp0815 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0815 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0815 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0815 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0815 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0815 .mobileMenu nav a{padding:10px 8px}
.zp0815 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0815:has(.navRail)>.hero,.zp0815:has(.navRail)>.section,.zp0815:has(.navRail)>.contact,.zp0815:has(.navRail)>.footer{margin-left:0}
.zp0815 .hero,.zp0815 .locationHero{grid-template-columns:1fr}
.zp0815 .section,.zp0815 .sectionTitle,.zp0815 .features,.zp0815 .contact{grid-template-columns:1fr}
.zp0815 .testimonial{grid-template-columns:1fr}
.zp0815 .section{display:block}}
@media(max-width:430px){.zp0815{font-size:16px}
.zp0815 .hero,.zp0815 .section,.zp0815 .contact{padding-left:18px;padding-right:18px}
.zp0815 .serviceGrid,.zp0815 .proof{grid-template-columns:1fr}
.zp0815 h1{font-size:clamp(42px,14vw,70px)}}

.zp0815 .heroActions a,.zp0815 .primary,.zp0815 .ctaBtn,.zp0815 .btnPrimary,.zp0815 .schedule>a,.zp0815 .newsletter>a{transition:all .2s ease}
.zp0815 .heroActions a:hover,.zp0815 .primary:hover,.zp0815 .ctaBtn:hover,.zp0815 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0815 nav a,.zp0815 .nav a,.zp0815 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0815 nav a:hover,.zp0815 .nav a:hover,.zp0815 .footer a:hover{
  text-decoration:underline
}
.zp0815 .serviceGrid article,.zp0815 .projectCard,.zp0815 .teamCard,.zp0815 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0815 .serviceGrid article:hover,.zp0815 .projectCard:hover,.zp0815 .teamCard:hover,.zp0815 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0815 *,.zp0815 *::before,.zp0815 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0815 a,.zp0815 button,.zp0815 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-Brutalism / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
