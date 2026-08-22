import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0424-insurance-architectural", "family": "Architectural", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|research-led|case-study>newsletter>products>proof>services|micro-radius|brutal-display", "industry": "insurance", "hero": "monumental-type", "navigation": "corner-dock", "layout": "research-led"};

export default function Template0424({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0424" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0424{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0424 *{box-sizing:border-box}
.zp0424 a{color:inherit;text-decoration:none}
.zp0424 h1,.zp0424 h2,.zp0424 h3,.zp0424 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0424 img{max-width:100%;display:block}
.zp0424 button,.zp0424 a{-webkit-tap-highlight-color:transparent}
.zp0424 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0424 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0424 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0424 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0424 .mobileMenu{display:none}
.zp0424 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0424 .eyebrow,.zp0424 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0424 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0424 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0424 .monumentalHero{display:block}
.zp0424 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0424 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0424 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0424 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0424 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0424 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0424 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0424 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0424 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0424 .serviceGrid p{color:var(--muted)}
.zp0424 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0424 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0424 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0424 details{border-top:1px solid var(--border);padding:20px 0}
.zp0424 details summary{font-weight:800;cursor:pointer}
.zp0424 details p{color:var(--muted);max-width:70ch}
.zp0424 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0424 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0424 .projects article:nth-child(2){transform:translateY(32px)}
.zp0424 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0424 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0424 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0424 .p1,.zp0424 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0424 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0424 .contact .eyebrow{color:var(--bg)}
.zp0424 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0424 .contactMeta{display:grid;gap:10px}
.zp0424 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-423{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0424 .hero{min-height:auto}
.zp0424 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0424 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0424 .nav nav{display:none}
.zp0424 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0424 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0424 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0424 .mobileMenu nav a{padding:10px 8px}
.zp0424 .hero{grid-template-columns:1fr}
.zp0424 .section,.zp0424 .sectionTitle,.zp0424 .contact{grid-template-columns:1fr}
.zp0424 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0424 .projects .projectGrid{grid-template-columns:1fr}
.zp0424 .projects article:nth-child(2){transform:none}
.zp0424 .section{display:block}}
@media(max-width:430px){.zp0424{font-size:16px}
.zp0424 .hero,.zp0424 .section,.zp0424 .contact{padding-left:18px;padding-right:18px}
.zp0424 .serviceGrid,.zp0424 .proof,.zp0424 .collectionGrid{grid-template-columns:1fr}
.zp0424 h1{font-size:clamp(42px,14vw,70px)}
.zp0424 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0424 .monumentalBody{grid-template-columns:1fr}}

.zp0424 .heroActions a,.zp0424 .primary,.zp0424 .ctaBtn,.zp0424 .btnPrimary,.zp0424 .schedule>a,.zp0424 .newsletter>a{transition:all .2s ease}
.zp0424 .heroActions a:hover,.zp0424 .primary:hover,.zp0424 .ctaBtn:hover,.zp0424 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0424 nav a,.zp0424 .nav a,.zp0424 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0424 nav a:hover,.zp0424 .nav a:hover,.zp0424 .footer a:hover{
  opacity:.7
}
.zp0424 .serviceGrid article,.zp0424 .projectCard,.zp0424 .teamCard,.zp0424 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0424 .serviceGrid article:hover,.zp0424 .projectCard:hover,.zp0424 .teamCard:hover,.zp0424 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0424 *,.zp0424 *::before,.zp0424 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0424 a,.zp0424 button,.zp0424 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Request a demo</a></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
