import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0192-tutoring-geometric", "family": "Geometric", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|stacked-posters|manifesto>faq>location>services>proof>packages>awards|heavy-frame|terminal", "industry": "tutoring", "hero": "data-led", "navigation": "centered-logo", "layout": "stacked-posters"};

export default function Template0192({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Tutoring Service");
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
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0192" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0192{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0192 *{box-sizing:border-box}
.zp0192 a{color:inherit;text-decoration:none}
.zp0192 h1,.zp0192 h2,.zp0192 h3,.zp0192 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0192 img{max-width:100%;display:block}
.zp0192 button,.zp0192 a{-webkit-tap-highlight-color:transparent}
.zp0192 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0192 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0192 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0192 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0192 .nav.centered strong{order:2;font-size:24px}
.zp0192 .nav.centered nav:first-child{order:1}
.zp0192 .nav.centered nav:last-child{order:3}
.zp0192 .mobileMenu{display:none}
.zp0192 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0192 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0192 .eyebrow,.zp0192 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0192 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0192 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0192 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0192 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0192 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0192 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0192 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0192 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0192 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0192 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0192 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0192 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0192 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0192 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0192 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0192 .serviceGrid p{color:var(--muted)}
.zp0192 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0192 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0192 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0192 .faqList{max-width:900px;margin-left:auto}
.zp0192 details{border-top:1px solid var(--border);padding:20px 0}
.zp0192 details summary{font-weight:800;cursor:pointer}
.zp0192 details p{color:var(--muted);max-width:70ch}
.zp0192 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0192 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0192 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0192 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0192 .awards>div{max-width:800px;margin-left:auto}
.zp0192 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0192 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0192 .packages>.sectionTitle{grid-column:1/-1}
.zp0192 .packages article{padding:24px;border:1px solid var(--border)}
.zp0192 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0192 .contact .eyebrow{color:var(--bg)}
.zp0192 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0192 .contactMeta{display:grid;gap:10px}
.zp0192 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0192 .heroCopy{animation:enter-191 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-191{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0192 .hero{min-height:auto}
.zp0192 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0192 .proof{grid-template-columns:1fr 1fr}
.zp0192 .packages{grid-template-columns:1fr 1fr}
.zp0192 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0192 .nav nav{display:none}
.zp0192 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0192 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0192 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0192 .mobileMenu nav a{padding:10px 8px}
.zp0192 .hero,.zp0192 .dataHero{grid-template-columns:1fr}
.zp0192 .section,.zp0192 .sectionTitle,.zp0192 .location,.zp0192 .contact{grid-template-columns:1fr}
.zp0192 .section{display:block}}
@media(max-width:430px){.zp0192{font-size:16px}
.zp0192 .hero,.zp0192 .section,.zp0192 .contact{padding-left:18px;padding-right:18px}
.zp0192 .serviceGrid,.zp0192 .proof,.zp0192 .packages{grid-template-columns:1fr}
.zp0192 h1{font-size:clamp(42px,14vw,70px)}}

.zp0192 .heroActions a,.zp0192 .primary,.zp0192 .ctaBtn,.zp0192 .btnPrimary,.zp0192 .schedule>a,.zp0192 .newsletter>a{transition:all .2s ease}
.zp0192 .heroActions a:hover,.zp0192 .primary:hover,.zp0192 .ctaBtn:hover,.zp0192 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0192 nav a,.zp0192 .nav a,.zp0192 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0192 nav a:hover,.zp0192 .nav a:hover,.zp0192 .footer a:hover{
  color:var(--primary)
}
.zp0192 .serviceGrid article,.zp0192 .projectCard,.zp0192 .teamCard,.zp0192 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0192 .serviceGrid article:hover,.zp0192 .projectCard:hover,.zp0192 .teamCard:hover,.zp0192 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0192 *,.zp0192 *::before,.zp0192 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0192 a,.zp0192 button,.zp0192 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
