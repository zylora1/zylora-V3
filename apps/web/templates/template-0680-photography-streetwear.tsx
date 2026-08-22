import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0680-photography-streetwear", "family": "Streetwear", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|booking-led|proof>awards>research>services>materials>programmes|micro-radius|newspaper", "industry": "photography", "hero": "monumental-type", "navigation": "corner-dock", "layout": "booking-led"};

export default function Template0680({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Photography Studio");
  const headline = String(content.headline || "Photography with a clear visual language and production that stays calm on set.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Editorial", "Commercial", "Portraits", "Campaigns", "Licensing"];
  const serviceNotes = ["Commercial and editorial commissions with same-day turnaround for press deadlines.", "Natural-light and studio sessions available with full styling coordination.", "Wedding coverage: two photographers, full day, premium album design and print.", "Brand photography packages with art direction, prop sourcing, and retouching.", "Archival printing on fine art paper — limited editions signed and numbered."];
  const proofPoints = ["Published: The Sunday Times, FT Weekend", "35mm and digital capability", "2-week edit turnaround guaranteed", "RAW files included"];
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0680" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0680{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0680 *{box-sizing:border-box}
.zp0680 a{color:inherit;text-decoration:none}
.zp0680 h1,.zp0680 h2,.zp0680 h3,.zp0680 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0680 img{max-width:100%;display:block}
.zp0680 button,.zp0680 a{-webkit-tap-highlight-color:transparent}
.zp0680 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0680 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0680 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0680 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0680 .mobileMenu{display:none}
.zp0680 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0680 .eyebrow,.zp0680 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0680 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0680 .monumentalHero{display:block}
.zp0680 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0680 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0680 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0680 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0680 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0680 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0680 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0680 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0680 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0680 .serviceGrid p{color:var(--muted)}
.zp0680 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0680 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0680 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0680 details{border-top:1px solid var(--border);padding:20px 0}
.zp0680 details summary{font-weight:800;cursor:pointer}
.zp0680 details p{color:var(--muted);max-width:70ch}
.zp0680 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0680 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0680 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0680 .awards>div{max-width:800px;margin-left:auto}
.zp0680 .awards p,.zp0680 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0680 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0680 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0680 .researchRows{max-width:900px;margin-left:auto}
.zp0680 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0680 .contact .eyebrow{color:var(--bg)}
.zp0680 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0680 .contactMeta{display:grid;gap:10px}
.zp0680 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-679{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0680 .hero{min-height:auto}
.zp0680 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0680 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0680 .nav nav{display:none}
.zp0680 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0680 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0680 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0680 .mobileMenu nav a{padding:10px 8px}
.zp0680 .hero{grid-template-columns:1fr}
.zp0680 .section,.zp0680 .sectionTitle,.zp0680 .contact{grid-template-columns:1fr}
.zp0680 .section{display:block}}
@media(max-width:430px){.zp0680{font-size:16px}
.zp0680 .hero,.zp0680 .section,.zp0680 .contact{padding-left:18px;padding-right:18px}
.zp0680 .serviceGrid,.zp0680 .proof,.zp0680 .programmes>div:last-child{grid-template-columns:1fr}
.zp0680 h1{font-size:clamp(42px,14vw,70px)}
.zp0680 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0680 .monumentalBody{grid-template-columns:1fr}}

.zp0680 .heroActions a,.zp0680 .primary,.zp0680 .ctaBtn,.zp0680 .btnPrimary,.zp0680 .schedule>a,.zp0680 .newsletter>a{transition:all .2s ease}
.zp0680 .heroActions a:hover,.zp0680 .primary:hover,.zp0680 .ctaBtn:hover,.zp0680 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:skewX(-2deg)
}
.zp0680 nav a,.zp0680 .nav a,.zp0680 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0680 nav a:hover,.zp0680 .nav a:hover,.zp0680 .footer a:hover{
  color:var(--primary)
}
.zp0680 .serviceGrid article,.zp0680 .projectCard,.zp0680 .teamCard,.zp0680 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0680 .serviceGrid article:hover,.zp0680 .projectCard:hover,.zp0680 .teamCard:hover,.zp0680 .bentoCard:hover{
  transform:skewX(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0680 *,.zp0680 *::before,.zp0680 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0680 a,.zp0680 button,.zp0680 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Schedule a consultation</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Streetwear / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
