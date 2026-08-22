import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0341-interiors-international-typographic-style", "family": "International Typographic Style", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|case-study-led|services>security>location>packages>proof>credentials|ticket-edge|condensed-editorial", "industry": "interiors", "hero": "image-collage", "navigation": "lower-third", "layout": "case-study-led"};

export default function Template0341({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Interior Design Studio");
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
  const proofPoints = ["BIID member", "3D renders included", "Trade pricing access", "Contractor network available"];
  const testimonial = "The 3D renders before we started meant no surprises. The finished room was exactly what we'd imagined — just better executed.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0341" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0341{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0341 *{box-sizing:border-box}
.zp0341 a{color:inherit;text-decoration:none}
.zp0341 h1,.zp0341 h2,.zp0341 h3,.zp0341 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0341 img{max-width:100%;display:block}
.zp0341 button,.zp0341 a{-webkit-tap-highlight-color:transparent}
.zp0341 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0341 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0341 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0341 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0341 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0341 .mobileMenu{display:none}
.zp0341 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0341 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0341 .eyebrow,.zp0341 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0341 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0341 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0341 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0341 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0341 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0341 .visual,.zp0341 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0341 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0341 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0341 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0341 .heroPhoto{object-fit:cover}
.zp0341 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0341 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0341 .collage>*:first-child{grid-row:1/3}
.zp0341 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0341 .miniVisual.alt{background:var(--secondary)}
.zp0341 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0341 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0341 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0341 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0341 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0341 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0341 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0341 .serviceGrid p{color:var(--muted)}
.zp0341 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0341 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0341 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0341 details{border-top:1px solid var(--border);padding:20px 0}
.zp0341 details summary{font-weight:800;cursor:pointer}
.zp0341 details p{color:var(--muted);max-width:70ch}
.zp0341 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0341 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0341 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0341 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0341 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0341 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0341 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0341 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0341 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0341 .packages>.sectionTitle{grid-column:1/-1}
.zp0341 .packages article{padding:24px;border:1px solid var(--border)}
.zp0341 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0341 .contact .eyebrow{color:var(--bg)}
.zp0341 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0341 .contactMeta{display:grid;gap:10px}
.zp0341 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0341 .heroCopy{animation:enter-340 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-340{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0341 .hero{min-height:auto}
.zp0341 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0341 .proof{grid-template-columns:1fr 1fr}
.zp0341 .packages{grid-template-columns:1fr 1fr}
.zp0341 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0341 .nav nav{display:none}
.zp0341 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0341 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0341 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0341 .mobileMenu nav a{padding:10px 8px}
.zp0341 .hero,.zp0341 .collageHero{grid-template-columns:1fr}
.zp0341 .section,.zp0341 .sectionTitle,.zp0341 .location,.zp0341 .security,.zp0341 .contact{grid-template-columns:1fr}
.zp0341 .section{display:block}}
@media(max-width:430px){.zp0341{font-size:16px}
.zp0341 .hero,.zp0341 .section,.zp0341 .contact{padding-left:18px;padding-right:18px}
.zp0341 .serviceGrid,.zp0341 .proof,.zp0341 .packages{grid-template-columns:1fr}
.zp0341 h1{font-size:clamp(42px,14vw,70px)}}

.zp0341 .heroActions a,.zp0341 .primary,.zp0341 .ctaBtn,.zp0341 .btnPrimary,.zp0341 .schedule>a,.zp0341 .newsletter>a{transition:all .2s ease}
.zp0341 .heroActions a:hover,.zp0341 .primary:hover,.zp0341 .ctaBtn:hover,.zp0341 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0341 nav a,.zp0341 .nav a,.zp0341 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0341 nav a:hover,.zp0341 .nav a:hover,.zp0341 .footer a:hover{
  text-decoration:underline
}
.zp0341 .serviceGrid article,.zp0341 .projectCard,.zp0341 .teamCard,.zp0341 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0341 .serviceGrid article:hover,.zp0341 .projectCard:hover,.zp0341 .teamCard:hover,.zp0341 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0341 *,.zp0341 *::before,.zp0341 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0341 a,.zp0341 button,.zp0341 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">40</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>International Typographic Style / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
