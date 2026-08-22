import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0099-yoga-sophisticated-professional", "family": "Sophisticated Professional", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|timeline-narrative|metrics>services>awards>proof>destinations>integrations>security|inset-panel|poster", "industry": "yoga", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "timeline-narrative"};

export default function Template0099({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const industryLabel = "Yoga studio";
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d9703a";
  return <main className="zp0099" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0099{--bg:#10221b;--fg:#f4f0e6;--primary:#d9703a;--primary-fg:#050505;--secondary:#8db89b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0099 *{box-sizing:border-box}
.zp0099 a{color:inherit;text-decoration:none}
.zp0099 h1,.zp0099 h2,.zp0099 h3,.zp0099 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0099 img{max-width:100%;display:block}
.zp0099 button,.zp0099 a{-webkit-tap-highlight-color:transparent}
.zp0099 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0099 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0099 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0099 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0099 .mobileMenu{display:none}
.zp0099 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0099 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0099 .eyebrow,.zp0099 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0099 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0099 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0099 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0099 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0099 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0099 .visual,.zp0099 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0099 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0099 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0099 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0099 .heroPhoto{object-fit:cover}
.zp0099 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0099 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0099 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0099 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0099 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0099 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0099 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0099 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0099 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0099 .serviceGrid p{color:var(--muted)}
.zp0099 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0099 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0099 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0099 details{border-top:1px solid var(--border);padding:20px 0}
.zp0099 details summary{font-weight:800;cursor:pointer}
.zp0099 details p{color:var(--muted);max-width:70ch}
.zp0099 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0099 .metrics div{background:var(--bg);padding:30px}
.zp0099 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Impact, Arial Black, sans-serif;color:var(--primary)}
.zp0099 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0099 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0099 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0099 .awards>div{max-width:800px;margin-left:auto}
.zp0099 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0099 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0099 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0099 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0099 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0099 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0099 .contact .eyebrow{color:var(--bg)}
.zp0099 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0099 .contactMeta{display:grid;gap:10px}
.zp0099 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0099 .heroCopy{animation:enter-98 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-98{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0099 .hero{min-height:auto}
.zp0099 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0099 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0099 .nav nav{display:none}
.zp0099 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0099 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0099 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0099 .mobileMenu nav a{padding:10px 8px}
.zp0099 .hero,.zp0099 .diagonalHero{grid-template-columns:1fr}
.zp0099 .section,.zp0099 .sectionTitle,.zp0099 .security,.zp0099 .contact{grid-template-columns:1fr}
.zp0099 .metrics{grid-template-columns:1fr 1fr}
.zp0099 .section{display:block}}
@media(max-width:430px){.zp0099{font-size:16px}
.zp0099 .hero,.zp0099 .section,.zp0099 .contact{padding-left:18px;padding-right:18px}
.zp0099 .serviceGrid,.zp0099 .proof,.zp0099 .metrics,.zp0099 .destinations>div:last-child{grid-template-columns:1fr}
.zp0099 h1{font-size:clamp(42px,14vw,70px)}}

.zp0099 .heroActions a,.zp0099 .primary,.zp0099 .ctaBtn,.zp0099 .btnPrimary,.zp0099 .schedule>a,.zp0099 .newsletter>a{transition:all .2s ease}
.zp0099 .heroActions a:hover,.zp0099 .primary:hover,.zp0099 .ctaBtn:hover,.zp0099 .btnPrimary:hover{
  opacity:.88;transform:translateY(-1px)
}
.zp0099 nav a,.zp0099 .nav a,.zp0099 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0099 nav a:hover,.zp0099 .nav a:hover,.zp0099 .footer a:hover{
  color:var(--primary)
}
.zp0099 .serviceGrid article,.zp0099 .projectCard,.zp0099 .teamCard,.zp0099 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0099 .serviceGrid article:hover,.zp0099 .projectCard:hover,.zp0099 .teamCard:hover,.zp0099 .bentoCard:hover{
  box-shadow:0 6px 18px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0099 *,.zp0099 *::before,.zp0099 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0099 a,.zp0099 button,.zp0099 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">98</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sophisticated Professional / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
