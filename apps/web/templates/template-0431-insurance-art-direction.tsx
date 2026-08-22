import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0431-insurance-art-direction", "family": "Art Direction", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|location-led|asymmetric-5-7|process>proof>projects>materials>services>pricing|soft-12|clean-humanist", "industry": "insurance", "hero": "location-led", "navigation": "vertical-rail", "layout": "asymmetric-5-7"};

export default function Template0431({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Miller & Rowe Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Signal Lead", "role": "Principal / Lead"}, {"name": "Mosaic Team", "role": "Client experience"}, {"name": "Kindred Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0431" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0431{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0431 *{box-sizing:border-box}
.zp0431 a{color:inherit;text-decoration:none}
.zp0431 h1,.zp0431 h2,.zp0431 h3,.zp0431 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0431 img{max-width:100%;display:block}
.zp0431 button,.zp0431 a{-webkit-tap-highlight-color:transparent}
.zp0431 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0431 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0431 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0431 .mobileMenu{display:none}
.zp0431:has(.navRail)>.hero,.zp0431:has(.navRail)>.section,.zp0431:has(.navRail)>.contact,.zp0431:has(.navRail)>.footer{margin-left:190px}
.zp0431 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0431 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0431 .eyebrow,.zp0431 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0431 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0431 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0431 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0431 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0431 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0431 .locationHero{grid-template-columns:1fr 1fr}
.zp0431 .mapPanel{min-height:430px;border:1px solid var(--border);position:relative;padding:24px;background:repeating-linear-gradient(45deg,transparent 0 28px,var(--border) 29px 30px)}
.zp0431 .mapDot{position:absolute;left:55%;top:46%;width:24px;aspect-ratio:1;background:var(--primary);border-radius:50%;box-shadow:0 0 0 18px color-mix(in srgb,var(--primary) 18%,transparent)}
.zp0431 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0431 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0431 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0431 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0431 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0431 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0431 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0431 .serviceGrid p{color:var(--muted)}
.zp0431 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0431 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0431 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0431 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0431 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0431 details{border-top:1px solid var(--border);padding:20px 0}
.zp0431 details summary{font-weight:800;cursor:pointer}
.zp0431 details p{color:var(--muted);max-width:70ch}
.zp0431 .priceRows{border-top:1px solid var(--border)}
.zp0431 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0431 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0431 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0431 .projects article:nth-child(2){transform:translateY(32px)}
.zp0431 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0431 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0431 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0431 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0431 .contact .eyebrow{color:var(--bg)}
.zp0431 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0431 .contactMeta{display:grid;gap:10px}
.zp0431 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0431 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0431 .heroCopy{animation:enter-430 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-430{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0431 .hero{min-height:auto}
.zp0431 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0431 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0431 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0431 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0431 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0431 .mobileMenu nav a{padding:10px 8px}
.zp0431 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0431:has(.navRail)>.hero,.zp0431:has(.navRail)>.section,.zp0431:has(.navRail)>.contact,.zp0431:has(.navRail)>.footer{margin-left:0}
.zp0431 .hero,.zp0431 .locationHero{grid-template-columns:1fr}
.zp0431 .section,.zp0431 .sectionTitle,.zp0431 .contact{grid-template-columns:1fr}
.zp0431 .projects .projectGrid{grid-template-columns:1fr}
.zp0431 .projects article:nth-child(2){transform:none}
.zp0431 .section{display:block}}
@media(max-width:430px){.zp0431{font-size:16px}
.zp0431 .hero,.zp0431 .section,.zp0431 .contact{padding-left:18px;padding-right:18px}
.zp0431 .serviceGrid,.zp0431 .proof{grid-template-columns:1fr}
.zp0431 h1{font-size:clamp(42px,14vw,70px)}
.zp0431 .priceRows article{grid-template-columns:1fr}}

.zp0431 .heroActions a,.zp0431 .primary,.zp0431 .ctaBtn,.zp0431 .btnPrimary,.zp0431 .schedule>a,.zp0431 .newsletter>a{transition:all .2s ease}
.zp0431 .heroActions a:hover,.zp0431 .primary:hover,.zp0431 .ctaBtn:hover,.zp0431 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0431 nav a,.zp0431 .nav a,.zp0431 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0431 nav a:hover,.zp0431 .nav a:hover,.zp0431 .footer a:hover{
  opacity:.7
}
.zp0431 .serviceGrid article,.zp0431 .projectCard,.zp0431 .teamCard,.zp0431 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0431 .serviceGrid article:hover,.zp0431 .projectCard:hover,.zp0431 .teamCard:hover,.zp0431 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0431 *,.zp0431 *::before,.zp0431 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0431 a,.zp0431 button,.zp0431 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero locationHero"><div className="mapPanel"><span>{address || "Local / Independent"}</span><div className="mapDot"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
