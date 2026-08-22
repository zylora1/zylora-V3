import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0122-sports-brutalism", "family": "Brutalism", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|masonry-story|products>services>proof>hours>team>press|paper-sheet|modernist-duo", "industry": "sports", "hero": "product-demo", "navigation": "left-sidebar", "layout": "masonry-story"};

export default function Template0122({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0122" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0122{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:3px;--shadow:none;--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0122 *{box-sizing:border-box}
.zp0122 a{color:inherit;text-decoration:none}
.zp0122 h1,.zp0122 h2,.zp0122 h3,.zp0122 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0122 img{max-width:100%;display:block}
.zp0122 button,.zp0122 a{-webkit-tap-highlight-color:transparent}
.zp0122 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0122 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0122 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0122 .mobileMenu{display:none}
.zp0122:has(.navRail)>.hero,.zp0122:has(.navRail)>.section,.zp0122:has(.navRail)>.contact,.zp0122:has(.navRail)>.footer{margin-left:190px}
.zp0122 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0122 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0122 .eyebrow,.zp0122 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0122 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0122 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0122 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0122 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0122 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0122 .visual,.zp0122 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0122 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0122 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0122 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0122 .heroPhoto{object-fit:cover}
.zp0122 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0122 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0122 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0122 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0122 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0122 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0122 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0122 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0122 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0122 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0122 .serviceGrid p{color:var(--muted)}
.zp0122 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0122 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0122 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0122 details{border-top:1px solid var(--border);padding:20px 0}
.zp0122 details summary{font-weight:800;cursor:pointer}
.zp0122 details p{color:var(--muted);max-width:70ch}
.zp0122 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0122 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0122 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Futura, Avenir, Arial, sans-serif;margin-bottom:18px}
.zp0122 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0122 .hours dl{margin:0}
.zp0122 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0122 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0122 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0122 .p1,.zp0122 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0122 .awards>div{max-width:800px;margin-left:auto}
.zp0122 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0122 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0122 .contact .eyebrow{color:var(--bg)}
.zp0122 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0122 .contactMeta{display:grid;gap:10px}
.zp0122 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0122 .heroActions a,.zp0122 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0122 h1{text-transform:uppercase}
.zp0122 .heroCopy{animation:enter-121 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-121{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0122 .hero{min-height:auto}
.zp0122 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0122 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0122 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0122 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0122 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0122 .mobileMenu nav a{padding:10px 8px}
.zp0122 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0122:has(.navRail)>.hero,.zp0122:has(.navRail)>.section,.zp0122:has(.navRail)>.contact,.zp0122:has(.navRail)>.footer{margin-left:0}
.zp0122 .hero,.zp0122 .productHero{grid-template-columns:1fr}
.zp0122 .section,.zp0122 .sectionTitle,.zp0122 .hours,.zp0122 .contact{grid-template-columns:1fr}
.zp0122 .teamGrid{grid-template-columns:1fr 1fr}
.zp0122 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0122 .section{display:block}}
@media(max-width:430px){.zp0122{font-size:16px}
.zp0122 .hero,.zp0122 .section,.zp0122 .contact{padding-left:18px;padding-right:18px}
.zp0122 .serviceGrid,.zp0122 .proof,.zp0122 .teamGrid,.zp0122 .collectionGrid{grid-template-columns:1fr}
.zp0122 h1{font-size:clamp(42px,14vw,70px)}}

.zp0122 .heroActions a,.zp0122 .primary,.zp0122 .ctaBtn,.zp0122 .btnPrimary,.zp0122 .schedule>a,.zp0122 .newsletter>a{transition:all .2s ease}
.zp0122 .heroActions a:hover,.zp0122 .primary:hover,.zp0122 .ctaBtn:hover,.zp0122 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0122 nav a,.zp0122 .nav a,.zp0122 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0122 nav a:hover,.zp0122 .nav a:hover,.zp0122 .footer a:hover{
  text-decoration:underline
}
.zp0122 .serviceGrid article,.zp0122 .projectCard,.zp0122 .teamCard,.zp0122 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0122 .serviceGrid article:hover,.zp0122 .projectCard:hover,.zp0122 .teamCard:hover,.zp0122 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0122 *,.zp0122 *::before,.zp0122 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0122 a,.zp0122 button,.zp0122 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">21</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
