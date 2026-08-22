import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0346-interiors-fashion-editorial", "family": "Fashion Editorial", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|comparison-led|faq>packages>values>services>proof|paper-sheet|retro-bookish", "industry": "interiors", "hero": "product-demo", "navigation": "left-sidebar", "layout": "comparison-led"};

export default function Template0346({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Interior Design Studio");
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
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Interior design studio / Project A", "Interior design studio / Project B", "Interior design studio / Project C", "Interior design studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Layered interiors with a clear point of view and rigorous attention to daily use. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0346" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0346{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0346 *{box-sizing:border-box}
.zp0346 a{color:inherit;text-decoration:none}
.zp0346 h1,.zp0346 h2,.zp0346 h3,.zp0346 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0346 img{max-width:100%;display:block}
.zp0346 button,.zp0346 a{-webkit-tap-highlight-color:transparent}
.zp0346 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0346 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0346 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0346 .mobileMenu{display:none}
.zp0346:has(.navRail)>.hero,.zp0346:has(.navRail)>.section,.zp0346:has(.navRail)>.contact,.zp0346:has(.navRail)>.footer{margin-left:190px}
.zp0346 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0346 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0346 .eyebrow,.zp0346 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0346 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0346 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0346 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0346 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0346 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0346 .visual,.zp0346 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0346 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0346 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0346 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0346 .heroPhoto{object-fit:cover}
.zp0346 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0346 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0346 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0346 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0346 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0346 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0346 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0346 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0346 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0346 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0346 .serviceGrid p{color:var(--muted)}
.zp0346 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0346 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0346 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0346 .faqList{max-width:900px;margin-left:auto}
.zp0346 details{border-top:1px solid var(--border);padding:20px 0}
.zp0346 details summary{font-weight:800;cursor:pointer}
.zp0346 details p{color:var(--muted);max-width:70ch}
.zp0346 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Bookman Old Style, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0346 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0346 .packages>.sectionTitle{grid-column:1/-1}
.zp0346 .packages article{padding:24px;border:1px solid var(--border)}
.zp0346 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0346 .contact .eyebrow{color:var(--bg)}
.zp0346 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0346 .contactMeta{display:grid;gap:10px}
.zp0346 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0346 .heroCopy{animation:enter-345 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-345{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0346 .hero{min-height:auto}
.zp0346 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0346 .proof{grid-template-columns:1fr 1fr}
.zp0346 .packages{grid-template-columns:1fr 1fr}
.zp0346 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0346 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0346 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0346 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0346 .mobileMenu nav a{padding:10px 8px}
.zp0346 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0346:has(.navRail)>.hero,.zp0346:has(.navRail)>.section,.zp0346:has(.navRail)>.contact,.zp0346:has(.navRail)>.footer{margin-left:0}
.zp0346 .hero,.zp0346 .productHero{grid-template-columns:1fr}
.zp0346 .section,.zp0346 .sectionTitle,.zp0346 .contact{grid-template-columns:1fr}
.zp0346 .section{display:block}}
@media(max-width:430px){.zp0346{font-size:16px}
.zp0346 .hero,.zp0346 .section,.zp0346 .contact{padding-left:18px;padding-right:18px}
.zp0346 .serviceGrid,.zp0346 .proof,.zp0346 .packages{grid-template-columns:1fr}
.zp0346 h1{font-size:clamp(42px,14vw,70px)}}

.zp0346 .heroActions a,.zp0346 .primary,.zp0346 .ctaBtn,.zp0346 .btnPrimary,.zp0346 .schedule>a,.zp0346 .newsletter>a{transition:all .2s ease}
.zp0346 .heroActions a:hover,.zp0346 .primary:hover,.zp0346 .ctaBtn:hover,.zp0346 .btnPrimary:hover{
  opacity:.8
}
.zp0346 nav a,.zp0346 .nav a,.zp0346 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0346 nav a:hover,.zp0346 .nav a:hover,.zp0346 .footer a:hover{
  color:var(--primary)
}
.zp0346 .serviceGrid article,.zp0346 .projectCard,.zp0346 .teamCard,.zp0346 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0346 .serviceGrid article:hover,.zp0346 .projectCard:hover,.zp0346 .teamCard:hover,.zp0346 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0346 *,.zp0346 *::before,.zp0346 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0346 a,.zp0346 button,.zp0346 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">45</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Fashion Editorial / comparison-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
