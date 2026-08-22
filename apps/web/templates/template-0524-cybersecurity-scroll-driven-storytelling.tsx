import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0524-cybersecurity-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|conversion-first|story>values>proof>destinations>services>schedule|notched|product-ui", "industry": "cybersecurity", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "conversion-first"};

export default function Template0524({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Cybersecurity Firm");
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
  const storyBody = "Stillwater Cybersecurity Firm is presented as a real working cybersecurity firm, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "They found a critical vulnerability our previous pen test missed. The report was actionable, not just a list of CVEs.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Cybersecurity firm / Project A", "Cybersecurity firm / Project B", "Cybersecurity firm / Project C", "Cybersecurity firm / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Practical security that reduces exposure without slowing the business down. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0524" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0524{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0524 *{box-sizing:border-box}
.zp0524 a{color:inherit;text-decoration:none}
.zp0524 h1,.zp0524 h2,.zp0524 h3,.zp0524 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0524 img{max-width:100%;display:block}
.zp0524 button,.zp0524 a{-webkit-tap-highlight-color:transparent}
.zp0524 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0524 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0524 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0524 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0524 .mobileMenu{display:none}
.zp0524 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0524 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0524 .eyebrow,.zp0524 .sectionTitle>span,.zp0524 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0524 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0524 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0524 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0524 .heroActions a,.zp0524 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0524 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0524 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0524 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0524 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0524 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0524 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0524 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0524 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0524 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0524 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0524 .serviceGrid p{color:var(--muted)}
.zp0524 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0524 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0524 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0524 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0524 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0524 .story p{color:var(--muted)}
.zp0524 details{border-top:1px solid var(--border);padding:20px 0}
.zp0524 details summary{font-weight:800;cursor:pointer}
.zp0524 details p{color:var(--muted);max-width:70ch}
.zp0524 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0524 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Segoe UI, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0524 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0524 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0524 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0524 .contact .eyebrow{color:var(--bg)}
.zp0524 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0524 .contactMeta{display:grid;gap:10px}
.zp0524 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0524 .hero{min-height:auto}
.zp0524 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0524 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0524 .nav nav{display:none}
.zp0524 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0524 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0524 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0524 .mobileMenu nav a{padding:10px 8px}
.zp0524 .hero,.zp0524 .navLedHero{grid-template-columns:1fr}
.zp0524 .section,.zp0524 .sectionTitle,.zp0524 .story,.zp0524 .contact{grid-template-columns:1fr}
.zp0524 .section{display:block}}
@media(max-width:430px){.zp0524{font-size:16px}
.zp0524 .hero,.zp0524 .section,.zp0524 .contact{padding-left:18px;padding-right:18px}
.zp0524 .serviceGrid,.zp0524 .proof,.zp0524 .destinations>div:last-child{grid-template-columns:1fr}
.zp0524 h1{font-size:clamp(42px,14vw,70px)}}

.zp0524 .heroActions a,.zp0524 .primary,.zp0524 .ctaBtn,.zp0524 .btnPrimary,.zp0524 .schedule>a,.zp0524 .newsletter>a{transition:all .2s ease}
.zp0524 .heroActions a:hover,.zp0524 .primary:hover,.zp0524 .ctaBtn:hover,.zp0524 .btnPrimary:hover{
  opacity:.8
}
.zp0524 nav a,.zp0524 .nav a,.zp0524 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0524 nav a:hover,.zp0524 .nav a:hover,.zp0524 .footer a:hover{
  color:var(--primary)
}
.zp0524 .serviceGrid article,.zp0524 .projectCard,.zp0524 .teamCard,.zp0524 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0524 .serviceGrid article:hover,.zp0524 .projectCard:hover,.zp0524 .teamCard:hover,.zp0524 .bentoCard:hover{
  transform:translateY(-2px)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0524 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0524 .sectionTitle,.zp0524 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0524 *,.zp0524 *::before,.zp0524 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0524 a,.zp0524 button,.zp0524 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
