import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0723-artist-scrapbook", "family": "Scrapbook", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|story-first|materials>team>services>manifesto>packages>proof>programmes|inset-panel|poster", "industry": "artist", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "story-first"};

export default function Template0723({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0723" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0723{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0723 *{box-sizing:border-box}
.zp0723 a{color:inherit;text-decoration:none}
.zp0723 h1,.zp0723 h2,.zp0723 h3,.zp0723 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0723 img{max-width:100%;display:block}
.zp0723 button,.zp0723 a{-webkit-tap-highlight-color:transparent}
.zp0723 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0723 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0723 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0723 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0723 .mobileMenu{display:none}
.zp0723 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0723 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0723 .eyebrow,.zp0723 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0723 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0723 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0723 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0723 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0723 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0723 .visual,.zp0723 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0723 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0723 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0723 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0723 .heroPhoto{object-fit:cover}
.zp0723 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0723 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0723 .railBlock{background:var(--primary)}
.zp0723 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0723 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0723 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0723 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0723 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0723 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0723 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0723 .serviceGrid p{color:var(--muted)}
.zp0723 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0723 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0723 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0723 details{border-top:1px solid var(--border);padding:20px 0}
.zp0723 details summary{font-weight:800;cursor:pointer}
.zp0723 details p{color:var(--muted);max-width:70ch}
.zp0723 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0723 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0723 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Impact, Arial Black, sans-serif;margin-bottom:18px}
.zp0723 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0723 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0723 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0723 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0723 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0723 .packages>.sectionTitle{grid-column:1/-1}
.zp0723 .packages article{padding:24px;border:1px solid var(--border)}
.zp0723 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0723 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0723 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0723 .contact .eyebrow{color:var(--bg)}
.zp0723 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0723 .contactMeta{display:grid;gap:10px}
.zp0723 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0723{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0723 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0723 .heroCopy{animation:enter-722 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-722{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0723 .hero{min-height:auto}
.zp0723 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0723 .proof{grid-template-columns:1fr 1fr}
.zp0723 .packages{grid-template-columns:1fr 1fr}
.zp0723 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0723 .nav nav{display:none}
.zp0723 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0723 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0723 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0723 .mobileMenu nav a{padding:10px 8px}
.zp0723 .hero,.zp0723 .verticalHero{grid-template-columns:1fr}
.zp0723 .section,.zp0723 .sectionTitle,.zp0723 .contact{grid-template-columns:1fr}
.zp0723 .teamGrid{grid-template-columns:1fr 1fr}
.zp0723 .section{display:block}}
@media(max-width:430px){.zp0723{font-size:16px}
.zp0723 .hero,.zp0723 .section,.zp0723 .contact{padding-left:18px;padding-right:18px}
.zp0723 .serviceGrid,.zp0723 .proof,.zp0723 .teamGrid,.zp0723 .packages,.zp0723 .programmes>div:last-child{grid-template-columns:1fr}
.zp0723 h1{font-size:clamp(42px,14vw,70px)}}

.zp0723 .heroActions a,.zp0723 .primary,.zp0723 .ctaBtn,.zp0723 .btnPrimary,.zp0723 .schedule>a,.zp0723 .newsletter>a{transition:all .2s ease}
.zp0723 .heroActions a:hover,.zp0723 .primary:hover,.zp0723 .ctaBtn:hover,.zp0723 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0723 nav a,.zp0723 .nav a,.zp0723 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0723 nav a:hover,.zp0723 .nav a:hover,.zp0723 .footer a:hover{
  color:var(--primary)
}
.zp0723 .serviceGrid article,.zp0723 .projectCard,.zp0723 .teamCard,.zp0723 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0723 .serviceGrid article:hover,.zp0723 .projectCard:hover,.zp0723 .teamCard:hover,.zp0723 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0723 *,.zp0723 *::before,.zp0723 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0723 a,.zp0723 button,.zp0723 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">22</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
