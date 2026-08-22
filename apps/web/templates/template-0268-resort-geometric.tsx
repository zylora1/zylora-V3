import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0268-resort-geometric", "family": "Geometric", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|single-column-longform|location>proof>services>metrics>community|notched|sports-editorial", "industry": "resort", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "single-column-longform"};

export default function Template0268({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Resort");
  const headline = String(content.headline || "A destination stay combining privacy, landscape, food, and considered service.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Villas", "Wellness", "Dining", "Excursions", "Celebrations"];
  const industryLabel = "Resort";
  const serviceNotes = ["All-inclusive packages covering dining, spa, water sports, and excursions.", "Private beach with supervised swim zones and non-motorised water sports included.", "Kids' programme for ages 4–14 supervised by qualified childcare professionals.", "Adults-only pool deck and lounge for guests seeking a quieter experience.", "Dedicated wedding and event planning service with full on-site coordination."];
  const proofPoints = ["TripAdvisor Travellers' Choice", "Butler service on villas", "Included water sports", "Non-motorised sports free"];
  const storyBody = "Stillwater Resort is presented as a real working resort, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The family holiday I didn't think we could afford to be perfect. The team anticipated everything before we asked.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Resort / Project A", "Resort / Project B", "Resort / Project C", "Resort / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A destination stay combining privacy, landscape, food, and considered service. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0268" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0268{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0268 *{box-sizing:border-box}
.zp0268 a{color:inherit;text-decoration:none}
.zp0268 h1,.zp0268 h2,.zp0268 h3,.zp0268 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0268 img{max-width:100%;display:block}
.zp0268 button,.zp0268 a{-webkit-tap-highlight-color:transparent}
.zp0268 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0268 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0268 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0268 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0268 .mobileMenu{display:none}
.zp0268 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0268 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0268 .eyebrow,.zp0268 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0268 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0268 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0268 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0268 .heroActions a,.zp0268 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0268 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0268 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0268 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0268 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0268 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0268 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0268 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0268 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0268 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0268 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0268 .serviceGrid p{color:var(--muted)}
.zp0268 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0268 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0268 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0268 details{border-top:1px solid var(--border);padding:20px 0}
.zp0268 details summary{font-weight:800;cursor:pointer}
.zp0268 details p{color:var(--muted);max-width:70ch}
.zp0268 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0268 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0268 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0268 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0268 .metrics div{background:var(--bg);padding:30px}
.zp0268 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;color:var(--primary)}
.zp0268 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0268 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0268 .contact .eyebrow{color:var(--bg)}
.zp0268 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0268 .contactMeta{display:grid;gap:10px}
.zp0268 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0268 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0268 .sectionTitle{display:block}
.zp0268 .heroCopy{animation:enter-267 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-267{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0268 .hero{min-height:auto}
.zp0268 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0268 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0268 .nav nav{display:none}
.zp0268 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0268 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0268 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0268 .mobileMenu nav a{padding:10px 8px}
.zp0268 .hero,.zp0268 .navLedHero{grid-template-columns:1fr}
.zp0268 .section,.zp0268 .sectionTitle,.zp0268 .location,.zp0268 .contact{grid-template-columns:1fr}
.zp0268 .metrics{grid-template-columns:1fr 1fr}
.zp0268 .section{display:block}}
@media(max-width:430px){.zp0268{font-size:16px}
.zp0268 .hero,.zp0268 .section,.zp0268 .contact{padding-left:18px;padding-right:18px}
.zp0268 .serviceGrid,.zp0268 .proof,.zp0268 .metrics{grid-template-columns:1fr}
.zp0268 h1{font-size:clamp(42px,14vw,70px)}}

.zp0268 .heroActions a,.zp0268 .primary,.zp0268 .ctaBtn,.zp0268 .btnPrimary,.zp0268 .schedule>a,.zp0268 .newsletter>a{transition:all .2s ease}
.zp0268 .heroActions a:hover,.zp0268 .primary:hover,.zp0268 .ctaBtn:hover,.zp0268 .btnPrimary:hover{
  transform:scale(1.04)
}
.zp0268 nav a,.zp0268 .nav a,.zp0268 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0268 nav a:hover,.zp0268 .nav a:hover,.zp0268 .footer a:hover{
  color:var(--primary)
}
.zp0268 .serviceGrid article,.zp0268 .projectCard,.zp0268 .teamCard,.zp0268 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0268 .serviceGrid article:hover,.zp0268 .projectCard:hover,.zp0268 .teamCard:hover,.zp0268 .bentoCard:hover{
  transform:scale(1.03) rotate(1deg)
}
@media(prefers-reduced-motion:reduce){.zp0268 *,.zp0268 *::before,.zp0268 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0268 a,.zp0268 button,.zp0268 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Geometric / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
