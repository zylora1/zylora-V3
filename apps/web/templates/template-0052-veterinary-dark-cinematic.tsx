import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0052-veterinary-dark-cinematic", "family": "Dark Cinematic", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|single-column-longform|research>packages>services>process>proof|cut-corners|sports-editorial", "industry": "veterinary", "hero": "product-led", "navigation": "transparent-overlay", "layout": "single-column-longform"};

export default function Template0052({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Veterinary Clinic");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0052" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0052{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0052 *{box-sizing:border-box}
.zp0052 a{color:inherit;text-decoration:none}
.zp0052 h1,.zp0052 h2,.zp0052 h3,.zp0052 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0052 img{max-width:100%;display:block}
.zp0052 button,.zp0052 a{-webkit-tap-highlight-color:transparent}
.zp0052 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0052 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0052 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0052 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0052 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0052 .mobileMenu{display:none}
.zp0052 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0052 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0052 .eyebrow,.zp0052 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0052 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0052 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0052 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0052 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0052 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0052 .visual,.zp0052 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0052 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0052 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0052 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0052 .heroPhoto{object-fit:cover}
.zp0052 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0052 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0052 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0052 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0052 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0052 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0052 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0052 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0052 .serviceGrid p{color:var(--muted)}
.zp0052 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0052 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0052 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0052 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0052 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0052 details{border-top:1px solid var(--border);padding:20px 0}
.zp0052 details summary{font-weight:800;cursor:pointer}
.zp0052 details p{color:var(--muted);max-width:70ch}
.zp0052 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0052 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0052 .packages>.sectionTitle{grid-column:1/-1}
.zp0052 .packages article{padding:24px;border:1px solid var(--border)}
.zp0052 .researchRows{max-width:900px;margin-left:auto}
.zp0052 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0052 .contact .eyebrow{color:var(--bg)}
.zp0052 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0052 .contactMeta{display:grid;gap:10px}
.zp0052 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0052 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0052 .sectionTitle{display:block}
.zp0052 .heroCopy{animation:enter-51 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-51{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0052 .hero{min-height:auto}
.zp0052 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0052 .proof{grid-template-columns:1fr 1fr}
.zp0052 .packages{grid-template-columns:1fr 1fr}
.zp0052 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0052 .nav nav{display:none}
.zp0052 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0052 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0052 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0052 .mobileMenu nav a{padding:10px 8px}
.zp0052 .hero,.zp0052 .productLedHero{grid-template-columns:1fr}
.zp0052 .section,.zp0052 .sectionTitle,.zp0052 .contact{grid-template-columns:1fr}
.zp0052 .section{display:block}}
@media(max-width:430px){.zp0052{font-size:16px}
.zp0052 .hero,.zp0052 .section,.zp0052 .contact{padding-left:18px;padding-right:18px}
.zp0052 .serviceGrid,.zp0052 .proof,.zp0052 .packages{grid-template-columns:1fr}
.zp0052 h1{font-size:clamp(42px,14vw,70px)}}

.zp0052 .heroActions a,.zp0052 .primary,.zp0052 .ctaBtn,.zp0052 .btnPrimary,.zp0052 .schedule>a,.zp0052 .newsletter>a{transition:all .2s ease}
.zp0052 .heroActions a:hover,.zp0052 .primary:hover,.zp0052 .ctaBtn:hover,.zp0052 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0052 nav a,.zp0052 .nav a,.zp0052 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0052 nav a:hover,.zp0052 .nav a:hover,.zp0052 .footer a:hover{
  opacity:.7
}
.zp0052 .serviceGrid article,.zp0052 .projectCard,.zp0052 .teamCard,.zp0052 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0052 .serviceGrid article:hover,.zp0052 .projectCard:hover,.zp0052 .teamCard:hover,.zp0052 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0052 *,.zp0052 *::before,.zp0052 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0052 a,.zp0052 button,.zp0052 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">51</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dark Cinematic / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
