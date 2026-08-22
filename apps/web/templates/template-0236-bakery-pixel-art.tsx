import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0236-bakery-pixel-art", "family": "Pixel Art", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|conversion-first|research>proof>process>case-study>comparison>services|notched|product-ui", "industry": "bakery", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "conversion-first"};

export default function Template0236({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0236" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0236{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0236 *{box-sizing:border-box}
.zp0236 a{color:inherit;text-decoration:none}
.zp0236 h1,.zp0236 h2,.zp0236 h3,.zp0236 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0236 img{max-width:100%;display:block}
.zp0236 button,.zp0236 a{-webkit-tap-highlight-color:transparent}
.zp0236 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0236 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0236 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0236 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0236 .mobileMenu{display:none}
.zp0236 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0236 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0236 .eyebrow,.zp0236 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0236 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0236 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0236 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0236 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0236 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0236 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0236 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0236 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0236 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0236 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0236 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0236 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0236 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0236 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0236 .serviceGrid p{color:var(--muted)}
.zp0236 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0236 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0236 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0236 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0236 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0236 details{border-top:1px solid var(--border);padding:20px 0}
.zp0236 details summary{font-weight:800;cursor:pointer}
.zp0236 details p{color:var(--muted);max-width:70ch}
.zp0236 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0236 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0236 .projects article:nth-child(2){transform:translateY(32px)}
.zp0236 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0236 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0236 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0236 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0236 .researchRows{max-width:900px;margin-left:auto}
.zp0236 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0236 .contact .eyebrow{color:var(--bg)}
.zp0236 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0236 .contactMeta{display:grid;gap:10px}
.zp0236 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0236{image-rendering:pixelated}
.zp0236 *{border-radius:0!important}
.zp0236 .heroCopy{animation:enter-235 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-235{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0236 .hero{min-height:auto}
.zp0236 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0236 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0236 .nav nav{display:none}
.zp0236 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0236 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0236 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0236 .mobileMenu nav a{padding:10px 8px}
.zp0236 .hero,.zp0236 .navLedHero{grid-template-columns:1fr}
.zp0236 .section,.zp0236 .sectionTitle,.zp0236 .contact{grid-template-columns:1fr}
.zp0236 .projects .projectGrid{grid-template-columns:1fr}
.zp0236 .projects article:nth-child(2){transform:none}
.zp0236 .section{display:block}}
@media(max-width:430px){.zp0236{font-size:16px}
.zp0236 .hero,.zp0236 .section,.zp0236 .contact{padding-left:18px;padding-right:18px}
.zp0236 .serviceGrid,.zp0236 .proof,.zp0236 .compareGrid{grid-template-columns:1fr}
.zp0236 h1{font-size:clamp(42px,14vw,70px)}}

.zp0236 .heroActions a,.zp0236 .primary,.zp0236 .ctaBtn,.zp0236 .btnPrimary,.zp0236 .schedule>a,.zp0236 .newsletter>a{transition:all .2s ease}
.zp0236 .heroActions a:hover,.zp0236 .primary:hover,.zp0236 .ctaBtn:hover,.zp0236 .btnPrimary:hover{
  image-rendering:pixelated;box-shadow:4px 4px 0 var(--primary)
}
.zp0236 nav a,.zp0236 .nav a,.zp0236 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0236 nav a:hover,.zp0236 .nav a:hover,.zp0236 .footer a:hover{
  color:var(--primary)
}
.zp0236 .serviceGrid article,.zp0236 .projectCard,.zp0236 .teamCard,.zp0236 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0236 .serviceGrid article:hover,.zp0236 .projectCard:hover,.zp0236 .teamCard:hover,.zp0236 .bentoCard:hover{
  box-shadow:4px 4px 0 var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0236 *,.zp0236 *::before,.zp0236 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0236 a,.zp0236 button,.zp0236 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pixel Art / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
