import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0764-creator-typographic-poster", "family": "Typographic Poster", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|dashboard-story|services>timeline>press>packages>story>proof|notched|product-ui", "industry": "creator", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "dashboard-story"};

export default function Template0764({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Creator Brand");
  const headline = String(content.headline || "A clear home base for work, audience, collaborations, and owned distribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Latest work", "Partnerships", "Newsletter", "Resources", "Speaking"];
  const industryLabel = "Creator brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA clear home base for work, audience, collaborations, and owned distribution.\u201d";
  const storyBody = "Elm Creator Brand is presented as a real working creator brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creator brand / Project A", "Creator brand / Project B", "Creator brand / Project C", "Creator brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A clear home base for work, audience, collaborations, and owned distribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0764" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0764{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0764 *{box-sizing:border-box}
.zp0764 a{color:inherit;text-decoration:none}
.zp0764 h1,.zp0764 h2,.zp0764 h3,.zp0764 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0764 img{max-width:100%;display:block}
.zp0764 button,.zp0764 a{-webkit-tap-highlight-color:transparent}
.zp0764 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0764 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0764 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0764 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0764 .mobileMenu{display:none}
.zp0764 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0764 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0764 .eyebrow,.zp0764 .sectionTitle>span,.zp0764 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0764 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0764 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0764 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0764 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0764 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0764 .mapHero{grid-template-columns:1fr 1fr}
.zp0764 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0764 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0764 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0764 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0764 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0764 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0764 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0764 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0764 .serviceGrid p{color:var(--muted)}
.zp0764 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0764 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0764 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0764 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0764 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0764 .story p{color:var(--muted)}
.zp0764 details{border-top:1px solid var(--border);padding:20px 0}
.zp0764 details summary{font-weight:800;cursor:pointer}
.zp0764 details p{color:var(--muted);max-width:70ch}
.zp0764 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0764 .timeline article{padding:20px 0}
.zp0764 .awards>div{max-width:800px;margin-left:auto}
.zp0764 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0764 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0764 .packages>.sectionTitle{grid-column:1/-1}
.zp0764 .packages article{padding:24px;border:1px solid var(--border)}
.zp0764 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0764 .contact .eyebrow{color:var(--bg)}
.zp0764 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0764 .contactMeta{display:grid;gap:10px}
.zp0764 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0764 .heroCopy{animation:enter-763 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-763{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0764 .hero{min-height:auto}
.zp0764 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0764 .proof{grid-template-columns:1fr 1fr}
.zp0764 .packages{grid-template-columns:1fr 1fr}
.zp0764 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0764 .nav nav{display:none}
.zp0764 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0764 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0764 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0764 .mobileMenu nav a{padding:10px 8px}
.zp0764 .hero,.zp0764 .mapHero{grid-template-columns:1fr}
.zp0764 .section,.zp0764 .sectionTitle,.zp0764 .story,.zp0764 .contact{grid-template-columns:1fr}
.zp0764 .section{display:block}}
@media(max-width:430px){.zp0764{font-size:16px}
.zp0764 .hero,.zp0764 .section,.zp0764 .contact{padding-left:18px;padding-right:18px}
.zp0764 .serviceGrid,.zp0764 .proof,.zp0764 .packages{grid-template-columns:1fr}
.zp0764 h1{font-size:clamp(42px,14vw,70px)}}

.zp0764 .heroActions a,.zp0764 .primary,.zp0764 .ctaBtn,.zp0764 .btnPrimary,.zp0764 .schedule>a,.zp0764 .newsletter>a{transition:all .2s ease}
.zp0764 .heroActions a:hover,.zp0764 .primary:hover,.zp0764 .ctaBtn:hover,.zp0764 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0764 nav a,.zp0764 .nav a,.zp0764 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0764 nav a:hover,.zp0764 .nav a:hover,.zp0764 .footer a:hover{
  color:var(--primary)
}
.zp0764 .serviceGrid article,.zp0764 .projectCard,.zp0764 .teamCard,.zp0764 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0764 .serviceGrid article:hover,.zp0764 .projectCard:hover,.zp0764 .teamCard:hover,.zp0764 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0764 *,.zp0764 *::before,.zp0764 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0764 a,.zp0764 button,.zp0764 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
