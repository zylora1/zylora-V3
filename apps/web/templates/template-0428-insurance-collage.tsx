import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0428-insurance-collage", "family": "Collage", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|booking-led|press>packages>pricing>services>community>proof|notched|product-ui", "industry": "insurance", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "booking-led"};

export default function Template0428({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Insurance Brokerage");
  const headline = String(content.headline || "Independent cover advice with plain-language comparisons and help when claims matter.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Business insurance", "Home cover", "Motor", "Health", "Claims support"];
  const industryLabel = "Insurance brokerage";
  const serviceNotes = ["Independent broker with access to 100+ insurers — we find the right fit, not the easy one.", "Annual review service: we re-tender your policies before renewal without you asking.", "Claims support at 3am if needed — a real person, not an automated system.", "Specialist schemes for professions, trades, and high-value personal lines.", "Risk management consultancy included in commercial accounts at no additional charge."];
  const proofPoints = ["FCA regulated", "BIBA member", "Claims support 24/7", "Specialist scheme access"];
  const storyBody = "Stillwater Insurance Brokerage is presented as a real working insurance brokerage, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My previous broker just renewed everything automatically. This team found the same cover for 23% less at my first review.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Insurance brokerage / Project A", "Insurance brokerage / Project B", "Insurance brokerage / Project C", "Insurance brokerage / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Independent cover advice with plain-language comparisons and help when claims matter. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0428" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0428{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0428 *{box-sizing:border-box}
.zp0428 a{color:inherit;text-decoration:none}
.zp0428 h1,.zp0428 h2,.zp0428 h3,.zp0428 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0428 img{max-width:100%;display:block}
.zp0428 button,.zp0428 a{-webkit-tap-highlight-color:transparent}
.zp0428 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0428 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0428 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0428 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0428 .mobileMenu{display:none}
.zp0428 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0428 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0428 .eyebrow,.zp0428 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0428 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0428 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0428 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0428 .heroActions a,.zp0428 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0428 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0428 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0428 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0428 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0428 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0428 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0428 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0428 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0428 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0428 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0428 .serviceGrid p{color:var(--muted)}
.zp0428 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0428 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0428 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0428 details{border-top:1px solid var(--border);padding:20px 0}
.zp0428 details summary{font-weight:800;cursor:pointer}
.zp0428 details p{color:var(--muted);max-width:70ch}
.zp0428 .priceRows{border-top:1px solid var(--border)}
.zp0428 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0428 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0428 .awards>div{max-width:800px;margin-left:auto}
.zp0428 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0428 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0428 .packages>.sectionTitle{grid-column:1/-1}
.zp0428 .packages article{padding:24px;border:1px solid var(--border)}
.zp0428 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0428 .contact .eyebrow{color:var(--bg)}
.zp0428 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0428 .contactMeta{display:grid;gap:10px}
.zp0428 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0428{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0428 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0428 .heroCopy{animation:enter-427 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-427{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0428 .hero{min-height:auto}
.zp0428 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0428 .proof{grid-template-columns:1fr 1fr}
.zp0428 .packages{grid-template-columns:1fr 1fr}
.zp0428 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0428 .nav nav{display:none}
.zp0428 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0428 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0428 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0428 .mobileMenu nav a{padding:10px 8px}
.zp0428 .hero,.zp0428 .navLedHero{grid-template-columns:1fr}
.zp0428 .section,.zp0428 .sectionTitle,.zp0428 .contact{grid-template-columns:1fr}
.zp0428 .section{display:block}}
@media(max-width:430px){.zp0428{font-size:16px}
.zp0428 .hero,.zp0428 .section,.zp0428 .contact{padding-left:18px;padding-right:18px}
.zp0428 .serviceGrid,.zp0428 .proof,.zp0428 .packages{grid-template-columns:1fr}
.zp0428 h1{font-size:clamp(42px,14vw,70px)}
.zp0428 .priceRows article{grid-template-columns:1fr}}

.zp0428 .heroActions a,.zp0428 .primary,.zp0428 .ctaBtn,.zp0428 .btnPrimary,.zp0428 .schedule>a,.zp0428 .newsletter>a{transition:all .2s ease}
.zp0428 .heroActions a:hover,.zp0428 .primary:hover,.zp0428 .ctaBtn:hover,.zp0428 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0428 nav a,.zp0428 .nav a,.zp0428 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0428 nav a:hover,.zp0428 .nav a:hover,.zp0428 .footer a:hover{
  color:var(--primary)
}
.zp0428 .serviceGrid article,.zp0428 .projectCard,.zp0428 .teamCard,.zp0428 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0428 .serviceGrid article:hover,.zp0428 .projectCard:hover,.zp0428 .teamCard:hover,.zp0428 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0428 *,.zp0428 *::before,.zp0428 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0428 a,.zp0428 button,.zp0428 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Schedule a consultation</a><a href="#services">Explore</a></div></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Schedule a consultation</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
