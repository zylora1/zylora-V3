import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0990-food-brand-retro-futurism", "family": "Retro Futurism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|modular-12|collection>research>story>credentials>proof>services>team|circular|neo-grotesk", "industry": "food-brand", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "modular-12"};

export default function Template0990({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Food Brand");
  const headline = String(content.headline || "A food brand built around distinctive flavour, clear provenance, and easy discovery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Products", "Recipes", "Stockists", "Wholesale", "Story"];
  const industryLabel = "Food brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA food brand built around distinctive flavour, clear provenance, and easy discovery.\u201d";
  const storyBody = "Tandem Food Brand is presented as a real working food brand, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0990" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0990{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0990 *{box-sizing:border-box}
.zp0990 a{color:inherit;text-decoration:none}
.zp0990 h1,.zp0990 h2,.zp0990 h3,.zp0990 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0990 img{max-width:100%;display:block}
.zp0990 button,.zp0990 a{-webkit-tap-highlight-color:transparent}
.zp0990 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0990 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0990 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0990 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0990 .nav.cluster{align-items:flex-end}
.zp0990 .mobileMenu{display:none}
.zp0990 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0990 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0990 .eyebrow,.zp0990 .sectionTitle>span,.zp0990 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0990 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0990 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0990 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0990 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0990 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0990 .visual,.zp0990 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0990 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0990 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0990 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0990 .heroPhoto{object-fit:cover}
.zp0990 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0990 .circleHero{grid-template-columns:1fr 1fr}
.zp0990 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0990 .circleFrame>*{height:100%;border-radius:50%}
.zp0990 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0990 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0990 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0990 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0990 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0990 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0990 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0990 .serviceGrid p{color:var(--muted)}
.zp0990 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0990 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0990 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0990 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0990 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0990 .story p{color:var(--muted)}
.zp0990 details{border-top:1px solid var(--border);padding:20px 0}
.zp0990 details summary{font-weight:800;cursor:pointer}
.zp0990 details p{color:var(--muted);max-width:70ch}
.zp0990 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0990 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0990 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Helvetica Neue, Arial, sans-serif;margin-bottom:18px}
.zp0990 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0990 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0990 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0990 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0990 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0990 .p1,.zp0990 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0990 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0990 .researchRows{max-width:900px;margin-left:auto}
.zp0990 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0990 .contact .eyebrow{color:var(--bg)}
.zp0990 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0990 .contactMeta{display:grid;gap:10px}
.zp0990 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0990 .heroCopy{animation:enter-989 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-989{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0990 .hero{min-height:auto}
.zp0990 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0990 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0990 .nav nav{display:none}
.zp0990 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0990 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0990 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0990 .mobileMenu nav a{padding:10px 8px}
.zp0990 .hero,.zp0990 .circleHero{grid-template-columns:1fr}
.zp0990 .section,.zp0990 .sectionTitle,.zp0990 .story,.zp0990 .contact{grid-template-columns:1fr}
.zp0990 .teamGrid{grid-template-columns:1fr 1fr}
.zp0990 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0990 .section{display:block}}
@media(max-width:430px){.zp0990{font-size:16px}
.zp0990 .hero,.zp0990 .section,.zp0990 .contact{padding-left:18px;padding-right:18px}
.zp0990 .serviceGrid,.zp0990 .proof,.zp0990 .teamGrid,.zp0990 .collectionGrid{grid-template-columns:1fr}
.zp0990 h1{font-size:clamp(42px,14vw,70px)}}

.zp0990 .heroActions a,.zp0990 .primary,.zp0990 .ctaBtn,.zp0990 .btnPrimary,.zp0990 .schedule>a,.zp0990 .newsletter>a{transition:all .2s ease}
.zp0990 .heroActions a:hover,.zp0990 .primary:hover,.zp0990 .ctaBtn:hover,.zp0990 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0990 nav a,.zp0990 .nav a,.zp0990 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0990 nav a:hover,.zp0990 .nav a:hover,.zp0990 .footer a:hover{
  color:var(--primary)
}
.zp0990 .serviceGrid article,.zp0990 .projectCard,.zp0990 .teamCard,.zp0990 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0990 .serviceGrid article:hover,.zp0990 .projectCard:hover,.zp0990 .teamCard:hover,.zp0990 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0990 *,.zp0990 *::before,.zp0990 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0990 a,.zp0990 button,.zp0990 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">89</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Futurism / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
