import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0912-landscaping-scandinavian", "family": "Scandinavian", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|stacked-posters|security>faq>community>products>proof>services>programmes|heavy-frame|terminal", "industry": "landscaping", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "stacked-posters"};

export default function Template0912({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Landscape Company");
  const headline = String(content.headline || "Outdoor spaces designed for the site, the climate, and how clients actually use them.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Garden design", "Installation", "Maintenance", "Irrigation", "Outdoor lighting"];
  const industryLabel = "Landscape company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Kite Landscape Company is presented as a real working landscape company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Landscape company / Project A", "Landscape company / Project B", "Landscape company / Project C", "Landscape company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Outdoor spaces designed for the site, the climate, and how clients actually use them. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0912" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0912{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0912 *{box-sizing:border-box}
.zp0912 a{color:inherit;text-decoration:none}
.zp0912 h1,.zp0912 h2,.zp0912 h3,.zp0912 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0912 img{max-width:100%;display:block}
.zp0912 button,.zp0912 a{-webkit-tap-highlight-color:transparent}
.zp0912 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0912 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0912 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0912 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0912 .nav.centered strong{order:2;font-size:24px}
.zp0912 .nav.centered nav:first-child{order:1}
.zp0912 .nav.centered nav:last-child{order:3}
.zp0912 .mobileMenu{display:none}
.zp0912 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0912 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0912 .eyebrow,.zp0912 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0912 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0912 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0912 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0912 .heroActions a,.zp0912 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0912 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0912 .visual,.zp0912 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0912 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0912 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0912 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0912 .heroPhoto{object-fit:cover}
.zp0912 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0912 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0912 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0912 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0912 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0912 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0912 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0912 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0912 .serviceGrid p{color:var(--muted)}
.zp0912 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0912 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0912 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0912 .faqList{max-width:900px;margin-left:auto}
.zp0912 details{border-top:1px solid var(--border);padding:20px 0}
.zp0912 details summary{font-weight:800;cursor:pointer}
.zp0912 details p{color:var(--muted);max-width:70ch}
.zp0912 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0912 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0912 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0912 .p1,.zp0912 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0912 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0912 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0912 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0912 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0912 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0912 .contact .eyebrow{color:var(--bg)}
.zp0912 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0912 .contactMeta{display:grid;gap:10px}
.zp0912 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0912 .heroCopy{animation:enter-911 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-911{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0912 .hero{min-height:auto}
.zp0912 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0912 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0912 .nav nav{display:none}
.zp0912 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0912 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0912 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0912 .mobileMenu nav a{padding:10px 8px}
.zp0912 .hero,.zp0912 .asymHero{grid-template-columns:1fr}
.zp0912 .section,.zp0912 .sectionTitle,.zp0912 .security,.zp0912 .contact{grid-template-columns:1fr}
.zp0912 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0912 .section{display:block}}
@media(max-width:430px){.zp0912{font-size:16px}
.zp0912 .hero,.zp0912 .section,.zp0912 .contact{padding-left:18px;padding-right:18px}
.zp0912 .serviceGrid,.zp0912 .proof,.zp0912 .collectionGrid,.zp0912 .programmes>div:last-child{grid-template-columns:1fr}
.zp0912 h1{font-size:clamp(42px,14vw,70px)}}

.zp0912 .heroActions a,.zp0912 .primary,.zp0912 .ctaBtn,.zp0912 .btnPrimary,.zp0912 .schedule>a,.zp0912 .newsletter>a{transition:all .2s ease}
.zp0912 .heroActions a:hover,.zp0912 .primary:hover,.zp0912 .ctaBtn:hover,.zp0912 .btnPrimary:hover{
  opacity:.75
}
.zp0912 nav a,.zp0912 .nav a,.zp0912 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0912 nav a:hover,.zp0912 .nav a:hover,.zp0912 .footer a:hover{
  opacity:.65
}
.zp0912 .serviceGrid article,.zp0912 .projectCard,.zp0912 .teamCard,.zp0912 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0912 .serviceGrid article:hover,.zp0912 .projectCard:hover,.zp0912 .teamCard:hover,.zp0912 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0912 *,.zp0912 *::before,.zp0912 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0912 a,.zp0912 button,.zp0912 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">03</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">11</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
