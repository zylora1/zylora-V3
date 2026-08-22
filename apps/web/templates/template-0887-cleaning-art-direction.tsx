import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0887-cleaning-art-direction", "family": "Art Direction", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|manifesto-grid|case-study>proof>services>features>timeline>story|asymmetric-radius|clean-humanist", "industry": "cleaning", "hero": "index-led", "navigation": "editorial-index", "layout": "manifesto-grid"};

export default function Template0887({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Cleaning Company");
  const headline = String(content.headline || "Reliable cleaning with simple scheduling, consistent teams, and clear scope.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Home cleaning", "Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring plans"];
  const industryLabel = "Cleaning company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cReliable cleaning with simple scheduling, consistent teams, and clear scope.\u201d";
  const storyBody = "Foxglove Cleaning Company is presented as a real working cleaning company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp0887" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0887{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0887 *{box-sizing:border-box}
.zp0887 a{color:inherit;text-decoration:none}
.zp0887 h1,.zp0887 h2,.zp0887 h3,.zp0887 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0887 img{max-width:100%;display:block}
.zp0887 button,.zp0887 a{-webkit-tap-highlight-color:transparent}
.zp0887 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0887 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0887 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0887 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0887 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0887 .nav.index nav{justify-content:flex-end}
.zp0887 .mobileMenu{display:none}
.zp0887 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0887 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0887 .eyebrow,.zp0887 .sectionTitle>span,.zp0887 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0887 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0887 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0887 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0887 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0887 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0887 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0887 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0887 .indexHero li{font:700 18px/1.2 Avenir, Helvetica Neue, Arial, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0887 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0887 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0887 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0887 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0887 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0887 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0887 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0887 .serviceGrid p{color:var(--muted)}
.zp0887 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0887 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0887 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0887 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0887 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0887 .story p{color:var(--muted)}
.zp0887 details{border-top:1px solid var(--border);padding:20px 0}
.zp0887 details summary{font-weight:800;cursor:pointer}
.zp0887 details p{color:var(--muted);max-width:70ch}
.zp0887 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0887 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0887 .projects article:nth-child(2){transform:translateY(32px)}
.zp0887 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0887 .features ul{list-style:none;margin:0;padding:0}
.zp0887 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0887 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0887 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0887 .timeline article{padding:20px 0}
.zp0887 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0887 .contact .eyebrow{color:var(--bg)}
.zp0887 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0887 .contactMeta{display:grid;gap:10px}
.zp0887 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0887 .heroCopy{animation:enter-886 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-886{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0887 .hero{min-height:auto}
.zp0887 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0887 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0887 .nav nav{display:none}
.zp0887 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0887 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0887 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0887 .mobileMenu nav a{padding:10px 8px}
.zp0887 .hero,.zp0887 .indexHero{grid-template-columns:1fr}
.zp0887 .section,.zp0887 .sectionTitle,.zp0887 .story,.zp0887 .features,.zp0887 .contact{grid-template-columns:1fr}
.zp0887 .projects .projectGrid{grid-template-columns:1fr}
.zp0887 .projects article:nth-child(2){transform:none}
.zp0887 .section{display:block}}
@media(max-width:430px){.zp0887{font-size:16px}
.zp0887 .hero,.zp0887 .section,.zp0887 .contact{padding-left:18px;padding-right:18px}
.zp0887 .serviceGrid,.zp0887 .proof{grid-template-columns:1fr}
.zp0887 h1{font-size:clamp(42px,14vw,70px)}
.zp0887 .nav.index{grid-template-columns:1fr auto}
.zp0887 .nav.index>span{display:none}}

.zp0887 .heroActions a,.zp0887 .primary,.zp0887 .ctaBtn,.zp0887 .btnPrimary,.zp0887 .schedule>a,.zp0887 .newsletter>a{transition:all .2s ease}
.zp0887 .heroActions a:hover,.zp0887 .primary:hover,.zp0887 .ctaBtn:hover,.zp0887 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0887 nav a,.zp0887 .nav a,.zp0887 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0887 nav a:hover,.zp0887 .nav a:hover,.zp0887 .footer a:hover{
  opacity:.7
}
.zp0887 .serviceGrid article,.zp0887 .projectCard,.zp0887 .teamCard,.zp0887 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0887 .serviceGrid article:hover,.zp0887 .projectCard:hover,.zp0887 .teamCard:hover,.zp0887 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0887 *,.zp0887 *::before,.zp0887 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0887 a,.zp0887 button,.zp0887 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
