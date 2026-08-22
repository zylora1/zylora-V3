import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0478-saas-gradient-mesh", "family": "Gradient Mesh", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|service-catalogue|projects>services>proof>collection>press|circular|warm-editorial", "industry": "saas", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "service-catalogue"};

export default function Template0478({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem B2B Saas");
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
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["B2B SaaS / Project A", "B2B SaaS / Project B", "B2B SaaS / Project C", "B2B SaaS / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused product that removes repetitive work and makes the next action obvious. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0478" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0478{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0478 *{box-sizing:border-box}
.zp0478 a{color:inherit;text-decoration:none}
.zp0478 h1,.zp0478 h2,.zp0478 h3,.zp0478 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0478 img{max-width:100%;display:block}
.zp0478 button,.zp0478 a{-webkit-tap-highlight-color:transparent}
.zp0478 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0478 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0478 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0478 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0478 .nav.cluster{align-items:flex-end}
.zp0478 .mobileMenu{display:none}
.zp0478 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0478 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0478 .eyebrow,.zp0478 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0478 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0478 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0478 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0478 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0478 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0478 .visual,.zp0478 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0478 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0478 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0478 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0478 .heroPhoto{object-fit:cover}
.zp0478 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0478 .circleHero{grid-template-columns:1fr 1fr}
.zp0478 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0478 .circleFrame>*{height:100%;border-radius:50%}
.zp0478 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0478 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0478 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0478 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0478 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0478 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0478 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0478 .serviceGrid p{color:var(--muted)}
.zp0478 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0478 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0478 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0478 details{border-top:1px solid var(--border);padding:20px 0}
.zp0478 details summary{font-weight:800;cursor:pointer}
.zp0478 details p{color:var(--muted);max-width:70ch}
.zp0478 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0478 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0478 .projects article:nth-child(2){transform:translateY(32px)}
.zp0478 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0478 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0478 .p1,.zp0478 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0478 .awards>div{max-width:800px;margin-left:auto}
.zp0478 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0478 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0478 .contact .eyebrow{color:var(--bg)}
.zp0478 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0478 .contactMeta{display:grid;gap:10px}
.zp0478 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0478{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0478 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0478 .heroCopy{animation:enter-477 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-477{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0478 .hero{min-height:auto}
.zp0478 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0478 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0478 .nav nav{display:none}
.zp0478 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0478 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0478 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0478 .mobileMenu nav a{padding:10px 8px}
.zp0478 .hero,.zp0478 .circleHero{grid-template-columns:1fr}
.zp0478 .section,.zp0478 .sectionTitle,.zp0478 .contact{grid-template-columns:1fr}
.zp0478 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0478 .projects .projectGrid{grid-template-columns:1fr}
.zp0478 .projects article:nth-child(2){transform:none}
.zp0478 .section{display:block}}
@media(max-width:430px){.zp0478{font-size:16px}
.zp0478 .hero,.zp0478 .section,.zp0478 .contact{padding-left:18px;padding-right:18px}
.zp0478 .serviceGrid,.zp0478 .proof,.zp0478 .collectionGrid{grid-template-columns:1fr}
.zp0478 h1{font-size:clamp(42px,14vw,70px)}}

.zp0478 .heroActions a,.zp0478 .primary,.zp0478 .ctaBtn,.zp0478 .btnPrimary,.zp0478 .schedule>a,.zp0478 .newsletter>a{transition:all .2s ease}
.zp0478 .heroActions a:hover,.zp0478 .primary:hover,.zp0478 .ctaBtn:hover,.zp0478 .btnPrimary:hover{
  opacity:.9;box-shadow:0 4px 16px rgba(0,0,0,.2)
}
.zp0478 nav a,.zp0478 .nav a,.zp0478 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0478 nav a:hover,.zp0478 .nav a:hover,.zp0478 .footer a:hover{
  color:var(--primary)
}
.zp0478 .serviceGrid article,.zp0478 .projectCard,.zp0478 .teamCard,.zp0478 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0478 .serviceGrid article:hover,.zp0478 .projectCard:hover,.zp0478 .teamCard:hover,.zp0478 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0478 *,.zp0478 *::before,.zp0478 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0478 a,.zp0478 button,.zp0478 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">77</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Gradient Mesh / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
