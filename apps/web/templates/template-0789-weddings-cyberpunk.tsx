import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0789-weddings-cyberpunk", "family": "Cyberpunk", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|split-scroll|availability>proof>hours>team>packages>pricing>services|ticket-edge|humanist-classic", "industry": "weddings", "hero": "image-collage", "navigation": "lower-third", "layout": "split-scroll"};

export default function Template0789({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Wedding Studio");
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
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  return <main className="zp0789" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0789{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0789 *{box-sizing:border-box}
.zp0789 a{color:inherit;text-decoration:none}
.zp0789 h1,.zp0789 h2,.zp0789 h3,.zp0789 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0789 img{max-width:100%;display:block}
.zp0789 button,.zp0789 a{-webkit-tap-highlight-color:transparent}
.zp0789 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0789 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0789 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0789 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0789 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0789 .mobileMenu{display:none}
.zp0789 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0789 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0789 .eyebrow,.zp0789 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0789 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0789 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0789 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0789 .heroActions a,.zp0789 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0789 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0789 .visual,.zp0789 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0789 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0789 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0789 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0789 .heroPhoto{object-fit:cover}
.zp0789 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0789 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0789 .collage>*:first-child{grid-row:1/3}
.zp0789 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0789 .miniVisual.alt{background:var(--secondary)}
.zp0789 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0789 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0789 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0789 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0789 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0789 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0789 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0789 .serviceGrid p{color:var(--muted)}
.zp0789 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0789 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0789 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0789 details{border-top:1px solid var(--border);padding:20px 0}
.zp0789 details summary{font-weight:800;cursor:pointer}
.zp0789 details p{color:var(--muted);max-width:70ch}
.zp0789 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0789 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0789 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Baskerville, Georgia, serif;margin-bottom:18px}
.zp0789 .priceRows{border-top:1px solid var(--border)}
.zp0789 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0789 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0789 .hours dl{margin:0}
.zp0789 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0789 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0789 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0789 .packages>.sectionTitle{grid-column:1/-1}
.zp0789 .packages article{padding:24px;border:1px solid var(--border)}
.zp0789 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0789 .contact .eyebrow{color:var(--bg)}
.zp0789 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0789 .contactMeta{display:grid;gap:10px}
.zp0789 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0789 .heroCopy{animation:enter-788 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-788{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0789 .hero{min-height:auto}
.zp0789 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0789 .proof{grid-template-columns:1fr 1fr}
.zp0789 .packages{grid-template-columns:1fr 1fr}
.zp0789 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0789 .nav nav{display:none}
.zp0789 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0789 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0789 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0789 .mobileMenu nav a{padding:10px 8px}
.zp0789 .hero,.zp0789 .collageHero{grid-template-columns:1fr}
.zp0789 .section,.zp0789 .sectionTitle,.zp0789 .hours,.zp0789 .contact{grid-template-columns:1fr}
.zp0789 .teamGrid{grid-template-columns:1fr 1fr}
.zp0789 .section{display:block}}
@media(max-width:430px){.zp0789{font-size:16px}
.zp0789 .hero,.zp0789 .section,.zp0789 .contact{padding-left:18px;padding-right:18px}
.zp0789 .serviceGrid,.zp0789 .proof,.zp0789 .teamGrid,.zp0789 .packages{grid-template-columns:1fr}
.zp0789 h1{font-size:clamp(42px,14vw,70px)}
.zp0789 .priceRows article{grid-template-columns:1fr}}

.zp0789 .heroActions a,.zp0789 .primary,.zp0789 .ctaBtn,.zp0789 .btnPrimary,.zp0789 .schedule>a,.zp0789 .newsletter>a{transition:all .2s ease}
.zp0789 .heroActions a:hover,.zp0789 .primary:hover,.zp0789 .ctaBtn:hover,.zp0789 .btnPrimary:hover{
  box-shadow:0 0 24px var(--primary);border-color:var(--primary)
}
.zp0789 nav a,.zp0789 .nav a,.zp0789 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0789 nav a:hover,.zp0789 .nav a:hover,.zp0789 .footer a:hover{
  color:var(--primary);text-shadow:0 0 8px var(--primary)
}
.zp0789 .serviceGrid article,.zp0789 .projectCard,.zp0789 .teamCard,.zp0789 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0789 .serviceGrid article:hover,.zp0789 .projectCard:hover,.zp0789 .teamCard:hover,.zp0789 .bentoCard:hover{
  box-shadow:0 0 16px color-mix(in srgb,var(--primary) 35%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0789 *,.zp0789 *::before,.zp0789 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0789 a,.zp0789 button,.zp0789 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">88</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Cyberpunk / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
