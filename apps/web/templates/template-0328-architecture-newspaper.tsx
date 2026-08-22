import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0328-architecture-newspaper", "family": "Newspaper", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|offset-cards|programmes>case-study>community>proof>services|micro-radius|brutal-display", "industry": "architecture", "hero": "monumental-type", "navigation": "corner-dock", "layout": "offset-cards"};

export default function Template0328({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Architecture Studio");
  const headline = String(content.headline || "Architecture shaped by context, material, daylight, and how people actually live.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential design", "Commercial projects", "Planning", "Interiors", "Feasibility studies"];
  const serviceNotes = ["Concept to planning permission service: we handle the technical and navigate the bureaucratic.", "New build and conversion projects for residential, commercial, and mixed-use clients.", "Planning appeal specialists with a strong track record on complex applications.", "BIM-capable studio: full 3D modelling and clash detection before a brick is laid.", "Post-occupancy evaluation included — we track how buildings perform, not just how they look."];
  const proofPoints = ["ARB and RIBA chartered", "RIBA Award winners", "£2M PI insurance", "Sustainable design lead"];
  const storyBody = "Common Architecture Studio is presented as a real working architecture studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our planning application had been refused twice. This team reframed it completely — approved first submission.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Architecture studio / Project A", "Architecture studio / Project B", "Architecture studio / Project C", "Architecture studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Architecture shaped by context, material, daylight, and how people actually live. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0328" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0328{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0328 *{box-sizing:border-box}
.zp0328 a{color:inherit;text-decoration:none}
.zp0328 h1,.zp0328 h2,.zp0328 h3,.zp0328 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0328 img{max-width:100%;display:block}
.zp0328 button,.zp0328 a{-webkit-tap-highlight-color:transparent}
.zp0328 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0328 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0328 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0328 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0328 .mobileMenu{display:none}
.zp0328 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0328 .eyebrow,.zp0328 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0328 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0328 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0328 .monumentalHero{display:block}
.zp0328 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0328 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0328 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0328 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0328 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0328 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0328 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0328 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0328 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0328 .serviceGrid p{color:var(--muted)}
.zp0328 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0328 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0328 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0328 details{border-top:1px solid var(--border);padding:20px 0}
.zp0328 details summary{font-weight:800;cursor:pointer}
.zp0328 details p{color:var(--muted);max-width:70ch}
.zp0328 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0328 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0328 .projects article:nth-child(2){transform:translateY(32px)}
.zp0328 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0328 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0328 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0328 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0328 .contact .eyebrow{color:var(--bg)}
.zp0328 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0328 .contactMeta{display:grid;gap:10px}
.zp0328 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0328 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0328{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0328 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
@media(max-width:1024px){.zp0328 .hero{min-height:auto}
.zp0328 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0328 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0328 .nav nav{display:none}
.zp0328 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0328 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0328 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0328 .mobileMenu nav a{padding:10px 8px}
.zp0328 .hero{grid-template-columns:1fr}
.zp0328 .section,.zp0328 .sectionTitle,.zp0328 .contact{grid-template-columns:1fr}
.zp0328 .projects .projectGrid{grid-template-columns:1fr}
.zp0328 .projects article:nth-child(2){transform:none}
.zp0328 .section{display:block}}
@media(max-width:430px){.zp0328{font-size:16px}
.zp0328 .hero,.zp0328 .section,.zp0328 .contact{padding-left:18px;padding-right:18px}
.zp0328 .serviceGrid,.zp0328 .proof,.zp0328 .programmes>div:last-child{grid-template-columns:1fr}
.zp0328 h1{font-size:clamp(42px,14vw,70px)}
.zp0328 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0328 .monumentalBody{grid-template-columns:1fr}}

.zp0328 .heroActions a,.zp0328 .primary,.zp0328 .ctaBtn,.zp0328 .btnPrimary,.zp0328 .schedule>a,.zp0328 .newsletter>a{transition:all .2s ease}
.zp0328 .heroActions a:hover,.zp0328 .primary:hover,.zp0328 .ctaBtn:hover,.zp0328 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0328 nav a,.zp0328 .nav a,.zp0328 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0328 nav a:hover,.zp0328 .nav a:hover,.zp0328 .footer a:hover{
  text-decoration:underline
}
.zp0328 .serviceGrid article,.zp0328 .projectCard,.zp0328 .teamCard,.zp0328 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0328 .serviceGrid article:hover,.zp0328 .projectCard:hover,.zp0328 .teamCard:hover,.zp0328 .bentoCard:hover{
  border-color:var(--primary)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0328 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0328 .sectionTitle,.zp0328 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0328 *,.zp0328 *::before,.zp0328 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0328 a,.zp0328 button,.zp0328 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Plan your visit</a></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
