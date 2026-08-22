import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0752-portfolio-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|booking-led|story>comparison>services>menu>proof>materials|heavy-frame|newspaper", "industry": "portfolio", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "booking-led"};

export default function Template0752({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const industryLabel = "Creative portfolio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA concise portfolio that makes the work, thinking, and role in each project easy to understand.\u201d";
  const storyBody = "Kite Creative Portfolio is presented as a real working creative portfolio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0752" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0752{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0752 *{box-sizing:border-box}
.zp0752 a{color:inherit;text-decoration:none}
.zp0752 h1,.zp0752 h2,.zp0752 h3,.zp0752 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0752 img{max-width:100%;display:block}
.zp0752 button,.zp0752 a{-webkit-tap-highlight-color:transparent}
.zp0752 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0752 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0752 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0752 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0752 .nav.centered strong{order:2;font-size:24px}
.zp0752 .nav.centered nav:first-child{order:1}
.zp0752 .nav.centered nav:last-child{order:3}
.zp0752 .mobileMenu{display:none}
.zp0752 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0752 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0752 .eyebrow,.zp0752 .sectionTitle>span,.zp0752 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0752 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0752 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0752 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0752 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0752 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0752 .visual,.zp0752 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0752 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0752 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0752 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0752 .heroPhoto{object-fit:cover}
.zp0752 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0752 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0752 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0752 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0752 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0752 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0752 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0752 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0752 .serviceGrid p{color:var(--muted)}
.zp0752 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0752 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0752 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0752 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0752 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0752 .story p{color:var(--muted)}
.zp0752 details{border-top:1px solid var(--border);padding:20px 0}
.zp0752 details summary{font-weight:800;cursor:pointer}
.zp0752 details p{color:var(--muted);max-width:70ch}
.zp0752 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0752 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0752 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0752 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0752 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0752 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0752 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0752 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0752 .contact .eyebrow{color:var(--bg)}
.zp0752 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0752 .contactMeta{display:grid;gap:10px}
.zp0752 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0752 .heroCopy{animation:enter-751 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-751{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0752 .hero{min-height:auto}
.zp0752 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0752 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0752 .nav nav{display:none}
.zp0752 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0752 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0752 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0752 .mobileMenu nav a{padding:10px 8px}
.zp0752 .hero,.zp0752 .asymHero{grid-template-columns:1fr}
.zp0752 .section,.zp0752 .sectionTitle,.zp0752 .story,.zp0752 .contact{grid-template-columns:1fr}
.zp0752 .section{display:block}}
@media(max-width:430px){.zp0752{font-size:16px}
.zp0752 .hero,.zp0752 .section,.zp0752 .contact{padding-left:18px;padding-right:18px}
.zp0752 .serviceGrid,.zp0752 .proof,.zp0752 .compareGrid{grid-template-columns:1fr}
.zp0752 h1{font-size:clamp(42px,14vw,70px)}}

.zp0752 .heroActions a,.zp0752 .primary,.zp0752 .ctaBtn,.zp0752 .btnPrimary,.zp0752 .schedule>a,.zp0752 .newsletter>a{transition:all .2s ease}
.zp0752 .heroActions a:hover,.zp0752 .primary:hover,.zp0752 .ctaBtn:hover,.zp0752 .btnPrimary:hover{
  opacity:.8
}
.zp0752 nav a,.zp0752 .nav a,.zp0752 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0752 nav a:hover,.zp0752 .nav a:hover,.zp0752 .footer a:hover{
  color:var(--primary)
}
.zp0752 .serviceGrid article,.zp0752 .projectCard,.zp0752 .teamCard,.zp0752 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0752 .serviceGrid article:hover,.zp0752 .projectCard:hover,.zp0752 .teamCard:hover,.zp0752 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0752 *,.zp0752 *::before,.zp0752 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0752 a,.zp0752 button,.zp0752 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">05</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">51</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
