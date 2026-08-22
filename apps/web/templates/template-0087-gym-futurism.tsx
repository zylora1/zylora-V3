import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0087-gym-futurism", "family": "Futurism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|product-journey|services>proof>comparison>testimonial>values>process>materials|asymmetric-radius|geometric", "industry": "gym", "hero": "index-led", "navigation": "editorial-index", "layout": "product-journey"};

export default function Template0087({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Training Gym");
  const headline = String(content.headline || "Coaching-led training for people who want structure, progress, and accountability.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strength coaching", "Small-group training", "Open gym", "Mobility sessions", "Performance testing"];
  const industryLabel = "Training gym";
  const serviceNotes = ["Open 24 hours so your schedule drives your training, not ours.", "Strength, cardio, and functional zones across 600+ sq metres of equipment.", "Personal training with coaches who build programmes around your goals, not templates.", "Monthly fitness assessments to track progress and adjust your plan.", "Recovery studio with sauna, ice bath, and stretch space included in membership."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const testimonialName = "Elm client";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp0087" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0087{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0087 *{box-sizing:border-box}
.zp0087 a{color:inherit;text-decoration:none}
.zp0087 h1,.zp0087 h2,.zp0087 h3,.zp0087 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0087 img{max-width:100%;display:block}
.zp0087 button,.zp0087 a{-webkit-tap-highlight-color:transparent}
.zp0087 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0087 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0087 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0087 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0087 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0087 .nav.index nav{justify-content:flex-end}
.zp0087 .mobileMenu{display:none}
.zp0087 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0087 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0087 .eyebrow,.zp0087 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0087 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0087 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0087 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0087 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0087 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0087 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0087 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0087 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0087 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0087 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0087 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0087 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0087 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0087 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0087 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0087 .serviceGrid p{color:var(--muted)}
.zp0087 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0087 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0087 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0087 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0087 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0087 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0087 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0087 .testimonial>div{align-self:end}
.zp0087 .testimonial span{display:block;opacity:.7}
.zp0087 details{border-top:1px solid var(--border);padding:20px 0}
.zp0087 details summary{font-weight:800;cursor:pointer}
.zp0087 details p{color:var(--muted);max-width:70ch}
.zp0087 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0087 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0087 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0087 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0087 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0087 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0087 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0087 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0087 .contact .eyebrow{color:var(--bg)}
.zp0087 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0087 .contactMeta{display:grid;gap:10px}
.zp0087 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0087 .heroCopy{animation:enter-86 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-86{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0087 .hero{min-height:auto}
.zp0087 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0087 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0087 .nav nav{display:none}
.zp0087 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0087 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0087 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0087 .mobileMenu nav a{padding:10px 8px}
.zp0087 .hero,.zp0087 .indexHero{grid-template-columns:1fr}
.zp0087 .section,.zp0087 .sectionTitle,.zp0087 .contact{grid-template-columns:1fr}
.zp0087 .testimonial{grid-template-columns:1fr}
.zp0087 .section{display:block}}
@media(max-width:430px){.zp0087{font-size:16px}
.zp0087 .hero,.zp0087 .section,.zp0087 .contact{padding-left:18px;padding-right:18px}
.zp0087 .serviceGrid,.zp0087 .proof,.zp0087 .compareGrid{grid-template-columns:1fr}
.zp0087 h1{font-size:clamp(42px,14vw,70px)}
.zp0087 .nav.index{grid-template-columns:1fr auto}
.zp0087 .nav.index>span{display:none}}

.zp0087 .heroActions a,.zp0087 .primary,.zp0087 .ctaBtn,.zp0087 .btnPrimary,.zp0087 .schedule>a,.zp0087 .newsletter>a{transition:all .2s ease}
.zp0087 .heroActions a:hover,.zp0087 .primary:hover,.zp0087 .ctaBtn:hover,.zp0087 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0087 nav a,.zp0087 .nav a,.zp0087 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0087 nav a:hover,.zp0087 .nav a:hover,.zp0087 .footer a:hover{
  color:var(--primary)
}
.zp0087 .serviceGrid article,.zp0087 .projectCard,.zp0087 .teamCard,.zp0087 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0087 .serviceGrid article:hover,.zp0087 .projectCard:hover,.zp0087 .teamCard:hover,.zp0087 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0087 *,.zp0087 *::before,.zp0087 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0087 a,.zp0087 button,.zp0087 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Futurism / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
