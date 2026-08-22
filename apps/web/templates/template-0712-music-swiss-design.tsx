import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0712-music-swiss-design", "family": "Swiss Design", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|research-led|services>case-study>materials>proof>features|micro-radius|brutal-display", "industry": "music", "hero": "monumental-type", "navigation": "corner-dock", "layout": "research-led"};

export default function Template0712({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8c9a4b";
  return <main className="zp0712" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0712{--bg:#f4f4ea;--fg:#24241e;--primary:#8c9a4b;--primary-fg:#050505;--secondary:#d18b47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0712 *{box-sizing:border-box}
.zp0712 a{color:inherit;text-decoration:none}
.zp0712 h1,.zp0712 h2,.zp0712 h3,.zp0712 blockquote{font-family:Arial Black, Arial, sans-serif;text-wrap:balance}
.zp0712 img{max-width:100%;display:block}
.zp0712 button,.zp0712 a{-webkit-tap-highlight-color:transparent}
.zp0712 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0712 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0712 .nav strong{font-family:Arial Black, Arial, sans-serif;font-size:18px}
.zp0712 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0712 .mobileMenu{display:none}
.zp0712 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0712 .eyebrow,.zp0712 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0712 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0712 .monumentalHero{display:block}
.zp0712 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0712 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0712 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0712 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0712 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0712 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0712 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0712 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0712 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0712 .serviceGrid p{color:var(--muted)}
.zp0712 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0712 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0712 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0712 details{border-top:1px solid var(--border);padding:20px 0}
.zp0712 details summary{font-weight:800;cursor:pointer}
.zp0712 details p{color:var(--muted);max-width:70ch}
.zp0712 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0712 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0712 .projects article:nth-child(2){transform:translateY(32px)}
.zp0712 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0712 .features ul{list-style:none;margin:0;padding:0}
.zp0712 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0712 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0712 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0712 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0712 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0712 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0712 .contact .eyebrow{color:var(--bg)}
.zp0712 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0712 .contactMeta{display:grid;gap:10px}
.zp0712 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-711{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0712 .hero{min-height:auto}
.zp0712 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0712 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0712 .nav nav{display:none}
.zp0712 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0712 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0712 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0712 .mobileMenu nav a{padding:10px 8px}
.zp0712 .hero{grid-template-columns:1fr}
.zp0712 .section,.zp0712 .sectionTitle,.zp0712 .features,.zp0712 .contact{grid-template-columns:1fr}
.zp0712 .projects .projectGrid{grid-template-columns:1fr}
.zp0712 .projects article:nth-child(2){transform:none}
.zp0712 .section{display:block}}
@media(max-width:430px){.zp0712{font-size:16px}
.zp0712 .hero,.zp0712 .section,.zp0712 .contact{padding-left:18px;padding-right:18px}
.zp0712 .serviceGrid,.zp0712 .proof{grid-template-columns:1fr}
.zp0712 h1{font-size:clamp(42px,14vw,70px)}
.zp0712 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0712 .monumentalBody{grid-template-columns:1fr}}

.zp0712 .heroActions a,.zp0712 .primary,.zp0712 .ctaBtn,.zp0712 .btnPrimary,.zp0712 .schedule>a,.zp0712 .newsletter>a{transition:all .2s ease}
.zp0712 .heroActions a:hover,.zp0712 .primary:hover,.zp0712 .ctaBtn:hover,.zp0712 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0712 nav a,.zp0712 .nav a,.zp0712 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0712 nav a:hover,.zp0712 .nav a:hover,.zp0712 .footer a:hover{
  text-decoration:underline
}
.zp0712 .serviceGrid article,.zp0712 .projectCard,.zp0712 .teamCard,.zp0712 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0712 .serviceGrid article:hover,.zp0712 .projectCard:hover,.zp0712 .teamCard:hover,.zp0712 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0712 *,.zp0712 *::before,.zp0712 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0712 a,.zp0712 button,.zp0712 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Request a quote</a></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
