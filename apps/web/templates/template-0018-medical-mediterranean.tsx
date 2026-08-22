import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0018-medical-mediterranean", "family": "Mediterranean", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|modular-12|case-study>faq>products>services>manifesto>security>proof|borderless|utility", "industry": "medical", "hero": "gallery-wall", "navigation": "tabbed", "layout": "modular-12"};

export default function Template0018({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Primary Care Clinic");
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
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0018" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0018{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0018 *{box-sizing:border-box}
.zp0018 a{color:inherit;text-decoration:none}
.zp0018 h1,.zp0018 h2,.zp0018 h3,.zp0018 blockquote{font-family:Verdana, sans-serif;text-wrap:balance}
.zp0018 img{max-width:100%;display:block}
.zp0018 button,.zp0018 a{-webkit-tap-highlight-color:transparent}
.zp0018 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0018 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0018 .nav strong{font-family:Verdana, sans-serif;font-size:18px}
.zp0018 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0018 .mobileMenu{display:none}
.zp0018 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0018 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0018 .eyebrow,.zp0018 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0018 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0018 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0018 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0018 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0018 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0018 .wallHero{grid-template-columns:1fr 1fr}
.zp0018 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0018 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0018 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0018 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0018 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0018 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0018 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0018 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0018 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0018 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0018 .serviceGrid p{color:var(--muted)}
.zp0018 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0018 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0018 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0018 .faqList{max-width:900px;margin-left:auto}
.zp0018 details{border-top:1px solid var(--border);padding:20px 0}
.zp0018 details summary{font-weight:800;cursor:pointer}
.zp0018 details p{color:var(--muted);max-width:70ch}
.zp0018 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0018 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0018 .projects article:nth-child(2){transform:translateY(32px)}
.zp0018 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0018 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0018 .p1,.zp0018 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0018 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Verdana, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0018 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0018 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0018 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0018 .contact .eyebrow{color:var(--bg)}
.zp0018 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0018 .contactMeta{display:grid;gap:10px}
.zp0018 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0018 .heroCopy{animation:enter-17 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-17{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0018 .hero{min-height:auto}
.zp0018 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0018 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0018 .nav nav{display:none}
.zp0018 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0018 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0018 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0018 .mobileMenu nav a{padding:10px 8px}
.zp0018 .hero,.zp0018 .wallHero{grid-template-columns:1fr}
.zp0018 .section,.zp0018 .sectionTitle,.zp0018 .security,.zp0018 .contact{grid-template-columns:1fr}
.zp0018 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0018 .projects .projectGrid{grid-template-columns:1fr}
.zp0018 .projects article:nth-child(2){transform:none}
.zp0018 .section{display:block}}
@media(max-width:430px){.zp0018{font-size:16px}
.zp0018 .hero,.zp0018 .section,.zp0018 .contact{padding-left:18px;padding-right:18px}
.zp0018 .serviceGrid,.zp0018 .proof,.zp0018 .collectionGrid{grid-template-columns:1fr}
.zp0018 h1{font-size:clamp(42px,14vw,70px)}}

.zp0018 .heroActions a,.zp0018 .primary,.zp0018 .ctaBtn,.zp0018 .btnPrimary,.zp0018 .schedule>a,.zp0018 .newsletter>a{transition:all .2s ease}
.zp0018 .heroActions a:hover,.zp0018 .primary:hover,.zp0018 .ctaBtn:hover,.zp0018 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0018 nav a,.zp0018 .nav a,.zp0018 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0018 nav a:hover,.zp0018 .nav a:hover,.zp0018 .footer a:hover{
  color:var(--primary)
}
.zp0018 .serviceGrid article,.zp0018 .projectCard,.zp0018 .teamCard,.zp0018 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0018 .serviceGrid article:hover,.zp0018 .projectCard:hover,.zp0018 .teamCard:hover,.zp0018 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0018 *,.zp0018 *::before,.zp0018 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0018 a,.zp0018 button,.zp0018 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Mediterranean / modular-12</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
