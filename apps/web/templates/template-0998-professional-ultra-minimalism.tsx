import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0998-professional-ultra-minimalism", "family": "Ultra Minimalism", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|menu-led|services>press>proof>destinations>packages>faq|pill-controls|ceremonial", "industry": "professional", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "menu-led"};

export default function Template0998({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Professional Services");
  const headline = String(content.headline || "Senior expertise delivered with clear scope, useful communication, and practical outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Advisory", "Assessment", "Implementation", "Retainers", "Workshops"];
  const industryLabel = "Professional services";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Professional services / Project A", "Professional services / Project B", "Professional services / Project C", "Professional services / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Senior expertise delivered with clear scope, useful communication, and practical outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0998" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0998{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:0px;--shadow:none;--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0998 *{box-sizing:border-box}
.zp0998 a{color:inherit;text-decoration:none}
.zp0998 h1,.zp0998 h2,.zp0998 h3,.zp0998 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0998 img{max-width:100%;display:block}
.zp0998 button,.zp0998 a{-webkit-tap-highlight-color:transparent}
.zp0998 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0998 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0998 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0998 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0998 .mobileMenu{display:none}
.zp0998 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0998 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0998 .eyebrow,.zp0998 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0998 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0998 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0998 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0998 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0998 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0998 .visual,.zp0998 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0998 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0998 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0998 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0998 .heroPhoto{object-fit:cover}
.zp0998 .cinematic{padding:0;min-height:100vh}
.zp0998 .cinematic>.heroPhoto,.zp0998 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0998 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0998 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0998 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0998 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0998 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0998 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0998 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0998 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0998 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0998 .serviceGrid p{color:var(--muted)}
.zp0998 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0998 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0998 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0998 .faqList{max-width:900px;margin-left:auto}
.zp0998 details{border-top:1px solid var(--border);padding:20px 0}
.zp0998 details summary{font-weight:800;cursor:pointer}
.zp0998 details p{color:var(--muted);max-width:70ch}
.zp0998 .awards>div{max-width:800px;margin-left:auto}
.zp0998 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0998 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0998 .packages>.sectionTitle{grid-column:1/-1}
.zp0998 .packages article{padding:24px;border:1px solid var(--border)}
.zp0998 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0998 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0998 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0998 .contact .eyebrow{color:var(--bg)}
.zp0998 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0998 .contactMeta{display:grid;gap:10px}
.zp0998 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0998 .heroCopy{animation:enter-997 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-997{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0998 .hero{min-height:auto}
.zp0998 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0998 .proof{grid-template-columns:1fr 1fr}
.zp0998 .packages{grid-template-columns:1fr 1fr}
.zp0998 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0998 .nav nav{display:none}
.zp0998 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0998 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0998 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0998 .mobileMenu nav a{padding:10px 8px}
.zp0998 .hero{grid-template-columns:1fr}
.zp0998 .section,.zp0998 .sectionTitle,.zp0998 .contact{grid-template-columns:1fr}
.zp0998 .section{display:block}}
@media(max-width:430px){.zp0998{font-size:16px}
.zp0998 .hero,.zp0998 .section,.zp0998 .contact{padding-left:18px;padding-right:18px}
.zp0998 .serviceGrid,.zp0998 .proof,.zp0998 .packages,.zp0998 .destinations>div:last-child{grid-template-columns:1fr}
.zp0998 h1{font-size:clamp(42px,14vw,70px)}}

.zp0998 .heroActions a,.zp0998 .primary,.zp0998 .ctaBtn,.zp0998 .btnPrimary,.zp0998 .schedule>a,.zp0998 .newsletter>a{transition:all .2s ease}
.zp0998 .heroActions a:hover,.zp0998 .primary:hover,.zp0998 .ctaBtn:hover,.zp0998 .btnPrimary:hover{
  opacity:.75
}
.zp0998 nav a,.zp0998 .nav a,.zp0998 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0998 nav a:hover,.zp0998 .nav a:hover,.zp0998 .footer a:hover{
  opacity:.6
}
.zp0998 .serviceGrid article,.zp0998 .projectCard,.zp0998 .teamCard,.zp0998 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0998 .serviceGrid article:hover,.zp0998 .projectCard:hover,.zp0998 .teamCard:hover,.zp0998 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0998 *,.zp0998 *::before,.zp0998 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0998 a,.zp0998 button,.zp0998 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">97</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Ultra Minimalism / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
