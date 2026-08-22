import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0959-industrial-glassmorphism", "family": "Glassmorphism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|manifesto-grid|community>newsletter>proof>services>features>projects|soft-12|clean-humanist", "industry": "industrial", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "manifesto-grid"};

export default function Template0959({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Industrial Supplier");
  const headline = String(content.headline || "Technical products, practical documentation, and responsive support for critical operations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Equipment", "Parts", "Engineering support", "Maintenance", "Procurement"];
  const industryLabel = "Industrial supplier";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Clove Industrial Supplier is presented as a real working industrial supplier, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Industrial supplier / Project A", "Industrial supplier / Project B", "Industrial supplier / Project C", "Industrial supplier / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Technical products, practical documentation, and responsive support for critical operations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0959" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0959{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0959 *{box-sizing:border-box}
.zp0959 a{color:inherit;text-decoration:none}
.zp0959 h1,.zp0959 h2,.zp0959 h3,.zp0959 blockquote{font-family:Avenir, Helvetica Neue, Arial, sans-serif;text-wrap:balance}
.zp0959 img{max-width:100%;display:block}
.zp0959 button,.zp0959 a{-webkit-tap-highlight-color:transparent}
.zp0959 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0959 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0959 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0959 .mobileMenu{display:none}
.zp0959:has(.navRail)>.hero,.zp0959:has(.navRail)>.section,.zp0959:has(.navRail)>.contact,.zp0959:has(.navRail)>.footer{margin-left:190px}
.zp0959 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0959 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0959 .eyebrow,.zp0959 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0959 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0959 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0959 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0959 .heroActions a,.zp0959 .newsletter>a,.zp0959 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0959 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0959 .canvasHero{overflow:hidden}
.zp0959 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0959 .canvasGrid i{border-right:1px solid var(--border)}
.zp0959 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0959 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0959 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0959 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0959 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0959 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0959 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0959 .serviceGrid p{color:var(--muted)}
.zp0959 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0959 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0959 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0959 details{border-top:1px solid var(--border);padding:20px 0}
.zp0959 details summary{font-weight:800;cursor:pointer}
.zp0959 details p{color:var(--muted);max-width:70ch}
.zp0959 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0959 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0959 .projects article:nth-child(2){transform:translateY(32px)}
.zp0959 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0959 .features ul{list-style:none;margin:0;padding:0}
.zp0959 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0959 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0959 .newsletter,.zp0959 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0959 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0959 .contact .eyebrow{color:var(--bg)}
.zp0959 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0959 .contactMeta{display:grid;gap:10px}
.zp0959 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0959{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0959 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0959 .heroCopy{animation:enter-958 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-958{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0959 .hero{min-height:auto}
.zp0959 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0959 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0959 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0959 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0959 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0959 .mobileMenu nav a{padding:10px 8px}
.zp0959 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0959:has(.navRail)>.hero,.zp0959:has(.navRail)>.section,.zp0959:has(.navRail)>.contact,.zp0959:has(.navRail)>.footer{margin-left:0}
.zp0959 .hero{grid-template-columns:1fr}
.zp0959 .section,.zp0959 .sectionTitle,.zp0959 .features,.zp0959 .contact{grid-template-columns:1fr}
.zp0959 .projects .projectGrid{grid-template-columns:1fr}
.zp0959 .projects article:nth-child(2){transform:none}
.zp0959 .section{display:block}}
@media(max-width:430px){.zp0959{font-size:16px}
.zp0959 .hero,.zp0959 .section,.zp0959 .contact{padding-left:18px;padding-right:18px}
.zp0959 .serviceGrid,.zp0959 .proof{grid-template-columns:1fr}
.zp0959 h1{font-size:clamp(42px,14vw,70px)}}

.zp0959 .heroActions a,.zp0959 .primary,.zp0959 .ctaBtn,.zp0959 .btnPrimary,.zp0959 .schedule>a,.zp0959 .newsletter>a{transition:all .2s ease}
.zp0959 .heroActions a:hover,.zp0959 .primary:hover,.zp0959 .ctaBtn:hover,.zp0959 .btnPrimary:hover{
  background:color-mix(in srgb,var(--primary) 30%,transparent);border-color:var(--primary)
}
.zp0959 nav a,.zp0959 .nav a,.zp0959 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0959 nav a:hover,.zp0959 .nav a:hover,.zp0959 .footer a:hover{
  color:var(--primary)
}
.zp0959 .serviceGrid article,.zp0959 .projectCard,.zp0959 .teamCard,.zp0959 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0959 .serviceGrid article:hover,.zp0959 .projectCard:hover,.zp0959 .teamCard:hover,.zp0959 .bentoCard:hover{
  background:color-mix(in srgb,var(--fg) 18%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0959 *,.zp0959 *::before,.zp0959 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0959 a,.zp0959 button,.zp0959 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Glassmorphism / manifesto-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
