import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0560-developer-swiss-design", "family": "Swiss Design", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|conversion-first|proof>services>newsletter>testimonial>research>community|heavy-frame|newspaper", "industry": "developer", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "conversion-first"};

export default function Template0560({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Developer Portfolio");
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
  const storyBody = "Kite Developer Portfolio is presented as a real working developer portfolio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They wrote documentation as they built. Six months later we brought in a new developer who was productive by day two.";
  const testimonialName = "Studio Nine client";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Developer portfolio / Project A", "Developer portfolio / Project B", "Developer portfolio / Project C", "Developer portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A focused record of shipped software, technical decisions, and measurable impact. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0560" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0560{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0560 *{box-sizing:border-box}
.zp0560 a{color:inherit;text-decoration:none}
.zp0560 h1,.zp0560 h2,.zp0560 h3,.zp0560 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0560 img{max-width:100%;display:block}
.zp0560 button,.zp0560 a{-webkit-tap-highlight-color:transparent}
.zp0560 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0560 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0560 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0560 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0560 .nav.centered strong{order:2;font-size:24px}
.zp0560 .nav.centered nav:first-child{order:1}
.zp0560 .nav.centered nav:last-child{order:3}
.zp0560 .mobileMenu{display:none}
.zp0560 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0560 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0560 .eyebrow,.zp0560 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0560 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0560 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0560 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0560 .heroActions a,.zp0560 .newsletter>a,.zp0560 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0560 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0560 .visual,.zp0560 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0560 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0560 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0560 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0560 .heroPhoto{object-fit:cover}
.zp0560 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0560 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0560 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0560 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0560 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0560 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0560 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0560 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0560 .serviceGrid p{color:var(--muted)}
.zp0560 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0560 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0560 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0560 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0560 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0560 .testimonial>div{align-self:end}
.zp0560 .testimonial span{display:block;opacity:.7}
.zp0560 details{border-top:1px solid var(--border);padding:20px 0}
.zp0560 details summary{font-weight:800;cursor:pointer}
.zp0560 details p{color:var(--muted);max-width:70ch}
.zp0560 .newsletter,.zp0560 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0560 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0560 .researchRows{max-width:900px;margin-left:auto}
.zp0560 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0560 .contact .eyebrow{color:var(--bg)}
.zp0560 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0560 .contactMeta{display:grid;gap:10px}
.zp0560 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0560 .heroCopy{animation:enter-559 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-559{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0560 .hero{min-height:auto}
.zp0560 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0560 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0560 .nav nav{display:none}
.zp0560 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0560 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0560 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0560 .mobileMenu nav a{padding:10px 8px}
.zp0560 .hero,.zp0560 .asymHero{grid-template-columns:1fr}
.zp0560 .section,.zp0560 .sectionTitle,.zp0560 .contact{grid-template-columns:1fr}
.zp0560 .testimonial{grid-template-columns:1fr}
.zp0560 .section{display:block}}
@media(max-width:430px){.zp0560{font-size:16px}
.zp0560 .hero,.zp0560 .section,.zp0560 .contact{padding-left:18px;padding-right:18px}
.zp0560 .serviceGrid,.zp0560 .proof{grid-template-columns:1fr}
.zp0560 h1{font-size:clamp(42px,14vw,70px)}}

.zp0560 .heroActions a,.zp0560 .primary,.zp0560 .ctaBtn,.zp0560 .btnPrimary,.zp0560 .schedule>a,.zp0560 .newsletter>a{transition:all .2s ease}
.zp0560 .heroActions a:hover,.zp0560 .primary:hover,.zp0560 .ctaBtn:hover,.zp0560 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0560 nav a,.zp0560 .nav a,.zp0560 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0560 nav a:hover,.zp0560 .nav a:hover,.zp0560 .footer a:hover{
  text-decoration:underline
}
.zp0560 .serviceGrid article,.zp0560 .projectCard,.zp0560 .teamCard,.zp0560 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0560 .serviceGrid article:hover,.zp0560 .projectCard:hover,.zp0560 .teamCard:hover,.zp0560 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0560 *,.zp0560 *::before,.zp0560 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0560 a,.zp0560 button,.zp0560 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">02</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">59</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
