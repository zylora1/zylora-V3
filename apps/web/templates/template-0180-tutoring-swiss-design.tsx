import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0180-tutoring-swiss-design", "family": "Swiss Design", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|catalogue-table|menu>pricing>services>destinations>features>proof>newsletter|cut-corners|literary", "industry": "tutoring", "hero": "product-led", "navigation": "transparent-overlay", "layout": "catalogue-table"};

export default function Template0180({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Tutoring Service");
  const headline = String(content.headline || "One-to-one learning support shaped around the student, not a fixed worksheet.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Math tutoring", "Science tutoring", "Language support", "Exam revision", "Study planning"];
  const industryLabel = "Tutoring service";
  const serviceNotes = ["Subject specialists with teaching experience, not just degree holders.", "Diagnostic assessment in the first session to find gaps, not just reinforce strengths.", "Exam technique coaching alongside subject knowledge — both matter equally.", "Flexible booking: weekly recurring, intensive blocks, or exam-season only.", "Parent briefings every six weeks with written progress summaries."];
  const proofPoints = ["QTS and subject specialists", "98% report grade improvement", "DBS enhanced checked", "Flexible scheduling"];
  const testimonial = "My daughter went from a predicted C to an A in English. The tutor spotted the exact issue in session one.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Tutoring service / Project A", "Tutoring service / Project B", "Tutoring service / Project C", "Tutoring service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "One-to-one learning support shaped around the student, not a fixed worksheet. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0180" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0180{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:none;--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0180 *{box-sizing:border-box}
.zp0180 a{color:inherit;text-decoration:none}
.zp0180 h1,.zp0180 h2,.zp0180 h3,.zp0180 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0180 img{max-width:100%;display:block}
.zp0180 button,.zp0180 a{-webkit-tap-highlight-color:transparent}
.zp0180 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0180 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0180 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0180 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0180 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0180 .mobileMenu{display:none}
.zp0180 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0180 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0180 .eyebrow,.zp0180 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0180 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0180 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0180 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0180 .heroActions a,.zp0180 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0180 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0180 .visual,.zp0180 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0180 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0180 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0180 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0180 .heroPhoto{object-fit:cover}
.zp0180 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0180 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0180 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0180 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0180 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0180 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0180 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0180 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0180 .serviceGrid p{color:var(--muted)}
.zp0180 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0180 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0180 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0180 details{border-top:1px solid var(--border);padding:20px 0}
.zp0180 details summary{font-weight:800;cursor:pointer}
.zp0180 details p{color:var(--muted);max-width:70ch}
.zp0180 .priceRows{border-top:1px solid var(--border)}
.zp0180 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0180 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0180 .features ul{list-style:none;margin:0;padding:0}
.zp0180 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0180 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0180 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0180 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0180 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0180 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0180 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0180 .contact .eyebrow{color:var(--bg)}
.zp0180 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0180 .contactMeta{display:grid;gap:10px}
.zp0180 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0180 .heroCopy{animation:enter-179 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-179{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0180 .hero{min-height:auto}
.zp0180 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0180 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0180 .nav nav{display:none}
.zp0180 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0180 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0180 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0180 .mobileMenu nav a{padding:10px 8px}
.zp0180 .hero,.zp0180 .productLedHero{grid-template-columns:1fr}
.zp0180 .section,.zp0180 .sectionTitle,.zp0180 .features,.zp0180 .contact{grid-template-columns:1fr}
.zp0180 .section{display:block}}
@media(max-width:430px){.zp0180{font-size:16px}
.zp0180 .hero,.zp0180 .section,.zp0180 .contact{padding-left:18px;padding-right:18px}
.zp0180 .serviceGrid,.zp0180 .proof,.zp0180 .destinations>div:last-child{grid-template-columns:1fr}
.zp0180 h1{font-size:clamp(42px,14vw,70px)}
.zp0180 .priceRows article{grid-template-columns:1fr}}

.zp0180 .heroActions a,.zp0180 .primary,.zp0180 .ctaBtn,.zp0180 .btnPrimary,.zp0180 .schedule>a,.zp0180 .newsletter>a{transition:all .2s ease}
.zp0180 .heroActions a:hover,.zp0180 .primary:hover,.zp0180 .ctaBtn:hover,.zp0180 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0180 nav a,.zp0180 .nav a,.zp0180 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0180 nav a:hover,.zp0180 .nav a:hover,.zp0180 .footer a:hover{
  text-decoration:underline
}
.zp0180 .serviceGrid article,.zp0180 .projectCard,.zp0180 .teamCard,.zp0180 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0180 .serviceGrid article:hover,.zp0180 .projectCard:hover,.zp0180 .teamCard:hover,.zp0180 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0180 *,.zp0180 *::before,.zp0180 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0180 a,.zp0180 button,.zp0180 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">79</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / catalogue-table</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
