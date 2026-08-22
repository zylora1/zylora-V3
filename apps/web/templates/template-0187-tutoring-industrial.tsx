"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0187-tutoring-industrial", "family": "Industrial", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|programme-led|location>timeline>services>proof>community|capsule|organic-modern", "industry": "tutoring", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "programme-led"};

export default function Template0187({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Tutoring Service");
  const headline = String(content.headline || "One-to-one learning support shaped around the student, not a fixed worksheet.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Math tutoring", "Science tutoring", "Language support", "Exam revision", "Study planning"];
  const industryLabel = "Tutoring service";
  const serviceNotes = ["Subject specialists with teaching experience, not just degree holders.", "Diagnostic assessment in the first session to find gaps, not just reinforce strengths.", "Exam technique coaching alongside subject knowledge — both matter equally.", "Flexible booking: weekly recurring, intensive blocks, or exam-season only.", "Parent briefings every six weeks with written progress summaries."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["QTS and subject specialists", "98% report grade improvement", "DBS enhanced checked", "Flexible scheduling"];
  const storyBody = "Atlas Tutoring Service is presented as a real working tutoring service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0187" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0187{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0187 *{box-sizing:border-box}
.zp0187 a{color:inherit;text-decoration:none}
.zp0187 h1,.zp0187 h2,.zp0187 h3,.zp0187 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0187 img{max-width:100%;display:block}
.zp0187 button,.zp0187 a{-webkit-tap-highlight-color:transparent}
.zp0187 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0187 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0187 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0187 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0187 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0187 .nav.statement>a{justify-self:end}
.zp0187 .mobileMenu{display:none}
.zp0187 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0187 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0187 .eyebrow,.zp0187 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0187 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0187 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0187 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0187 .heroActions a,.zp0187 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0187 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0187 .visual,.zp0187 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0187 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0187 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0187 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0187 .heroPhoto{object-fit:cover}
.zp0187 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0187 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Optima, Candara, sans-serif;opacity:.08}
.zp0187 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0187 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0187 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0187 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0187 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0187 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0187 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0187 .serviceGrid p{color:var(--muted)}
.zp0187 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0187 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0187 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0187 details{border-top:1px solid var(--border);padding:20px 0}
.zp0187 details summary{font-weight:800;cursor:pointer}
.zp0187 details p{color:var(--muted);max-width:70ch}
.zp0187 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0187 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0187 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0187 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0187 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0187 .timeline article{padding:20px 0}
.zp0187 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0187 .contact .eyebrow{color:var(--bg)}
.zp0187 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0187 .contactMeta{display:grid;gap:10px}
.zp0187 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0187 .heroCopy{animation:enter-186 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-186{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0187 .hero{min-height:auto}
.zp0187 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0187 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0187 .nav nav{display:none}
.zp0187 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0187 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0187 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0187 .mobileMenu nav a{padding:10px 8px}
.zp0187 .hero,.zp0187 .stripHero{grid-template-columns:1fr}
.zp0187 .section,.zp0187 .sectionTitle,.zp0187 .location,.zp0187 .contact{grid-template-columns:1fr}
.zp0187 .section{display:block}}
@media(max-width:430px){.zp0187{font-size:16px}
.zp0187 .hero,.zp0187 .section,.zp0187 .contact{padding-left:18px;padding-right:18px}
.zp0187 .serviceGrid,.zp0187 .proof{grid-template-columns:1fr}
.zp0187 h1{font-size:clamp(42px,14vw,70px)}
.zp0187 .nav.statement{grid-template-columns:1fr auto}
.zp0187 .nav.statement>span:first-child{display:none}}

.zp0187 .heroActions a,.zp0187 .primary,.zp0187 .ctaBtn,.zp0187 .btnPrimary,.zp0187 .schedule>a,.zp0187 .newsletter>a{transition:all .2s ease}
.zp0187 .heroActions a:hover,.zp0187 .primary:hover,.zp0187 .ctaBtn:hover,.zp0187 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);border-radius:0
}
.zp0187 nav a,.zp0187 .nav a,.zp0187 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0187 nav a:hover,.zp0187 .nav a:hover,.zp0187 .footer a:hover{
  color:var(--primary)
}
.zp0187 .serviceGrid article,.zp0187 .projectCard,.zp0187 .teamCard,.zp0187 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0187 .serviceGrid article:hover,.zp0187 .projectCard:hover,.zp0187 .teamCard:hover,.zp0187 .bentoCard:hover{
  transform:translateX(3px)
}
@media(prefers-reduced-motion:reduce){.zp0187 *,.zp0187 *::before,.zp0187 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0187 a,.zp0187 button,.zp0187 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">86</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Industrial / programme-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
