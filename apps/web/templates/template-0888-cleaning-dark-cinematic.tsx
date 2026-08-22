import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0888-cleaning-dark-cinematic", "family": "Dark Cinematic", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|property-led|faq>testimonial>services>proof>destinations>credentials>metrics|micro-radius|terminal", "industry": "cleaning", "hero": "video-frame", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0888({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Cleaning Company");
  const headline = String(content.headline || "Reliable cleaning with simple scheduling, consistent teams, and clear scope.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Home cleaning", "Deep cleaning", "Move-out cleaning", "Office cleaning", "Recurring plans"];
  const industryLabel = "Cleaning company";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Rook client";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cleaning company / Project A", "Cleaning company / Project B", "Cleaning company / Project C", "Cleaning company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Reliable cleaning with simple scheduling, consistent teams, and clear scope. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0888" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0888{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:0px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0888 *{box-sizing:border-box}
.zp0888 a{color:inherit;text-decoration:none}
.zp0888 h1,.zp0888 h2,.zp0888 h3,.zp0888 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0888 img{max-width:100%;display:block}
.zp0888 button,.zp0888 a{-webkit-tap-highlight-color:transparent}
.zp0888 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0888 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0888 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0888 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0888 .mobileMenu{display:none}
.zp0888 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0888 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0888 .eyebrow,.zp0888 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0888 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0888 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0888 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0888 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0888 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0888 .visual,.zp0888 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0888 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0888 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0888 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0888 .heroPhoto{object-fit:cover}
.zp0888 .videoHero{grid-template-columns:1fr 1fr}
.zp0888 .videoFrame{position:relative}
.zp0888 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0888 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0888 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0888 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0888 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0888 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0888 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0888 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0888 .serviceGrid p{color:var(--muted)}
.zp0888 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0888 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0888 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0888 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0888 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0888 .testimonial>div{align-self:end}
.zp0888 .testimonial span{display:block;opacity:.7}
.zp0888 .faqList{max-width:900px;margin-left:auto}
.zp0888 details{border-top:1px solid var(--border);padding:20px 0}
.zp0888 details summary{font-weight:800;cursor:pointer}
.zp0888 details p{color:var(--muted);max-width:70ch}
.zp0888 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0888 .metrics div{background:var(--bg);padding:30px}
.zp0888 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Lucida Console, Monaco, monospace;color:var(--primary)}
.zp0888 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0888 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0888 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0888 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0888 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0888 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0888 .contact .eyebrow{color:var(--bg)}
.zp0888 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0888 .contactMeta{display:grid;gap:10px}
.zp0888 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0888 .hero{min-height:auto}
.zp0888 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0888 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0888 .nav nav{display:none}
.zp0888 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0888 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0888 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0888 .mobileMenu nav a{padding:10px 8px}
.zp0888 .hero,.zp0888 .videoHero{grid-template-columns:1fr}
.zp0888 .section,.zp0888 .sectionTitle,.zp0888 .contact{grid-template-columns:1fr}
.zp0888 .testimonial{grid-template-columns:1fr}
.zp0888 .metrics{grid-template-columns:1fr 1fr}
.zp0888 .section{display:block}}
@media(max-width:430px){.zp0888{font-size:16px}
.zp0888 .hero,.zp0888 .section,.zp0888 .contact{padding-left:18px;padding-right:18px}
.zp0888 .serviceGrid,.zp0888 .proof,.zp0888 .metrics,.zp0888 .destinations>div:last-child{grid-template-columns:1fr}
.zp0888 h1{font-size:clamp(42px,14vw,70px)}}

.zp0888 .heroActions a,.zp0888 .primary,.zp0888 .ctaBtn,.zp0888 .btnPrimary,.zp0888 .schedule>a,.zp0888 .newsletter>a{transition:all .2s ease}
.zp0888 .heroActions a:hover,.zp0888 .primary:hover,.zp0888 .ctaBtn:hover,.zp0888 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0888 nav a,.zp0888 .nav a,.zp0888 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0888 nav a:hover,.zp0888 .nav a:hover,.zp0888 .footer a:hover{
  opacity:.7
}
.zp0888 .serviceGrid article,.zp0888 .projectCard,.zp0888 .teamCard,.zp0888 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0888 .serviceGrid article:hover,.zp0888 .projectCard:hover,.zp0888 .teamCard:hover,.zp0888 .bentoCard:hover{
  transform:scale(1.02)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0888 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0888 .sectionTitle,.zp0888 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0888 *,.zp0888 *::before,.zp0888 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0888 a,.zp0888 button,.zp0888 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">87</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dark Cinematic / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
