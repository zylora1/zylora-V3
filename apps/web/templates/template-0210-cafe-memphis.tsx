import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0210-cafe-memphis", "family": "Memphis", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|portfolio-sequence|schedule>services>integrations>comparison>proof>programmes>case-study|borderless|utility", "industry": "cafe", "hero": "gallery-wall", "navigation": "tabbed", "layout": "portfolio-sequence"};

export default function Template0210({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Cafe");
  const headline = String(content.headline || "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Espresso bar", "Breakfast", "Lunch", "House baking", "Catering"];
  const industryLabel = "Cafe";
  const serviceNotes = ["Single-origin espresso and filter programme sourced from farms we've visited.", "Pastries baked in-house each morning — what's there is what we made that day.", "Laptop-friendly with fast wifi and power at every seat.", "Outdoor terrace open from April through October, weather-permitting.", "Weekend brunch until 2pm with seasonal specials not on the regular menu."];
  const proofPoints = ["Specialty coffee certified", "In-house bakery", "Dog friendly", "Wifi and power included"];
  const testimonial = "I come here three times a week. The coffee is consistent, the staff know my order, and it's the one place I can actually get work done.";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cafe / Project A", "Cafe / Project B", "Cafe / Project C", "Cafe / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A neighbourhood cafe for careful coffee, fresh food, and unhurried mornings. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#dc2f2f";
  return <main className="zp0210" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0210{--bg:#f5f4ef;--fg:#141414;--primary:#dc2f2f;--primary-fg:#ffffff;--secondary:#0b5fff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0210 *{box-sizing:border-box}
.zp0210 a{color:inherit;text-decoration:none}
.zp0210 h1,.zp0210 h2,.zp0210 h3,.zp0210 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0210 img{max-width:100%;display:block}
.zp0210 button,.zp0210 a{-webkit-tap-highlight-color:transparent}
.zp0210 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0210 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0210 .nav strong{font-family:Verdana, sans-serif;font-size:18px}
.zp0210 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0210 .mobileMenu{display:none}
.zp0210 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0210 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0210 .eyebrow,.zp0210 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0210 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0210 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0210 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0210 .heroActions a,.zp0210 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0210 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0210 .wallHero{grid-template-columns:1fr 1fr}
.zp0210 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0210 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0210 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0210 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0210 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0210 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0210 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0210 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0210 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0210 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0210 .serviceGrid p{color:var(--muted)}
.zp0210 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0210 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0210 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0210 details{border-top:1px solid var(--border);padding:20px 0}
.zp0210 details summary{font-weight:800;cursor:pointer}
.zp0210 details p{color:var(--muted);max-width:70ch}
.zp0210 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0210 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0210 .projects article:nth-child(2){transform:translateY(32px)}
.zp0210 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0210 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0210 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0210 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0210 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0210 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0210 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0210 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0210 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0210 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0210 .contact .eyebrow{color:var(--bg)}
.zp0210 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0210 .contactMeta{display:grid;gap:10px}
.zp0210 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0210 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-11deg)}
.zp0210 .heroCopy{animation:enter-209 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-209{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0210 .hero{min-height:auto}
.zp0210 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0210 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0210 .nav nav{display:none}
.zp0210 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0210 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0210 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0210 .mobileMenu nav a{padding:10px 8px}
.zp0210 .hero,.zp0210 .wallHero{grid-template-columns:1fr}
.zp0210 .section,.zp0210 .sectionTitle,.zp0210 .contact{grid-template-columns:1fr}
.zp0210 .projects .projectGrid{grid-template-columns:1fr}
.zp0210 .projects article:nth-child(2){transform:none}
.zp0210 .section{display:block}}
@media(max-width:430px){.zp0210{font-size:16px}
.zp0210 .hero,.zp0210 .section,.zp0210 .contact{padding-left:18px;padding-right:18px}
.zp0210 .serviceGrid,.zp0210 .proof,.zp0210 .programmes>div:last-child,.zp0210 .compareGrid{grid-template-columns:1fr}
.zp0210 h1{font-size:clamp(42px,14vw,70px)}}

.zp0210 .heroActions a,.zp0210 .primary,.zp0210 .ctaBtn,.zp0210 .btnPrimary,.zp0210 .schedule>a,.zp0210 .newsletter>a{transition:all .2s ease}
.zp0210 .heroActions a:hover,.zp0210 .primary:hover,.zp0210 .ctaBtn:hover,.zp0210 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0210 nav a,.zp0210 .nav a,.zp0210 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0210 nav a:hover,.zp0210 .nav a:hover,.zp0210 .footer a:hover{
  color:var(--primary)
}
.zp0210 .serviceGrid article,.zp0210 .projectCard,.zp0210 .teamCard,.zp0210 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0210 .serviceGrid article:hover,.zp0210 .projectCard:hover,.zp0210 .teamCard:hover,.zp0210 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0210 *,.zp0210 *::before,.zp0210 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0210 a,.zp0210 button,.zp0210 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
