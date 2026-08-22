import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0266-resort-neo-futurism", "family": "Neo-futurism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|masonry-story|proof>projects>packages>faq>services>products|paper-sheet|modernist-duo", "industry": "resort", "hero": "service-led", "navigation": "left-sidebar", "layout": "masonry-story"};

export default function Template0266({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Resort");
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
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0266" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0266{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0266 *{box-sizing:border-box}
.zp0266 a{color:inherit;text-decoration:none}
.zp0266 h1,.zp0266 h2,.zp0266 h3,.zp0266 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0266 img{max-width:100%;display:block}
.zp0266 button,.zp0266 a{-webkit-tap-highlight-color:transparent}
.zp0266 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0266 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0266 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0266 .mobileMenu{display:none}
.zp0266:has(.navRail)>.hero,.zp0266:has(.navRail)>.section,.zp0266:has(.navRail)>.contact,.zp0266:has(.navRail)>.footer{margin-left:190px}
.zp0266 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0266 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0266 .eyebrow,.zp0266 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0266 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0266 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0266 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0266 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0266 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0266 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0266 .serviceHeroList{display:grid;gap:4px}
.zp0266 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0266 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0266 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0266 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0266 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0266 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0266 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0266 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0266 .serviceGrid p{color:var(--muted)}
.zp0266 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0266 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0266 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0266 .faqList{max-width:900px;margin-left:auto}
.zp0266 details{border-top:1px solid var(--border);padding:20px 0}
.zp0266 details summary{font-weight:800;cursor:pointer}
.zp0266 details p{color:var(--muted);max-width:70ch}
.zp0266 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0266 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0266 .projects article:nth-child(2){transform:translateY(32px)}
.zp0266 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0266 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0266 .p1,.zp0266 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0266 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0266 .packages>.sectionTitle{grid-column:1/-1}
.zp0266 .packages article{padding:24px;border:1px solid var(--border)}
.zp0266 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0266 .contact .eyebrow{color:var(--bg)}
.zp0266 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0266 .contactMeta{display:grid;gap:10px}
.zp0266 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0266 .heroCopy{animation:enter-265 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-265{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0266 .hero{min-height:auto}
.zp0266 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0266 .proof{grid-template-columns:1fr 1fr}
.zp0266 .packages{grid-template-columns:1fr 1fr}
.zp0266 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0266 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0266 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0266 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0266 .mobileMenu nav a{padding:10px 8px}
.zp0266 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0266:has(.navRail)>.hero,.zp0266:has(.navRail)>.section,.zp0266:has(.navRail)>.contact,.zp0266:has(.navRail)>.footer{margin-left:0}
.zp0266 .hero,.zp0266 .serviceHero{grid-template-columns:1fr}
.zp0266 .section,.zp0266 .sectionTitle,.zp0266 .contact{grid-template-columns:1fr}
.zp0266 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0266 .projects .projectGrid{grid-template-columns:1fr}
.zp0266 .projects article:nth-child(2){transform:none}
.zp0266 .section{display:block}}
@media(max-width:430px){.zp0266{font-size:16px}
.zp0266 .hero,.zp0266 .section,.zp0266 .contact{padding-left:18px;padding-right:18px}
.zp0266 .serviceGrid,.zp0266 .proof,.zp0266 .collectionGrid,.zp0266 .packages{grid-template-columns:1fr}
.zp0266 h1{font-size:clamp(42px,14vw,70px)}}

.zp0266 .heroActions a,.zp0266 .primary,.zp0266 .ctaBtn,.zp0266 .btnPrimary,.zp0266 .schedule>a,.zp0266 .newsletter>a{transition:all .2s ease}
.zp0266 .heroActions a:hover,.zp0266 .primary:hover,.zp0266 .ctaBtn:hover,.zp0266 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0266 nav a,.zp0266 .nav a,.zp0266 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0266 nav a:hover,.zp0266 .nav a:hover,.zp0266 .footer a:hover{
  color:var(--primary)
}
.zp0266 .serviceGrid article,.zp0266 .projectCard,.zp0266 .teamCard,.zp0266 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0266 .serviceGrid article:hover,.zp0266 .projectCard:hover,.zp0266 .teamCard:hover,.zp0266 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0266 *,.zp0266 *::before,.zp0266 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0266 a,.zp0266 button,.zp0266 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-futurism / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
