import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0124-sports-collage", "family": "Collage", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|single-column-longform|materials>proof>services>newsletter>values|notched|sports-editorial", "industry": "sports", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "single-column-longform"};

export default function Template0124({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff7a59";
  return <main className="zp0124" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0124{--bg:#0c1020;--fg:#eff2ff;--primary:#ff7a59;--primary-fg:#050505;--secondary:#5ee0c3;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0124 *{box-sizing:border-box}
.zp0124 a{color:inherit;text-decoration:none}
.zp0124 h1,.zp0124 h2,.zp0124 h3,.zp0124 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0124 img{max-width:100%;display:block}
.zp0124 button,.zp0124 a{-webkit-tap-highlight-color:transparent}
.zp0124 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0124 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0124 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0124 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0124 .mobileMenu{display:none}
.zp0124 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0124 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0124 .eyebrow,.zp0124 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0124 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0124 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0124 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0124 .heroActions a,.zp0124 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0124 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0124 .mapHero{grid-template-columns:1fr 1fr}
.zp0124 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0124 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0124 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0124 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0124 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0124 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0124 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0124 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0124 .serviceGrid p{color:var(--muted)}
.zp0124 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0124 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0124 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0124 details{border-top:1px solid var(--border);padding:20px 0}
.zp0124 details summary{font-weight:800;cursor:pointer}
.zp0124 details p{color:var(--muted);max-width:70ch}
.zp0124 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0124 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0124 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0124 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0124 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0124 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0124 .contact .eyebrow{color:var(--bg)}
.zp0124 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0124 .contactMeta{display:grid;gap:10px}
.zp0124 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0124 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0124 .sectionTitle{display:block}
.zp0124{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0124 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0124 .heroCopy{animation:enter-123 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-123{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0124 .hero{min-height:auto}
.zp0124 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0124 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0124 .nav nav{display:none}
.zp0124 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0124 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0124 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0124 .mobileMenu nav a{padding:10px 8px}
.zp0124 .hero,.zp0124 .mapHero{grid-template-columns:1fr}
.zp0124 .section,.zp0124 .sectionTitle,.zp0124 .contact{grid-template-columns:1fr}
.zp0124 .section{display:block}}
@media(max-width:430px){.zp0124{font-size:16px}
.zp0124 .hero,.zp0124 .section,.zp0124 .contact{padding-left:18px;padding-right:18px}
.zp0124 .serviceGrid,.zp0124 .proof{grid-template-columns:1fr}
.zp0124 h1{font-size:clamp(42px,14vw,70px)}}

.zp0124 .heroActions a,.zp0124 .primary,.zp0124 .ctaBtn,.zp0124 .btnPrimary,.zp0124 .schedule>a,.zp0124 .newsletter>a{transition:all .2s ease}
.zp0124 .heroActions a:hover,.zp0124 .primary:hover,.zp0124 .ctaBtn:hover,.zp0124 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0124 nav a,.zp0124 .nav a,.zp0124 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0124 nav a:hover,.zp0124 .nav a:hover,.zp0124 .footer a:hover{
  color:var(--primary)
}
.zp0124 .serviceGrid article,.zp0124 .projectCard,.zp0124 .teamCard,.zp0124 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0124 .serviceGrid article:hover,.zp0124 .projectCard:hover,.zp0124 .teamCard:hover,.zp0124 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0124 *,.zp0124 *::before,.zp0124 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0124 a,.zp0124 button,.zp0124 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
