import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0029-medical-cyberpunk", "family": "Cyberpunk", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|gallery-index|hours>research>proof>pricing>products>services|hard-outline|condensed-editorial", "industry": "medical", "hero": "floating-panels", "navigation": "compact-floating", "layout": "gallery-index"};

export default function Template0029({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Primary Care Clinic");
  const headline = String(content.headline || "Thoughtful primary care built around continuity, access, and informed decisions.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Annual physicals", "Same-day visits", "Chronic care", "Vaccinations", "Health screenings"];
  const industryLabel = "Primary care clinic";
  const serviceNotes = ["Thorough assessment with a full review of your history and current concerns.", "Evidence-based treatment options explained clearly, so you can make informed decisions.", "Seamless referral network for specialist care when needed.", "Ongoing monitoring with follow-up built into every care plan.", "Preventive guidance tailored to your lifestyle and long-term goals."];
  const proofPoints = ["GMC/NMC registered", "Same-week appointments", "Results reviewed together", "Referrals within 24h"];
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  return <main className="zp0029" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0029{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0029 *{box-sizing:border-box}
.zp0029 a{color:inherit;text-decoration:none}
.zp0029 h1,.zp0029 h2,.zp0029 h3,.zp0029 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0029 img{max-width:100%;display:block}
.zp0029 button,.zp0029 a{-webkit-tap-highlight-color:transparent}
.zp0029 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0029 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0029 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0029 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0029 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0029 .mobileMenu{display:none}
.zp0029 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0029 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0029 .eyebrow,.zp0029 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0029 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0029 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0029 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0029 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0029 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0029 .visual,.zp0029 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0029 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0029 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0029 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0029 .heroPhoto{object-fit:cover}
.zp0029 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0029 .floatStack{position:relative;min-height:500px}
.zp0029 .floatStack>*{position:absolute}
.zp0029 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0029 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0029 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0029 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0029 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0029 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0029 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0029 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0029 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0029 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0029 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0029 .serviceGrid p{color:var(--muted)}
.zp0029 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0029 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0029 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0029 details{border-top:1px solid var(--border);padding:20px 0}
.zp0029 details summary{font-weight:800;cursor:pointer}
.zp0029 details p{color:var(--muted);max-width:70ch}
.zp0029 .priceRows{border-top:1px solid var(--border)}
.zp0029 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0029 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0029 .hours dl{margin:0}
.zp0029 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0029 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0029 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0029 .p1,.zp0029 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0029 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0029 .researchRows{max-width:900px;margin-left:auto}
.zp0029 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0029 .contact .eyebrow{color:var(--bg)}
.zp0029 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0029 .contactMeta{display:grid;gap:10px}
.zp0029 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0029 .heroCopy{animation:enter-28 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-28{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0029 .hero{min-height:auto}
.zp0029 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0029 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0029 .nav nav{display:none}
.zp0029 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0029 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0029 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0029 .mobileMenu nav a{padding:10px 8px}
.zp0029 .hero,.zp0029 .floatingHero{grid-template-columns:1fr}
.zp0029 .section,.zp0029 .sectionTitle,.zp0029 .hours,.zp0029 .contact{grid-template-columns:1fr}
.zp0029 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0029 .section{display:block}}
@media(max-width:430px){.zp0029{font-size:16px}
.zp0029 .hero,.zp0029 .section,.zp0029 .contact{padding-left:18px;padding-right:18px}
.zp0029 .serviceGrid,.zp0029 .proof,.zp0029 .collectionGrid{grid-template-columns:1fr}
.zp0029 h1{font-size:clamp(42px,14vw,70px)}
.zp0029 .priceRows article{grid-template-columns:1fr}}

.zp0029 .heroActions a,.zp0029 .primary,.zp0029 .ctaBtn,.zp0029 .btnPrimary,.zp0029 .schedule>a,.zp0029 .newsletter>a{transition:all .2s ease}
.zp0029 .heroActions a:hover,.zp0029 .primary:hover,.zp0029 .ctaBtn:hover,.zp0029 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0029 nav a,.zp0029 .nav a,.zp0029 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0029 nav a:hover,.zp0029 .nav a:hover,.zp0029 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0029 .serviceGrid article,.zp0029 .projectCard,.zp0029 .teamCard,.zp0029 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0029 .serviceGrid article:hover,.zp0029 .projectCard:hover,.zp0029 .teamCard:hover,.zp0029 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0029 *,.zp0029 *::before,.zp0029 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0029 a,.zp0029 button,.zp0029 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">28</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / gallery-index</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
