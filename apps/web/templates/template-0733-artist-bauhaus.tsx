"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0733-artist-bauhaus", "family": "Bauhaus", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|collection-led|testimonial>story>proof>community>services|hard-outline|museum", "industry": "artist", "hero": "floating-panels", "navigation": "compact-floating", "layout": "collection-led"};

export default function Template0733({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA spacious digital archive for work, exhibitions, process, and current enquiries.\u201d";
  const storyBody = "Rook Artist Studio is presented as a real working artist studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Morrow client";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  const reduceMotion = useReducedMotion();
  return <motion.main initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.55,ease:[0.22,1,0.36,1]}} className="zp0733" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0733{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0733 *{box-sizing:border-box}
.zp0733 a{color:inherit;text-decoration:none}
.zp0733 h1,.zp0733 h2,.zp0733 h3,.zp0733 blockquote{font-family:Gill Sans, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0733 img{max-width:100%;display:block}
.zp0733 button,.zp0733 a{-webkit-tap-highlight-color:transparent}
.zp0733 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0733 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0733 .nav strong{font-family:Gill Sans, Avenir, Arial, sans-serif;font-size:18px}
.zp0733 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0733 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0733 .mobileMenu{display:none}
.zp0733 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0733 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0733 .eyebrow,.zp0733 .sectionTitle>span,.zp0733 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0733 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0733 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0733 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0733 .heroActions a,.zp0733 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0733 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0733 .visual,.zp0733 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0733 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0733 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0733 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0733 .heroPhoto{object-fit:cover}
.zp0733 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0733 .floatStack{position:relative;min-height:500px}
.zp0733 .floatStack>*{position:absolute}
.zp0733 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0733 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0733 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0733 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0733 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0733 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0733 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0733 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0733 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0733 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0733 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0733 .serviceGrid p{color:var(--muted)}
.zp0733 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0733 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0733 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0733 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0733 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0733 .story p{color:var(--muted)}
.zp0733 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0733 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0733 .testimonial>div{align-self:end}
.zp0733 .testimonial span{display:block;opacity:.7}
.zp0733 details{border-top:1px solid var(--border);padding:20px 0}
.zp0733 details summary{font-weight:800;cursor:pointer}
.zp0733 details p{color:var(--muted);max-width:70ch}
.zp0733 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0733 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0733 .contact .eyebrow{color:var(--bg)}
.zp0733 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0733 .contactMeta{display:grid;gap:10px}
.zp0733 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0733 .heroCopy{animation:enter-732 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-732{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0733 .hero{min-height:auto}
.zp0733 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0733 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0733 .nav nav{display:none}
.zp0733 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0733 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0733 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0733 .mobileMenu nav a{padding:10px 8px}
.zp0733 .hero,.zp0733 .floatingHero{grid-template-columns:1fr}
.zp0733 .section,.zp0733 .sectionTitle,.zp0733 .story,.zp0733 .contact{grid-template-columns:1fr}
.zp0733 .testimonial{grid-template-columns:1fr}
.zp0733 .section{display:block}}
@media(max-width:430px){.zp0733{font-size:16px}
.zp0733 .hero,.zp0733 .section,.zp0733 .contact{padding-left:18px;padding-right:18px}
.zp0733 .serviceGrid,.zp0733 .proof{grid-template-columns:1fr}
.zp0733 h1{font-size:clamp(42px,14vw,70px)}}

.zp0733 .heroActions a,.zp0733 .primary,.zp0733 .ctaBtn,.zp0733 .btnPrimary,.zp0733 .schedule>a,.zp0733 .newsletter>a{transition:all .2s ease}
.zp0733 .heroActions a:hover,.zp0733 .primary:hover,.zp0733 .ctaBtn:hover,.zp0733 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0733 nav a,.zp0733 .nav a,.zp0733 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0733 nav a:hover,.zp0733 .nav a:hover,.zp0733 .footer a:hover{
  color:var(--primary)
}
.zp0733 .serviceGrid article,.zp0733 .projectCard,.zp0733 .teamCard,.zp0733 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0733 .serviceGrid article:hover,.zp0733 .projectCard:hover,.zp0733 .teamCard:hover,.zp0733 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0733 *,.zp0733 *::before,.zp0733 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0733 a,.zp0733 button,.zp0733 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">32</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / collection-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </motion.main>;
}
