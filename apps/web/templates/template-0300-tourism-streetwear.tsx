import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0300-tourism-streetwear", "family": "Streetwear", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|stacked-posters|proof>products>metrics>story>community>packages>services|notched|literary", "industry": "tourism", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "stacked-posters"};

export default function Template0300({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const storyQuote = "\u201cLocal guides, small groups, and itineraries that go beyond the obvious stops.\u201d";
  const storyBody = "Stillwater Tour Operator is presented as a real working tour operator, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0300" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0300{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0300 *{box-sizing:border-box}
.zp0300 a{color:inherit;text-decoration:none}
.zp0300 h1,.zp0300 h2,.zp0300 h3,.zp0300 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0300 img{max-width:100%;display:block}
.zp0300 button,.zp0300 a{-webkit-tap-highlight-color:transparent}
.zp0300 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0300 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0300 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0300 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0300 .mobileMenu{display:none}
.zp0300 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0300 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0300 .eyebrow,.zp0300 .sectionTitle>span,.zp0300 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0300 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0300 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0300 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0300 .heroActions a,.zp0300 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0300 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0300 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0300 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0300 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0300 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0300 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0300 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0300 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0300 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0300 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0300 .serviceGrid p{color:var(--muted)}
.zp0300 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0300 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0300 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0300 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0300 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0300 .story p{color:var(--muted)}
.zp0300 details{border-top:1px solid var(--border);padding:20px 0}
.zp0300 details summary{font-weight:800;cursor:pointer}
.zp0300 details p{color:var(--muted);max-width:70ch}
.zp0300 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0300 .metrics div{background:var(--bg);padding:30px}
.zp0300 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Garamond, Georgia, serif;color:var(--primary)}
.zp0300 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0300 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0300 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0300 .p1,.zp0300 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0300 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0300 .packages>.sectionTitle{grid-column:1/-1}
.zp0300 .packages article{padding:24px;border:1px solid var(--border)}
.zp0300 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0300 .contact .eyebrow{color:var(--bg)}
.zp0300 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0300 .contactMeta{display:grid;gap:10px}
.zp0300 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0300 .hero{min-height:auto}
.zp0300 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0300 .proof{grid-template-columns:1fr 1fr}
.zp0300 .packages{grid-template-columns:1fr 1fr}
.zp0300 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0300 .nav nav{display:none}
.zp0300 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0300 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0300 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0300 .mobileMenu nav a{padding:10px 8px}
.zp0300 .hero,.zp0300 .navLedHero{grid-template-columns:1fr}
.zp0300 .section,.zp0300 .sectionTitle,.zp0300 .story,.zp0300 .contact{grid-template-columns:1fr}
.zp0300 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0300 .metrics{grid-template-columns:1fr 1fr}
.zp0300 .section{display:block}}
@media(max-width:430px){.zp0300{font-size:16px}
.zp0300 .hero,.zp0300 .section,.zp0300 .contact{padding-left:18px;padding-right:18px}
.zp0300 .serviceGrid,.zp0300 .proof,.zp0300 .collectionGrid,.zp0300 .metrics,.zp0300 .packages{grid-template-columns:1fr}
.zp0300 h1{font-size:clamp(42px,14vw,70px)}}

.zp0300 .heroActions a,.zp0300 .primary,.zp0300 .ctaBtn,.zp0300 .btnPrimary,.zp0300 .schedule>a,.zp0300 .newsletter>a{transition:all .2s ease}
.zp0300 .heroActions a:hover,.zp0300 .primary:hover,.zp0300 .ctaBtn:hover,.zp0300 .btnPrimary:hover{
  background:var(--fg);color:var(--bg);transform:skewX(-2deg)
}
.zp0300 nav a,.zp0300 .nav a,.zp0300 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0300 nav a:hover,.zp0300 .nav a:hover,.zp0300 .footer a:hover{
  color:var(--primary)
}
.zp0300 .serviceGrid article,.zp0300 .projectCard,.zp0300 .teamCard,.zp0300 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0300 .serviceGrid article:hover,.zp0300 .projectCard:hover,.zp0300 .teamCard:hover,.zp0300 .bentoCard:hover{
  transform:skewX(-1deg)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0300 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0300 .sectionTitle,.zp0300 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0300 *,.zp0300 *::before,.zp0300 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0300 a,.zp0300 button,.zp0300 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Streetwear / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
