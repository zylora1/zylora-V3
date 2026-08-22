import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0041-physio-dashboard-inspired-marketing", "family": "Dashboard-inspired Marketing", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "fullscreen-menu|poster|schedule-led|services>awards>values>security>availability>proof|hairline|friendly", "industry": "physio", "hero": "poster", "navigation": "fullscreen-menu", "layout": "schedule-led"};

export default function Template0041({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Vale Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const industryLabel = "Physiotherapy studio";
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Stillwater Lead", "role": "Principal / Lead"}, {"name": "Kite Team", "role": "Client experience"}, {"name": "Pavilion Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0041" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0041{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0041 *{box-sizing:border-box}
.zp0041 a{color:inherit;text-decoration:none}
.zp0041 h1,.zp0041 h2,.zp0041 h3,.zp0041 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0041 img{max-width:100%;display:block}
.zp0041 button,.zp0041 a{-webkit-tap-highlight-color:transparent}
.zp0041 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0041 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0041 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0041 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0041 .nav.menu details{position:relative}
.zp0041 .nav.menu details nav{position:absolute;right:0;top:36px;display:grid;background:var(--bg);border:1px solid var(--border);padding:18px;min-width:180px}
.zp0041 .mobileMenu{display:none}
.zp0041 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0041 .eyebrow,.zp0041 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0041 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0041 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0041 .posterHero{display:flex;flex-direction:column;justify-content:space-between;align-items:stretch;background:var(--primary);color:var(--primary-fg)}
.zp0041 .posterHero h1{font-size:clamp(70px,12vw,190px);max-width:none;text-transform:uppercase}
.zp0041 .posterTop,.zp0041 .posterBottom{display:flex;justify-content:space-between;gap:30px}
.zp0041 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0041 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0041 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0041 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0041 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0041 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0041 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0041 .serviceGrid p{color:var(--muted)}
.zp0041 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0041 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0041 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0041 details{border-top:1px solid var(--border);padding:20px 0}
.zp0041 details summary{font-weight:800;cursor:pointer}
.zp0041 details p{color:var(--muted);max-width:70ch}
.zp0041 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0041 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Trebuchet MS, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0041 .awards>div{max-width:800px;margin-left:auto}
.zp0041 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0041 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0041 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0041 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0041 .contact .eyebrow{color:var(--bg)}
.zp0041 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0041 .contactMeta{display:grid;gap:10px}
.zp0041 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-40{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0041 .hero{min-height:auto}
.zp0041 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0041 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0041 .nav nav{display:none}
.zp0041 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0041 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0041 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0041 .mobileMenu nav a{padding:10px 8px}
.zp0041 .hero{grid-template-columns:1fr}
.zp0041 .section,.zp0041 .sectionTitle,.zp0041 .security,.zp0041 .contact{grid-template-columns:1fr}
.zp0041 .section{display:block}}
@media(max-width:430px){.zp0041{font-size:16px}
.zp0041 .hero,.zp0041 .section,.zp0041 .contact{padding-left:18px;padding-right:18px}
.zp0041 .serviceGrid,.zp0041 .proof{grid-template-columns:1fr}
.zp0041 h1{font-size:clamp(42px,14vw,70px)}
.zp0041 .posterHero h1{font-size:clamp(58px,19vw,100px)}}

.zp0041 .heroActions a,.zp0041 .primary,.zp0041 .ctaBtn,.zp0041 .btnPrimary,.zp0041 .schedule>a,.zp0041 .newsletter>a{transition:all .2s ease}
.zp0041 .heroActions a:hover,.zp0041 .primary:hover,.zp0041 .ctaBtn:hover,.zp0041 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0041 nav a,.zp0041 .nav a,.zp0041 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0041 nav a:hover,.zp0041 .nav a:hover,.zp0041 .footer a:hover{
  color:var(--primary)
}
.zp0041 .serviceGrid article,.zp0041 .projectCard,.zp0041 .teamCard,.zp0041 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0041 .serviceGrid article:hover,.zp0041 .projectCard:hover,.zp0041 .teamCard:hover,.zp0041 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0041 *,.zp0041 *::before,.zp0041 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0041 a,.zp0041 button,.zp0041 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav menu"><strong>{businessName}</strong><details><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero posterHero"><div className="posterTop"><span>{industryLabel}</span><span>{businessName}</span></div><h1>{headline}</h1><div className="posterBottom"><p>{description}</p><a href="#contact">Apply now</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dashboard-inspired Marketing / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
