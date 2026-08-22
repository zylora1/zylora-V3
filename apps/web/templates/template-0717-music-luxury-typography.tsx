import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0717-music-luxury-typography", "family": "Luxury Typography", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|split-scroll|proof>services>security>products>awards>case-study>credentials|hard-outline|humanist-classic", "industry": "music", "hero": "side-caption", "navigation": "compact-floating", "layout": "split-scroll"};

export default function Template0717({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Musician");
  const headline = String(content.headline || "A direct home for the music, live dates, visuals, and everything listeners need next.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New release", "Live dates", "Videos", "Press kit", "Merch"];
  const industryLabel = "Musician";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Musician / Project A", "Musician / Project B", "Musician / Project C", "Musician / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A direct home for the music, live dates, visuals, and everything listeners need next. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0717" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0717{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0717 *{box-sizing:border-box}
.zp0717 a{color:inherit;text-decoration:none}
.zp0717 h1,.zp0717 h2,.zp0717 h3,.zp0717 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0717 img{max-width:100%;display:block}
.zp0717 button,.zp0717 a{-webkit-tap-highlight-color:transparent}
.zp0717 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0717 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0717 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0717 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0717 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0717 .mobileMenu{display:none}
.zp0717 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0717 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0717 .eyebrow,.zp0717 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0717 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0717 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0717 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0717 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0717 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0717 .visual,.zp0717 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0717 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0717 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0717 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0717 .heroPhoto{object-fit:cover}
.zp0717 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0717 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0717 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0717 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0717 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0717 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0717 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0717 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0717 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0717 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0717 .serviceGrid p{color:var(--muted)}
.zp0717 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0717 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0717 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0717 details{border-top:1px solid var(--border);padding:20px 0}
.zp0717 details summary{font-weight:800;cursor:pointer}
.zp0717 details p{color:var(--muted);max-width:70ch}
.zp0717 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0717 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0717 .projects article:nth-child(2){transform:translateY(32px)}
.zp0717 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0717 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0717 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0717 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0717 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0717 .p1,.zp0717 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0717 .awards>div{max-width:800px;margin-left:auto}
.zp0717 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0717 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0717 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0717 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0717 .contact .eyebrow{color:var(--bg)}
.zp0717 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0717 .contactMeta{display:grid;gap:10px}
.zp0717 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0717 .heroCopy{animation:enter-716 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-716{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0717 .hero{min-height:auto}
.zp0717 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0717 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0717 .nav nav{display:none}
.zp0717 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0717 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0717 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0717 .mobileMenu nav a{padding:10px 8px}
.zp0717 .hero,.zp0717 .captionHero{grid-template-columns:1fr}
.zp0717 .section,.zp0717 .sectionTitle,.zp0717 .security,.zp0717 .contact{grid-template-columns:1fr}
.zp0717 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0717 .projects .projectGrid{grid-template-columns:1fr}
.zp0717 .projects article:nth-child(2){transform:none}
.zp0717 .section{display:block}}
@media(max-width:430px){.zp0717{font-size:16px}
.zp0717 .hero,.zp0717 .section,.zp0717 .contact{padding-left:18px;padding-right:18px}
.zp0717 .serviceGrid,.zp0717 .proof,.zp0717 .collectionGrid{grid-template-columns:1fr}
.zp0717 h1{font-size:clamp(42px,14vw,70px)}}

.zp0717 .heroActions a,.zp0717 .primary,.zp0717 .ctaBtn,.zp0717 .btnPrimary,.zp0717 .schedule>a,.zp0717 .newsletter>a{transition:all .2s ease}
.zp0717 .heroActions a:hover,.zp0717 .primary:hover,.zp0717 .ctaBtn:hover,.zp0717 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0717 nav a,.zp0717 .nav a,.zp0717 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0717 nav a:hover,.zp0717 .nav a:hover,.zp0717 .footer a:hover{
  opacity:.65
}
.zp0717 .serviceGrid article,.zp0717 .projectCard,.zp0717 .teamCard,.zp0717 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0717 .serviceGrid article:hover,.zp0717 .projectCard:hover,.zp0717 .teamCard:hover,.zp0717 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0717 *,.zp0717 *::before,.zp0717 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0717 a,.zp0717 button,.zp0717 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">16</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Reserve a table</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Reserve a table</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Typography / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
