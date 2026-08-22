import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0186-tutoring-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|product-demo|image-led-chapters|hours>schedule>proof>programmes>community>case-study>services|paper-sheet|utility", "industry": "tutoring", "hero": "product-demo", "navigation": "left-sidebar", "layout": "image-led-chapters"};

export default function Template0186({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kindred Tutoring Service");
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
  const storyBody = "Kindred Tutoring Service is presented as a real working tutoring service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const team = [{"name": "Rook Lead", "role": "Principal / Lead"}, {"name": "Northline Team", "role": "Client experience"}, {"name": "Aster Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0186" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0186{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0186 *{box-sizing:border-box}
.zp0186 a{color:inherit;text-decoration:none}
.zp0186 h1,.zp0186 h2,.zp0186 h3,.zp0186 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0186 img{max-width:100%;display:block}
.zp0186 button,.zp0186 a{-webkit-tap-highlight-color:transparent}
.zp0186 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0186 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0186 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0186 .mobileMenu{display:none}
.zp0186:has(.navRail)>.hero,.zp0186:has(.navRail)>.section,.zp0186:has(.navRail)>.contact,.zp0186:has(.navRail)>.footer{margin-left:190px}
.zp0186 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0186 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0186 .eyebrow,.zp0186 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0186 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0186 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0186 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0186 .heroActions a,.zp0186 .schedule>a,.zp0186 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0186 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0186 .visual,.zp0186 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0186 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0186 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:3px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0186 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0186 .heroPhoto{object-fit:cover}
.zp0186 .productHero{grid-template-columns:0.85fr 1.15fr}
.zp0186 .productFrame{padding:14px;border:var(--line) solid var(--border);border-radius:calc(var(--radius) + 8px);background:var(--surface)}
.zp0186 .productBar{height:24px;border-bottom:1px solid var(--border);margin-bottom:14px}
.zp0186 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0186 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0186 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0186 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0186 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0186 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0186 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0186 .serviceGrid p{color:var(--muted)}
.zp0186 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0186 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0186 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0186 details{border-top:1px solid var(--border);padding:20px 0}
.zp0186 details summary{font-weight:800;cursor:pointer}
.zp0186 details p{color:var(--muted);max-width:70ch}
.zp0186 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0186 .hours dl{margin:0}
.zp0186 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0186 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0186 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0186 .projects article:nth-child(2){transform:translateY(32px)}
.zp0186 .schedule,.zp0186 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0186 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0186 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0186 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0186 .contact .eyebrow{color:var(--bg)}
.zp0186 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0186 .contactMeta{display:grid;gap:10px}
.zp0186 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0186 .heroCopy{animation:enter-185 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-185{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0186 .hero{min-height:auto}
.zp0186 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0186 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0186 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0186 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0186 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0186 .mobileMenu nav a{padding:10px 8px}
.zp0186 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0186:has(.navRail)>.hero,.zp0186:has(.navRail)>.section,.zp0186:has(.navRail)>.contact,.zp0186:has(.navRail)>.footer{margin-left:0}
.zp0186 .hero,.zp0186 .productHero{grid-template-columns:1fr}
.zp0186 .section,.zp0186 .sectionTitle,.zp0186 .hours,.zp0186 .contact{grid-template-columns:1fr}
.zp0186 .projects .projectGrid{grid-template-columns:1fr}
.zp0186 .projects article:nth-child(2){transform:none}
.zp0186 .section{display:block}}
@media(max-width:430px){.zp0186{font-size:16px}
.zp0186 .hero,.zp0186 .section,.zp0186 .contact{padding-left:18px;padding-right:18px}
.zp0186 .serviceGrid,.zp0186 .proof,.zp0186 .programmes>div:last-child{grid-template-columns:1fr}
.zp0186 h1{font-size:clamp(42px,14vw,70px)}}

.zp0186 .heroActions a,.zp0186 .primary,.zp0186 .ctaBtn,.zp0186 .btnPrimary,.zp0186 .schedule>a,.zp0186 .newsletter>a{transition:all .2s ease}
.zp0186 .heroActions a:hover,.zp0186 .primary:hover,.zp0186 .ctaBtn:hover,.zp0186 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0186 nav a,.zp0186 .nav a,.zp0186 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0186 nav a:hover,.zp0186 .nav a:hover,.zp0186 .footer a:hover{
  color:var(--primary)
}
.zp0186 .serviceGrid article,.zp0186 .projectCard,.zp0186 .teamCard,.zp0186 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0186 .serviceGrid article:hover,.zp0186 .projectCard:hover,.zp0186 .teamCard:hover,.zp0186 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0186 *,.zp0186 *::before,.zp0186 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0186 a,.zp0186 button,.zp0186 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div><div className="productFrame"><div className="productBar"/>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">85</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
