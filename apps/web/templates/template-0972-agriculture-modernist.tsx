import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0972-agriculture-modernist", "family": "Modernist", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|catalogue-table|proof>community>features>materials>case-study>schedule>services|notched|literary", "industry": "agriculture", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "catalogue-table"};

export default function Template0972({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Agricultural Business");
  const headline = String(content.headline || "A working farm connected directly to buyers, partners, seasons, and provenance.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Produce", "Wholesale", "Farm visits", "Seasonal boxes", "Trade supply"];
  const industryLabel = "Agricultural business";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Stillwater Agricultural Business is presented as a real working agricultural business, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Agricultural business / Project A", "Agricultural business / Project B", "Agricultural business / Project C", "Agricultural business / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A working farm connected directly to buyers, partners, seasons, and provenance. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0972" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0972{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0972 *{box-sizing:border-box}
.zp0972 a{color:inherit;text-decoration:none}
.zp0972 h1,.zp0972 h2,.zp0972 h3,.zp0972 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0972 img{max-width:100%;display:block}
.zp0972 button,.zp0972 a{-webkit-tap-highlight-color:transparent}
.zp0972 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0972 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0972 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0972 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0972 .mobileMenu{display:none}
.zp0972 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0972 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0972 .eyebrow,.zp0972 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0972 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0972 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0972 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0972 .heroActions a,.zp0972 .schedule>a,.zp0972 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0972 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0972 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0972 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0972 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0972 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0972 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0972 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0972 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0972 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0972 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0972 .serviceGrid p{color:var(--muted)}
.zp0972 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0972 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0972 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0972 details{border-top:1px solid var(--border);padding:20px 0}
.zp0972 details summary{font-weight:800;cursor:pointer}
.zp0972 details p{color:var(--muted);max-width:70ch}
.zp0972 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0972 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0972 .projects article:nth-child(2){transform:translateY(32px)}
.zp0972 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0972 .features ul{list-style:none;margin:0;padding:0}
.zp0972 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0972 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0972 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0972 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0972 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0972 .schedule,.zp0972 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0972 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0972 .contact .eyebrow{color:var(--bg)}
.zp0972 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0972 .contactMeta{display:grid;gap:10px}
.zp0972 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0972 .hero{min-height:auto}
.zp0972 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0972 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0972 .nav nav{display:none}
.zp0972 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0972 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0972 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0972 .mobileMenu nav a{padding:10px 8px}
.zp0972 .hero,.zp0972 .navLedHero{grid-template-columns:1fr}
.zp0972 .section,.zp0972 .sectionTitle,.zp0972 .features,.zp0972 .contact{grid-template-columns:1fr}
.zp0972 .projects .projectGrid{grid-template-columns:1fr}
.zp0972 .projects article:nth-child(2){transform:none}
.zp0972 .section{display:block}}
@media(max-width:430px){.zp0972{font-size:16px}
.zp0972 .hero,.zp0972 .section,.zp0972 .contact{padding-left:18px;padding-right:18px}
.zp0972 .serviceGrid,.zp0972 .proof{grid-template-columns:1fr}
.zp0972 h1{font-size:clamp(42px,14vw,70px)}}

.zp0972 .heroActions a,.zp0972 .primary,.zp0972 .ctaBtn,.zp0972 .btnPrimary,.zp0972 .schedule>a,.zp0972 .newsletter>a{transition:all .2s ease}
.zp0972 .heroActions a:hover,.zp0972 .primary:hover,.zp0972 .ctaBtn:hover,.zp0972 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0972 nav a,.zp0972 .nav a,.zp0972 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0972 nav a:hover,.zp0972 .nav a:hover,.zp0972 .footer a:hover{
  color:var(--primary)
}
.zp0972 .serviceGrid article,.zp0972 .projectCard,.zp0972 .teamCard,.zp0972 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0972 .serviceGrid article:hover,.zp0972 .projectCard:hover,.zp0972 .teamCard:hover,.zp0972 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0972 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0972 .sectionTitle,.zp0972 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0972 *,.zp0972 *::before,.zp0972 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0972 a,.zp0972 button,.zp0972 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Modernist / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
