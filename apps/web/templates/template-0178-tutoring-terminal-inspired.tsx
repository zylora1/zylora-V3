import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0178-tutoring-terminal-inspired", "family": "Terminal-inspired", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|local-service-map|services>faq>schedule>process>proof|borderless|retro-bookish", "industry": "tutoring", "hero": "gallery-wall", "navigation": "tabbed", "layout": "local-service-map"};

export default function Template0178({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Tutoring Service");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["QTS and subject specialists", "98% report grade improvement", "DBS enhanced checked", "Flexible scheduling"];
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0178" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0178{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0178 *{box-sizing:border-box}
.zp0178 a{color:inherit;text-decoration:none}
.zp0178 h1,.zp0178 h2,.zp0178 h3,.zp0178 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0178 img{max-width:100%;display:block}
.zp0178 button,.zp0178 a{-webkit-tap-highlight-color:transparent}
.zp0178 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0178 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0178 .nav strong{font-family:Bookman Old Style, Georgia, serif;font-size:18px}
.zp0178 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0178 .mobileMenu{display:none}
.zp0178 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0178 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0178 .eyebrow,.zp0178 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0178 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0178 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0178 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0178 .heroActions a,.zp0178 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0178 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0178 .wallHero{grid-template-columns:1fr 1fr}
.zp0178 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0178 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0178 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0178 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0178 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0178 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0178 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0178 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0178 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0178 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0178 .serviceGrid p{color:var(--muted)}
.zp0178 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0178 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0178 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0178 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0178 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0178 .faqList{max-width:900px;margin-left:auto}
.zp0178 details{border-top:1px solid var(--border);padding:20px 0}
.zp0178 details summary{font-weight:800;cursor:pointer}
.zp0178 details p{color:var(--muted);max-width:70ch}
.zp0178 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0178 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0178 .contact .eyebrow{color:var(--bg)}
.zp0178 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0178 .contactMeta{display:grid;gap:10px}
.zp0178 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0178{image-rendering:pixelated}
.zp0178 *{border-radius:0!important}
.zp0178 .heroCopy{animation:enter-177 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-177{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0178 .hero{min-height:auto}
.zp0178 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0178 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0178 .nav nav{display:none}
.zp0178 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0178 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0178 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0178 .mobileMenu nav a{padding:10px 8px}
.zp0178 .hero,.zp0178 .wallHero{grid-template-columns:1fr}
.zp0178 .section,.zp0178 .sectionTitle,.zp0178 .contact{grid-template-columns:1fr}
.zp0178 .section{display:block}}
@media(max-width:430px){.zp0178{font-size:16px}
.zp0178 .hero,.zp0178 .section,.zp0178 .contact{padding-left:18px;padding-right:18px}
.zp0178 .serviceGrid,.zp0178 .proof{grid-template-columns:1fr}
.zp0178 h1{font-size:clamp(42px,14vw,70px)}}

.zp0178 .heroActions a,.zp0178 .primary,.zp0178 .ctaBtn,.zp0178 .btnPrimary,.zp0178 .schedule>a,.zp0178 .newsletter>a{transition:all .2s ease}
.zp0178 .heroActions a:hover,.zp0178 .primary:hover,.zp0178 .ctaBtn:hover,.zp0178 .btnPrimary:hover{
  opacity:.85
}
.zp0178 nav a,.zp0178 .nav a,.zp0178 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0178 nav a:hover,.zp0178 .nav a:hover,.zp0178 .footer a:hover{
  color:var(--primary)
}
.zp0178 .serviceGrid article,.zp0178 .projectCard,.zp0178 .teamCard,.zp0178 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0178 .serviceGrid article:hover,.zp0178 .projectCard:hover,.zp0178 .teamCard:hover,.zp0178 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0178 *,.zp0178 *::before,.zp0178 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0178 a,.zp0178 button,.zp0178 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Terminal-inspired / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
