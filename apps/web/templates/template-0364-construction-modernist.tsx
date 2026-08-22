import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0364-construction-modernist", "family": "Modernist", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|offset-cards|destinations>proof>timeline>team>services|notched|sports-editorial", "industry": "construction", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "offset-cards"};

export default function Template0364({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Construction Company");
  const headline = String(content.headline || "Reliable construction with visible schedules, accountable budgets, and clean handovers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["General contracting", "Renovations", "Commercial build-outs", "Pre-construction", "Project management"];
  const industryLabel = "Construction company";
  const serviceNotes = ["Design-and-build capability: architecture, engineering, and delivery from one team.", "Fixed-price contracts with a 5% contingency reserve — no hidden variations.", "Health and safety management with a dedicated site manager on every project.", "Structural engineer and quantity surveyor in-house, not outsourced.", "10-year structural guarantee with build defects insurance included."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FMB member", "ISO 9001 certified", "10-year structural guarantee", "£5M public liability"];
  const testimonial = "On budget, four days ahead of programme. The site manager communicated daily — never felt in the dark about anything.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Construction company / Project A", "Construction company / Project B", "Construction company / Project C", "Construction company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable construction with visible schedules, accountable budgets, and clean handovers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0364" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0364{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0364 *{box-sizing:border-box}
.zp0364 a{color:inherit;text-decoration:none}
.zp0364 h1,.zp0364 h2,.zp0364 h3,.zp0364 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0364 img{max-width:100%;display:block}
.zp0364 button,.zp0364 a{-webkit-tap-highlight-color:transparent}
.zp0364 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0364 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0364 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0364 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0364 .mobileMenu{display:none}
.zp0364 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0364 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0364 .eyebrow,.zp0364 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0364 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0364 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0364 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0364 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0364 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0364 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0364 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0364 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0364 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0364 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0364 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0364 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0364 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0364 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0364 .serviceGrid p{color:var(--muted)}
.zp0364 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0364 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0364 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0364 details{border-top:1px solid var(--border);padding:20px 0}
.zp0364 details summary{font-weight:800;cursor:pointer}
.zp0364 details p{color:var(--muted);max-width:70ch}
.zp0364 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0364 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0364 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;margin-bottom:18px}
.zp0364 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0364 .timeline article{padding:20px 0}
.zp0364 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0364 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0364 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0364 .contact .eyebrow{color:var(--bg)}
.zp0364 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0364 .contactMeta{display:grid;gap:10px}
.zp0364 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0364 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0364 .heroCopy{animation:enter-363 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-363{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0364 .hero{min-height:auto}
.zp0364 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0364 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0364 .nav nav{display:none}
.zp0364 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0364 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0364 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0364 .mobileMenu nav a{padding:10px 8px}
.zp0364 .hero,.zp0364 .navLedHero{grid-template-columns:1fr}
.zp0364 .section,.zp0364 .sectionTitle,.zp0364 .contact{grid-template-columns:1fr}
.zp0364 .teamGrid{grid-template-columns:1fr 1fr}
.zp0364 .section{display:block}}
@media(max-width:430px){.zp0364{font-size:16px}
.zp0364 .hero,.zp0364 .section,.zp0364 .contact{padding-left:18px;padding-right:18px}
.zp0364 .serviceGrid,.zp0364 .proof,.zp0364 .teamGrid,.zp0364 .destinations>div:last-child{grid-template-columns:1fr}
.zp0364 h1{font-size:clamp(42px,14vw,70px)}}

.zp0364 .heroActions a,.zp0364 .primary,.zp0364 .ctaBtn,.zp0364 .btnPrimary,.zp0364 .schedule>a,.zp0364 .newsletter>a{transition:all .2s ease}
.zp0364 .heroActions a:hover,.zp0364 .primary:hover,.zp0364 .ctaBtn:hover,.zp0364 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0364 nav a,.zp0364 .nav a,.zp0364 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0364 nav a:hover,.zp0364 .nav a:hover,.zp0364 .footer a:hover{
  color:var(--primary)
}
.zp0364 .serviceGrid article,.zp0364 .projectCard,.zp0364 .teamCard,.zp0364 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0364 .serviceGrid article:hover,.zp0364 .projectCard:hover,.zp0364 .teamCard:hover,.zp0364 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0364 *,.zp0364 *::before,.zp0364 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0364 a,.zp0364 button,.zp0364 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
