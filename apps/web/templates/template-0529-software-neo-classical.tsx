"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0529-software-neo-classical", "family": "Neo-classical", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|magazine-sections|collection>services>proof>faq>products|square-editorial|luxury-contrast", "industry": "software", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "magazine-sections"};

export default function Template0529({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Software Studio");
  const headline = String(content.headline || "Experienced product engineering for teams that need reliable software and clear delivery.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product engineering", "Web applications", "Mobile apps", "Platform modernization", "Support"];
  const serviceNotes = ["Agile delivery with two-week sprints: working software every fortnight, not just updates.", "Code quality: 85%+ test coverage required before any feature ships to production.", "Architecture review at project start — we identify technical risk before writing a line.", "Maintenance packages that include dependency updates, security patches, and monitoring.", "Source code escrow and full handover documentation as standard on every engagement."];
  const proofPoints = ["ISO 9001 quality certified", "GitHub-first delivery", "85%+ test coverage minimum", "GDPR compliant processes"];
  const testimonial = "Every sprint we had something working to test. The quality was high from the start — no big crunch at the end.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Software studio / Project A", "Software studio / Project B", "Software studio / Project C", "Software studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Experienced product engineering for teams that need reliable software and clear delivery. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0529" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0529{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0529 *{box-sizing:border-box}
.zp0529 a{color:inherit;text-decoration:none}
.zp0529 h1,.zp0529 h2,.zp0529 h3,.zp0529 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0529 img{max-width:100%;display:block}
.zp0529 button,.zp0529 a{-webkit-tap-highlight-color:transparent}
.zp0529 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0529 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0529 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0529 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0529 .mobileMenu{display:none}
.zp0529 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0529 .eyebrow,.zp0529 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0529 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0529 .visual,.zp0529 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0529 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0529 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0529 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0529 .heroPhoto{object-fit:cover}
.zp0529 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0529 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0529 .coverCaption{align-self:end}
.zp0529 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0529 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0529 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0529 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0529 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0529 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0529 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0529 .serviceGrid p{color:var(--muted)}
.zp0529 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0529 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0529 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0529 .faqList{max-width:900px;margin-left:auto}
.zp0529 details{border-top:1px solid var(--border);padding:20px 0}
.zp0529 details summary{font-weight:800;cursor:pointer}
.zp0529 details p{color:var(--muted);max-width:70ch}
.zp0529 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0529 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0529 .p1,.zp0529 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0529 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0529 .contact .eyebrow{color:var(--bg)}
.zp0529 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0529 .contactMeta{display:grid;gap:10px}
.zp0529 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0529 .section{column-rule:1px solid var(--border)}
.zp0529 .sectionTitle h2{max-width:18ch}
@keyframes enter-528{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0529 .hero{min-height:auto}
.zp0529 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0529 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0529 .nav nav{display:none}
.zp0529 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0529 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0529 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0529 .mobileMenu nav a{padding:10px 8px}
.zp0529 .hero,.zp0529 .coverHero{grid-template-columns:1fr}
.zp0529 .section,.zp0529 .sectionTitle,.zp0529 .contact{grid-template-columns:1fr}
.zp0529 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0529 .section{display:block}}
@media(max-width:430px){.zp0529{font-size:16px}
.zp0529 .hero,.zp0529 .section,.zp0529 .contact{padding-left:18px;padding-right:18px}
.zp0529 .serviceGrid,.zp0529 .proof,.zp0529 .collectionGrid{grid-template-columns:1fr}
.zp0529 h1{font-size:clamp(42px,14vw,70px)}}

.zp0529 .heroActions a,.zp0529 .primary,.zp0529 .ctaBtn,.zp0529 .btnPrimary,.zp0529 .schedule>a,.zp0529 .newsletter>a{transition:all .2s ease}
.zp0529 .heroActions a:hover,.zp0529 .primary:hover,.zp0529 .ctaBtn:hover,.zp0529 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0529 nav a,.zp0529 .nav a,.zp0529 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0529 nav a:hover,.zp0529 .nav a:hover,.zp0529 .footer a:hover{
  color:var(--secondary)
}
.zp0529 .serviceGrid article,.zp0529 .projectCard,.zp0529 .teamCard,.zp0529 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0529 .serviceGrid article:hover,.zp0529 .projectCard:hover,.zp0529 .teamCard:hover,.zp0529 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0529 *,.zp0529 *::before,.zp0529 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0529 a,.zp0529 button,.zp0529 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0529</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">28</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
