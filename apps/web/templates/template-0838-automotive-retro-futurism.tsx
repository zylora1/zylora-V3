import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0838-automotive-retro-futurism", "family": "Retro Futurism", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "mega-utility|cinematic-fullscreen|service-catalogue|destinations>proof>projects>integrations>services|pill-controls|warm-editorial", "industry": "automotive", "hero": "cinematic-fullscreen", "navigation": "mega-utility", "layout": "service-catalogue"};

export default function Template0838({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Cedar Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const industryLabel = "Automotive dealer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Vale Lead", "role": "Principal / Lead"}, {"name": "Civic Team", "role": "Client experience"}, {"name": "Oak & Tide Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff5449";
  return <main className="zp0838" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0838{--bg:#18090c;--fg:#fff3f1;--primary:#ff5449;--primary-fg:#050505;--secondary:#f6c65b;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:28px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0838 *{box-sizing:border-box}
.zp0838 a{color:inherit;text-decoration:none}
.zp0838 h1,.zp0838 h2,.zp0838 h3,.zp0838 blockquote{font-family:Palatino Linotype, Georgia, serif;text-wrap:balance}
.zp0838 img{max-width:100%;display:block}
.zp0838 button,.zp0838 a{-webkit-tap-highlight-color:transparent}
.zp0838 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0838 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0838 .nav strong{font-family:Palatino Linotype, Georgia, serif;font-size:18px}
.zp0838 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0838 .mobileMenu{display:none}
.zp0838 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0838 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0838 .eyebrow,.zp0838 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0838 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0838 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0838 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0838 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0838 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0838 .visual,.zp0838 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0838 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0838 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:28px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0838 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0838 .heroPhoto{object-fit:cover}
.zp0838 .cinematic{padding:0;min-height:100vh}
.zp0838 .cinematic>.heroPhoto,.zp0838 .cinematic>.visual{position:absolute;inset:0;width:100%;height:100%;border:0;border-radius:0;object-fit:cover}
.zp0838 .cinematic .shade{position:absolute;inset:0;background:linear-gradient(90deg,color-mix(in srgb,var(--bg) 90%,transparent),transparent 75%)}
.zp0838 .cinematic .heroCopy{padding:max(80px,8vw);align-self:end}
.zp0838 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0838 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0838 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0838 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0838 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0838 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0838 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0838 .serviceGrid p{color:var(--muted)}
.zp0838 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0838 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0838 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0838 details{border-top:1px solid var(--border);padding:20px 0}
.zp0838 details summary{font-weight:800;cursor:pointer}
.zp0838 details p{color:var(--muted);max-width:70ch}
.zp0838 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0838 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0838 .projects article:nth-child(2){transform:translateY(32px)}
.zp0838 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0838 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0838 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0838 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0838 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0838 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0838 .contact .eyebrow{color:var(--bg)}
.zp0838 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0838 .contactMeta{display:grid;gap:10px}
.zp0838 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0838 .heroCopy{animation:enter-837 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-837{from{opacity:0;transform:translateY(35px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0838 .hero{min-height:auto}
.zp0838 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0838 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0838 .nav nav{display:none}
.zp0838 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0838 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0838 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0838 .mobileMenu nav a{padding:10px 8px}
.zp0838 .hero{grid-template-columns:1fr}
.zp0838 .section,.zp0838 .sectionTitle,.zp0838 .contact{grid-template-columns:1fr}
.zp0838 .projects .projectGrid{grid-template-columns:1fr}
.zp0838 .projects article:nth-child(2){transform:none}
.zp0838 .section{display:block}}
@media(max-width:430px){.zp0838{font-size:16px}
.zp0838 .hero,.zp0838 .section,.zp0838 .contact{padding-left:18px;padding-right:18px}
.zp0838 .serviceGrid,.zp0838 .proof,.zp0838 .destinations>div:last-child{grid-template-columns:1fr}
.zp0838 h1{font-size:clamp(42px,14vw,70px)}}

.zp0838 .heroActions a,.zp0838 .primary,.zp0838 .ctaBtn,.zp0838 .btnPrimary,.zp0838 .schedule>a,.zp0838 .newsletter>a{transition:all .2s ease}
.zp0838 .heroActions a:hover,.zp0838 .primary:hover,.zp0838 .ctaBtn:hover,.zp0838 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0838 nav a,.zp0838 .nav a,.zp0838 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0838 nav a:hover,.zp0838 .nav a:hover,.zp0838 .footer a:hover{
  color:var(--primary)
}
.zp0838 .serviceGrid article,.zp0838 .projectCard,.zp0838 .teamCard,.zp0838 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0838 .serviceGrid article:hover,.zp0838 .projectCard:hover,.zp0838 .teamCard:hover,.zp0838 .bentoCard:hover{
  box-shadow:0 0 12px color-mix(in srgb,var(--primary) 30%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0838 *,.zp0838 *::before,.zp0838 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0838 a,.zp0838 button,.zp0838 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav utility"><strong>{businessName}</strong><span>Open today</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero cinematic">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">37</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="shade"/><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Retro Futurism / service-catalogue</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
