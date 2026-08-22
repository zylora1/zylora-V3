"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0427-insurance-glassmorphism", "family": "Glassmorphism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|horizontal-panels|services>faq>metrics>projects>proof|capsule|organic-modern", "industry": "insurance", "hero": "split-image", "navigation": "statement-bar", "layout": "horizontal-panels"};

export default function Template0427({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Insurance Brokerage");
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
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0427" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0427{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0427 *{box-sizing:border-box}
.zp0427 a{color:inherit;text-decoration:none}
.zp0427 h1,.zp0427 h2,.zp0427 h3,.zp0427 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0427 img{max-width:100%;display:block}
.zp0427 button,.zp0427 a{-webkit-tap-highlight-color:transparent}
.zp0427 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0427 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0427 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0427 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0427 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0427 .nav.statement>a{justify-self:end}
.zp0427 .mobileMenu{display:none}
.zp0427 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0427 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0427 .eyebrow,.zp0427 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0427 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0427 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0427 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0427 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0427 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0427 .visual,.zp0427 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0427 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0427 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0427 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0427 .heroPhoto{object-fit:cover}
.zp0427 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0427 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0427 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0427 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0427 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0427 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0427 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0427 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0427 .serviceGrid p{color:var(--muted)}
.zp0427 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0427 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0427 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0427 .faqList{max-width:900px;margin-left:auto}
.zp0427 details{border-top:1px solid var(--border);padding:20px 0}
.zp0427 details summary{font-weight:800;cursor:pointer}
.zp0427 details p{color:var(--muted);max-width:70ch}
.zp0427 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0427 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0427 .projects article:nth-child(2){transform:translateY(32px)}
.zp0427 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0427 .metrics div{background:var(--bg);padding:30px}
.zp0427 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Optima, Candara, sans-serif;color:var(--primary)}
.zp0427 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0427 .contact .eyebrow{color:var(--bg)}
.zp0427 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0427 .contactMeta{display:grid;gap:10px}
.zp0427 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0427 .section{display:grid;grid-template-columns:.28fr 1.72fr;gap:4vw}
.zp0427 .sectionTitle{display:block}
.zp0427{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0427 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0427 .heroCopy{animation:enter-426 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-426{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0427 .hero{min-height:auto}
.zp0427 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0427 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0427 .nav nav{display:none}
.zp0427 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0427 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0427 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0427 .mobileMenu nav a{padding:10px 8px}
.zp0427 .hero,.zp0427 .splitHero{grid-template-columns:1fr}
.zp0427 .section,.zp0427 .sectionTitle,.zp0427 .contact{grid-template-columns:1fr}
.zp0427 .metrics{grid-template-columns:1fr 1fr}
.zp0427 .projects .projectGrid{grid-template-columns:1fr}
.zp0427 .projects article:nth-child(2){transform:none}
.zp0427 .section{display:block}}
@media(max-width:430px){.zp0427{font-size:16px}
.zp0427 .hero,.zp0427 .section,.zp0427 .contact{padding-left:18px;padding-right:18px}
.zp0427 .serviceGrid,.zp0427 .proof,.zp0427 .metrics{grid-template-columns:1fr}
.zp0427 h1{font-size:clamp(42px,14vw,70px)}
.zp0427 .nav.statement{grid-template-columns:1fr auto}
.zp0427 .nav.statement>span:first-child{display:none}}

.zp0427 .heroActions a,.zp0427 .primary,.zp0427 .ctaBtn,.zp0427 .btnPrimary,.zp0427 .schedule>a,.zp0427 .newsletter>a{transition:all .2s ease}
.zp0427 .heroActions a:hover,.zp0427 .primary:hover,.zp0427 .ctaBtn:hover,.zp0427 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0427 nav a,.zp0427 .nav a,.zp0427 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0427 nav a:hover,.zp0427 .nav a:hover,.zp0427 .footer a:hover{
  color:var(--primary)
}
.zp0427 .serviceGrid article,.zp0427 .projectCard,.zp0427 .teamCard,.zp0427 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0427 .serviceGrid article:hover,.zp0427 .projectCard:hover,.zp0427 .teamCard:hover,.zp0427 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0427 *,.zp0427 *::before,.zp0427 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0427 a,.zp0427 button,.zp0427 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">26</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / horizontal-panels</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
