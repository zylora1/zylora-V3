import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0951-industrial-scrapbook", "family": "Scrapbook", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "editorial-index|index-led|product-journey|proof>projects>hours>services>credentials>menu>timeline|asymmetric-radius|geometric", "industry": "industrial", "hero": "index-led", "navigation": "editorial-index", "layout": "product-journey"};

export default function Template0951({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Foxglove Industrial Supplier");
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
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kindred Lead", "role": "Principal / Lead"}, {"name": "Tandem Team", "role": "Client experience"}, {"name": "Morrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Industrial supplier / Project A", "Industrial supplier / Project B", "Industrial supplier / Project C", "Industrial supplier / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Technical products, practical documentation, and responsive support for critical operations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0951" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0951{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:24px 4px 24px 4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0951 *{box-sizing:border-box}
.zp0951 a{color:inherit;text-decoration:none}
.zp0951 h1,.zp0951 h2,.zp0951 h3,.zp0951 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0951 img{max-width:100%;display:block}
.zp0951 button,.zp0951 a{-webkit-tap-highlight-color:transparent}
.zp0951 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0951 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0951 .nav strong{font-family:Century Gothic, Avenir, sans-serif;font-size:18px}
.zp0951 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0951 .nav.index{display:grid;grid-template-columns:1fr auto 1fr}
.zp0951 .nav.index nav{justify-content:flex-end}
.zp0951 .mobileMenu{display:none}
.zp0951 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0951 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0951 .eyebrow,.zp0951 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0951 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0951 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0951 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0951 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0951 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0951 .indexHero{grid-template-columns:.6fr 1.4fr}
.zp0951 .indexHero ol{list-style:none;margin:0;padding:0}
.zp0951 .indexHero li{font:700 18px/1.2 Century Gothic, Avenir, sans-serif;padding:18px 0;border-bottom:1px solid var(--border)}
.zp0951 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0951 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0951 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0951 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0951 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0951 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0951 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0951 .serviceGrid p{color:var(--muted)}
.zp0951 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0951 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0951 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0951 details{border-top:1px solid var(--border);padding:20px 0}
.zp0951 details summary{font-weight:800;cursor:pointer}
.zp0951 details p{color:var(--muted);max-width:70ch}
.zp0951 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0951 .hours dl{margin:0}
.zp0951 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0951 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0951 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0951 .projects article:nth-child(2){transform:translateY(32px)}
.zp0951 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0951 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0951 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0951 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0951 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0951 .timeline article{padding:20px 0}
.zp0951 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0951 .contact .eyebrow{color:var(--bg)}
.zp0951 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0951 .contactMeta{display:grid;gap:10px}
.zp0951 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0951{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0951 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0951 .heroCopy{animation:enter-950 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-950{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0951 .hero{min-height:auto}
.zp0951 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0951 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0951 .nav nav{display:none}
.zp0951 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0951 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0951 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0951 .mobileMenu nav a{padding:10px 8px}
.zp0951 .hero,.zp0951 .indexHero{grid-template-columns:1fr}
.zp0951 .section,.zp0951 .sectionTitle,.zp0951 .hours,.zp0951 .contact{grid-template-columns:1fr}
.zp0951 .projects .projectGrid{grid-template-columns:1fr}
.zp0951 .projects article:nth-child(2){transform:none}
.zp0951 .section{display:block}}
@media(max-width:430px){.zp0951{font-size:16px}
.zp0951 .hero,.zp0951 .section,.zp0951 .contact{padding-left:18px;padding-right:18px}
.zp0951 .serviceGrid,.zp0951 .proof{grid-template-columns:1fr}
.zp0951 h1{font-size:clamp(42px,14vw,70px)}
.zp0951 .nav.index{grid-template-columns:1fr auto}
.zp0951 .nav.index>span{display:none}}

.zp0951 .heroActions a,.zp0951 .primary,.zp0951 .ctaBtn,.zp0951 .btnPrimary,.zp0951 .schedule>a,.zp0951 .newsletter>a{transition:all .2s ease}
.zp0951 .heroActions a:hover,.zp0951 .primary:hover,.zp0951 .ctaBtn:hover,.zp0951 .btnPrimary:hover{
  transform:rotate(2deg) scale(1.03)
}
.zp0951 nav a,.zp0951 .nav a,.zp0951 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0951 nav a:hover,.zp0951 .nav a:hover,.zp0951 .footer a:hover{
  color:var(--primary)
}
.zp0951 .serviceGrid article,.zp0951 .projectCard,.zp0951 .teamCard,.zp0951 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0951 .serviceGrid article:hover,.zp0951 .projectCard:hover,.zp0951 .teamCard:hover,.zp0951 .bentoCard:hover{
  transform:rotate(-1.5deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0951 *,.zp0951 *::before,.zp0951 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0951 a,.zp0951 button,.zp0951 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav index"><strong>{businessName}</strong><span>Index 01—03</span><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero indexHero"><ol><li>{services[0]}</li><li>{services[1]}</li><li>{services[2]}</li></ol><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scrapbook / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
