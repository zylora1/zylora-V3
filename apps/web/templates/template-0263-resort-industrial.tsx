import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0263-resort-industrial", "family": "Industrial", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|press-led|availability>proof>collection>location>services>faq|asymmetric-radius|clean-humanist", "industry": "resort", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "press-led"};

export default function Template0263({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0263" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0263{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0263 *{box-sizing:border-box}
.zp0263 a{color:inherit;text-decoration:none}
.zp0263 h1,.zp0263 h2,.zp0263 h3,.zp0263 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0263 img{max-width:100%;display:block}
.zp0263 button,.zp0263 a{-webkit-tap-highlight-color:transparent}
.zp0263 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0263 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0263 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0263 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0263 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0263 .nav.index nav{justify-content:flex-end}
.zp0263 .mobileMenu{display:none}
.zp0263 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0263 .eyebrow,.zp0263 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0263 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0263 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0263 .minimalHero{display:block;min-height:74vh}
.zp0263 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0263 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0263 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0263 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0263 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0263 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0263 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0263 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0263 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0263 .serviceGrid p{color:var(--muted)}
.zp0263 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0263 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0263 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0263 .faqList{max-width:900px;margin-left:auto}
.zp0263 details{border-top:1px solid var(--border);padding:20px 0}
.zp0263 details summary{font-weight:800;cursor:pointer}
.zp0263 details p{color:var(--muted);max-width:70ch}
.zp0263 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0263 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0263 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0263 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0263 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0263 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0263 .p1,.zp0263 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0263 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0263 .contact .eyebrow{color:var(--bg)}
.zp0263 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0263 .contactMeta{display:grid;gap:10px}
.zp0263 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-262{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0263 .hero{min-height:auto}
.zp0263 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0263 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0263 .nav nav{display:none}
.zp0263 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0263 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0263 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0263 .mobileMenu nav a{padding:10px 8px}
.zp0263 .hero{grid-template-columns:1fr}
.zp0263 .section,.zp0263 .sectionTitle,.zp0263 .location,.zp0263 .contact{grid-template-columns:1fr}
.zp0263 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0263 .section{display:block}}
@media(max-width:430px){.zp0263{font-size:16px}
.zp0263 .hero,.zp0263 .section,.zp0263 .contact{padding-left:18px;padding-right:18px}
.zp0263 .serviceGrid,.zp0263 .proof,.zp0263 .collectionGrid{grid-template-columns:1fr}
.zp0263 h1{font-size:clamp(42px,14vw,70px)}
.zp0263 .minimalFoot{grid-template-columns:1fr}
.zp0263 .nav.index{grid-template-columns:1fr auto}
.zp0263 .nav.index>span{display:none}}

.zp0263 .heroActions a,.zp0263 .primary,.zp0263 .ctaBtn,.zp0263 .btnPrimary,.zp0263 .schedule>a,.zp0263 .newsletter>a{transition:all .2s ease}
.zp0263 .heroActions a:hover,.zp0263 .primary:hover,.zp0263 .ctaBtn:hover,.zp0263 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0263 nav a,.zp0263 .nav a,.zp0263 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0263 nav a:hover,.zp0263 .nav a:hover,.zp0263 .footer a:hover{
  color:var(--primary)
}
.zp0263 .serviceGrid article,.zp0263 .projectCard,.zp0263 .teamCard,.zp0263 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0263 .serviceGrid article:hover,.zp0263 .projectCard:hover,.zp0263 .teamCard:hover,.zp0263 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0263 *,.zp0263 *::before,.zp0263 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0263 a,.zp0263 button,.zp0263 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Check availability</a></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
