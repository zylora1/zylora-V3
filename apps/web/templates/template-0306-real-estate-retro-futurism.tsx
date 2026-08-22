import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0306-real-estate-retro-futurism", "family": "Retro Futurism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|modular-12|team>services>research>location>process>awards>proof|borderless|utility", "industry": "real-estate", "hero": "gallery-wall", "navigation": "tabbed", "layout": "modular-12"};

export default function Template0306({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Real Estate Agency");
  const headline = String(content.headline || "Local market knowledge, sharp presentation, and straightforward advice through every move.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Residential sales", "Buyer representation", "Rentals", "Market appraisals", "Relocation"];
  const industryLabel = "Real estate agency";
  const serviceNotes = ["Market appraisal within 48 hours — accurate figures, not inflated ones to win instructions.", "Professional photography, floor plans, and videography included in our standard package.", "Accompanied viewings managed by someone who knows the property, not a junior.", "Negotiation management with weekly updates on where every offer stands.", "Completion support including solicitor liaison, survey coordination, and move-in day contact."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["NAEA Propertymark member", "0% sale fall-through rate", "Average sale: 98.2% of asking", "Fully managed lettings"];
  const testimonial = "They sold our house in 11 days at full asking price. The communication was clear throughout — no chasing required.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Real estate agency / Project A", "Real estate agency / Project B", "Real estate agency / Project C", "Real estate agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Local market knowledge, sharp presentation, and straightforward advice through every move. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e55f4b";
  return <main className="zp0306" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0306{--bg:#eaf4f8;--fg:#0f2b36;--primary:#e55f4b;--primary-fg:#050505;--secondary:#2788a8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0306 *{box-sizing:border-box}
.zp0306 a{color:inherit;text-decoration:none}
.zp0306 h1,.zp0306 h2,.zp0306 h3,.zp0306 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0306 img{max-width:100%;display:block}
.zp0306 button,.zp0306 a{-webkit-tap-highlight-color:transparent}
.zp0306 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0306 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0306 .nav strong{font-family:Verdana, sans-serif;font-size:18px}
.zp0306 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0306 .mobileMenu{display:none}
.zp0306 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0306 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0306 .eyebrow,.zp0306 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0306 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0306 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0306 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0306 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0306 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0306 .wallHero{grid-template-columns:1fr 1fr}
.zp0306 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0306 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0306 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0306 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0306 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0306 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0306 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0306 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0306 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0306 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0306 .serviceGrid p{color:var(--muted)}
.zp0306 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0306 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0306 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0306 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0306 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0306 details{border-top:1px solid var(--border);padding:20px 0}
.zp0306 details summary{font-weight:800;cursor:pointer}
.zp0306 details p{color:var(--muted);max-width:70ch}
.zp0306 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0306 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0306 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Verdana, sans-serif;margin-bottom:18px}
.zp0306 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0306 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0306 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0306 .awards>div{max-width:800px;margin-left:auto}
.zp0306 .awards p,.zp0306 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0306 .researchRows{max-width:900px;margin-left:auto}
.zp0306 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0306 .contact .eyebrow{color:var(--bg)}
.zp0306 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0306 .contactMeta{display:grid;gap:10px}
.zp0306 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0306 .heroCopy{animation:enter-305 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-305{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0306 .hero{min-height:auto}
.zp0306 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0306 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0306 .nav nav{display:none}
.zp0306 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0306 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0306 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0306 .mobileMenu nav a{padding:10px 8px}
.zp0306 .hero,.zp0306 .wallHero{grid-template-columns:1fr}
.zp0306 .section,.zp0306 .sectionTitle,.zp0306 .location,.zp0306 .contact{grid-template-columns:1fr}
.zp0306 .teamGrid{grid-template-columns:1fr 1fr}
.zp0306 .section{display:block}}
@media(max-width:430px){.zp0306{font-size:16px}
.zp0306 .hero,.zp0306 .section,.zp0306 .contact{padding-left:18px;padding-right:18px}
.zp0306 .serviceGrid,.zp0306 .proof,.zp0306 .teamGrid{grid-template-columns:1fr}
.zp0306 h1{font-size:clamp(42px,14vw,70px)}}

.zp0306 .heroActions a,.zp0306 .primary,.zp0306 .ctaBtn,.zp0306 .btnPrimary,.zp0306 .schedule>a,.zp0306 .newsletter>a{transition:all .2s ease}
.zp0306 .heroActions a:hover,.zp0306 .primary:hover,.zp0306 .ctaBtn:hover,.zp0306 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0306 nav a,.zp0306 .nav a,.zp0306 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0306 nav a:hover,.zp0306 .nav a:hover,.zp0306 .footer a:hover{
  color:var(--primary)
}
.zp0306 .serviceGrid article,.zp0306 .projectCard,.zp0306 .teamCard,.zp0306 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0306 .serviceGrid article:hover,.zp0306 .projectCard:hover,.zp0306 .teamCard:hover,.zp0306 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0306 *,.zp0306 *::before,.zp0306 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0306 a,.zp0306 button,.zp0306 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Futurism / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
