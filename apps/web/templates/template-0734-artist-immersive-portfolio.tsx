import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0734-artist-immersive-portfolio", "family": "Immersive Portfolio", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|masonry-story|team>proof>collection>integrations>pricing>services|circular|ceremonial", "industry": "artist", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "masonry-story"};

export default function Template0734({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d2a679";
  return <main className="zp0734" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0734{--bg:#0d0d0d;--fg:#f3ebe1;--primary:#d2a679;--primary-fg:#050505;--secondary:#aa7b57;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0734 *{box-sizing:border-box}
.zp0734 a{color:inherit;text-decoration:none}
.zp0734 h1,.zp0734 h2,.zp0734 h3,.zp0734 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0734 img{max-width:100%;display:block}
.zp0734 button,.zp0734 a{-webkit-tap-highlight-color:transparent}
.zp0734 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0734 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0734 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0734 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0734 .nav.cluster{align-items:flex-end}
.zp0734 .mobileMenu{display:none}
.zp0734 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0734 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0734 .eyebrow,.zp0734 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0734 h1{font-size:clamp(48px,7.45vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0734 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0734 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0734 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0734 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0734 .visual,.zp0734 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0734 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0734 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0734 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0734 .heroPhoto{object-fit:cover}
.zp0734 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0734 .circleHero{grid-template-columns:1fr 1fr}
.zp0734 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0734 .circleFrame>*{height:100%;border-radius:50%}
.zp0734 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0734 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0734 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0734 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0734 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0734 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0734 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0734 .serviceGrid p{color:var(--muted)}
.zp0734 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0734 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0734 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0734 details{border-top:1px solid var(--border);padding:20px 0}
.zp0734 details summary{font-weight:800;cursor:pointer}
.zp0734 details p{color:var(--muted);max-width:70ch}
.zp0734 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0734 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0734 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Copperplate, Georgia, serif;margin-bottom:18px}
.zp0734 .priceRows{border-top:1px solid var(--border)}
.zp0734 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0734 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0734 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0734 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0734 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0734 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0734 .p1,.zp0734 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0734 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0734 .contact .eyebrow{color:var(--bg)}
.zp0734 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0734 .contactMeta{display:grid;gap:10px}
.zp0734 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0734 .hero{min-height:auto}
.zp0734 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0734 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0734 .nav nav{display:none}
.zp0734 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0734 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0734 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0734 .mobileMenu nav a{padding:10px 8px}
.zp0734 .hero,.zp0734 .circleHero{grid-template-columns:1fr}
.zp0734 .section,.zp0734 .sectionTitle,.zp0734 .contact{grid-template-columns:1fr}
.zp0734 .teamGrid{grid-template-columns:1fr 1fr}
.zp0734 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0734 .section{display:block}}
@media(max-width:430px){.zp0734{font-size:16px}
.zp0734 .hero,.zp0734 .section,.zp0734 .contact{padding-left:18px;padding-right:18px}
.zp0734 .serviceGrid,.zp0734 .proof,.zp0734 .teamGrid,.zp0734 .collectionGrid{grid-template-columns:1fr}
.zp0734 h1{font-size:clamp(42px,14vw,70px)}
.zp0734 .priceRows article{grid-template-columns:1fr}}

.zp0734 .heroActions a,.zp0734 .primary,.zp0734 .ctaBtn,.zp0734 .btnPrimary,.zp0734 .schedule>a,.zp0734 .newsletter>a{transition:all .2s ease}
.zp0734 .heroActions a:hover,.zp0734 .primary:hover,.zp0734 .ctaBtn:hover,.zp0734 .btnPrimary:hover{
  opacity:.8
}
.zp0734 nav a,.zp0734 .nav a,.zp0734 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0734 nav a:hover,.zp0734 .nav a:hover,.zp0734 .footer a:hover{
  opacity:.65
}
.zp0734 .serviceGrid article,.zp0734 .projectCard,.zp0734 .teamCard,.zp0734 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0734 .serviceGrid article:hover,.zp0734 .projectCard:hover,.zp0734 .teamCard:hover,.zp0734 .bentoCard:hover{
  transform:scale(1.03)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0734 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0734 .sectionTitle,.zp0734 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0734 *,.zp0734 *::before,.zp0734 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0734 a,.zp0734 button,.zp0734 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">33</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Immersive Portfolio / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
