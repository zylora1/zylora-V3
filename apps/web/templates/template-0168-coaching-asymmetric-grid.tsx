import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0168-coaching-asymmetric-grid", "family": "Asymmetric Grid", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|property-led|materials>newsletter>proof>story>metrics>programmes>services|micro-radius|terminal", "industry": "coaching", "hero": "monumental-type", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0168({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const storyQuote = "\u201cFocused preparation with clear schedules, regular feedback, and measurable progress.\u201d";
  const storyBody = "Common Coaching Centre is presented as a real working coaching centre, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0168" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0168{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0168 *{box-sizing:border-box}
.zp0168 a{color:inherit;text-decoration:none}
.zp0168 h1,.zp0168 h2,.zp0168 h3,.zp0168 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0168 img{max-width:100%;display:block}
.zp0168 button,.zp0168 a{-webkit-tap-highlight-color:transparent}
.zp0168 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0168 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0168 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0168 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0168 .mobileMenu{display:none}
.zp0168 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0168 .eyebrow,.zp0168 .sectionTitle>span,.zp0168 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0168 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0168 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0168 .monumentalHero{display:block}
.zp0168 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0168 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0168 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0168 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0168 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0168 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0168 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0168 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0168 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0168 .serviceGrid p{color:var(--muted)}
.zp0168 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0168 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0168 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0168 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0168 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0168 .story p{color:var(--muted)}
.zp0168 details{border-top:1px solid var(--border);padding:20px 0}
.zp0168 details summary{font-weight:800;cursor:pointer}
.zp0168 details p{color:var(--muted);max-width:70ch}
.zp0168 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0168 .metrics div{background:var(--bg);padding:30px}
.zp0168 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Lucida Console, Monaco, monospace;color:var(--primary)}
.zp0168 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0168 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0168 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0168 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0168 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0168 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0168 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0168 .contact .eyebrow{color:var(--bg)}
.zp0168 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0168 .contactMeta{display:grid;gap:10px}
.zp0168 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-167{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0168 .hero{min-height:auto}
.zp0168 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0168 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0168 .nav nav{display:none}
.zp0168 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0168 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0168 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0168 .mobileMenu nav a{padding:10px 8px}
.zp0168 .hero{grid-template-columns:1fr}
.zp0168 .section,.zp0168 .sectionTitle,.zp0168 .story,.zp0168 .contact{grid-template-columns:1fr}
.zp0168 .metrics{grid-template-columns:1fr 1fr}
.zp0168 .section{display:block}}
@media(max-width:430px){.zp0168{font-size:16px}
.zp0168 .hero,.zp0168 .section,.zp0168 .contact{padding-left:18px;padding-right:18px}
.zp0168 .serviceGrid,.zp0168 .proof,.zp0168 .metrics,.zp0168 .programmes>div:last-child{grid-template-columns:1fr}
.zp0168 h1{font-size:clamp(42px,14vw,70px)}
.zp0168 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0168 .monumentalBody{grid-template-columns:1fr}}

.zp0168 .heroActions a,.zp0168 .primary,.zp0168 .ctaBtn,.zp0168 .btnPrimary,.zp0168 .schedule>a,.zp0168 .newsletter>a{transition:all .2s ease}
.zp0168 .heroActions a:hover,.zp0168 .primary:hover,.zp0168 .ctaBtn:hover,.zp0168 .btnPrimary:hover{
  opacity:.85
}
.zp0168 nav a,.zp0168 .nav a,.zp0168 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0168 nav a:hover,.zp0168 .nav a:hover,.zp0168 .footer a:hover{
  color:var(--primary)
}
.zp0168 .serviceGrid article,.zp0168 .projectCard,.zp0168 .teamCard,.zp0168 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0168 .serviceGrid article:hover,.zp0168 .projectCard:hover,.zp0168 .teamCard:hover,.zp0168 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0168 *,.zp0168 *::before,.zp0168 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0168 a,.zp0168 button,.zp0168 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Start free</a></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Asymmetric Grid / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
