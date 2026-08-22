import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0125-sports-bauhaus", "family": "Bauhaus", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|case-study-led|products>services>process>values>programmes>proof|hard-outline|condensed-editorial", "industry": "sports", "hero": "floating-panels", "navigation": "compact-floating", "layout": "case-study-led"};

export default function Template0125({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Sports Academy");
  const headline = String(content.headline || "Structured coaching that turns practice time into visible performance gains.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Youth development", "Private coaching", "Team programmes", "Performance camps", "Video analysis"];
  const industryLabel = "Sports academy";
  const serviceNotes = ["Youth development pathways from age 6 through junior competition level.", "Elite performance analysis using video and GPS tracking data.", "Strength and conditioning programmes designed for your specific sport.", "Group training camps during school holidays and pre-season blocks.", "Mental performance coaching integrated into the performance plan."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["FA/LTA/BA accredited", "DBS checked coaches", "Performance data tracking", "Sibling discounts available"];
  const testimonial = "My son went from struggling to starting on the first team in one season. The coaching is serious without being intimidating.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Sports academy / Project A", "Sports academy / Project B", "Sports academy / Project C", "Sports academy / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Structured coaching that turns practice time into visible performance gains. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0125" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0125{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0125 *{box-sizing:border-box}
.zp0125 a{color:inherit;text-decoration:none}
.zp0125 h1,.zp0125 h2,.zp0125 h3,.zp0125 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0125 img{max-width:100%;display:block}
.zp0125 button,.zp0125 a{-webkit-tap-highlight-color:transparent}
.zp0125 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0125 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0125 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0125 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0125 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0125 .mobileMenu{display:none}
.zp0125 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0125 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0125 .eyebrow,.zp0125 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0125 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0125 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0125 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0125 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0125 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0125 .visual,.zp0125 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0125 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0125 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0125 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0125 .heroPhoto{object-fit:cover}
.zp0125 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0125 .floatStack{position:relative;min-height:500px}
.zp0125 .floatStack>*{position:absolute}
.zp0125 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0125 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0125 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0125 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0125 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0125 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0125 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0125 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0125 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0125 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0125 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0125 .serviceGrid p{color:var(--muted)}
.zp0125 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0125 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0125 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0125 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0125 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0125 details{border-top:1px solid var(--border);padding:20px 0}
.zp0125 details summary{font-weight:800;cursor:pointer}
.zp0125 details p{color:var(--muted);max-width:70ch}
.zp0125 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0125 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0125 .p1,.zp0125 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0125 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Arial Narrow, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0125 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0125 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0125 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0125 .contact .eyebrow{color:var(--bg)}
.zp0125 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0125 .contactMeta{display:grid;gap:10px}
.zp0125 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0125 .heroCopy{animation:enter-124 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-124{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0125 .hero{min-height:auto}
.zp0125 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0125 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0125 .nav nav{display:none}
.zp0125 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0125 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0125 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0125 .mobileMenu nav a{padding:10px 8px}
.zp0125 .hero,.zp0125 .floatingHero{grid-template-columns:1fr}
.zp0125 .section,.zp0125 .sectionTitle,.zp0125 .contact{grid-template-columns:1fr}
.zp0125 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0125 .section{display:block}}
@media(max-width:430px){.zp0125{font-size:16px}
.zp0125 .hero,.zp0125 .section,.zp0125 .contact{padding-left:18px;padding-right:18px}
.zp0125 .serviceGrid,.zp0125 .proof,.zp0125 .collectionGrid,.zp0125 .programmes>div:last-child{grid-template-columns:1fr}
.zp0125 h1{font-size:clamp(42px,14vw,70px)}}

.zp0125 .heroActions a,.zp0125 .primary,.zp0125 .ctaBtn,.zp0125 .btnPrimary,.zp0125 .schedule>a,.zp0125 .newsletter>a{transition:all .2s ease}
.zp0125 .heroActions a:hover,.zp0125 .primary:hover,.zp0125 .ctaBtn:hover,.zp0125 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0125 nav a,.zp0125 .nav a,.zp0125 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0125 nav a:hover,.zp0125 .nav a:hover,.zp0125 .footer a:hover{
  color:var(--primary)
}
.zp0125 .serviceGrid article,.zp0125 .projectCard,.zp0125 .teamCard,.zp0125 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0125 .serviceGrid article:hover,.zp0125 .projectCard:hover,.zp0125 .teamCard:hover,.zp0125 .bentoCard:hover{
  outline:3px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0125 *,.zp0125 *::before,.zp0125 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0125 a,.zp0125 button,.zp0125 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">24</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bauhaus / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
