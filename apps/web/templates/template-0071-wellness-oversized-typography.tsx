import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0071-wellness-oversized-typography", "family": "Oversized Typography", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|minimal-statement|asymmetric-5-7|programmes>proof>services>timeline>materials>awards|asymmetric-radius|clean-humanist", "industry": "wellness", "hero": "minimal-statement", "navigation": "editorial-index", "layout": "asymmetric-5-7"};

export default function Template0071({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Lumen Wellness Studio");
  const headline = String(content.headline || "Restorative care with simple booking, transparent options, and a calm experience.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage therapy", "Recovery sessions", "Nutrition consults", "Breathwork", "Wellness memberships"];
  const industryLabel = "Wellness studio";
  const serviceNotes = ["Personalised programmes that fit around your work, sleep and lifestyle patterns.", "Evidence-informed practice — we explain the science behind every recommendation.", "Mind-body integration sessions that address stress, movement, and recovery together.", "Nutritional guidance grounded in practical, sustainable food choices.", "Group and one-to-one formats to match your preference for accountability."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Certified practitioners", "Online and in-person", "Programme tracking included", "Community support group"];
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const team = [{"name": "Arc Lead", "role": "Principal / Lead"}, {"name": "Slate Team", "role": "Client experience"}, {"name": "Signal Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0071" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0071{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0071 *{box-sizing:border-box}
.zp0071 a{color:inherit;text-decoration:none}
.zp0071 h1,.zp0071 h2,.zp0071 h3,.zp0071 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0071 img{max-width:100%;display:block}
.zp0071 button,.zp0071 a{-webkit-tap-highlight-color:transparent}
.zp0071 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0071 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0071 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0071 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0071 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0071 .nav.index nav{justify-content:flex-end}
.zp0071 .mobileMenu{display:none}
.zp0071 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0071 .eyebrow,.zp0071 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0071 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0071 .minimalHero{display:block;min-height:74vh}
.zp0071 .minimalHero h1{font-size:clamp(58px,10vw,160px);max-width:13ch}
.zp0071 .minimalFoot{display:grid;grid-template-columns:1fr auto;gap:30px;align-items:end;margin-top:60px}
.zp0071 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0071 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0071 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0071 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0071 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0071 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0071 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0071 .serviceGrid p{color:var(--muted)}
.zp0071 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0071 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0071 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0071 details{border-top:1px solid var(--border);padding:20px 0}
.zp0071 details summary{font-weight:800;cursor:pointer}
.zp0071 details p{color:var(--muted);max-width:70ch}
.zp0071 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0071 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0071 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0071 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0071 .timeline article{padding:20px 0}
.zp0071 .awards>div{max-width:800px;margin-left:auto}
.zp0071 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0071 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0071 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0071 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0071 .contact .eyebrow{color:var(--bg)}
.zp0071 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0071 .contactMeta{display:grid;gap:10px}
.zp0071 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0071 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
@keyframes enter-70{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0071 .hero{min-height:auto}
.zp0071 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0071 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0071 .nav nav{display:none}
.zp0071 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0071 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0071 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0071 .mobileMenu nav a{padding:10px 8px}
.zp0071 .hero{grid-template-columns:1fr}
.zp0071 .section,.zp0071 .sectionTitle,.zp0071 .contact{grid-template-columns:1fr}
.zp0071 .section{display:block}}
@media(max-width:430px){.zp0071{font-size:16px}
.zp0071 .hero,.zp0071 .section,.zp0071 .contact{padding-left:18px;padding-right:18px}
.zp0071 .serviceGrid,.zp0071 .proof,.zp0071 .programmes>div:last-child{grid-template-columns:1fr}
.zp0071 h1{font-size:clamp(42px,14vw,70px)}
.zp0071 .minimalFoot{grid-template-columns:1fr}
.zp0071 .nav.index{grid-template-columns:1fr auto}
.zp0071 .nav.index>span{display:none}}

.zp0071 .heroActions a,.zp0071 .primary,.zp0071 .ctaBtn,.zp0071 .btnPrimary,.zp0071 .schedule>a,.zp0071 .newsletter>a{transition:all .2s ease}
.zp0071 .heroActions a:hover,.zp0071 .primary:hover,.zp0071 .ctaBtn:hover,.zp0071 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0071 nav a,.zp0071 .nav a,.zp0071 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0071 nav a:hover,.zp0071 .nav a:hover,.zp0071 .footer a:hover{
  color:var(--primary)
}
.zp0071 .serviceGrid article,.zp0071 .projectCard,.zp0071 .teamCard,.zp0071 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0071 .serviceGrid article:hover,.zp0071 .projectCard:hover,.zp0071 .teamCard:hover,.zp0071 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0071 *,.zp0071 *::before,.zp0071 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0071 a,.zp0071 button,.zp0071 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero minimalHero"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><div className="minimalFoot"><p>{description}</p><a href="#contact">Book an appointment</a></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
