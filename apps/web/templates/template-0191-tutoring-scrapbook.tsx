import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0191-tutoring-scrapbook", "family": "Scrapbook", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|press-led|integrations>proof>materials>services>community>security|soft-12|clean-humanist", "industry": "tutoring", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "press-led"};

export default function Template0191({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Tutoring Service");
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
  const storyBody = "Clove Tutoring Service is presented as a real working tutoring service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0191" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0191{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0191 *{box-sizing:border-box}
.zp0191 a{color:inherit;text-decoration:none}
.zp0191 h1,.zp0191 h2,.zp0191 h3,.zp0191 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0191 img{max-width:100%;display:block}
.zp0191 button,.zp0191 a{-webkit-tap-highlight-color:transparent}
.zp0191 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0191 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0191 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0191 .mobileMenu{display:none}
.zp0191:has(.navRail)>.hero,.zp0191:has(.navRail)>.section,.zp0191:has(.navRail)>.contact,.zp0191:has(.navRail)>.footer{margin-left:190px}
.zp0191 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0191 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0191 .eyebrow,.zp0191 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0191 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0191 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0191 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0191 .heroActions a,.zp0191 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0191 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0191 .canvasHero{overflow:hidden}
.zp0191 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0191 .canvasGrid i{border-right:1px solid var(--border)}
.zp0191 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0191 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0191 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0191 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0191 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0191 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0191 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0191 .serviceGrid p{color:var(--muted)}
.zp0191 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0191 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0191 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0191 details{border-top:1px solid var(--border);padding:20px 0}
.zp0191 details summary{font-weight:800;cursor:pointer}
.zp0191 details p{color:var(--muted);max-width:70ch}
.zp0191 .integrations,.zp0191 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0191 .integrations>div,.zp0191 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0191 .integrations b,.zp0191 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0191 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0191 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0191 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0191 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0191 .contact .eyebrow{color:var(--bg)}
.zp0191 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0191 .contactMeta{display:grid;gap:10px}
.zp0191 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0191{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0191 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0191 .heroCopy{animation:enter-190 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-190{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0191 .hero{min-height:auto}
.zp0191 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0191 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0191 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0191 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0191 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0191 .mobileMenu nav a{padding:10px 8px}
.zp0191 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0191:has(.navRail)>.hero,.zp0191:has(.navRail)>.section,.zp0191:has(.navRail)>.contact,.zp0191:has(.navRail)>.footer{margin-left:0}
.zp0191 .hero{grid-template-columns:1fr}
.zp0191 .section,.zp0191 .sectionTitle,.zp0191 .security,.zp0191 .contact{grid-template-columns:1fr}
.zp0191 .section{display:block}}
@media(max-width:430px){.zp0191{font-size:16px}
.zp0191 .hero,.zp0191 .section,.zp0191 .contact{padding-left:18px;padding-right:18px}
.zp0191 .serviceGrid,.zp0191 .proof{grid-template-columns:1fr}
.zp0191 h1{font-size:clamp(42px,14vw,70px)}}

.zp0191 .heroActions a,.zp0191 .primary,.zp0191 .ctaBtn,.zp0191 .btnPrimary,.zp0191 .schedule>a,.zp0191 .newsletter>a{transition:all .2s ease}
.zp0191 .heroActions a:hover,.zp0191 .primary:hover,.zp0191 .ctaBtn:hover,.zp0191 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0191 nav a,.zp0191 .nav a,.zp0191 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0191 nav a:hover,.zp0191 .nav a:hover,.zp0191 .footer a:hover{
  color:var(--primary)
}
.zp0191 .serviceGrid article,.zp0191 .projectCard,.zp0191 .teamCard,.zp0191 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0191 .serviceGrid article:hover,.zp0191 .projectCard:hover,.zp0191 .teamCard:hover,.zp0191 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0191 *,.zp0191 *::before,.zp0191 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0191 a,.zp0191 button,.zp0191 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
