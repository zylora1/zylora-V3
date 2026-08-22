import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0062-veterinary-experimental-typography", "family": "Experimental Typography", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|menu-led|schedule>values>services>proof>integrations>manifesto|circular|ceremonial", "industry": "veterinary", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "menu-led"};

export default function Template0062({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Veterinary Clinic");
  const headline = String(content.headline || "Modern veterinary care that keeps owners informed at every step.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Wellness exams", "Vaccinations", "Dental care", "Diagnostics", "Urgent care"];
  const industryLabel = "Veterinary clinic";
  const serviceNotes = ["Comprehensive wellness exams covering nutrition, behaviour, and preventive care.", "Gentle handling protocols that reduce stress for anxious patients.", "In-house laboratory for fast results — no waiting days for basic bloods.", "Dental health programmes that protect your pet's overall wellbeing.", "End-of-life care provided with dignity and full family support."];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7800";
  return <main className="zp0062" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0062{--bg:#101010;--fg:#f5f5f5;--primary:#ff7800;--primary-fg:#050505;--secondary:#f6d500;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0062 *{box-sizing:border-box}
.zp0062 a{color:inherit;text-decoration:none}
.zp0062 h1,.zp0062 h2,.zp0062 h3,.zp0062 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0062 img{max-width:100%;display:block}
.zp0062 button,.zp0062 a{-webkit-tap-highlight-color:transparent}
.zp0062 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0062 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0062 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0062 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0062 .nav.cluster{align-items:flex-end}
.zp0062 .mobileMenu{display:none}
.zp0062 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0062 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0062 .eyebrow,.zp0062 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0062 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0062 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0062 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0062 .heroActions a,.zp0062 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0062 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0062 .visual,.zp0062 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0062 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0062 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0062 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0062 .heroPhoto{object-fit:cover}
.zp0062 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0062 .circleHero{grid-template-columns:1fr 1fr}
.zp0062 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0062 .circleFrame>*{height:100%;border-radius:50%}
.zp0062 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0062 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0062 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0062 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0062 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0062 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0062 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0062 .serviceGrid p{color:var(--muted)}
.zp0062 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0062 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0062 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0062 details{border-top:1px solid var(--border);padding:20px 0}
.zp0062 details summary{font-weight:800;cursor:pointer}
.zp0062 details p{color:var(--muted);max-width:70ch}
.zp0062 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0062 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0062 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0062 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0062 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Copperplate, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0062 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0062 .contact .eyebrow{color:var(--bg)}
.zp0062 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0062 .contactMeta{display:grid;gap:10px}
.zp0062 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0062 .hero{min-height:auto}
.zp0062 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0062 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0062 .nav nav{display:none}
.zp0062 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0062 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0062 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0062 .mobileMenu nav a{padding:10px 8px}
.zp0062 .hero,.zp0062 .circleHero{grid-template-columns:1fr}
.zp0062 .section,.zp0062 .sectionTitle,.zp0062 .contact{grid-template-columns:1fr}
.zp0062 .section{display:block}}
@media(max-width:430px){.zp0062{font-size:16px}
.zp0062 .hero,.zp0062 .section,.zp0062 .contact{padding-left:18px;padding-right:18px}
.zp0062 .serviceGrid,.zp0062 .proof{grid-template-columns:1fr}
.zp0062 h1{font-size:clamp(42px,14vw,70px)}}

.zp0062 .heroActions a,.zp0062 .primary,.zp0062 .ctaBtn,.zp0062 .btnPrimary,.zp0062 .schedule>a,.zp0062 .newsletter>a{transition:all .2s ease}
.zp0062 .heroActions a:hover,.zp0062 .primary:hover,.zp0062 .ctaBtn:hover,.zp0062 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0062 nav a,.zp0062 .nav a,.zp0062 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0062 nav a:hover,.zp0062 .nav a:hover,.zp0062 .footer a:hover{
  letter-spacing:.12em
}
.zp0062 .serviceGrid article,.zp0062 .projectCard,.zp0062 .teamCard,.zp0062 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0062 .serviceGrid article:hover,.zp0062 .projectCard:hover,.zp0062 .teamCard:hover,.zp0062 .bentoCard:hover{
  transform:skewX(-2deg)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0062 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0062 .sectionTitle,.zp0062 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0062 *,.zp0062 *::before,.zp0062 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0062 a,.zp0062 button,.zp0062 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">61</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Experimental Typography / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
