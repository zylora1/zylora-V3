import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0245-hotel-retro-computing", "family": "Retro Computing", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|gallery-index|hours>process>proof>research>services>availability|ticket-edge|condensed-editorial", "industry": "hotel", "hero": "image-collage", "navigation": "lower-third", "layout": "gallery-index"};

export default function Template0245({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Boutique Hotel");
  const headline = String(content.headline || "A design-led stay shaped by place, quiet details, and genuinely useful hospitality.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Rooms and suites", "Dining", "Spa", "Private events", "Local experiences"];
  const industryLabel = "Boutique hotel";
  const serviceNotes = ["Rooms from studio to suite, each styled individually — no two are identical.", "Breakfast sourced within 30 miles: menus change with the seasons.", "Concierge-arranged experiences: hiking guides, private dining, gallery access.", "Business facilities including private meeting rooms with AV and catering.", "Flexible check-in and late check-out on request — we work around your plans."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0245" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0245{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0245 *{box-sizing:border-box}
.zp0245 a{color:inherit;text-decoration:none}
.zp0245 h1,.zp0245 h2,.zp0245 h3,.zp0245 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0245 img{max-width:100%;display:block}
.zp0245 button,.zp0245 a{-webkit-tap-highlight-color:transparent}
.zp0245 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0245 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0245 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0245 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0245 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0245 .mobileMenu{display:none}
.zp0245 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0245 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0245 .eyebrow,.zp0245 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0245 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0245 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0245 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0245 .heroActions a,.zp0245 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0245 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0245 .visual,.zp0245 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0245 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0245 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0245 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0245 .heroPhoto{object-fit:cover}
.zp0245 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0245 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0245 .collage>*:first-child{grid-row:1/3}
.zp0245 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0245 .miniVisual.alt{background:var(--secondary)}
.zp0245 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0245 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0245 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0245 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0245 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0245 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0245 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0245 .serviceGrid p{color:var(--muted)}
.zp0245 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0245 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0245 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0245 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0245 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0245 details{border-top:1px solid var(--border);padding:20px 0}
.zp0245 details summary{font-weight:800;cursor:pointer}
.zp0245 details p{color:var(--muted);max-width:70ch}
.zp0245 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0245 .hours dl{margin:0}
.zp0245 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0245 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0245 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0245 .researchRows{max-width:900px;margin-left:auto}
.zp0245 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0245 .contact .eyebrow{color:var(--bg)}
.zp0245 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0245 .contactMeta{display:grid;gap:10px}
.zp0245 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0245{image-rendering:pixelated}
.zp0245 *{border-radius:0!important}
.zp0245 .visual{background:repeating-linear-gradient(90deg,var(--surface) 0 8px,color-mix(in srgb,var(--primary) 40%,var(--surface)) 9px 10px)}
.zp0245 .heroCopy{animation:enter-244 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-244{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0245 .hero{min-height:auto}
.zp0245 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0245 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0245 .nav nav{display:none}
.zp0245 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0245 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0245 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0245 .mobileMenu nav a{padding:10px 8px}
.zp0245 .hero,.zp0245 .collageHero{grid-template-columns:1fr}
.zp0245 .section,.zp0245 .sectionTitle,.zp0245 .hours,.zp0245 .contact{grid-template-columns:1fr}
.zp0245 .section{display:block}}
@media(max-width:430px){.zp0245{font-size:16px}
.zp0245 .hero,.zp0245 .section,.zp0245 .contact{padding-left:18px;padding-right:18px}
.zp0245 .serviceGrid,.zp0245 .proof{grid-template-columns:1fr}
.zp0245 h1{font-size:clamp(42px,14vw,70px)}}

.zp0245 .heroActions a,.zp0245 .primary,.zp0245 .ctaBtn,.zp0245 .btnPrimary,.zp0245 .schedule>a,.zp0245 .newsletter>a{transition:all .2s ease}
.zp0245 .heroActions a:hover,.zp0245 .primary:hover,.zp0245 .ctaBtn:hover,.zp0245 .btnPrimary:hover{
  border-color:var(--primary);color:var(--primary)
}
.zp0245 nav a,.zp0245 .nav a,.zp0245 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0245 nav a:hover,.zp0245 .nav a:hover,.zp0245 .footer a:hover{
  color:var(--primary)
}
.zp0245 .serviceGrid article,.zp0245 .projectCard,.zp0245 .teamCard,.zp0245 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0245 .serviceGrid article:hover,.zp0245 .projectCard:hover,.zp0245 .teamCard:hover,.zp0245 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0245 *,.zp0245 *::before,.zp0245 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0245 a,.zp0245 button,.zp0245 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">44</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Computing / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
