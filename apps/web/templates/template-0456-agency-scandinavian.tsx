import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0456-agency-scandinavian", "family": "Scandinavian", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|property-led|proof>testimonial>materials>story>services>pricing>location|micro-radius|terminal", "industry": "agency", "hero": "monumental-type", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0456({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Creative Agency");
  const headline = String(content.headline || "Sharp strategy and distinctive creative work built to earn attention and action.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Brand strategy", "Web design", "Campaigns", "Content", "Production"];
  const serviceNotes = ["Strategy-led creative: we understand your market before designing anything.", "Integrated teams — strategy, design, and engineering in the same room.", "Brand systems that work across print, digital, and environmental without being rigid.", "Campaign measurement built in: we track outcomes, not just outputs.", "Retained partnerships with monthly delivery and quarterly direction reviews."];
  const proofPoints = ["D&AD and Cannes Lions awarded", "Average client tenure: 4.2 years", "ISO 27001 data security", "ISBA member"];
  const storyQuote = "\u201cSharp strategy and distinctive creative work built to earn attention and action.\u201d";
  const storyBody = "Common Creative Agency is presented as a real working creative agency, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They killed our first concept because it wouldn't work — then delivered something far better. That's what a good agency does.";
  const testimonialName = "Civic client";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative agency / Project A", "Creative agency / Project B", "Creative agency / Project C", "Creative agency / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Sharp strategy and distinctive creative work built to earn attention and action. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0456" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0456{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0456 *{box-sizing:border-box}
.zp0456 a{color:inherit;text-decoration:none}
.zp0456 h1,.zp0456 h2,.zp0456 h3,.zp0456 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0456 img{max-width:100%;display:block}
.zp0456 button,.zp0456 a{-webkit-tap-highlight-color:transparent}
.zp0456 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0456 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0456 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0456 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0456 .mobileMenu{display:none}
.zp0456 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0456 .eyebrow,.zp0456 .sectionTitle>span,.zp0456 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0456 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0456 .monumentalHero{display:block}
.zp0456 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0456 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0456 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0456 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0456 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0456 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0456 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0456 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0456 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0456 .serviceGrid p{color:var(--muted)}
.zp0456 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0456 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0456 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0456 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0456 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0456 .story p{color:var(--muted)}
.zp0456 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0456 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0456 .testimonial>div{align-self:end}
.zp0456 .testimonial span{display:block;opacity:.7}
.zp0456 details{border-top:1px solid var(--border);padding:20px 0}
.zp0456 details summary{font-weight:800;cursor:pointer}
.zp0456 details p{color:var(--muted);max-width:70ch}
.zp0456 .priceRows{border-top:1px solid var(--border)}
.zp0456 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0456 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0456 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0456 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0456 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0456 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0456 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0456 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0456 .contact .eyebrow{color:var(--bg)}
.zp0456 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0456 .contactMeta{display:grid;gap:10px}
.zp0456 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-455{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0456 .hero{min-height:auto}
.zp0456 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0456 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0456 .nav nav{display:none}
.zp0456 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0456 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0456 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0456 .mobileMenu nav a{padding:10px 8px}
.zp0456 .hero{grid-template-columns:1fr}
.zp0456 .section,.zp0456 .sectionTitle,.zp0456 .story,.zp0456 .location,.zp0456 .contact{grid-template-columns:1fr}
.zp0456 .testimonial{grid-template-columns:1fr}
.zp0456 .section{display:block}}
@media(max-width:430px){.zp0456{font-size:16px}
.zp0456 .hero,.zp0456 .section,.zp0456 .contact{padding-left:18px;padding-right:18px}
.zp0456 .serviceGrid,.zp0456 .proof{grid-template-columns:1fr}
.zp0456 h1{font-size:clamp(42px,14vw,70px)}
.zp0456 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0456 .priceRows article{grid-template-columns:1fr}
.zp0456 .monumentalBody{grid-template-columns:1fr}}

.zp0456 .heroActions a,.zp0456 .primary,.zp0456 .ctaBtn,.zp0456 .btnPrimary,.zp0456 .schedule>a,.zp0456 .newsletter>a{transition:all .2s ease}
.zp0456 .heroActions a:hover,.zp0456 .primary:hover,.zp0456 .ctaBtn:hover,.zp0456 .btnPrimary:hover{
  opacity:.75
}
.zp0456 nav a,.zp0456 .nav a,.zp0456 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0456 nav a:hover,.zp0456 .nav a:hover,.zp0456 .footer a:hover{
  opacity:.65
}
.zp0456 .serviceGrid article,.zp0456 .projectCard,.zp0456 .teamCard,.zp0456 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0456 .serviceGrid article:hover,.zp0456 .projectCard:hover,.zp0456 .teamCard:hover,.zp0456 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0456 *,.zp0456 *::before,.zp0456 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0456 a,.zp0456 button,.zp0456 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Schedule a consultation</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
