import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0440-consulting-modernist", "family": "Modernist", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|dashboard-story|story>features>programmes>credentials>proof>services|micro-radius|newspaper", "industry": "consulting", "hero": "video-frame", "navigation": "corner-dock", "layout": "dashboard-story"};

export default function Template0440({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Consulting Practice");
  const headline = String(content.headline || "Senior-level thinking paired with practical implementation and measurable outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strategy", "Operations", "Transformation", "Research", "Implementation support"];
  const industryLabel = "Consulting practice";
  const serviceNotes = ["Diagnostic phase first — we understand the problem before proposing a solution.", "Delivered by senior practitioners, not junior analysts relabelled as consultants.", "Fixed-scope engagements with clear deliverables and measurable success criteria.", "Knowledge transfer built into every project so client teams can sustain the change.", "Follow-through reviews at 6 and 12 months to confirm outcomes are holding."];
  const proofPoints = ["Average client ROI: 340%", "Senior-only delivery team", "NDA and IP protection", "30-day exit clause"];
  const storyQuote = "\u201cSenior-level thinking paired with practical implementation and measurable outcomes.\u201d";
  const storyBody = "Bureau Consulting Practice is presented as a real working consulting practice, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They spotted a structural issue in our operations that three previous consultancies had missed. Implemented and sustained.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Consulting practice / Project A", "Consulting practice / Project B", "Consulting practice / Project C", "Consulting practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior-level thinking paired with practical implementation and measurable outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0440" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0440{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0440 *{box-sizing:border-box}
.zp0440 a{color:inherit;text-decoration:none}
.zp0440 h1,.zp0440 h2,.zp0440 h3,.zp0440 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0440 img{max-width:100%;display:block}
.zp0440 button,.zp0440 a{-webkit-tap-highlight-color:transparent}
.zp0440 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0440 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0440 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0440 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0440 .mobileMenu{display:none}
.zp0440 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0440 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0440 .eyebrow,.zp0440 .sectionTitle>span,.zp0440 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0440 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0440 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0440 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0440 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0440 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0440 .visual,.zp0440 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0440 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0440 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0440 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0440 .heroPhoto{object-fit:cover}
.zp0440 .videoHero{grid-template-columns:1fr 1fr}
.zp0440 .videoFrame{position:relative}
.zp0440 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0440 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0440 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0440 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0440 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0440 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0440 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0440 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0440 .serviceGrid p{color:var(--muted)}
.zp0440 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0440 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0440 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0440 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0440 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0440 .story p{color:var(--muted)}
.zp0440 details{border-top:1px solid var(--border);padding:20px 0}
.zp0440 details summary{font-weight:800;cursor:pointer}
.zp0440 details p{color:var(--muted);max-width:70ch}
.zp0440 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0440 .features ul{list-style:none;margin:0;padding:0}
.zp0440 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0440 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0440 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0440 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0440 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0440 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0440 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0440 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0440 .contact .eyebrow{color:var(--bg)}
.zp0440 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0440 .contactMeta{display:grid;gap:10px}
.zp0440 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0440 .hero{min-height:auto}
.zp0440 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0440 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0440 .nav nav{display:none}
.zp0440 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0440 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0440 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0440 .mobileMenu nav a{padding:10px 8px}
.zp0440 .hero,.zp0440 .videoHero{grid-template-columns:1fr}
.zp0440 .section,.zp0440 .sectionTitle,.zp0440 .story,.zp0440 .features,.zp0440 .contact{grid-template-columns:1fr}
.zp0440 .section{display:block}}
@media(max-width:430px){.zp0440{font-size:16px}
.zp0440 .hero,.zp0440 .section,.zp0440 .contact{padding-left:18px;padding-right:18px}
.zp0440 .serviceGrid,.zp0440 .proof,.zp0440 .programmes>div:last-child{grid-template-columns:1fr}
.zp0440 h1{font-size:clamp(42px,14vw,70px)}}

.zp0440 .heroActions a,.zp0440 .primary,.zp0440 .ctaBtn,.zp0440 .btnPrimary,.zp0440 .schedule>a,.zp0440 .newsletter>a{transition:all .2s ease}
.zp0440 .heroActions a:hover,.zp0440 .primary:hover,.zp0440 .ctaBtn:hover,.zp0440 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0440 nav a,.zp0440 .nav a,.zp0440 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0440 nav a:hover,.zp0440 .nav a:hover,.zp0440 .footer a:hover{
  color:var(--primary)
}
.zp0440 .serviceGrid article,.zp0440 .projectCard,.zp0440 .teamCard,.zp0440 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0440 .serviceGrid article:hover,.zp0440 .projectCard:hover,.zp0440 .teamCard:hover,.zp0440 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0440 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0440 .sectionTitle,.zp0440 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0440 *,.zp0440 *::before,.zp0440 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0440 a,.zp0440 button,.zp0440 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">39</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
