import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0021-medical-earthy", "family": "Earthy", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|architectural-grid|awards>features>story>proof>integrations>collection>services|ticket-edge|humanist-classic", "industry": "medical", "hero": "image-collage", "navigation": "lower-third", "layout": "architectural-grid"};

export default function Template0021({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Primary Care Clinic");
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
  const storyQuote = "\u201cThoughtful primary care built around continuity, access, and informed decisions.\u201d";
  const storyBody = "Studio Nine Primary Care Clinic is presented as a real working primary care clinic, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0021" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0021{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0021 *{box-sizing:border-box}
.zp0021 a{color:inherit;text-decoration:none}
.zp0021 h1,.zp0021 h2,.zp0021 h3,.zp0021 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0021 img{max-width:100%;display:block}
.zp0021 button,.zp0021 a{-webkit-tap-highlight-color:transparent}
.zp0021 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0021 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0021 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0021 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0021 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0021 .mobileMenu{display:none}
.zp0021 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0021 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0021 .eyebrow,.zp0021 .sectionTitle>span,.zp0021 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0021 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0021 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0021 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0021 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0021 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0021 .visual,.zp0021 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0021 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0021 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0021 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0021 .heroPhoto{object-fit:cover}
.zp0021 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0021 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0021 .collage>*:first-child{grid-row:1/3}
.zp0021 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0021 .miniVisual.alt{background:var(--secondary)}
.zp0021 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0021 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0021 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0021 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0021 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0021 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0021 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0021 .serviceGrid p{color:var(--muted)}
.zp0021 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0021 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0021 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0021 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0021 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0021 .story p{color:var(--muted)}
.zp0021 details{border-top:1px solid var(--border);padding:20px 0}
.zp0021 details summary{font-weight:800;cursor:pointer}
.zp0021 details p{color:var(--muted);max-width:70ch}
.zp0021 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0021 .features ul{list-style:none;margin:0;padding:0}
.zp0021 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0021 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0021 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0021 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0021 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0021 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0021 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0021 .p1,.zp0021 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0021 .awards>div{max-width:800px;margin-left:auto}
.zp0021 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0021 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0021 .contact .eyebrow{color:var(--bg)}
.zp0021 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0021 .contactMeta{display:grid;gap:10px}
.zp0021 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0021 .heroCopy{animation:enter-20 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-20{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0021 .hero{min-height:auto}
.zp0021 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0021 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0021 .nav nav{display:none}
.zp0021 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0021 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0021 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0021 .mobileMenu nav a{padding:10px 8px}
.zp0021 .hero,.zp0021 .collageHero{grid-template-columns:1fr}
.zp0021 .section,.zp0021 .sectionTitle,.zp0021 .story,.zp0021 .features,.zp0021 .contact{grid-template-columns:1fr}
.zp0021 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0021 .section{display:block}}
@media(max-width:430px){.zp0021{font-size:16px}
.zp0021 .hero,.zp0021 .section,.zp0021 .contact{padding-left:18px;padding-right:18px}
.zp0021 .serviceGrid,.zp0021 .proof,.zp0021 .collectionGrid{grid-template-columns:1fr}
.zp0021 h1{font-size:clamp(42px,14vw,70px)}}

.zp0021 .heroActions a,.zp0021 .primary,.zp0021 .ctaBtn,.zp0021 .btnPrimary,.zp0021 .schedule>a,.zp0021 .newsletter>a{transition:all .2s ease}
.zp0021 .heroActions a:hover,.zp0021 .primary:hover,.zp0021 .ctaBtn:hover,.zp0021 .btnPrimary:hover{
  opacity:.85;transform:translateY(-1px)
}
.zp0021 nav a,.zp0021 .nav a,.zp0021 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0021 nav a:hover,.zp0021 .nav a:hover,.zp0021 .footer a:hover{
  color:var(--primary)
}
.zp0021 .serviceGrid article,.zp0021 .projectCard,.zp0021 .teamCard,.zp0021 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0021 .serviceGrid article:hover,.zp0021 .projectCard:hover,.zp0021 .teamCard:hover,.zp0021 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0021 *,.zp0021 *::before,.zp0021 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0021 a,.zp0021 button,.zp0021 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">20</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Earthy / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
