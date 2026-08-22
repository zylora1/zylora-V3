import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0045-physio-technical-engineering", "family": "Technical Engineering", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|community-led|proof>materials>credentials>case-study>programmes>destinations>services|hard-outline|humanist-classic", "industry": "physio", "hero": "side-caption", "navigation": "compact-floating", "layout": "community-led"};

export default function Template0045({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Physiotherapy Studio");
  const headline = String(content.headline || "Evidence-led rehabilitation with measurable milestones and practical home plans.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Injury assessment", "Sports rehabilitation", "Post-operative rehab", "Mobility programmes", "Return-to-work planning"];
  const industryLabel = "Physiotherapy studio";
  const serviceNotes = ["Detailed movement assessment to identify the root cause, not just the symptom.", "Hands-on manual therapy combined with targeted home exercise programmes.", "Sports rehabilitation pathways built around your return-to-performance timeline.", "Post-operative rehab with direct communication with your surgical team.", "Long-term mobility strategies so you stay active well beyond discharge."];
  const proofPoints = ["HCPC registered", "Onsite gym and equipment", "Home exercise app included", "GP referrals accepted"];
  const testimonial = "Back on the pitch in 8 weeks after my ACL — the rehab plan was specific to my sport, not generic advice.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Physiotherapy studio / Project A", "Physiotherapy studio / Project B", "Physiotherapy studio / Project C", "Physiotherapy studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Evidence-led rehabilitation with measurable milestones and practical home plans. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0045" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0045{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0045 *{box-sizing:border-box}
.zp0045 a{color:inherit;text-decoration:none}
.zp0045 h1,.zp0045 h2,.zp0045 h3,.zp0045 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0045 img{max-width:100%;display:block}
.zp0045 button,.zp0045 a{-webkit-tap-highlight-color:transparent}
.zp0045 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0045 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0045 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0045 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0045 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0045 .mobileMenu{display:none}
.zp0045 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0045 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0045 .eyebrow,.zp0045 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0045 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0045 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0045 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0045 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0045 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0045 .visual,.zp0045 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0045 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0045 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0045 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0045 .heroPhoto{object-fit:cover}
.zp0045 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0045 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0045 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0045 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0045 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0045 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0045 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0045 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0045 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0045 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0045 .serviceGrid p{color:var(--muted)}
.zp0045 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0045 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0045 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0045 details{border-top:1px solid var(--border);padding:20px 0}
.zp0045 details summary{font-weight:800;cursor:pointer}
.zp0045 details p{color:var(--muted);max-width:70ch}
.zp0045 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0045 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0045 .projects article:nth-child(2){transform:translateY(32px)}
.zp0045 .credentials,.zp0045 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0045 .credentials>div,.zp0045 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0045 .credentials b,.zp0045 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0045 .programmes>div:last-child,.zp0045 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0045 .programmes article,.zp0045 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0045 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0045 .contact .eyebrow{color:var(--bg)}
.zp0045 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0045 .contactMeta{display:grid;gap:10px}
.zp0045 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0045 .heroCopy{animation:enter-44 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-44{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0045 .hero{min-height:auto}
.zp0045 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0045 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0045 .nav nav{display:none}
.zp0045 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0045 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0045 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0045 .mobileMenu nav a{padding:10px 8px}
.zp0045 .hero,.zp0045 .captionHero{grid-template-columns:1fr}
.zp0045 .section,.zp0045 .sectionTitle,.zp0045 .contact{grid-template-columns:1fr}
.zp0045 .projects .projectGrid{grid-template-columns:1fr}
.zp0045 .projects article:nth-child(2){transform:none}
.zp0045 .section{display:block}}
@media(max-width:430px){.zp0045{font-size:16px}
.zp0045 .hero,.zp0045 .section,.zp0045 .contact{padding-left:18px;padding-right:18px}
.zp0045 .serviceGrid,.zp0045 .proof,.zp0045 .programmes>div:last-child,.zp0045 .destinations>div:last-child{grid-template-columns:1fr}
.zp0045 h1{font-size:clamp(42px,14vw,70px)}}

.zp0045 .heroActions a,.zp0045 .primary,.zp0045 .ctaBtn,.zp0045 .btnPrimary,.zp0045 .schedule>a,.zp0045 .newsletter>a{transition:all .2s ease}
.zp0045 .heroActions a:hover,.zp0045 .primary:hover,.zp0045 .ctaBtn:hover,.zp0045 .btnPrimary:hover{
  border-color:var(--primary)
}
.zp0045 nav a,.zp0045 .nav a,.zp0045 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0045 nav a:hover,.zp0045 .nav a:hover,.zp0045 .footer a:hover{
  color:var(--primary)
}
.zp0045 .serviceGrid article,.zp0045 .projectCard,.zp0045 .teamCard,.zp0045 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0045 .serviceGrid article:hover,.zp0045 .projectCard:hover,.zp0045 .teamCard:hover,.zp0045 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0045 *,.zp0045 *::before,.zp0045 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0045 a,.zp0045 button,.zp0045 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">44</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Technical Engineering / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
