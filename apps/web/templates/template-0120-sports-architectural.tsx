import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0120-sports-architectural", "family": "Architectural", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|stacked-posters|awards>story>values>proof>comparison>hours>services|micro-radius|terminal", "industry": "sports", "hero": "video-frame", "navigation": "corner-dock", "layout": "stacked-posters"};

export default function Template0120({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const storyQuote = "\u201cStructured coaching that turns practice time into visible performance gains.\u201d";
  const storyBody = "Bureau Sports Academy is presented as a real working sports academy, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0120" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0120{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0120 *{box-sizing:border-box}
.zp0120 a{color:inherit;text-decoration:none}
.zp0120 h1,.zp0120 h2,.zp0120 h3,.zp0120 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0120 img{max-width:100%;display:block}
.zp0120 button,.zp0120 a{-webkit-tap-highlight-color:transparent}
.zp0120 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0120 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0120 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0120 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0120 .mobileMenu{display:none}
.zp0120 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0120 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0120 .eyebrow,.zp0120 .sectionTitle>span,.zp0120 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0120 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0120 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0120 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0120 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0120 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0120 .visual,.zp0120 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0120 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0120 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0120 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0120 .heroPhoto{object-fit:cover}
.zp0120 .videoHero{grid-template-columns:1fr 1fr}
.zp0120 .videoFrame{position:relative}
.zp0120 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0120 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0120 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0120 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0120 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0120 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0120 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0120 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0120 .serviceGrid p{color:var(--muted)}
.zp0120 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0120 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0120 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0120 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0120 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0120 .story p{color:var(--muted)}
.zp0120 details{border-top:1px solid var(--border);padding:20px 0}
.zp0120 details summary{font-weight:800;cursor:pointer}
.zp0120 details p{color:var(--muted);max-width:70ch}
.zp0120 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0120 .hours dl{margin:0}
.zp0120 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0120 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0120 .awards>div{max-width:800px;margin-left:auto}
.zp0120 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0120 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0120 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0120 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0120 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0120 .contact .eyebrow{color:var(--bg)}
.zp0120 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0120 .contactMeta{display:grid;gap:10px}
.zp0120 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0120 .heroCopy{animation:enter-119 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-119{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0120 .hero{min-height:auto}
.zp0120 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0120 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0120 .nav nav{display:none}
.zp0120 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0120 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0120 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0120 .mobileMenu nav a{padding:10px 8px}
.zp0120 .hero,.zp0120 .videoHero{grid-template-columns:1fr}
.zp0120 .section,.zp0120 .sectionTitle,.zp0120 .story,.zp0120 .hours,.zp0120 .contact{grid-template-columns:1fr}
.zp0120 .section{display:block}}
@media(max-width:430px){.zp0120{font-size:16px}
.zp0120 .hero,.zp0120 .section,.zp0120 .contact{padding-left:18px;padding-right:18px}
.zp0120 .serviceGrid,.zp0120 .proof,.zp0120 .compareGrid{grid-template-columns:1fr}
.zp0120 h1{font-size:clamp(42px,14vw,70px)}}

.zp0120 .heroActions a,.zp0120 .primary,.zp0120 .ctaBtn,.zp0120 .btnPrimary,.zp0120 .schedule>a,.zp0120 .newsletter>a{transition:all .2s ease}
.zp0120 .heroActions a:hover,.zp0120 .primary:hover,.zp0120 .ctaBtn:hover,.zp0120 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0120 nav a,.zp0120 .nav a,.zp0120 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0120 nav a:hover,.zp0120 .nav a:hover,.zp0120 .footer a:hover{
  opacity:.7
}
.zp0120 .serviceGrid article,.zp0120 .projectCard,.zp0120 .teamCard,.zp0120 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0120 .serviceGrid article:hover,.zp0120 .projectCard:hover,.zp0120 .teamCard:hover,.zp0120 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0120 *,.zp0120 *::before,.zp0120 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0120 a,.zp0120 button,.zp0120 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">19</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
