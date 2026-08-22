import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0408-finance-swiss-design", "family": "Swiss Design", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|stacked-posters|location>integrations>programmes>services>press>process>proof|micro-radius|terminal", "industry": "finance", "hero": "video-frame", "navigation": "corner-dock", "layout": "stacked-posters"};

export default function Template0408({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Financial Advisory");
  const headline = String(content.headline || "Clear financial decisions built around goals, risk, and the life behind the numbers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Financial planning", "Investments", "Retirement", "Estate strategy", "Business-owner planning"];
  const industryLabel = "Financial advisory";
  const serviceNotes = ["Whole-of-market mortgage advice covering 90+ lenders, not a panel.", "Protection review included with every mortgage: life, income, and critical illness covered.", "Business lending specialists for commercial mortgages, bridging, and development finance.", "First-time buyer programme with dedicated support from application to keys.", "Annual mortgage review: we check your rate automatically and flag remortgage opportunities."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FCA authorised and regulated", "Whole-of-market access", "No broker fee to clients", "95% recommend us"];
  const testimonial = "My mortgage application was complex — self-employed, irregular income, quirky property. They found a lender on the first search.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Financial advisory / Project A", "Financial advisory / Project B", "Financial advisory / Project C", "Financial advisory / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Clear financial decisions built around goals, risk, and the life behind the numbers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0408" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0408{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0408 *{box-sizing:border-box}
.zp0408 a{color:inherit;text-decoration:none}
.zp0408 h1,.zp0408 h2,.zp0408 h3,.zp0408 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0408 img{max-width:100%;display:block}
.zp0408 button,.zp0408 a{-webkit-tap-highlight-color:transparent}
.zp0408 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0408 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0408 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0408 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0408 .mobileMenu{display:none}
.zp0408 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0408 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0408 .eyebrow,.zp0408 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0408 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0408 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0408 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0408 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0408 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0408 .visual,.zp0408 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0408 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0408 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0408 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0408 .heroPhoto{object-fit:cover}
.zp0408 .videoHero{grid-template-columns:1fr 1fr}
.zp0408 .videoFrame{position:relative}
.zp0408 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0408 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0408 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0408 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0408 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0408 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0408 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0408 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0408 .serviceGrid p{color:var(--muted)}
.zp0408 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0408 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0408 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0408 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0408 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0408 details{border-top:1px solid var(--border);padding:20px 0}
.zp0408 details summary{font-weight:800;cursor:pointer}
.zp0408 details p{color:var(--muted);max-width:70ch}
.zp0408 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0408 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0408 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0408 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0408 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0408 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0408 .awards>div{max-width:800px;margin-left:auto}
.zp0408 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0408 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0408 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0408 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0408 .contact .eyebrow{color:var(--bg)}
.zp0408 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0408 .contactMeta{display:grid;gap:10px}
.zp0408 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0408 .heroCopy{animation:enter-407 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-407{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0408 .hero{min-height:auto}
.zp0408 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0408 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0408 .nav nav{display:none}
.zp0408 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0408 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0408 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0408 .mobileMenu nav a{padding:10px 8px}
.zp0408 .hero,.zp0408 .videoHero{grid-template-columns:1fr}
.zp0408 .section,.zp0408 .sectionTitle,.zp0408 .location,.zp0408 .contact{grid-template-columns:1fr}
.zp0408 .section{display:block}}
@media(max-width:430px){.zp0408{font-size:16px}
.zp0408 .hero,.zp0408 .section,.zp0408 .contact{padding-left:18px;padding-right:18px}
.zp0408 .serviceGrid,.zp0408 .proof,.zp0408 .programmes>div:last-child{grid-template-columns:1fr}
.zp0408 h1{font-size:clamp(42px,14vw,70px)}}

.zp0408 .heroActions a,.zp0408 .primary,.zp0408 .ctaBtn,.zp0408 .btnPrimary,.zp0408 .schedule>a,.zp0408 .newsletter>a{transition:all .2s ease}
.zp0408 .heroActions a:hover,.zp0408 .primary:hover,.zp0408 .ctaBtn:hover,.zp0408 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0408 nav a,.zp0408 .nav a,.zp0408 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0408 nav a:hover,.zp0408 .nav a:hover,.zp0408 .footer a:hover{
  text-decoration:underline
}
.zp0408 .serviceGrid article,.zp0408 .projectCard,.zp0408 .teamCard,.zp0408 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0408 .serviceGrid article:hover,.zp0408 .projectCard:hover,.zp0408 .teamCard:hover,.zp0408 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0408 *,.zp0408 *::before,.zp0408 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0408 a,.zp0408 button,.zp0408 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">07</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
