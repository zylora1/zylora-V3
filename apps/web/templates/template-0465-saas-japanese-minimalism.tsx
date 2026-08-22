import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0465-saas-japanese-minimalism", "family": "Japanese Minimalism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|split-scroll|menu>proof>packages>availability>services>testimonial>destinations|square-editorial|slab", "industry": "saas", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "split-scroll"};

export default function Template0465({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide B2B Saas");
  const headline = String(content.headline || "A focused product that removes repetitive work and makes the next action obvious.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Workflow automation", "Analytics", "Integrations", "Team collaboration", "Security"];
  const serviceNotes = ["30-day free trial with full feature access — no credit card required to start.", "API and webhook integrations: connect your existing tools in under an hour.", "Data export in any format, any time — your data is yours, unconditionally.", "Dedicated onboarding specialist for teams over 10 users, included in all plans.", "99.95% uptime SLA with status page and incident communication in real-time."];
  const proofPoints = ["SOC 2 Type II certified", "GDPR compliant", "99.95% uptime SLA", "ISO 27001 certified"];
  const testimonial = "Setup took 40 minutes. We replaced three separate tools and the team actually uses it — adoption was near-instant.";
  const testimonialName = "Mosaic client";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#53e1d9";
  return <main className="zp0465" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0465{--bg:#0e0e16;--fg:#f5f6ff;--primary:#53e1d9;--primary-fg:#050505;--secondary:#ff5a8a;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0465 *{box-sizing:border-box}
.zp0465 a{color:inherit;text-decoration:none}
.zp0465 h1,.zp0465 h2,.zp0465 h3,.zp0465 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0465 img{max-width:100%;display:block}
.zp0465 button,.zp0465 a{-webkit-tap-highlight-color:transparent}
.zp0465 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0465 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0465 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0465 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0465 .mobileMenu{display:none}
.zp0465 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0465 .eyebrow,.zp0465 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0465 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0465 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0465 .visual,.zp0465 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0465 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0465 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0465 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0465 .heroPhoto{object-fit:cover}
.zp0465 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0465 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0465 .coverCaption{align-self:end}
.zp0465 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0465 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0465 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0465 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0465 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0465 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0465 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0465 .serviceGrid p{color:var(--muted)}
.zp0465 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0465 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0465 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0465 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0465 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0465 .testimonial>div{align-self:end}
.zp0465 .testimonial span{display:block;opacity:.7}
.zp0465 details{border-top:1px solid var(--border);padding:20px 0}
.zp0465 details summary{font-weight:800;cursor:pointer}
.zp0465 details p{color:var(--muted);max-width:70ch}
.zp0465 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0465 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0465 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0465 .packages>.sectionTitle{grid-column:1/-1}
.zp0465 .packages article{padding:24px;border:1px solid var(--border)}
.zp0465 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0465 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0465 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0465 .contact .eyebrow{color:var(--bg)}
.zp0465 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0465 .contactMeta{display:grid;gap:10px}
.zp0465 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0465 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0465 .sectionTitle h2{font-weight:400}
@keyframes enter-464{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0465 .hero{min-height:auto}
.zp0465 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0465 .proof{grid-template-columns:1fr 1fr}
.zp0465 .packages{grid-template-columns:1fr 1fr}
.zp0465 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0465 .nav nav{display:none}
.zp0465 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0465 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0465 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0465 .mobileMenu nav a{padding:10px 8px}
.zp0465 .hero,.zp0465 .coverHero{grid-template-columns:1fr}
.zp0465 .section,.zp0465 .sectionTitle,.zp0465 .contact{grid-template-columns:1fr}
.zp0465 .testimonial{grid-template-columns:1fr}
.zp0465 .section{display:block}}
@media(max-width:430px){.zp0465{font-size:16px}
.zp0465 .hero,.zp0465 .section,.zp0465 .contact{padding-left:18px;padding-right:18px}
.zp0465 .serviceGrid,.zp0465 .proof,.zp0465 .packages,.zp0465 .destinations>div:last-child{grid-template-columns:1fr}
.zp0465 h1{font-size:clamp(42px,14vw,70px)}}

.zp0465 .heroActions a,.zp0465 .primary,.zp0465 .ctaBtn,.zp0465 .btnPrimary,.zp0465 .schedule>a,.zp0465 .newsletter>a{transition:all .2s ease}
.zp0465 .heroActions a:hover,.zp0465 .primary:hover,.zp0465 .ctaBtn:hover,.zp0465 .btnPrimary:hover{
  opacity:.75
}
.zp0465 nav a,.zp0465 .nav a,.zp0465 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0465 nav a:hover,.zp0465 .nav a:hover,.zp0465 .footer a:hover{
  opacity:.6
}
.zp0465 .serviceGrid article,.zp0465 .projectCard,.zp0465 .teamCard,.zp0465 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0465 .serviceGrid article:hover,.zp0465 .projectCard:hover,.zp0465 .teamCard:hover,.zp0465 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0465 *,.zp0465 *::before,.zp0465 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0465 a,.zp0465 button,.zp0465 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0465</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">64</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
