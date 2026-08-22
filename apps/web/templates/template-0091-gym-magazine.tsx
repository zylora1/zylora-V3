"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0091-gym-magazine", "family": "Magazine", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|two-speed-scroll|story>gallery>products>proof>services|capsule|organic-modern", "industry": "gym", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "two-speed-scroll"};

export default function Template0091({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas Training Gym");
  const headline = String(content.headline || "Coaching-led training for people who want structure, progress, and accountability.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strength coaching", "Small-group training", "Open gym", "Mobility sessions", "Performance testing"];
  const industryLabel = "Training gym";
  const serviceNotes = ["Open 24 hours so your schedule drives your training, not ours.", "Strength, cardio, and functional zones across 600+ sq metres of equipment.", "Personal training with coaches who build programmes around your goals, not templates.", "Monthly fitness assessments to track progress and adjust your plan.", "Recovery studio with sauna, ice bath, and stretch space included in membership."];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const storyQuote = "\u201cCoaching-led training for people who want structure, progress, and accountability.\u201d";
  const storyBody = "Atlas Training Gym is presented as a real working training gym, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0091" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0091{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0091 *{box-sizing:border-box}
.zp0091 a{color:inherit;text-decoration:none}
.zp0091 h1,.zp0091 h2,.zp0091 h3,.zp0091 blockquote{font-family:Optima, Candara, sans-serif;text-wrap:balance}
.zp0091 img{max-width:100%;display:block}
.zp0091 button,.zp0091 a{-webkit-tap-highlight-color:transparent}
.zp0091 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0091 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0091 .nav strong{font-family:Optima, Candara, sans-serif;font-size:18px}
.zp0091 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0091 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0091 .nav.statement>a{justify-self:end}
.zp0091 .mobileMenu{display:none}
.zp0091 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0091 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0091 .eyebrow,.zp0091 .sectionTitle>span,.zp0091 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0091 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0091 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0091 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0091 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0091 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0091 .visual,.zp0091 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0091 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0091 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0091 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0091 .heroPhoto{object-fit:cover}
.zp0091 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0091 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Optima, Candara, sans-serif;opacity:.08}
.zp0091 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0091 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0091 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0091 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0091 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0091 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0091 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0091 .serviceGrid p{color:var(--muted)}
.zp0091 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0091 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0091 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0091 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0091 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0091 .story p{color:var(--muted)}
.zp0091 details{border-top:1px solid var(--border);padding:20px 0}
.zp0091 details summary{font-weight:800;cursor:pointer}
.zp0091 details p{color:var(--muted);max-width:70ch}
.zp0091 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0091 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0091 .galleryGrid>*:first-child{grid-row:1/3}
.zp0091 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0091 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0091 .g2,.zp0091 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0091 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0091 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0091 .p1,.zp0091 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0091 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0091 .contact .eyebrow{color:var(--bg)}
.zp0091 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0091 .contactMeta{display:grid;gap:10px}
.zp0091 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0091 .heroCopy{animation:enter-90 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-90{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0091 .hero{min-height:auto}
.zp0091 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0091 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0091 .nav nav{display:none}
.zp0091 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0091 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0091 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0091 .mobileMenu nav a{padding:10px 8px}
.zp0091 .hero,.zp0091 .stripHero{grid-template-columns:1fr}
.zp0091 .section,.zp0091 .sectionTitle,.zp0091 .story,.zp0091 .contact{grid-template-columns:1fr}
.zp0091 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0091 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0091 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0091 .section{display:block}}
@media(max-width:430px){.zp0091{font-size:16px}
.zp0091 .hero,.zp0091 .section,.zp0091 .contact{padding-left:18px;padding-right:18px}
.zp0091 .serviceGrid,.zp0091 .proof,.zp0091 .collectionGrid{grid-template-columns:1fr}
.zp0091 h1{font-size:clamp(42px,14vw,70px)}
.zp0091 .galleryGrid{grid-template-columns:1fr}
.zp0091 .galleryGrid>*:first-child{grid-column:auto}
.zp0091 .nav.statement{grid-template-columns:1fr auto}
.zp0091 .nav.statement>span:first-child{display:none}}

.zp0091 .heroActions a,.zp0091 .primary,.zp0091 .ctaBtn,.zp0091 .btnPrimary,.zp0091 .schedule>a,.zp0091 .newsletter>a{transition:all .2s ease}
.zp0091 .heroActions a:hover,.zp0091 .primary:hover,.zp0091 .ctaBtn:hover,.zp0091 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0091 nav a,.zp0091 .nav a,.zp0091 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0091 nav a:hover,.zp0091 .nav a:hover,.zp0091 .footer a:hover{
  color:var(--primary)
}
.zp0091 .serviceGrid article,.zp0091 .projectCard,.zp0091 .teamCard,.zp0091 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0091 .serviceGrid article:hover,.zp0091 .projectCard:hover,.zp0091 .teamCard:hover,.zp0091 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0091 *,.zp0091 *::before,.zp0091 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0091 a,.zp0091 button,.zp0091 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">90</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Magazine / two-speed-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
