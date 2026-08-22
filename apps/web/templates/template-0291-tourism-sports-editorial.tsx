import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0291-tourism-sports-editorial", "family": "Sports Editorial", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "split-logo|diagonal-cut|story-first|proof>timeline>features>case-study>services>values>availability|inset-panel|poster", "industry": "tourism", "hero": "diagonal-cut", "navigation": "split-logo", "layout": "story-first"};

export default function Template0291({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Harbor Tour Operator");
  const headline = String(content.headline || "Local guides, small groups, and itineraries that go beyond the obvious stops.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["City walks", "Food tours", "Day trips", "Private guides", "Group bookings"];
  const industryLabel = "Tour operator";
  const serviceNotes = ["Local expert guides who grew up here — the stories go beyond what's in guidebooks.", "Self-guided option with offline maps, audio and curated route recommendations.", "Group tour sizes capped at 10 to keep the experience personal and unhurried.", "Seasonal itineraries that take advantage of each quarter's unique conditions.", "Accessible route options with advance notice — contact us to discuss requirements."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Licensed tour operators", "Available in 6 languages", "Wheelchair-accessible options", "Private group options"];
  const testimonial = "Our guide knew every shop owner and craftsperson on the route. You can't get that from a travel app.";
  const team = [{"name": "Cedar Lead", "role": "Principal / Lead"}, {"name": "Arc Team", "role": "Client experience"}, {"name": "Slate Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tour operator / Project A", "Tour operator / Project B", "Tour operator / Project C", "Tour operator / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Local guides, small groups, and itineraries that go beyond the obvious stops. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  return <main className="zp0291" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0291{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0291 *{box-sizing:border-box}
.zp0291 a{color:inherit;text-decoration:none}
.zp0291 h1,.zp0291 h2,.zp0291 h3,.zp0291 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0291 img{max-width:100%;display:block}
.zp0291 button,.zp0291 a{-webkit-tap-highlight-color:transparent}
.zp0291 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0291 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0291 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0291 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0291 .mobileMenu{display:none}
.zp0291 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0291 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0291 .eyebrow,.zp0291 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0291 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0291 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0291 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0291 .heroActions a,.zp0291 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0291 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0291 .visual,.zp0291 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0291 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0291 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0291 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0291 .heroPhoto{object-fit:cover}
.zp0291 .diagonalHero{grid-template-columns:1.15fr .85fr}
.zp0291 .diagonalVisual{clip-path:polygon(22% 0,100% 0,78% 100%,0 100%)}
.zp0291 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0291 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0291 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0291 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0291 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0291 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0291 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0291 .serviceGrid p{color:var(--muted)}
.zp0291 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0291 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0291 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0291 details{border-top:1px solid var(--border);padding:20px 0}
.zp0291 details summary{font-weight:800;cursor:pointer}
.zp0291 details p{color:var(--muted);max-width:70ch}
.zp0291 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0291 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0291 .projects article:nth-child(2){transform:translateY(32px)}
.zp0291 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0291 .features ul{list-style:none;margin:0;padding:0}
.zp0291 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0291 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0291 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0291 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0291 .timeline article{padding:20px 0}
.zp0291 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0291 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0291 .contact .eyebrow{color:var(--bg)}
.zp0291 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0291 .contactMeta{display:grid;gap:10px}
.zp0291 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0291 .heroCopy{animation:enter-290 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-290{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0291 .hero{min-height:auto}
.zp0291 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0291 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0291 .nav nav{display:none}
.zp0291 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0291 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0291 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0291 .mobileMenu nav a{padding:10px 8px}
.zp0291 .hero,.zp0291 .diagonalHero{grid-template-columns:1fr}
.zp0291 .section,.zp0291 .sectionTitle,.zp0291 .features,.zp0291 .contact{grid-template-columns:1fr}
.zp0291 .projects .projectGrid{grid-template-columns:1fr}
.zp0291 .projects article:nth-child(2){transform:none}
.zp0291 .section{display:block}}
@media(max-width:430px){.zp0291{font-size:16px}
.zp0291 .hero,.zp0291 .section,.zp0291 .contact{padding-left:18px;padding-right:18px}
.zp0291 .serviceGrid,.zp0291 .proof{grid-template-columns:1fr}
.zp0291 h1{font-size:clamp(42px,14vw,70px)}}

.zp0291 .heroActions a,.zp0291 .primary,.zp0291 .ctaBtn,.zp0291 .btnPrimary,.zp0291 .schedule>a,.zp0291 .newsletter>a{transition:all .2s ease}
.zp0291 .heroActions a:hover,.zp0291 .primary:hover,.zp0291 .ctaBtn:hover,.zp0291 .btnPrimary:hover{
  opacity:.8
}
.zp0291 nav a,.zp0291 .nav a,.zp0291 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0291 nav a:hover,.zp0291 .nav a:hover,.zp0291 .footer a:hover{
  color:var(--primary)
}
.zp0291 .serviceGrid article,.zp0291 .projectCard,.zp0291 .teamCard,.zp0291 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0291 .serviceGrid article:hover,.zp0291 .projectCard:hover,.zp0291 .teamCard:hover,.zp0291 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0291 *,.zp0291 *::before,.zp0291 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0291 a,.zp0291 button,.zp0291 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero diagonalHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="diagonalVisual">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">90</span><div className="visualMark"/><small>{businessName}</small></div>}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Sports Editorial / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
