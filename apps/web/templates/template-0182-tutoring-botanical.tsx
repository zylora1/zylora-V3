import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0182-tutoring-botanical", "family": "Botanical", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|full-bleed-chapters|schedule>services>values>team>proof>security|pill-controls|ceremonial", "industry": "tutoring", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "full-bleed-chapters"};

export default function Template0182({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic Tutoring Service");
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
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0182" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0182{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0182 *{box-sizing:border-box}
.zp0182 a{color:inherit;text-decoration:none}
.zp0182 h1,.zp0182 h2,.zp0182 h3,.zp0182 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0182 img{max-width:100%;display:block}
.zp0182 button,.zp0182 a{-webkit-tap-highlight-color:transparent}
.zp0182 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0182 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0182 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0182 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0182 .mobileMenu{display:none}
.zp0182 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0182 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0182 .eyebrow,.zp0182 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0182 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0182 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0182 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0182 .heroActions a,.zp0182 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0182 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0182 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0182 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0182 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0182 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0182 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0182 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0182 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0182 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0182 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0182 .serviceGrid p{color:var(--muted)}
.zp0182 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0182 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0182 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0182 details{border-top:1px solid var(--border);padding:20px 0}
.zp0182 details summary{font-weight:800;cursor:pointer}
.zp0182 details p{color:var(--muted);max-width:70ch}
.zp0182 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0182 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0182 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Copperplate, Georgia, serif;margin-bottom:18px}
.zp0182 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0182 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Copperplate, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0182 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0182 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0182 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0182 .contact .eyebrow{color:var(--bg)}
.zp0182 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0182 .contactMeta{display:grid;gap:10px}
.zp0182 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0182 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0182 .heroCopy{animation:enter-181 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-181{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0182 .hero{min-height:auto}
.zp0182 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0182 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0182 .nav nav{display:none}
.zp0182 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0182 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0182 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0182 .mobileMenu nav a{padding:10px 8px}
.zp0182 .hero,.zp0182 .timelineHero{grid-template-columns:1fr}
.zp0182 .section,.zp0182 .sectionTitle,.zp0182 .security,.zp0182 .contact{grid-template-columns:1fr}
.zp0182 .teamGrid{grid-template-columns:1fr 1fr}
.zp0182 .section{display:block}}
@media(max-width:430px){.zp0182{font-size:16px}
.zp0182 .hero,.zp0182 .section,.zp0182 .contact{padding-left:18px;padding-right:18px}
.zp0182 .serviceGrid,.zp0182 .proof,.zp0182 .teamGrid{grid-template-columns:1fr}
.zp0182 h1{font-size:clamp(42px,14vw,70px)}}

.zp0182 .heroActions a,.zp0182 .primary,.zp0182 .ctaBtn,.zp0182 .btnPrimary,.zp0182 .schedule>a,.zp0182 .newsletter>a{transition:all .2s ease}
.zp0182 .heroActions a:hover,.zp0182 .primary:hover,.zp0182 .ctaBtn:hover,.zp0182 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0182 nav a,.zp0182 .nav a,.zp0182 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0182 nav a:hover,.zp0182 .nav a:hover,.zp0182 .footer a:hover{
  color:var(--primary)
}
.zp0182 .serviceGrid article,.zp0182 .projectCard,.zp0182 .teamCard,.zp0182 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0182 .serviceGrid article:hover,.zp0182 .projectCard:hover,.zp0182 .teamCard:hover,.zp0182 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0182 *,.zp0182 *::before,.zp0182 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0182 a,.zp0182 button,.zp0182 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
