import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0046-physio-brutalism", "family": "Brutalism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|service-catalogue|newsletter>testimonial>schedule>services>proof|circular|warm-editorial", "industry": "physio", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "service-catalogue"};

export default function Template0046({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const industryLabel = "Physiotherapy studio";
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const testimonialName = "Stone & Pine client";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5cc8";
  return <main className="zp0046" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0046{--bg:#18151d;--fg:#f9f4ff;--primary:#ff5cc8;--primary-fg:#050505;--secondary:#7c6cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:3px;--shadow:none;--max:1120px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0046 *{box-sizing:border-box}
.zp0046 a{color:inherit;text-decoration:none}
.zp0046 h1,.zp0046 h2,.zp0046 h3,.zp0046 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0046 img{max-width:100%;display:block}
.zp0046 button,.zp0046 a{-webkit-tap-highlight-color:transparent}
.zp0046 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0046 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0046 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0046 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0046 .nav.cluster{align-items:flex-end}
.zp0046 .mobileMenu{display:none}
.zp0046 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0046 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0046 .eyebrow,.zp0046 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0046 h1{font-size:clamp(48px,5.8vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0046 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0046 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0046 .heroActions a,.zp0046 .schedule>a,.zp0046 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0046 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0046 .visual,.zp0046 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0046 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0046 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0046 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0046 .heroPhoto{object-fit:cover}
.zp0046 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0046 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0046 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0046 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0046 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0046 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0046 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0046 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0046 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0046 .serviceGrid p{color:var(--muted)}
.zp0046 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0046 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0046 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0046 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0046 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0046 .testimonial>div{align-self:end}
.zp0046 .testimonial span{display:block;opacity:.7}
.zp0046 details{border-top:1px solid var(--border);padding:20px 0}
.zp0046 details summary{font-weight:800;cursor:pointer}
.zp0046 details p{color:var(--muted);max-width:70ch}
.zp0046 .schedule,.zp0046 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0046 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0046 .contact .eyebrow{color:var(--bg)}
.zp0046 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0046 .contactMeta{display:grid;gap:10px}
.zp0046 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0046 .heroActions a,.zp0046 .serviceGrid article{box-shadow:8px 8px 0 var(--fg)}
.zp0046 h1{text-transform:uppercase}
.zp0046 .heroCopy{animation:enter-45 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-45{from{opacity:0;transform:translateY(23px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0046 .hero{min-height:auto}
.zp0046 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0046 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0046 .nav nav{display:none}
.zp0046 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0046 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0046 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0046 .mobileMenu nav a{padding:10px 8px}
.zp0046 .hero,.zp0046 .carouselHero{grid-template-columns:1fr}
.zp0046 .section,.zp0046 .sectionTitle,.zp0046 .contact{grid-template-columns:1fr}
.zp0046 .testimonial{grid-template-columns:1fr}
.zp0046 .section{display:block}}
@media(max-width:430px){.zp0046{font-size:16px}
.zp0046 .hero,.zp0046 .section,.zp0046 .contact{padding-left:18px;padding-right:18px}
.zp0046 .serviceGrid,.zp0046 .proof{grid-template-columns:1fr}
.zp0046 h1{font-size:clamp(42px,14vw,70px)}}

.zp0046 .heroActions a,.zp0046 .primary,.zp0046 .ctaBtn,.zp0046 .btnPrimary,.zp0046 .schedule>a,.zp0046 .newsletter>a{transition:all .2s ease}
.zp0046 .heroActions a:hover,.zp0046 .primary:hover,.zp0046 .ctaBtn:hover,.zp0046 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:translate(-3px,-3px)
}
.zp0046 nav a,.zp0046 .nav a,.zp0046 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0046 nav a:hover,.zp0046 .nav a:hover,.zp0046 .footer a:hover{
  text-decoration:underline
}
.zp0046 .serviceGrid article,.zp0046 .projectCard,.zp0046 .teamCard,.zp0046 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0046 .serviceGrid article:hover,.zp0046 .projectCard:hover,.zp0046 .teamCard:hover,.zp0046 .bentoCard:hover{
  transform:translate(-4px,-4px);box-shadow:4px 4px 0 var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0046 *,.zp0046 *::before,.zp0046 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0046 a,.zp0046 button,.zp0046 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">45</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Brutalism / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
