"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0613-jewellery-playful", "family": "Playful", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|editorial-spine|team>proof>testimonial>services>community|ticket-edge|museum", "industry": "jewellery", "hero": "testimonial-led", "navigation": "lower-third", "layout": "editorial-spine"};

export default function Template0613({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Jewellery Studio");
  const headline = String(content.headline || "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Fine jewellery", "Engagement", "Bespoke", "Repairs", "Private viewings"];
  const industryLabel = "Jewellery studio";
  const serviceNotes = ["Bespoke commissions from sketch to setting — your brief, your story, our craft.", "Ethically sourced gemstones with Kimberley Process certification as standard.", "In-house goldsmith: repairs, resizing, and remounting while you wait in most cases.", "Valuation service for insurance and probate, issued on headed paper.", "Engraving available on most pieces — personal inscriptions completed in-house."];
  const proofPoints = ["NAJ member", "Hallmarked at Birmingham Assay", "Lifetime warranty on settings", "Conflict-free certification"];
  const storyBody = "Aster Jewellery Studio is presented as a real working jewellery studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They remodelled my grandmother's ring into something I actually wear every day. The craftsmanship is extraordinary.";
  const testimonialName = "Arc client";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Jewellery studio / Project A", "Jewellery studio / Project B", "Jewellery studio / Project C", "Jewellery studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Fine pieces designed for daily wear, milestones, and a lifetime beyond the first moment. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0613" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0613{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0613 *{box-sizing:border-box}
.zp0613 a{color:inherit;text-decoration:none}
.zp0613 h1,.zp0613 h2,.zp0613 h3,.zp0613 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0613 img{max-width:100%;display:block}
.zp0613 button,.zp0613 a{-webkit-tap-highlight-color:transparent}
.zp0613 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0613 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0613 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0613 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0613 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0613 .mobileMenu{display:none}
.zp0613 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0613 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0613 .eyebrow,.zp0613 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0613 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0613 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0613 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0613 .heroActions a,.zp0613 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0613 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0613 .quoteHero{grid-template-columns:1fr 1fr}
.zp0613 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0613 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0613 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0613 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0613 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0613 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0613 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0613 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0613 .serviceGrid p{color:var(--muted)}
.zp0613 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0613 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0613 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0613 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0613 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0613 .testimonial>div{align-self:end}
.zp0613 .testimonial span{display:block;opacity:.7}
.zp0613 details{border-top:1px solid var(--border);padding:20px 0}
.zp0613 details summary{font-weight:800;cursor:pointer}
.zp0613 details p{color:var(--muted);max-width:70ch}
.zp0613 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0613 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0613 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Gill Sans, Avenir, Arial, sans-serif;margin-bottom:18px}
.zp0613 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0613 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0613 .contact .eyebrow{color:var(--bg)}
.zp0613 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0613 .contactMeta{display:grid;gap:10px}
.zp0613 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0613 .heroCopy{animation:enter-612 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-612{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0613 .hero{min-height:auto}
.zp0613 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0613 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0613 .nav nav{display:none}
.zp0613 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0613 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0613 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0613 .mobileMenu nav a{padding:10px 8px}
.zp0613 .hero,.zp0613 .quoteHero{grid-template-columns:1fr}
.zp0613 .section,.zp0613 .sectionTitle,.zp0613 .contact{grid-template-columns:1fr}
.zp0613 .testimonial{grid-template-columns:1fr}
.zp0613 .teamGrid{grid-template-columns:1fr 1fr}
.zp0613 .section{display:block}}
@media(max-width:430px){.zp0613{font-size:16px}
.zp0613 .hero,.zp0613 .section,.zp0613 .contact{padding-left:18px;padding-right:18px}
.zp0613 .serviceGrid,.zp0613 .proof,.zp0613 .teamGrid{grid-template-columns:1fr}
.zp0613 h1{font-size:clamp(42px,14vw,70px)}}

.zp0613 .heroActions a,.zp0613 .primary,.zp0613 .ctaBtn,.zp0613 .btnPrimary,.zp0613 .schedule>a,.zp0613 .newsletter>a{transition:all .2s ease}
.zp0613 .heroActions a:hover,.zp0613 .primary:hover,.zp0613 .ctaBtn:hover,.zp0613 .btnPrimary:hover{
  transform:scale(1.05) rotate(-1deg)
}
.zp0613 nav a,.zp0613 .nav a,.zp0613 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0613 nav a:hover,.zp0613 .nav a:hover,.zp0613 .footer a:hover{
  color:var(--primary)
}
.zp0613 .serviceGrid article,.zp0613 .projectCard,.zp0613 .teamCard,.zp0613 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0613 .serviceGrid article:hover,.zp0613 .projectCard:hover,.zp0613 .teamCard:hover,.zp0613 .bentoCard:hover{
  transform:scale(1.02) rotate(.5deg)
}
@media(prefers-reduced-motion:reduce){.zp0613 *,.zp0613 *::before,.zp0613 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0613 a,.zp0613 button,.zp0613 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Playful / editorial-spine</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
