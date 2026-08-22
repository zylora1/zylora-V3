import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0023-medical-sophisticated-professional", "family": "Sophisticated Professional", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|manifesto-grid|hours>story>services>team>proof>menu|asymmetric-radius|clean-humanist", "industry": "medical", "hero": "index-led", "navigation": "editorial-index", "layout": "manifesto-grid"};

export default function Template0023({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Primary Care Clinic");
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
  const storyBody = "Foxglove Primary Care Clinic is presented as a real working primary care clinic, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f6fff";
  return <main className="zp0023" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0023{--bg:#eff3ff;--fg:#1a2240;--primary:#5f6fff;--primary-fg:#050505;--secondary:#ff8aa8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0023 *{box-sizing:border-box}
.zp0023 a{color:inherit;text-decoration:none}
.zp0023 h1,.zp0023 h2,.zp0023 h3,.zp0023 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0023 img{max-width:100%;display:block}
.zp0023 button,.zp0023 a{-webkit-tap-highlight-color:transparent}
.zp0023 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0023 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0023 .nav strong{font-family:Avenir, Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0023 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0023 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0023 .nav.index nav{justify-content:flex-end}
.zp0023 .mobileMenu{display:none}
.zp0023 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0023 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0023 .eyebrow,.zp0023 .sectionTitle>span,.zp0023 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0023 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0023 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0023 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0023 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0023 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0023 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0023 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0023 .indexHero li{font:700 18px/1.2 Avenir, Helvetica Neue, Arial, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0023 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0023 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0023 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0023 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0023 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0023 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0023 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0023 .serviceGrid p{color:var(--muted)}
.zp0023 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0023 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0023 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0023 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0023 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0023 .story p{color:var(--muted)}
.zp0023 details{border-top:1px solid var(--border);padding:20px 0}
.zp0023 details summary{font-weight:800;cursor:pointer}
.zp0023 details p{color:var(--muted);max-width:70ch}
.zp0023 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0023 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0023 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Avenir, Helvetica Neue, Arial, sans-serif;margin-bottom:18px}
.zp0023 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0023 .hours dl{margin:0}
.zp0023 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0023 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0023 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0023 .contact .eyebrow{color:var(--bg)}
.zp0023 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0023 .contactMeta{display:grid;gap:10px}
.zp0023 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0023 .heroCopy{animation:enter-22 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-22{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0023 .hero{min-height:auto}
.zp0023 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0023 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0023 .nav nav{display:none}
.zp0023 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0023 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0023 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0023 .mobileMenu nav a{padding:10px 8px}
.zp0023 .hero,.zp0023 .indexHero{grid-template-columns:1fr}
.zp0023 .section,.zp0023 .sectionTitle,.zp0023 .story,.zp0023 .hours,.zp0023 .contact{grid-template-columns:1fr}
.zp0023 .teamGrid{grid-template-columns:1fr 1fr}
.zp0023 .section{display:block}}
@media(max-width:430px){.zp0023{font-size:16px}
.zp0023 .hero,.zp0023 .section,.zp0023 .contact{padding-left:18px;padding-right:18px}
.zp0023 .serviceGrid,.zp0023 .proof,.zp0023 .teamGrid{grid-template-columns:1fr}
.zp0023 h1{font-size:clamp(42px,14vw,70px)}
.zp0023 .nav.index{grid-template-columns:1fr auto}
.zp0023 .nav.index>span{display:none}}

.zp0023 .heroActions a,.zp0023 .primary,.zp0023 .ctaBtn,.zp0023 .btnPrimary,.zp0023 .schedule>a,.zp0023 .newsletter>a{transition:all .2s ease}
.zp0023 .heroActions a:hover,.zp0023 .primary:hover,.zp0023 .ctaBtn:hover,.zp0023 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0023 nav a,.zp0023 .nav a,.zp0023 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0023 nav a:hover,.zp0023 .nav a:hover,.zp0023 .footer a:hover{
  color:var(--primary)
}
.zp0023 .serviceGrid article,.zp0023 .projectCard,.zp0023 .teamCard,.zp0023 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0023 .serviceGrid article:hover,.zp0023 .projectCard:hover,.zp0023 .teamCard:hover,.zp0023 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0023 *,.zp0023 *::before,.zp0023 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0023 a,.zp0023 button,.zp0023 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
