"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0673-photography-claymorphism", "family": "Claymorphism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|magazine-sections|proof>manifesto>team>services>materials|square-editorial|luxury-contrast", "industry": "photography", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "magazine-sections"};

export default function Template0673({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Photography Studio");
  const headline = String(content.headline || "Photography with a clear visual language and production that stays calm on set.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Editorial", "Commercial", "Portraits", "Campaigns", "Licensing"];
  const industryLabel = "Photography studio";
  const serviceNotes = ["Commercial and editorial commissions with same-day turnaround for press deadlines.", "Natural-light and studio sessions available with full styling coordination.", "Wedding coverage: two photographers, full day, premium album design and print.", "Brand photography packages with art direction, prop sourcing, and retouching.", "Archival printing on fine art paper — limited editions signed and numbered."];
  const proofPoints = ["Published: The Sunday Times, FT Weekend", "35mm and digital capability", "2-week edit turnaround guaranteed", "RAW files included"];
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0673" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0673{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Inter, Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0673 *{box-sizing:border-box}
.zp0673 a{color:inherit;text-decoration:none}
.zp0673 h1,.zp0673 h2,.zp0673 h3,.zp0673 blockquote{font-family:Didot, Georgia, serif;text-wrap:balance}
.zp0673 img{max-width:100%;display:block}
.zp0673 button,.zp0673 a{-webkit-tap-highlight-color:transparent}
.zp0673 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0673 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0673 .nav strong{font-family:Didot, Georgia, serif;font-size:18px}
.zp0673 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0673 .mobileMenu{display:none}
.zp0673 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0673 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0673 .eyebrow,.zp0673 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0673 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0673 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0673 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0673 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0673 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0673 .typeOnly{grid-template-columns:1fr .28fr}
.zp0673 .oversizeWord{font-family:Didot, Georgia, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0673 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0673 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0673 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0673 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0673 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0673 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0673 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0673 .serviceGrid p{color:var(--muted)}
.zp0673 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0673 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0673 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0673 details{border-top:1px solid var(--border);padding:20px 0}
.zp0673 details summary{font-weight:800;cursor:pointer}
.zp0673 details p{color:var(--muted);max-width:70ch}
.zp0673 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0673 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0673 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Didot, Georgia, serif;margin-bottom:18px}
.zp0673 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0673 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0673 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0673 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Didot, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0673 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0673 .contact .eyebrow{color:var(--bg)}
.zp0673 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0673 .contactMeta{display:grid;gap:10px}
.zp0673 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0673 .section{column-rule:1px solid var(--border)}
.zp0673 .sectionTitle h2{max-width:18ch}
.zp0673 .heroCopy{animation:enter-672 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-672{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0673 .hero{min-height:auto}
.zp0673 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0673 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0673 .nav nav{display:none}
.zp0673 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0673 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0673 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0673 .mobileMenu nav a{padding:10px 8px}
.zp0673 .hero{grid-template-columns:1fr}
.zp0673 .section,.zp0673 .sectionTitle,.zp0673 .contact{grid-template-columns:1fr}
.zp0673 .teamGrid{grid-template-columns:1fr 1fr}
.zp0673 .section{display:block}}
@media(max-width:430px){.zp0673{font-size:16px}
.zp0673 .hero,.zp0673 .section,.zp0673 .contact{padding-left:18px;padding-right:18px}
.zp0673 .serviceGrid,.zp0673 .proof,.zp0673 .teamGrid{grid-template-columns:1fr}
.zp0673 h1{font-size:clamp(42px,14vw,70px)}}

.zp0673 .heroActions a,.zp0673 .primary,.zp0673 .ctaBtn,.zp0673 .btnPrimary,.zp0673 .schedule>a,.zp0673 .newsletter>a{transition:all .2s ease}
.zp0673 .heroActions a:hover,.zp0673 .primary:hover,.zp0673 .ctaBtn:hover,.zp0673 .btnPrimary:hover{
  transform:translateY(-3px) scale(1.02);box-shadow:0 12px 28px color-mix(in srgb,var(--primary) 35%,transparent)
}
.zp0673 nav a,.zp0673 .nav a,.zp0673 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0673 nav a:hover,.zp0673 .nav a:hover,.zp0673 .footer a:hover{
  color:var(--primary)
}
.zp0673 .serviceGrid article,.zp0673 .projectCard,.zp0673 .teamCard,.zp0673 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0673 .serviceGrid article:hover,.zp0673 .projectCard:hover,.zp0673 .teamCard:hover,.zp0673 .bentoCard:hover{
  transform:translateY(-4px) scale(1.01)
}
@media(prefers-reduced-motion:reduce){.zp0673 *,.zp0673 *::before,.zp0673 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0673 a,.zp0673 button,.zp0673 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Claymorphism / magazine-sections</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
