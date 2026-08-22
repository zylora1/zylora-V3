import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0740-portfolio-neumorphism", "family": "Neumorphism", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|conversion-first|services>process>integrations>comparison>proof>timeline|cut-corners|product-ui", "industry": "portfolio", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "conversion-first"};

export default function Template0740({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Creative Portfolio");
  const headline = String(content.headline || "A concise portfolio that makes the work, thinking, and role in each project easy to understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected work", "Case studies", "About", "Recognition", "Contact"];
  const industryLabel = "Creative portfolio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creative portfolio / Project A", "Creative portfolio / Project B", "Creative portfolio / Project C", "Creative portfolio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A concise portfolio that makes the work, thinking, and role in each project easy to understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0740" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0740{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0740 *{box-sizing:border-box}
.zp0740 a{color:inherit;text-decoration:none}
.zp0740 h1,.zp0740 h2,.zp0740 h3,.zp0740 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0740 img{max-width:100%;display:block}
.zp0740 button,.zp0740 a{-webkit-tap-highlight-color:transparent}
.zp0740 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0740 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0740 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0740 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0740 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0740 .mobileMenu{display:none}
.zp0740 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0740 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0740 .eyebrow,.zp0740 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0740 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0740 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0740 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0740 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0740 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0740 .visual,.zp0740 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0740 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0740 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0740 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0740 .heroPhoto{object-fit:cover}
.zp0740 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0740 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0740 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0740 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0740 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0740 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0740 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0740 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0740 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0740 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0740 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0740 .serviceGrid p{color:var(--muted)}
.zp0740 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0740 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0740 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0740 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0740 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0740 details{border-top:1px solid var(--border);padding:20px 0}
.zp0740 details summary{font-weight:800;cursor:pointer}
.zp0740 details p{color:var(--muted);max-width:70ch}
.zp0740 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0740 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0740 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0740 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0740 .timeline article{padding:20px 0}
.zp0740 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0740 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0740 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0740 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0740 .contact .eyebrow{color:var(--bg)}
.zp0740 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0740 .contactMeta{display:grid;gap:10px}
.zp0740 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0740 .heroCopy{animation:enter-739 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-739{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0740 .hero{min-height:auto}
.zp0740 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0740 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0740 .nav nav{display:none}
.zp0740 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0740 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0740 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0740 .mobileMenu nav a{padding:10px 8px}
.zp0740 .hero,.zp0740 .bentoHero{grid-template-columns:1fr}
.zp0740 .section,.zp0740 .sectionTitle,.zp0740 .contact{grid-template-columns:1fr}
.zp0740 .section{display:block}}
@media(max-width:430px){.zp0740{font-size:16px}
.zp0740 .hero,.zp0740 .section,.zp0740 .contact{padding-left:18px;padding-right:18px}
.zp0740 .serviceGrid,.zp0740 .proof,.zp0740 .compareGrid{grid-template-columns:1fr}
.zp0740 h1{font-size:clamp(42px,14vw,70px)}}

.zp0740 .heroActions a,.zp0740 .primary,.zp0740 .ctaBtn,.zp0740 .btnPrimary,.zp0740 .schedule>a,.zp0740 .newsletter>a{transition:all .2s ease}
.zp0740 .heroActions a:hover,.zp0740 .primary:hover,.zp0740 .ctaBtn:hover,.zp0740 .btnPrimary:hover{
  box-shadow:inset 2px 2px 6px color-mix(in srgb,var(--bg) 70%,black),inset -2px -2px 6px color-mix(in srgb,var(--bg) 70%,white)
}
.zp0740 nav a,.zp0740 .nav a,.zp0740 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0740 nav a:hover,.zp0740 .nav a:hover,.zp0740 .footer a:hover{
  color:var(--primary)
}
.zp0740 .serviceGrid article,.zp0740 .projectCard,.zp0740 .teamCard,.zp0740 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0740 .serviceGrid article:hover,.zp0740 .projectCard:hover,.zp0740 .teamCard:hover,.zp0740 .bentoCard:hover{
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--bg) 70%,black),inset -3px -3px 8px color-mix(in srgb,var(--bg) 60%,white)
}

.zp0740 .serviceGrid article,.zp0740 .packages article{
  border:none;
  background:var(--bg);
  box-shadow:6px 6px 14px color-mix(in srgb,var(--fg) 12%,transparent),-6px -6px 14px color-mix(in srgb,var(--fg) 3%,var(--bg));
  border-radius:16px
}
.zp0740 .serviceGrid article:nth-child(even),.zp0740 .proof>div{
  box-shadow:4px 4px 10px color-mix(in srgb,var(--fg) 10%,transparent),-4px -4px 10px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
.zp0740 .proofLead,.zp0740 .proof>div{
  border:none;
  background:var(--bg);
  box-shadow:inset 3px 3px 8px color-mix(in srgb,var(--fg) 10%,transparent),inset -3px -3px 8px color-mix(in srgb,var(--fg) 2%,var(--bg))
}
@media(prefers-reduced-motion:reduce){.zp0740 *,.zp0740 *::before,.zp0740 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0740 a,.zp0740 button,.zp0740 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">39</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Neumorphism / conversion-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
