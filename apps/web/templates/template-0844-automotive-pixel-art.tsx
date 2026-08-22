import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0844-automotive-pixel-art", "family": "Pixel Art", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|single-column-longform|manifesto>services>destinations>proof>research|notched|sports-editorial", "industry": "automotive", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "single-column-longform"};

export default function Template0844({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Automotive Dealer");
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
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0844" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0844{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0844 *{box-sizing:border-box}
.zp0844 a{color:inherit;text-decoration:none}
.zp0844 h1,.zp0844 h2,.zp0844 h3,.zp0844 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0844 img{max-width:100%;display:block}
.zp0844 button,.zp0844 a{-webkit-tap-highlight-color:transparent}
.zp0844 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0844 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0844 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0844 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0844 .mobileMenu{display:none}
.zp0844 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0844 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0844 .eyebrow,.zp0844 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0844 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0844 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0844 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0844 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0844 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0844 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0844 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0844 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0844 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0844 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0844 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0844 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0844 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0844 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0844 .serviceGrid p{color:var(--muted)}
.zp0844 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0844 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0844 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0844 details{border-top:1px solid var(--border);padding:20px 0}
.zp0844 details summary{font-weight:800;cursor:pointer}
.zp0844 details p{color:var(--muted);max-width:70ch}
.zp0844 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0844 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0844 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0844 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0844 .researchRows{max-width:900px;margin-left:auto}
.zp0844 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0844 .contact .eyebrow{color:var(--bg)}
.zp0844 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0844 .contactMeta{display:grid;gap:10px}
.zp0844 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0844 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0844 .sectionTitle{display:block}
.zp0844{image-rendering:pixelated}
.zp0844 *{border-radius:0!important}
.zp0844 .heroCopy{animation:enter-843 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-843{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0844 .hero{min-height:auto}
.zp0844 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0844 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0844 .nav nav{display:none}
.zp0844 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0844 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0844 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0844 .mobileMenu nav a{padding:10px 8px}
.zp0844 .hero,.zp0844 .navLedHero{grid-template-columns:1fr}
.zp0844 .section,.zp0844 .sectionTitle,.zp0844 .contact{grid-template-columns:1fr}
.zp0844 .section{display:block}}
@media(max-width:430px){.zp0844{font-size:16px}
.zp0844 .hero,.zp0844 .section,.zp0844 .contact{padding-left:18px;padding-right:18px}
.zp0844 .serviceGrid,.zp0844 .proof,.zp0844 .destinations>div:last-child{grid-template-columns:1fr}
.zp0844 h1{font-size:clamp(42px,14vw,70px)}}

.zp0844 .heroActions a,.zp0844 .primary,.zp0844 .ctaBtn,.zp0844 .btnPrimary,.zp0844 .schedule>a,.zp0844 .newsletter>a{transition:all .2s ease}
.zp0844 .heroActions a:hover,.zp0844 .primary:hover,.zp0844 .ctaBtn:hover,.zp0844 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0844 nav a,.zp0844 .nav a,.zp0844 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0844 nav a:hover,.zp0844 .nav a:hover,.zp0844 .footer a:hover{
  color:var(--primary)
}
.zp0844 .serviceGrid article,.zp0844 .projectCard,.zp0844 .teamCard,.zp0844 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0844 .serviceGrid article:hover,.zp0844 .projectCard:hover,.zp0844 .teamCard:hover,.zp0844 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0844 *,.zp0844 *::before,.zp0844 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0844 a,.zp0844 button,.zp0844 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
