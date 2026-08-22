import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0183-tutoring-aurora", "family": "Aurora", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|story-first|pricing>faq>proof>metrics>manifesto>services>case-study|asymmetric-radius|geometric", "industry": "tutoring", "hero": "index-led", "navigation": "editorial-index", "layout": "story-first"};

export default function Template0183({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Tutoring Service");
  const headline = String(content.headline || "One-to-one learning support shaped around the student, not a fixed worksheet.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Math tutoring", "Science tutoring", "Language support", "Exam revision", "Study planning"];
  const industryLabel = "Tutoring service";
  const serviceNotes = ["Subject specialists with teaching experience, not just degree holders.", "Diagnostic assessment in the first session to find gaps, not just reinforce strengths.", "Exam technique coaching alongside subject knowledge — both matter equally.", "Flexible booking: weekly recurring, intensive blocks, or exam-season only.", "Parent briefings every six weeks with written progress summaries."];
  const proofPoints = ["QTS and subject specialists", "98% report grade improvement", "DBS enhanced checked", "Flexible scheduling"];
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0183" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0183{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0183 *{box-sizing:border-box}
.zp0183 a{color:inherit;text-decoration:none}
.zp0183 h1,.zp0183 h2,.zp0183 h3,.zp0183 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0183 img{max-width:100%;display:block}
.zp0183 button,.zp0183 a{-webkit-tap-highlight-color:transparent}
.zp0183 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0183 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0183 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0183 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0183 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0183 .nav.index nav{justify-content:flex-end}
.zp0183 .mobileMenu{display:none}
.zp0183 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0183 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0183 .eyebrow,.zp0183 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0183 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0183 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0183 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0183 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0183 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0183 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0183 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0183 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0183 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0183 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0183 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0183 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0183 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0183 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0183 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0183 .serviceGrid p{color:var(--muted)}
.zp0183 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0183 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0183 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0183 .faqList{max-width:900px;margin-left:auto}
.zp0183 details{border-top:1px solid var(--border);padding:20px 0}
.zp0183 details summary{font-weight:800;cursor:pointer}
.zp0183 details p{color:var(--muted);max-width:70ch}
.zp0183 .priceRows{border-top:1px solid var(--border)}
.zp0183 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0183 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0183 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0183 .projects article:nth-child(2){transform:translateY(32px)}
.zp0183 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0183 .metrics div{background:var(--bg);padding:30px}
.zp0183 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Century Gothic, Avenir, sans-serif;color:var(--primary)}
.zp0183 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0183 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0183 .contact .eyebrow{color:var(--bg)}
.zp0183 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0183 .contactMeta{display:grid;gap:10px}
.zp0183 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0183{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0183 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0183 .heroCopy{animation:enter-182 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-182{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0183 .hero{min-height:auto}
.zp0183 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0183 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0183 .nav nav{display:none}
.zp0183 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0183 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0183 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0183 .mobileMenu nav a{padding:10px 8px}
.zp0183 .hero,.zp0183 .indexHero{grid-template-columns:1fr}
.zp0183 .section,.zp0183 .sectionTitle,.zp0183 .contact{grid-template-columns:1fr}
.zp0183 .metrics{grid-template-columns:1fr 1fr}
.zp0183 .projects .projectGrid{grid-template-columns:1fr}
.zp0183 .projects article:nth-child(2){transform:none}
.zp0183 .section{display:block}}
@media(max-width:430px){.zp0183{font-size:16px}
.zp0183 .hero,.zp0183 .section,.zp0183 .contact{padding-left:18px;padding-right:18px}
.zp0183 .serviceGrid,.zp0183 .proof,.zp0183 .metrics{grid-template-columns:1fr}
.zp0183 h1{font-size:clamp(42px,14vw,70px)}
.zp0183 .priceRows article{grid-template-columns:1fr}
.zp0183 .nav.index{grid-template-columns:1fr auto}
.zp0183 .nav.index>span{display:none}}

.zp0183 .heroActions a,.zp0183 .primary,.zp0183 .ctaBtn,.zp0183 .btnPrimary,.zp0183 .schedule>a,.zp0183 .newsletter>a{transition:all .2s ease}
.zp0183 .heroActions a:hover,.zp0183 .primary:hover,.zp0183 .ctaBtn:hover,.zp0183 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0183 nav a,.zp0183 .nav a,.zp0183 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0183 nav a:hover,.zp0183 .nav a:hover,.zp0183 .footer a:hover{
  color:var(--primary)
}
.zp0183 .serviceGrid article,.zp0183 .projectCard,.zp0183 .teamCard,.zp0183 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0183 .serviceGrid article:hover,.zp0183 .projectCard:hover,.zp0183 .teamCard:hover,.zp0183 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0183 *,.zp0183 *::before,.zp0183 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0183 a,.zp0183 button,.zp0183 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
