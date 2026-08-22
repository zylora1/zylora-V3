import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0028-medical-swiss-design", "family": "Swiss Design", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|research-led|proof>team>materials>community>services|notched|sports-editorial", "industry": "medical", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "research-led"};

export default function Template0028({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Primary Care Clinic");
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
  const storyBody = "Elm Primary Care Clinic is presented as a real working primary care clinic, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0028" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0028{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0028 *{box-sizing:border-box}
.zp0028 a{color:inherit;text-decoration:none}
.zp0028 h1,.zp0028 h2,.zp0028 h3,.zp0028 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0028 img{max-width:100%;display:block}
.zp0028 button,.zp0028 a{-webkit-tap-highlight-color:transparent}
.zp0028 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0028 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0028 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0028 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0028 .mobileMenu{display:none}
.zp0028 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0028 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0028 .eyebrow,.zp0028 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0028 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0028 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0028 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0028 .heroActions a,.zp0028 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0028 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0028 .mapHero{grid-template-columns:1fr 1fr}
.zp0028 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0028 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0028 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0028 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0028 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0028 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0028 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0028 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0028 .serviceGrid p{color:var(--muted)}
.zp0028 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0028 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0028 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0028 details{border-top:1px solid var(--border);padding:20px 0}
.zp0028 details summary{font-weight:800;cursor:pointer}
.zp0028 details p{color:var(--muted);max-width:70ch}
.zp0028 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0028 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0028 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;margin-bottom:18px}
.zp0028 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0028 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0028 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0028 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0028 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0028 .contact .eyebrow{color:var(--bg)}
.zp0028 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0028 .contactMeta{display:grid;gap:10px}
.zp0028 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0028 .heroCopy{animation:enter-27 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-27{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0028 .hero{min-height:auto}
.zp0028 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0028 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0028 .nav nav{display:none}
.zp0028 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0028 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0028 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0028 .mobileMenu nav a{padding:10px 8px}
.zp0028 .hero,.zp0028 .mapHero{grid-template-columns:1fr}
.zp0028 .section,.zp0028 .sectionTitle,.zp0028 .contact{grid-template-columns:1fr}
.zp0028 .teamGrid{grid-template-columns:1fr 1fr}
.zp0028 .section{display:block}}
@media(max-width:430px){.zp0028{font-size:16px}
.zp0028 .hero,.zp0028 .section,.zp0028 .contact{padding-left:18px;padding-right:18px}
.zp0028 .serviceGrid,.zp0028 .proof,.zp0028 .teamGrid{grid-template-columns:1fr}
.zp0028 h1{font-size:clamp(42px,14vw,70px)}}

.zp0028 .heroActions a,.zp0028 .primary,.zp0028 .ctaBtn,.zp0028 .btnPrimary,.zp0028 .schedule>a,.zp0028 .newsletter>a{transition:all .2s ease}
.zp0028 .heroActions a:hover,.zp0028 .primary:hover,.zp0028 .ctaBtn:hover,.zp0028 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0028 nav a,.zp0028 .nav a,.zp0028 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0028 nav a:hover,.zp0028 .nav a:hover,.zp0028 .footer a:hover{
  text-decoration:underline
}
.zp0028 .serviceGrid article,.zp0028 .projectCard,.zp0028 .teamCard,.zp0028 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0028 .serviceGrid article:hover,.zp0028 .projectCard:hover,.zp0028 .teamCard:hover,.zp0028 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0028 *,.zp0028 *::before,.zp0028 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0028 a,.zp0028 button,.zp0028 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
