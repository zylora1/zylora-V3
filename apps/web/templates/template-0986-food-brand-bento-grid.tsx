import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0986-food-brand-bento-grid", "family": "Bento Grid", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|masonry-story|faq>proof>press>services>schedule>research|paper-sheet|modernist-duo", "industry": "food-brand", "hero": "product-demo", "navigation": "left-sidebar", "layout": "masonry-story"};

export default function Template0986({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Food Brand");
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
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Food brand / Project A", "Food brand / Project B", "Food brand / Project C", "Food brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A food brand built around distinctive flavour, clear provenance, and easy discovery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0986" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0986{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0986 *{box-sizing:border-box}
.zp0986 a{color:inherit;text-decoration:none}
.zp0986 h1,.zp0986 h2,.zp0986 h3,.zp0986 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0986 img{max-width:100%;display:block}
.zp0986 button,.zp0986 a{-webkit-tap-highlight-color:transparent}
.zp0986 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0986 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0986 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0986 .mobileMenu{display:none}
.zp0986:has(.navRail)>.hero,.zp0986:has(.navRail)>.section,.zp0986:has(.navRail)>.contact,.zp0986:has(.navRail)>.footer{margin-left:190px}
.zp0986 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0986 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0986 .eyebrow,.zp0986 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0986 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0986 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0986 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0986 .heroActions a,.zp0986 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0986 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0986 .visual,.zp0986 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0986 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0986 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0986 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0986 .heroPhoto{object-fit:cover}
.zp0986 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0986 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0986 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0986 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0986 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0986 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0986 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0986 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0986 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0986 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0986 .serviceGrid p{color:var(--muted)}
.zp0986 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0986 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0986 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0986 .faqList{max-width:900px;margin-left:auto}
.zp0986 details{border-top:1px solid var(--border);padding:20px 0}
.zp0986 details summary{font-weight:800;cursor:pointer}
.zp0986 details p{color:var(--muted);max-width:70ch}
.zp0986 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0986 .awards>div{max-width:800px;margin-left:auto}
.zp0986 .awards p,.zp0986 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0986 .researchRows{max-width:900px;margin-left:auto}
.zp0986 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0986 .contact .eyebrow{color:var(--bg)}
.zp0986 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0986 .contactMeta{display:grid;gap:10px}
.zp0986 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0986 .hero{min-height:auto}
.zp0986 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0986 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0986 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0986 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0986 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0986 .mobileMenu nav a{padding:10px 8px}
.zp0986 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0986:has(.navRail)>.hero,.zp0986:has(.navRail)>.section,.zp0986:has(.navRail)>.contact,.zp0986:has(.navRail)>.footer{margin-left:0}
.zp0986 .hero,.zp0986 .productHero{grid-template-columns:1fr}
.zp0986 .section,.zp0986 .sectionTitle,.zp0986 .contact{grid-template-columns:1fr}
.zp0986 .section{display:block}}
@media(max-width:430px){.zp0986{font-size:16px}
.zp0986 .hero,.zp0986 .section,.zp0986 .contact{padding-left:18px;padding-right:18px}
.zp0986 .serviceGrid,.zp0986 .proof{grid-template-columns:1fr}
.zp0986 h1{font-size:clamp(42px,14vw,70px)}}

.zp0986 .heroActions a,.zp0986 .primary,.zp0986 .ctaBtn,.zp0986 .btnPrimary,.zp0986 .schedule>a,.zp0986 .newsletter>a{transition:all .2s ease}
.zp0986 .heroActions a:hover,.zp0986 .primary:hover,.zp0986 .ctaBtn:hover,.zp0986 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0986 nav a,.zp0986 .nav a,.zp0986 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0986 nav a:hover,.zp0986 .nav a:hover,.zp0986 .footer a:hover{
  color:var(--primary)
}
.zp0986 .serviceGrid article,.zp0986 .projectCard,.zp0986 .teamCard,.zp0986 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0986 .serviceGrid article:hover,.zp0986 .projectCard:hover,.zp0986 .teamCard:hover,.zp0986 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0986 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0986 .sectionTitle,.zp0986 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0986 *,.zp0986 *::before,.zp0986 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0986 a,.zp0986 button,.zp0986 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">85</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bento Grid / masonry-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
