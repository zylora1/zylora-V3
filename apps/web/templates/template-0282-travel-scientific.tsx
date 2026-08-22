import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0282-travel-scientific", "family": "Scientific", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|portfolio-sequence|services>integrations>testimonial>faq>pricing>proof>press|paper-sheet|utility", "industry": "travel", "hero": "product-demo", "navigation": "left-sidebar", "layout": "portfolio-sequence"};

export default function Template0282({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Travel Studio");
  const headline = String(content.headline || "Trips designed around how you actually want to spend your days.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Tailored itineraries", "Honeymoons", "Family travel", "Group journeys", "Concierge support"];
  const industryLabel = "Travel studio";
  const serviceNotes = ["Curated itineraries designed by specialists who've made every journey themselves.", "Small-group tours: maximum 12 people, so guides can respond to the group.", "Solo traveller programme with built-in social moments and private space.", "Flexibility built into every trip — optional activities, not mandatory schedules.", "24h in-destination support from someone who knows the location, not a call centre."];
  const proofPoints = ["ATOL protected", "Average group: 8 travellers", "5-star guide rating average", "Carbon offset included"];
  const testimonial = "I've done package holidays and I've done this. There's no comparison — every day had something that felt genuinely discovered.";
  const testimonialName = "Clove client";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0282" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0282{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0282 *{box-sizing:border-box}
.zp0282 a{color:inherit;text-decoration:none}
.zp0282 h1,.zp0282 h2,.zp0282 h3,.zp0282 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0282 img{max-width:100%;display:block}
.zp0282 button,.zp0282 a{-webkit-tap-highlight-color:transparent}
.zp0282 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0282 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0282 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0282 .mobileMenu{display:none}
.zp0282:has(.navRail)>.hero,.zp0282:has(.navRail)>.section,.zp0282:has(.navRail)>.contact,.zp0282:has(.navRail)>.footer{margin-left:190px}
.zp0282 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0282 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0282 .eyebrow,.zp0282 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0282 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0282 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0282 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0282 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0282 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0282 .visual,.zp0282 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0282 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0282 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0282 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0282 .heroPhoto{object-fit:cover}
.zp0282 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0282 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0282 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0282 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0282 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0282 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0282 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0282 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0282 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0282 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0282 .serviceGrid p{color:var(--muted)}
.zp0282 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0282 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0282 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0282 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0282 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0282 .testimonial>div{align-self:end}
.zp0282 .testimonial span{display:block;opacity:.7}
.zp0282 .faqList{max-width:900px;margin-left:auto}
.zp0282 details{border-top:1px solid var(--border);padding:20px 0}
.zp0282 details summary{font-weight:800;cursor:pointer}
.zp0282 details p{color:var(--muted);max-width:70ch}
.zp0282 .priceRows{border-top:1px solid var(--border)}
.zp0282 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0282 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0282 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0282 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0282 .awards>div{max-width:800px;margin-left:auto}
.zp0282 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0282 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0282 .contact .eyebrow{color:var(--bg)}
.zp0282 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0282 .contactMeta{display:grid;gap:10px}
.zp0282 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0282 .heroCopy{animation:enter-281 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-281{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0282 .hero{min-height:auto}
.zp0282 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0282 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0282 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0282 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0282 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0282 .mobileMenu nav a{padding:10px 8px}
.zp0282 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0282:has(.navRail)>.hero,.zp0282:has(.navRail)>.section,.zp0282:has(.navRail)>.contact,.zp0282:has(.navRail)>.footer{margin-left:0}
.zp0282 .hero,.zp0282 .productHero{grid-template-columns:1fr}
.zp0282 .section,.zp0282 .sectionTitle,.zp0282 .contact{grid-template-columns:1fr}
.zp0282 .testimonial{grid-template-columns:1fr}
.zp0282 .section{display:block}}
@media(max-width:430px){.zp0282{font-size:16px}
.zp0282 .hero,.zp0282 .section,.zp0282 .contact{padding-left:18px;padding-right:18px}
.zp0282 .serviceGrid,.zp0282 .proof{grid-template-columns:1fr}
.zp0282 h1{font-size:clamp(42px,14vw,70px)}
.zp0282 .priceRows article{grid-template-columns:1fr}}

.zp0282 .heroActions a,.zp0282 .primary,.zp0282 .ctaBtn,.zp0282 .btnPrimary,.zp0282 .schedule>a,.zp0282 .newsletter>a{transition:all .2s ease}
.zp0282 .heroActions a:hover,.zp0282 .primary:hover,.zp0282 .ctaBtn:hover,.zp0282 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0282 nav a,.zp0282 .nav a,.zp0282 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0282 nav a:hover,.zp0282 .nav a:hover,.zp0282 .footer a:hover{
  color:var(--primary)
}
.zp0282 .serviceGrid article,.zp0282 .projectCard,.zp0282 .teamCard,.zp0282 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0282 .serviceGrid article:hover,.zp0282 .projectCard:hover,.zp0282 .teamCard:hover,.zp0282 .bentoCard:hover{
  border-left:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0282 *,.zp0282 *::before,.zp0282 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0282 a,.zp0282 button,.zp0282 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">81</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scientific / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
