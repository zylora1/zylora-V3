import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0936-manufacturing-newspaper", "family": "Newspaper", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|catalogue-table|location>community>press>proof>manifesto>process>services|micro-radius|terminal", "industry": "manufacturing", "hero": "monumental-type", "navigation": "corner-dock", "layout": "catalogue-table"};

export default function Template0936({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Manufacturer");
  const headline = String(content.headline || "Precision manufacturing with traceable quality and dependable production planning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Engineering", "Production", "Quality control", "Supply chain", "Custom fabrication"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Common Manufacturer is presented as a real working manufacturer, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Manufacturer / Project A", "Manufacturer / Project B", "Manufacturer / Project C", "Manufacturer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Precision manufacturing with traceable quality and dependable production planning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0936" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0936{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0936 *{box-sizing:border-box}
.zp0936 a{color:inherit;text-decoration:none}
.zp0936 h1,.zp0936 h2,.zp0936 h3,.zp0936 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0936 img{max-width:100%;display:block}
.zp0936 button,.zp0936 a{-webkit-tap-highlight-color:transparent}
.zp0936 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0936 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0936 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0936 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0936 .mobileMenu{display:none}
.zp0936 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0936 .eyebrow,.zp0936 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0936 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0936 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0936 .monumentalHero{display:block}
.zp0936 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0936 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0936 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0936 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0936 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0936 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0936 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0936 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0936 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0936 .serviceGrid p{color:var(--muted)}
.zp0936 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0936 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0936 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0936 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0936 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0936 details{border-top:1px solid var(--border);padding:20px 0}
.zp0936 details summary{font-weight:800;cursor:pointer}
.zp0936 details p{color:var(--muted);max-width:70ch}
.zp0936 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0936 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0936 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0936 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0936 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0936 .awards>div{max-width:800px;margin-left:auto}
.zp0936 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0936 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0936 .contact .eyebrow{color:var(--bg)}
.zp0936 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0936 .contactMeta{display:grid;gap:10px}
.zp0936 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0936{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0936 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
@keyframes enter-935{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0936 .hero{min-height:auto}
.zp0936 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0936 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0936 .nav nav{display:none}
.zp0936 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0936 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0936 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0936 .mobileMenu nav a{padding:10px 8px}
.zp0936 .hero{grid-template-columns:1fr}
.zp0936 .section,.zp0936 .sectionTitle,.zp0936 .location,.zp0936 .contact{grid-template-columns:1fr}
.zp0936 .section{display:block}}
@media(max-width:430px){.zp0936{font-size:16px}
.zp0936 .hero,.zp0936 .section,.zp0936 .contact{padding-left:18px;padding-right:18px}
.zp0936 .serviceGrid,.zp0936 .proof{grid-template-columns:1fr}
.zp0936 h1{font-size:clamp(42px,14vw,70px)}
.zp0936 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0936 .monumentalBody{grid-template-columns:1fr}}

.zp0936 .heroActions a,.zp0936 .primary,.zp0936 .ctaBtn,.zp0936 .btnPrimary,.zp0936 .schedule>a,.zp0936 .newsletter>a{transition:all .2s ease}
.zp0936 .heroActions a:hover,.zp0936 .primary:hover,.zp0936 .ctaBtn:hover,.zp0936 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0936 nav a,.zp0936 .nav a,.zp0936 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0936 nav a:hover,.zp0936 .nav a:hover,.zp0936 .footer a:hover{
  text-decoration:underline
}
.zp0936 .serviceGrid article,.zp0936 .projectCard,.zp0936 .teamCard,.zp0936 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0936 .serviceGrid article:hover,.zp0936 .projectCard:hover,.zp0936 .teamCard:hover,.zp0936 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0936 *,.zp0936 *::before,.zp0936 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0936 a,.zp0936 button,.zp0936 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Request a quote</a></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
