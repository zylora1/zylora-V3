import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0864-repair-swiss-design", "family": "Swiss Design", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|data-led|catalogue-table|collection>services>community>schedule>case-study>values>proof|heavy-frame|terminal", "industry": "repair", "hero": "data-led", "navigation": "centered-logo", "layout": "catalogue-table"};

export default function Template0864({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Marrow Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Marrow Repair Service is presented as a real working repair service, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Harbor Lead", "role": "Principal / Lead"}, {"name": "Lumen Team", "role": "Client experience"}, {"name": "Juniper Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0864" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0864{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0864 *{box-sizing:border-box}
.zp0864 a{color:inherit;text-decoration:none}
.zp0864 h1,.zp0864 h2,.zp0864 h3,.zp0864 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0864 img{max-width:100%;display:block}
.zp0864 button,.zp0864 a{-webkit-tap-highlight-color:transparent}
.zp0864 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0864 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0864 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0864 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0864 .nav.centered strong{order:2;font-size:24px}
.zp0864 .nav.centered nav:first-child{order:1}
.zp0864 .nav.centered nav:last-child{order:3}
.zp0864 .mobileMenu{display:none}
.zp0864 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0864 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0864 .eyebrow,.zp0864 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0864 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0864 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0864 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0864 .heroActions a,.zp0864 .schedule>a,.zp0864 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0864 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0864 .dataHero{grid-template-columns:.5fr 1.5fr}
.zp0864 .dataPanel{display:grid;gap:14px;padding:24px;border:1px solid var(--border);align-self:start}
.zp0864 .dataPanel b{font-size:90px;color:var(--fg);text-decoration:underline;text-decoration-color:var(--primary);text-decoration-thickness:5px}
.zp0864 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0864 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0864 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0864 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0864 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0864 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0864 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0864 .serviceGrid p{color:var(--muted)}
.zp0864 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0864 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0864 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0864 details{border-top:1px solid var(--border);padding:20px 0}
.zp0864 details summary{font-weight:800;cursor:pointer}
.zp0864 details p{color:var(--muted);max-width:70ch}
.zp0864 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0864 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0864 .projects article:nth-child(2){transform:translateY(32px)}
.zp0864 .schedule,.zp0864 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0864 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0864 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0864 .p1,.zp0864 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0864 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0864 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0864 .contact .eyebrow{color:var(--bg)}
.zp0864 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0864 .contactMeta{display:grid;gap:10px}
.zp0864 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0864 .heroCopy{animation:enter-863 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-863{from{opacity:0;transform:translateY(21px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0864 .hero{min-height:auto}
.zp0864 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0864 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0864 .nav nav{display:none}
.zp0864 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0864 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0864 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0864 .mobileMenu nav a{padding:10px 8px}
.zp0864 .hero,.zp0864 .dataHero{grid-template-columns:1fr}
.zp0864 .section,.zp0864 .sectionTitle,.zp0864 .contact{grid-template-columns:1fr}
.zp0864 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0864 .projects .projectGrid{grid-template-columns:1fr}
.zp0864 .projects article:nth-child(2){transform:none}
.zp0864 .section{display:block}}
@media(max-width:430px){.zp0864{font-size:16px}
.zp0864 .hero,.zp0864 .section,.zp0864 .contact{padding-left:18px;padding-right:18px}
.zp0864 .serviceGrid,.zp0864 .proof,.zp0864 .collectionGrid{grid-template-columns:1fr}
.zp0864 h1{font-size:clamp(42px,14vw,70px)}}

.zp0864 .heroActions a,.zp0864 .primary,.zp0864 .ctaBtn,.zp0864 .btnPrimary,.zp0864 .schedule>a,.zp0864 .newsletter>a{transition:all .2s ease}
.zp0864 .heroActions a:hover,.zp0864 .primary:hover,.zp0864 .ctaBtn:hover,.zp0864 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0864 nav a,.zp0864 .nav a,.zp0864 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0864 nav a:hover,.zp0864 .nav a:hover,.zp0864 .footer a:hover{
  text-decoration:underline
}
.zp0864 .serviceGrid article,.zp0864 .projectCard,.zp0864 .teamCard,.zp0864 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0864 .serviceGrid article:hover,.zp0864 .projectCard:hover,.zp0864 .teamCard:hover,.zp0864 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0864 *,.zp0864 *::before,.zp0864 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0864 a,.zp0864 button,.zp0864 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero dataHero"><div className="dataPanel"><b>01</b><span>{services.length} core services</span><span>Local expertise</span></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
