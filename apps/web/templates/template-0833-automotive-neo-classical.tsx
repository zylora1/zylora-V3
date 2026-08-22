import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0833-automotive-neo-classical", "family": "Neo-classical", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|schedule-led|awards>newsletter>services>destinations>proof>manifesto|square-editorial|friendly", "industry": "automotive", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "schedule-led"};

export default function Template0833({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const industryLabel = "Automotive dealer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f2bd42";
  return <main className="zp0833" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0833{--bg:#0f1d33;--fg:#f5f8ff;--primary:#f2bd42;--primary-fg:#050505;--secondary:#4f8cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0833 *{box-sizing:border-box}
.zp0833 a{color:inherit;text-decoration:none}
.zp0833 h1,.zp0833 h2,.zp0833 h3,.zp0833 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0833 img{max-width:100%;display:block}
.zp0833 button,.zp0833 a{-webkit-tap-highlight-color:transparent}
.zp0833 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0833 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0833 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0833 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0833 .mobileMenu{display:none}
.zp0833 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0833 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0833 .eyebrow,.zp0833 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0833 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0833 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0833 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0833 .heroActions a,.zp0833 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0833 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0833 .typeOnly{grid-template-columns:1fr .28fr}
.zp0833 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0833 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0833 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0833 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0833 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0833 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0833 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0833 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0833 .serviceGrid p{color:var(--muted)}
.zp0833 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0833 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0833 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0833 details{border-top:1px solid var(--border);padding:20px 0}
.zp0833 details summary{font-weight:800;cursor:pointer}
.zp0833 details p{color:var(--muted);max-width:70ch}
.zp0833 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0833 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Trebuchet MS, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0833 .awards>div{max-width:800px;margin-left:auto}
.zp0833 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0833 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0833 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0833 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0833 .contact .eyebrow{color:var(--bg)}
.zp0833 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0833 .contactMeta{display:grid;gap:10px}
.zp0833 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0833 .heroCopy{animation:enter-832 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-832{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0833 .hero{min-height:auto}
.zp0833 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0833 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0833 .nav nav{display:none}
.zp0833 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0833 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0833 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0833 .mobileMenu nav a{padding:10px 8px}
.zp0833 .hero{grid-template-columns:1fr}
.zp0833 .section,.zp0833 .sectionTitle,.zp0833 .contact{grid-template-columns:1fr}
.zp0833 .section{display:block}}
@media(max-width:430px){.zp0833{font-size:16px}
.zp0833 .hero,.zp0833 .section,.zp0833 .contact{padding-left:18px;padding-right:18px}
.zp0833 .serviceGrid,.zp0833 .proof,.zp0833 .destinations>div:last-child{grid-template-columns:1fr}
.zp0833 h1{font-size:clamp(42px,14vw,70px)}}

.zp0833 .heroActions a,.zp0833 .primary,.zp0833 .ctaBtn,.zp0833 .btnPrimary,.zp0833 .schedule>a,.zp0833 .newsletter>a{transition:all .2s ease}
.zp0833 .heroActions a:hover,.zp0833 .primary:hover,.zp0833 .ctaBtn:hover,.zp0833 .btnPrimary:hover{
  opacity:.85;letter-spacing:.04em
}
.zp0833 nav a,.zp0833 .nav a,.zp0833 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0833 nav a:hover,.zp0833 .nav a:hover,.zp0833 .footer a:hover{
  color:var(--secondary)
}
.zp0833 .serviceGrid article,.zp0833 .projectCard,.zp0833 .teamCard,.zp0833 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0833 .serviceGrid article:hover,.zp0833 .projectCard:hover,.zp0833 .teamCard:hover,.zp0833 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0833 *,.zp0833 *::before,.zp0833 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0833 a,.zp0833 button,.zp0833 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-classical / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
