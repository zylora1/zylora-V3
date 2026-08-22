import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0344-interiors-geometric", "family": "Geometric", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|conversion-first|story>timeline>services>research>packages>proof|micro-radius|newspaper", "industry": "interiors", "hero": "video-frame", "navigation": "corner-dock", "layout": "conversion-first"};

export default function Template0344({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Interior Design Studio");
  const headline = String(content.headline || "Layered interiors with a clear point of view and rigorous attention to daily use.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Interior architecture", "Residential design", "Hospitality", "Furniture sourcing", "Styling"];
  const industryLabel = "Interior design studio";
  const serviceNotes = ["Full design service from brief to final installation, managed by a single lead designer.", "Trade access to furniture, fabrics, and lighting unavailable to the public.", "3D visualisations provided before any purchasing decisions are made.", "Project management including contractor coordination and quality sign-off.", "Styling and accessory curation for the finish that makes a space feel complete."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const storyQuote = "\u201cLayered interiors with a clear point of view and rigorous attention to daily use.\u201d";
  const storyBody = "Bureau Interior Design Studio is presented as a real working interior design studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0344" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0344{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0344 *{box-sizing:border-box}
.zp0344 a{color:inherit;text-decoration:none}
.zp0344 h1,.zp0344 h2,.zp0344 h3,.zp0344 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0344 img{max-width:100%;display:block}
.zp0344 button,.zp0344 a{-webkit-tap-highlight-color:transparent}
.zp0344 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0344 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0344 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0344 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0344 .mobileMenu{display:none}
.zp0344 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0344 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0344 .eyebrow,.zp0344 .sectionTitle>span,.zp0344 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0344 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0344 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0344 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0344 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0344 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0344 .visual,.zp0344 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0344 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0344 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0344 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0344 .heroPhoto{object-fit:cover}
.zp0344 .videoHero{grid-template-columns:1fr 1fr}
.zp0344 .videoFrame{position:relative}
.zp0344 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0344 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0344 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0344 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0344 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0344 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0344 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0344 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0344 .serviceGrid p{color:var(--muted)}
.zp0344 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0344 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0344 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0344 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0344 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0344 .story p{color:var(--muted)}
.zp0344 details{border-top:1px solid var(--border);padding:20px 0}
.zp0344 details summary{font-weight:800;cursor:pointer}
.zp0344 details p{color:var(--muted);max-width:70ch}
.zp0344 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0344 .timeline article{padding:20px 0}
.zp0344 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0344 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0344 .packages>.sectionTitle{grid-column:1/-1}
.zp0344 .packages article{padding:24px;border:1px solid var(--border)}
.zp0344 .researchRows{max-width:900px;margin-left:auto}
.zp0344 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0344 .contact .eyebrow{color:var(--bg)}
.zp0344 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0344 .contactMeta{display:grid;gap:10px}
.zp0344 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0344 .heroCopy{animation:enter-343 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-343{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0344 .hero{min-height:auto}
.zp0344 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0344 .proof{grid-template-columns:1fr 1fr}
.zp0344 .packages{grid-template-columns:1fr 1fr}
.zp0344 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0344 .nav nav{display:none}
.zp0344 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0344 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0344 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0344 .mobileMenu nav a{padding:10px 8px}
.zp0344 .hero,.zp0344 .videoHero{grid-template-columns:1fr}
.zp0344 .section,.zp0344 .sectionTitle,.zp0344 .story,.zp0344 .contact{grid-template-columns:1fr}
.zp0344 .section{display:block}}
@media(max-width:430px){.zp0344{font-size:16px}
.zp0344 .hero,.zp0344 .section,.zp0344 .contact{padding-left:18px;padding-right:18px}
.zp0344 .serviceGrid,.zp0344 .proof,.zp0344 .packages{grid-template-columns:1fr}
.zp0344 h1{font-size:clamp(42px,14vw,70px)}}

.zp0344 .heroActions a,.zp0344 .primary,.zp0344 .ctaBtn,.zp0344 .btnPrimary,.zp0344 .schedule>a,.zp0344 .newsletter>a{transition:all .2s ease}
.zp0344 .heroActions a:hover,.zp0344 .primary:hover,.zp0344 .ctaBtn:hover,.zp0344 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0344 nav a,.zp0344 .nav a,.zp0344 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0344 nav a:hover,.zp0344 .nav a:hover,.zp0344 .footer a:hover{
  color:var(--primary)
}
.zp0344 .serviceGrid article,.zp0344 .projectCard,.zp0344 .teamCard,.zp0344 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0344 .serviceGrid article:hover,.zp0344 .projectCard:hover,.zp0344 .teamCard:hover,.zp0344 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0344 *,.zp0344 *::before,.zp0344 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0344 a,.zp0344 button,.zp0344 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">43</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
