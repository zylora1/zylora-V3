import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0816-nonprofit-neumorphism", "family": "Neumorphism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "centered-logo|asymmetric-editorial|property-led|process>services>case-study>proof>press>team>pricing|heavy-frame|terminal", "industry": "nonprofit", "hero": "asymmetric-editorial", "navigation": "centered-logo", "layout": "property-led"};

export default function Template0816({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Kite Nonprofit");
  const headline = String(content.headline || "A clear case for action, transparent impact, and simple ways to participate or give.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Programmes", "Impact", "Volunteer", "Donate", "Resources"];
  const industryLabel = "Nonprofit";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Stone & Pine Lead", "role": "Principal / Lead"}, {"name": "Foxglove Team", "role": "Client experience"}, {"name": "Atlas Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Nonprofit / Project A", "Nonprofit / Project B", "Nonprofit / Project C", "Nonprofit / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A clear case for action, transparent impact, and simple ways to participate or give. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#5f4bdb";
  return <main className="zp0816" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0816{--bg:#fffdf7;--fg:#222018;--primary:#5f4bdb;--primary-fg:#ffffff;--secondary:#d4a72c;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0816 *{box-sizing:border-box}
.zp0816 a{color:inherit;text-decoration:none}
.zp0816 h1,.zp0816 h2,.zp0816 h3,.zp0816 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0816 img{max-width:100%;display:block}
.zp0816 button,.zp0816 a{-webkit-tap-highlight-color:transparent}
.zp0816 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0816 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0816 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0816 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0816 .nav.centered strong{order:2;font-size:24px}
.zp0816 .nav.centered nav:first-child{order:1}
.zp0816 .nav.centered nav:last-child{order:3}
.zp0816 .mobileMenu{display:none}
.zp0816 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0816 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0816 .eyebrow,.zp0816 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0816 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0816 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0816 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0816 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0816 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0816 .visual,.zp0816 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0816 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0816 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0816 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0816 .heroPhoto{object-fit:cover}
.zp0816 .asymHero{grid-template-columns:0.85fr 1.15fr}
.zp0816 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0816 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0816 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0816 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0816 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0816 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0816 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0816 .serviceGrid p{color:var(--muted)}
.zp0816 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0816 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0816 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0816 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0816 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0816 details{border-top:1px solid var(--border);padding:20px 0}
.zp0816 details summary{font-weight:800;cursor:pointer}
.zp0816 details p{color:var(--muted);max-width:70ch}
.zp0816 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0816 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0816 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Lucida Console, Monaco, monospace;margin-bottom:18px}
.zp0816 .priceRows{border-top:1px solid var(--border)}
.zp0816 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0816 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0816 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0816 .projects article:nth-child(2){transform:translateY(32px)}
.zp0816 .awards>div{max-width:800px;margin-left:auto}
.zp0816 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0816 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0816 .contact .eyebrow{color:var(--bg)}
.zp0816 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0816 .contactMeta{display:grid;gap:10px}
.zp0816 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0816 .heroCopy{animation:enter-815 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-815{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0816 .hero{min-height:auto}
.zp0816 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0816 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0816 .nav nav{display:none}
.zp0816 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0816 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0816 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0816 .mobileMenu nav a{padding:10px 8px}
.zp0816 .hero,.zp0816 .asymHero{grid-template-columns:1fr}
.zp0816 .section,.zp0816 .sectionTitle,.zp0816 .contact{grid-template-columns:1fr}
.zp0816 .teamGrid{grid-template-columns:1fr 1fr}
.zp0816 .projects .projectGrid{grid-template-columns:1fr}
.zp0816 .projects article:nth-child(2){transform:none}
.zp0816 .section{display:block}}
@media(max-width:430px){.zp0816{font-size:16px}
.zp0816 .hero,.zp0816 .section,.zp0816 .contact{padding-left:18px;padding-right:18px}
.zp0816 .serviceGrid,.zp0816 .proof,.zp0816 .teamGrid{grid-template-columns:1fr}
.zp0816 h1{font-size:clamp(42px,14vw,70px)}
.zp0816 .priceRows article{grid-template-columns:1fr}}

.zp0816 .heroActions a,.zp0816 .primary,.zp0816 .ctaBtn,.zp0816 .btnPrimary,.zp0816 .schedule>a,.zp0816 .newsletter>a{transition:all .2s ease}
.zp0816 .heroActions a:hover,.zp0816 .primary:hover,.zp0816 .ctaBtn:hover,.zp0816 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0816 nav a,.zp0816 .nav a,.zp0816 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0816 nav a:hover,.zp0816 .nav a:hover,.zp0816 .footer a:hover{
  color:var(--primary)
}
.zp0816 .serviceGrid article,.zp0816 .projectCard,.zp0816 .teamCard,.zp0816 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0816 .serviceGrid article:hover,.zp0816 .projectCard:hover,.zp0816 .teamCard:hover,.zp0816 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}

.zp0816 .serviceGrid article,.zp0816 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0816 .serviceGrid article:nth-child(even),.zp0816 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0816 .proofLead,.zp0816 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0816 *,.zp0816 *::before,.zp0816 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0816 a,.zp0816 button,.zp0816 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav centered"><nav><a href="#services">Services</a></nav><strong>{businessName}</strong><nav><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero asymHero"><div className="heroNumber">06</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">15</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
