"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0157-university-playful", "family": "Playful", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|collection-led|team>process>services>proof>testimonial|hard-outline|museum", "industry": "university", "hero": "floating-panels", "navigation": "compact-floating", "layout": "collection-led"};

export default function Template0157({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook University Programme");
  const headline = String(content.headline || "Study, research, and community organised around meaningful real-world contribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Undergraduate study", "Graduate programmes", "Research", "Student life", "Admissions support"];
  const industryLabel = "University programme";
  const serviceNotes = ["Courses co-designed with industry partners so graduate skills meet real employer needs.", "Research-active faculty who bring live project experience into lectures.", "Industry placement years with 92% of students securing relevant roles.", "International exchange programmes at 60+ partner universities worldwide.", "Graduate outcome tracking with 18-month follow-up career support."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const testimonialName = "Morrow client";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0157" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0157{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0157 *{box-sizing:border-box}
.zp0157 a{color:inherit;text-decoration:none}
.zp0157 h1,.zp0157 h2,.zp0157 h3,.zp0157 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0157 img{max-width:100%;display:block}
.zp0157 button,.zp0157 a{-webkit-tap-highlight-color:transparent}
.zp0157 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0157 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0157 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0157 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0157 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0157 .mobileMenu{display:none}
.zp0157 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0157 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0157 .eyebrow,.zp0157 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0157 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0157 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0157 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0157 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0157 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0157 .visual,.zp0157 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0157 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0157 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0157 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0157 .heroPhoto{object-fit:cover}
.zp0157 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0157 .floatStack{position:relative;min-height:500px}
.zp0157 .floatStack>*{position:absolute}
.zp0157 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0157 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0157 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0157 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0157 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0157 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0157 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0157 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0157 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0157 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0157 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0157 .serviceGrid p{color:var(--muted)}
.zp0157 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0157 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0157 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0157 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0157 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0157 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0157 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0157 .testimonial>div{align-self:end}
.zp0157 .testimonial span{display:block;opacity:.7}
.zp0157 details{border-top:1px solid var(--border);padding:20px 0}
.zp0157 details summary{font-weight:800;cursor:pointer}
.zp0157 details p{color:var(--muted);max-width:70ch}
.zp0157 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0157 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0157 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Gill Sans, Avenir, Arial, sans-serif;margin-bottom:18px}
.zp0157 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0157 .contact .eyebrow{color:var(--bg)}
.zp0157 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0157 .contactMeta{display:grid;gap:10px}
.zp0157 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0157 .heroCopy{animation:enter-156 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-156{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0157 .hero{min-height:auto}
.zp0157 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0157 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0157 .nav nav{display:none}
.zp0157 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0157 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0157 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0157 .mobileMenu nav a{padding:10px 8px}
.zp0157 .hero,.zp0157 .floatingHero{grid-template-columns:1fr}
.zp0157 .section,.zp0157 .sectionTitle,.zp0157 .contact{grid-template-columns:1fr}
.zp0157 .testimonial{grid-template-columns:1fr}
.zp0157 .teamGrid{grid-template-columns:1fr 1fr}
.zp0157 .section{display:block}}
@media(max-width:430px){.zp0157{font-size:16px}
.zp0157 .hero,.zp0157 .section,.zp0157 .contact{padding-left:18px;padding-right:18px}
.zp0157 .serviceGrid,.zp0157 .proof,.zp0157 .teamGrid{grid-template-columns:1fr}
.zp0157 h1{font-size:clamp(42px,14vw,70px)}}

.zp0157 .heroActions a,.zp0157 .primary,.zp0157 .ctaBtn,.zp0157 .btnPrimary,.zp0157 .schedule>a,.zp0157 .newsletter>a{transition:all .2s ease}
.zp0157 .heroActions a:hover,.zp0157 .primary:hover,.zp0157 .ctaBtn:hover,.zp0157 .btnPrimary:hover{
  transform:scale(1.05) rotate(-1deg)
}
.zp0157 nav a,.zp0157 .nav a,.zp0157 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0157 nav a:hover,.zp0157 .nav a:hover,.zp0157 .footer a:hover{
  color:var(--primary)
}
.zp0157 .serviceGrid article,.zp0157 .projectCard,.zp0157 .teamCard,.zp0157 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0157 .serviceGrid article:hover,.zp0157 .projectCard:hover,.zp0157 .teamCard:hover,.zp0157 .bentoCard:hover{
  transform:scale(1.02) rotate(.5deg)
}
@media(prefers-reduced-motion:reduce){.zp0157 *,.zp0157 *::before,.zp0157 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0157 a,.zp0157 button,.zp0157 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">56</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Playful / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
