import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0155-university-pastel", "family": "Pastel", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|horizontal-strip|press-led|timeline>pricing>services>proof>availability>testimonial|capsule|editorial-serif", "industry": "university", "hero": "horizontal-strip", "navigation": "statement-bar", "layout": "press-led"};

export default function Template0155({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Atlas University Programme");
  const headline = String(content.headline || "Study, research, and community organised around meaningful real-world contribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Undergraduate study", "Graduate programmes", "Research", "Student life", "Admissions support"];
  const industryLabel = "University programme";
  const serviceNotes = ["Courses co-designed with industry partners so graduate skills meet real employer needs.", "Research-active faculty who bring live project experience into lectures.", "Industry placement years with 92% of students securing relevant roles.", "International exchange programmes at 60+ partner universities worldwide.", "Graduate outcome tracking with 18-month follow-up career support."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Top 20 nationally ranked", "TEF Silver or Gold", "Graduate employment: 93%", "Small seminar groups"];
  const testimonial = "The placement year was the best decision I made. My dissertation supervisor introduced me to the company I now work for.";
  const testimonialName = "Marrow client";
  const team = [{"name": "Tandem Lead", "role": "Principal / Lead"}, {"name": "Morrow Team", "role": "Client experience"}, {"name": "Cedar Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["University programme / Project A", "University programme / Project B", "University programme / Project C", "University programme / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Study, research, and community organised around meaningful real-world contribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ad7a45";
  return <main className="zp0155" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0155{--bg:#f8f2e8;--fg:#2e2723;--primary:#ad7a45;--primary-fg:#050505;--secondary:#716b56;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0155 *{box-sizing:border-box}
.zp0155 a{color:inherit;text-decoration:none}
.zp0155 h1,.zp0155 h2,.zp0155 h3,.zp0155 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0155 img{max-width:100%;display:block}
.zp0155 button,.zp0155 a{-webkit-tap-highlight-color:transparent}
.zp0155 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0155 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0155 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0155 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0155 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0155 .nav.statement>a{justify-self:end}
.zp0155 .mobileMenu{display:none}
.zp0155 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0155 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0155 .eyebrow,.zp0155 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0155 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0155 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0155 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0155 .heroActions a,.zp0155 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0155 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0155 .visual,.zp0155 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0155 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0155 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0155 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0155 .heroPhoto{object-fit:cover}
.zp0155 .stripHero{grid-template-columns:1.2fr .8fr;overflow:hidden}
.zp0155 .stripWord{position:absolute;left:0;top:12px;white-space:nowrap;font:900 clamp(40px,8vw,120px)/1 Georgia, serif;opacity:.08}
.zp0155 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0155 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0155 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0155 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0155 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0155 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0155 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0155 .serviceGrid p{color:var(--muted)}
.zp0155 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0155 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0155 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0155 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0155 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0155 .testimonial>div{align-self:end}
.zp0155 .testimonial span{display:block;opacity:.7}
.zp0155 details{border-top:1px solid var(--border);padding:20px 0}
.zp0155 details summary{font-weight:800;cursor:pointer}
.zp0155 details p{color:var(--muted);max-width:70ch}
.zp0155 .priceRows{border-top:1px solid var(--border)}
.zp0155 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0155 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0155 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0155 .timeline article{padding:20px 0}
.zp0155 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0155 .contact .eyebrow{color:var(--bg)}
.zp0155 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0155 .contactMeta{display:grid;gap:10px}
.zp0155 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0155 .heroCopy{animation:enter-154 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-154{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0155 .hero{min-height:auto}
.zp0155 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0155 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0155 .nav nav{display:none}
.zp0155 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0155 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0155 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0155 .mobileMenu nav a{padding:10px 8px}
.zp0155 .hero,.zp0155 .stripHero{grid-template-columns:1fr}
.zp0155 .section,.zp0155 .sectionTitle,.zp0155 .contact{grid-template-columns:1fr}
.zp0155 .testimonial{grid-template-columns:1fr}
.zp0155 .section{display:block}}
@media(max-width:430px){.zp0155{font-size:16px}
.zp0155 .hero,.zp0155 .section,.zp0155 .contact{padding-left:18px;padding-right:18px}
.zp0155 .serviceGrid,.zp0155 .proof{grid-template-columns:1fr}
.zp0155 h1{font-size:clamp(42px,14vw,70px)}
.zp0155 .priceRows article{grid-template-columns:1fr}
.zp0155 .nav.statement{grid-template-columns:1fr auto}
.zp0155 .nav.statement>span:first-child{display:none}}

.zp0155 .heroActions a,.zp0155 .primary,.zp0155 .ctaBtn,.zp0155 .btnPrimary,.zp0155 .schedule>a,.zp0155 .newsletter>a{transition:all .2s ease}
.zp0155 .heroActions a:hover,.zp0155 .primary:hover,.zp0155 .ctaBtn:hover,.zp0155 .btnPrimary:hover{
  opacity:.85;transform:scale(1.02)
}
.zp0155 nav a,.zp0155 .nav a,.zp0155 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0155 nav a:hover,.zp0155 .nav a:hover,.zp0155 .footer a:hover{
  color:var(--primary)
}
.zp0155 .serviceGrid article,.zp0155 .projectCard,.zp0155 .teamCard,.zp0155 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0155 .serviceGrid article:hover,.zp0155 .projectCard:hover,.zp0155 .teamCard:hover,.zp0155 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.08)
}
@media(prefers-reduced-motion:reduce){.zp0155 *,.zp0155 *::before,.zp0155 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0155 a,.zp0155 button,.zp0155 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero stripHero"><div className="stripWord">{businessName} — {businessName}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">54</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Pastel / press-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
