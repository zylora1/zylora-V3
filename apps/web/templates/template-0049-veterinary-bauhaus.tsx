"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0049-veterinary-bauhaus", "family": "Bauhaus", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|collection-led|newsletter>testimonial>comparison>proof>services|square-editorial|luxury-contrast", "industry": "veterinary", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "collection-led"};

export default function Template0049({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Veterinary Clinic");
  const headline = String(content.headline || "Modern veterinary care that keeps owners informed at every step.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Wellness exams", "Vaccinations", "Dental care", "Diagnostics", "Urgent care"];
  const serviceNotes = ["Comprehensive wellness exams covering nutrition, behaviour, and preventive care.", "Gentle handling protocols that reduce stress for anxious patients.", "In-house laboratory for fast results — no waiting days for basic bloods.", "Dental health programmes that protect your pet's overall wellbeing.", "End-of-life care provided with dignity and full family support."];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const testimonialName = "Mosaic client";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7f9cff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0049" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0049{--bg:#10151c;--fg:#edf3f8;--primary:#7f9cff;--primary-fg:#050505;--secondary:#a0e36d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0049 *{box-sizing:border-box}
.zp0049 a{color:inherit;text-decoration:none}
.zp0049 h1,.zp0049 h2,.zp0049 h3,.zp0049 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0049 img{max-width:100%;display:block}
.zp0049 button,.zp0049 a{-webkit-tap-highlight-color:transparent}
.zp0049 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0049 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0049 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0049 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0049 .mobileMenu{display:none}
.zp0049 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0049 .eyebrow,.zp0049 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0049 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0049 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0049 .visual,.zp0049 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0049 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0049 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0049 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0049 .heroPhoto{object-fit:cover}
.zp0049 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0049 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0049 .coverCaption{align-self:end}
.zp0049 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0049 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0049 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0049 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0049 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0049 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0049 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0049 .serviceGrid p{color:var(--muted)}
.zp0049 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0049 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0049 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0049 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0049 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0049 .testimonial>div{align-self:end}
.zp0049 .testimonial span{display:block;opacity:.7}
.zp0049 details{border-top:1px solid var(--border);padding:20px 0}
.zp0049 details summary{font-weight:800;cursor:pointer}
.zp0049 details p{color:var(--muted);max-width:70ch}
.zp0049 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0049 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0049 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0049 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0049 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0049 .contact .eyebrow{color:var(--bg)}
.zp0049 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0049 .contactMeta{display:grid;gap:10px}
.zp0049 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-48{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0049 .hero{min-height:auto}
.zp0049 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0049 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0049 .nav nav{display:none}
.zp0049 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0049 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0049 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0049 .mobileMenu nav a{padding:10px 8px}
.zp0049 .hero,.zp0049 .coverHero{grid-template-columns:1fr}
.zp0049 .section,.zp0049 .sectionTitle,.zp0049 .contact{grid-template-columns:1fr}
.zp0049 .testimonial{grid-template-columns:1fr}
.zp0049 .section{display:block}}
@media(max-width:430px){.zp0049{font-size:16px}
.zp0049 .hero,.zp0049 .section,.zp0049 .contact{padding-left:18px;padding-right:18px}
.zp0049 .serviceGrid,.zp0049 .proof,.zp0049 .compareGrid{grid-template-columns:1fr}
.zp0049 h1{font-size:clamp(42px,14vw,70px)}}

.zp0049 .heroActions a,.zp0049 .primary,.zp0049 .ctaBtn,.zp0049 .btnPrimary,.zp0049 .schedule>a,.zp0049 .newsletter>a{transition:all .2s ease}
.zp0049 .heroActions a:hover,.zp0049 .primary:hover,.zp0049 .ctaBtn:hover,.zp0049 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0049 nav a,.zp0049 .nav a,.zp0049 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0049 nav a:hover,.zp0049 .nav a:hover,.zp0049 .footer a:hover{
  color:var(--primary)
}
.zp0049 .serviceGrid article,.zp0049 .projectCard,.zp0049 .teamCard,.zp0049 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0049 .serviceGrid article:hover,.zp0049 .projectCard:hover,.zp0049 .teamCard:hover,.zp0049 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0049 *,.zp0049 *::before,.zp0049 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0049 a,.zp0049 button,.zp0049 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0049</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">48</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
