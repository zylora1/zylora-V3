import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0171-coaching-maximalism", "family": "Maximalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|timeline-narrative|packages>gallery>values>destinations>newsletter>proof>services|capsule|poster", "industry": "coaching", "hero": "split-image", "navigation": "statement-bar", "layout": "timeline-narrative"};

export default function Template0171({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const industryLabel = "Coaching centre";
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  return <main className="zp0171" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0171{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0171 *{box-sizing:border-box}
.zp0171 a{color:inherit;text-decoration:none}
.zp0171 h1,.zp0171 h2,.zp0171 h3,.zp0171 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0171 img{max-width:100%;display:block}
.zp0171 button,.zp0171 a{-webkit-tap-highlight-color:transparent}
.zp0171 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0171 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0171 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0171 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0171 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0171 .nav.statement>a{justify-self:end}
.zp0171 .mobileMenu{display:none}
.zp0171 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0171 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0171 .eyebrow,.zp0171 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0171 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0171 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0171 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0171 .heroActions a,.zp0171 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0171 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0171 .visual,.zp0171 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0171 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0171 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0171 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0171 .heroPhoto{object-fit:cover}
.zp0171 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0171 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0171 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0171 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0171 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0171 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0171 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0171 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0171 .serviceGrid p{color:var(--muted)}
.zp0171 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0171 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0171 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0171 details{border-top:1px solid var(--border);padding:20px 0}
.zp0171 details summary{font-weight:800;cursor:pointer}
.zp0171 details p{color:var(--muted);max-width:70ch}
.zp0171 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0171 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0171 .galleryGrid>*:first-child{grid-row:1/3}
.zp0171 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0171 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0171 .g2,.zp0171 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0171 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0171 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0171 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0171 .packages>.sectionTitle{grid-column:1/-1}
.zp0171 .packages article{padding:24px;border:1px solid var(--border)}
.zp0171 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0171 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0171 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0171 .contact .eyebrow{color:var(--bg)}
.zp0171 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0171 .contactMeta{display:grid;gap:10px}
.zp0171 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0171 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-10deg)}
.zp0171 .heroCopy{animation:enter-170 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-170{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0171 .hero{min-height:auto}
.zp0171 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0171 .proof{grid-template-columns:1fr 1fr}
.zp0171 .packages{grid-template-columns:1fr 1fr}
.zp0171 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0171 .nav nav{display:none}
.zp0171 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0171 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0171 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0171 .mobileMenu nav a{padding:10px 8px}
.zp0171 .hero,.zp0171 .splitHero{grid-template-columns:1fr}
.zp0171 .section,.zp0171 .sectionTitle,.zp0171 .contact{grid-template-columns:1fr}
.zp0171 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0171 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0171 .section{display:block}}
@media(max-width:430px){.zp0171{font-size:16px}
.zp0171 .hero,.zp0171 .section,.zp0171 .contact{padding-left:18px;padding-right:18px}
.zp0171 .serviceGrid,.zp0171 .proof,.zp0171 .packages,.zp0171 .destinations>div:last-child{grid-template-columns:1fr}
.zp0171 h1{font-size:clamp(42px,14vw,70px)}
.zp0171 .galleryGrid{grid-template-columns:1fr}
.zp0171 .galleryGrid>*:first-child{grid-column:auto}
.zp0171 .nav.statement{grid-template-columns:1fr auto}
.zp0171 .nav.statement>span:first-child{display:none}}

.zp0171 .heroActions a,.zp0171 .primary,.zp0171 .ctaBtn,.zp0171 .btnPrimary,.zp0171 .schedule>a,.zp0171 .newsletter>a{transition:all .2s ease}
.zp0171 .heroActions a:hover,.zp0171 .primary:hover,.zp0171 .ctaBtn:hover,.zp0171 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0171 nav a,.zp0171 .nav a,.zp0171 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0171 nav a:hover,.zp0171 .nav a:hover,.zp0171 .footer a:hover{
  color:var(--primary)
}
.zp0171 .serviceGrid article,.zp0171 .projectCard,.zp0171 .teamCard,.zp0171 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0171 .serviceGrid article:hover,.zp0171 .projectCard:hover,.zp0171 .teamCard:hover,.zp0171 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0171 *,.zp0171 *::before,.zp0171 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0171 a,.zp0171 button,.zp0171 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">70</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
