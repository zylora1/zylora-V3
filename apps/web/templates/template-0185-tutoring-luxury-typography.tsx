import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0185-tutoring-luxury-typography", "family": "Luxury Typography", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|archival-grid|schedule-led|services>values>proof>menu>timeline>pricing|hairline|friendly", "industry": "tutoring", "hero": "archival-grid", "navigation": "fullscreen-menu", "layout": "schedule-led"};

export default function Template0185({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foundry Tutoring Service");
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
  const team = [{"name": "Elm Lead", "role": "Principal / Lead"}, {"name": "Marrow Team", "role": "Client experience"}, {"name": "Fieldwork Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0185" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0185{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0185 *{box-sizing:border-box}
.zp0185 a{color:inherit;text-decoration:none}
.zp0185 h1,.zp0185 h2,.zp0185 h3,.zp0185 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0185 img{max-width:100%;display:block}
.zp0185 button,.zp0185 a{-webkit-tap-highlight-color:transparent}
.zp0185 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0185 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0185 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0185 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0185 .nav.menu details{position:relative}
.zp0185 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0185 .mobileMenu{display:none}
.zp0185 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0185 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0185 .eyebrow,.zp0185 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0185 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0185 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0185 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0185 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0185 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0185 .archiveHero{grid-template-columns:.6fr 1.4fr}
.zp0185 .archiveGrid{display:grid;grid-template-columns:1fr 1fr;align-self:stretch}
.zp0185 .archiveGrid span{display:grid;place-items:center;border:1px solid var(--border)}
.zp0185 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0185 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0185 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0185 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0185 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0185 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0185 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0185 .serviceGrid p{color:var(--muted)}
.zp0185 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0185 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0185 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0185 details{border-top:1px solid var(--border);padding:20px 0}
.zp0185 details summary{font-weight:800;cursor:pointer}
.zp0185 details p{color:var(--muted);max-width:70ch}
.zp0185 .priceRows{border-top:1px solid var(--border)}
.zp0185 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0185 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0185 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0185 .timeline article{padding:20px 0}
.zp0185 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Trebuchet MS, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0185 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0185 .contact .eyebrow{color:var(--bg)}
.zp0185 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0185 .contactMeta{display:grid;gap:10px}
.zp0185 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0185 .heroCopy{animation:enter-184 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-184{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0185 .hero{min-height:auto}
.zp0185 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0185 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0185 .nav nav{display:none}
.zp0185 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0185 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0185 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0185 .mobileMenu nav a{padding:10px 8px}
.zp0185 .hero,.zp0185 .archiveHero{grid-template-columns:1fr}
.zp0185 .section,.zp0185 .sectionTitle,.zp0185 .contact{grid-template-columns:1fr}
.zp0185 .section{display:block}}
@media(max-width:430px){.zp0185{font-size:16px}
.zp0185 .hero,.zp0185 .section,.zp0185 .contact{padding-left:18px;padding-right:18px}
.zp0185 .serviceGrid,.zp0185 .proof{grid-template-columns:1fr}
.zp0185 h1{font-size:clamp(42px,14vw,70px)}
.zp0185 .priceRows article{grid-template-columns:1fr}}

.zp0185 .heroActions a,.zp0185 .primary,.zp0185 .ctaBtn,.zp0185 .btnPrimary,.zp0185 .schedule>a,.zp0185 .newsletter>a{transition:all .2s ease}
.zp0185 .heroActions a:hover,.zp0185 .primary:hover,.zp0185 .ctaBtn:hover,.zp0185 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0185 nav a,.zp0185 .nav a,.zp0185 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0185 nav a:hover,.zp0185 .nav a:hover,.zp0185 .footer a:hover{
  opacity:.65
}
.zp0185 .serviceGrid article,.zp0185 .projectCard,.zp0185 .teamCard,.zp0185 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0185 .serviceGrid article:hover,.zp0185 .projectCard:hover,.zp0185 .teamCard:hover,.zp0185 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0185 *,.zp0185 *::before,.zp0185 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0185 a,.zp0185 button,.zp0185 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero archiveHero"><div className="archiveGrid"><span>Archive</span><span>{industryLabel}</span><span>Selected</span><span>2026</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
