import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0030-medical-botanical", "family": "Botanical", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|portfolio-sequence|manifesto>location>materials>process>services>newsletter>proof|circular|neo-grotesk", "industry": "medical", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "portfolio-sequence"};

export default function Template0030({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0030" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0030{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0030 *{box-sizing:border-box}
.zp0030 a{color:inherit;text-decoration:none}
.zp0030 h1,.zp0030 h2,.zp0030 h3,.zp0030 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0030 img{max-width:100%;display:block}
.zp0030 button,.zp0030 a{-webkit-tap-highlight-color:transparent}
.zp0030 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0030 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0030 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0030 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0030 .nav.cluster{align-items:flex-end}
.zp0030 .mobileMenu{display:none}
.zp0030 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0030 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0030 .eyebrow,.zp0030 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0030 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0030 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0030 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0030 .heroActions a,.zp0030 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0030 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0030 .visual,.zp0030 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0030 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0030 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0030 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0030 .heroPhoto{object-fit:cover}
.zp0030 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0030 .circleHero{grid-template-columns:1fr 1fr}
.zp0030 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0030 .circleFrame>*{height:100%;border-radius:50%}
.zp0030 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0030 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0030 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0030 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0030 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0030 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0030 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0030 .serviceGrid p{color:var(--muted)}
.zp0030 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0030 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0030 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0030 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0030 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0030 details{border-top:1px solid var(--border);padding:20px 0}
.zp0030 details summary{font-weight:800;cursor:pointer}
.zp0030 details p{color:var(--muted);max-width:70ch}
.zp0030 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0030 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0030 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0030 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0030 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0030 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0030 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0030 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0030 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0030 .contact .eyebrow{color:var(--bg)}
.zp0030 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0030 .contactMeta{display:grid;gap:10px}
.zp0030 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0030 .heroCopy{animation:enter-29 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-29{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0030 .hero{min-height:auto}
.zp0030 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0030 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0030 .nav nav{display:none}
.zp0030 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0030 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0030 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0030 .mobileMenu nav a{padding:10px 8px}
.zp0030 .hero,.zp0030 .circleHero{grid-template-columns:1fr}
.zp0030 .section,.zp0030 .sectionTitle,.zp0030 .location,.zp0030 .contact{grid-template-columns:1fr}
.zp0030 .section{display:block}}
@media(max-width:430px){.zp0030{font-size:16px}
.zp0030 .hero,.zp0030 .section,.zp0030 .contact{padding-left:18px;padding-right:18px}
.zp0030 .serviceGrid,.zp0030 .proof{grid-template-columns:1fr}
.zp0030 h1{font-size:clamp(42px,14vw,70px)}}

.zp0030 .heroActions a,.zp0030 .primary,.zp0030 .ctaBtn,.zp0030 .btnPrimary,.zp0030 .schedule>a,.zp0030 .newsletter>a{transition:all .2s ease}
.zp0030 .heroActions a:hover,.zp0030 .primary:hover,.zp0030 .ctaBtn:hover,.zp0030 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0030 nav a,.zp0030 .nav a,.zp0030 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0030 nav a:hover,.zp0030 .nav a:hover,.zp0030 .footer a:hover{
  color:var(--primary)
}
.zp0030 .serviceGrid article,.zp0030 .projectCard,.zp0030 .teamCard,.zp0030 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0030 .serviceGrid article:hover,.zp0030 .projectCard:hover,.zp0030 .teamCard:hover,.zp0030 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0030 *,.zp0030 *::before,.zp0030 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0030 a,.zp0030 button,.zp0030 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">29</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Botanical / portfolio-sequence</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
