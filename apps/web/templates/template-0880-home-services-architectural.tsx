import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0880-home-services-architectural", "family": "Architectural", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|single-column-longform|services>pricing>proof>newsletter>research|heavy-frame|brutal-display", "industry": "home-services", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "single-column-longform"};

export default function Template0880({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Home Services Company");
  const headline = String(content.headline || "Trusted local trades with transparent arrival windows and straightforward estimates.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Electrical", "Plumbing", "Heating", "Emergency callouts", "Maintenance plans"];
  const industryLabel = "Home services company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Home services company / Project A", "Home services company / Project B", "Home services company / Project C", "Home services company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trusted local trades with transparent arrival windows and straightforward estimates. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0880" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0880{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0880 *{box-sizing:border-box}
.zp0880 a{color:inherit;text-decoration:none}
.zp0880 h1,.zp0880 h2,.zp0880 h3,.zp0880 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0880 img{max-width:100%;display:block}
.zp0880 button,.zp0880 a{-webkit-tap-highlight-color:transparent}
.zp0880 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0880 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0880 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0880 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0880 .nav.centered strong{order:2;font-size:24px}
.zp0880 .nav.centered nav:first-child{order:1}
.zp0880 .nav.centered nav:last-child{order:3}
.zp0880 .mobileMenu{display:none}
.zp0880 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0880 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0880 .eyebrow,.zp0880 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0880 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0880 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0880 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0880 .heroActions a,.zp0880 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0880 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0880 .visual,.zp0880 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0880 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0880 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0880 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0880 .heroPhoto{object-fit:cover}
.zp0880 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0880 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0880 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0880 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0880 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0880 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0880 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0880 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0880 .serviceGrid p{color:var(--muted)}
.zp0880 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0880 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0880 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0880 details{border-top:1px solid var(--border);padding:20px 0}
.zp0880 details summary{font-weight:800;cursor:pointer}
.zp0880 details p{color:var(--muted);max-width:70ch}
.zp0880 .priceRows{border-top:1px solid var(--border)}
.zp0880 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0880 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0880 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0880 .researchRows{max-width:900px;margin-left:auto}
.zp0880 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0880 .contact .eyebrow{color:var(--bg)}
.zp0880 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0880 .contactMeta{display:grid;gap:10px}
.zp0880 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0880 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0880 .sectionTitle{display:block}
.zp0880 .heroCopy{animation:enter-879 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-879{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0880 .hero{min-height:auto}
.zp0880 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0880 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0880 .nav nav{display:none}
.zp0880 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0880 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0880 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0880 .mobileMenu nav a{padding:10px 8px}
.zp0880 .hero,.zp0880 .asymHero{grid-template-columns:1fr}
.zp0880 .section,.zp0880 .sectionTitle,.zp0880 .contact{grid-template-columns:1fr}
.zp0880 .section{display:block}}
@media(max-width:430px){.zp0880{font-size:16px}
.zp0880 .hero,.zp0880 .section,.zp0880 .contact{padding-left:18px;padding-right:18px}
.zp0880 .serviceGrid,.zp0880 .proof{grid-template-columns:1fr}
.zp0880 h1{font-size:clamp(42px,14vw,70px)}
.zp0880 .priceRows article{grid-template-columns:1fr}}

.zp0880 .heroActions a,.zp0880 .primary,.zp0880 .ctaBtn,.zp0880 .btnPrimary,.zp0880 .schedule>a,.zp0880 .newsletter>a{transition:all .2s ease}
.zp0880 .heroActions a:hover,.zp0880 .primary:hover,.zp0880 .ctaBtn:hover,.zp0880 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0880 nav a,.zp0880 .nav a,.zp0880 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0880 nav a:hover,.zp0880 .nav a:hover,.zp0880 .footer a:hover{
  opacity:.7
}
.zp0880 .serviceGrid article,.zp0880 .projectCard,.zp0880 .teamCard,.zp0880 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0880 .serviceGrid article:hover,.zp0880 .projectCard:hover,.zp0880 .teamCard:hover,.zp0880 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0880 *,.zp0880 *::before,.zp0880 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0880 a,.zp0880 button,.zp0880 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">07</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">79</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
