import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0420-insurance-geometric", "family": "Geometric", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|property-led|story>proof>case-study>credentials>services>community>press|cut-corners|literary", "industry": "insurance", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "property-led"};

export default function Template0420({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const storyQuote = "\u201cIndependent cover advice with plain-language comparisons and help when claims matter.\u201d";
  const storyBody = "Fieldwork Insurance Brokerage is presented as a real working insurance brokerage, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0420" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0420{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0420 *{box-sizing:border-box}
.zp0420 a{color:inherit;text-decoration:none}
.zp0420 h1,.zp0420 h2,.zp0420 h3,.zp0420 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0420 img{max-width:100%;display:block}
.zp0420 button,.zp0420 a{-webkit-tap-highlight-color:transparent}
.zp0420 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0420 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0420 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0420 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0420 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0420 .mobileMenu{display:none}
.zp0420 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0420 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0420 .eyebrow,.zp0420 .sectionTitle>span,.zp0420 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0420 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0420 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0420 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0420 .heroActions a,.zp0420 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0420 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0420 .visual,.zp0420 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0420 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0420 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0420 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0420 .heroPhoto{object-fit:cover}
.zp0420 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0420 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0420 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0420 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0420 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0420 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0420 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0420 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0420 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0420 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0420 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0420 .serviceGrid p{color:var(--muted)}
.zp0420 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0420 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0420 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0420 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0420 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0420 .story p{color:var(--muted)}
.zp0420 details{border-top:1px solid var(--border);padding:20px 0}
.zp0420 details summary{font-weight:800;cursor:pointer}
.zp0420 details p{color:var(--muted);max-width:70ch}
.zp0420 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0420 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0420 .projects article:nth-child(2){transform:translateY(32px)}
.zp0420 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0420 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0420 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0420 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0420 .awards>div{max-width:800px;margin-left:auto}
.zp0420 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0420 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0420 .contact .eyebrow{color:var(--bg)}
.zp0420 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0420 .contactMeta{display:grid;gap:10px}
.zp0420 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0420 .heroCopy{animation:enter-419 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-419{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0420 .hero{min-height:auto}
.zp0420 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0420 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0420 .nav nav{display:none}
.zp0420 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0420 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0420 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0420 .mobileMenu nav a{padding:10px 8px}
.zp0420 .hero,.zp0420 .bentoHero{grid-template-columns:1fr}
.zp0420 .section,.zp0420 .sectionTitle,.zp0420 .story,.zp0420 .contact{grid-template-columns:1fr}
.zp0420 .projects .projectGrid{grid-template-columns:1fr}
.zp0420 .projects article:nth-child(2){transform:none}
.zp0420 .section{display:block}}
@media(max-width:430px){.zp0420{font-size:16px}
.zp0420 .hero,.zp0420 .section,.zp0420 .contact{padding-left:18px;padding-right:18px}
.zp0420 .serviceGrid,.zp0420 .proof{grid-template-columns:1fr}
.zp0420 h1{font-size:clamp(42px,14vw,70px)}}

.zp0420 .heroActions a,.zp0420 .primary,.zp0420 .ctaBtn,.zp0420 .btnPrimary,.zp0420 .schedule>a,.zp0420 .newsletter>a{transition:all .2s ease}
.zp0420 .heroActions a:hover,.zp0420 .primary:hover,.zp0420 .ctaBtn:hover,.zp0420 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0420 nav a,.zp0420 .nav a,.zp0420 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0420 nav a:hover,.zp0420 .nav a:hover,.zp0420 .footer a:hover{
  color:var(--primary)
}
.zp0420 .serviceGrid article,.zp0420 .projectCard,.zp0420 .teamCard,.zp0420 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0420 .serviceGrid article:hover,.zp0420 .projectCard:hover,.zp0420 .teamCard:hover,.zp0420 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0420 *,.zp0420 *::before,.zp0420 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0420 a,.zp0420 button,.zp0420 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">19</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
