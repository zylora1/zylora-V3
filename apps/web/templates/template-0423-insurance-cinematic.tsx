import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0423-insurance-cinematic", "family": "Cinematic", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|timeline-narrative|manifesto>services>story>process>location>research>proof|asymmetric-radius|geometric", "industry": "insurance", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "timeline-narrative"};

export default function Template0423({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const storyQuote = "\u201cIndependent cover advice with plain-language comparisons and help when claims matter.\u201d";
  const storyBody = "Lumen Insurance Brokerage is presented as a real working insurance brokerage, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0423" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0423{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0423 *{box-sizing:border-box}
.zp0423 a{color:inherit;text-decoration:none}
.zp0423 h1,.zp0423 h2,.zp0423 h3,.zp0423 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0423 img{max-width:100%;display:block}
.zp0423 button,.zp0423 a{-webkit-tap-highlight-color:transparent}
.zp0423 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0423 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0423 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0423 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0423 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0423 .nav.index nav{justify-content:flex-end}
.zp0423 .mobileMenu{display:none}
.zp0423 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0423 .eyebrow,.zp0423 .sectionTitle>span,.zp0423 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0423 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0423 .minimalHero{display:block;min-height:74vh}
.zp0423 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0423 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0423 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0423 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0423 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0423 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0423 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0423 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0423 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0423 .serviceGrid p{color:var(--muted)}
.zp0423 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0423 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0423 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0423 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0423 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0423 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0423 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0423 .story p{color:var(--muted)}
.zp0423 details{border-top:1px solid var(--border);padding:20px 0}
.zp0423 details summary{font-weight:800;cursor:pointer}
.zp0423 details p{color:var(--muted);max-width:70ch}
.zp0423 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0423 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0423 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0423 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0423 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0423 .researchRows{max-width:900px;margin-left:auto}
.zp0423 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0423 .contact .eyebrow{color:var(--bg)}
.zp0423 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0423 .contactMeta{display:grid;gap:10px}
.zp0423 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-422{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0423 .hero{min-height:auto}
.zp0423 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0423 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0423 .nav nav{display:none}
.zp0423 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0423 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0423 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0423 .mobileMenu nav a{padding:10px 8px}
.zp0423 .hero{grid-template-columns:1fr}
.zp0423 .section,.zp0423 .sectionTitle,.zp0423 .story,.zp0423 .location,.zp0423 .contact{grid-template-columns:1fr}
.zp0423 .section{display:block}}
@media(max-width:430px){.zp0423{font-size:16px}
.zp0423 .hero,.zp0423 .section,.zp0423 .contact{padding-left:18px;padding-right:18px}
.zp0423 .serviceGrid,.zp0423 .proof{grid-template-columns:1fr}
.zp0423 h1{font-size:clamp(42px,14vw,70px)}
.zp0423 .minimalFoot{grid-template-columns:1fr}
.zp0423 .nav.index{grid-template-columns:1fr auto}
.zp0423 .nav.index>span{display:none}}

.zp0423 .heroActions a,.zp0423 .primary,.zp0423 .ctaBtn,.zp0423 .btnPrimary,.zp0423 .schedule>a,.zp0423 .newsletter>a{transition:all .2s ease}
.zp0423 .heroActions a:hover,.zp0423 .primary:hover,.zp0423 .ctaBtn:hover,.zp0423 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0423 nav a,.zp0423 .nav a,.zp0423 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0423 nav a:hover,.zp0423 .nav a:hover,.zp0423 .footer a:hover{
  opacity:.7
}
.zp0423 .serviceGrid article,.zp0423 .projectCard,.zp0423 .teamCard,.zp0423 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0423 .serviceGrid article:hover,.zp0423 .projectCard:hover,.zp0423 .teamCard:hover,.zp0423 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0423 *,.zp0423 *::before,.zp0423 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0423 a,.zp0423 button,.zp0423 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Reserve a table</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cinematic / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
