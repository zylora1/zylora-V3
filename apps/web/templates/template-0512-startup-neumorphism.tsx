import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0512-startup-neumorphism", "family": "Neumorphism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|dashboard-story|proof>faq>programmes>newsletter>services>security|heavy-frame|newspaper", "industry": "startup", "hero": "data-led", "navigation": "centered-logo", "layout": "dashboard-story"};

export default function Template0512({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Technology Startup");
  const headline = String(content.headline || "A new product with a precise problem, a credible point of view, and proof it works.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product", "Solutions", "Research", "Customer stories", "Careers"];
  const industryLabel = "Technology startup";
  const serviceNotes = ["Advisory board access: domain experts available for 2h/month per advisor.", "Investor-ready financial models built with your unit economics, not templates.", "Legal setup: incorporation, shareholding, IP, and founder agreements done right once.", "Go-to-market planning with channel experiments prioritised by CAC potential.", "Fundraise preparation: pitch deck, data room, and investor narrative coaching."];
  const proofPoints = ["Portfolio: 47 companies", "Average seed raised: £1.2M", "Partner response within 48h", "Equity-free options available"];
  const testimonial = "They introduced me to my lead investor and helped me not accept a term sheet that would have been a mistake. Invaluable.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Technology startup / Project A", "Technology startup / Project B", "Technology startup / Project C", "Technology startup / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A new product with a precise problem, a credible point of view, and proof it works. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0512" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0512{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0512 *{box-sizing:border-box}
.zp0512 a{color:inherit;text-decoration:none}
.zp0512 h1,.zp0512 h2,.zp0512 h3,.zp0512 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0512 img{max-width:100%;display:block}
.zp0512 button,.zp0512 a{-webkit-tap-highlight-color:transparent}
.zp0512 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0512 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0512 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0512 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0512 .nav.centered strong{order:2;font-size:24px}
.zp0512 .nav.centered nav:first-child{order:1}
.zp0512 .nav.centered nav:last-child{order:3}
.zp0512 .mobileMenu{display:none}
.zp0512 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0512 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0512 .eyebrow,.zp0512 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0512 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0512 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0512 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0512 .heroActions a,.zp0512 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0512 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0512 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0512 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0512 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0512 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0512 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0512 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0512 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0512 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0512 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0512 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0512 .serviceGrid p{color:var(--muted)}
.zp0512 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0512 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0512 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0512 .faqList{max-width:900px;margin-left:auto}
.zp0512 details{border-top:1px solid var(--border);padding:20px 0}
.zp0512 details summary{font-weight:800;cursor:pointer}
.zp0512 details p{color:var(--muted);max-width:70ch}
.zp0512 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0512 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0512 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0512 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0512 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0512 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0512 .contact .eyebrow{color:var(--bg)}
.zp0512 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0512 .contactMeta{display:grid;gap:10px}
.zp0512 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0512 .heroCopy{animation:enter-511 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-511{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0512 .hero{min-height:auto}
.zp0512 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0512 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0512 .nav nav{display:none}
.zp0512 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0512 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0512 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0512 .mobileMenu nav a{padding:10px 8px}
.zp0512 .hero,.zp0512 .dataHero{grid-template-columns:1fr}
.zp0512 .section,.zp0512 .sectionTitle,.zp0512 .security,.zp0512 .contact{grid-template-columns:1fr}
.zp0512 .section{display:block}}
@media(max-width:430px){.zp0512{font-size:16px}
.zp0512 .hero,.zp0512 .section,.zp0512 .contact{padding-left:18px;padding-right:18px}
.zp0512 .serviceGrid,.zp0512 .proof,.zp0512 .programmes>div:last-child{grid-template-columns:1fr}
.zp0512 h1{font-size:clamp(42px,14vw,70px)}}

.zp0512 .heroActions a,.zp0512 .primary,.zp0512 .ctaBtn,.zp0512 .btnPrimary,.zp0512 .schedule>a,.zp0512 .newsletter>a{transition:all .2s ease}
.zp0512 .heroActions a:hover,.zp0512 .primary:hover,.zp0512 .ctaBtn:hover,.zp0512 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0512 nav a,.zp0512 .nav a,.zp0512 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0512 nav a:hover,.zp0512 .nav a:hover,.zp0512 .footer a:hover{
  color:var(--primary)
}
.zp0512 .serviceGrid article,.zp0512 .projectCard,.zp0512 .teamCard,.zp0512 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0512 .serviceGrid article:hover,.zp0512 .projectCard:hover,.zp0512 .teamCard:hover,.zp0512 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}

.zp0512 .serviceGrid article,.zp0512 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0512 .serviceGrid article:nth-child(even),.zp0512 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0512 .proofLead,.zp0512 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0512 *,.zp0512 *::before,.zp0512 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0512 a,.zp0512 button,.zp0512 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
