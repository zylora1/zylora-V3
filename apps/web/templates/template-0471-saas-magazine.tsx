import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0471-saas-magazine", "family": "Magazine", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|story-first|team>location>packages>materials>services>hours>proof|asymmetric-radius|geometric", "industry": "saas", "hero": "index-led", "navigation": "editorial-index", "layout": "story-first"};

export default function Template0471({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove B2B Saas");
  const headline = String(content.headline || "A focused product that removes repetitive work and makes the next action obvious.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Workflow automation", "Analytics", "Integrations", "Team collaboration", "Security"];
  const industryLabel = "B2B SaaS";
  const serviceNotes = ["30-day free trial with full feature access — no credit card required to start.", "API and webhook integrations: connect your existing tools in under an hour.", "Data export in any format, any time — your data is yours, unconditionally.", "Dedicated onboarding specialist for teams over 10 users, included in all plans.", "99.95% uptime SLA with status page and incident communication in real-time."];
  const proofPoints = ["SOC 2 Type II certified", "GDPR compliant", "99.95% uptime SLA", "ISO 27001 certified"];
  const testimonial = "Setup took 40 minutes. We replaced three separate tools and the team actually uses it — adoption was near-instant.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0471" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0471{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0471 *{box-sizing:border-box}
.zp0471 a{color:inherit;text-decoration:none}
.zp0471 h1,.zp0471 h2,.zp0471 h3,.zp0471 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0471 img{max-width:100%;display:block}
.zp0471 button,.zp0471 a{-webkit-tap-highlight-color:transparent}
.zp0471 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0471 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0471 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0471 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0471 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0471 .nav.index nav{justify-content:flex-end}
.zp0471 .mobileMenu{display:none}
.zp0471 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0471 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0471 .eyebrow,.zp0471 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0471 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0471 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0471 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0471 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0471 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0471 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0471 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0471 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0471 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0471 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0471 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0471 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0471 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0471 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0471 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0471 .serviceGrid p{color:var(--muted)}
.zp0471 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0471 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0471 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0471 details{border-top:1px solid var(--border);padding:20px 0}
.zp0471 details summary{font-weight:800;cursor:pointer}
.zp0471 details p{color:var(--muted);max-width:70ch}
.zp0471 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0471 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0471 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Century Gothic, Avenir, sans-serif;margin-bottom:18px}
.zp0471 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0471 .hours dl{margin:0}
.zp0471 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0471 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0471 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0471 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0471 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0471 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0471 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0471 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0471 .packages>.sectionTitle{grid-column:1/-1}
.zp0471 .packages article{padding:24px;border:1px solid var(--border)}
.zp0471 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0471 .contact .eyebrow{color:var(--bg)}
.zp0471 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0471 .contactMeta{display:grid;gap:10px}
.zp0471 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0471 .heroCopy{animation:enter-470 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-470{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0471 .hero{min-height:auto}
.zp0471 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0471 .proof{grid-template-columns:1fr 1fr}
.zp0471 .packages{grid-template-columns:1fr 1fr}
.zp0471 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0471 .nav nav{display:none}
.zp0471 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0471 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0471 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0471 .mobileMenu nav a{padding:10px 8px}
.zp0471 .hero,.zp0471 .indexHero{grid-template-columns:1fr}
.zp0471 .section,.zp0471 .sectionTitle,.zp0471 .hours,.zp0471 .location,.zp0471 .contact{grid-template-columns:1fr}
.zp0471 .teamGrid{grid-template-columns:1fr 1fr}
.zp0471 .section{display:block}}
@media(max-width:430px){.zp0471{font-size:16px}
.zp0471 .hero,.zp0471 .section,.zp0471 .contact{padding-left:18px;padding-right:18px}
.zp0471 .serviceGrid,.zp0471 .proof,.zp0471 .teamGrid,.zp0471 .packages{grid-template-columns:1fr}
.zp0471 h1{font-size:clamp(42px,14vw,70px)}
.zp0471 .nav.index{grid-template-columns:1fr auto}
.zp0471 .nav.index>span{display:none}}

.zp0471 .heroActions a,.zp0471 .primary,.zp0471 .ctaBtn,.zp0471 .btnPrimary,.zp0471 .schedule>a,.zp0471 .newsletter>a{transition:all .2s ease}
.zp0471 .heroActions a:hover,.zp0471 .primary:hover,.zp0471 .ctaBtn:hover,.zp0471 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0471 nav a,.zp0471 .nav a,.zp0471 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0471 nav a:hover,.zp0471 .nav a:hover,.zp0471 .footer a:hover{
  color:var(--primary)
}
.zp0471 .serviceGrid article,.zp0471 .projectCard,.zp0471 .teamCard,.zp0471 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0471 .serviceGrid article:hover,.zp0471 .projectCard:hover,.zp0471 .teamCard:hover,.zp0471 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0471 *,.zp0471 *::before,.zp0471 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0471 a,.zp0471 button,.zp0471 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Magazine / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
