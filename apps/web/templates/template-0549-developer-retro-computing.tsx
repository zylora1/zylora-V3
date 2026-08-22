import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0549-developer-retro-computing", "family": "Retro Computing", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|community-led|programmes>testimonial>awards>services>destinations>credentials>proof|ticket-edge|humanist-classic", "industry": "developer", "hero": "testimonial-led", "navigation": "lower-third", "layout": "community-led"};

export default function Template0549({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Developer Portfolio");
  const headline = String(content.headline || "A focused record of shipped software, technical decisions, and measurable impact.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Product work", "Open source", "Technical writing", "Speaking", "Consulting"];
  const industryLabel = "Developer portfolio";
  const serviceNotes = ["Full-stack capability: from database architecture to accessible frontend interfaces.", "Open-source contributors with real community credibility and public track record.", "Performance-first: Lighthouse scores reviewed and targets agreed before launch.", "Accessibility to WCAG 2.2 AA as a baseline requirement, not an optional extra.", "Retainer options for ongoing development, features, and maintenance."];
  const proofPoints = ["Core Web Vitals: all green", "WCAG 2.2 AA standard", "GitHub: 2,000+ contributions", "8-year average tenure"];
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const testimonialName = "Arc client";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  return <main className="zp0549" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0549{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0549 *{box-sizing:border-box}
.zp0549 a{color:inherit;text-decoration:none}
.zp0549 h1,.zp0549 h2,.zp0549 h3,.zp0549 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0549 img{max-width:100%;display:block}
.zp0549 button,.zp0549 a{-webkit-tap-highlight-color:transparent}
.zp0549 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0549 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0549 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0549 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0549 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0549 .mobileMenu{display:none}
.zp0549 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0549 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0549 .eyebrow,.zp0549 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0549 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0549 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0549 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0549 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0549 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0549 .quoteHero{grid-template-columns:1fr 1fr}
.zp0549 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0549 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0549 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0549 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0549 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0549 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0549 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0549 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0549 .serviceGrid p{color:var(--muted)}
.zp0549 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0549 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0549 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0549 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0549 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0549 .testimonial>div{align-self:end}
.zp0549 .testimonial span{display:block;opacity:.7}
.zp0549 details{border-top:1px solid var(--border);padding:20px 0}
.zp0549 details summary{font-weight:800;cursor:pointer}
.zp0549 details p{color:var(--muted);max-width:70ch}
.zp0549 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0549 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0549 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0549 .awards>div{max-width:800px;margin-left:auto}
.zp0549 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0549 .programmes>div:last-child,.zp0549 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0549 .programmes article,.zp0549 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0549 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0549 .contact .eyebrow{color:var(--bg)}
.zp0549 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0549 .contactMeta{display:grid;gap:10px}
.zp0549 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0549{image-rendering:pixelated}
.zp0549 *{border-radius:0!important}
.zp0549 .heroCopy{animation:enter-548 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-548{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0549 .hero{min-height:auto}
.zp0549 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0549 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0549 .nav nav{display:none}
.zp0549 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0549 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0549 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0549 .mobileMenu nav a{padding:10px 8px}
.zp0549 .hero,.zp0549 .quoteHero{grid-template-columns:1fr}
.zp0549 .section,.zp0549 .sectionTitle,.zp0549 .contact{grid-template-columns:1fr}
.zp0549 .testimonial{grid-template-columns:1fr}
.zp0549 .section{display:block}}
@media(max-width:430px){.zp0549{font-size:16px}
.zp0549 .hero,.zp0549 .section,.zp0549 .contact{padding-left:18px;padding-right:18px}
.zp0549 .serviceGrid,.zp0549 .proof,.zp0549 .programmes>div:last-child,.zp0549 .destinations>div:last-child{grid-template-columns:1fr}
.zp0549 h1{font-size:clamp(42px,14vw,70px)}}

.zp0549 .heroActions a,.zp0549 .primary,.zp0549 .ctaBtn,.zp0549 .btnPrimary,.zp0549 .schedule>a,.zp0549 .newsletter>a{transition:all .2s ease}
.zp0549 .heroActions a:hover,.zp0549 .primary:hover,.zp0549 .ctaBtn:hover,.zp0549 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0549 nav a,.zp0549 .nav a,.zp0549 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0549 nav a:hover,.zp0549 .nav a:hover,.zp0549 .footer a:hover{
  color:var(--primary)
}
.zp0549 .serviceGrid article,.zp0549 .projectCard,.zp0549 .teamCard,.zp0549 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0549 .serviceGrid article:hover,.zp0549 .projectCard:hover,.zp0549 .teamCard:hover,.zp0549 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0549 *,.zp0549 *::before,.zp0549 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0549 a,.zp0549 button,.zp0549 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
