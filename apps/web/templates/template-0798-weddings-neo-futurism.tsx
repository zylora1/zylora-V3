import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0798-weddings-neo-futurism", "family": "Neo-futurism", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|circular-focus|image-led-chapters|menu>comparison>team>services>proof>values>metrics|circular|neo-grotesk", "industry": "weddings", "hero": "circular-focus", "navigation": "asymmetric-cluster", "layout": "image-led-chapters"};

export default function Template0798({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Tandem Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Northline Lead", "role": "Principal / Lead"}, {"name": "Aster Team", "role": "Client experience"}, {"name": "Vale Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0798" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0798{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0798 *{box-sizing:border-box}
.zp0798 a{color:inherit;text-decoration:none}
.zp0798 h1,.zp0798 h2,.zp0798 h3,.zp0798 blockquote{font-family:Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0798 img{max-width:100%;display:block}
.zp0798 button,.zp0798 a{-webkit-tap-highlight-color:transparent}
.zp0798 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0798 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0798 .nav strong{font-family:Helvetica Neue, Arial, sans-serif;font-size:18px}
.zp0798 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0798 .nav.cluster{align-items:flex-end}
.zp0798 .mobileMenu{display:none}
.zp0798 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0798 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0798 .eyebrow,.zp0798 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0798 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0798 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0798 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0798 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0798 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0798 .visual,.zp0798 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0798 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0798 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0798 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0798 .heroPhoto{object-fit:cover}
.zp0798 .circleHero{grid-template-columns:0.85fr 1.15fr}
.zp0798 .circleHero{grid-template-columns:1fr 1fr}
.zp0798 .circleFrame{aspect-ratio:1;border-radius:50%;overflow:hidden;border:1px solid var(--border)}
.zp0798 .circleFrame>*{height:100%;border-radius:50%}
.zp0798 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0798 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0798 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0798 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0798 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0798 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0798 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0798 .serviceGrid p{color:var(--muted)}
.zp0798 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0798 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0798 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0798 details{border-top:1px solid var(--border);padding:20px 0}
.zp0798 details summary{font-weight:800;cursor:pointer}
.zp0798 details p{color:var(--muted);max-width:70ch}
.zp0798 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0798 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0798 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Helvetica Neue, Arial, sans-serif;margin-bottom:18px}
.zp0798 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0798 .metrics div{background:var(--bg);padding:30px}
.zp0798 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Helvetica Neue, Arial, sans-serif;color:var(--primary)}
.zp0798 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0798 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Helvetica Neue, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0798 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0798 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0798 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0798 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0798 .contact .eyebrow{color:var(--bg)}
.zp0798 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0798 .contactMeta{display:grid;gap:10px}
.zp0798 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0798 .heroCopy{animation:enter-797 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-797{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0798 .hero{min-height:auto}
.zp0798 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0798 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0798 .nav nav{display:none}
.zp0798 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0798 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0798 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0798 .mobileMenu nav a{padding:10px 8px}
.zp0798 .hero,.zp0798 .circleHero{grid-template-columns:1fr}
.zp0798 .section,.zp0798 .sectionTitle,.zp0798 .contact{grid-template-columns:1fr}
.zp0798 .teamGrid{grid-template-columns:1fr 1fr}
.zp0798 .metrics{grid-template-columns:1fr 1fr}
.zp0798 .section{display:block}}
@media(max-width:430px){.zp0798{font-size:16px}
.zp0798 .hero,.zp0798 .section,.zp0798 .contact{padding-left:18px;padding-right:18px}
.zp0798 .serviceGrid,.zp0798 .proof,.zp0798 .teamGrid,.zp0798 .metrics,.zp0798 .compareGrid{grid-template-columns:1fr}
.zp0798 h1{font-size:clamp(42px,14vw,70px)}}

.zp0798 .heroActions a,.zp0798 .primary,.zp0798 .ctaBtn,.zp0798 .btnPrimary,.zp0798 .schedule>a,.zp0798 .newsletter>a{transition:all .2s ease}
.zp0798 .heroActions a:hover,.zp0798 .primary:hover,.zp0798 .ctaBtn:hover,.zp0798 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0798 nav a,.zp0798 .nav a,.zp0798 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0798 nav a:hover,.zp0798 .nav a:hover,.zp0798 .footer a:hover{
  color:var(--primary)
}
.zp0798 .serviceGrid article,.zp0798 .projectCard,.zp0798 .teamCard,.zp0798 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0798 .serviceGrid article:hover,.zp0798 .projectCard:hover,.zp0798 .teamCard:hover,.zp0798 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0798 *,.zp0798 *::before,.zp0798 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0798 a,.zp0798 button,.zp0798 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero circleHero"><div className="circleFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">97</span><div className="visualMark"/><small>{businessName}</small></div>}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neo-futurism / image-led-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
