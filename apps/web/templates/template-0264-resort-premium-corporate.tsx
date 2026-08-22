import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0264-resort-premium-corporate", "family": "Premium Corporate", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|stacked-posters|process>proof>destinations>services>newsletter>credentials>testimonial|micro-radius|terminal", "industry": "resort", "hero": "monumental-type", "navigation": "corner-dock", "layout": "stacked-posters"};

export default function Template0264({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const testimonialName = "Civic client";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0264" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0264{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0264 *{box-sizing:border-box}
.zp0264 a{color:inherit;text-decoration:none}
.zp0264 h1,.zp0264 h2,.zp0264 h3,.zp0264 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0264 img{max-width:100%;display:block}
.zp0264 button,.zp0264 a{-webkit-tap-highlight-color:transparent}
.zp0264 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0264 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0264 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0264 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0264 .mobileMenu{display:none}
.zp0264 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0264 .eyebrow,.zp0264 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0264 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0264 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0264 .monumentalHero{display:block}
.zp0264 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0264 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0264 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0264 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0264 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0264 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0264 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0264 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0264 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0264 .serviceGrid p{color:var(--muted)}
.zp0264 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0264 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0264 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0264 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0264 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0264 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0264 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0264 .testimonial>div{align-self:end}
.zp0264 .testimonial span{display:block;opacity:.7}
.zp0264 details{border-top:1px solid var(--border);padding:20px 0}
.zp0264 details summary{font-weight:800;cursor:pointer}
.zp0264 details p{color:var(--muted);max-width:70ch}
.zp0264 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0264 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0264 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0264 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0264 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0264 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0264 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0264 .contact .eyebrow{color:var(--bg)}
.zp0264 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0264 .contactMeta{display:grid;gap:10px}
.zp0264 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-263{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0264 .hero{min-height:auto}
.zp0264 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0264 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0264 .nav nav{display:none}
.zp0264 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0264 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0264 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0264 .mobileMenu nav a{padding:10px 8px}
.zp0264 .hero{grid-template-columns:1fr}
.zp0264 .section,.zp0264 .sectionTitle,.zp0264 .contact{grid-template-columns:1fr}
.zp0264 .testimonial{grid-template-columns:1fr}
.zp0264 .section{display:block}}
@media(max-width:430px){.zp0264{font-size:16px}
.zp0264 .hero,.zp0264 .section,.zp0264 .contact{padding-left:18px;padding-right:18px}
.zp0264 .serviceGrid,.zp0264 .proof,.zp0264 .destinations>div:last-child{grid-template-columns:1fr}
.zp0264 h1{font-size:clamp(42px,14vw,70px)}
.zp0264 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0264 .monumentalBody{grid-template-columns:1fr}}

.zp0264 .heroActions a,.zp0264 .primary,.zp0264 .ctaBtn,.zp0264 .btnPrimary,.zp0264 .schedule>a,.zp0264 .newsletter>a{transition:all .2s ease}
.zp0264 .heroActions a:hover,.zp0264 .primary:hover,.zp0264 .ctaBtn:hover,.zp0264 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0264 nav a,.zp0264 .nav a,.zp0264 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0264 nav a:hover,.zp0264 .nav a:hover,.zp0264 .footer a:hover{
  color:var(--primary)
}
.zp0264 .serviceGrid article,.zp0264 .projectCard,.zp0264 .teamCard,.zp0264 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0264 .serviceGrid article:hover,.zp0264 .projectCard:hover,.zp0264 .teamCard:hover,.zp0264 .bentoCard:hover{
  box-shadow:0 8px 24px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0264 *,.zp0264 *::before,.zp0264 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0264 a,.zp0264 button,.zp0264 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Check availability</a></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Premium Corporate / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
