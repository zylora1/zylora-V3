import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0470-saas-friendly-local-business", "family": "Friendly Local Business", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|timeline-hero|full-bleed-chapters|destinations>story>proof>services>gallery>credentials|pill-controls|ceremonial", "industry": "saas", "hero": "timeline-hero", "navigation": "mega-utility", "layout": "full-bleed-chapters"};

export default function Template0470({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Mosaic B2B Saas");
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
  const storyQuote = "\u201cA focused product that removes repetitive work and makes the next action obvious.\u201d";
  const storyBody = "Mosaic B2B Saas is presented as a real working b2b saas, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Setup took 40 minutes. We replaced three separate tools and the team actually uses it — adoption was near-instant.";
  const team = [{"name": "Foundry Lead", "role": "Principal / Lead"}, {"name": "Rook Team", "role": "Client experience"}, {"name": "Northline Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0470" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0470{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0470 *{box-sizing:border-box}
.zp0470 a{color:inherit;text-decoration:none}
.zp0470 h1,.zp0470 h2,.zp0470 h3,.zp0470 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0470 img{max-width:100%;display:block}
.zp0470 button,.zp0470 a{-webkit-tap-highlight-color:transparent}
.zp0470 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0470 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0470 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0470 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0470 .mobileMenu{display:none}
.zp0470 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0470 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0470 .eyebrow,.zp0470 .sectionTitle>span,.zp0470 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0470 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0470 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0470 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0470 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0470 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0470 .timelineHero{grid-template-columns:.4fr 1.6fr}
.zp0470 .timelineLine{display:flex;flex-direction:column;justify-content:space-between;height:60vh;border-left:2px solid var(--primary);padding-left:18px}
.zp0470 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0470 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0470 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0470 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0470 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0470 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0470 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0470 .serviceGrid p{color:var(--muted)}
.zp0470 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0470 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0470 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0470 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0470 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0470 .story p{color:var(--muted)}
.zp0470 details{border-top:1px solid var(--border);padding:20px 0}
.zp0470 details summary{font-weight:800;cursor:pointer}
.zp0470 details p{color:var(--muted);max-width:70ch}
.zp0470 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0470 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0470 .galleryGrid>*:first-child{grid-row:1/3}
.zp0470 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0470 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0470 .g2,.zp0470 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0470 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0470 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0470 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0470 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0470 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0470 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0470 .contact .eyebrow{color:var(--bg)}
.zp0470 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0470 .contactMeta{display:grid;gap:10px}
.zp0470 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0470 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0470 .heroCopy{animation:enter-469 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-469{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0470 .hero{min-height:auto}
.zp0470 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0470 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0470 .nav nav{display:none}
.zp0470 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0470 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0470 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0470 .mobileMenu nav a{padding:10px 8px}
.zp0470 .hero,.zp0470 .timelineHero{grid-template-columns:1fr}
.zp0470 .section,.zp0470 .sectionTitle,.zp0470 .story,.zp0470 .contact{grid-template-columns:1fr}
.zp0470 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0470 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0470 .section{display:block}}
@media(max-width:430px){.zp0470{font-size:16px}
.zp0470 .hero,.zp0470 .section,.zp0470 .contact{padding-left:18px;padding-right:18px}
.zp0470 .serviceGrid,.zp0470 .proof,.zp0470 .destinations>div:last-child{grid-template-columns:1fr}
.zp0470 h1{font-size:clamp(42px,14vw,70px)}
.zp0470 .galleryGrid{grid-template-columns:1fr}
.zp0470 .galleryGrid>*:first-child{grid-column:auto}}

.zp0470 .heroActions a,.zp0470 .primary,.zp0470 .ctaBtn,.zp0470 .btnPrimary,.zp0470 .schedule>a,.zp0470 .newsletter>a{transition:all .2s ease}
.zp0470 .heroActions a:hover,.zp0470 .primary:hover,.zp0470 .ctaBtn:hover,.zp0470 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0470 nav a,.zp0470 .nav a,.zp0470 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0470 nav a:hover,.zp0470 .nav a:hover,.zp0470 .footer a:hover{
  color:var(--primary)
}
.zp0470 .serviceGrid article,.zp0470 .projectCard,.zp0470 .teamCard,.zp0470 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0470 .serviceGrid article:hover,.zp0470 .projectCard:hover,.zp0470 .teamCard:hover,.zp0470 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0470 *,.zp0470 *::before,.zp0470 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0470 a,.zp0470 button,.zp0470 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero timelineHero"><div className="timelineLine"><span>Start</span><span>Today</span><span>Next</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Friendly Local Business / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
