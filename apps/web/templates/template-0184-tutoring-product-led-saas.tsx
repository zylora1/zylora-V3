import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0184-tutoring-product-led-saas", "family": "Product-led SaaS", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|offset-cards|research>credentials>services>testimonial>proof|micro-radius|brutal-display", "industry": "tutoring", "hero": "video-frame", "navigation": "corner-dock", "layout": "offset-cards"};

export default function Template0184({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Tutoring Service");
  const headline = String(content.headline || "One-to-one learning support shaped around the student, not a fixed worksheet.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Math tutoring", "Science tutoring", "Language support", "Exam revision", "Study planning"];
  const industryLabel = "Tutoring service";
  const serviceNotes = ["Subject specialists with teaching experience, not just degree holders.", "Diagnostic assessment in the first session to find gaps, not just reinforce strengths.", "Exam technique coaching alongside subject knowledge — both matter equally.", "Flexible booking: weekly recurring, intensive blocks, or exam-season only.", "Parent briefings every six weeks with written progress summaries."];
  const proofPoints = ["QTS and subject specialists", "98% report grade improvement", "DBS enhanced checked", "Flexible scheduling"];
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const testimonialName = "Rook client";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0184" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0184{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0184 *{box-sizing:border-box}
.zp0184 a{color:inherit;text-decoration:none}
.zp0184 h1,.zp0184 h2,.zp0184 h3,.zp0184 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0184 img{max-width:100%;display:block}
.zp0184 button,.zp0184 a{-webkit-tap-highlight-color:transparent}
.zp0184 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0184 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0184 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0184 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0184 .mobileMenu{display:none}
.zp0184 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0184 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0184 .eyebrow,.zp0184 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0184 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0184 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0184 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0184 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0184 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0184 .visual,.zp0184 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0184 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0184 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-4deg)}
.zp0184 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0184 .heroPhoto{object-fit:cover}
.zp0184 .videoHero{grid-template-columns:1fr 1fr}
.zp0184 .videoFrame{position:relative}
.zp0184 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0184 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0184 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0184 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0184 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0184 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0184 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0184 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0184 .serviceGrid p{color:var(--muted)}
.zp0184 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0184 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0184 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0184 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0184 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0184 .testimonial>div{align-self:end}
.zp0184 .testimonial span{display:block;opacity:.7}
.zp0184 details{border-top:1px solid var(--border);padding:20px 0}
.zp0184 details summary{font-weight:800;cursor:pointer}
.zp0184 details p{color:var(--muted);max-width:70ch}
.zp0184 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0184 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0184 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0184 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0184 .researchRows{max-width:900px;margin-left:auto}
.zp0184 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0184 .contact .eyebrow{color:var(--bg)}
.zp0184 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0184 .contactMeta{display:grid;gap:10px}
.zp0184 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0184 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0184 .heroCopy{animation:enter-183 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-183{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0184 .hero{min-height:auto}
.zp0184 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0184 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0184 .nav nav{display:none}
.zp0184 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0184 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0184 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0184 .mobileMenu nav a{padding:10px 8px}
.zp0184 .hero,.zp0184 .videoHero{grid-template-columns:1fr}
.zp0184 .section,.zp0184 .sectionTitle,.zp0184 .contact{grid-template-columns:1fr}
.zp0184 .testimonial{grid-template-columns:1fr}
.zp0184 .section{display:block}}
@media(max-width:430px){.zp0184{font-size:16px}
.zp0184 .hero,.zp0184 .section,.zp0184 .contact{padding-left:18px;padding-right:18px}
.zp0184 .serviceGrid,.zp0184 .proof{grid-template-columns:1fr}
.zp0184 h1{font-size:clamp(42px,14vw,70px)}}

.zp0184 .heroActions a,.zp0184 .primary,.zp0184 .ctaBtn,.zp0184 .btnPrimary,.zp0184 .schedule>a,.zp0184 .newsletter>a{transition:all .2s ease}
.zp0184 .heroActions a:hover,.zp0184 .primary:hover,.zp0184 .ctaBtn:hover,.zp0184 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0184 nav a,.zp0184 .nav a,.zp0184 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0184 nav a:hover,.zp0184 .nav a:hover,.zp0184 .footer a:hover{
  color:var(--primary)
}
.zp0184 .serviceGrid article,.zp0184 .projectCard,.zp0184 .teamCard,.zp0184 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0184 .serviceGrid article:hover,.zp0184 .projectCard:hover,.zp0184 .teamCard:hover,.zp0184 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.15)
}
@media(prefers-reduced-motion:reduce){.zp0184 *,.zp0184 *::before,.zp0184 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0184 a,.zp0184 button,.zp0184 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">83</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Product-led SaaS / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
