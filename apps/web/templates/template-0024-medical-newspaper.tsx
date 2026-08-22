import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0024-medical-newspaper", "family": "Newspaper", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|property-led|services>gallery>features>integrations>newsletter>proof>manifesto|micro-radius|terminal", "industry": "medical", "hero": "video-frame", "navigation": "corner-dock", "layout": "property-led"};

export default function Template0024({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Primary Care Clinic");
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
  const testimonial = "Finally a clinic that listens. They explained my results in plain language and followed up without me having to chase.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Primary care clinic / Project A", "Primary care clinic / Project B", "Primary care clinic / Project C", "Primary care clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful primary care built around continuity, access, and informed decisions. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0024" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0024{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0024 *{box-sizing:border-box}
.zp0024 a{color:inherit;text-decoration:none}
.zp0024 h1,.zp0024 h2,.zp0024 h3,.zp0024 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0024 img{max-width:100%;display:block}
.zp0024 button,.zp0024 a{-webkit-tap-highlight-color:transparent}
.zp0024 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0024 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0024 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0024 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0024 .mobileMenu{display:none}
.zp0024 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0024 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0024 .eyebrow,.zp0024 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0024 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0024 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0024 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0024 .heroActions a,.zp0024 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0024 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0024 .visual,.zp0024 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0024 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0024 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0024 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0024 .heroPhoto{object-fit:cover}
.zp0024 .videoHero{grid-template-columns:1fr 1fr}
.zp0024 .videoFrame{position:relative}
.zp0024 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0024 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0024 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0024 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0024 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0024 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0024 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0024 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0024 .serviceGrid p{color:var(--muted)}
.zp0024 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0024 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0024 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0024 details{border-top:1px solid var(--border);padding:20px 0}
.zp0024 details summary{font-weight:800;cursor:pointer}
.zp0024 details p{color:var(--muted);max-width:70ch}
.zp0024 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0024 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0024 .galleryGrid>*:first-child{grid-row:1/3}
.zp0024 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0024 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0024 .g2,.zp0024 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0024 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0024 .features ul{list-style:none;margin:0;padding:0}
.zp0024 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0024 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0024 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0024 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0024 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0024 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0024 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0024 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0024 .contact .eyebrow{color:var(--bg)}
.zp0024 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0024 .contactMeta{display:grid;gap:10px}
.zp0024 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0024{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0024 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0024 .heroCopy p{columns:2;column-gap:30px}
.zp0024 .heroCopy{animation:enter-23 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-23{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0024 .hero{min-height:auto}
.zp0024 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0024 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0024 .nav nav{display:none}
.zp0024 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0024 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0024 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0024 .mobileMenu nav a{padding:10px 8px}
.zp0024 .hero,.zp0024 .videoHero{grid-template-columns:1fr}
.zp0024 .section,.zp0024 .sectionTitle,.zp0024 .features,.zp0024 .contact{grid-template-columns:1fr}
.zp0024 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0024 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0024 .section{display:block}}
@media(max-width:430px){.zp0024{font-size:16px}
.zp0024 .hero,.zp0024 .section,.zp0024 .contact{padding-left:18px;padding-right:18px}
.zp0024 .serviceGrid,.zp0024 .proof{grid-template-columns:1fr}
.zp0024 h1{font-size:clamp(42px,14vw,70px)}
.zp0024 .galleryGrid{grid-template-columns:1fr}
.zp0024 .galleryGrid>*:first-child{grid-column:auto}}

.zp0024 .heroActions a,.zp0024 .primary,.zp0024 .ctaBtn,.zp0024 .btnPrimary,.zp0024 .schedule>a,.zp0024 .newsletter>a{transition:all .2s ease}
.zp0024 .heroActions a:hover,.zp0024 .primary:hover,.zp0024 .ctaBtn:hover,.zp0024 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0024 nav a,.zp0024 .nav a,.zp0024 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0024 nav a:hover,.zp0024 .nav a:hover,.zp0024 .footer a:hover{
  text-decoration:underline
}
.zp0024 .serviceGrid article,.zp0024 .projectCard,.zp0024 .teamCard,.zp0024 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0024 .serviceGrid article:hover,.zp0024 .projectCard:hover,.zp0024 .teamCard:hover,.zp0024 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0024 *,.zp0024 *::before,.zp0024 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0024 a,.zp0024 button,.zp0024 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">23</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
