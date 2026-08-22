import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0228-bakery-scandinavian", "family": "Scandinavian", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|stacked-posters|services>proof>press>packages>schedule>community>comparison|cut-corners|literary", "industry": "bakery", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "stacked-posters"};

export default function Template0228({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const storyBody = "Fieldwork Bakery is presented as a real working bakery, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0228" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0228{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0228 *{box-sizing:border-box}
.zp0228 a{color:inherit;text-decoration:none}
.zp0228 h1,.zp0228 h2,.zp0228 h3,.zp0228 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0228 img{max-width:100%;display:block}
.zp0228 button,.zp0228 a{-webkit-tap-highlight-color:transparent}
.zp0228 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0228 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0228 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0228 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0228 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0228 .mobileMenu{display:none}
.zp0228 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0228 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0228 .eyebrow,.zp0228 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0228 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0228 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0228 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0228 .heroActions a,.zp0228 .schedule>a,.zp0228 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0228 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0228 .visual,.zp0228 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0228 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0228 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0228 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0228 .heroPhoto{object-fit:cover}
.zp0228 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0228 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0228 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0228 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0228 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0228 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0228 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0228 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0228 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0228 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0228 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0228 .serviceGrid p{color:var(--muted)}
.zp0228 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0228 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0228 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0228 details{border-top:1px solid var(--border);padding:20px 0}
.zp0228 details summary{font-weight:800;cursor:pointer}
.zp0228 details p{color:var(--muted);max-width:70ch}
.zp0228 .schedule,.zp0228 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0228 .awards>div{max-width:800px;margin-left:auto}
.zp0228 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0228 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0228 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0228 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0228 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0228 .packages>.sectionTitle{grid-column:1/-1}
.zp0228 .packages article{padding:24px;border:1px solid var(--border)}
.zp0228 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0228 .contact .eyebrow{color:var(--bg)}
.zp0228 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0228 .contactMeta{display:grid;gap:10px}
.zp0228 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0228 .heroCopy{animation:enter-227 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-227{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0228 .hero{min-height:auto}
.zp0228 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0228 .proof{grid-template-columns:1fr 1fr}
.zp0228 .packages{grid-template-columns:1fr 1fr}
.zp0228 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0228 .nav nav{display:none}
.zp0228 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0228 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0228 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0228 .mobileMenu nav a{padding:10px 8px}
.zp0228 .hero,.zp0228 .bentoHero{grid-template-columns:1fr}
.zp0228 .section,.zp0228 .sectionTitle,.zp0228 .contact{grid-template-columns:1fr}
.zp0228 .section{display:block}}
@media(max-width:430px){.zp0228{font-size:16px}
.zp0228 .hero,.zp0228 .section,.zp0228 .contact{padding-left:18px;padding-right:18px}
.zp0228 .serviceGrid,.zp0228 .proof,.zp0228 .packages,.zp0228 .compareGrid{grid-template-columns:1fr}
.zp0228 h1{font-size:clamp(42px,14vw,70px)}}

.zp0228 .heroActions a,.zp0228 .primary,.zp0228 .ctaBtn,.zp0228 .btnPrimary,.zp0228 .schedule>a,.zp0228 .newsletter>a{transition:all .2s ease}
.zp0228 .heroActions a:hover,.zp0228 .primary:hover,.zp0228 .ctaBtn:hover,.zp0228 .btnPrimary:hover{
  opacity:.75
}
.zp0228 nav a,.zp0228 .nav a,.zp0228 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0228 nav a:hover,.zp0228 .nav a:hover,.zp0228 .footer a:hover{
  opacity:.65
}
.zp0228 .serviceGrid article,.zp0228 .projectCard,.zp0228 .teamCard,.zp0228 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0228 .serviceGrid article:hover,.zp0228 .projectCard:hover,.zp0228 .teamCard:hover,.zp0228 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0228 *,.zp0228 *::before,.zp0228 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0228 a,.zp0228 button,.zp0228 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">27</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
