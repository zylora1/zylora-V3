import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0188-tutoring-premium-corporate", "family": "Premium Corporate", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|dashboard-story|security>story>proof>projects>services>features|notched|product-ui", "industry": "tutoring", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "dashboard-story"};

export default function Template0188({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Tutoring Service");
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
  const storyQuote = "\u201cOne-to-one learning support shaped around the student, not a fixed worksheet.\u201d";
  const storyBody = "Elm Tutoring Service is presented as a real working tutoring service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0188" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0188{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0188 *{box-sizing:border-box}
.zp0188 a{color:inherit;text-decoration:none}
.zp0188 h1,.zp0188 h2,.zp0188 h3,.zp0188 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0188 img{max-width:100%;display:block}
.zp0188 button,.zp0188 a{-webkit-tap-highlight-color:transparent}
.zp0188 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0188 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0188 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0188 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0188 .mobileMenu{display:none}
.zp0188 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0188 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0188 .eyebrow,.zp0188 .sectionTitle>span,.zp0188 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0188 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0188 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0188 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0188 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0188 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0188 .mapHero{grid-template-columns:1fr 1fr}
.zp0188 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0188 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0188 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0188 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0188 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0188 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0188 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0188 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0188 .serviceGrid p{color:var(--muted)}
.zp0188 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0188 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0188 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0188 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0188 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0188 .story p{color:var(--muted)}
.zp0188 details{border-top:1px solid var(--border);padding:20px 0}
.zp0188 details summary{font-weight:800;cursor:pointer}
.zp0188 details p{color:var(--muted);max-width:70ch}
.zp0188 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0188 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0188 .projects article:nth-child(2){transform:translateY(32px)}
.zp0188 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0188 .features ul{list-style:none;margin:0;padding:0}
.zp0188 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0188 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0188 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0188 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0188 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0188 .contact .eyebrow{color:var(--bg)}
.zp0188 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0188 .contactMeta{display:grid;gap:10px}
.zp0188 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0188 .hero{min-height:auto}
.zp0188 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0188 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0188 .nav nav{display:none}
.zp0188 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0188 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0188 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0188 .mobileMenu nav a{padding:10px 8px}
.zp0188 .hero,.zp0188 .mapHero{grid-template-columns:1fr}
.zp0188 .section,.zp0188 .sectionTitle,.zp0188 .story,.zp0188 .features,.zp0188 .security,.zp0188 .contact{grid-template-columns:1fr}
.zp0188 .projects .projectGrid{grid-template-columns:1fr}
.zp0188 .projects article:nth-child(2){transform:none}
.zp0188 .section{display:block}}
@media(max-width:430px){.zp0188{font-size:16px}
.zp0188 .hero,.zp0188 .section,.zp0188 .contact{padding-left:18px;padding-right:18px}
.zp0188 .serviceGrid,.zp0188 .proof{grid-template-columns:1fr}
.zp0188 h1{font-size:clamp(42px,14vw,70px)}}

.zp0188 .heroActions a,.zp0188 .primary,.zp0188 .ctaBtn,.zp0188 .btnPrimary,.zp0188 .schedule>a,.zp0188 .newsletter>a{transition:all .2s ease}
.zp0188 .heroActions a:hover,.zp0188 .primary:hover,.zp0188 .ctaBtn:hover,.zp0188 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0188 nav a,.zp0188 .nav a,.zp0188 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0188 nav a:hover,.zp0188 .nav a:hover,.zp0188 .footer a:hover{
  color:var(--primary)
}
.zp0188 .serviceGrid article,.zp0188 .projectCard,.zp0188 .teamCard,.zp0188 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0188 .serviceGrid article:hover,.zp0188 .projectCard:hover,.zp0188 .teamCard:hover,.zp0188 .bentoCard:hover{
  box-shadow:0 8px 24px rgba(0,0,0,.12)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0188 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0188 .sectionTitle,.zp0188 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0188 *,.zp0188 *::before,.zp0188 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0188 a,.zp0188 button,.zp0188 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Premium Corporate / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
