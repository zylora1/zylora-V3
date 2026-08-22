import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0513-cybersecurity-paper-texture", "family": "Paper Texture", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|community-led|services>story>awards>proof>credentials>research>programmes|square-editorial|slab", "industry": "cybersecurity", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "community-led"};

export default function Template0513({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Cybersecurity Firm");
  const headline = String(content.headline || "Practical security that reduces exposure without slowing the business down.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Security assessments", "Managed detection", "Incident response", "Cloud security", "Compliance"];
  const industryLabel = "Cybersecurity firm";
  const serviceNotes = ["Penetration testing on infrastructure, web applications, and physical security.", "Incident response retainer: guaranteed 2h response, 24h containment commitment.", "Security awareness training delivered in-person and via self-paced modules.", "ISO 27001, Cyber Essentials, and SOC 2 readiness programmes end-to-end.", "Red team exercises that simulate advanced persistent threats realistically."];
  const proofPoints = ["CREST certified testers", "Incident response 24/7", "ISO 27001 certified", "CHECK approved"];
  const storyQuote = "\u201cPractical security that reduces exposure without slowing the business down.\u201d";
  const storyBody = "Northline Cybersecurity Firm is presented as a real working cybersecurity firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0513" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0513{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0513 *{box-sizing:border-box}
.zp0513 a{color:inherit;text-decoration:none}
.zp0513 h1,.zp0513 h2,.zp0513 h3,.zp0513 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0513 img{max-width:100%;display:block}
.zp0513 button,.zp0513 a{-webkit-tap-highlight-color:transparent}
.zp0513 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0513 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0513 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0513 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0513 .mobileMenu{display:none}
.zp0513 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0513 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0513 .eyebrow,.zp0513 .sectionTitle>span,.zp0513 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0513 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0513 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0513 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0513 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0513 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0513 .typeOnly{grid-template-columns:1fr .28fr}
.zp0513 .oversizeWord{font-family:Rockwell, Courier New, serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0513 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0513 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0513 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0513 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0513 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0513 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0513 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0513 .serviceGrid p{color:var(--muted)}
.zp0513 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0513 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0513 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0513 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0513 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0513 .story p{color:var(--muted)}
.zp0513 details{border-top:1px solid var(--border);padding:20px 0}
.zp0513 details summary{font-weight:800;cursor:pointer}
.zp0513 details p{color:var(--muted);max-width:70ch}
.zp0513 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0513 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0513 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0513 .awards>div{max-width:800px;margin-left:auto}
.zp0513 .awards p,.zp0513 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0513 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0513 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0513 .researchRows{max-width:900px;margin-left:auto}
.zp0513 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0513 .contact .eyebrow{color:var(--bg)}
.zp0513 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0513 .contactMeta{display:grid;gap:10px}
.zp0513 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0513{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0513 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0513 .heroCopy{animation:enter-512 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-512{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0513 .hero{min-height:auto}
.zp0513 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0513 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0513 .nav nav{display:none}
.zp0513 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0513 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0513 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0513 .mobileMenu nav a{padding:10px 8px}
.zp0513 .hero{grid-template-columns:1fr}
.zp0513 .section,.zp0513 .sectionTitle,.zp0513 .story,.zp0513 .contact{grid-template-columns:1fr}
.zp0513 .section{display:block}}
@media(max-width:430px){.zp0513{font-size:16px}
.zp0513 .hero,.zp0513 .section,.zp0513 .contact{padding-left:18px;padding-right:18px}
.zp0513 .serviceGrid,.zp0513 .proof,.zp0513 .programmes>div:last-child{grid-template-columns:1fr}
.zp0513 h1{font-size:clamp(42px,14vw,70px)}}

.zp0513 .heroActions a,.zp0513 .primary,.zp0513 .ctaBtn,.zp0513 .btnPrimary,.zp0513 .schedule>a,.zp0513 .newsletter>a{transition:all .2s ease}
.zp0513 .heroActions a:hover,.zp0513 .primary:hover,.zp0513 .ctaBtn:hover,.zp0513 .btnPrimary:hover{
  opacity:.8
}
.zp0513 nav a,.zp0513 .nav a,.zp0513 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0513 nav a:hover,.zp0513 .nav a:hover,.zp0513 .footer a:hover{
  color:var(--primary)
}
.zp0513 .serviceGrid article,.zp0513 .projectCard,.zp0513 .teamCard,.zp0513 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0513 .serviceGrid article:hover,.zp0513 .projectCard:hover,.zp0513 .teamCard:hover,.zp0513 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0513 *,.zp0513 *::before,.zp0513 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0513 a,.zp0513 button,.zp0513 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
