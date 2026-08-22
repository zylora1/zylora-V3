import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0444-consulting-surrealism", "family": "Surrealism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|stacked-posters|faq>metrics>projects>services>proof>availability>programmes|notched|literary", "industry": "consulting", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "stacked-posters"};

export default function Template0444({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Consulting Practice");
  const headline = String(content.headline || "Senior-level thinking paired with practical implementation and measurable outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strategy", "Operations", "Transformation", "Research", "Implementation support"];
  const industryLabel = "Consulting practice";
  const serviceNotes = ["Diagnostic phase first — we understand the problem before proposing a solution.", "Delivered by senior practitioners, not junior analysts relabelled as consultants.", "Fixed-scope engagements with clear deliverables and measurable success criteria.", "Knowledge transfer built into every project so client teams can sustain the change.", "Follow-through reviews at 6 and 12 months to confirm outcomes are holding."];
  const proofPoints = ["Average client ROI: 340%", "Senior-only delivery team", "NDA and IP protection", "30-day exit clause"];
  const testimonial = "They spotted a structural issue in our operations that three previous consultancies had missed. Implemented and sustained.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Consulting practice / Project A", "Consulting practice / Project B", "Consulting practice / Project C", "Consulting practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior-level thinking paired with practical implementation and measurable outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0444" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0444{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0444 *{box-sizing:border-box}
.zp0444 a{color:inherit;text-decoration:none}
.zp0444 h1,.zp0444 h2,.zp0444 h3,.zp0444 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0444 img{max-width:100%;display:block}
.zp0444 button,.zp0444 a{-webkit-tap-highlight-color:transparent}
.zp0444 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0444 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0444 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0444 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0444 .mobileMenu{display:none}
.zp0444 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0444 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0444 .eyebrow,.zp0444 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0444 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0444 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0444 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0444 .heroActions a,.zp0444 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0444 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0444 .mapHero{grid-template-columns:1fr 1fr}
.zp0444 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0444 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0444 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0444 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0444 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0444 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0444 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0444 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0444 .serviceGrid p{color:var(--muted)}
.zp0444 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0444 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0444 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0444 .faqList{max-width:900px;margin-left:auto}
.zp0444 details{border-top:1px solid var(--border);padding:20px 0}
.zp0444 details summary{font-weight:800;cursor:pointer}
.zp0444 details p{color:var(--muted);max-width:70ch}
.zp0444 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0444 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0444 .projects article:nth-child(2){transform:translateY(32px)}
.zp0444 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0444 .metrics div{background:var(--bg);padding:30px}
.zp0444 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Garamond, Georgia, serif;color:var(--primary)}
.zp0444 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0444 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0444 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0444 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0444 .contact .eyebrow{color:var(--bg)}
.zp0444 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0444 .contactMeta{display:grid;gap:10px}
.zp0444 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0444 .heroCopy{animation:enter-443 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-443{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0444 .hero{min-height:auto}
.zp0444 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0444 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0444 .nav nav{display:none}
.zp0444 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0444 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0444 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0444 .mobileMenu nav a{padding:10px 8px}
.zp0444 .hero,.zp0444 .mapHero{grid-template-columns:1fr}
.zp0444 .section,.zp0444 .sectionTitle,.zp0444 .contact{grid-template-columns:1fr}
.zp0444 .metrics{grid-template-columns:1fr 1fr}
.zp0444 .projects .projectGrid{grid-template-columns:1fr}
.zp0444 .projects article:nth-child(2){transform:none}
.zp0444 .section{display:block}}
@media(max-width:430px){.zp0444{font-size:16px}
.zp0444 .hero,.zp0444 .section,.zp0444 .contact{padding-left:18px;padding-right:18px}
.zp0444 .serviceGrid,.zp0444 .proof,.zp0444 .metrics,.zp0444 .programmes>div:last-child{grid-template-columns:1fr}
.zp0444 h1{font-size:clamp(42px,14vw,70px)}}

.zp0444 .heroActions a,.zp0444 .primary,.zp0444 .ctaBtn,.zp0444 .btnPrimary,.zp0444 .schedule>a,.zp0444 .newsletter>a{transition:all .2s ease}
.zp0444 .heroActions a:hover,.zp0444 .primary:hover,.zp0444 .ctaBtn:hover,.zp0444 .btnPrimary:hover{
  transform:skewX(-3deg) scale(1.03)
}
.zp0444 nav a,.zp0444 .nav a,.zp0444 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0444 nav a:hover,.zp0444 .nav a:hover,.zp0444 .footer a:hover{
  color:var(--primary);text-decoration:underline
}
.zp0444 .serviceGrid article,.zp0444 .projectCard,.zp0444 .teamCard,.zp0444 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0444 .serviceGrid article:hover,.zp0444 .projectCard:hover,.zp0444 .teamCard:hover,.zp0444 .bentoCard:hover{
  transform:rotate(-2deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0444 *,.zp0444 *::before,.zp0444 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0444 a,.zp0444 button,.zp0444 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Surrealism / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
