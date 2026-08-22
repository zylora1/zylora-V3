import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0447-consulting-art-deco", "family": "Art Deco", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|product-journey|proof>services>team>manifesto>projects>credentials>research|soft-12|geometric", "industry": "consulting", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "product-journey"};

export default function Template0447({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Consulting Practice");
  const headline = String(content.headline || "Senior-level thinking paired with practical implementation and measurable outcomes.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strategy", "Operations", "Transformation", "Research", "Implementation support"];
  const industryLabel = "Consulting practice";
  const serviceNotes = ["Diagnostic phase first — we understand the problem before proposing a solution.", "Delivered by senior practitioners, not junior analysts relabelled as consultants.", "Fixed-scope engagements with clear deliverables and measurable success criteria.", "Knowledge transfer built into every project so client teams can sustain the change.", "Follow-through reviews at 6 and 12 months to confirm outcomes are holding."];
  const proofPoints = ["Average client ROI: 340%", "Senior-only delivery team", "NDA and IP protection", "30-day exit clause"];
  const testimonial = "They spotted a structural issue in our operations that three previous consultancies had missed. Implemented and sustained.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Consulting practice / Project A", "Consulting practice / Project B", "Consulting practice / Project C", "Consulting practice / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Senior-level thinking paired with practical implementation and measurable outcomes. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#2f80ed";
  return <main className="zp0447" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0447{--bg:#edf7ff;--fg:#152333;--primary:#2f80ed;--primary-fg:#050505;--secondary:#6fcf97;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0447 *{box-sizing:border-box}
.zp0447 a{color:inherit;text-decoration:none}
.zp0447 h1,.zp0447 h2,.zp0447 h3,.zp0447 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0447 img{max-width:100%;display:block}
.zp0447 button,.zp0447 a{-webkit-tap-highlight-color:transparent}
.zp0447 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0447 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0447 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0447 .mobileMenu{display:none}
.zp0447:has(.navRail)>.hero,.zp0447:has(.navRail)>.section,.zp0447:has(.navRail)>.contact,.zp0447:has(.navRail)>.footer{margin-left:190px}
.zp0447 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0447 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0447 .eyebrow,.zp0447 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0447 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0447 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0447 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0447 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0447 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0447 .canvasHero{overflow:hidden}
.zp0447 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0447 .canvasGrid i{border-right:1px solid var(--border)}
.zp0447 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0447 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0447 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0447 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0447 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0447 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0447 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0447 .serviceGrid p{color:var(--muted)}
.zp0447 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0447 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0447 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0447 details{border-top:1px solid var(--border);padding:20px 0}
.zp0447 details summary{font-weight:800;cursor:pointer}
.zp0447 details p{color:var(--muted);max-width:70ch}
.zp0447 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0447 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0447 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Century Gothic, Avenir, sans-serif;margin-bottom:18px}
.zp0447 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0447 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0447 .projects article:nth-child(2){transform:translateY(32px)}
.zp0447 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0447 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0447 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0447 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Century Gothic, Avenir, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0447 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0447 .researchRows{max-width:900px;margin-left:auto}
.zp0447 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0447 .contact .eyebrow{color:var(--bg)}
.zp0447 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0447 .contactMeta{display:grid;gap:10px}
.zp0447 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0447 .sectionTitle:before{content:"◆";color:var(--primary);font-size:22px}
.zp0447 .heroCopy{animation:enter-446 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-446{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0447 .hero{min-height:auto}
.zp0447 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0447 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0447 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0447 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0447 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0447 .mobileMenu nav a{padding:10px 8px}
.zp0447 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0447:has(.navRail)>.hero,.zp0447:has(.navRail)>.section,.zp0447:has(.navRail)>.contact,.zp0447:has(.navRail)>.footer{margin-left:0}
.zp0447 .hero{grid-template-columns:1fr}
.zp0447 .section,.zp0447 .sectionTitle,.zp0447 .contact{grid-template-columns:1fr}
.zp0447 .teamGrid{grid-template-columns:1fr 1fr}
.zp0447 .projects .projectGrid{grid-template-columns:1fr}
.zp0447 .projects article:nth-child(2){transform:none}
.zp0447 .section{display:block}}
@media(max-width:430px){.zp0447{font-size:16px}
.zp0447 .hero,.zp0447 .section,.zp0447 .contact{padding-left:18px;padding-right:18px}
.zp0447 .serviceGrid,.zp0447 .proof,.zp0447 .teamGrid{grid-template-columns:1fr}
.zp0447 h1{font-size:clamp(42px,14vw,70px)}}

.zp0447 .heroActions a,.zp0447 .primary,.zp0447 .ctaBtn,.zp0447 .btnPrimary,.zp0447 .schedule>a,.zp0447 .newsletter>a{transition:all .2s ease}
.zp0447 .heroActions a:hover,.zp0447 .primary:hover,.zp0447 .ctaBtn:hover,.zp0447 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);letter-spacing:.08em
}
.zp0447 nav a,.zp0447 .nav a,.zp0447 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0447 nav a:hover,.zp0447 .nav a:hover,.zp0447 .footer a:hover{
  color:var(--primary)
}
.zp0447 .serviceGrid article,.zp0447 .projectCard,.zp0447 .teamCard,.zp0447 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0447 .serviceGrid article:hover,.zp0447 .projectCard:hover,.zp0447 .teamCard:hover,.zp0447 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0447 *,.zp0447 *::before,.zp0447 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0447 a,.zp0447 button,.zp0447 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Deco / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
