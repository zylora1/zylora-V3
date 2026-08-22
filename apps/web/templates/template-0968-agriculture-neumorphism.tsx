import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0968-agriculture-neumorphism", "family": "Neumorphism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|booking-led|services>research>programmes>proof>pricing>packages|micro-radius|newspaper", "industry": "agriculture", "hero": "monumental-type", "navigation": "corner-dock", "layout": "booking-led"};

export default function Template0968({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Agricultural Business");
  const headline = String(content.headline || "A working farm connected directly to buyers, partners, seasons, and provenance.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Produce", "Wholesale", "Farm visits", "Seasonal boxes", "Trade supply"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Agricultural business / Project A", "Agricultural business / Project B", "Agricultural business / Project C", "Agricultural business / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A working farm connected directly to buyers, partners, seasons, and provenance. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0968" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0968{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0968 *{box-sizing:border-box}
.zp0968 a{color:inherit;text-decoration:none}
.zp0968 h1,.zp0968 h2,.zp0968 h3,.zp0968 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0968 img{max-width:100%;display:block}
.zp0968 button,.zp0968 a{-webkit-tap-highlight-color:transparent}
.zp0968 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0968 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0968 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0968 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0968 .mobileMenu{display:none}
.zp0968 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0968 .eyebrow,.zp0968 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0968 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0968 .monumentalHero{display:block}
.zp0968 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0968 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0968 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0968 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0968 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0968 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0968 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0968 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0968 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0968 .serviceGrid p{color:var(--muted)}
.zp0968 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0968 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0968 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0968 details{border-top:1px solid var(--border);padding:20px 0}
.zp0968 details summary{font-weight:800;cursor:pointer}
.zp0968 details p{color:var(--muted);max-width:70ch}
.zp0968 .priceRows{border-top:1px solid var(--border)}
.zp0968 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0968 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0968 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0968 .packages>.sectionTitle{grid-column:1/-1}
.zp0968 .packages article{padding:24px;border:1px solid var(--border)}
.zp0968 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0968 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0968 .researchRows{max-width:900px;margin-left:auto}
.zp0968 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0968 .contact .eyebrow{color:var(--bg)}
.zp0968 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0968 .contactMeta{display:grid;gap:10px}
.zp0968 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-967{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0968 .hero{min-height:auto}
.zp0968 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0968 .proof{grid-template-columns:1fr 1fr}
.zp0968 .packages{grid-template-columns:1fr 1fr}
.zp0968 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0968 .nav nav{display:none}
.zp0968 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0968 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0968 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0968 .mobileMenu nav a{padding:10px 8px}
.zp0968 .hero{grid-template-columns:1fr}
.zp0968 .section,.zp0968 .sectionTitle,.zp0968 .contact{grid-template-columns:1fr}
.zp0968 .section{display:block}}
@media(max-width:430px){.zp0968{font-size:16px}
.zp0968 .hero,.zp0968 .section,.zp0968 .contact{padding-left:18px;padding-right:18px}
.zp0968 .serviceGrid,.zp0968 .proof,.zp0968 .packages,.zp0968 .programmes>div:last-child{grid-template-columns:1fr}
.zp0968 h1{font-size:clamp(42px,14vw,70px)}
.zp0968 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0968 .priceRows article{grid-template-columns:1fr}
.zp0968 .monumentalBody{grid-template-columns:1fr}}

.zp0968 .heroActions a,.zp0968 .primary,.zp0968 .ctaBtn,.zp0968 .btnPrimary,.zp0968 .schedule>a,.zp0968 .newsletter>a{transition:all .2s ease}
.zp0968 .heroActions a:hover,.zp0968 .primary:hover,.zp0968 .ctaBtn:hover,.zp0968 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0968 nav a,.zp0968 .nav a,.zp0968 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0968 nav a:hover,.zp0968 .nav a:hover,.zp0968 .footer a:hover{
  color:var(--primary)
}
.zp0968 .serviceGrid article,.zp0968 .projectCard,.zp0968 .teamCard,.zp0968 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0968 .serviceGrid article:hover,.zp0968 .projectCard:hover,.zp0968 .teamCard:hover,.zp0968 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}

.zp0968 .serviceGrid article,.zp0968 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0968 .serviceGrid article:nth-child(even),.zp0968 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0968 .proofLead,.zp0968 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0968 *,.zp0968 *::before,.zp0968 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0968 a,.zp0968 button,.zp0968 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Register now</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
