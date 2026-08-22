import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0483-ai-company-luxury-hospitality", "family": "Luxury Hospitality", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|product-journey|services>menu>metrics>newsletter>process>community>proof|inset-panel|poster", "industry": "ai-company", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "product-journey"};

export default function Template0483({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Ai Company");
  const headline = String(content.headline || "Applied AI designed around reliable workflows, measurable quality, and human control.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["AI assistants", "Document intelligence", "Automation", "Evaluation", "Enterprise deployment"];
  const industryLabel = "AI company";
  const serviceNotes = ["Production-ready models with clear input/output contracts and versioned endpoints.", "On-premise deployment available for data-sensitive organisations.", "Model cards and audit trails provided for every inference decision.", "Human-in-the-loop option: AI recommendations, human approvals, logged chain.", "Retraining on your proprietary data with performance benchmarks agreed upfront."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["EU AI Act compliant", "SOC 2 certified", "Explainability dashboard", "On-prem available"];
  const storyBody = "Harbor Ai Company is presented as a real working ai company, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The performance benchmarks they promised were conservative. We're seeing 3× the throughput on the use case we scoped.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["AI company / Project A", "AI company / Project B", "AI company / Project C", "AI company / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Applied AI designed around reliable workflows, measurable quality, and human control. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#29c7b8";
  return <main className="zp0483" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0483{--bg:#081415;--fg:#eefafa;--primary:#29c7b8;--primary-fg:#050505;--secondary:#e5b55f;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1280px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0483 *{box-sizing:border-box}
.zp0483 a{color:inherit;text-decoration:none}
.zp0483 h1,.zp0483 h2,.zp0483 h3,.zp0483 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0483 img{max-width:100%;display:block}
.zp0483 button,.zp0483 a{-webkit-tap-highlight-color:transparent}
.zp0483 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0483 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0483 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0483 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0483 .mobileMenu{display:none}
.zp0483 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0483 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0483 .eyebrow,.zp0483 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0483 h1{font-size:clamp(48px,6.9vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0483 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0483 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0483 .heroActions a,.zp0483 .newsletter>a,.zp0483 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0483 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0483 .visual,.zp0483 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0483 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0483 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0483 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0483 .heroPhoto{object-fit:cover}
.zp0483 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0483 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0483 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0483 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0483 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0483 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0483 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0483 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0483 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0483 .serviceGrid p{color:var(--muted)}
.zp0483 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0483 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0483 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0483 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0483 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0483 details{border-top:1px solid var(--border);padding:20px 0}
.zp0483 details summary{font-weight:800;cursor:pointer}
.zp0483 details p{color:var(--muted);max-width:70ch}
.zp0483 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0483 .metrics div{background:var(--bg);padding:30px}
.zp0483 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Impact, Arial Black, sans-serif;color:var(--primary)}
.zp0483 .newsletter,.zp0483 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0483 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0483 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0483 .contact .eyebrow{color:var(--bg)}
.zp0483 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0483 .contactMeta{display:grid;gap:10px}
.zp0483 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0483 .heroCopy{animation:enter-482 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-482{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0483 .hero{min-height:auto}
.zp0483 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0483 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0483 .nav nav{display:none}
.zp0483 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0483 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0483 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0483 .mobileMenu nav a{padding:10px 8px}
.zp0483 .hero,.zp0483 .diagonalHero{grid-template-columns:1fr}
.zp0483 .section,.zp0483 .sectionTitle,.zp0483 .contact{grid-template-columns:1fr}
.zp0483 .metrics{grid-template-columns:1fr 1fr}
.zp0483 .section{display:block}}
@media(max-width:430px){.zp0483{font-size:16px}
.zp0483 .hero,.zp0483 .section,.zp0483 .contact{padding-left:18px;padding-right:18px}
.zp0483 .serviceGrid,.zp0483 .proof,.zp0483 .metrics{grid-template-columns:1fr}
.zp0483 h1{font-size:clamp(42px,14vw,70px)}}

.zp0483 .heroActions a,.zp0483 .primary,.zp0483 .ctaBtn,.zp0483 .btnPrimary,.zp0483 .schedule>a,.zp0483 .newsletter>a{transition:all .2s ease}
.zp0483 .heroActions a:hover,.zp0483 .primary:hover,.zp0483 .ctaBtn:hover,.zp0483 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0483 nav a,.zp0483 .nav a,.zp0483 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0483 nav a:hover,.zp0483 .nav a:hover,.zp0483 .footer a:hover{
  opacity:.65
}
.zp0483 .serviceGrid article,.zp0483 .projectCard,.zp0483 .teamCard,.zp0483 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0483 .serviceGrid article:hover,.zp0483 .projectCard:hover,.zp0483 .teamCard:hover,.zp0483 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0483 *,.zp0483 *::before,.zp0483 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0483 a,.zp0483 button,.zp0483 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">82</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
