import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0132-school-neumorphism", "family": "Neumorphism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|property-led|press>faq>metrics>proof>process>services>gallery|cut-corners|literary", "industry": "school", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "property-led"};

export default function Template0132({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork School");
  const headline = String(content.headline || "A rigorous, caring learning environment where curiosity and character grow together.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Early years", "Primary programme", "Secondary programme", "Arts and music", "Athletics"];
  const industryLabel = "Independent school";
  const serviceNotes = ["Small class sizes that allow teachers to respond to individual learning pace.", "Curriculum breadth beyond core subjects — arts, sport, and enterprise included.", "Pastoral care system with a named key adult for every student.", "Parent communication portal with weekly progress updates.", "Exam preparation programmes with past-paper focus and teacher feedback."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Ofsted Good or Outstanding", "Average class: 18 students", "96% parent satisfaction", "Dedicated SENCO support"];
  const testimonial = "Our daughter was unhappy at her previous school. Within a term here she found her confidence — the pastoral care made the difference.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Independent school / Project A", "Independent school / Project B", "Independent school / Project C", "Independent school / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A rigorous, caring learning environment where curiosity and character grow together. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0132" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0132{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0132 *{box-sizing:border-box}
.zp0132 a{color:inherit;text-decoration:none}
.zp0132 h1,.zp0132 h2,.zp0132 h3,.zp0132 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0132 img{max-width:100%;display:block}
.zp0132 button,.zp0132 a{-webkit-tap-highlight-color:transparent}
.zp0132 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0132 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0132 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0132 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0132 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0132 .mobileMenu{display:none}
.zp0132 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0132 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0132 .eyebrow,.zp0132 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0132 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0132 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0132 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0132 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0132 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0132 .visual,.zp0132 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0132 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0132 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0132 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0132 .heroPhoto{object-fit:cover}
.zp0132 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0132 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0132 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0132 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0132 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0132 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0132 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0132 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0132 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0132 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0132 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0132 .serviceGrid p{color:var(--muted)}
.zp0132 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0132 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0132 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0132 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0132 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0132 .faqList{max-width:900px;margin-left:auto}
.zp0132 details{border-top:1px solid var(--border);padding:20px 0}
.zp0132 details summary{font-weight:800;cursor:pointer}
.zp0132 details p{color:var(--muted);max-width:70ch}
.zp0132 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0132 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0132 .galleryGrid>*:first-child{grid-row:1/3}
.zp0132 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0132 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0132 .g2,.zp0132 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0132 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0132 .metrics div{background:var(--bg);padding:30px}
.zp0132 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Garamond, Georgia, serif;color:var(--primary)}
.zp0132 .awards>div{max-width:800px;margin-left:auto}
.zp0132 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0132 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0132 .contact .eyebrow{color:var(--bg)}
.zp0132 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0132 .contactMeta{display:grid;gap:10px}
.zp0132 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0132 .hero{min-height:auto}
.zp0132 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0132 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0132 .nav nav{display:none}
.zp0132 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0132 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0132 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0132 .mobileMenu nav a{padding:10px 8px}
.zp0132 .hero,.zp0132 .bentoHero{grid-template-columns:1fr}
.zp0132 .section,.zp0132 .sectionTitle,.zp0132 .contact{grid-template-columns:1fr}
.zp0132 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0132 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0132 .metrics{grid-template-columns:1fr 1fr}
.zp0132 .section{display:block}}
@media(max-width:430px){.zp0132{font-size:16px}
.zp0132 .hero,.zp0132 .section,.zp0132 .contact{padding-left:18px;padding-right:18px}
.zp0132 .serviceGrid,.zp0132 .proof,.zp0132 .metrics{grid-template-columns:1fr}
.zp0132 h1{font-size:clamp(42px,14vw,70px)}
.zp0132 .galleryGrid{grid-template-columns:1fr}
.zp0132 .galleryGrid>*:first-child{grid-column:auto}}

.zp0132 .heroActions a,.zp0132 .primary,.zp0132 .ctaBtn,.zp0132 .btnPrimary,.zp0132 .schedule>a,.zp0132 .newsletter>a{transition:all .2s ease}
.zp0132 .heroActions a:hover,.zp0132 .primary:hover,.zp0132 .ctaBtn:hover,.zp0132 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0132 nav a,.zp0132 .nav a,.zp0132 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0132 nav a:hover,.zp0132 .nav a:hover,.zp0132 .footer a:hover{
  color:var(--primary)
}
.zp0132 .serviceGrid article,.zp0132 .projectCard,.zp0132 .teamCard,.zp0132 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0132 .serviceGrid article:hover,.zp0132 .projectCard:hover,.zp0132 .teamCard:hover,.zp0132 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.zp0132 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0132 .sectionTitle,.zp0132 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}

.zp0132 .serviceGrid article,.zp0132 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0132 .serviceGrid article:nth-child(even),.zp0132 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0132 .proofLead,.zp0132 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0132 *,.zp0132 *::before,.zp0132 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0132 a,.zp0132 button,.zp0132 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">31</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
