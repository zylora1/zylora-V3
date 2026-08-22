import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0639-beauty-aurora", "family": "Aurora", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|timeline-narrative|timeline>location>credentials>process>proof>services>integrations|soft-12|geometric", "industry": "beauty", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "timeline-narrative"};

export default function Template0639({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Beauty Studio");
  const headline = String(content.headline || "Results-focused treatments in a calm studio with transparent recommendations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Facials", "Brows", "Skin consultations", "Packages", "Gift cards"];
  const industryLabel = "Beauty studio";
  const serviceNotes = ["Ingredient-transparent formulations: every product listing includes the full INCI.", "Patch-test kits available before committing to any new treatment or product line.", "Skin consultation appointment included with all bespoke skincare programmes.", "Cruelty-free certified and vegan-formulated across the entire product range.", "Results photography at 4 and 8 weeks so you can see the change objectively."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#447b56";
  return <main className="zp0639" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0639{--bg:#e8f0ea;--fg:#142319;--primary:#447b56;--primary-fg:#ffffff;--secondary:#b26a42;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0639 *{box-sizing:border-box}
.zp0639 a{color:inherit;text-decoration:none}
.zp0639 h1,.zp0639 h2,.zp0639 h3,.zp0639 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0639 img{max-width:100%;display:block}
.zp0639 button,.zp0639 a{-webkit-tap-highlight-color:transparent}
.zp0639 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0639 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0639 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0639 .mobileMenu{display:none}
.zp0639:has(.navRail)>.hero,.zp0639:has(.navRail)>.section,.zp0639:has(.navRail)>.contact,.zp0639:has(.navRail)>.footer{margin-left:190px}
.zp0639 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0639 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0639 .eyebrow,.zp0639 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0639 h1{font-size:clamp(48px,7.45vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0639 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0639 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0639 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0639 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0639 .canvasHero{overflow:hidden}
.zp0639 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0639 .canvasGrid i{border-right:1px solid var(--border)}
.zp0639 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0639 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0639 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0639 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0639 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0639 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0639 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0639 .serviceGrid p{color:var(--muted)}
.zp0639 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0639 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0639 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0639 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0639 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0639 details{border-top:1px solid var(--border);padding:20px 0}
.zp0639 details summary{font-weight:800;cursor:pointer}
.zp0639 details p{color:var(--muted);max-width:70ch}
.zp0639 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0639 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0639 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0639 .credentials,.zp0639 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0639 .credentials>div,.zp0639 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0639 .credentials b,.zp0639 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0639 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0639 .timeline article{padding:20px 0}
.zp0639 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0639 .contact .eyebrow{color:var(--bg)}
.zp0639 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0639 .contactMeta{display:grid;gap:10px}
.zp0639 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0639{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0639 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0639 .heroCopy{animation:enter-638 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-638{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0639 .hero{min-height:auto}
.zp0639 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0639 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0639 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0639 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0639 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0639 .mobileMenu nav a{padding:10px 8px}
.zp0639 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0639:has(.navRail)>.hero,.zp0639:has(.navRail)>.section,.zp0639:has(.navRail)>.contact,.zp0639:has(.navRail)>.footer{margin-left:0}
.zp0639 .hero{grid-template-columns:1fr}
.zp0639 .section,.zp0639 .sectionTitle,.zp0639 .location,.zp0639 .contact{grid-template-columns:1fr}
.zp0639 .section{display:block}}
@media(max-width:430px){.zp0639{font-size:16px}
.zp0639 .hero,.zp0639 .section,.zp0639 .contact{padding-left:18px;padding-right:18px}
.zp0639 .serviceGrid,.zp0639 .proof{grid-template-columns:1fr}
.zp0639 h1{font-size:clamp(42px,14vw,70px)}}

.zp0639 .heroActions a,.zp0639 .primary,.zp0639 .ctaBtn,.zp0639 .btnPrimary,.zp0639 .schedule>a,.zp0639 .newsletter>a{transition:all .2s ease}
.zp0639 .heroActions a:hover,.zp0639 .primary:hover,.zp0639 .ctaBtn:hover,.zp0639 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0639 nav a,.zp0639 .nav a,.zp0639 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0639 nav a:hover,.zp0639 .nav a:hover,.zp0639 .footer a:hover{
  color:var(--primary)
}
.zp0639 .serviceGrid article,.zp0639 .projectCard,.zp0639 .teamCard,.zp0639 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0639 .serviceGrid article:hover,.zp0639 .projectCard:hover,.zp0639 .teamCard:hover,.zp0639 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0639 *,.zp0639 *::before,.zp0639 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0639 a,.zp0639 button,.zp0639 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / timeline-narrative</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
