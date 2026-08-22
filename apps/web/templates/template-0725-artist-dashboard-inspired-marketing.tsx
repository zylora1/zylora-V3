import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0725-artist-dashboard-inspired-marketing", "family": "Dashboard-inspired Marketing", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|schedule-led|process>services>packages>comparison>awards>proof|ticket-edge|condensed-editorial", "industry": "artist", "hero": "image-collage", "navigation": "lower-third", "layout": "schedule-led"};

export default function Template0725({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0725" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0725{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0725 *{box-sizing:border-box}
.zp0725 a{color:inherit;text-decoration:none}
.zp0725 h1,.zp0725 h2,.zp0725 h3,.zp0725 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0725 img{max-width:100%;display:block}
.zp0725 button,.zp0725 a{-webkit-tap-highlight-color:transparent}
.zp0725 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0725 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0725 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0725 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0725 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0725 .mobileMenu{display:none}
.zp0725 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0725 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0725 .eyebrow,.zp0725 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0725 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0725 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0725 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0725 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0725 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0725 .visual,.zp0725 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0725 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0725 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0725 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0725 .heroPhoto{object-fit:cover}
.zp0725 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0725 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0725 .collage>*:first-child{grid-row:1/3}
.zp0725 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0725 .miniVisual.alt{background:var(--secondary)}
.zp0725 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0725 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0725 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0725 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0725 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0725 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0725 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0725 .serviceGrid p{color:var(--muted)}
.zp0725 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0725 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0725 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0725 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0725 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0725 details{border-top:1px solid var(--border);padding:20px 0}
.zp0725 details summary{font-weight:800;cursor:pointer}
.zp0725 details p{color:var(--muted);max-width:70ch}
.zp0725 .awards>div{max-width:800px;margin-left:auto}
.zp0725 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0725 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0725 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0725 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0725 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0725 .packages>.sectionTitle{grid-column:1/-1}
.zp0725 .packages article{padding:24px;border:1px solid var(--border)}
.zp0725 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0725 .contact .eyebrow{color:var(--bg)}
.zp0725 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0725 .contactMeta{display:grid;gap:10px}
.zp0725 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0725 .heroCopy{animation:enter-724 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-724{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0725 .hero{min-height:auto}
.zp0725 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0725 .proof{grid-template-columns:1fr 1fr}
.zp0725 .packages{grid-template-columns:1fr 1fr}
.zp0725 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0725 .nav nav{display:none}
.zp0725 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0725 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0725 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0725 .mobileMenu nav a{padding:10px 8px}
.zp0725 .hero,.zp0725 .collageHero{grid-template-columns:1fr}
.zp0725 .section,.zp0725 .sectionTitle,.zp0725 .contact{grid-template-columns:1fr}
.zp0725 .section{display:block}}
@media(max-width:430px){.zp0725{font-size:16px}
.zp0725 .hero,.zp0725 .section,.zp0725 .contact{padding-left:18px;padding-right:18px}
.zp0725 .serviceGrid,.zp0725 .proof,.zp0725 .packages,.zp0725 .compareGrid{grid-template-columns:1fr}
.zp0725 h1{font-size:clamp(42px,14vw,70px)}}

.zp0725 .heroActions a,.zp0725 .primary,.zp0725 .ctaBtn,.zp0725 .btnPrimary,.zp0725 .schedule>a,.zp0725 .newsletter>a{transition:all .2s ease}
.zp0725 .heroActions a:hover,.zp0725 .primary:hover,.zp0725 .ctaBtn:hover,.zp0725 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0725 nav a,.zp0725 .nav a,.zp0725 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0725 nav a:hover,.zp0725 .nav a:hover,.zp0725 .footer a:hover{
  color:var(--primary)
}
.zp0725 .serviceGrid article,.zp0725 .projectCard,.zp0725 .teamCard,.zp0725 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0725 .serviceGrid article:hover,.zp0725 .projectCard:hover,.zp0725 .teamCard:hover,.zp0725 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.12)
}
@media(prefers-reduced-motion:reduce){.zp0725 *,.zp0725 *::before,.zp0725 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0725 a,.zp0725 button,.zp0725 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">24</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Dashboard-inspired Marketing / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
